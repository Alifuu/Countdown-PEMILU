const x = setInterval(function(){

const pemiluDate = new Date("FEB 14, 2024 00:00:00").getTime();

const hariIni = new Date().getTime();
const selisihHari = pemiluDate - hariIni 

const days = Math.floor(selisihHari / (1000 * 60 * 60 * 24))

const jam = Math.floor((selisihHari % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ))

const menit = Math.floor((selisihHari % (1000 * 60 * 60)) / (1000 * 60))

const detik = Math.floor((selisihHari % (1000 * 60 )) / 1000)

    document.getElementById('hari').innerHTML = days
    document.getElementById('jam').innerHTML = jam  
    document.getElementById('menit').innerHTML = menit
    document.getElementById('detik').innerHTML = detik
 
}, 1000)