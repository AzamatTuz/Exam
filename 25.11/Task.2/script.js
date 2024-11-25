function shoping() {
    let numProduct = +prompt("Kansha product alasyz");
    let all = 0;

    for(let i = 1; i <= numProduct; i++) {
        let baga = +prompt('Bagalaryn jazynyz');
        all += baga;
    }

    if (all >= 5000 && all < 10000) {
        return alert('Sizdin tauarynyz jenildikpen: ' + (all - (all * 0.1)) + ' KZT bolady' + '\n' + 'Jenildik 10%');
    } else if (all >= 10000 && all < 20000) {
        return alert('Sizdin tauarynyz jenildikpen: ' + (all - (all * 0.2)) + ' KZT bolady' + '\n' + 'Jenildik 20%');
    } else if (all >= 20000) {
        return alert('Sizdin tauarynyz jenildikpen: ' + (all - (all * 0.3)) + ' KZT bolady' + '\n' + 'Jenildik 30%');
    }
}

shoping();
