document.addEventListener("DOMContentLoaded", function () {
    const   modal = document.querySelector(".modal"),
            background = modal.querySelector(".modal__background"),
            modalWindows = modal.querySelectorAll ('.modal__window'),
            windowContact = modal.querySelector(".modal__window_contact"),
            windowBuy = modal.querySelector(".modal__window_buy"),
            windowThanks = modal.querySelector(".modal__window_thanks"),
            closeBtn = modal.querySelector(".modal__close-btn"),
            contactBtn = document.querySelectorAll ('.button-contact'),
            buyBtn = document.querySelectorAll ('.product-card__button');

    background.addEventListener('click', function () {
        modal.classList.remove('modal_active');
    });

    closeBtn.addEventListener('click', function () {
        modal.classList.remove('modal_active');
    });

    contactBtn.forEach(function (contactBtn) {
        contactBtn.addEventListener("click", () => {
            modal.classList.add('modal_active');
            modalWindows.forEach(function (win) {
                win.classList.remove('modal__window_active');
            });
            windowContact.classList.add('modal__window_active');
        })
    });

    buyBtn.forEach(function (buyBtn) {
        buyBtn.addEventListener("click", () => {
            modal.classList.add('modal_active');
            modalWindows.forEach(function (win) {
                win.classList.remove('modal__window_active');
            });
            windowBuy.classList.add('modal__window_active');
        });
    });

})