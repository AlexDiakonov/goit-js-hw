"use strict";
import images from "./gallery-items.js";

let gallery = document.querySelector(".js-gallery");
let modal = document.querySelector(".js-lightbox");
let closeButton = document.querySelector(".lightbox__button");
let alt = images.map((a) => a.description);
let originalImages = images.map((a) => a.original);
let img = document.querySelector(".lightbox__image");

images.forEach((img) => {
  let imgLi = document.createElement("li");
  let imgLink = document.createElement("a");
  let newImg = document.createElement("img");
  imgLi.classList.add("gallery__item");
  imgLink.classList.add("gallery__link");
  newImg.classList.add("gallery__image");
  newImg.setAttribute("alt", `${img.description}`);
  newImg.src = img.preview;
  imgLink.appendChild(newImg);
  imgLi.appendChild(imgLink);
  gallery.appendChild(imgLi);
});

gallery.addEventListener("click", showPic);
modal.addEventListener("click", closeGallery);
document.addEventListener("keydown", arrowSwap);

function showPic(e) {
  function addStyle() {
    img.classList.add("slow-open");
  }
  if (e.target === e.currentTarget) {
    return;
  }
  let imgAlt = e.target.alt;
  let imgIdx = alt.indexOf(imgAlt);
  modal.classList.add("is-open");
  img.src = originalImages[imgIdx];
  img.setAttribute("alt", `${alt[imgIdx]}`);
  setTimeout(addStyle, 400);
}

function closeGallery(e) {
  if (closeButton) {
    modal.classList.remove("is-open");
    img.src = "";
    img.classList.remove("slow-open");
    img.removeAttribute("alt");
  }
}

function arrowSwap(e) {
  let img = document.querySelector(".lightbox__image");
  let imgAlt = img.getAttribute("alt");
  let imgIdx = alt.indexOf(imgAlt);
  let totalIdx = alt.length - 1;
  function addStyle() {
    img.classList.add("slow-open");
  }
  switch (e.key) {
    case "ArrowRight":
      img.classList.remove("slow-open");
      setTimeout(addStyle, 400);
      img.src = originalImages[imgIdx + 1];
      img.setAttribute("alt", `${alt[imgIdx + 1]}`);
      if (imgIdx >= totalIdx) {
        img.src = originalImages[0];
        img.setAttribute("alt", alt[0]);
      }
      break;
    case "ArrowLeft":
      img.classList.remove("slow-open");
      setTimeout(addStyle, 400);
      img.src = originalImages[imgIdx - 1];
      img.setAttribute("alt", `${alt[imgIdx - 1]}`);
      if (imgIdx <= 0) {
        img.src = originalImages[totalIdx];
        img.setAttribute("alt", alt[totalIdx]);
      }
      break;
    case "Escape":
      modal.classList.remove("is-open");
      break;
  }
}
