 // Abstract base class for all people in the system
export abstract class Person {
    private personId: string;
    private firstName: string;
    private lastName: string;
    private dateOfBirth: Date;
    private nationality: string;

    constructor(personId: string, firstName: string, lastName: string, dateOfBirth: Date, nationality: string) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.nationality = nationality;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}