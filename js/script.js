//ANIMATION WHEN LOADING THE SITE
const cardsItems = document.querySelectorAll(".card__item");
const attribution = document.querySelector('.attribution')

const startAnimation = (entries, observe) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};
const observer = new IntersectionObserver(startAnimation, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});
cardsItems.forEach(cardItem => {
    observer.observe(cardItem)
});
observer.observe(attribution);
//END CODE FOR ANIMATIONS
