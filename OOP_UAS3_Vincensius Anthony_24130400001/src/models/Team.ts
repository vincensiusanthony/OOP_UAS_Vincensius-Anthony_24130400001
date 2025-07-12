import { Player } from './persons/Player';
import { Coach } from './persons/Coach';
import { PersonFactory, PersonDetails } from '../factories/PersonFactory';

export class Team {
    public players: Player[] = [];
    public coach!: Coach; // A team must have one coach

    constructor(
        public teamId: string,
        public clubId: string,
        public name: string
    ) {}

    // Uses the factory to add a player
    addPlayerFactory(factory: PersonFactory, details: PersonDetails): Player {
        // Ensure teamId is set for the player
        const playerDetails = { ...details, teamId: this.teamId };
        const newPlayer = factory.createPerson('player', playerDetails) as Player;
        this.players.push(newPlayer);
        console.log(`Player ${newPlayer.getFullName()} added to ${this.name}.`);
        return newPlayer;
    }

    // Assigns a coach to the team
    assignCoach(coach: Coach): void {
        this.coach = coach;
        console.log(`Coach ${coach.getFullName()} assigned to ${this.name}.`);
    }
}