import { ConcretePersonFactory } from './factories/ConcretePersonFactory';
import { Club } from './models/Club';
import { Team } from './models/Team';
import { Stadium } from './models/Stadium';
import { Coach } from './models/persons/Coach';

// 1. Create a factory instance
const personFactory = new ConcretePersonFactory();
console.log("--- Factory created ---");

// 2. Setup the Club and its assets
const homeStadium = new Stadium('STAD-01', 'UML Arena', 80000, 'Diagram City');
const myClub = new Club('CLUB-FC-01', 'FC Cakrawala', homeStadium, new Date('1985-10-26'));
console.log(`\n--- Club '${myClub.name}' established ---`);

// 3. Create a team and add it to the club
const firstTeam = new Team('TEAM-01', myClub.clubId, `${myClub.name} First Team`);
myClub.addTeam(firstTeam);
console.log(`\n--- Team '${firstTeam.name}' created ---`);

// 4. Use the factory to create and add a Coach and Players to the team
const headCoach = personFactory.createPerson('coach', {
    firstName: 'Pep', lastName: 'Guardiola', dateOfBirth: '1971-01-18', nationality: 'Spanish',
    teamId: firstTeam.teamId, role: 'Head Coach', licenseLevel: 'UEFA Pro'
}) as Coach;
firstTeam.assignCoach(headCoach);

console.log("\n--- Adding players using the factory ---");
firstTeam.addPlayerFactory(personFactory, {
    firstName: 'Leo', lastName: 'Messi', dateOfBirth: '1987-06-24', nationality: 'Argentinian',
    position: 'Forward', jerseyNumber: 10, marketValue: 50000000, status: 'Active'
});

firstTeam.addPlayerFactory(personFactory, {
    firstName: 'Virgil', lastName: 'van Dijk', dateOfBirth: '1991-07-08', nationality: 'Dutch',
    position: 'Defender', jerseyNumber: 4, marketValue: 75000000, status: 'Active'
});

// 5. Use the factory to hire staff for the club
console.log("\n--- Hiring club staff using the factory ---");
myClub.hireStaffFactory(personFactory, {
    firstName: 'John', lastName: 'Doe', dateOfBirth: '1990-05-15', nationality: 'English',
    role: 'Physiotherapist', department: 'Medical'
});

// 6. Display the final club structure
console.log("\n\n--- 🌟 Final Club Structure 🌟 ---");
console.log(JSON.stringify(myClub, null, 2));