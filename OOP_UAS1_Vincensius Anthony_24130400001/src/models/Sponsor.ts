export class Sponsor {
    private sponsorId: string;
    public name: string; // Public for easy access in logging
    private contactPerson: string;
    private phone: string;
    private email: string;
    private contractValue: number;
    private contractStartDate: Date;
    private contractEndDate: Date;
    
    constructor(sponsorId: string, name: string, contactPerson: string, phone: string, email: string, contractValue: number, contractStartDate: Date, contractEndDate: Date) {
        this.sponsorId = sponsorId;
        this.name = name;
        this.contactPerson = contactPerson;
        this.phone = phone;
        this.email = email;
        this.contractValue = contractValue;
        this.contractStartDate = contractStartDate;
        this.contractEndDate = contractEndDate;
    }

    public renewContract(newEndDate: Date, newValue: number): void {
        this.contractEndDate = newEndDate;
        this.contractValue = newValue;
        console.log(`Contract for sponsor ${this.name} has been renewed.`);
    }
}