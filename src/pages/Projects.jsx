import { Row, Col, Image } from "react-bootstrap"
import projects from "../projects.json"
import { IoIosArrowForward } from "react-icons/io"
import { BsGithub } from "react-icons/bs"
import { LiaHandPointer } from "react-icons/lia"
import { GoLinkExternal } from "react-icons/go"

export default function Projects() {
  return (
    <>
      <h1 className="mb-4">Projects</h1>
      {projects && projects.map(project => {
        return (
          <Row className="mb-5">
            <Col>
              <Image src={project.image} fluid rounded></Image>
            </Col>
            <Col>
              <h2>{project.title}</h2>
              {project.description}
              <ul className="list-unstyled mt-2">
                {project.technologies && project.technologies.map(tech => {
                  return (
                    <li key={tech.id} >
                      <IoIosArrowForward />
                      {tech.technology}
                    </li>
                  )
                })}
              </ul>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href={project.github}>
                    <BsGithub size={30} className="icon"/> View on Github
                  </a>
                </li>
                <li>
                  <a href={project.link}>
                    <GoLinkExternal size={30} className="icon" /> View on the web
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        )
      })}
    </>
  )
}
