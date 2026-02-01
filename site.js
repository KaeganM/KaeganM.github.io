console.log("Java Script Connected");
console.log("Test Message");


const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const Time = document.querySelector('#welcome');
if (isMorning) {
    Time.textContent = ' Welcome and Good Morning,';
}
else if (isAfternoon) {
    Time.textContent = 'Welcome and Good Afternoon,';
}
else if (isEvening) {
    Time.textContent = 'Welcome and Good Evening,';
}

 localStorage.setItem( "It's a secret to everybody.", "You have discovered the secret message which is this message congrats");