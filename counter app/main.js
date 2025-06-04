const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusbtn = document.querySelector('.plus-btn')
const changeby = document.querySelector('.changeby')
const reset = document.querySelector('.reset')

minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const changevalue = parseInt(changeby.value)
    count.innerText = countValue - changevalue;
})

plusbtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changevalue = parseInt(changeby.value)
    count.innerText = countValue + changevalue
})

reset.addEventListener('click', () => {
    count.innerText = 0
})