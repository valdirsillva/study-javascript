
window.addEventListener('load', () => {
    let count = 0;
    const timer = document.querySelector('#timer');

    const interval = setInterval(() => {
        timer.textContent = ++count;

        if (count === 10) {
            this.clearInterval(interval);
        }

        if (count % 5 === 0) {
            setTimeout(() => {
                timer.textContent = count + ',5';
            }, 500)
        }
    }, 1000);
})
