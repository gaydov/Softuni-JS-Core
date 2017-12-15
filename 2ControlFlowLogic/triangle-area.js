function calcTriangleArea(a, b, c) {

    let halfPerimeter = (a + b + c) / 2;

    return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
}