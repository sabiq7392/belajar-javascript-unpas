        
        /*
        var item = prompt('Makanan minuman yang sehat dan tidak \n (cth: susu, telur, nasi, burger, sosis)')

        switch (item) {
            case 'susu':
            case 'telur':
            case 'telur':
                alert('ini contoh makanan sehat');
                break;
            case 'burger':
            case 'sosis':
                alert('ini contoh makanan tidak sehat');
                break;
            default: 
                alert('yah ga ada di list')
        }   
        
       */
// --------------------------------------------------
var y = '';

for(var r = 0; r < 5; r++) {
    y += '*';
}
console.log(y);

// --------------------------------------------------
var sDocument = '';
var sConsole = '';

for(var i = 0; i < 10; i++) { 
    for(var j = 0; j <= i; j++) { 
        sDocument += '*';
        sConsole += '*';
    } 
    sDocument += '<br>'
    sConsole += '\n';
}

for(var c = 10; c > 0; c--) {
    for(var b = 0; b < c; b++) {
        sDocument += '*';
        sConsole += '*';
    }
    sDocument += '<br>';
    sConsole += '\n';
}
   
document.write(sDocument);
console.log(sConsole);

// --------------------------------------------------


    var zDocument = '';
    var zConsole = '';
    for(var k = 10, m = 0; k >= 0; k--, m++) {
        for(var l = 0; l <= k; l++){
            zDocument += '-';
            zConsole += ' ';
        }
        for(var y = 0; y <= m; y++) {
            zDocument += 'o';
            zConsole += 'o';
        }
        zDocument += '<br>';
        zConsole += '\n';
    }
    document.write(zDocument);
    console.log(zConsole);

//---------------------------------------------------
/*
var z = '';

for(var k = 10; k > 0; k--) { // for membuat baris
    for(var l = 0; l < k; l++) { //jumlah  bintang yang akan dicetak
        z += '*';
    }
    z += '\n';
}
console.log(z)
*/