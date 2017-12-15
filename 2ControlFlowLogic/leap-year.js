function isYearLeap(year) {

    let isYearLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isYearLeap) {

        return "yes";
    }

    return "no";
}