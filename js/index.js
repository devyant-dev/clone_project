
const secWorkFast = document.querySelector('.work-fast'),
  elSec = document.querySelector('section'),
  // secWork100vh = document.querySelector('.work-fast-area00'),
  fastArea = document.querySelector('.work-fast-conarea');
let scrolle = 0;
let offTop = secWorkFast.offsetTop;

const fastAr = document.querySelector('.fast-area01');
const fastBox = document.querySelectorAll('.fast-box01');
let w100 = 100, increaseWidth = 0;


console.log(offTop + (window.innerHeight * 3))
fastBox[0].style = `min-width: 100%; background-color: red;`;
fastBox[1].style = `min-width: 100%; background-color: red;`;
fastBox[2].style = `width: 100%; background-color: red;`;


window.addEventListener('scroll', function () {

  console.log(offTop + 'offtop');
  console.log(window.pageYOffset + 'yoffset');
  console.log(offTop + (window.innerHeight * 3) + 'plus')
  let wheeleve = event.wheelDeltaY;

  scrolle = window.pageYOffset - offTop;


  //콘텐츠 위치시작 ~~~ 끝
  if (window.pageYOffset > offTop && offTop + (window.innerHeight * 3) > window.pageYOffset) {
    fastArea.style = `position:fixed;padding: 90px 20px 0; left:0; top:0; width:100%;`;
    fastAr.style = `justify-content: flex-start; flex-wrap: nowrap;`

    fastBox.forEach(function (el, key) {
      // console.log(parseInt(fastBox[key].style.minWidth))
      if (key == 0 && parseInt(el.style.minWidth) > 33) {
        if (32 < w100 <= 100) {
          w100--;
        }
        el.style = `min-width: ${w100}%; background-color: red;`;
      } else if (key == 1 && parseInt(el.style.minWidth) > 33) {
        if (32 < w100 <= 100) {
          let w100 = 100;
          w100--;
        }
        el.style = `min-width: ${w100}%; background-color: blue;`;
      } else if (key == 2 && parseInt(el.style.width) > 33) {
        {
          if (32 < w100 <= 100) {
            let w100 = 100;
            w100--;
          }
          el.style = `width: ${w100}%; background-color: green;`;
        }
      }
    });

  }
  // else if (window.pageYOffset < offTop ) {
  //   fastBox[2].style = `width: 100%; background-color: yellow;`;
  //   fastArea.style = `position:relative; padding-top:0vh`;
  //   console.log(increaseWidth)
  // }
  else {
    //노멀
    fastArea.style = `position:relative; padding-top:0vh`;
    fastBox[2].style = `width: 100%; background-color: yellow;`;
  }

  if (offTop + (window.innerHeight * 3) < window.pageYOffset) {
    fastArea.style = `position:relative; padding-top:315vh`;
  }
})
