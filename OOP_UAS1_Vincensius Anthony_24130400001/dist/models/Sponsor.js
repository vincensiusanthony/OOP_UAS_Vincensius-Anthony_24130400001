"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sponsor = void 0;
class Sponsor {
    constructor(sponsorId, name, contactPerson, phone, email, contractValue, contractStartDate, contractEndDate) {
        this.sponsorId = sponsorId;
        this.name = name;
        this.contactPerson = contactPerson;
        this.phone = phone;
        this.email = email;
        this.contractValue = contractValue;
        this.contractStartDate = contractStartDate;
        this.contractEndDate = contractEndDate;
    }
    renewContract(newEndDate, newValue) {
        this.contractEndDate = newEndDate;
        this.contractValue = newValue;
        console.log(`Contract for sponsor ${this.name} has been renewed.`);
    }
}
exports.Sponsor = Sponsor;
