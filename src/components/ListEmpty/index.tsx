import React from 'react'
import { Container, Message } from './styles'

interface Props {
  message: string
}

export const ListEmpty = ({ message }: Props) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
