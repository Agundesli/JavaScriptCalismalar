var models = [
  {
    name: "Cadillac 418d",
    Image: "img/Cadillacs-for-Sale-1959-Cadillac-Eldorado.jpg",
    link: "https://www.ultimatespecs.com/cargallery/69/5951/w400_Cadillac-Eldorado-VII-2.jpg",
  },
  {
    name: "Cadillac AWE4",
    Image: "img/3.jpg",
    link: "https://www.ultimatespecs.com/cargallery/69/5951/w400_Cadillac-Eldorado-VII-2.jpg",
  },
  {
    name: "Cadillac 201YU",
    Image: "img/5300983fad21f77025193a34f5a3911e.jpg",
    link: "https://www.ultimatespecs.com/cargallery/69/5951/w400_Cadillac-Eldorado-VII-2.jpg",
  },
  {
    name: "Cadillac 4F8X",
    Image: "img/istockphoto-855868244-612x612.jpg",
    link: "https://www.ultimatespecs.com/cargallery/69/5951/w400_Cadillac-Eldorado-VII-2.jpg",
  },
];
var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
  duration: "2000",
  random: false,
};
init(settings);
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });
document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});
function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].Image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
