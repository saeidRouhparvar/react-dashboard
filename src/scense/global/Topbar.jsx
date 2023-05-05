import { Box, useTheme } from "@mui/material"
import { useContext } from "react"
import {colerModeContext, tokens} from '../../theme'
import InputBase from "@mui/material"
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlinedIcon'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlinedIcon'
// import NotificationsModeOutlinedIcon from '@mui/icons-material/NotificationsModeOutlinedIcon'
// import SettingsModeOutlinedIcon from '@mui/icons-material/SettingsModeOutlinedIcon'
// import PersonModeOutlinedIcon from '@mui/icons-material/PersonModeOutlinedIcon'
// import SearchIcon from '@mui/icons-material/Search'

const Topbar = () => {
const theme = useTheme()
const colors = tokens(theme.palette.mode)
const colorMode = useContext(colerModeContext)
  return (
   <Box display={'flex'} justifyContent={'space-between'} p={2}>He</Box>
  )
}
