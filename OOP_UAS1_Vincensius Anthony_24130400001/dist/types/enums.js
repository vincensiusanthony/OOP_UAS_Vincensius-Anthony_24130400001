"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRole = exports.CoachRole = exports.PlayerStatus = exports.PlayerPosition = void 0;
// Enums for predefined roles and statuses
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition["Forward"] = "Forward";
    PlayerPosition["Midfielder"] = "Midfielder";
    PlayerPosition["Defender"] = "Defender";
    PlayerPosition["Goalkeeper"] = "Goalkeeper";
})(PlayerPosition || (exports.PlayerPosition = PlayerPosition = {}));
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus["Active"] = "Active";
    PlayerStatus["Injured"] = "Injured";
    PlayerStatus["Loaned"] = "Loaned";
})(PlayerStatus || (exports.PlayerStatus = PlayerStatus = {}));
var CoachRole;
(function (CoachRole) {
    CoachRole["HeadCoach"] = "Head Coach";
    CoachRole["AssistantCoach"] = "Assistant Coach";
    CoachRole["GoalkeeperCoach"] = "Goalkeeper Coach";
})(CoachRole || (exports.CoachRole = CoachRole = {}));
var StaffRole;
(function (StaffRole) {
    StaffRole["Doctor"] = "Doctor";
    StaffRole["Physiotherapist"] = "Physiotherapist";
    StaffRole["Scout"] = "Scout";
    StaffRole["Administrator"] = "Administrator";
})(StaffRole || (exports.StaffRole = StaffRole = {}));
