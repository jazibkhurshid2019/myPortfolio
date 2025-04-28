import React from "react";
import { styled } from "@mui/system";
import { Typography, Box, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Material UI",
        "Tailwind",
        "Radix UI",
        "shadcn",
        "SCSS",
      ],
    },
    {
      title: "JavaScript Frameworks & Libraries",
      icon: "⚛️",
      skills: [
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "Context API",
        "Zustand",
        "KendoReact",
      ],
    },
    {
      title: "Forms & Validation",
      icon: "📝",
      skills: ["Formik", "react-hook-form", "Yup"],
    },
    {
      title: "Programming",
      icon: "👨‍💻",
      skills: ["JavaScript (ES6+)", "TypeScript", "NodeJs"],
    },
    {
      title: "API",
      icon: "🔌",
      skills: ["RESTful API", "GraphQL"],
    },
    {
      title: "Tools & Practices",
      icon: "🛠️",
      skills: [
        "Version Control (Git/GitHub)",
        "JWT Authentication",
        "Debugging",
      ],
    },
    {
      title: "Testing",
      icon: "🧪",
      skills: ["Jest", "Enzyme", "Vitest", "Lighthouse", "Playwright"],
    },
  ];

  const MainContainer = styled(Box)(({ theme }) => ({
    minHeight: "calc(100vh - 88px)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "2rem 0",
    position: "relative",
    zIndex: 1,
  }));

  const SkillCard = styled(motion.div)(({ theme }) => ({
    background: theme.palette.card.primary,
    borderRadius: "20px",
    padding: "1.5rem",
    height: "100%",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    position: "relative",
    zIndex: 1,
    "&:hover": {
      transform: "translateY(-10px)",
    },
  }));

  const SkillChip = styled(motion.div)(({ theme }) => ({
    cursor: "pointer",
    borderRadius: "15px",
    padding: "0.5rem 1rem",
    margin: "0.5rem",
    display: "inline-block",
    fontSize: "0.95rem",
    color: theme.palette.text.primary,
    border: "2px solid #ffde59",
    transition: "all 0.3s ease",
    position: "relative",
    zIndex: 1,
    "&:hover": {
      background: "#ffde59",
      color: "#333",
      transform: "translateY(-3px)",
    },
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

  const skillChipAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <MainContainer>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              }}
            >
              My Skills
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={category.title}>
                <motion.div variants={item}>
                  <SkillCard>
                    <motion.div variants={item}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#ffde59",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          mb: 2,
                          fontSize: "1.25rem",
                          fontWeight: 600,
                        }}
                      >
                        <span>{category.icon}</span>
                        {category.title}
                      </Typography>
                    </motion.div>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        flex: 1,
                        alignItems: "flex-start",
                      }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          variants={skillChipAnimation}
                          initial="hidden"
                          animate="show"
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                        >
                          <SkillChip>{skill}</SkillChip>
                        </motion.div>
                      ))}
                    </Box>
                  </SkillCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </MainContainer>
  );
};

export default Skills;
