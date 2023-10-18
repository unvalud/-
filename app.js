let in1 = document.querySelector(`.in1`)
let in2 = document.querySelector(`.in2`)
let out = document.querySelector(`.out`)

function sum() {
    let v1 = Number(in1.value)
    let v2 = Number(in2.value)
    out.innerHTML = v1+v2 
}