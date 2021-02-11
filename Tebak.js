var tanya = true;
var ulang = true;
while(tanya) {
    for(var kesempatan = 3; kesempatan > 0; kesempatan--) {
        var player = parseInt(prompt('Tebak angka dapat hadiah, pilih 1 - 10 \nKesempatan anda ' + kesempatan));
        var result = '';
        
        if (player > 0 && player <= 3) {
            result += 'Mobil';
        } else if (player > 3  && player <= 7) {
            result += 'Rumah';
        } else if (player > 7 && player <= 10) {
            result += 'Tai';
        } else {
            ulang = confirm('salah pilih, ulang bor!');
            if (ulang == false) {
                break;
            }
        }
        alert('kamu memilih ' + player + ' dan mendapatkan hadiah ' + result);
        
    }
    tanya = confirm('lagi ga, bayar lagi lah7y6tujhb ?')
}   
alert('terima kasih')