import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { QuestionState, fetchQuizQuestionsExaktikh, fetchQuizQuestionsXeirourgikh1, fetchQuizQuestionsXeirourgikh2, fetchQuizQuestionsXeirourgikh3, fetchQuizQuestionsAkinith1, fetchQuizQuestionsAkinith2 } from './api';
import { GlobalStyle, Wrapper } from './App.styles';
import { shuffleArray } from './utils';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

interface QuizOptionsState {
  startingQuestion: number,
  totalQuestions: number
}

const App = () => {
  const [ loading, setLoading ] = useState(false);
  const [ questions, setQuestions ] = useState<QuestionState[]>([]);
  const [ number, setNumber ] = useState(0);
  const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([]);
  const [ score, setScore ] = useState(0);
  const [ gameOver, setGameOver ] = useState(true);
  const [ inOptionsPage, setInOptionsPage ] = useState(false)
  const [ totalQuestions, setTotalQuestions ] = useState(50)

  document.title = 'Dentistry Quiz'

  class QuizOptions extends React.Component<{},QuizOptionsState> {
    constructor(props) {
      super(props);
      this.state = {
        startingQuestion: 0,
        totalQuestions: 50
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      event.target.name === 'starting-question' ? this.setState({startingQuestion:event.target.value.length == 0 ? 0 : Number.parseInt(event.target.value)})
                                                : this.setState({totalQuestions:event.target.value.length == 0 ? 0 : Number.parseInt(event.target.value)})
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const newQuestions = questions.slice(this.state.startingQuestion,this.state.startingQuestion+this.state.totalQuestions)
      setQuestions(shuffleArray(newQuestions))
      setTotalQuestions(this.state.totalQuestions)
      setInOptionsPage(false)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Quiz Options</h2>
          Collected {questions.length} questions <br/><br/>
          <label>
            {'Starting Question: '}
            <input type='text' value={this.state.startingQuestion == 0 ? '' : this.state.startingQuestion} name='starting-question' onChange={this.handleChange} /><br/>
            {'Total Questions: '}
            <input type='text' value={this.state.totalQuestions == 0 ? '' : this.state.totalQuestions} name='total-questions' onChange={this.handleChange} />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  const prepareTriviaExaktikh = async () => {
    setLoading(true);
    setGameOver(false);
    setInOptionsPage(true)
    const newQuestions = await fetchQuizQuestionsExaktikh()

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const prepareTriviaXeirourgikh1 = async () => {
    setLoading(true);
    setGameOver(false);
    setInOptionsPage(true)
    const newQuestions = await fetchQuizQuestionsXeirourgikh1()

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const prepareTriviaXeirourgikh2 = async () => {
    setLoading(true);
    setGameOver(false);
    setInOptionsPage(true)
    const newQuestions = await fetchQuizQuestionsXeirourgikh2()

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const prepareTriviaXeirourgikh3 = async () => {
    setLoading(true);
    setGameOver(false);
    setInOptionsPage(true)
    const newQuestions = await fetchQuizQuestionsXeirourgikh3()

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const prepareTriviaAkinith1 = async () => {
    setLoading(true);
    setGameOver(false);
    setInOptionsPage(true)
    const newQuestions = await fetchQuizQuestionsAkinith1()

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const prepareTriviaAkinith2 = async () => {
    setLoading(true);
    setGameOver(false);
    setInOptionsPage(true)
    const newQuestions = await fetchQuizQuestionsAkinith2()

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // User answer
      const answer = e.currentTarget.value
      // Check answer against correct answer.
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if(correct) setScore(prev => prev + 1);
      // save awsner in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer:  questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject])

    }
  };
  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;
    if(nextQuestion === totalQuestions) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Dentistry Quiz</h1>
        {gameOver || userAnswers.length === totalQuestions ? (
          <div>
            <button className="start" onClick={prepareTriviaExaktikh}>Εξακτική</button><br/>
            <button className="start" onClick={prepareTriviaXeirourgikh1}>Χειρουργική 1</button><br/>
            <button className="start" onClick={prepareTriviaXeirourgikh2}>Χειρουργική 2</button><br/>
            <button className="start" onClick={prepareTriviaXeirourgikh3}>Χειρουργική 3</button><br/>
            <button className="start" onClick={prepareTriviaAkinith1}>Ακίνητη 1</button><br/>
            <button className="start" onClick={prepareTriviaAkinith2}>Ακίνητη 2</button>
          </div>
        ) : null}
        {!gameOver && !inOptionsPage ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && !inOptionsPage && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answer}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}          
          />
        )}
        {!loading && !gameOver && inOptionsPage && (
          <QuizOptions/>
        )}
        {
          !gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number + 1 !== totalQuestions ? (
            <button className="start" onClick={nextQuestion}>Next Question</button>
          ) : null
        }
    </Wrapper>
    </>
  )
}

export default App;
