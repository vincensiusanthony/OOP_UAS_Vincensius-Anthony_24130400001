import { Person } from '../models/persons/Person';

// The factory method can accept any key-value pair for details
export type PersonDetails = { [key: string]: any };

// The Factory Interface
export interface PersonFactory {
    createPerson(type: 'player' | 'coach' | 'staff', details: PersonDetails): Person;
}