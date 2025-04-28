// src/theme/theme.js

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode colors
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
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "light" ? "#FFFFFF" : "#1E1E1E",
          color: mode === "light" ? "#2D3250" : "#FFFFFF",
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
