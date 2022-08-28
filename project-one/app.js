const userUlr = 'https://jsonplaceholder.typicode.com/users'

function getUserdata() {
    fetch(userUlr)
        .then(response => response.json())
        .then(data => getAlluser(data))
}



function getAlluser(data) {

    const userList = document.getElementById('alluser')

    for (const user of data) {

        const list = document.createElement('li')
        list.classList.add('list-group-item')

        list.innerHTML = `${user.name}`

        userList.appendChild(list)
    }
}

document.getElementById('user').addEventListener('click', getUserdata)


const getQuote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => getAnewQuote(data))
}


const getAnewQuote = quote => {
    const qt = document.getElementById('qt')
    qt.innerHTML = quote.quote
}

document.getElementById('get-qt').addEventListener('click', getQuote)



const p = [1, 2, 3]; const q = p.map(n => Math.pow(n, 3));

console.log(q);




const path  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYVmkfdZ7GUYtp-Kp7G1qzjzuo0RP11rs9Q&usqp=CAU"

const div = document.getElementById('img')
div.innerHTML = `<img src=${path} alt = "">`;