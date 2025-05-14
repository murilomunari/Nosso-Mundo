function showGallery(galleryId) {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.style.display = 'none';
    });
    document.getElementById(galleryId).style.display = 'grid';
}

function openLightbox(src, type) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    const video = document.getElementById("lightbox-video");

    if (type === "image") {
        img.src = src;
        img.style.display = "block";
        video.style.display = "none";
    } else if (type === "video") {
        video.querySelector("source").src = src;
        video.load();
        video.style.display = "block";
        img.style.display = "none";
    }

    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    const video = document.getElementById("lightbox-video");
    video.pause();
}

function openModal(cartaId) {
    const modal = document.getElementById('modal');
    const text = {
        carta1: 'Obrigado por esta comigo nesses 3 anos, espero que isso que estamos vivendo dure para sempre, e não imagino minha vida sem você, Obrigado por tudo .',
        carta2: 'Fiz isso com amor e carinho para te mostrar o quanto você é especial para mim, e o quanto eu te amo, você a paz no meu coração, e a razão do meu sorriso.',
        carta3: 'Obrigado por todos os puxões de orelha, obrigado por me fazer sentido na vida, e por sempre me mostrar o lado bom da vida.',
        carta4: 'Eu te amo Laísa Mammana Fernandes, e espero que você sempre esteja ao meu lado, e que possamos viver juntos por muito tempo.',
    };
    document.getElementById('modal-text').textContent = text[cartaId];
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}