const videos = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    picture: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
    view: "1M de vues",
    editor: "John Doe",
    time: "il y a 2 semaines",
  },
  {
    id: 2,
    title: "Learn React in 30 minutes",
    picture: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    view: 500000,
    editor: "Jane Smith",
    time: "30:00",
  },
  {
    id: 3,
    title: "CSS Grid Layout Tutorial",
    picture: "https://i.ytimg.com/vi/7kVeCqQCxlk/maxresdefault.jpg",
    view: 200000,
    editor: "Bob Johnson",
    time: "22:45",
  },
  {
    id: 4,
    title: "How to Code a Basic HTML Website",
    picture: "https://i.ytimg.com/vi/QA0XpGhiz5w/maxresdefault.jpg",
    view: 125874,
    editor: "John Doe",
    time: "20:10",
  },
  {
    id: 5,
    title: "JavaScript Crash Course for Beginners",
    picture: "https://i.ytimg.com/vi/4deVCNJq3qc/maxresdefault.jpg",
    view: 568974,
    editor: "Jane Smith",
    time: "30:25",
  },
  {
    id: 6,
    title: "A-ha - Take On Me (Official 4K Music Video)",
    picture: "https://i.ytimg.com/vi/tCnBrrnOefs/hqdefault.jpg",
    view: "1.9B",
    editor: "RHINO",
    time: "4:04",
  },
  {
    id: 7,
    title: "React Native Tutorial - Building a Mobile App",
    picture: "https://i.ytimg.com/vi/MJzmZ9qmdaE/maxresdefault.jpg",
    view: 135468,
    editor: "Sarah Lee",
    time: "40:30",
  },
  {
    id: 8,
    title: "How to Build a RESTful API with Node.js",
    picture: "./assets/video.jpg",
    view: 458796,
    editor: "Jack Wilson",
    time: "28:50",
  },
  {
    id: 9,
    title: "Introduction to Python Programming",
    picture: "./assets/video.jpg",
    view: 987654,
    editor: "Emily Park",
    time: "45:15",
  },
  {
    id: 10,
    title: "Vue.js Tutorial - Build a Web App from Scratch",
    picture: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
    view: 741258,
    editor: "David Kim",
    time: "50:05",
  },
  {
    id: 11,
    title: "Node.js Authentication Tutorial",
    picture: "https://i.ytimg.com/vi/2jqok-WgelI/maxresdefault.jpg",
    view: 369852,
    editor: "Linda Chen",
    time: "22:40",
  },
  {
    id: 12,
    title: "Docker Tutorial for Beginners",
    picture: "https://i.ytimg.com/vi/fqMOX6JJhGo/maxresdefault.jpg",
    view: 963258,
    editor: "Peter Lee",
    time: "35:55",
  },
  {
    id: 13,
    title: "Angular Tutorial - Build a Web App from Scratch",
    picture: "./assets/video.jpg",
    view: 159753,
    editor: "Mary Brown",
    time: "55:20",
  },
  {
    id: 14,
    picture: "./assets/video.jpg",
    title: "How to beat Elden Ring with one finger!!!",
    editor: "Test",
    views: "10K",
    time: "test",
  },
  {
    id: 15,
    picture: "./assets/video.jpg",
    title: "Hello World Sucks",
    editor: "Guilebro Code",
    views: "10K",
    time: "test",
  },
];

const mainSection = [
    {
        id: 1,
        title: "Accueil",
    },
    {
        id: 2,
        title: "Shorts",
    },
    {
        id: 3,
        title: "Abonnements",
    },
];

    const privateSection = [
  {
    id: 1,
    title: "Bibliothèque",
  },
  {
    id: 2,
    title: "Historique",
  },
  {
    id: 3,
    title: "Vos vidéos",
  },
  {
    id: 4,
    title: "À regarder plus tard",
  },
  {
    id: 5,
    title: "Vidéos J'aime",
  },
    ];

     const followSection = [
       {
         id: 1,
         title: "Editeur1",
       },
       {
         id: 2,
         title: "Editeur2",
       },
       {
         id: 3,
         title: "Editeur3",
       },
       {
         id: 4,
         title: "Editeur4",
       },
       {
         id: 5,
         title: "Editeur5",
       },
       {
         id: 6,
         title: "Editeur6",
       },
       {
         id: 7,
         title: "Editeur7",
       },
       {
         id: 8,
         title: "Editeur8",
       },
       {
         id: 9,
         title: "Editeur9",
       },
       {
         id: 10,
         title: "Editeur10",
       },
     ];

const myDiv = document.querySelector(".videos-container");
const mainSectionUl = document.querySelector(".main-section-ul");
const privateSectionUl = document.querySelector(".private-section-ul");
const followSectionUl = document.querySelector(".follow-section-ul");
const myInput = document.querySelector(".input-search");
const divResults = document.querySelector(".results");


 videos.map((element) => {
    myDiv.innerHTML += `<div class="each-video-card">
                        <img class="picture-video-card" src="${element.picture}" alt="${element.id}"/>
                        <span>${element.title}</span>
                        <span>${element.editor}</span>
                        <div class="view-time-card">
                        <span>${element.view}</span>
                        <span>${element.time}</span>
                        </div>
                        </div>`;
  });

mainSection.map((element) => {
    mainSectionUl.innerHTML += `<li>${element.title}</li>`;
});

privateSection.map((element) => {
    privateSectionUl.innerHTML += `<li>${element.title}</li>`;
});


function allVideos(videos) {
  divResults.innerHTML = "";
  videos.map((element) => {
    divResults.innerHTML += `<ul><li>${element.title}</li></ul>`;});
}; 


myInput.addEventListener("input", (e) => {
  let searchTerm = e.target.value;
  console.log(searchTerm, "ICI");
  if (searchTerm != "") {
    divResults.style.display = "block";
    const filteredSearch = videos.filter((element) =>
      element.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    allVideos(filteredSearch);
     if (filteredSearch.length === 0) {
       divResults.innerHTML += `<p>Aucun résultats<p>`;
     }
  } else {
    divResults.style.display = "none";
  };
});


