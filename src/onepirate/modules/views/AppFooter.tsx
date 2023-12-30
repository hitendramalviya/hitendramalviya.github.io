import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="http://hitendramalviya.com/">
        hitendramalviya.com
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  fontSize: 24,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

// const LANGUAGES = [
//   {
//     code: "en-US",
//     name: "English",
//   },
//   {
//     code: "fr-FR",
//     name: "Français",
//   },
// ];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component="a"
                  href="https://www.facebook.com/hitendra.malviya"
                  sx={iconStyle}
                >
                  {/* <img
                    src="/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  /> */}
                  <i className="fab fa-facebook" />
                </Box>
                <Box
                  component="a"
                  href="https://twitter.com/hitendramalviya"
                  sx={iconStyle}
                >
                  {/* <img src="/static/themes/onepirate/appFooterX.png" alt="X" /> */}
                  <i className="fab fa-twitter" />
                </Box>
                <Box
                  component="a"
                  href="https://www.linkedin.com/in/hitendra-malviya-38398918/"
                  sx={iconStyle}
                >
                  {/* <img src="/static/themes/onepirate/appFooterX.png" alt="X" /> */}
                  <i className="fab fa-linkedin" />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            {/* <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box> */}
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            {/* <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField> */}
          </Grid>
          <Grid item>
            <Typography variant="caption">
              <Link
                href="https://www.flaticon.com/free-icons/knowledge-transfer"
                title="knowledge transfer icons"
              >
                Knowledge transfer icons created by Freepik - Flaticon
              </Link>
              {/* {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link> */}
            </Typography>
            <br />
            <Typography variant="caption">
              <Link
                href="https://www.flaticon.com/free-icons/leader"
                title="leader icons"
              >
                Leader icons created by Adrien Coquet - Flaticon
              </Link>
            </Typography>
            <br />
            <Typography variant="caption">
              <Link
                href="https://www.flaticon.com/free-icons/customer-experience"
                title="customer experience icons"
              >
                Customer experience icons created by Uniconlabs - Flaticon
              </Link>
            </Typography>
            <br />
            <Typography variant="caption">
              <Link
                href="https://www.flaticon.com/free-icons/deal"
                title="deal icons"
              >
                Deal icons created by Design Circle - Flaticon
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
