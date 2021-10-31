const player = document.querySelectorAll('.kotak .player .pilih');
const musuh = document.querySelector('.kotak .musuh .pilihan');
const kondisi = document.querySelector('.kotak .hasil');
const kotak = document.querySelector('.kotak');
const button = document.querySelector('.kotak button');

let hasil;
let computer = Math.floor(Math.random()* 15);

if (computer >= 0 && computer <= 5) {
  computer = 'BATU';
}else if(computer >= 6 && computer <= 10){
  computer = 'GUNTING';
}else if(computer >= 11 && computer <= 15){
  computer = 'KERTAS';
}

player.forEach(pemain =>{
  pemain.addEventListener('click', click);
});

function click(e){
  let pemain = e.target;
  
  pilih(pemain);
}


function pilih(pemain){
  player[0].classList.remove('terpilih');
  player[1].classList.remove('terpilih');
  player[2].classList.remove('terpilih');
  pemain.classList.add('terpilih');
}

function mulai(){
  if (kotak.classList.contains('retry')) {
    location.reload();
  }else{
    musuh.innerText = 'MEMILIH';
    
    setTimeout(function() {
    if (player[0].classList.contains('terpilih')) {
      if (computer == 'BATU') {
        hasil = 'SERI';
      }else if(computer == 'GUNTING'){
        hasil = 'MENANG';
      }else if(computer == 'KERTAS'){
        hasil = 'KALAH';
      }
    }else if (player[1].classList.contains('terpilih')) {
      if (computer == 'BATU') {
        hasil = 'KALAH';
      }else if(computer == 'GUNTING'){
        hasil = 'SERI';
      }else if(computer == 'KERTAS'){
        hasil = 'MENANG';
      }
    }else if (player[2].classList.contains('terpilih')) {
      if (computer == 'BATU') {
        hasil = 'MENANG';
      }else if(computer == 'GUNTING'){
        hasil = 'KALAH';
      }else if(computer == 'KERTAS'){
        hasil = 'SERI';
      }
    }else{
      alert('mohon pilih jawaban dulu');
      musuh.innerHTML = 'KESALAHAN';
      kotak.classList.add('retry');
      button.textContent = 'RETRY';
      return;
    }

    musuh.innerHTML = computer;
    kondisi.innerText = hasil;
    kotak.classList.add('retry');
    button.textContent = 'RETRY';
    }, 1000);
  
  }
}