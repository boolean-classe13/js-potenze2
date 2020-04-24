// procedimento A

// calcolo la potenza e verifico se rimane all'interno dell'intervallo stabilito
// prima potenza: 2 alla 0 = 1
var potenza = Math.pow(2, 0);

// ripeto il ciclo finché la potenza rimane sotto il 1000
for (var i = 1; potenza <= 1000; i++) {

    // se entro nel ciclo significa che la potenza è <= 1000 => la stampo
    console.log(potenza);

    // sovrascrivo la variabile potenza con la potenza di 2 successiva (grazie alla i)
    // essendo l'ultima istruzione del ciclo, sono sicuro che
    // nella prossima iterazione viene effettuato il test sulla potenza successiva
    potenza = Math.pow(2, i);
}


/**********************************************************/


// procedimento B

// utilizzo la i del ciclo non come contatore ma come contenitore vero e proprio della potenza
// anziché incrementare la i di 1, ne calcolo la moltiplicazione per 2
// in questo modo, ad ogni iterazione, calcolo la potenza successiva di 2!

// ripeto il ciclo finché i rimane sotto al 1000
for (var i = 1; i <= 1000; i = i * 2) {
    // stampo la i (che contiene la potenza di 2)
    console.log(i);

    // l'istruzione i = i * 2 viene eseguita alla fine del ciclo
    // e subito dopo viene ripetuto il test i <= 1000
}
