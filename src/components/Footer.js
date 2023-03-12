import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="70px" bgcolor="#FFFFFF">
    <Stack gap="0px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '350px', height: '100px' } } />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made by 😊 Sahil Ganbhoj</Typography>
  </Box>
);

export default Footer;