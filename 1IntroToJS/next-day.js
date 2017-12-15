function findNextDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    let nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);

    return `${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`;
}