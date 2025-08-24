const tg = window.Telegram.WebApp;

function initTelegram() {
    tg.ready();
    const user = tg.initDataUnsafe?.user; // Telegram user info
    console.log("Logged in as:", user.first_name, user.id);
}

initTelegram();
