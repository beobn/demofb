self.addEventListener('message', function(e) {
    const durationInSeconds = e.data.durationInSeconds;
    const startTime = e.data.startTime;

    let timer = durationInSeconds;

    function updateTimer() {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000; // convert to seconds

        timer = Math.max(durationInSeconds - elapsedTime, 0);

        if (timer > 0) {
            self.postMessage(timer);
            setTimeout(updateTimer, 1000); // Gọi lại hàm sau mỗi giây
        } else {
            self.postMessage(0);
        }
    }

    updateTimer();
}, false);