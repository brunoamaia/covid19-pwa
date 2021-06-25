import React, { memo } from 'react'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

function Card({ value, label, color }) {
  if (value > 999999999) {
    const newValue = value.toString().split('')
    newValue.splice(-3, 0, ".")
    newValue.splice(-7, 0, ".")
    newValue.splice(-11, 0, ".")
    value = newValue.join('')
  } else if (value > 999999) {
    const newValue = value.toString().split('')
    newValue.splice(-3, 0, ".")
    newValue.splice(-7, 0, ".")
    value = newValue.join('')
  } else if (value > 999) {
    const newValue = value.toString().split('')
    newValue.splice(-3, 0, ".")
    value = newValue.join('')
  }

  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)