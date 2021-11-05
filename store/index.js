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
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam, quis odit cumque vero voluptate, reiciendis amet non!",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
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
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/NangialaiStoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/NangialaiStoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
        {
          id: 5,
          name: "Dribbble",
          icon: "dribbble",
          url: "https://www.dribbble.com/",
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
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam, quis odit cumque vero voluptate, reiciendis amet non!",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
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
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/NangialaiStoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/NangialaiStoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
        {
          id: 5,
          name: "Dribbble",
          icon: "dribbble",
          url: "https://www.dribbble.com/",
        },
      ],
    },
    {
      id: "6rr400ed-26b1-43d0-940c-7cabd3546bb7",
      title: "Project Management UI",
      category: "UI / Frontend",
      img: "images/ui-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam, quis odit cumque vero voluptate, reiciendis amet non!",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: 1,
          title: "Project Management UI",
          img: "../images/mobile-project-1.jpg",
        },
        {
          id: 2,
          title: "Project Management UI",
          img: "../images/web-project-2.jpg",
        },
        {
          id: 3,
          title: "Project Management UI",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/NangialaiStoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/NangialaiStoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
        {
          id: 5,
          name: "Dribbble",
          icon: "dribbble",
          url: "https://www.dribbble.com/",
        },
      ],
    },
    {
      id: "yy2400ed-26b1-43d0-940c-7cabd3546bb7",
      title: "Cloud Storage Platform",
      category: "UI / Database",
      img: "images/ui-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam, quis odit cumque vero voluptate, reiciendis amet non!",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: 1,
          title: "Cloud Storage Platform",
          img: "../images/web-project-1.jpg",
        },
        {
          id: 2,
          title: "Cloud Storage Platform",
          img: "../images/web-project-2.jpg",
        },
        {
          id: 3,
          title: "Cloud Storage Platform",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/NangialaiStoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/NangialaiStoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
        {
          id: 5,
          name: "Dribbble",
          icon: "dribbble",
          url: "https://www.dribbble.com/",
        },
      ],
    },
    {
      id: "2tt400ed-26b1-43d0-940c-7cabd3546bb7",
      title: "Kabul Social App",
      category: "Mobile Application",
      img: "images/mobile-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam, quis odit cumque vero voluptate, reiciendis amet non!",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: 1,
          title: "Kabul Social App",
          img: "../images/web-project-1.jpg",
        },
        {
          id: 2,
          title: "Kabul Social App",
          img: "../images/web-project-2.jpg",
        },
        {
          id: 3,
          title: "Kabul Social App",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/NangialaiStoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/NangialaiStoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
        {
          id: 5,
          name: "Dribbble",
          icon: "dribbble",
          url: "https://www.dribbble.com/",
        },
      ],
    },
    {
      id: "2tu500ed-26b1-43d0-940c-7cabd3546bb7",
      title: "Apple Design System",
      category: "Web Application",
      img: "images/web-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam, quis odit cumque vero voluptate, reiciendis amet non!",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: 1,
          title: "Apple Design System",
          img: "../images/web-project-1.jpg",
        },
        {
          id: 2,
          title: "Apple Design System",
          img: "../images/web-project-2.jpg",
        },
        {
          id: 3,
          title: "Apple Design System",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/NangialaiStoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/NangialaiStoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
        {
          id: 5,
          name: "Dribbble",
          icon: "dribbble",
          url: "https://www.dribbble.com/",
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
