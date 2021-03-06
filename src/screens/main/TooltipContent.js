import React, { Component } from 'react'
import VerticalFlowLayout from '../../layouts/VerticalFlowLayout'
import {CommonRegularText} from '../../components/text'
import Separator from '../../components/Separator'
import {em} from '../../common'
import { TouchableOpacity } from "react-native"

class TooltipContent extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <VerticalFlowLayout>
          <TouchableOpacity onPress={() => {
              this.props.onItemClick(1)
          }}>
            <CommonRegularText theme="gray" style={[styles.tooltipItem, {marginTop: 20 * em}]}>Date de démarrage</CommonRegularText>
          </TouchableOpacity>
          <Separator thickness = {1} style={styles.tooltipSeparator}/>
          <TouchableOpacity onPress={() => {
              this.props.onItemClick(2)
          }}>
            <CommonRegularText theme="gray" style={styles.tooltipItem}>Type de contrat</CommonRegularText>
          </TouchableOpacity>
          <Separator thickness = {1} style={styles.tooltipSeparator}/>
          <TouchableOpacity onPress={() => {
              this.props.onItemClick(3)
          }}>
            <CommonRegularText theme="gray" style={styles.tooltipItem}>Ville</CommonRegularText>
          </TouchableOpacity>
          <Separator thickness = {1} style={styles.tooltipSeparator}/>
          <TouchableOpacity onPress={() => {
              this.props.onItemClick(4)
          }}>
            <CommonRegularText theme="gray" style={[styles.tooltipItem, {marginBottom: 20 * em}]}>Secteur de d'activité</CommonRegularText>
          </TouchableOpacity>
        </VerticalFlowLayout>
      )
    }
}

const styles = {
  tooltipItem: {
    marginTop: 10 * em,
    marginBottom: 10 * em,
  },
  tooltipSeparator: {
    width: 100 * em,
    backgroundColor: "#f5f6fa",
  }
}

export default TooltipContent
