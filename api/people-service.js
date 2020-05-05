const fs = require("fs");
const undefined = 0;
const notFound = -1;

module.exports = class PeopleService {
  constructor() {
    this.peoples = JSON.parse(
      fs.readFileSync(__dirname + "/people.json", "utf8")
    );
  }

  updatePeople(id, people) {
    // To be implemented!
    const parseId = parseInt(id, 10);
    const index = this.peoples.findIndex((p) => p.id === parseId);

    if (index !== notFound) {
      this.peoples[index] = people;
      return this.peoples[index];
    }
  }

  getPeople(filters) {
    // To be implemented!
    if (Object.keys(filters).length === undefined) {
      return this.peoples;
    } else {
      return this.peoples.filter(
        (p) => p[Object.keys(filters)[0]] === Object.values(filters)[0]
      );
    }
  }
};
