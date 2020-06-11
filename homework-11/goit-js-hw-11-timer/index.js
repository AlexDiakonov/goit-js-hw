class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
  }
  setDays() {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
        2,
        0
      );
      const hours = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, 0);
      const mins = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, 0);
      const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(
        2,
        0
      );
      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = mins;
      this.refs.secs.textContent = secs;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 17, 2020"),
});
timer.setDays();
