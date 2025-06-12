import "xp.css/dist/XP.css"
import './styles.css';

setInterval(() => {
    const now = new Date();
    document.getElementById("text").innerText = `The time is: ${now.toLocaleTimeString()}`;
  }, 1000); // 1000ms = 1 second

document.getElementById("ok").addEventListener("click", () => {
  document.getElementById("text").innerText = `stop it`;
});

console.log('Frontend loaded');