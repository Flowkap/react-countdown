export const WeekDays = Object.freeze({
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
    SUN: 0,
});

export function getNextDayOfWeek(date, dayOfWeek, hour) {
    if (dayOfWeek < 0 || dayOfWeek > 6) {
        throw new Error("invalid value for dayOfWeek [0..6]!");
    }

    var result = new Date(date.getTime());
    result.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    if (hour) {
        result.setHours(hour);
        result.setMinutes(0);
        result.setUTCSeconds(0);
    }
    return result;
}
