export class Match {
    public matchId: string; // Made public to be accessible for logging
    private homeTeamId: string;     // FK
    private awayTeamId: string;     // FK
    private matchDate: Date;
    private matchTime: string;      // Using string for simplicity (e.g., "20:00")
    private stadiumId: string;      // FK - heldAt: 1
    private homeScore: number = 0;
    private awayScore: number = 0;
    private competition: string;
    private seasonId: string;       // FK - belongsTo: 1

    constructor(matchId: string, homeTeamId: string, awayTeamId: string, matchDate: Date, matchTime: string, stadiumId: string, competition: string, seasonId: string) {
        this.matchId = matchId;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
        this.matchDate = matchDate;
        this.matchTime = matchTime;
        this.stadiumId = stadiumId;
        this.competition = competition;
        this.seasonId = seasonId;
    }

    public recordScore(homeScore: number, awayScore: number): void {
        this.homeScore = homeScore;
        this.awayScore = awayScore;
    }

    public generateReport(): Map<string, any> {
        const report = new Map<string, any>();
        report.set("matchId", this.matchId);
        report.set("homeTeam", this.homeTeamId);
        report.set("awayTeam", this.awayTeamId);
        report.set("score", `${this.homeScore} - ${this.awayScore}`);
        return report;
    }

    public getMatchDate() : Date{
        return this.matchDate;
    }
}