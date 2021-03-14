class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.process = 0;
    }
    start() {
        console.log('Timer Bleep started (delay = ' + this.delay + 'stopCount = ' + this.stopCount);
        this.process = setInterval(this.tick.bind(this), this.delay);
    }
    tick() {
        if (this.stopCount <= 0)
            this.stop();
        console.log('Timer bleep Tick! | cycles left' + this.stopCount--);
    }
    stop() {
        console.log('Timer Bleep stopped');
        clearInterval(this.process);
    }
}
function runTimer(id, delay, counter) {
    const timer = new Timer(id, delay, counter);
    timer.start();
}