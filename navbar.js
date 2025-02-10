// URL de la API
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=LaHabana&lang=es&appid=01ac5cf5664c30e4b42669b4bdb9916b';

// Función para obtener datos de la API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data); // Maneja los datos de la API aquí
    } catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
    }
}

// Llama a la función para obtener datos cuando sea necesario
fetchData();