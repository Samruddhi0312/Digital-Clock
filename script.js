
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ];
            let day = days[now.getDay()];
            let month = months[now.getMonth()];
            let date = now.getDate();
            let year = now.getFullYear();
            document.getElementById('date').textContent = `${day}, ${month} ${date}, ${year}`;
        }
        updateClock();
        setInterval(updateClock, 1000);

    