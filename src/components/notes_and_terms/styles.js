import React from 'react'
import styled from 'styled-components'

export const Panel = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: sans-serif;
  font-size: 18px;
`

export const FormGroup = styled.div`
  flex: 1;
  margin-bottom: 10px;
`

export const Label = styled.label`
  padding-bottom: 0;
  margin-bottom: 0;
`

export const LabelTitle = styled.h3`
  padding: 0;
  margin: 0;
`

export const TextBox = styled.textarea`
  width: 100%;
  padding: 2px 10px;
  font-size: 18px;
  border-radius: 5px;
`

export const ActionGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Button = styled.button`
  margin: 10px 0;
  padding: 7px 15px;
  border-radius: 5%;
  background-color: ${props => props.disabled ? 'LightGrey' : 'BlueViolet'};
  color: White;
  font-size: 1.2em;
  font-weight: bold;
`

export const Success = styled.span`
  padding: 0 20px;
  color: Green;
  font-size: 1em;
  font-weight: bold;
`

export const Failure = styled.span`
  padding: 0 20px;
  color: Red;
  font-size: 1em;
  font-style: italic;
`
