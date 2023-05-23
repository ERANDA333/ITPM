import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        SupportED
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const CopyRight = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: theme.spacing(6, 'auto'),
}));

const Address = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
  marginLeft: 20,
}));

const Social = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2, 'auto'),
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
}));

export default function FixedBottomNavigation() {
  return (
    <FooterContainer>
      <CssBaseline />
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={6} md={4}>
            <Address>
              <Typography fontSize={18}>SupportED</Typography>
              <Typography fontSize={16}>Contact Us</Typography>
              <Typography fontSize={14}>Phone: 071 0000111/ 011 2000 111</Typography>
              <Typography fontSize={14}>
                Email: {" "}
                <Link color="inherit" href="mailto:supported@gmail.com">
                  supported@gmail.com
                </Link>
              </Typography>
            </Address>
          </Grid>
          <Grid item xs={6} md={4}>
            <CopyRight>
              <Copyright />
            </CopyRight>
          </Grid>
          <Grid item xs={6} md={4}>
            <Social>
              <Typography>Follow us on</Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                padding={1}
              >
                <IconButton aria-label="facebook">
                  <FacebookRoundedIcon />
                </IconButton>
                <IconButton aria-label="email">
                  <MailOutlineRoundedIcon />
                </IconButton>
                <IconButton aria-label="linkedin">
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="twitter">
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Social>
          </Grid>
        </Grid>
      </Paper>
    </FooterContainer>
  );
}
