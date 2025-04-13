"use client";

import React from 'react'

import { Controller } from "react-hook-form"
import { InputContainer, IconContainer, InputText, ErrorText } from './style'
import { IInput } from './types'

const Input = ({ leftIcon, name, errorMessage, control, maxLength, ...rest }: IInput) => {
  return (
    <>
    <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} maxLength={maxLength} {...rest}  />}
        />
    </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input };