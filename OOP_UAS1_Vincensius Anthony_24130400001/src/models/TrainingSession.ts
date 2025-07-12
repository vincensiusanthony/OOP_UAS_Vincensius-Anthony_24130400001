import { Player } from "./Player";

export class TrainingSession {
    private sessionId: string;
    private teamId: string; // FK
    private sessionDate: Date;
    private sessionTime: string;
    private location: string;
    private focusArea: string;

    constructor(sessionId: string, teamId: string, sessionDate: Date, sessionTime: string, location: string, focusArea: string) {
        this.sessionId = sessionId;
        this.teamId = teamId;
        this.sessionDate = sessionDate;
        this.sessionTime = sessionTime;
        this.location = location;
        this.focusArea = focusArea;
    }

    public recordAttendance(player: Player, present: boolean): void {
        console.log(`Attendance for ${player.getFullName()}: ${present ? 'Present' : 'Absent'}`);
    }
}