"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingSession = void 0;
class TrainingSession {
    constructor(sessionId, teamId, sessionDate, sessionTime, location, focusArea) {
        this.sessionId = sessionId;
        this.teamId = teamId;
        this.sessionDate = sessionDate;
        this.sessionTime = sessionTime;
        this.location = location;
        this.focusArea = focusArea;
    }
    recordAttendance(player, present) {
        console.log(`Attendance for ${player.getFullName()}: ${present ? 'Present' : 'Absent'}`);
    }
}
exports.TrainingSession = TrainingSession;
