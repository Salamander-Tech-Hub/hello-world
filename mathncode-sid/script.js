// Typewriter effect for greeting text
const greetingText = "Bringing code to life from the heart";
const greetingContainer = document.querySelector('.content h1');
let charIndex = 0;
greetingContainer.textContent = "";

function typeWriter() {
  if (charIndex < greetingText.length) {
    greetingContainer.textContent += greetingText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

//  Display current date and time in footer
const footer = document.querySelector('.footer');
const timeDisplay = document.createElement('p');
function updateTime() {
  const now = new Date();
  timeDisplay.textContent = `Local time: ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`;
}
setInterval(updateTime, 1000);
footer.appendChild(timeDisplay);

// Time-based greeting console message
const currentHour = new Date().getHours();
let timeGreeting = "Hello, developer!";
if (currentHour < 12) timeGreeting = "Good morning, coder!";
else if (currentHour < 18) timeGreeting = "Good afternoon, tech enthusiast!";
else timeGreeting = "Good evening, code master!";
console.log(timeGreeting);

