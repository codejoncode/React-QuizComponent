import React, {Component} from "react"; 
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {

    render() {
        const {quiz_question} = this.props; 
        const {answer_options, instruction_text} = quiz_question;
        return (
        <main>
            <section>
                <p>{instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    <QuizQuestionButton button_text={answer_options[0]}/>
                </ul>
            </section>
        </main>
        );
    }
}

export default QuizQuestion;