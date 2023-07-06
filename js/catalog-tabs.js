document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card"),
        tabsBtn = document.querySelectorAll('.catalog__tab'),
        tabsPages = document.querySelectorAll('.catalog__page');
    
    tabsBtn.forEach(function (tabBtn) {
        tabBtn.addEventListener("click", function () {
            tabsBtn.forEach(function (tabBtn) {
                tabBtn.classList.remove("catalog__tab_active");
            });
            tabsPages.forEach(function (tabPage) {
                tabPage.classList.remove("catalog__page_active");
            });
            this.classList.add("catalog__tab_active");
            let id = this.getAttribute("data-id");
            tabsPages[id].classList.add("catalog__page_active");
            tabsPages[id].style.opacity = '0';
            setTimeout(function () {
                tabsPages[id].style.opacity = '1';
            }, 1);   
        });
    });

    productCards.forEach(function (productCard) {
        const moreBtn = productCard.querySelector(".product-card__more"),
            backBtn = productCard.querySelector(".product-card__back"),
            morePage = productCard.querySelector(".product-card__more-page"),
            mainPage = productCard.querySelector(".product-card__main-page");

        moreBtn.addEventListener("click", () => {
            morePage.classList.add("product-card__more-page_active");
            mainPage.classList.remove("product-card__main-page_active");
        });

        backBtn.addEventListener("click", () => {
            morePage.classList.remove("product-card__more-page_active");
            mainPage.classList.add("product-card__main-page_active");
        });
    });
});