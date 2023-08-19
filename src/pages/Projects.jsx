import { Row, Col, Image } from "react-bootstrap"
import projects from "../projects.json"
import { RiArrowRightDoubleFill } from "react-icons/ri"
import { BsGithub } from "react-icons/bs"
import { GoLinkExternal } from "react-icons/go"

export default function Projects() {
  
  const disabledLink = (link) => {
    if (link.length === 0)
      return true
    else 
      false
  }


  return (
    <>
      <h1 className="mb-4">Projects</h1>
      {projects && projects.map(project => {
        return (
          <Row className="mb-5">
            <Col md={6} xs={12}>
              <Image src={project.image} fluid rounded></Image>
            </Col>
            <Col md={6} xs={12} className="mt-3">
              <h2>{project.title}</h2>
              {project.description}
              <ul className="list-unstyled mt-2">
                {project.technologies && project.technologies.map(tech => {
                  return (
                    <li 
                      key={tech.id}
                      className="mb-2"
                    >
                      <RiArrowRightDoubleFill 
                        size={12}
                        style={{ marginRight: '5px', marginBottom: '2px' }}
                      /> 
                      {tech.technology}
                    </li>
                  )
                })}
              </ul>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href={project.github} target="_blank">
                    <BsGithub size={30} className="icon"/> View on Github
                  </a>
                </li>
                <li>
                  <a href={project.link} 
                    target="_blank"
                    className={disabledLink(project.link) ? 'disabled-link' : ''}  
                  >
                    <GoLinkExternal 
                      size={30} 
                      className={disabledLink(project.link) ? 'disabled-link' : 'icon'} 
                    /> View on the web
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
