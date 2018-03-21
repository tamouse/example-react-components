import styled, {keyframes} from 'styled-components'

export const App = styled.div`
  text-align: center;
`

export const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

export const AppTitle = styled.h1`
  font-size: 1.5em;
`

export const AppIntro = styled.p`
  font-size: large;
`

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }  
`

export const AppLogo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`



/**


 .App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

 @keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

 */
