function calcFigureArea(w, h, W, H) {

    let firstRectangleArea = W * H;
    let secondRectangleArea = w * h;
    let area = firstRectangleArea + secondRectangleArea - (Math.min(w, W) * Math.min(h, H));
    console.log(area);
}