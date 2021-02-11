var tanya = true
while(tanya) {
    var player = prompt('gunting, batu, kertas');
    var comp = Math.random();
    var hasil = '';
    
    
    
    if (comp < 0.34) {
        comp = 'gunting';
    } else if (comp >= 0.34 && comp <= 0.67) {
        comp = 'batu';
    } else {
        comp = 'kertas';
    }
    
    if (player === comp) {
        hasil += 'SERI!';
    } else if (player == 'gunting') {
        hasil += (comp == 'kertas') ? 'MENANG!' : 'KALAH'
    } else if (player == 'batu') {
        hasil += (comp == 'gunting') ? 'MENANG!' : 'KALAH'
    } else if (player == 'kertas') {
        hasil += (comp == 'batu') ? 'MENANG!' : 'KALAH'
    } else {
        hasil += 'SALAH INPUT';
    }
    // tampilan hasilnya
    console.log(player);
    console.log(comp);
    console.log(hasil)
    alert('KAMU memilih: ' + player + '\nKOMPUTER memilih: ' + comp + '\nhasilnya = KAMU ' + hasil)
    
    tanya = confirm('lagi?')
    
}

alert('terima kasih')


