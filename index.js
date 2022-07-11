let countEl = document.getElementById("count-el")
let count = 0

function add() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}