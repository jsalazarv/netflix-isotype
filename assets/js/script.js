document.addEventListener("DOMContentLoaded", () => {
    const isotype = document.querySelector('.netflix-isotype');

    const isotypeAnimation = () => {
        isotype.classList.add('animation');
    }

    setTimeout(isotypeAnimation, 600);
});
