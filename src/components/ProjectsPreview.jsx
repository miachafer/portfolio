import { Link } from "react-router-dom";
import ProjectThumbnail from "./ProjectThumbnail";
import projects from "../projects.json"
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs"

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <h2 className="mb-4">Projects</h2>
      <Row className="mb-4">
        {featuredProjects && featuredProjects.map(project => {
          return (
            <Col md={4} xs={12} className="mb-3">
              <ProjectThumbnail
                image={project.image}
                title={project.title}
                key={project.id}
              />
            </Col>
          )
        })}
      </Row>
      <p className="mb-4 h5">
        <Link to="/projects">More </Link>
        <BsArrowRight className="ml-2"/>
      </p>
    </>
  )
}