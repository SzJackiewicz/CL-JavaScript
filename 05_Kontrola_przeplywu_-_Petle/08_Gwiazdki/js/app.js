const n = 5;

    for (let i = 1; i <= n; i++){
        let stars = "";
        for (let j = 1; j <= i; j++){
            stars = stars + "*";
        }
        console.log(stars);
    }



// Napisz program rysujący na podstawie wartości zmiennej n następujący schemat (tutaj dla n = 5).
// Użyj do tego pętli (for) zagnieżdżonych (zależnych).
// *
// **
// ***
// ****
// *****