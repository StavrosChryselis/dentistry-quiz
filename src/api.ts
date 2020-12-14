import { shuffleArray } from './utils';
import * as data from './questions_exaktikh.json'

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HEAD = "head",
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// NOTE:
export type QuestionState = Question & { answer: string[] }

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty):Promise<({
  answer: string[];
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[])> => {
  let rval:QuestionState[] = []
  let any_data = data as any
  
  for(let i = 0; i < any_data.default.length; i++) {
    rval.push({answer:any_data.default[i].answer,
               category:'dentistry',
               correct_answer:any_data.default[i].correct_answer,
               difficulty:'easy',
               incorrect_answers:any_data.default[i].incorrect_answers,
               question:any_data.default[i].question,
               type:'multiple'})
  }
    // const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    // const data = await(await fetch(endpoint)).json();
    // const rval = data.results.map((question: Question) => ({
    //   ...question,
    //   answer: shuffleArray([
    //       ...question.incorrect_answers,
    //       question.correct_answer
    //   ])
    // }))
    // console.log(rval)
    // return rval
    return shuffleArray(rval.slice(1,50))
}
