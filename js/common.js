$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html .header-area', headerFun);
$('footer').load('./inc.html .footer-container');



let idx = localStorage.idx;


function headerFun() {
  $('.head-menu li').eq(idx).addClass('active');

  $('.head-menu li').click(function () {
    let idx = $(this).index();
    localStorage.idx = idx;
  });

  $('.logo a').click(function () {
    localStorage.clear();
  });
}
