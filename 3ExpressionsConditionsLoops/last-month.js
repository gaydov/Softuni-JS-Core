function getLastDayOfPreviousMonth([day, month, year]) {

    /* Alternative:
    let date = new Date(year, month - 1, day);
    date.setDate(1);    // going to 1st of the month
    date.setHours(-1); // going to last hour before this date even started */

    let date = new Date(year, month - 1, 0);
    return date.getDate();
}