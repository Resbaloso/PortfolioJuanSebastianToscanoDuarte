"use strict";

export const initializeFilters = (
    projects,
    renderFunction
) => {

    const buttons =
        document.querySelectorAll(
            ".filter-button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );

                button.classList.add(
                    "active"
                );

                const filter =
                    button.dataset.filter;

                if (filter === "all") {

                    renderFunction(
                        projects
                    );

                    return;
                }

                const filteredProjects =
                    projects.filter(
                        project =>
                            project.tech === filter
                    );

                renderFunction(
                    filteredProjects
                );

            }
        );

    });

};