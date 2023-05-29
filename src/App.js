import "./App.css";
import Routing from "./Routing/RoutingFunction";
import { ThemeProvider, createTheme, createMuiTheme, responsiveFontSizes } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  
  const font =  "'Rajdhani', sans-serif";

  const myCustomTheme = createTheme({
    palette: {
      mode: "dark",

      primary: {
        main: "#017365",
      },

      background: {
        default: "#1D1E22",
      },
      

    },

    typography:{
      fontFamily: font,
      
    },

    
  });

  const Theme = responsiveFontSizes(myCustomTheme);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />

        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
