"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Abstract base class for all people in the system
class Person {
    constructor(personId, firstName, lastName, dateOfBirth, nationality) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.nationality = nationality;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
exports.Person = Person;
