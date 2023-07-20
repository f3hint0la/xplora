AOS.init({
  duration: 800,
  offset: 150,
});

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu");

const controlBtn = document.querySelectorAll(".next-btn");
const aboutImage = document.querySelector(".image-slide");

const loadMoreBtn = document.querySelector(".load-more");
const cards = [
  ...document.querySelectorAll(".destinations .container .destination-card"),
];

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

controlBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let imgSrc = button.getAttribute("data-src");
    aboutImage.src = imgSrc;
  });
});

var items = 3;

loadMoreBtn.addEventListener("click", () => {
  for (var i = items; i < items + 3; i++) {
    cards[i].style.display = "block";
  }
  items += 3;
  if (items >= cards.length) {
    loadMoreBtn.style.display = "none";
  }
});
