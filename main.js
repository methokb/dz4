

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let int = document.querySelector('.numb')

let integer = 0;

btn1.addEventListener("click", () => {
    integer += 1;
    int.textContent = integer;
})
btn2.addEventListener("click", () => {
    integer -= 1;
    int.textContent = integer;
})

