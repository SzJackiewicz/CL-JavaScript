const numbers = [];
const columns = 4;
const rows = 5;
let fill = 0;


for (let i = 0; i < rows; i++) {
    numbers[i] = []; //wewnętrzna tablica
    for (let j = 0; j < columns; j++) {
        fill++;
        numbers[i][j] = fill;
    }
}
console.log('numbers', numbers);

// Napisz program, który w zmiennej numbers utworzy tablicę wielowymiarową zgodnie z wartościami w zmiennych rows i columns
// Elementami tablicy mają być kolejne liczby całkowite zaczynając od 1.
// Użyj pętli for lub while.