"use strict";

export const initializeNavbar = () => {

    const hamburger =
        document.getElementById(
            "menuToggle"
        );

    const menu =
        document.getElementById(
            "navbarMenu"
        );

    hamburger.addEventListener(
        "click",
        () => {

            hamburger.classList.toggle(
                "active"
            );

            menu.classList.toggle(
                "active"
            );

        }
    );

    document
        .querySelectorAll(
            ".navbar__menu a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    hamburger.classList.remove(
                        "active"
                    );

                    menu.classList.remove(
                        "active"
                    );

                }
            );

        });

};