function longName(frname, lsname) {
    let name = frname + ' ' + lsname
    console.log(`your name : ${name}`)
}

const firstName = prompt('type your first Name')
const lasttName = prompt('type your last Name')

longName(firstName, lasttName)


function age(age) {
    if (age >= 18) {
        console.log('you old ')
    } else if (age < 18 && age >= 0) {
        console.log('still young')
    } else {
        console.log('not yet brown')
    }

}

let typeYourAge = prompt("your age")

age(Number(typeYourAge))


const addMarks = (text, mark, times) => {
    let newText = text

    for (let i = 0; i <= times; i++) {
        newText += mark
    }

    console.log(newText)
}

addMarks('amir', '!', 2)