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
    view: "1M de vues",
    editor: "Jane Smith",
    time: "il y a 2 semaines",
  },
  {
    id: 3,
    title: "CSS Grid Layout Tutorial",
    picture: "https://i.ytimg.com/vi/7kVeCqQCxlk/maxresdefault.jpg",
    view: "1M de vues",
    editor: "Bob Johnson",
    time: "il y a 2 semaines",
  },
  {
    id: 4,
    title: "How to Code a Basic HTML Website",
    picture: "https://i.ytimg.com/vi/QA0XpGhiz5w/maxresdefault.jpg",
    view: "1M de vues",
    editor: "John Doe",
    time: "il y a 2 semaines",
  },
  {
    id: 5,
    title: "JavaScript Crash Course for Beginners",
    picture: "https://i.ytimg.com/vi/4deVCNJq3qc/maxresdefault.jpg",
    view: "1M de vues",
    editor: "Jane Smith",
    time: "il y a 2 semaines",
  },
  {
    id: 6,
    title: "A-ha - Take On Me (Official 4K Music Video)",
    picture: "https://i.ytimg.com/vi/tCnBrrnOefs/hqdefault.jpg",
    view: "1M de vues",
    editor: "RHINO",
    time: "il y a 2 semaines",
  },
  {
    id: 7,
    title: "React Native Tutorial - Building a Mobile App",
    picture: "https://i.ytimg.com/vi/MJzmZ9qmdaE/maxresdefault.jpg",
    view: "1M de vues",
    editor: "Sarah Lee",
    time: "il y a 2 semaines",
  },
  {
    id: 8,
    title: "How to Build a RESTful API with Node.js",
    picture: "./assets/video.jpg",
    view: "1M de vues",
    editor: "Jack Wilson",
    time: "il y a 2 semaines",
  },
  {
    id: 9,
    title: "Introduction to Python Programming",
    picture: "./assets/video.jpg",
    view: "1M de vues",
    editor: "Emily Park",
    time: "il y a 2 semaines",
  },
  {
    id: 10,
    title: "Vue.js Tutorial - Build a Web App from Scratch",
    picture: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
    view: "1M de vues",
    editor: "David Kim",
    time: "il y a 2 semaines",
  },
  {
    id: 11,
    title: "Node.js Authentication Tutorial",
    picture: "https://i.ytimg.com/vi/2jqok-WgelI/maxresdefault.jpg",
    view: "1M de vues",
    editor: "Linda Chen",
    time: "il y a 2 semaines",
  },
  {
    id: 12,
    title: "Docker Tutorial for Beginners",
    picture: "https://i.ytimg.com/vi/fqMOX6JJhGo/maxresdefault.jpg",
    view: "1M de vues",
    editor: "Peter Lee",
    time: "il y a 2 semaines",
  },
  {
    id: 13,
    title: "Angular Tutorial - Build a Web App from Scratch",
    picture: "./assets/video.jpg",
    view: "1M de vues",
    editor: "Mary Brown",
    time: "il y a 2 semaines",
  },
  {
    id: 14,
    picture: "./assets/video.jpg",
    title: "How to beat Elden Ring with one finger!!!",
    editor: "Test",
    view: "1M de vues",
    time: "il y a 2 semaines",
  },
  {
    id: 15,
    picture: "./assets/video.jpg",
    title: "Hello World Sucks",
    editor: "Guilebro Code",
    view: "1M de vues",
    time: "il y a 2 semaines",
  },
];

const mainSection = [
  {
    id: 1,
    title: "Accueil",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 2,
    title: "Shorts",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 3,
    title: "Abonnements",
    icon: "./assets/nav-icon.png",
  },
];

const privateSection = [
  {
    id: 1,
    title: "Bibliothèque",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 2,
    title: "Historique",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 3,
    title: "Vos vidéos",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 4,
    title: "À regarder plus tard",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 5,
    title: "Vidéos J'aime",
    icon: "./assets/nav-icon.png",
  },
];

const followSection = [];
for (let i = 1; i < 11; i++) {
  followSection.push({
    id: i,
    title: "Editeur" + i,
  });
};

const explorerSection = [
  {
    id: 1,
    title: "Tendances",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 2,
    title: "Musique",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 3,
    title: "Films et TV",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 4,
    title: "Direct",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 5,
    title: "Jeux vidéos",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 6,
    title: "Actualités",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 7,
    title: "Sport",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 8,
    title: "Savoirs & Cultures",
    icon: "./assets/nav-icon.png",
  },
  {
    id: 9,
    title: "Mode et beauté",
    icon: "./assets/nav-icon.png",
  },
];

const myDiv = document.querySelector(".videos-container");
const mainSectionUl = document.querySelector(".main-section-ul");
const privateSectionUl = document.querySelector(".private-section-ul");
const followSectionUl = document.querySelector(".follow-section-ul");
const explorerSectionUl = document.querySelector(".explorer-section-ul");
const myInput = document.querySelector(".input-search");
const divResults = document.querySelector(".results");

videos.map((element) => {
  myDiv.innerHTML += `<div class="each-video-card">
                        <img class="picture-video-card" src="${element.picture}" alt="${element.id}"/>
                        <span class="video-title">${element.title}</span>
                        <span class="editor-view-time-style">${element.editor}</span>
                        <div class="view-time-card">
                        <span class="editor-view-time-style">${element.view} • ${element.time}</span>
                        <span class="editor-view-time-style"></span>
                        </div>
                        </div>`;
});

mainSection.map((element) => {
  mainSectionUl.innerHTML += `<li class="space-lines">${element.title}</li>`
});

privateSection.map((element) => {
  privateSectionUl.innerHTML += `<li class="space-lines">${element.title}</li>`;
});

followSection.map((element) => {
  followSectionUl.innerHTML += `<li class="space-lines">${element.title}</li>`;
});

explorerSection.map((element) => {
  explorerSectionUl.innerHTML += `<li class="space-lines">${element.title}</li>`
});

function allVideos(videos) {
  divResults.innerHTML = "";
  videos.map((element) => {
    divResults.innerHTML += `<div class="div-display"><span class="span-display">🔍\xa0\xa0\xa0${element.title}</span></div>`;
  });
}

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
      divResults.innerHTML += `<p class="span-display">Aucun résultat<p>`;
    }
  } else {
    divResults.style.display = "none";
  }
});
