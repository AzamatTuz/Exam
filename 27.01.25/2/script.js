const cityInput = document.getElementById('cityInput');
const cityList = document.getElementById('cityList');
const errors = document.getElementById('errors');
const btn = document.getElementById('btn');
const apiKey = 'https://jsonplaceholder.typicode.com/users';

async function fecthData() {
    try {
        const response = await fetch(apiKey);
        const data = await response.json();

        data.forEach((element) => {
            const listItems = document.createElement('li');
            listItems.textContent = element.address.city;

            btn.addEventListener('click', () => {
                if (listItems.textContent.includes(cityInput.value)) {
                    listItems.style.display = 'block';
                } else {
                    listItems.style.display = 'none';
                }

                
            })

            cityList.appendChild(listItems)
        });
        
    } catch (error) {
        console.error(error);
        
        errors.textContent = 'Kate' + error;
    }
}

fecthData()

