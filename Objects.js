// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
function Kiosk(quantity,fruitName,price){
    let total=quantity*price   
    return `${quantity},${fruitName} for ksh ${total}`
}


console.log(Kiosk(4,"Apple"))





