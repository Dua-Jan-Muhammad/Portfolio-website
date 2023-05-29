import * as React from "react";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HTML from "../Assets/html.svg";
import CSS from "../Assets/css.svg";
import JS from "../Assets/javascript.svg";
import Reactlogo from "../Assets/react.svg";
import MUI from "../Assets/material-ui-1.svg";
import FireBase from "../Assets/firebase.svg";
import Python from "../Assets/python-5.svg";

import Django from "../Assets/django.svg";
import tailwind from "../Assets/tailwind-css-2.svg";
import Education from '../Components/Education'
import Experiance from '../Components/Experiance'

const drawerWidth = 310;
const drawerWidth2 = 340;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <List sx={{ mt: 24, mx: 14 }}>
        {["Home", "About", "Skills","Service", "Education", "Experience", "testimonials","Contact"].map(
          (text, index) => (
            <ListItem sx={{ pt: 1 }} key={text} disablePadding>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <IconButton
        postion
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ m: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#343434",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { sm: drawerWidth, lg: drawerWidth2 },
                backgroundColor: "#343434",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
            <Container maxWidth="md">
          <Box
            id="Header"
            p={2}
            
            ml={{ xs: 0, sm: 4, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            minHeight="100vh"
          >
            <Typography variant="h1">Hi,</Typography>
            <Typography variant="h1">I am Dua</Typography>
            <Typography variant="h1">Web Developer</Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 2,
                ml: 1,
              }}
              color="grey"
            >
              Empowering the Digital World with Her Code
            </Typography>
            <Button
              sx={{
                mt: 3,
                p: 1,
                maxWidth: 200,
              }}
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
          </Container>
          <Container maxWidth="md">
          <Box
            id="About"
            p={2}
            
            mx={{ xs: 0, sm: 4, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            minHeight="100vh"
          >
            <Typography
              variant="h6"
              sx={{
                mt: 2,
              }}
              color="grey"
            >
              About Me
            </Typography>
            <Typography variant="h3">Who Am I?</Typography>

            <Typography
              sx={{
                mt: 6,
              }}
              color="grey"
              variant="body1"
              mt={2}
            >
              I'm{" "}
              <Box component="span" variant="button">
                <Typography variant="button" color="white" gutterBottom>
                  {"Dua "}
                </Typography>
              </Box>
              , a dynamic and driven web developer who is passionate about
              turning ideas into captivating digital experiences. With a
              keyboard as my paintbrush and lines of code as my colors, I embark
              on a creative journey to bring ideas to life in the virtual world.
            </Typography>

            <Typography
              sx={{
                mt: 6,
              }}
              color="grey"
              variant="body1"
              mt={2}
            >
              As a current student pursuing a Bachelor's degree in Artificial
              Intelligence, I have developed a solid foundation in Python
              programming and am familiar with web development. I'm always on
              the lookout for the latest trends and technologies, ready to
              incorporate them into my work and keep things fresh.
            </Typography>
          </Box>
          </Container>
          <Container maxWidth="md">
          <Box
            id="Skills"
            p={2}
           
            mx={{ xs: 0, sm: 4, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            minHeight="100vh"
          >
            <Typography
              variant="h6"
              sx={{
                mt: 2,
              }}
              color="grey"
            >
              My Tech Stack
            </Typography>
            <Typography variant="h3">My Skills</Typography>

            <Container maxWidth="md">
              <Grid
                container
                spacing={2}
                mt={2} 
                display="flex"
                
              >
                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 45, height: 45 }}
                    src={HTML}
                    alt="HTML Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                    HTML
                  </Typography>
                </Grid>
                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={CSS}
                    alt="CSS Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  CSS
                  </Typography>
                </Grid>

                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={JS}
                    alt="JS Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  javascript
                  </Typography>
                </Grid>

                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={Reactlogo}
                    alt="React Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  React
                  </Typography>
                </Grid>

                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={MUI}
                    alt="MUI Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  Material UI
                  </Typography>
                </Grid>

                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={FireBase}
                    alt="FireBase Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  FireBase
                  </Typography>
                </Grid>

                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={Python}
                    alt="Python Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  Python
                  </Typography>
                </Grid>

                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={Django}
                    alt="Django Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  Django
                  </Typography>
                </Grid>

                <Grid item align="center" xs={4}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={tailwind}
                    alt="tailwind Logo"
                  />
                  <Typography variant="caption" display="block" color="grey">
                  Tailwind CSS
                  </Typography>
                </Grid>




              
              </Grid>
            </Container>
          </Box>

          </Container>

          <Container maxWidth="md">
          <Box
            id="Education"
            p={2}
            
            mx={{ xs: 0, sm: 4, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            minHeight="100vh"
          >
            <Typography
              variant="h6"
              sx={{
                mt: 2,
              }}
              color="grey"
            >
              Education
            </Typography>
            <Typography  sx={{
                mb: 8,
              }} variant="h3">Education</Typography>



            <Education
                
               />





            
          </Box>
          </Container>

          <Container maxWidth="md">
          <Box
            id="Experiance"
            p={2}
            
            mx={{ xs: 0, sm: 4, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            minHeight="100vh"
          >
            <Typography
              variant="h6"
              sx={{
                mt: 2,
              }}
              color="grey"
            >
              Experiance
            </Typography>
            <Typography  sx={{
                mb: 4,
              }} variant="h3">Work Experiance</Typography>


<Experiance />
            





            
          </Box>
          </Container>

          <Container maxWidth="md">
          <Box
            id="Contact"
            p={2}
            
            mx={{ xs: 0, sm: 4, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            minHeight="100vh"
          >
            <Typography
              variant="h6"
              sx={{
                mt: 2,
              }}
              color="grey"
            >
              Contact
            </Typography>
            <Typography  sx={{
                mb: 4,
              }} variant="h3">Get in Touch</Typography>



            





            
          </Box>
          </Container>



        </Box>
      </Box>
    </>
  );
}

export default Home;
