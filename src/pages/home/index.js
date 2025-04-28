import React from "react";
import { styled } from "@mui/system";
import { Typography, Box, Container, useTheme } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = styled(Box)(
  ({ theme }) => `
    height: calc(100vh - 88px);
    display: flex;
    align-items: center;
    width:100%;
    position: relative;
  `
);

const ContentWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    ${theme.breakpoints.down("md")} {
      flex-direction: column;
      text-align: center;
    }
  `
);

const TextContent = styled(Box)(
  ({ theme }) => `
    flex: 1;
    max-width: 600px;
  `
);

const ImageWrapper = styled(Box)(
  ({ theme }) => `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

const StyledImage = styled("img")(
  ({ theme }) => `
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  `
);

const Index = () => {
  const theme = useTheme();
  return (
    <HeroSection>
      <Container maxWidth="lg">
        <ContentWrapper>
          <TextContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                color={theme.palette.text.primary}
                gutterBottom
              >
                Hello, I'm
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                Jazib Khurshid
              </Typography>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1.5rem",
                  display: "block",
                  color: "#ffde59",
                  marginBottom: "1.5rem",
                }}
                repeat={Infinity}
              />
              <Typography
                variant="body1"
                sx={{ mb: 3, color: theme.palette.text.primary }}
              >
                I create exceptional digital experiences through clean,
                efficient code and innovative solutions. Let's build something
                amazing together.
              </Typography>
            </motion.div>
          </TextContent>
          <ImageWrapper>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StyledImage
                src={require("../../components/images/mainPage.png")}
                alt="Jazib Khurshid - Full Stack Developer"
              />
            </motion.div>
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default Index;
