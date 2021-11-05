import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
      title: "Google Health Platform",
      category: "Web Application",
      img: "images/web-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      projectImages: [
        {
          id: 1,
          title: "Kabul Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: 2,
          title: "Kabul Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: 3,
          title: "Kabul Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
    },
    {
      id: "f31400ed-26b1-43d0-940c-7cabd3546bb7",
      title: "Phoenix Digital Agency",
      category: "Mobile Application",
      img: "images/mobile-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      projectImages: [
        {
          id: 1,
          title: "Phoenix Digital Agency",
          img: "../images/mobile-project-1.jpg",
        },
        {
          id: 2,
          title: "Phoenix Digital Agency",
          img: "../images/web-project-2.jpg",
        },
        {
          id: 3,
          title: "Phoenix Digital Agency",
          img: "../images/mobile-project-2.jpg",
        },
      ],
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // Todo
};

export const actions = {
  // Todo
};
