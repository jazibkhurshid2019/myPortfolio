import React from "react";
import { styled } from "@mui/system";
import { Typography, Box, Grid, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Projects = () => {
  const theme = useTheme();
  const projects = [
    {
      title: "Internship Experience",
      company: "PC Machinery",
      website: "https://pcmachinery.co.nz/",
      role: "Website Management",
      description:
        "During my internship at PC Machinery, I worked on managing and updating their WordPress-based website.",
      responsibilities: [
        {
          title: "Product Management",
          items: [
            "Adding and updating product listings with accurate details",
            "Managing product images and pricing",
          ],
        },
        {
          title: "Website Customization",
          items: [
            "Implementing minor tweaks and adjustments based on client requirements",
          ],
        },
        {
          title: "Client Requests Handling",
          items: [
            "Making modifications and resolving minor issues",
            "Enhancing user experience",
          ],
        },
      ],
      skills: [
        "WordPress Management",
        "Content Updates",
        "Client Communication",
      ],
    },
    {
      title: "Freelance Project",
      company: "Al Ayaan Car Wash",
      website: "https://alayaancarwash.com/",
      role: "Website Development",
      description:
        "Designed and developed a static WordPress website for Al Ayaan Car Wash using WordPress and Elementor.",
      responsibilities: [
        {
          title: "Website Development",
          items: [
            "Built a professional and visually appealing website",
            "Showcased services effectively",
          ],
        },
        {
          title: "Hosting & Domain Setup",
          items: ["Managed domain registration", "Configured hosting settings"],
        },
        {
          title: "SEO Optimization",
          items: [
            "Implemented SEO strategies",
            "Improved search visibility and Google ranking",
          ],
        },
        {
          title: "Performance & User Experience",
          items: [
            "Ensured fast loading times",
            "Implemented mobile responsiveness",
            "Created intuitive layout",
          ],
        },
      ],
      skills: ["WordPress", "Elementor", "SEO", "Hosting Management"],
    },
    {
      title: "Professional Experience",
      company: "React & Frontend Development",
      role: "Frontend Developer",
      description:
        "Contributed to multiple React and Next.js projects, delivering high-quality, scalable, and efficient web applications.",
      responsibilities: [
        {
          title: "Frontend Development",
          items: [
            "Built responsive and dynamic UIs using React.js, Next.js",
            "Implemented Tailwind CSS, Radix UI, ShadCN and KendoReact",
            "Leveraged KendoReact UI components for enhanced functionality",
          ],
        },
        {
          title: "State Management",
          items: [
            "Implemented efficient state handling using Redux, Redux Toolkit",
            "Utilized Zustand and Context API",
          ],
        },
        {
          title: "API Integration",
          items: [
            "Worked with RESTful APIs",
            "Ensured seamless data flow and performance optimization",
          ],
        },
        {
          title: "Testing & Quality Assurance",
          items: [
            "Implemented Jest, Enzyme, and Playwright (E2E testing)",
            "Ensured code reliability and maintainability",
          ],
        },
        {
          title: "PDF & Document Handling",
          items: [
            "Utilized KendoReact PDF Export",
            "Implemented document processing features",
          ],
        },
      ],
      skills: ["React", "Next.js", "Redux", "TypeScript", "Testing"],
    },
    {
      title: "Final Year Project",
      company: "District Football Association",
      role: "Data Management System",
      description:
        "Developed a District Football Association Data Management System to streamline and digitalize player record-keeping.",
      responsibilities: [
        {
          title: "Role-Based Access Control",
          items: [
            "Implemented different user roles (Admin, President, General Manager, Players)",
            "Managed specific permissions for each role",
          ],
        },
        {
          title: "Player Record Management",
          items: [
            "Enabled players to access and review their data",
            "Allowed officials to add and update player records",
          ],
        },
        {
          title: "Approval System",
          items: [
            "Implemented admin approval workflow",
            "Managed official records updates",
          ],
        },
        {
          title: "User Interface",
          items: [
            "Created clean and responsive interface",
            "Ensured seamless navigation and data retrieval",
          ],
        },
      ],
      skills: ["HTML", "CSS", "SQL", "Database Management", "UI/UX"],
    },
  ];

  const MainContainer = styled(Box)(({ theme }) => ({
    minHeight: "calc(100vh - 88px)",
    width: "100%",
    padding: "2rem 0",
    position: "relative",
    zIndex: 1,
  }));

  const ProjectCard = styled(motion.div)(({ theme }) => ({
    background: theme.palette.card.primary,
    borderRadius: "20px",
    padding: "2rem",
    marginBottom: "2rem",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    position: "relative",
    zIndex: 1,
    "&:hover": {
      transform: "translateY(-5px)",
    },
  }));

  const SkillChip = styled(motion.div)(({ theme }) => ({
    borderRadius: "15px",
    cursor: "pointer",
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
              My Projects
            </Typography>
          </motion.div>

          {projects.map((project, index) => (
            <motion.div key={project.title} variants={item}>
              <ProjectCard>
                <motion.div variants={item}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#ffde59",
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                </motion.div>

                <motion.div variants={item}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                      mb: 2,
                    }}
                  >
                    {project.company}
                    {project.website && (
                      <Typography
                        component="a"
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          fontSize: "0.9rem",
                          color: theme.palette.text.primary,
                          textDecoration: "none",
                          ml: 1,
                          "&:hover": {
                            color: "#ffde59",
                          },
                        }}
                      >
                        (Visit Website)
                      </Typography>
                    )}
                  </Typography>
                </motion.div>

                <motion.div variants={item}>
                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      mb: 3,
                      fontSize: "1rem",
                    }}
                  >
                    {project.description}
                  </Typography>
                </motion.div>

                <Grid container spacing={3}>
                  {project.responsibilities.map((responsibility, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                      <motion.div variants={item}>
                        <Box sx={{ mb: 2 }}>
                          <Typography
                            sx={{
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              mb: 1,
                            }}
                          >
                            {responsibility.title}
                          </Typography>
                          <ul
                            style={{
                              margin: 0,
                              paddingLeft: "1.5rem",
                              color: theme.palette.text.primary,
                            }}
                          >
                            {responsibility.items.map((item, itemIdx) => (
                              <motion.li key={itemIdx} variants={item}>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 3 }}>
                  <motion.div variants={item}>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 1,
                      }}
                    >
                      Skills Used:
                    </Typography>
                  </motion.div>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {project.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill}
                        variants={skillChipAnimation}
                        initial="hidden"
                        animate="show"
                        transition={{
                          delay: index * 0.1 + skillIdx * 0.05,
                        }}
                      >
                        <SkillChip>{skill}</SkillChip>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </ProjectCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </MainContainer>
  );
};

export default Projects;
