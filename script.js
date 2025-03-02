document.querySelectorAll(".img-port").forEach(img => {
    const originalImage = img.style.backgroundImage; // Guarda a imagem original
    const hoverImage = img.getAttribute("data-hover"); // Pega a imagem de hover
    const parentItem = img.closest(".item-port"); // Obtém o elemento pai para acessar o data-message

    // Efeito de troca com fade ao passar o mouse
    img.addEventListener("mouseenter", () => {
        img.style.opacity = "0";
        setTimeout(() => {
            img.style.backgroundImage = `url(${hoverImage})`;
            img.style.opacity = "1";
        }, 300);
    });

    img.addEventListener("mouseleave", () => {
        img.style.opacity = "0";
        setTimeout(() => {
            img.style.backgroundImage = originalImage;
            img.style.opacity = "1";
        }, 300);
    });

    // Quando a imagem for clicada, preencher a mensagem no formulário
    parentItem.addEventListener("click", () => {
        const mensagem = parentItem.getAttribute("data-message"); // Obtém o texto definido no HTML
        const textarea = document.getElementById("mensagem");

        if (textarea) {
            textarea.value = mensagem; // Define o texto no formulário
        }

        // Rolagem suave até o formulário
        document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
    });
});
