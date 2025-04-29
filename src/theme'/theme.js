// src/theme/theme.js

export const getDesignTokens = (mode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode colors
          body: {
            primary: "#f2f4f4",
          },
          primary: {
            main: "#2D3250", // Deep blue
            light: "#424769", // Lighter blue
            dark: "#1B1F3B", // Darker blue
          },
          secondary: {
            main: "#ffffff",
          },
          background: {
            default: "#F5F5F5", // Light gray background
            paper: "#FFFFFF", // White for cards
          },
          text: {
            primary: "#666", // Deep blue for main text
            secondary: "#424769", // Lighter blue for secondary text
          },
          card: {
            primary: "#ffffff",
          },
          cursor: {
            primary: "#000",
          },
        }
      : {
          // Dark mode colors
          body: {
            primary: "#0000",
          },
          primary: {
            main: "#F9B17A", // Warm orange
            light: "#FFD3B6", // Light orange
            dark: "#E69A5C", // Dark orange
          },
          secondary: {
            main: "#0000",
          },
          background: {
            default: "#121212", // Dark background
            paper: "#1E1E1E", // Slightly lighter for cards
          },
          text: {
            primary: "#FFFFFF", // White for main text
            secondary: "#B0B0B0", // Light gray for secondary text
          },
          card: {
            primary: "#222222",
          },
          cursor: {
            primary: "#ffffff",
          },
        }),
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "0 24px",
          "@media (max-width:600px)": {
            padding: "0 16px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 16px",
          "@media (max-width:600px)": {
            padding: "6px 12px",
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          "@media (max-width:600px)": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "light" ? "#FFFFFF" : "#1E1E1E",
          color: mode === "light" ? "#2D3250" : "#FFFFFF",
          padding: "8px 0",
          "@media (max-width:600px)": {
            padding: "4px 0",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
