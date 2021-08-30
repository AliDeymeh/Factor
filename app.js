const temashin = document.querySelector('.temashin');
const ghemashin = document.querySelector('.ghemashin');

const temotor = document.querySelector('.temotor');
const ghemotor = document.querySelector('.ghemotor');

const telas = document.querySelector('.telas');
const ghelas = document.querySelector('.ghelas');

const tesan = document.querySelector('.tesan');
const ghesan = document.querySelector('.ghesan');

const jamekols = document.querySelector('.jamekols');
/*----------------------------------- */
let kols;

function jame() {
  let colmahsin = temashin.value * ghemashin.value;
  let colmotor = temotor.value * ghemotor.value;
  let collastic = telas.value * ghelas.value;
  let colsandali = tesan.value * ghesan.value;
  kols = collastic + colmotor + colsandali + colmahsin;
}
const btns = document.querySelector('.btns');
btns.addEventListener('click', function () {
  if(!kols)
  {
    jamekols.innerHTML = 0;

  }
  else{
    jamekols.innerHTML = kols;

  }
})