import * as data_exaktikh from './questions_exaktikh.json'
import * as data_xeirourgikh_1 from './questions_xeirourgiki_1.json'
import * as data_xeirourgikh_2 from './questions_xeirourgiki_2.json'
import * as data_xeirourgikh_3 from './questions_xeirourgiki_3.json'
import * as data_akinith_1 from './questions_akinith_1.json'
import * as data_akinith_2 from './questions_akinith_2.json'

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

export type QuestionState = Question & { answer: string[] }

export const fetchQuizQuestionsExaktikh = async ():Promise<({
  answer: string[];
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[])> => {
  let rval:QuestionState[] = []
  let any_data = data_exaktikh as any
  
  const to_remove_indices : number[]= [
    138,
    176,
    186,
    225,
    228,
    299,
    319,
    342,
    352,
    389,
    476
  ]

  for(let i = 0; i < any_data.default.length; i++) {
    let index:number = 0
    const index_matches = any_data.default[i].question.match(/^([0-9]+)/)

    if(index_matches)
      index = Number.parseInt(index_matches[1])

    if(to_remove_indices.find(i => i === index) === undefined)
      rval.push({answer:any_data.default[i].answer,
                category:'dentistry',
                correct_answer:any_data.default[i].correct_answer,
                difficulty:'easy',
                incorrect_answers:any_data.default[i].incorrect_answers,
                question:any_data.default[i].question,
                type:'multiple'})
    else
        console.log(`Removing question ${index}`)
  }
  
  return rval
}

export const fetchQuizQuestionsXeirourgikh1 = async ():Promise<({
  answer: string[];
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[])> => {
  let rval:QuestionState[] = []
  let any_data = data_xeirourgikh_1 as any
  
  const to_remove_indices : number[] = [
    // 138,
    // 176,
    // 186,
    // 225,
    // 228,
    // 299,
    // 319,
    // 342,
    // 352,
    // 389,
    // 476
  ]

  for(let i = 0; i < any_data.default.length; i++) {
    let index:number = 0
    const index_matches = any_data.default[i].question.match(/^([0-9]+)/)

    if(index_matches)
      index = Number.parseInt(index_matches[1])

    if(to_remove_indices.find(i => i === index) === undefined)
      rval.push({answer:any_data.default[i].answer,
                category:'dentistry',
                correct_answer:any_data.default[i].correct_answer,
                difficulty:'easy',
                incorrect_answers:any_data.default[i].incorrect_answers,
                question:any_data.default[i].question,
                type:'multiple'})
    else
        console.log(`Removing question ${index}`)
  }
  
  return rval
}

export const fetchQuizQuestionsXeirourgikh2 = async ():Promise<({
  answer: string[];
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[])> => {
  let rval:QuestionState[] = []
  let any_data = data_xeirourgikh_2 as any
  
  const to_remove_indices : number[] = [
    // 138,
    // 176,
    // 186,
    // 225,
    // 228,
    // 299,
    // 319,
    // 342,
    // 352,
    // 389,
    // 476
  ]

  for(let i = 0; i < any_data.default.length; i++) {
    let index:number = 0
    const index_matches = any_data.default[i].question.match(/^([0-9]+)/)

    if(index_matches)
      index = Number.parseInt(index_matches[1])

    if(to_remove_indices.find(i => i === index) === undefined)
      rval.push({answer:any_data.default[i].answer,
                category:'dentistry',
                correct_answer:any_data.default[i].correct_answer,
                difficulty:'easy',
                incorrect_answers:any_data.default[i].incorrect_answers,
                question:any_data.default[i].question,
                type:'multiple'})
    else
        console.log(`Removing question ${index}`)
  }
  
  return rval
}

export const fetchQuizQuestionsXeirourgikh3 = async ():Promise<({
  answer: string[];
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[])> => {
  let rval:QuestionState[] = []
  let any_data = data_xeirourgikh_3 as any
  
  const to_remove_indices : number[] = [
    // 138,
    // 176,
    // 186,
    // 225,
    // 228,
    // 299,
    // 319,
    // 342,
    // 352,
    // 389,
    // 476
  ]

  for(let i = 0; i < any_data.default.length; i++) {
    let index:number = 0
    const index_matches = any_data.default[i].question.match(/^([0-9]+)/)

    if(index_matches)
      index = Number.parseInt(index_matches[1])

    if(to_remove_indices.find(i => i === index) === undefined)
      rval.push({answer:any_data.default[i].answer,
                category:'dentistry',
                correct_answer:any_data.default[i].correct_answer,
                difficulty:'easy',
                incorrect_answers:any_data.default[i].incorrect_answers,
                question:any_data.default[i].question,
                type:'multiple'})
    else
        console.log(`Removing question ${index}`)
  }
  
  return rval
}

export const fetchQuizQuestionsAkinith1 = async ():Promise<({
  answer: string[];
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[])> => {
  let rval:QuestionState[] = []
  let any_data = data_akinith_1 as any
  
  const to_remove_indices : number[] = [
    // 138,
    // 176,
    // 186,
    // 225,
    // 228,
    // 299,
    // 319,
    // 342,
    // 352,
    // 389,
    // 476
  ]

  for(let i = 0; i < any_data.default.length; i++) {
    let index:number = 0
    const index_matches = any_data.default[i].question.match(/^([0-9]+)/)

    if(index_matches)
      index = Number.parseInt(index_matches[1])

    if(to_remove_indices.find(i => i === index) === undefined)
      rval.push({answer:any_data.default[i].answer,
                category:'dentistry',
                correct_answer:any_data.default[i].correct_answer,
                difficulty:'easy',
                incorrect_answers:any_data.default[i].incorrect_answers,
                question:any_data.default[i].question,
                type:'multiple'})
    else
        console.log(`Removing question ${index}`)
  }
  
  return rval
}

export const fetchQuizQuestionsAkinith2 = async ():Promise<({
  answer: string[];
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[])> => {
  let rval:QuestionState[] = []
  let any_data = data_akinith_2 as any
  
  const to_remove_indices : number[] = [
    // 138,
    // 176,
    // 186,
    // 225,
    // 228,
    // 299,
    // 319,
    // 342,
    // 352,
    // 389,
    // 476
  ]

  for(let i = 0; i < any_data.default.length; i++) {
    let index:number = 0
    const index_matches = any_data.default[i].question.match(/^([0-9]+)/)

    if(index_matches)
      index = Number.parseInt(index_matches[1])

    if(to_remove_indices.find(i => i === index) === undefined)
      rval.push({answer:any_data.default[i].answer,
                category:'dentistry',
                correct_answer:any_data.default[i].correct_answer,
                difficulty:'easy',
                incorrect_answers:any_data.default[i].incorrect_answers,
                question:any_data.default[i].question,
                type:'multiple'})
    else
        console.log(`Removing question ${index}`)
  }
  
  return rval
}