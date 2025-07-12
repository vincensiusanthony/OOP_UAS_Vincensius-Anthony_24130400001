import { PersonFactory, PersonDetails } from './PersonFactory';
import { Person } from '../models/persons/Person';
import { Player } from '../models/persons/Player';
import { Coach } from '../models/persons/Coach';
import { Staff } from '../models/persons/Staff';

// The Concrete Factory implementation
export class ConcretePersonFactory implements PersonFactory {
    public createPerson(type: 'player' | 'coach' | 'staff', details: PersonDetails): Person {
        const commonDetails = {
            personId: `P-${Math.random().toString(36).substr(2, 9)}`,
            firstName: details.firstName,
            lastName: details.lastName,
            dateOfBirth: new Date(details.dateOfBirth),
            nationality: details.nationality,
        };

        switch (type) {
            case 'player':
                return new Player(
                    commonDetails.personId, commonDetails.firstName, commonDetails.lastName,
                    commonDetails.dateOfBirth, commonDetails.nationality,
                    details.teamId, details.position, details.jerseyNumber,
                    details.marketValue, details.status
                );
            case 'coach':
                return new Coach(
                    commonDetails.personId, commonDetails.firstName, commonDetails.lastName,
                    commonDetails.dateOfBirth, commonDetails.nationality,
                    details.teamId, details.role, details.licenseLevel
                );
            case 'staff':
                return new Staff(
                    commonDetails.personId, commonDetails.firstName, commonDetails.lastName,
                    commonDetails.dateOfBirth, commonDetails.nationality,
                    details.clubId, details.role, details.department
                );
            default:
                throw new Error('Invalid person type specified.');
        }
    }
}