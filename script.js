const slidesData = [
  {
    title: "Through forest",
    src: "https://images.unsplash.com/photo-1471513671800-b09c87e1497c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Valley",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Winter cave",
    src: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Green hill",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
  },
  {
    title: "Waterfall",
    src: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Surface",
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
function createSlide() {
const contatiner = document.querySelector('.container');
  slidesData.forEach((data) => {
    const slide = document.createElement("div");
  const slideTitle = document.createElement("h3");
  const slideImg = document.createElement("img");

  slide.classList.add("slide");
  slideImg.src = data.src;
  slideTitle.classList.add("slide-title");
  slideTitle.innerText = data.title
  slide.append(slideImg);
  slide.append(slideTitle);
  contatiner.append(slide);
  });
  
}

createSlide();

const slides = document.querySelectorAll(".slide");
function openSlide() {
  
}
slides.forEach((slide) =>
  slide.addEventListener("click", (e) => {
    const container = document.querySelector('.container');
    container.style.background = `url(${e.target.src})`
    removeActive();
    slide.classList.add("active");
  })
);

function removeActive() {
  slides.forEach((slide) => slide.classList.remove("active"));
}
