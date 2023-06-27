import Card from "react-bootstrap/Card"

export default function ProjectThumbnail( props ) {
  return (
    <Card>
      <Card.Img variant="top" src={ props.image } />
      <Card.Body>
        <Card.Title>{ props.title }</Card.Title>
      </Card.Body>
    </Card>
  )
}