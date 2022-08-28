const allperson = 'https://randomuser.me/api/?results=36'

const getData = () => {
    fetch(allperson)
        .then(res => res.json())
        .then(data => showPpl(data.results))
}

getData()

const showPpl = (result) => {
    const allPerson = document.getElementById('all-person')
    console.log(result);
    for (const p of result) {
        const div = document.createElement('div')
        div.classList.add('person-single')
        div.innerHTML = `
            <img src="${p.picture.large}" alt="" srcset="">
            <p> <b>Name:</b> ${p.name.title} ${p.name.first} ${p.name.last} </p>
            <p> <b>Gendedr:</b> ${p.gender}</p>
                
            `
        allPerson.appendChild(div)
    }
}


// <p> Name: ${p.name.title} ${p.name.title} ${p.name.title} </p>