let time = 1500, interval;
        let isRunning = false;
        
        function startTimer() {
            if (!interval) {
                isRunning = true;
                document.getElementById('status').textContent = "Timer is running...";
                interval = setInterval(() => {
                    if (time > 0) {
                        time--;
                        updateDisplay();
                    } else {
                        clearInterval(interval);
                        isRunning = false;
                        document.getElementById('status').textContent = "Time is up! Take a break!";
                        alert('Time is up! Take a break!');
                    }
                }, 1000);
            }
        }
        
        function pauseTimer() {
            clearInterval(interval);
            interval = null;
            isRunning = false;
            document.getElementById('status').textContent = "Click Start to resume the timer";
        }
        
        function resetTimer() {
            clearInterval(interval);
            interval = null;
            isRunning = false;
            time = 1500;
            updateDisplay();
            document.getElementById('status').textContent = "Click Start to begin the timer";
        }
        
        function openTimePopup() {
            if (isRunning) return;
            let minutes = prompt("Enter minutes:", Math.floor(time / 60));
            let seconds = prompt("Enter seconds:", time % 60);
            if (minutes !== null && seconds !== null) {
                minutes = parseInt(minutes) || 0;
                seconds = parseInt(seconds) || 0;
                time = minutes * 60 + seconds;
                updateDisplay();
            }
        }
        
        function updateDisplay() {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        window.addEventListener('click', () => {
            document.getElementById('bg-music').play();
        }, { once: true });