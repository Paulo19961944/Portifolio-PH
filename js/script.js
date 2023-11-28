let age = document.getElementById("age"); // Age
let today = new Date(); // Get Day Today
let dayBirthday = new Date(1996, 4, 24); // My Birthday
let ageMilliseconds = today - dayBirthday; // Calc the Age (Miliseconds)
let ageDate = new Date(ageMilliseconds); // Convert to Data
let years = ageDate.getUTCFullYear() - 1970; // Get Year of the Age
age.textContent = `${years} Anos`; // Print on HTML
