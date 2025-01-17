import { useState } from 'react'
import Login from './components/Login'; // Import the Login component
import './App.css'
import LibraryTable from './components/LibraryScreen';
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Extend the ThemeOptions interface to recognize MuiDataGrid
declare module '@mui/material/styles' {
  interface Components {
    MuiDataGrid?: any;
  }
}

// Custom theme for the DataGrid
const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF", 
    },
    text: {
      primary: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFFFFF",
          color: "#000000", 
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF", 
          color: "#000000", 
        },
        columnHeaders: {
          backgroundColor: "#FFFFFF",
          color: "#000000", 
          fontWeight: "bold",
        },
        cell: {
          color: "#000000", 
        },
        footerContainer: {
          backgroundColor: "#FFFFFF", 
          color: "#000000",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
  },
});

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            {!isLoggedIn ? ( // Conditionally render Login or Library
                <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
              <ThemeProvider theme={theme}>
              <LibraryTable />
              </ThemeProvider>
            )}
        </div>
    );
}

export default App;

