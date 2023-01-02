import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
const btnStart = document.querySelector('[data-start');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: function(selectedDates) {
      if(selectedDates[0] < fp.now) {
        Notiflix.Notify.warning("Please choose a date in the future");
        btnStart.disabled = true;
      } else {
        btnStart.disabled = false;
      }
    },
};
const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);
const fieldDay = document.querySelector("[data-days]");
const fieldHours = document.querySelector("[data-hours]");
const fieldMinutes = document.querySelector("[data-minutes]");
const fieldSeconds = document.querySelector("[data-seconds]"); 
let timerId;
btnStart.addEventListener("click", countTimer);
 function countTimer() {
  timerId = setInterval(() => {
    const actualDate = fp.now;
    const selectDate = fp.selectedDates[0];
    let ms = selectDate - actualDate;
    function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    }
    let result = convertMs(ms);
    let value = 10;
    function addLeadingZero(value) { 
      result.days = result.days < value ? String(result.days).padStart(2, "0") : String(result.days).padStart(3, "0");
      result.hours = result.hours < value ? String(result.hours).padStart(2, "0") : result.hours;
      result.minutes = result.minutes < value ? String(result.minutes).padStart(2, "0") : result.minutes;
      result.seconds = result.seconds < value ? String(result.seconds).padStart(2, "0") : result.seconds;
    }
    addLeadingZero(value);
    fieldDay.innerHTML = result.days;
    fieldHours.innerHTML = result.hours;
    fieldMinutes.innerHTML = result.minutes;
    fieldSeconds.innerHTML = result.seconds;
    if (ms < 0) {
      clearInterval(timerId);
      document.querySelectorAll(".value").innerHTML = "00";
    }
  }, 1000);
};