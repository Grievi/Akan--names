const log = console.log;

let masculineNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
let feminineNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  " Yaa",
  "Afua",
  "Ama",
];
let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let CC, YY, MM, DD, d, dayValue;

// FORM VALIDATION

// TARGET RADIO BUTTONS

let genders = document.getElementsByName("gender");

const validate = () => {
  // CHECK INPUT VALUE FOR YEAR

  if (
    document.inputForm.year.value === "" ||
    document.inputForm.year.value.length !== 4 ||
    document.inputForm.year.value > 2100 ||
    document.inputForm.year.value <= 1900
  ) {
    alert("Please enter a valid year...");
    document.inputForm.year.focus();
    return false;
  }

    // CHECK INPUT VALUE FOR MONTH
    else if (
      document.inputForm.month.value === "" ||
      isNaN(document.inputForm.month.value) ||
      document.inputForm.month.value.length !== 2 ||
      document.inputForm.month.value > 12 ||
      document.inputForm.month.value <= 0
    ) {
      alert("Please enter a valid month(range 1 - 12)");
      document.inputForm.month.focus();
      return false;
    }

  // CHECK INPUT VALUE FOR DATE
  else if (
    document.inputForm.date.value === "" ||
    isNaN(document.inputForm.month.value) ||
    document.inputForm.month.value.length !== 2 ||
    document.inputForm.date.value > 31 ||
    document.inputForm.date.value <= 0
  ) {
    alert("Please enter a valid date...");
    document.inputForm.day.focus();
    return false;
  }

  // CHECK IF THE USER HAS SELECTED A GENDER
  else if (genders[0].checked === false && genders[1].checked === false) {
    alert("Please Select a gender...");
    return false;
  } else {
    return true;
  }
};

// GET DAY VALUE

const getDayValue = () => {
  year = document.querySelector("#year").value;
  CC = parseInt(year.substring(0, 2));
  YY = parseInt(year.substring(2, 4));
  MM = parseInt(document.querySelector("#month").value);
  DD = parseInt(document.querySelector("#date").value);

  // REGEX FOR DATE VALIDATION

  d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  log(d);
  return Math.round(d);
};

// VERIFY SELECTED GENDER

const genderIdentifier = () => {
  var genders = document.getElementsByName("gender");

  if (genders[0].checked === true) {
    var gender = "male";
  } else if (genders[1].checked === true) {
    var gender = "female";
  } else {
    return false;
  }
  switch (gender) {
    case "male":
      if (dayValue === 1) {
        alert(
          `You were born on  ${daysOfTheWeek[0]} and your Akan name is ${masculineNames[0]}`
        );
      } else if (dayValue === 2) {
        alert(
          `You were born on ${daysOfTheWeek[1]} and your Akan name is ${masculineNames[1]}`
        );
      } else if (dayValue === 3) {
        alert(
          `You were born on ${daysOfTheWeek[2]} and your Akan name is ${masculineNames[2]}`
        );
      } else if (dayValue === 4) {
        alert(
          `You were born on ${daysOfTheWeek[3]} and your Akan name is ${masculineNames[3]}`
        );
      } else if (dayValue === 5) {
        alert(
          `You were born on ${daysOfTheWeek[4]} and your Akan name is ${masculineNames[4]}`
        );
      } else if (dayValue === 6) {
        alert(
          `You were born on ${daysOfTheWeek[5]} and your Akan name is ${masculineNames[5]}`
        );
      } else if (dayValue === -0) {
        alert(
          `You were born on ${daysOfTheWeek[6]} and your Akan name is ${masculineNames[6]}`
        );
      }
      break;
    case "female":
      if (dayValue === 1) {
        alert(
          `You were born on ${daysOfTheWeek[0]} and your Akan name is ${feminineNames[0]}`
        );
      } else if (dayValue === 2) {
        alert(
          `You were born on ${daysOfTheWeek[1]} and your Akan name is ${feminineNames[1]}`
        );
      } else if (dayValue === 3) {
        alert(
          `You were born on ${daysOfTheWeek[2]} and your Akan name is ${feminineNames[2]}`
        );
      } else if (dayValue === 4) {
        alert(
          `You were born on ${daysOfTheWeek[3]} and your Akan name is ${feminineNames[3]}`
        );
      } else if (dayValue === 5) {
        log(
          `You were born on ${daysOfTheWeek[4]} and your Akan name is ${feminineNames[4]}`
        );
      } else if (dayValue === 6) {
        alert(
          `You were born on ${daysOfTheWeek[5]} and your Akan name is ${feminineNames[5]}`
        );
      } else if (dayValue === -0) {
        alert(
          `You were born on ${daysOfTheWeek[6]} and your Akan name is ${feminineNames[6]}`
        );
      }
      break;
    default:
  }
};

// GENERATE AKAN NAME

const AkanNameGen = () => {
  dayValue = getDayValue();
  genderIdentifier();
};















