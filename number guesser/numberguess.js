let secretnumber = Math.floor(Math.random() * 10) + 1;

const form = document.querySelector('form')

let choosennumbers = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    const obj = Object.fromEntries(formData)

    choosennumbers.push(obj.numchoice)
    
    
    document.getElementById('chosenhistory').innerHTML = `You have chosen: ${choosennumbers}`
    document.getElementById('output').innerHTML = obj.numchoice

    console.log(secretnumber)
    console.log(obj.numchoice)
    console.log(choosennumbers)

    if (secretnumber == obj.numchoice) {
        document.getElementById('output').innerHTML = "Good Work"
    }else {
        document.getElementById('output').innerHTML = "Not matched"
    }
})

function refresh() {
    secretnumber = Math.floor(Math.random() * 10) + 1;
    choosennumbers = []
    document.getElementById('chosenhistory').innerHTML = ""
    document.getElementById('output').innerHTML = ""
}