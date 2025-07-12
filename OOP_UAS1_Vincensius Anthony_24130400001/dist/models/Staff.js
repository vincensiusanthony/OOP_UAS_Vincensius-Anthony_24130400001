"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
const Person_1 = require("../core/Person");
class Staff extends Person_1.Person {
    constructor(personId, firstName, lastName, dateOfBirth, nationality, clubId, role, department) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
        this.clubId = clubId;
        this.role = role;
        this.department = department;
    }
    performDuties() {
        console.log(`Staff member ${this.getFullName()} is performing duties in the ${this.department} department.`);
    }
}
exports.Staff = Staff;
