// create random number
let secretnumber = Math.floor(Math.random() * 10) + 1;

// create form variable with query selector
const form = document.querySelector("form");

// create result variable with query selector
const result = document.querySelector("#output");

// create empty choosen number object
let choosennumbers = [];

// form prevent default
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
  //   create variable formdata from data from form
  function enternumber(e) {
    e.preventDefault()
  
  const formData = new FormData(form);

  //   create variable and put object data from fromdata into this
  const obj = Object.fromEntries(formData);

  console.log(secretnumber);
  console.log(obj.numchoice);
  console.log(choosennumbers);

  numcheck();

  // check if number chosen is > 10 < 1 or nothing then check if number is = to the secret number
  function numcheck() {
    if (obj.numchoice < 1 || obj.numchoice > 10 || obj.numchoice == "") {
      result.textContent = "Please cjhoose a number between 1 and 10";
    } else if (secretnumber == obj.numchoice) {
      result.textContent = `Good Work the number was ${secretnumber} you got it after ${choosennumbers.length + 1} guesses`;
    } else {
        //   push numbercoice from input to object choosennumbers
      choosennumbers.push(obj.numchoice);
      //  change text of p element chosenhistory to number chouces
      document.getElementById(
        "chosenhistory"
      ).innerHTML = `You have chosen: ${choosennumbers}`;
      result.textContent = "Not matched";
    }
  }
// });
}

// refresh remove values and refresh random number
function refresh() {
  secretnumber = Math.floor(Math.random() * 10) + 1;
  choosennumbers = [];
  document.getElementById("chosenhistory").innerHTML = "";
  result.textContent = "";
}
