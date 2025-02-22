console.log("file loaded");

const deepBreatheBtn = document.getElementById("deep-breathe-btn");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("breathingModal");
const circle = document.getElementById("circle");

let breathingInterval;

deepBreatheBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    startBreathingAnimation();
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    clearInterval(breathingInterval);
});

function startBreathingAnimation() {
    let isBreathingIn = true;
    clearInterval(breathingInterval);

    function animateBreathing() {
        if (isBreathingIn) {
            circle.textContent = "Breathe In";
            circle.classList.add("scale-125", "bg-green-500", "transition-all", "duration-1000");
            circle.classList.remove("scale-75", "bg-blue-500");
        } else {
            circle.textContent = "Breathe Out";
            circle.classList.add("scale-75", "bg-blue-500", "transition-all", "duration-1000");
            circle.classList.remove("scale-125", "bg-green-500");
        }
        isBreathingIn = !isBreathingIn;
    }
    animateBreathing();
    breathingInterval = setInterval(animateBreathing, 4000);
}






const fourSevenEightBtn = document.getElementById("fourSevenEightBtn");
const fourSevenEightModal = document.getElementById("fourSevenEightModal");
const close478Modal = document.getElementById("close478Modal");
const progressCircle = document.getElementById("progress-circle");
const breathText = document.getElementById("breath-text");

let breathing478Interval;

fourSevenEightBtn.addEventListener("click", () => {
    fourSevenEightModal.classList.remove("hidden");
    start478Breathing();
});

close478Modal.addEventListener("click", () => {
    fourSevenEightModal.classList.add("hidden");
    clearInterval(breathing478Interval);
});

function start478Breathing() {
    let phases = [
        { text: "Breathe In", time: 4000, offset: 283 },  
        { text: "Hold", time: 7000, offset: 283 },    
        { text: "Breathe Out", time: 8000, offset: 0 }
    ];

    let index = 0;

    function animateBreath() {
        let phase = phases[index];
        breathText.textContent = phase.text;
        index = (index + 1) % phases.length;
        clearInterval(breathing478Interval);
        breathing478Interval = setTimeout(animateBreath, phase.time);
    }

    animateBreath();
}


