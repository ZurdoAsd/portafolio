
export const projects = [

    {
      id:1,
      title: "Poke-App",
      description: "Design & Development",
      type:"single",
      imgUrl: require("./amgcards/pokeapi/landingpoke.jpeg"),
      Url:"https://poke-app-19.vercel.app/",
      sumary:"This was an individual project of Henry`s Bootcamp Full Web Developer. This app consists of a Single Page Application (SPA) based on Pokémon theme whose information is consumed from a REST API. Among its functionalities are to create, filter, sort and search for first generation Pokémons, and get detailed information about them.",
      tech:['NodeJs', 'Express', 'Sequelize', 'Postgres', 'React', 'Redux', 'HTML', 'CSS', 'Javascript'],
      // "NodeJs, Express, Sequelize, Postgres, React, Redux, HTML, CSS, Javascript",
      fotos:[
        {nameimg: require("./amgcards/pokeapi/homepoke.jpeg"),title:"Home"}, 
        {nameimg: require("./amgcards/pokeapi/searchpoke.jpeg"),title:"Search"},
        {nameimg: require("./amgcards/pokeapi/detailpoke.jpeg"),title:"Detail"},
        {nameimg: require("./amgcards/pokeapi/createpoke.jpeg"),title:"Form"},
      ] },
    {
      title: "Club Deportivo",
      description: "Design & Development",
      type:"group",
      imgUrl:  require("./amgcards/CLub/landingclub.jpg"),
      Url:"https://club-henry.vercel.app",
      sumary:"This was a group project of Henry`s Bootcamp Full Web Developer. This app consists of a platform that provides an administrative system for a sports club. Among its features are contemplated to satisfy the experience of both the administrator, employees and members of the same. This through customized panels that allow the administrator to improve organizational control and provide information to members in a simple way. And the members have the possibility to modify their personal data, subscribe to one or more available activities (through the Mercado Pago), make comments on the Club's publications and have a direct contact with the Administration.",
      tech: ['NodeJs', 'Express','JWT', 'Sequelize', 'Postgres', 'React', 'Redux',  'Material UI', 'Cloudinary', 'Auth0','HTML', 'CSS', 'Javascript'],
      fotos:[    
         {nameimg: require("./amgcards/CLub/home1club.jpg"),title:"Home"}, 
         {nameimg: require("./amgcards/CLub/dashboardClub.jpg"),title:"Dashboard"},
         {nameimg: require("./amgcards/CLub/calendarclub.jpg"),title:"Calendar"},
         {nameimg: require("./amgcards/CLub/loginclub.jpg"),title:"Login"},
         {nameimg: require("./amgcards/CLub/registerclub.jpg"),title:"Register"},
    ] 
  },
  ]


  export const SoftSkills = [
    {
      id:1,
      title: "-Communication",
      description:"I am a very perceptive and respectful person to the time of conversation, as well as to contribute my ideas in a constructive way. I consider this aspect vital, because communicating clearly allows for a great work environment, as well as perceiving a message in the right way helps to generate empathy and opens the possibility of greater participation."   
    },
    {
      id:2,
      title: "-Solve problems",
      description: " I don't want to sound arrogant, but I consider myself as someone who can give a contribution, after analyzing the situation as a whole, both when working in a team and when developing projects. Whether it's research on a specific topic or how to make the interaction with others go smoothly. ",
   },
    
   {
    id:3,
    title: "-Investigate before you ask",
    description: " I do not consider this a skill in itself, but part of my self-taught training, since in case I need help from someone, I consider it prudent to make a previous effort, since the time lent by others is valuable, and the benefit I can get from it will be greater if the doubts I share arise after having tried it. "
   },
  ]

  export const servicemail='service_017r5w8'
  export const templateemail='template_qteph3f'
  export const service2email='y-qa3iJiDmglHVCU6'