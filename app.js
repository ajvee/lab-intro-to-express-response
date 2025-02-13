const express = require("express");
// const PORT = process.env.PORT || 3003;
const app = express();

app.get("/", (request, response) => {
    response.status(200).send("Hello World");
})

app.get("/terminator", (request, response) => {
    response.status(200).send("Ill be back")
    // response.send('Hasta la vista, baby');
})

app.get("/Emeril", (request, response) => {
    response.send("Bam!");
})

app.get("/Rocky", (request, response) => {
    response.send("Yo, Adrian");
})

app.get("/James-Bond", (request, response) => {
    response.send("the name is Bond, James Bond");
})

app.get("/Jack-Dawson", (request, response) => {
    response.send("I'm king of the world!");
})

app.get("/Fraiser", (request, response) => {
    response.send("I'm listening");
})

app.get("/Bruce-Banner", (request, response) => {
    response.send("Don't make me angry");
})

app.get("/Regis", (request, response) => {
    response.send("Is that your final answer?");
})

app.get("/Batman", (request, response) => {
    response.send("To the Batmobile!");
})

app.get("/Borg", (request, response) => {
    response.send("Resistance is futile");
})

app.get("/magic8", (request, response) => {

    const magic8Responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - Definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes, and signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ]
      const randomIndex = Math.floor(Math.random() * magic8Responses.length);
      const randomResponse = magic8Responses[randomIndex];
      
      response.send(`<h1>${randomResponse}<h1>`);
    
})

// app.listen(PORT, () => {
//     console.log(`Listening for requests on port ${PORT}`)
// })

module.exports = app
