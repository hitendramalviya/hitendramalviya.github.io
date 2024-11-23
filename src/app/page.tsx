import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          bgcolor: "#120200",
          height: "100%",
          padding: 3,
          color: "#ed5b2d",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          alignContent="center"
          justifyItems="center"
          flexDirection="column"
        >
          <Avatar
            alt="Hitendra Malviya"
            src="/me.jpg"
            sx={{ width: 150, height: 150 }}
          />
          <Typography variant="h4">Hitendra Malviya</Typography>
          <Typography variant="body1" sx={{ color: "#ffce6d" }}>
            JavaScript Expert | Mentor | Coach
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "16px" }}>
          <Typography variant="h6">
            About me <FormatQuoteIcon />
          </Typography>
          <Typography variant="body1" sx={{ color: "#f6f6e9" }}>
            Hi! I’m Hitendra Kumar Malviya, an experienced JavaScript developer
            and technical leader with over 15 years of industry experience. My
            passion lies in creating elegant, scalable applications using modern
            frameworks like ReactJS, NextJS, and NodeJS, while ensuring best
            practices and a solid foundation for every project.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#f6f6e9", marginTop: "8px" }}
          >
            As a mentor and coach, I excel in helping developers grow their
            skills, fostering a culture of collaboration, and driving projects
            toward impactful results. Currently, I’m deeply invested in
            exploring AI’s transformative potential to revolutionize development
            workflows and push boundaries in the tech space.
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "16px", color: "#f6f6e9" }}>
          <Typography variant="h6" sx={{ color: "#ed5b2d" }}>
            My Expertise
          </Typography>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              <b>JavaScript & Frontend Development:</b> Mastery in ReactJS,
              NextJS, NodeJS, and responsive design principles.
            </li>
            <li>
              <b>Application Architecture:</b> Expert in crafting scalable and
              maintainable solutions with a focus on long-term performance.
            </li>
            <li>
              <b>Mentorship & Coaching:</b> Guiding developers to learn fast,
              collaborate effectively, and achieve their career goals.
            </li>
            <li>
              <b>AI & Innovation:</b> Leveraging AI to optimize workflows and
              solve complex technical challenges creatively.
            </li>
          </ul>
        </Box>
        <Box sx={{ paddingTop: "16px", color: "#f6f6e9" }}>
          <Typography variant="h6" sx={{ color: "#ed5b2d" }}>
            Achievements
          </Typography>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              Designed scalable architectures, enhancing application performance
              and user experience.
            </li>
            <li>
              Mentored and coached teams, fostering growth and productivity
              across diverse projects.
            </li>
            <li>
              Implemented AI-driven solutions to streamline processes and
              increase efficiency.
            </li>
          </ul>
        </Box>
        <Box sx={{ paddingTop: "16px", color: "#f6f6e9" }}>
          <Typography variant="h6" sx={{ color: "#ed5b2d" }}>
            What I Bring
          </Typography>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              <b>Expertise in JavaScript:</b> Extensive hands-on experience with
              modern tools and frameworks for high-performance solutions.
            </li>
            <li>
              <b>Guidance & Mentorship:</b> Helping developers grow and thrive
              in fast-paced environments.
            </li>
            <li>
              <b>Strategic Vision:</b> Combining technical expertise with a
              long-term perspective for sustainable success.
            </li>
            <li>
              <b>AI Exploration:</b> Utilizing AI to drive innovation in
              development and problem-solving.
            </li>
          </ul>
        </Box>
        <Box paddingTop={2} paddingBottom={2}>
          <Button variant="contained" fullWidth>
            Upcoming events
          </Button>
        </Box>
        <Box textAlign="center" paddingTop={2}>
          <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
            Follow me
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              sx={{ color: "#ffce6d" }}
              href="https://www.linkedin.com/in/hitendra-malviya-38398918/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#ffce6d" }}
              href="https://github.com/hitendramalviya"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#ffce6d" }}
              href="https://www.instagram.com/procodinghq/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
