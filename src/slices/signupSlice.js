import {createSlice} from '@reduxjs/toolkit'
import { attempSignup } from '../utils/firebase/signup'
import { createAccount } from '../utils/firebase/database'
import {createStorageReferenceToFile} from '../utils/firebase/storage'
import {showRootToast} from '../utils/misc'
import { Actions } from 'react-native-router-flux'

const initialState = {
  isFetching: false,
  statusMessage: '',
  statusMessageType: '',
  signupInfo: null
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    trySignup: state => {
      state.isFetching = true
    },
    signupSuccess: (state, { payload }) => {
      state.isFetching = false
      state.statusMessage = payload.statusMessage
      state.statusMessageType = "success"
    },
    signupFailure: (state, { payload }) => {
      state.isFetching = false
      state.statusMessage = payload.statusMessage
      state.statusMessageType = "danger"
    },
  },
})

export const { trySignup, signupSuccess, signupFailure } = signupSlice.actions
export const signupSelector = state => state.signup
export default signupSlice.reducer

export function signupWithInfo(signupInfo, activityArea, job, localFilePath, cvFileName) {
  const {email, password} = signupInfo
  return async dispatch => {
    dispatch(trySignup())
    const res = await attempSignup({email, password})
    console.log("Attemp to sign up res", res)
    if (res.error) {
      dispatch(signupFailure({statusMessage: res.error}))
      showRootToast(res.error)
      return
    }

    const storageRef = await createStorageReferenceToFile()
    const uploadRes = await storageRef.putFile(localFilePath)
    console.log("Storage upload res", res)
    if (uploadRes.error) {
      dispatch(signupFailure({statusMessage: uploadRes.error}))
      showRootToast(uploadRes.error)
      return
    }

    const cvFirebasePath = await storageRef.getDownloadURL()
    // const cvFirebasePath = "cv.pdf"

    var newSignupInfo = {
      cvFirebasePath,
      cvFileName,
      job,
      activityArea,
      ...signupInfo
    }

    const createAccountRes = await createAccount({credential: res.credential, signupInfo: newSignupInfo})
    console.log("Create account res", createAccountRes)
    if (createAccountRes.error) {
      dispatch(signupFailure({statusMessage: createAccountRes.error}))
      showRootToast(createAccountRes.error)
      return
    }
    dispatch(signupSuccess({credential: createAccountRes.credential}))
    Actions.reset("login")
  }
}
