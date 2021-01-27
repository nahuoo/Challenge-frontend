import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const MessageWrapper = styled.div`
  width: 100%;
  padding: 32px 16px;
  background-color: rgba(${colors.rgbMainWhite}, 0.8);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 64px;
  }
`

export const ErrorMessage = styled.h2`
  font-size: 20px;
  color: ${colors.secBlue};
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: center;
`
