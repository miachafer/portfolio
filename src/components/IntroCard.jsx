import Card from "react-bootstrap/Card"
import { AiOutlineSmile } from "react-icons/ai"

export default function IntroCard() {
  return (
    <Card className="mb-4">
      <Card.Body>
        <p className="h4">Hi, my name is Mia! <AiOutlineSmile /></p>
        I am a software developer based in Belo Horizonte, Brazil, and currently working at <a href="https://www.t-systems.com/de/en" target="_blank">T-Systems</a>. In my free time, I enjoy reading, practicing origami, learning new languages, and studying computer science.
      </Card.Body>
    </Card>
  )
}