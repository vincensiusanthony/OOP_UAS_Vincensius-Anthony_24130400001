export class Contract {
    private contractId: string;
    private clubId: string;   // FK
    private personId: string; // Generic FK to Person
    private startDate: Date;
    private endDate: Date;
    private salary: number;
    private clauses: string;

    constructor(contractId: string, clubId: string, personId: string, startDate: Date, endDate: Date, salary: number, clauses: string) {
        this.contractId = contractId;
        this.clubId = clubId;
        this.personId = personId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.salary = salary;
        this.clauses = clauses;
    }

    public renew(): void {
        console.log(`Renewing contract ${this.contractId}.`);
    }
    
    public terminate(): void {
        console.log(`Terminating contract ${this.contractId}.`);
    }
}