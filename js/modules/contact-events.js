"use strict";

export const initializeContactEvents = () => {

    const githubButton =
        document.getElementById(
            "githubEventButton"
        );

    githubButton.addEventListener(
        "click",
        () => {

            document.dispatchEvent(

                new CustomEvent(
                    "github-selected",
                    {
                        detail: {
                            source: "github-card"
                        }
                    }
                )
            );

        }
    );

};