// import TagIcon from "@mui/icons-material/Tag";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage = new URL(
  "../../../assets/images/bg2.jpg",
  import.meta.url
).href;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        React-Rover & JavaScript Jedi
      </Typography>
      {/* <Stack
        direction="column"
        spacing={1}
        sx={{ mb: 4, mt: { xs: 4, sm: 6 } }}
      >
        <Chip icon={<TagIcon />} label="ReactMagic" color="info" />
        <Chip icon={<TagIcon />} label="JavaScriptWisdom" color="info" />
        <Chip icon={<TagIcon />} label="InnovateWithCode" color="info" />
        <Chip icon={<TagIcon />} label="JavaScriptWisdom" color="info" />
        <Chip icon={<TagIcon />} label="JoyfulCoding" color="info" />
      </Stack> */}
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Embarking on a digital journey, I'm your ReactRover, exploring front-end
        realms with curiosity. As a JavaScript Jedi, I infuse wisdom into code,
        seeking elegant solutions like an artist with a brush.
      </Typography>
      {/* <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        In React's world, I architect applications to captivate. Beyond code,
        I'm a mentor fostering fast learning and collaborative growth.
        Challenges are not roadblocks; they're chances to innovate. Join me in
        transforming code into impactful stories. I'm not just a developer; I'm
        a guide, a mentor, and a fellow explorer in the world of front-end
        brilliance. May the joy of coding be with you! #CodeCurator #ReactMagic
        #JavaScriptWisdom #InnovateWithCode #JoyfulCoding
      </Typography> */}
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="https://www.linkedin.com/in/hitendra-malviya-38398918/"
        sx={{ minWidth: 200 }}
      >
        Connect with me!
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        I'm your ReactRover, exploring front-end realms with curiosity. As a
        JavaScript Jedi, I infuse wisdom into code, seeking elegant solutions
        like an artist with a brush.
      </Typography>
    </ProductHeroLayout>
  );
}
