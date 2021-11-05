import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projectsData: [
    {
      id: 1,
      title: "Google Health Platform",
      category: "Web Application",
      img: "images/web-project-2.jpg",
      singleProjectData: [
        {
          id: 1,
          singleProjectTitle: "Kabul Project Management UI",
          singleProjectDate: "Jul 26, 2021",
          singleProjectTag: "UI / Frontend",
        },
      ],
    },
  ],
});

export const getters = {
  // Todo
};

export const mutations = {
  // Todo
};

export const actions = {
  // Todo
};
