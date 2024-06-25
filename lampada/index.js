const lampada = document.getElementById('lampada');

lampada.addEventListener('mouseover', function() {
    lampada.src = 'https://img.freepik.com/fotos-premium/lampada-de-luz-amarela-acesa-em-branco_488220-82.jpg';
});

lampada.addEventListener('mouseout', function() {
    lampada.src = 'https://img.freepik.com/premium-photo/glowing-yellow-light-bulb_45716-8.jpg';
});