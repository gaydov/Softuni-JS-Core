function getDriverBehaviour([speed, drivingZone]) {

    function getLimitForZone(zone) {

        switch (zone) {

            case "motorway":
                return 130;

            case "interstate":
                return 90;

            case "city":
                return 50;

            case "residential":
                return 20;
        }
    }

    let limit = getLimitForZone(drivingZone);

    let speedDiff = Number(speed - limit);

    if (speedDiff <= 0) {
        return "";
    } else if (speedDiff <= 20) {
        return "speeding";
    } else if (speedDiff <= 40) {
        return "excessive speeding";
    } else {
        return "reckless driving";
    }
}