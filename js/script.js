const showDateTime = () => {
    const greeting = document.getElementById('greeting');
    const dayOfWeek = document.getElementById('dayOfWeek');
    const currentTime = document.getElementById('currentTime');
    const daysToNewYear = document.getElementById('daysToNewYear');

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const dayOfWeekIndex = now.getDay();

        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return {
            greeting: getGreeting(hours),
            dayOfWeek: getDayOfWeek(dayOfWeekIndex),
            currentTime: `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`,
            daysToNewYear: getDaysToNewYear(now)
        };
    };

    const getGreeting = (hours) => {
        if (hours < 12) {
            return 'Доброе утро';
        } else if (hours < 18) {
            return 'Добрый день';
        } else {
            return 'Добрый вечер';
        }
    };

    const getDayOfWeek = (dayIndex) => {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[dayIndex];
    };

    const getDaysToNewYear = (now) => {
        const currentYear = now.getFullYear();
        const newYear = new Date(currentYear + 1, 0, 1);
        const daysToNewYear = Math.floor((newYear - now) / (1000 * 60 * 60 * 24));
        return daysToNewYear;
    };

    const updateDateTime = () => {
        const timeInfo = getCurrentTime();
        greeting.textContent = timeInfo.greeting;
        dayOfWeek.textContent = `Сегодня: ${timeInfo.dayOfWeek}`;
        currentTime.textContent = `Текущее время: ${timeInfo.currentTime}`;
        daysToNewYear.textContent = `До нового года осталось ${timeInfo.daysToNewYear} дней`;
    };

    updateDateTime();

    setInterval(updateDateTime, 1000);
};

showDateTime();