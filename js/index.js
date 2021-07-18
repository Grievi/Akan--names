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
















}