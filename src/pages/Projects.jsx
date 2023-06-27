import { Row, Col, Image } from "react-bootstrap"
import projects from "../projects.json"

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      {projects && projects.map(project => {
        return (
          <Row className="mb-3">
            <Col>
              <Image src={project.image} fluid></Image>
            </Col>
            <Col>
              <h2>{project.title}</h2>
              {project.description}
              <ul className="list-unstyled">
                {project.technologies && project.technologies.map(tech => {
                  return (
                    <li key={tech.id} >{tech.technology}</li>
                  )
                })}
              </ul>
              <ul className="list-unstyled">
                <li><a href={project.github}>View on Github</a></li>
                <li><a href={project.link}>View on the web</a></li>
              </ul>
            </Col>
          </Row>
        )
      })}
    </>
  )
}
