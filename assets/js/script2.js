// Función para inicializar el mapa de Google
function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 };  // Coordenadas de ejemplo (Nueva York)
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 14,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Nuestra Agencia",
    });
}

// Función para manejar el envío de comentarios
document.getElementById("commentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    if (name && comment) {
        const commentList = document.getElementById("comment-list");
        
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
        
        commentList.appendChild(newComment);
        
        // Limpiar el formulario
        document.getElementById("name").value = '';
        document.getElementById("comment").value = '';
    }
});
