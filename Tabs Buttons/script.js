let count = 0
const url = 'https://course-api.com/react-tabs-project'


const fetchData = async () =>{
    const res = await fetch(url)
    const newJobs = await res.json()

    getJobs(newJobs)
    getBtns(newJobs)
    
}

fetchData()



function getBtns(newJobs){
    Array.from(newJobs).map(btn =>{
        const btnHolder = document.querySelector('.btns')
        const btns = document.createElement('button')
        btns.classList.add('btn')
        btns.innerHTML = btn.company
        btnHolder.appendChild(btns)
    })
    
    const allBtns = document.querySelectorAll(".btn")
    allBtns[count].classList.add('active')
    allBtns.forEach((btn, idx)=>{
        btn.addEventListener('click', ()=>{
            allBtns.forEach(btn => btn.classList.remove('active'))
            btn.classList.add('active')
            count = idx
            getJobs(newJobs)
        })
    })
}

function getJobs(newJobs){
    const newJob = newJobs[count]


    const {title, company, duties, dates} = newJob



    const container = document.querySelector('.container')

    container.innerHTML = ''

    const jobHolder = document.createElement('div')
    jobHolder.classList.add('jobHolder')
    jobHolder.innerHTML = `
       <h2>${title}</h2>
       <p>${dates}</p>
       <h3>${company}</h3>
    `

    container.appendChild(jobHolder)

    const dutyHolder = document.createElement('div')
    duties.map((duty)=>{
        dutyHolder.innerHTML += `<p> =>${duty}</p>` 
     })

    container.appendChild(dutyHolder)
}


