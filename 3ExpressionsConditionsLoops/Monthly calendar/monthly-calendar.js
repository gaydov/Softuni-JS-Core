function calendar([day, month, year]) {

    let result = "<table>\n";
    result += "  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
    result += "  <tr>";

    let date = new Date(year, month - 1, day);
    let thisMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let firstWeekDayOfThisMonth = thisMonth.getDay();

    let dateCopy = new Date(date);
    dateCopy.setDate(1);
    dateCopy.setHours(-1);

    for (let weekDay = 0; weekDay < firstWeekDayOfThisMonth; weekDay++) {

        let lastDatePrevMonth = dateCopy.getDate();
        let dateFromPrevMonth = lastDatePrevMonth - firstWeekDayOfThisMonth + 1 + weekDay;

        result += `<td class="prev-month">${dateFromPrevMonth}</td>`;
    }

    let nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    let daysInCurrentMonth = Math.round((nextMonth.getTime() - thisMonth.getTime()) / (1000 * 60 * 60 * 24));
    let weekDay = firstWeekDayOfThisMonth;

    for (let dayCounter = 1; dayCounter <= daysInCurrentMonth; dayCounter++) {

        weekDay %= 7;

        if (Number(day) === dayCounter) {

            result += `<td class="today">${dayCounter}</td>`;

        } else {

            result += `<td>${dayCounter}</td>`;
        }

        // after Saturday a new row is created
        if (weekDay === 6) {

            result += "</tr>\n<tr>";
        }

        weekDay++;
    }

    let lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), daysInCurrentMonth);

    // no need to print next days of the previous month if the last day is Saturday
    if (lastDayOfCurrentMonth.getDay() === 6) {

        result = result.slice(0, -4);
        result += "</table>";
        return result;
    }

    // setting it to the first day of the next month
    lastDayOfCurrentMonth.setHours(25);
    let dateFromNextMonth = 1;
    for (let i = lastDayOfCurrentMonth.getDay(); i < 7; i++) {

        result += `<td class="next-month">${dateFromNextMonth}</td>`;
        dateFromNextMonth++;
    }

    result += "</tr>\n</table>";
    return result;
}