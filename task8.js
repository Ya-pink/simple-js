
const checkAge = function (value) {
    const age = Number(value);
    if (typeof age !== 'number') {
        console.log('Type Error');
        return;
    }

    let age_2 = 18;
    let age_3 = 60;

    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + ". It's less than " + age_2);
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

checkAge(17);
checkAge(18);
checkAge(61);
checkAge("stringValue");
checkAge("20");

function handleOnClick() {
    const age = prompt("Please enter age", 18);

    checkAge(age);
}