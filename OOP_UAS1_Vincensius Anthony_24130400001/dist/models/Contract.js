"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
class Contract {
    constructor(contractId, clubId, personId, startDate, endDate, salary, clauses) {
        this.contractId = contractId;
        this.clubId = clubId;
        this.personId = personId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.salary = salary;
        this.clauses = clauses;
    }
    renew() {
        console.log(`Renewing contract ${this.contractId}.`);
    }
    terminate() {
        console.log(`Terminating contract ${this.contractId}.`);
    }
}
exports.Contract = Contract;
