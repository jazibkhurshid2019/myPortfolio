import React, { useRef, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  IconButton,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookrIcon from "@mui/icons-material/Facebook";
import { useTheme } from "@mui/material";

const ContactCard = styled(Box)(({ theme }) => ({
  background: theme.palette.card.primary,
  borderRadius: "20px",
  padding: "2rem",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backdropFilter: "blur(10px)",
  "&:hover": {
    transform: "translateY(-10px)",
    transition: "transform 0.3s ease",
  },
}));

const Contact = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ebhh2m",
        "template_z3p89gq",
        formRef.current,
        "S35CPLP8NJteAPXi3"
      )
      .then(
        (result) => {
          setSnackbar({
            open: true,
            message: "Message sent successfully!",
            severity: "success",
          });
          setLoading(false);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          setSnackbar({
            open: true,
            message: "Failed to send message.",
            severity: "error",
          });
          setLoading(false);
          e.target.reset();
          console.log(error.text);
        }
      );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 88px)",
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={container}
          >
            <motion.div variants={item}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "#ffde59",
                  mb: 4,
                  pt: 4,
                }}
              >
                Get In Touch
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div variants={item}>
                  <ContactCard>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "#ffde59" }}
                    >
                      Contact Information
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        mb: 3,
                      }}
                    >
                      Feel free to reach out to me for any inquiries or
                      opportunities. I'm always open to discussing new projects,
                      creative ideas, or opportunities to be part of your
                      visions.
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                        }}
                      >
                        Email
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontSize: "0.95rem",
                        }}
                      >
                        jazib9626@gmail.com
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontSize: "0.95rem",
                        }}
                      >
                        Abbottabad, Pakistan
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                        }}
                      >
                        Social Media
                      </Typography>
                      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                        <Link
                          href="https://www.linkedin.com/in/jazib-khurshid/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconButton
                            sx={{
                              color: theme.palette.text.primary,
                              "&:hover": {
                                color: "#ffde59",
                                transform: "translateY(-2px)",
                                transition: "all 0.3s ease",
                              },
                            }}
                          >
                            <LinkedInIcon />
                          </IconButton>
                        </Link>
                        <Link
                          href="https://github.com/jazibkhurshid2019"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconButton
                            sx={{
                              color: theme.palette.text.primary,
                              "&:hover": {
                                color: "#ffde59",
                                transform: "translateY(-2px)",
                                transition: "all 0.3s ease",
                              },
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        </Link>
                        <Link
                          href="https://www.facebook.com/jazib.khan.10/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconButton
                            sx={{
                              color: theme.palette.text.primary,
                              "&:hover": {
                                color: "#ffde59",
                                transform: "translateY(-2px)",
                                transition: "all 0.3s ease",
                              },
                            }}
                          >
                            <FacebookrIcon />
                          </IconButton>
                        </Link>
                      </Box>
                    </Box>
                  </ContactCard>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={item}>
                  <ContactCard>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "#ffde59" }}
                    >
                      Send a Message
                    </Typography>
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        margin="normal"
                        required
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        margin="normal"
                        required
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        margin="normal"
                        required
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        margin="normal"
                        required
                        multiline
                        rows={4}
                        sx={{ mb: 3 }}
                      />
                      <Button
                        disabled={loading}
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: "#ffde59",
                          color: "#000",
                          "&:hover": {
                            backgroundColor: "#ffd700",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </form>
                  </ContactCard>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
