const lightboxEnabled = document.querySelectorAll(".lightboxEnabled");
const lightboxContainer = document.querySelector(".lightboxContainer");
const lightboxImage = document.querySelector(".lightboxImage");
const lightboxBtns = document.querySelectorAll(".lightboxBtn");
const lightboxBtnCancel = document.querySelector(
  ".lightboxContainer__iconCancel"
);
const lightboxBtnLeft = document.querySelector("#left");
const lightboxBtnRight = document.querySelector("#right");
const lightboxArray = Array.from(lightboxEnabled);
let activeImage = 0;

const showLightbox = () => {
  lightboxContainer.classList.add("active");
  document.body.style.overflow = "hidden";
  hideHeaders();
  setActiveImage(activeImage);
};

const hideLightbox = () => {
  lightboxContainer.classList.remove("active");
  document.body.style.overflow = "";
  showHeaders();
};

const hideHeaders = () => {
  document.querySelectorAll(".imagesGallery__header").forEach((header) => {
    header.style.display = "none";
  });
};

const showHeaders = () => {
  document.querySelectorAll(".imagesGallery__header").forEach((header) => {
    header.style.display = "block";
  });
};

const setActiveImage = (index) => {
  lightboxImage.src = lightboxArray[index].getAttribute("data-imagesrc");
  activeImage = index;
  updateButtons();
};

const updateButtons = () => {
  lightboxBtnLeft.classList.toggle("inactive", activeImage === 0);
  lightboxBtnRight.classList.toggle(
    "inactive",
    activeImage === lightboxArray.length - 1
  );
};

const removeBtnAnimation = () => {
  lightboxBtns.forEach((btn) => {
    btn.blur();
  });
};

const handleEscapeKey = (e) => {
  if (e.keyCode === 27) {
    hideLightbox();
  }
};

lightboxEnabled.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    activeImage = index;
    showLightbox();
  });
});

lightboxBtnCancel.addEventListener("click", () => {
  hideLightbox();
});

document.addEventListener("keydown", handleEscapeKey);

lightboxBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!btn.classList.contains("inactive")) {
      activeImage += btn.id === "left" ? -1 : 1;
      setActiveImage(activeImage);
      removeBtnAnimation();
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (!lightboxContainer.classList.contains("active")) return;
  if (e.key === "ArrowLeft") {
    let prevIndex = activeImage - 1;
    while (prevIndex >= 0 && lightboxArray[prevIndex].nodeName === "H2") {
      prevIndex--;
    }
    if (prevIndex >= 0) {
      activeImage = prevIndex;
      setActiveImage(activeImage);
    }
  } else if (e.key === "ArrowRight") {
    let nextIndex = activeImage + 1;
    while (
      nextIndex < lightboxArray.length &&
      lightboxArray[nextIndex].nodeName === "H2"
    ) {
      nextIndex++;
    }
    if (nextIndex < lightboxArray.length) {
      activeImage = nextIndex;
      setActiveImage(activeImage);
    }
  }
});
