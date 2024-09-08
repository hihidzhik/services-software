document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.querySelector('.button-toggle');
    const brandsContainer = document.querySelector('.swiper-wrapper');
    let areBrandsVisible = false;

    function toggleBrandsVisibility(visible) {
        if (visible) {
            brandsContainer.classList.remove('swiper-wrapper--collapsed');
        } else {
            brandsContainer.classList.add('swiper-wrapper--collapsed');
        }
    }

    showMoreButton.addEventListener('click', function () {
        areBrandsVisible = !areBrandsVisible;
        toggleBrandsVisibility(areBrandsVisible);
        const buttonText = areBrandsVisible ? 'Скрыть' : 'Показать все';
        showMoreButton.querySelector('.button-toggle__text').innerText = buttonText;
        showMoreButton.classList.toggle('expanded', areBrandsVisible);
    });

    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })

});