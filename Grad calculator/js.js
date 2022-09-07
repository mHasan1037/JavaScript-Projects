const mathEl = document.getElementById('math')
const accountingEl = document.getElementById('accounting')
const financeEl = document.getElementById('finance')
const programmingEl = document.getElementById('programming')
const ssubmit = document.querySelector('submit')
const markResult = document.querySelector('.mark-result')
const numberBox = document.querySelectorAll('.number-box')



const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let totalNum = Math.floor(mathEl.value) + Math.floor(accountingEl.value) + Math.floor(financeEl.value) + Math.floor(programmingEl.value)

    markResult.innerHTML = `Out of 400 your total is ${totalNum} and percentage is ${totalNum / numberBox.length}%. 
    Your grade is ${totalNum >= 320 ? "A+" : totalNum >= 280 ? "A" : totalNum >= 240 ? "A-" : totalNum >= 200 ? "B" : 
    totalNum >= 160 ? "C" : totalNum >= 132 ? "D" : "F"}.
    You are ${totalNum >= 132 ? `<span style="font-weight: bold; color: green;">Pass</span>` : 
    `<span style="font-weight: bold; color: red;">Fail</span>` }.`

    mathEl.value = ''
    accountingEl.value = ''
    financeEl.value = ''
    programmingEl.value = ''
})







