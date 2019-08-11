
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f9f3f4"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0.5,
          "color": "red"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0.6,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance":110,
        
        
        
        "speed": 1.2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "fixed": {
          "distance": 110
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "grey",
      "background_image": "image.png",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

        var countDownDate = new Date ("August 21, 2019 00:00:00").getTime();

        var x = setInterval(function() {

        var now = new Date ().getTime();

        var distance = countDownDate - now;

        var days = Math.floor (distance /(1000*60*60*24));
         var hours = Math.floor ((distance % (1000*60*60*24)) / (1000*60*60));
          var minutes = Math.floor ((distance % (1000*60*60)) / (1000*60));
           var seconds = Math.floor ((distance % (1000*60)) / 1000);

document.getElementById("launch").innerHTML=days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    
    if (distance < 0) {
    clearInterval(x);
    document.getElementById('launch').innerHTML="EXPIRED";
    }
            
}, 1000);
    
