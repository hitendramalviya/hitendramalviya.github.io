// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKAvatar from "./components/MKAvatar";
import MKBox from "./components/MKBox";
// import MKButton from "./components/MKButton";
import MKTypography from "./components/MKTypography";
import theme from "./assets/theme";

// Images
import bgImage from "./assets/images/bg2.jpg";
import profilePicture from "./assets/images/me.png";

const AboutMe = () => {
  return (
    <MKBox
      minHeight="100vh"
      width="100%"
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }: any) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              src={profilePicture}
              alt="Burce Mars"
              size="xxl"
              shadow="xl"
            />
          </MKBox>
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }: any) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            ReactRover & JavaScript Jedi
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            opacity={0.8}
            mt={1}
            mb={3}
            sx={{ textAlign: "justify" }}
          >
            Embarking on a digital journey, I'm your ReactRover, exploring
            front-end realms with curiosity. As a JavaScript Jedi, I infuse
            wisdom into code, seeking elegant solutions like an artist with a
            brush.
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            opacity={0.8}
            mt={1}
            mb={3}
            sx={{ textAlign: "justify" }}
          >
            In React's world, I architect applications to captivate. Beyond
            code, I'm a mentor fostering fast learning and collaborative growth.
            Challenges are not roadblocks; they're chances to innovate. Join me
            in transforming code into impactful stories. I'm not just a
            developer; I'm a guide, a mentor, and a fellow explorer in the world
            of front-end brilliance. May the joy of coding be with you!
            #CodeCurator #ReactMagic #JavaScriptWisdom #InnovateWithCode
            #JoyfulCoding
          </MKTypography>
          {/* <MKButton
            color="default"
            sx={{ color: ({ palette: { dark } }) => dark.main }}
          >
            create account
          </MKButton> */}
          <MKTypography variant="h6" color="white" mt={4} mb={1}>
            Follow me on
          </MKTypography>
          <MKBox display="flex" justifyContent="center" alignItems="center">
            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="https://www.facebook.com/hitendra.malviya"
              mr={3}
              target="blank"
            >
              <i className="fab fa-facebook" />
            </MKTypography>
            {/* <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="#"
              mr={3}
            >
              <i className="fab fa-instagram" />
            </MKTypography> */}
            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="https://twitter.com/hitendramalviya"
              mr={3}
              target="blank"
            >
              <i className="fab fa-twitter" />
            </MKTypography>
            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="https://www.linkedin.com/in/hitendra-malviya-38398918/"
              target="blank"
            >
              <i className="fab fa-linkedin" />
            </MKTypography>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AboutMe />
      {/* <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes> */}
    </ThemeProvider>
  );
};

export default App;
