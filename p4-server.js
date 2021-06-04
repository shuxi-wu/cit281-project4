/* CIT 281 Project 4
Name: Shuxi Wu */

const {getAnswer,
    getAnswers,
    getQuestion,
    getQuestionAnswer,
    getQuestions,
    getQuestionsAnswers,
    addQuestionAnswer} = require('./p4-module')

const {data} = require('./p4-data')

const fastify = require('fastify')()

//return all questions
fastify.get('/cit/question', (request, reply) => {
    let response = {error: '', statusCode: 200}
    response.questions = getQuestions()
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(response)
})

//return all answers
fastify.get('/cit/answer', (request, reply) => {
    let response = {error: '', statusCode: 200}
    response.answers = getAnswers()
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(response)
})

//return all questions and answers
fastify.get('/cit/questionanswer', (request, reply) => {
    let response = {error: '', statusCode: 200}
    response.questions_answers = getQuestionsAnswers()
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(response)
})

//return specific question
fastify.get('/cit/question/:number', (request, reply) => {
    let {number} = request.params 
    let response = getQuestion(parseInt(number))
    response.statusCode = 200
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(response)
})

//return specific answer
fastify.get('/cit/answer/:number', (request, reply) => {
    let {number} = request.params 
    let response = getAnswer(parseInt(number))
    response.statusCode = 200
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(response)
})

//return specific answer and question
fastify.get('/cit/questionanswer/:number', (request, reply) => {
    let {number} = request.params 
    let response = getQuestionAnswer(parseInt(number))
    response.statusCode = 200
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(response)
})

//wildcard route
fastify.get('*', (request, reply) => {
    let response = {error: 'Route not found', statusCode: 404}
    reply
        .code(404)
        .header('Content-Type', 'application/json')
        .send(response)
})

//support post 
fastify.post('/cit/question', (request, reply) => {
    let {question, answer} = request.body
    let response = {error: addQuestionAnswer({question, answer}).error, 
    statusCode: 201, number: addQuestionAnswer({question, answer}).number} //check
    reply
        .code(201)
        .header('Content-Type', 'application/json')
        .send(response)
})

//set up server
const host = 'localhost'
const port = 8080
fastify.listen(port, host, () => {
    console.log(`server running at http://${host}:${port}`)
})






