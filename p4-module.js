/* CIT 281 Project 4
Name: Shuxi Wu */

const {data} = require('./p4-data')

//get questions
function getQuestions() {
    let questions = []
    for (q of data) {
        questions.push(q.question)
    }

    return questions 
}

//get answers
function getAnswers() {
    let answers = []
    for (q of data) {
        answers.push(q.answer)
    }
    return answers 
}

//return original
function getQuestionsAnswers() {
    let datacopy = [...data]
    return datacopy
}

//get question number
function getQuestion(number = "") {
    if (number != '' && parseInt(number) > 0 && parseInt(number) <= data.length) {
        let num = parseInt(number) - 1
        let ob = {
        question: data[num].question,
        number: parseInt(data[num].question.match(/\d/)[0]), //get the number, not the object
        }
        ob.error = ob.question == undefined || null ? 'error occured' : ''
        return ob 
    } else if (number === '') {
        let ob = {
            question: '',
            number: '',
            error: 'Question number must be an integer'
        }
        return ob 
    } else if (number < 1) {
        let ob = {
            question: '',
            number: '',
            error: 'Question number must be >= 1'
        }
        return ob 
    } else if (number > 3) {
        let ob = {
            question: '',
            number: '',
            error: 'Question number must be less than the number of questions (3)'
        }
        return ob 
    }
    
}

//get answer number
function getAnswer(number = "") {
    if (number != '' && parseInt(number) > 0 && parseInt(number) <= data.length) {
        let num = parseInt(number) - 1
        let ob = {
        answer: data[num].answer,
        number: parseInt(data[num].answer.match(/\d/)[0]), //get the number, not the object
        }
        ob.error = ob.answer == undefined || null ? 'error occured' : ''
        return ob 
    } else if (number === '') {
        let ob = {
            answer: '',
            number: '',
            error: 'Answer number must be an integer'
        }
        return ob 
    } else if (number < 1) {
        let ob = {
            answer: '',
            number: '',
            error: 'Answer number must be >= 1'
        }
        return ob 
    } else if (number > 3) {
        let ob = {
            answer: '',
            number: '',
            error: 'Answer number must be less than the number of questions (3)'
        }
        return ob 
    }
    
}


//get question and answer
function getQuestionAnswer(number = "") {
    if (number != '' && parseInt(number) > 0 && parseInt(number) <= data.length) {
        let num = parseInt(number) - 1
        let ob = {
        question: data[num].question,
        answer: data[num].answer,
        number: parseInt(data[num].answer.match(/\d/)[0]), //get the number, not the object
        }
        ob.error = ob.answer == undefined || null ? 'error occured' : ''
        return ob 
    } else if (number === '') {
        let ob = {
            question: '',
            answer: '',
            number: '',
            error: 'Question number must be an integer'
        }
        return ob 
    } else if (number < 1) {
        let ob = {
            question: '',
            answer: '',
            number: '',
            error: 'Question number must be >= 1'
        }
        return ob 
    } else if (number > 3) {
        let ob = {
            question: '',
            answer: '',
            number: '',
            error: 'Question number must be less than the number of questions (3)'
        }
        return ob 
    }
    
}

//add question and answer
function addQuestionAnswer(info = {}) {
    if (info.answer == undefined && info.question == undefined) {
        let ob = {
            error: 'Object question property required',
            message: '',
            number: -1
        }
        return ob 
    } else if (info.answer == undefined && info.question != undefined) {
        let ob = {error: 'Object answer property required', message: '', number: -1}
        return ob 
    } else if (info.question == undefined && info.answer != undefined) {
        let ob = {error: 'Object question property required', message: '', number: -1}
        return ob 
    } else if (info.question != undefined && info.answer != undefined) {
        let ob = {error: '', message: 'Question added', number: parseInt(info.question.match(/\d/)[0])}
        return ob
    }
}

module.exports = {
    getAnswer,
    getAnswers,
    getQuestion,
    getQuestionAnswer,
    getQuestions,
    getQuestionsAnswers,
    addQuestionAnswer
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  // addQuestionAnswer()
if (testAdd) {
    testing(
      "addQuestionAnswer",
      { d: "()", f: addQuestionAnswer() },
      { d: "({})", f: addQuestionAnswer({}) },
      { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
      { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
      {
        d: '(question: "Q4", answer: "A4")',
        f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
      }
    );
  }
