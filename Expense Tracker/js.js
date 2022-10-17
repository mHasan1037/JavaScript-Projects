var balanceEl = document.getElementById('total-balance');
var incomeEl = document.getElementById('total-income');
var expenseEl = document.getElementById('total-expense');
var transactionsEl = document.querySelector('#transaction');
const nameInputEl = document.getElementById('input-detail');
const amountInputEl = document.getElementById('input-amount');
const incomeBtnEl = document.getElementById('add-income');
const expenseBtnEl = document.getElementById('add-expense'); 

var state = {
    balace: 0,
    income: 0,
    expense: 0,
    transactions: [
    ]
}

function init(){
    var localState = JSON.parse(localStorage.getItem('expenseTrackerState'))

    if(localState !==''){
        state = localState
    }

    updateState()
    initListeners()
}

function uniqueId(){
    return Math.round(Math.random() * 100000)
}

function initListeners(){
    incomeBtnEl.addEventListener('click', onAddIncomeClick)
    expenseBtnEl.addEventListener('click', onAddExpenseClick)
}

function onAddIncomeClick(){
    addTransaction(nameInputEl.value, amountInputEl.value, 'income')
}

function addTransaction(name, amount, type){
    if(name !== '' && amount !==''){
        var transaction = {
            id : uniqueId(),
            name: name,
            amount: parseInt(amount),
            type: type
        }
        state.transactions.push(transaction)
        updateState()
    }else{
        alert('fill the empty box')
    }


    nameInputEl.value = ''
    amountInputEl.value = ''
}

function onAddExpenseClick(){
    addTransaction(nameInputEl.value, amountInputEl.value, 'expense')
}

function onDeleteClick(event){
    var id = parseInt(event.target.getAttribute('data-id'));
    var deleteIndex

    for(var i = 0; i < state.transactions.length; i++){
        if(state.transactions[i].id === id){
            deleteIndex = i;
            break
        }
    }
    state.transactions.splice(deleteIndex, 1)
    updateState()
}

function updateState(){
     var balace = 0,
         income = 0,
         expense = 0,
         item
    
    for(var i = 0; i < state.transactions.length; i++){
        item = state.transactions[i]

        if( item.type === 'income'){
            income += item.amount
        }else if(item.type === 'expense'){
            expense += item.amount
        }
    }


    balace = income - expense

    state.balace = balace
    state.income = income
    state.expense = expense

    localStorage.setItem('expenseTrackerState', JSON.stringify(state))

    render()
}

function render(){
    balanceEl.innerHTML = `$${state.balace}`
    incomeEl.innerHTML = `$${state.income}`
    expenseEl.innerHTML = `$${state.expense}`

    var transaction, containerEl, amountEl, btnEl

    transactionsEl.innerHTML = ''

    for(var i = 0; i < state.transactions.length; i++){
       item = state.transactions[i]

       transaction = document.createElement('li');
       transaction.append(item.name)
       transactionsEl.appendChild(transaction)

       containerEl = document.createElement('div');
       containerEl.classList.add('account-container');
       amountEl = document.createElement('span');

       if(item.type === 'income'){
          amountEl.classList.add('income')
       }else if(item.type === 'expense'){
          amountEl.classList.add('expense')
       }

       amountEl.innerHTML = `$${item.amount}`;

       btnEl = document.createElement('button');
       btnEl.setAttribute('data-id', item.id)
       btnEl.innerHTML = 'X'
       btnEl.classList.add('close-btn')

       btnEl.addEventListener('click', onDeleteClick)
       
       containerEl.appendChild(amountEl)
       containerEl.appendChild(btnEl)

       transaction.appendChild(containerEl)

    }
}

init()