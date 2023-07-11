let date = document.getElementById("date");
let days = document.getElementById("days");
let months = document.getElementById("months");
let years = document.getElementById("years");


todaysDate = new Date();

const newWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const newMonths = ["January", "February", "March", "April", "May",
 "June", "July", "August", "September", "November", "December" ]




date.innerHTML = todaysDate.getDate();
days.innerHTML = newWeeks[todaysDate.getDay()];
months.innerHTML = newMonths[todaysDate.getMonth()];
years.innerHTML = todaysDate.getFullYear();