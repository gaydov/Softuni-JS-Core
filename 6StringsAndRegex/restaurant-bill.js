function printRestaurantBill(orderArr) {

    let products = [];
    let bill = 0;

    for (let index = 0; index < orderArr.length; index++) {

        if (index % 2 === 0) {
            products.push(orderArr[index]);
        } else {
            bill += Number(orderArr[index]);
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${bill}`);
}