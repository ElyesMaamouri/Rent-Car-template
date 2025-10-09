
 const map = L.map('map').setView([36.8065, 10.1815], 13); // Tunis

   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

   L.marker([36.8065, 10.1815]).addTo(map)
    .bindPopup('Voici Tunis !')
    .openPopup();