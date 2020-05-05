const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");

const PeopleService = require("./people-service");
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", v1);

v1.put("/people/:id", (request, response) => {
  const id = request.params.id;
  const people = request.body;

  const potentialUpdatedPeople = peopleService.updatePeople(id, people);

  if (potentialUpdatedPeople) {
    return response.sendStatus(HttpStatus.OK);
  } else {
    return response.sendStatus(HttpStatus.NOT_FOUND);
  }
});

v1.get("/people", async (request, response) => {
  try {
    const peoples = await peopleService.getPeople(request.query);
    response.send(peoples);
  } catch (e) {
    response.sendStatus(HttpStatus.BAD_REQUEST);
  }
});

module.exports = app;
