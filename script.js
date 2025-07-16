document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 1000 } },
            "color": { "value": "#00D1FF" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.7, "random": true },
            "size": { "value": 4, "random": true },
            "line_linked": { 
                "enable": true, 
                "distance": 180, 
                "color": "#00D1FF", 
                "opacity": 0.4, 
                "width": 1.5 
            },
            "move": { 
                "enable": true, 
                "speed": 3, 
                "direction": "none", 
                "random": true, 
                "straight": false, 
                "out_mode": "out" 
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });

   
});
