// import { createMuiTheme } from '@material-ui/core/styles'
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  wrapper: {
    width: '100%',
    maxWidth: '824px'
  },
  palette: {
    primary: {
      main: '#69BCFF',
      dark: '#2196F3'
    },
    success: {
      main: '#66BB6A'
    },
    danger: {
      main: '#FF9100'
    },
    info: {
      main: '#5C6BC0'
    },
    grey: {
      main: '#282E2999'
    },
    dark:{
      main: '#252525'
    }
  },
  typography: {
    body1: {
      fontSize: '1.2em'
    },
    body2: {
      fontSize: '.98em'
    }
  }
})

export default theme
