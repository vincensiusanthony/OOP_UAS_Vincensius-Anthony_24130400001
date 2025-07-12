import { Team } from './Team';
import { Staff } from './persons/Staff';
import { Sponsor } from './Sponsor';
import { Stadium } from './Stadium';
import { PersonFactory, PersonDetails } from '../factories/PersonFactory';

export class Club {
    public teams: Team[] = [];
    public staff: Staff[] = [];
    public sponsors: Sponsor[] = [];

    constructor(
        public clubId: string,
        public name: string,
        public stadium: Stadium, // 1-to-1 relationship with Stadium
        public foundingDate: Date
    ) {}
    
    // Uses the factory to hire staff
    hireStaffFactory(factory: PersonFactory, details: PersonDetails): Staff {
        // Ensure clubId is set for the staff member
        const staffDetails = { ...details, clubId: this.clubId };
        const newStaff = factory.createPerson('staff', staffDetails) as Staff;
        this.staff.push(newStaff);
        console.log(`Hired ${newStaff.getFullName()} for the ${newStaff.department} department.`);
        return newStaff;
    }

    signSponsor(sponsor: Sponsor): void {
        this.sponsors.push(sponsor);
        console.log(`Club ${this.name} signed a new sponsorship deal with ${sponsor.name}.`);
    }

    addTeam(team: Team): void {
        this.teams.push(team);
    }
}