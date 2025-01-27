const apiKey = 'https://jsonplaceholder.typicode.com/todos';
const btn = document.getElementById('btn');
const dataText = document.getElementById('dataText');
const cont = document.getElementById('cont');

btn.addEventListener('click', () => {
    btn.classList.toggle('clickedBtn');
    dataText.textContent = 'Derekter alynuda...';
    setTimeout(() => {
        fetchData()
    }, 1500)
});

async function fetchData() {
    try {
        const response = await fetch(apiKey);
        const data = await response.json();
        const todoTitle = document.getElementById('todoTitle')
        const completed = document.getElementById('completed');
        let num = Math.floor(Math.random() * data.length);

        cont.style.display = 'flex';
        todoTitle.textContent = data[num].title
        dataText.textContent = 'Derekter satti alyndy';
        completed.classList.add('completed')

        if (!data[num].completed) {
            completed.style.background = 'green';
        } else {
            completed.style.background = 'red';
        }

        setTimeout(() => {
            dataText.textContent = '';
        },1000)
        
        cont.appendChild(todoTitle);
        cont.appendChild(completed);

    } catch (error) {
        console.error('Kate', error);

    }
}


