import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import "./Project.css";

// Import Project Images
import projImg1 from "../assets/img/Capture.png";
import projImg2 from "../assets/img/drum.png";
import projImg3 from "../assets/img/banner.png";
import projImg4 from "../assets/img/whiteBoard.png";
import projImg5 from "../assets/img/keeper.png";
import projImg6 from "../assets/img/portf.png";
import proImg6 from "../assets/img/headphone.png";
import proImg7 from "../assets/img/blog Image.png";
import proImg8 from "../assets/img/Ecommerce.png";
import proImg9 from "../assets/img/Screenshot 2024-06-09 164741.png";
import proImg10 from "../assets/img/tic-tac-toe.png";
import proImg11 from "../assets/img/Screenshot 2025-03-16 032845.png";
import proImg12 from "../assets/img/FoodDeliveryApp.png";

export const Projects = () => {
  const allProjects = [
    {
      title: "Food Delivery App",
      description:
        "A full-stack **Food Delivery Web App** with role-based access for users and admins, real-time food menu management, and integrated **payment gateway** support.",
      imgUrl: proImg12,
      url: "https://github.com/shw2003/Food-Delivery-App",
      category: ["Frontend", "Backend"],
      techStack: ["React", "Node.js", "Express", "MongoDB", "payment gateway"],
    },
    {
      title: "Book Management CRUD Application",
      description:
        "Built a backend application to manage books with full CRUD functionality, allowing users to add, edit, delete, and view book details. Integrated with React.js for the frontend and Node.js with Express for the backend.",
      imgUrl: proImg11,
      url: "https://github.com/shw2003/book-store",
      category: "Backend",
      techStack: [
        "React JS",
        "Javascript",
        "Node Js",
        "Express",
        "CSS",
        "Microservice Architecture",
        "Design Patterns",
      ],
    },
    {
      title: "Giphy APP",
      description:
        "Designed and developed a Giphy search application using React.js, integrating design patterns and microservice-based architecture for scalability.",
      imgUrl: proImg9,
      url: "https://giphy-app-sepia.vercel.app/",
      category: "Frontend",
      techStack: [
        "React JS",
        "Microservice Architecture",
        "Design Patterns",
        "JavaScript",
        "CSS",
      ],
    },
    {
      title: "Portfolio",
      description:
        "Designed and developed a personal portfolio showcasing skills, projects, and experience, with a clean, responsive design using modern frontend technologies and microservice architecture.",
      imgUrl: projImg6,
      url: "https://hfycx0.csb.app/",
      category: "Frontend",
      techStack: [
        "React JS",
        "Javascript",
        "Redux",
        "CSS",
        "Microservice Architecture",
        "Design Patterns",
      ],
    },
    {
      title: "E-commerce website",
      description:
        "Designed and developed a responsive e-commerce platform focused on user experience and clean UI.",
      imgUrl: projImg1,
      url: "https://comfyzone.netlify.app",
      category: "Frontend",
      techStack: ["Javascript", "CSS", "HTML"],
    },

    {
      title: "Drumkit Sound Game",
      description:
        "Built an interactive sound game simulating a drumkit using keyboard and mouse events with real-time audio feedback.",
      imgUrl: projImg2,
      url: "https://drumkt.netlify.app/",
      category: "Frontend",
      techStack: ["Javascript", "CSS", "HTML"],
    },
    {
      title: "Mine Sweeper Game",
      description:
        "Developed the classic Minesweeper game with dynamic grid generation and interactive gameplay using JavaScript.",
      imgUrl: projImg3,
      url: "https://t5i9f.csb.app/",
      category: "Frontend",
      techStack: ["Javascript", "CSS", "HTML"],
    },
    {
      title: "White Board",
      description:
        "Developed a real-time collaborative drawing board allowing multiple users to draw and interact in real-time using JS for seamless communication.",
      imgUrl: projImg4,
      url: "https://k5c8x.csb.app/",
      category: "Backend",
      techStack: ["Javascript", "CSS", "HTML"],
    },
    {
      title: "Responsive Headphone Website",
      description:
        "Designed a modern, responsive website showcasing headphones, featuring an interactive UI with smooth navigation and product details.",
      imgUrl: proImg6,
      url: "https://responsive-headphone-website.netlify.app/",
      category: "Frontend",
      techStack: ["Javascript", "CSS", "HTML"],
    },
    {
      title: "Keeper",
      description:
        "Developed a note-keeping app using React.js and Redux for state management, allowing users to create, update, and delete notes in an interactive interface.",
      imgUrl: projImg5,
      url: "https://hfycx0.csb.app/",
      category: "Frontend",
      techStack: ["React JS", "Javascript", "Redux", "CSS"],
    },

    {
      title: "Blog app",
      description:
        "Built a blog publishing platform where users can create, edit, and manage blog posts. It utilizes microservice architecture for modularity and scalability, with React for the frontend and Node.js for the backend.",
      imgUrl: proImg7,
      url: "https://my-portfolio-pi-dusky-33.vercel.app/",
      category: "Backend",
      techStack: [
        "Node JS",
        "React JS",
        "Javascript",
        "CSS",
        "Microservice Architecture",
        "Design Patterns",
      ],
    },
    {
      title: "E-commerce Website",
      description:
        "Developed an online store with a modern and user-friendly interface, allowing users to browse, search, and filter products. Integrated React.js and Redux for efficient state management and seamless shopping experience.",
      imgUrl: proImg8,
      url: "https://github.com/shw2003/capstone-Project",
      category: "Frontend",
      techStack: [
        "React JS",
        "Javascript",
        "Redux",
        "CSS",
        "Microservice Architecture",
        "Design Patterns",
      ],
    },
    {
      title: "Tic-Tac-toe",
      description:
        "Developed a classic Tic-Tac-Toe game with a modern twist, using React.js for dynamic rendering and Redux for state management. The game allows players to play against each other in a user-friendly interface.",
      imgUrl: proImg10,
      url: "https://github.com/shw2003/TIC-TAC-TOE-Js-",
      category: "Frontend",
      techStack: [
        "React JS",
        "Javascript",
        "Redux",
        "CSS",
        "Microservice Architecture",
        "Design Patterns",
      ],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} className="text-center">
            <h2 className="section-title">Projects</h2>
            <p className="port-text">
              Here is some of my work that I've done using various technologies.
            </p>

            {/* Tabs for Project Categories */}
            <Tab.Container id="projects-tabs" defaultActiveKey="all">
              <Nav variant="pills" className="justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="react">Frontend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="javascript">Backend</Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Project Cards */}
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  <Row className="justify-content-center">
                    {allProjects.map((project, index) => (
                      <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="react">
                  <Row className="justify-content-center">
                    {allProjects
                      .filter((project) =>
                        project.category.includes("Frontend")
                      )
                      .map((project, index) => (
                        <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <ProjectCard {...project} />
                          </a>
                        </Col>
                      ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="javascript">
                  <Row className="justify-content-center">
                    {allProjects
                      .filter((project) => project.category.includes("Backend"))
                      .map((project, index) => (
                        <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <ProjectCard {...project} />
                          </a>
                        </Col>
                      ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
