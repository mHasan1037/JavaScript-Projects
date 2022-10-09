const password = document.getElementById('password');
const button = document.querySelector('button');
const alertBox = document.getElementById('alert-box')
const alert = document.querySelector('.alert-msg')


password.addEventListener('keydown', (e)=>{
    const passkey = e.target.value

    if(passkey.length < 5 ){
        button.addEventListener('mouseover', ()=>{

            alert.style.display = 'block'

            button.classList.add('right')
            button.innerHTML = '&#128529;'
            if(button.classList.contains('right')){
                button.addEventListener('click', ()=>{
                    button.classList.remove('right')
                    button.innerHTML = '&#128530;'
                })
            }
        })
    }else{ 

        button.addEventListener('click', ()=>{
            button.innerHTML = 'Thanks'
            button.classList.remove('right')
            button.classList.add('center')

            const modal = document.querySelector('.modal').style.display = 'flex'
        })

        button.innerHTML = '&#128513; Submit &#128513;'

        alert.style.display = 'none'

        button.classList.remove('right')
        button.classList.add('center')
   
        button.addEventListener('mouseover', ()=>{
            button.classList.remove('right')
            button.classList.add('center')
            alert.style.display = 'none'
            button.innerHTML = '&#128513; Submit &#128513;'
        }) 
        
    }

})






