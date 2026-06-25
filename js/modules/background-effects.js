"use strict";

export const activateBackgroundEffect = () => {

    document.body.classList.add(
        "background-highlight"
    );

    setTimeout(() => {

        document.body.classList.remove(
            "background-highlight"
        );

    }, 2000);

};