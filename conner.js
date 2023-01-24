const button = document.querySelector("#btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const h2 = document.querySelectorAll(".h2");
const caption = document.querySelectorAll(".caption");
const img = document.querySelectorAll(".img");


const changeColor = () => {
    body.style.backgroundColor = "darkred";
    h1.style.color = "darkgoldenrod";
    h3.style.color = "coral";
    let index = 0, length = h2.length;
    for (index = 0; index < length; index++) {
        h2[index].style.color = "burlywood";
    }
    let index2 = 0, length2 = caption.length;
    for (index2 = 0; index2 < length2; index2++) {
        caption[index2].style.color = "black";
    }
    let index3 = 0, length3 = img.length;
    for (index3 = 0; index3 < length3; index3++) {
        img[index3].style.color = "chocolate";
    }
};

button.addEventListener('click', changeColor)


for (var i = 0; i < 250; i++) {
    create(i);
  }
  
  function create(i) {
    var width = Math.random() * 8;
    var height = width * 0.4;
    var colourIdx = Math.ceil(Math.random() * 3);
    var colour = "red";
    switch (colourIdx) {
      case 1:
        colour = "yellow";
        break;
      case 2:
        colour = "blue";
        break;
      default:
        colour = "red";
    }
    $('<div class="confetti-' + i + ' ' + colour + '"></div>').css({
      "width": width + "px",
      "height": height + "px",
      "top": -Math.random() * 20 + "%",
      "left": Math.random() * 100 + "%",
      "opacity": Math.random() + 0.5,
      "transform": "rotate(" + Math.random() * 360 + "deg)"
    }).appendTo('#birthdays');
  
    drop(i);
  }
  
  function drop(x) {
    $('.confetti-' + x).animate({
      top: "100%",
      left: "+=" + Math.random() * 15 + "%"
    }, Math.random() * 3000 + 3000, function() {
      reset(x);
    });
  }
  
  function reset(x) {
    $('.confetti-' + x).animate({
      "top": -Math.random() * 20 + "%",
      "left": "-=" + Math.random() * 15 + "%"
    }, 0, function() {
      drop(x);
    });
  }
  
  var $bd = $('#birthdays');
  $('.close-bd').on('click touchstart', function() {
    
    $bd.hide()
    // localStorage.setItem('birthdays', true);  //set flag   - does not work at Stackoverflow
    $bd.find("[class^=confetti]").stop(true, true).fadeOut("slow");
  });
  
  // var show = localStorage.getItem('birthdays')
  show = true; // remove after uncommenting 
  $bd.toggle(show);

  