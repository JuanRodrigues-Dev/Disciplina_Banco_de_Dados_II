const center = [-6.8863, -38.5559];
const map = L.map('map').setView(center, 14);
const marker = L.marker(center, {
    draggable: true,
    opacity: 0.7
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate();

map.on('locationfound', (event) => {
    map.setView(event.latlng);
    marker.setLatLng(event.latlng);
});

map.on('click', (event) => {
    map.setView(event.latlng);
    marker.setLatLng(event.latlng);
});

const btnBuscar = document.getElementById('btnBuscar');
const localBuscar = document.getElementById('localBuscar');

btnBuscar.addEventListener('click', async () => {
    const local = localBuscar.value;

    fetch(`https://nominatim.openstreetmap.org/search?q=${local}&format=json`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                const latitude = data[0].lat;
                const longitude = data[0].lon;
                map.setView([latitude, longitude], 14);
                marker.setLatLng([latitude, longitude]);
            } else {
                alert('Local Não Encontrado');
            }
        });
});