function calcQuadraticEquation(a, b, c) {

    let D = Math.pow(b, 2) - 4 * a * c;

    if (D < 0) {

        return "No";
    }
    else if (D === 0) {

        let x = -(b / (2 * a));
        return x;
    }
    else {

        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);

        return `${Math.min(x1, x2)} ${Math.max(x1, x2)}`;
    }
}