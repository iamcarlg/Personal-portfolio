// creating dynamic project card

const projectContainer = document.querySelector('.project-container');

const projects = [

    {
        name : "magic planet",
        tags : '#html, #css',
        image : 'project1.jpg',
        url : 'https://iamcarlg.github.io/Magic-Planet/public/index.html'

    },
    {
        name : "talents BTP",
        tags : '#html, #css, #javascript',
        image : 'project2.jpg',
        url : 'https://iamcarlg.github.io/Plumbing-Services/'

    },
    {
        name : "curriliculum vitae",
        tags : '#html, #css',
        image : 'project3.jpg',
        url : 'https://iamcarlg.github.io/curriculum-vitae/index.html'

    },
    {
        name : "tribute page",
        tags : '#html, #css',
        image : 'project4.jpg',
        url : 'https://iamcarlg.github.io/tribute-page/index.html'

    },
    {
        name : "product landing page",
        tags : '#html, #css',
        image : 'project5.jpg',
        url : 'https://iamcarlg.github.io/product-landing-page/index.html'

    },
    {
        name : "technical documentation page",
        tags : '#html, #css',
        image : 'project6.jpg',
        url : 'https://iamcarlg.github.io/technical-documentation-page/'


    },
    {
        name : "portfolio page",
        tags : '#html #css',
        image : 'project7.jpg',
        url : 'https://iamcarlg.github.io/portfolio-page/'

    },

    {
        name : "Restaurant showroom",
        tags : '#html, #css, #javascript, #php',
        image : "project8.jpg",
        url : "https://restaurantshowroom.herokuapp.com/"
    },

    {
        name : "Instagram Newsletter",
        tags : '#html, #css, #javascript, #nodeJS',
        image : "project9.jpg",
        url : 'http://safe-anchorage-86921.herokuapp.com/'
    },

    {
        name : "Space Invaders",
        tags : '#python',
        image : "project10.jpg",
        url : "https://github.com/iamcarlg/Space-Invaders"
    },

    {
        name : "moyo-ca",
        tags : '#visual-basic',
        image : 'project11.jpg',
        url : 'https://drive.google.com/drive/folders/1N335XyjVKEqNlhpojhioN8CdDC6m_9iL?usp=sharing'

    },
    {
        name : "gprs",
        tags : '#visual-basic',
        image : 'project12.jpg',
        url : 'https://drive.google.com/drive/folders/1-827zzw90ApYXDbBCKrpIcrTSoHM3whA?usp=sharing'

    },
    {
        name : "shutdown-timer",
        tags : '#visual-basic',
        image : 'project13.jpg',
        url : 'https://drive.google.com/file/d/1rmn7gi_Ah0B5t5XpnQw3OkkFCT7tV7DI/view'

    },
    {
        name : "webforevent",
        tags : '#html, #css, #javascript, #php #codeigniter',
        image : "project14.jpg",
        url : "https://webfortomatoes.herokuapp.com/"
    },
    {
        name : "Netflix 2.0 Clone",
        tags : '#html, #css, #javascript, #reactjs, #nodeJS',
        image : "project15.jpg",
        url : "https://netflix-clone-carl.web.app/"
    },
];
