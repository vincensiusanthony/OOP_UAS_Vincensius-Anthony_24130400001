import { Match } from "./Match";

export class Stadium {
    getStadiumId(): number {
        throw new Error('Method not implemented.');
    }
    private stadiumId: string;
    private name: string;
    private capacity: number;
    private address: string;

    constructor(stadiumId: string, name: string, capacity: number, address: string) {
        this.stadiumId = stadiumId;
        this.name = name;
        this.capacity = capacity;
        this.address = address;
    }

    public hostMatch(match: Match): void {
        console.log(`Stadium ${this.name} is hosting match ${match.matchId}.`);
    }
}