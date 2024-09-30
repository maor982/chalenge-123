let inputElement = document.getElementById('inputElement')
let container = document.getElementById('container')
let x='אריה'

let mone=0

function toGuess()
{
    mone=mone+1
    if()
//  alert(inputElement.value)
    let firstLetter = inputElement.value.charAt(0)
    let secondLetter = inputElement.value.charAt(1)
    let thirdLetter = inputElement.value.charAt(2)
    let fourthLetter = inputElement.value.charAt(3)


    container.innerHTML+=`
    <div class="blue" style="background-color:${check(firstLetter,0)}">${firstLetter}</div>
    <div class="blue" style="background-color:${check(secondLetter,1)}>${secondLetter}</div>
    <div class="blue" style="background-color:${check(thirdLetter,2)}>${thirdLetter}</div>
    <div class="blue" style="background-color:${check(fourthLetter,3)}>${fourthLetter}</div>
    `


    container.innerHTML += `
    
    <div style="background-color: ${check(
        firstLetter,
        0
    )}" class="blue">${firstLetter}</div>
    <div style="background-color: ${check(
        secondLetter,
        1
    )}" class="blue">${secondLetter}</div>
    <div style="background-color: ${check(
        thirdLetter,
        2
    )}" class="blue">${thirdLetter}</div>
    <div style="background-color: ${check(
        fourthLetter,
        3
    )}" class="blue">${fourthLetter}</div>


`
}


function check(letter, index) {
    if (x.charAt(index) == letter) {
        return 'green'
    }
    if (x.includes(letter)) {
        return 'orange'
    }


    return 'red'
}




