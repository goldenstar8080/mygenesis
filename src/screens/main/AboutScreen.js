import React, { Component } from 'react'
import { TouchableOpacity, StatusBar, Image, View } from "react-native"
import { Actions } from 'react-native-router-flux'
import {TitleText, CommonText, CommonRegularText, MediumText} from '../../components/text'
import {em, WIDTH} from '../../common'
import AccountLayout from '../../layouts/AccountLayout'
import HorizontalJustifyLayout from '../../layouts/HorizontalJustifyLayout'
import VerticalCenterFlowLayout from '../../layouts/VerticalCenterFlowLayout'
import RoundButton from '../../components/button/RoundButton'
import LogoView from '../../components/LogoView'
import commonStyles from '../../components/common_styles';

class AboutScreen extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <AccountLayout style={{paddingLeft: '5%', paddingRight: '5%'}}>
        <StatusBar
          barstyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <HorizontalJustifyLayout style={{marginTop: 25 * em}}>
          <TouchableOpacity
            onPress={() => {
            this.props.navigation.goBack()
          }}>
            <Image source={require('../../assets/images/ic_back.png')} style={{width: 30*em, height: 30*em}} resizeMode={'stretch'} />
          </TouchableOpacity>
          <CommonText theme="blue_gray" style={{marginLeft: 5 * em}}>A propos de My Genesis</CommonText>
          <View style={{width: 30*em}}/>
        </HorizontalJustifyLayout>
        <VerticalCenterFlowLayout
          style={[
            {
              padding: '5%',
              backgroundColor: '#ffffff',
              borderRadius: 20 * em,
              width: '100%', //WIDTH * 0.85,
              marginVertical: 20 * em,
            },
            commonStyles.shadow.card,
          ]}>
          <LogoView size="medium" textShow="false"/>
          <TitleText theme="black" style={{marginTop: 15*em}}>Lorem ipsumundefined</TitleText>
          <CommonRegularText theme="gray" style={{marginTop: 15*em, textAlign:"center"}}>
            Venez matcher avec Cyllenene!{"\n"}
            Cyllene c'est 400 collaborateurs, qui{"\n"}
            accompagnent quotidiennement leurs{"\n"}
            clients dans le domaine du numerique et{"\n"}
            de la gestion des donnees : hebergement{"\n"}
            en Datacenters prives ou en Cloud{"\n"}
            public, Cyber securite, developpement{"\n"}
            web & mobile, marketing digital,{"\n"}
            solutions collaboratives...
          </CommonRegularText>
          <Image
            source={require('../../assets/images/my_genesis_review.png')}
            style={{width: '95%', borderRadius: 15*em, marginTop: 15*em}}
            resizeMode={'stretch'}
          />
          <TitleText theme="black" style={{marginTop: 15*em}}>
            Lorem ipsumundefined
          </TitleText>
          <CommonRegularText theme="gray" style={{marginTop: 15*em, textAlign:"center"}}>
            Venez matcher avec Cyllenene!{"\n"}
            Cyllene c'est 400 collaborateurs, qui{"\n"}
            accompagnent quotidiennement leurs{"\n"}
            clients dans le domaine du numerique et{"\n"}
            de la gestion des donnees : hebergement{"\n"}
            en Datacenters prives ou en Cloud{"\n"}
            public, Cyber securite, developpement{"\n"}
            web & mobile, marketing digital,{"\n"}
            solutions collaboratives...
          </CommonRegularText>
          <TouchableOpacity style={{width: '95%'}} onPress={() => Actions.contactus()}>
            <RoundButton
              text="Nous contacter"
              rightIcon="next"
              // width={'100%'}
              style={{marginTop: 15 * em}}
            />
          </TouchableOpacity>
        </VerticalCenterFlowLayout>
      </AccountLayout>
    );
  }
}

export default AboutScreen
