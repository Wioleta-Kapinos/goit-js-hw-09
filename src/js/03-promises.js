import Notiflix from "notiflix";
let delayInput = document.querySelector('[name="delay"]');
let stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const formPromise = document.querySelector(".form");
let position;

function callTheFunction(event) {
  event.preventDefault();
  let value = amountInput.value;
  let delay = delayInput.value;
    for (let i = 1; i <= value; i++) {
    position = i;
    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
          if(shouldResolve) {
            return Promise.resolve({position, delay});
          } else {
            return Promise.reject({position, delay});
          }
    }
    let totalDelay = delay + stepInput.value;
    createPromise(position, delay)
     .then(({ position, totalDelay }) => {
       Notiflix.Notify.success(`Fulfilled promise ${position} in ${totalDelay}ms`);
     })
     .catch(({ position, totalDelay }) => {
       Notiflix.Notify.failure(`Rejected promise ${position} in ${totalDelay}ms`);
     });
    }
} 
formPromise.addEventListener("submit", callTheFunction);