import { useState } from "react"
import { quizData } from "./quizData"

const QuizGallery = () => {
const [index, setIndex] = useState(0);

const handleNextClick = () => {
  setIndex(index + 1)
  if (index === (quizData.length -1)) {
    setIndex(0)
  }
}
const handlePrevClick = () => {
  setIndex(index - 1)
  if (index < 1 ) {
    setIndex(quizData.length -1)
  }
}
const quiz = quizData[index]

return (
      <div className="img-carousel">
        <button onClick={handlePrevClick}>Next image</button>
        <div className="img-1"><h1>[GALLERY background {quiz.image}]</h1></div>
        <button onClick={handleNextClick}>Next image</button>
      </div>
  )
}

const Quiz = () => {
  return (
    <div className="section section1">
      <h1>Quiz App for Educators</h1>
      <QuizGallery />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eum, in, vel sed quia ad culpa magni, quam quisquam repellendus quasi? At nemo perferendis distinctio amet, a iusto molestiae ex.</p>
    </div>
  )
}

export default Quiz