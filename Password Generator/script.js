const passwordBox = document.getElementById('passwordBox')
const copyBtn = document.getElementById('copyBtn')
const charLength = document.getElementById('charLength')
const rangeInpt = document.getElementById('rangeInpt')
const checkbox = document.querySelectorAll(".checkbox")
const generatePassBtn = document.getElementById("generatePassBtn")
const passStrength = document.getElementById("passStrength")

let charAt = ""
let generatedPassword = ""


rangeInpt.addEventListener('change', (e)=>{
   charLength.innerHTML = e.target.value
})

checkbox.forEach((check)=>{
   check.addEventListener('change', ()=>{
      switch(check.dataset.check){
         case 'Include Uppercase letters':
            charAt += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
         case 'Include Lowercase letters':
            charAt += 'abcdefghijklmnopqrstuvwxyz';
            break;
         case 'Include Numbers':
            charAt += '0123456789';
            break;
         case 'Include Symbols':
            charAt += '!@#$%^&*()';
            break;
         default:
            break;
      }
   })
})



generatePassBtn.addEventListener('click', ()=>{
   const len = rangeInpt.value

   generatedPassword = ""
   for(let i = 0; i < len; i++){
      const randomIndex = Math.floor(Math.random() * charAt.length)
      generatedPassword += charAt[randomIndex]
   }

   passwordBox.innerHTML = generatedPassword

   let strengthIs = ''

   if(len <= 4){
      strengthIs = 'Very weak'
   }else if(len <= 8){
      strengthIs = 'Weak'
   }else if(len <= 12){
      strengthIs = 'Medium'
   }else if(len <= 16){
      strengthIs = 'Strong'
   }else{
      strengthIs = 'Very Strong'
   }

   passStrength.innerHTML = strengthIs
})

copyBtn.addEventListener('click', ()=>{
   let password = passwordBox.innerHTML

   navigator.clipboard.writeText(password)

   copyBtn.innerHTML = 'Copied'

   setTimeout(()=>{
      copyBtn.innerHTML = 'Copy'
   }, 1000)
})