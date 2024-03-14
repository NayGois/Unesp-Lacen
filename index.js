document.addEventListener('DOMContentLoaded', function() {
    // Função para configurar os eventos de clique nos links
    function setupMenu() {
        // Adiciona um evento de clique a cada link
        document.querySelectorAll('.image-links li a').forEach(function(link) {
            link.addEventListener('click', function(event) {
                // Remove a classe 'active' de todos os links
                document.querySelectorAll('.image-links li a').forEach(function(link) {
                    link.classList.remove('active');
                });
                // Adiciona a classe 'active' apenas ao link clicado
                this.classList.add('active');
            });

            // Verifica se a URL da página corresponde ao link e marca-o como ativo
            if (window.location.href === link.href) {
                link.classList.add('active');
            }
        });
    }

    // Chama a função setupMenu para configurar os eventos de clique
    setupMenu();

    // Adiciona funcionalidade de ampliação de imagens para o gallery
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const imgExpanded = document.createElement('img');
            imgExpanded.src = this.src;
            imgExpanded.classList.add('expanded-image');

            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Fechar';
            closeBtn.classList.add('close-btn');

            const prevBtn = document.createElement('button');
            prevBtn.textContent = '←'; // Adiciona uma seta para a esquerda
            prevBtn.classList.add('prev-btn');

            const nextBtn = document.createElement('button');
            nextBtn.textContent = '→'; // Adiciona uma seta para a direita
            nextBtn.classList.add('next-btn');

            let currentIndex = index; // Índice da imagem atual

            // Adiciona um evento de clique para o botão anterior
            prevBtn.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    imgExpanded.src = galleryImages[currentIndex].src;
                }
            });

            // Adiciona um evento de clique para o botão seguinte
            nextBtn.addEventListener('click', function() {
                if (currentIndex < galleryImages.length - 1) {
                    currentIndex++;
                    imgExpanded.src = galleryImages[currentIndex].src;
                }
            });

            closeBtn.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });

            overlay.appendChild(imgExpanded);
            overlay.appendChild(closeBtn);
            overlay.appendChild(prevBtn);
            overlay.appendChild(nextBtn);
            document.body.appendChild(overlay);
        });
    });
});
