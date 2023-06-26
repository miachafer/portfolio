import { Link } from "react-router-dom";
import ProjectThumbnail from "./ProjectThumbnail";

export default function ProjectsPreview() {
  return (
    <>
      <h6>Projects</h6>
      <ProjectThumbnail />
      <Link to="/projects">See more</Link>
    </>
  )
}