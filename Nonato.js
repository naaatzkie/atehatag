const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('gif');
const question = document.getElementById('question');
yesBtn.classList.add('pulse-animation');

const messages = [
    "ge na pls",
    "plssss",
    "Ah geatay",
    "Ge na teeee",
    ":<",
    ":<<",
    "Muhilak jud ko",
    "Ang mu no bayot",
    "Mag langi sa ko",
    "Sige naaaaa"
];


let messageIndex = 0;
let yesScale = 1.2;
let noCount = 0;
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    if (noCount >= 5) {
        question.innerHTML = "Bayot kay ni NO";
    }
    noCount++;
    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    yesBtn.style.backgroundColor = `rgb(${255 - (yesScale * 10)}, ${77 + (yesScale * 5)}, ${109})`;
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yeheyy thanks bishhhhh";
    gif.src = "cat.gif";
    gif.classList.add('shake');
    document.getElementById('extra-message').style.display = 'block';
    noBtn.style.display = 'none';
    setInterval(createHeart, 150);
    yesBtn.style.transform = 'scale(1.2)';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
});

});


function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = "🖕";
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}