const userAge = Number(prompt("Insert age")) 
const kmtrip = Number(prompt("insert Km")) 

console.log(userAge, kmtrip)

let ticketprice = (kmtrip * 0.21)
console.log(ticketprice)


if (userAge < 18){
    let ticketMinor = (ticketprice - (ticketprice/100)*20)
    console.log(ticketMinor)

} else if  (userAge > 65){
    let ticketElder = (ticketprice - (ticketprice/100)*40)
    console.log(ticketElder)
} else{
    console.log(ticketprice)
}