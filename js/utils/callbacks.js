"use strict";

import { projectsData }
from "../data/projects.data.js";

export const loadProjects = callback => {

    setTimeout(() => {

        callback(projectsData);

    }, 1000);

};