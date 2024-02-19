const userAge = Number(prompt("Insert age")) 
const kmtrip = Number(prompt("insert Km")) 

console.log(userAge, kmtrip)

let ticketprice = (kmtrip * 0.21)
console.log(ticketprice.toFixed(2))


if (userAge < 18){
    let ticketMinor = (ticketprice - (ticketprice/100)*20)
    console.log(ticketMinor.toFixed(2))
    alert("prezzo biglietto €" + ticketMinor.toFixed(2))
} else if  (userAge > 65){
    let ticketElder = (ticketprice - (ticketprice/100)*40)
    console.log(ticketElder.toFixed(2))
    alert("prezzo biglietto €" + ticketElder.toFixed(2))
} else{
    console.log(ticketprice.toFixed(2))
    alert("prezzo biglietto €" + ticketprice.toFixed(2))
}