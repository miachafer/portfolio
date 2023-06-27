import { Link } from "react-router-dom";
import ProjectThumbnail from "./ProjectThumbnail";
import projects from "../projects.json"
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs"

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <h6>Projects</h6>
      <Row>
        {featuredProjects && featuredProjects.map(project => {
          return (
            <Col xs={4}>
              <ProjectThumbnail
                image={project.image}
                title={project.title}
                key={project.id}
              />
            </Col>
          )
        })}
      </Row>
      <Link to="/projects">See more</Link><BsArrowRight />
    </>
  )
}