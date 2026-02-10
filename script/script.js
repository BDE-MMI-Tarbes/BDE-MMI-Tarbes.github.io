const star = document.querySelector('.star');
const aboutSection = document.querySelector('.main__about');

const starObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            star.classList.add('stop-animation');
        } else {
            star.classList.remove('stop-animation');
        }
    });
}, { threshold: 0.25 }); 

starObserver.observe(aboutSection);

function loop_div() {
    let loopdivs = document.querySelectorAll(".main__student_container");
    loopdivs[loopdivs.length - 1].style.opacity = '0%';
    for (let index = 0; index < loopdivs.length; index++) {
        setTimeout(() => {
            if (loopdivs[index] != loopdivs[0]) {
                loopdivs[index - 1].style.opacity = '0%';
                setTimeout(() => {
                    loopdivs[index].style.opacity = '100%';
                },600);
            } else {
                setTimeout(() => {
                    loopdivs[index].style.opacity = '100%';
                },600);
            }
        }, 6000 * index);
    }
    setTimeout(() => {
        loop_div();
    },loopdivs.length * 6000)
};
loop_div();

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = '#3a3c90'; 
ctx.lineWidth = 1;
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = '6';
ctx.moveTo(9, 246);
ctx.quadraticCurveTo(399, 11, 1512, 0);
ctx.moveTo(9, 666);
ctx.quadraticCurveTo(1626, 934, 2100, 792);
ctx.stroke();
ctx.strokeStyle = '#bd2927'; 
ctx.beginPath();
ctx.moveTo(-1, 409);
ctx.quadraticCurveTo(2066, 534, 2100, 312);
ctx.moveTo(4, 1029);
ctx.quadraticCurveTo(2054, 939, 2100, 1068);
ctx.stroke();

const divcontainer = document.querySelectorAll('.container_text');
const programmeElementShown = document.querySelectorAll('.shown_event');
const allChevronsElement =  document.querySelectorAll('.main_point img');

function hide_elements(index) {
    const chevron = allChevronsElement[index];
    const elementContent = programmeElementShown[index];
    const div_container = divcontainer[index];

            if (elementContent.style.opacity !== '100') {
                 elementContent.style.height = 'auto';
                 chevron.style.rotate = '180deg';
                 div_container.style.height = '100px';
                 div_container.style.margin = '10px';
                 elementContent.style.zIndex = 'auto';
                 setTimeout(() => {
                    elementContent.style.opacity = '100';
                 },200);
             } else {
                 elementContent.style.opacity = '0';
                 setTimeout(() => {
                    elementContent.style.height = '0';
                    chevron.style.rotate = '90deg';
                    div_container.style.height = '0';
                    div_container.style.margin = 'unset';
                    elementContent.style.zIndex = '-1';
                 },200);
              }
}

// let finalday = new Date("Feb 16, 2026 12:45:00").getTime();
// let interval = setInterval(() => {
//     let datenow = new Date().getTime();
//     let difference = finalday - datenow;

//     let days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     if (seconds < 10) {
//         document.querySelector('.timer_end').textContent = days + "J " + hours + ":" + minutes + ":0" + seconds;
//     } else {
//         document.querySelector('.timer_end').textContent = days + "J " + hours + ":" + minutes + ":" + seconds;
//     }

//     if (difference < 0) {
//         document.querySelector('.timer_end').textContent = "élection en cours";
//     }
// },1000);

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
    }

});
