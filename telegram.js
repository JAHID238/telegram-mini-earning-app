const tg = window.Telegram.WebApp;
tg.ready();

const user = tg.initDataUnsafe?.user;
window.tgUserId = user.id;

document.getElementById('welcome').innerText = Welcome, ${user.first_name};
