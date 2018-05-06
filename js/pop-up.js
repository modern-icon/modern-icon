var pics = document.querySelectorAll('.js-img');
var picsLength = pics.length;
var popUp = document.querySelector('.pop-up');
var srcUrl;
var load;
var i = 0;
var mess = '<img src="';

popUp.classList.add('pop-up--hidden');
popUp.addEventListener("click", function () {
  popUp.classList.add('pop-up--hidden');
});


for (i = 0; i < picsLength; i = i + 1) {
  pics[i].addEventListener("click", function () {
    popUp.classList.remove('pop-up--hidden');
//    popUp.innerHTML = "<span>Загрузка...</span>";
    srcUrl = this.getAttribute('Meta-src-url');
//    load = new XMLHttpRequest();
//    load.open('GET', srcUrl, false);
//    load.send();
    
//    mess = mess + srcUrl + '" >';
//    popUp.innerHTML = mess;
//    mess = '<img src="';
    
    popUp.setAttribute('style', 'background-image: url("' + srcUrl + '");');
  });
}

