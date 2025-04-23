import React, { useRef, useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import emailjs from "emailjs-com";
import { Alert, Snackbar } from "@mui/material";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const formRef = useRef(null);

  const sendEmail = (e) => {
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
          setAlert({
            open: true,
            message: "Message sent successfully!",
            severity: "success",
          });
          setLoading(false);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          setAlert({
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
  const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 2),
    backgroundColor: "tranparent",
  }));

  const SectionHeading = styled(Box)(({ theme }) => ({
    textAlign: "center",
    marginTop: theme.spacing(6),
  }));

  const LineDec = styled(Divider)(({ theme }) => ({
    width: 80,
    margin: "16px auto",
    background: "black",
    // background: "linear-gradient(to right, black, rgb(255, 222, 89))",
    height: 3,
  }));

  const StyledForm = styled("form")(() => ({
    backgroundColor: "#fff",
    padding: 32, // instead of theme.spacing
    borderRadius: 8,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  }));
  const MainDiv = styled("div")(
    () => `
        display: flex;
        align-items: center;
        flex-direction:column;
        justify-content: center;
       
      `
  );
  const Image = styled("img")(
    () => `
        height:350px;
        width:100%;
      `
  );
  const ProfileImage = styled("img")(
    () => `
        height:350px;
      `
  );
  const Text = styled("p")(
    () => `
     margin: 40px 0px;
        font-size:22px;
        display:inline-block;
        width:80%;
        text-align:center;
      `
  );

  return (
    <MainDiv>
      <Image src={require("../../components/images/contact.jpg")} alt="logo" />
      <SectionHeading>
        <h2
          style={{
            fontSize: "4em",
            display: "inline-block",
          }}
        >
          Contact Me
        </h2>
      </SectionHeading>
      <Text>
        Thank you for your interest in getting in touch with me. I welcome your
        feedback, questions, and suggestions. If you have a specific question or
        comment, please feel free to email me directly at{" "}
        <strong>jazib9626@gmail.com</strong>. I make an effort to respond to all
        messages within 24 hours, although it may take me longer during busy
        periods. Alternatively, you can use the contact form on my website to
        get in touch. Simply fill out the required fields and I'll get back to
        you as soon as possible.
      </Text>
      <StyledForm ref={formRef} onSubmit={sendEmail}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4" component="h2" fontWeight="bold">
            Contact Form
          </Typography>
          <LineDec />
        </div>

        <Section id="contact">
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Your name"
                  name="name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Your email"
                  name="email"
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Subject"
                  name="subject"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Your message"
                  name="message"
                  multiline
                  rows={6}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  disabled={loading}
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "black",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    textTransform: "capitalize",
                    opacity: loading && "0.7",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "black",
                      opacity: "0.9",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Section>
      </StyledForm>
      <div style={{ display: "flex", margin: "40px 0px" }}>
        <ProfileImage
          src={require("../../components/images/profile.jpg")}
          alt="logo"
        />
        <div style={{ position: "relative" }}>
          <Image src={require("../../components/images/logo.png")} alt="logo" />
        </div>
      </div>
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </MainDiv>
  );
};

export default Index;
