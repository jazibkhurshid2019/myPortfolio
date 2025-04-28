import React from "react";
import { Typography, Box, Container, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const About = () => {
  const theme = useTheme();
  const SkillBar = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "0.5rem",
  }));

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

  const skillBarAnimation = {
    hidden: { width: 0 },
    show: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "MongoDB", level: 75 },
    { name: "Express", level: 80 },
  ];

  return (
    <Box
      sx={{
        height: "calc(100vh - 88px)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <motion.div initial="hidden" animate="show" variants={container}>
            <motion.div variants={item}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "#ffde59",
                  mb: 4,
                  position: "relative",
                  zIndex: 1,
                  pt: 4,
                }}
              >
                About Me
              </Typography>
            </motion.div>
            <Grid item xs={12} sx={{ marginBottom: "30px" }}>
              <motion.div variants={item}>
                <Box
                  sx={{
                    background: theme.palette.card.primary,
                    borderRadius: "20px",
                    padding: "1.5rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "#ffde59" }}
                  >
                    My Approach
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.primary,
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    I believe in writing clean, maintainable code and following
                    best practices. My development process focuses on
                    understanding the problem thoroughly before implementing
                    solutions. I'm committed to continuous learning and staying
                    updated with the latest technologies and trends in web
                    development.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div variants={item}>
                  <Box
                    sx={{
                      background: theme.palette.card.primary,
                      borderRadius: "20px",
                      padding: "1.5rem",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "#ffde59" }}
                    >
                      Who Am I?
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        color: theme.palette.text.primary,
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      I'm a passionate Full Stack Developer with a strong focus
                      on creating exceptional digital experiences. With
                      expertise in both frontend and backend technologies, I
                      bring ideas to life through clean, efficient code and
                      innovative solutions.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      My journey in web development started with a curiosity for
                      technology and has evolved into a deep passion for
                      creating meaningful digital solutions that make a
                      difference.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={item}>
                  <Box
                    sx={{
                      background: theme.palette.card.primary,
                      borderRadius: "20px",
                      padding: "1.5rem",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "#ffde59" }}
                    >
                      My Skills
                    </Typography>
                    {skills.map((skill, index) => (
                      <Box key={skill.name} sx={{ mb: 2 }}>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            fontSize: "1rem",
                            mb: 1,
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <SkillBar>
                          <motion.div
                            variants={skillBarAnimation}
                            initial="hidden"
                            animate="show"
                            custom={skill.level}
                            style={{
                              backgroundColor: "#ffde59",
                              height: "100%",
                              borderRadius: "10px",
                            }}
                          />
                        </SkillBar>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
