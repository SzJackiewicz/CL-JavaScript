![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Tworzenie tablicy

Stwórz funkcję `createArray(rows)` która tworzy i **zwraca** tablicę. Jej rozmiar ma być zgodny z parametrem `rows`, a każdy kolejny element zawiera kolejne liczby całkowite począwszy od `1`.

Wywołaj tę funkcję z argumentem `5`.



## Wyświetlanie tablicy

Stwórz funkcję `printArray(array)`, która wyświetla wszystkie wartości z przekazanej tablicy.
 
Przekaż do funkcji tablicę, która jest pod zmienną `people` i sprawdź wynik w konsoli.

W funkcji należy wykorzystać pętlę `for`.



## Wyświetlanie tablicy 2D

Stwórz funkcję `print2DArray(array)`, która wyświetla kolejno wszystkie imiona z przekazanej tablicy dwuwymiarowej. Każde imię powinno zostać wyświetlone w osobnej linii w konsoli.

Przekaż do funkcji tablicę, która jest pod zmienną `users` i sprawdź wynik w konsoli.

W funkcji należy wykorzystać dwie zagnieżdżone w sobie pętle `for`.

## Wartość maksymalna

Stwórz funkcję `maxFromArray(numbers)` która jako argument przyjmuje tablicę liczb. Funkcja ma **zwracać** największą wartość ze zbioru (zmienna `randomNumbers`).

Wynik działania przypisz do zmiennej (`result`) i wyświetl w konsoli.


## Powtarzająca się wartość

Stwórz funkcję `indexOfRepeatedValue(array)`. Prześlij do niej tablicę z 10 liczbami które są zapisane w zmiennej `numbers`. 

Stwórz w tej funkcji zmienną ```firstIndex```. W pętli ```for``` sprawdź, która z liczb powtarza się jako pierwsza i przypisz jej indeks do zmiennej ```firstIndex```. Następnie wypisz w konsoli tą zmienną – poza pętlą ```for```.

Przykładowa tablica:

```js
const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];
```

W tej tablicy jako pierwsza powtarza się liczba 2, więc zmienna ```firstIndex``` powinna mieć wartość 0, ponieważ jest to pierwsza liczba w tablicy, która ma gdzieś swojego sobowtóra.
Przetestuj swój skrypt z różnymi wartościami w tablicy.

Zwróć wartość `firstIndex` z funkcji.

*Podpowiedź: pamiętaj o odpowiednim przerwaniu pętli.*

