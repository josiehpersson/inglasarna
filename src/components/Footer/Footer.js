import React from 'react'
import { Container, Typography, Box} from '@material-ui/core'

import useStyles from './styles'
export default function Footer() {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>
      <Typography>
        <Box mt={3} mb={0.5} fontSize={18} fontFamily="Spinnaker">KONTAKT</Box>
        <Box mb={3} fontSize={12} fontFamily="Roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum.</Box>
      </Typography>
      <Typography>
        <Box mt={3} mb={0.5} ml={2.5} fontSize={18} fontFamily="Spinnaker">FAQ</Box>
        <Box mb={3} ml={2.5} fontSize={12} fontFamily="Roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum.</Box>
      </Typography>
    </Container>
  )
}
