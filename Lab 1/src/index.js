document.getElementById('subform').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formObject = Object.fromEntries(formData)

    console.log(formObject)

    document.getElementById('outputtxt').innerHTML = Object.values(formObject)
})




// const person = {}

// const form = document.getElementById("subform");
// const formData = new FormData(form)

// form.addEventListener('submit', getobj);

// function getobj(event) {
//     event.preventDefault();
//     console.log(person)
// }

// formData.forEach((value, key) => {
//     person[key] = value;
// })



// ref  https://www.devbabu.com/docs/js/convert-html-form-data-to-javascript-object.html
// ref https://openjavascript.info/2022/10/03/save-user-form-input-data-in-a-javascript-object/

// todo for multi checkboxes i think https://openjavascript.info/2022/12/13/get-checked-checkbox-values-from-html-form-with-javascript/