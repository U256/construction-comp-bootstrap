// "use strict";

const bgNavContainer = document.querySelector(".header__bg-navigator");
const headerBgImagesArr = document.querySelectorAll(".header__bg-image");
const imagesCount = headerBgImagesArr.length;

function prevImgNumber(i) {
  return (i - 1 < 0) ? (imagesCount - 1) : (i - 1);
}

function nextImgNumber(i) {
  return (i + 1 == imagesCount) ? 0 : (i + 1);
}

//creating navPoints:
for (let i = 0; i < imagesCount; i++) {
  let point = document.createElement("div");
  point.className = "header__bg-navigator-point";
  bgNavContainer.append(point);
}

//start bg images classes set:
headerBgImagesArr[0].classList.add("header__bg-image_active");

function changeBg(i) {

  headerBgImagesArr[prevImgNumber(i)].classList.remove(
    "header__bg-image_roll-up"
  );

  headerBgImagesArr[i].classList.remove("header__bg-image_active");
  headerBgImagesArr[i].classList.add("header__bg-image_roll-up");

  headerBgImagesArr[nextImgNumber(i)].classList.add("header__bg-image_active");
}

const bgNavPointsArr = document.querySelectorAll(".header__bg-navigator-point");

//start bg nav point classes set:
bgNavPointsArr[0].classList.add("header__bg-navigator-point_active");

function changeNavPoint(i) {
  bgNavPointsArr.forEach((point) => {
    point.classList.remove("header__bg-navigator-point_active");
  });

  bgNavPointsArr[i].classList.add("header__bg-navigator-point_active");
}

let iteration = 0;

// Initiator:
setInterval(() => {
  changeBg(iteration);
  changeNavPoint(nextImgNumber(iteration));

  iteration++;

  if (iteration == imagesCount) {
    iteration = 0;
  }
}, 6000);

