function printConeVolumeAndArea(radius, height) {

    let volume = Math.PI * radius * radius * height / 3;
    let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}