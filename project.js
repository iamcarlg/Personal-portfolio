// creating dynamic project card

const projectContainer = document.querySelector('.project-container');

const projects = [
    {
        name : "Twitter 2.0 App",
        tags : '#fullstack-web-app, #NextJS, #TailwindCSS',
        image : "project1.jpg",
        url : "https://twitter-2-0-cgr.vercel.app/"
    },
    {
        name : "Hulu 2.0 App",
        tags : '#fullstack-web-app, #NextJS, #TailwindCSS',
        image : "project3.jpg",
        url : "https://hulu-2-0-cgr.vercel.app/"
    },

    {
        name : "FastLux Food Delivery App",
        tags : '#fullstack-web-app, #ejs, #css, #javascript, #nodeJS, #mongodb',
        image : "project18.jpg",
        url : "http://fastlux.herokuapp.com/"
    },

    {
        name : "Sneakers Ecommerce Website",
        tags : '#fullstack-web-app, #ejs, #css, #javascript, #nodeJS, #mongodb',
        image : "project17.jpg",
        url : "http://supersneakers.herokuapp.com/"
    },

    {
        name : "Netflix 2.0 Clone",
        tags : '#fullstack-web-app, #html, #css, #javascript, #reactjs, #nodeJS',
        image : "project15.jpg",
        url : "https://netflix-clone-carl.web.app/"
    },

    {
        name : "webforevent",
        tags : '#fullstack-web-app, #html, #css, #javascript, #php, #codeigniter',
        image : "project14.jpg",
        url : "https://webfortomatoes.herokuapp.com/"
    },

    {
        name : "Restaurant showroom",
        tags : '#fullstack-web-app, #html, #css, #javascript, #php',
        image : "project8.jpg",
        url : "https://restaurantshowroom.herokuapp.com/"
    },

    {
        name : "talents BTP",
        tags : '#html, #css, #javascript, #professional-website',
        image : 'project2.jpg',
        url : 'https://iamcarlg.github.io/Plumbing-Services/'

    },
    
     {
        name : "Eglise Adventiste du 7ème Jour de Brest",
        tags : '#html, #css, #javascript, #professional-website',
        image : 'project16.jpg',
        url : 'https://brest-adventiste.org/'

    },
    

    {
        name : "Instagram Newsletter",
        tags : '#fullstack-web-app, #html, #css, #javascript, #nodeJS, #expressJS',
        image : "project9.jpg",
        url : 'http://safe-anchorage-86921.herokuapp.com/'
    },

    {
        name : "Space Invaders",
        tags : '#python, #desktop-app',
        image : "project10.jpg",
        url : "https://github.com/iamcarlg/Space-Invaders"
    },

    {
        name : "moyo-ca",
        tags : '#visual-basic, #desktop-app',
        image : 'project11.jpg',
        url : 'https://drive.google.com/drive/folders/1N335XyjVKEqNlhpojhioN8CdDC6m_9iL?usp=sharing'

    },
    {
        name : "gprs",
        tags : '#visual-basic, #desktop-app',
        image : 'project12.jpg',
        url : 'https://drive.google.com/drive/folders/1-827zzw90ApYXDbBCKrpIcrTSoHM3whA?usp=sharing'

    },
    {
        name : "shutdown-timer",
        tags : '#visual-basic, #desktop-app',
        image : 'project13.jpg',
        url : 'https://drive.google.com/file/d/1rmn7gi_Ah0B5t5XpnQw3OkkFCT7tV7DI/view'

    }
];
