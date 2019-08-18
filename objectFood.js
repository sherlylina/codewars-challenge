var hitungMakanan = (makanan) => {
    var jumlahMakanan = {};
    for(i=0;i<makanan.length;i++){
        jumlahDataMakanan = 0
        for(j=0;j<makanan.length;j++)
            if(makanan[i]===makanan[j]){
                jumlahDataMakanan += 1
            }
    jumlahMakanan[makanan[i]] = jumlahDataMakanan
    }
    return jumlahMakanan
 }

 console.log(hitungMakanan(['puding','kue','kue','ayam','lalaban','tahu','tempe','puding','tempe','tahu','tahu','tahu','tahu','ayam','keju']))