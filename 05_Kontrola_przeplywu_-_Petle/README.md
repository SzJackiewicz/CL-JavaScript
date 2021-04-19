![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Tworzenie tablicy – for

### Do tego zadania wykorzystaj pętlę for.

Napisz program, który na podstawie wartości zmiennej `n` utworzy tablicę jednowymiarową w zmiennej `numbers` zawierającą kolejne liczby całkowite od `1` do `n`.

### Podpowiedź
Do wstawiania wartości do tablicy skorzystaj z metody `push` np.: `array.push(2);`.



## Liczby parzyste i nieparzyste – for  

### Do tego zadania wykorzystaj pętlę for

Napisz program, który na podstawie wartości zmiennej n wypisuje wszystkie liczby od `zera` do `n` (włącznie).
 
Przy każdej liczbie program ma napisać, czy liczba jest parzysta, czy nie:

```
0 – even
1 – odd
2 – even
3 – odd
itd.
```
   
   
### Podpowiedź

Jak sprawdzić, czy liczba jest parzysta lub nieparzysta?  
Należy podzielić ją modulo przez 2. Jeżeli wynik to 0, wtedy liczba jest parzysta, w przeciwnym przypadku jest nieparzysta. Skorzystaj z instrukcji "jeżeli".



## Tworzenie tablicy - while

### Do tego zadania wykorzystaj pętlę while

Napisz program, który na podstawie wartości zmiennej `n` utworzy tablicę jednowymiarową w zmiennej `numbers` zawierającą kolejne liczby całkowite od 1 do `n` (włącznie).



## Liczby parzyste i nieparzyste - while

### Do tego zadania wykorzystaj pętlę while

Napisz program, który na podstawie wartości zmiennej `n` wypisuje wszystkie liczby od `zera` do `n` (włącznie).
 
Przy każdej liczbie program ma napisać, czy liczba jest parzysta czy nie. Np.:

```
0 – even
1 – odd
2 – even
3 – odd
itd.
```
   
   
### Podpowiedź

Jak sprawdzić, czy liczba jest parzysta lub nieparzysta?  
Należy podzielić ją modulo przez 2. Jeżeli wynik to 0, wtedy liczba jest parzysta, w przeciwnym przypadku jest nieparzysta. Skorzystaj z instrukcji "jeżeli".



## Wyświetlanie danych z tablicy

Napisz program, który **wypisze** w kolejnych liniach wartości (pojedyncze liczby) z przygotowanej tablicy dwuwymiarowej.

Wykorzystaj dwie zagnieżdżone w sobie pętle `for`.
Jako nazwy zmiennych liczników w pętlach `for` użyj kolejno: `i` i `j`.

## Tworzenie tablicy 2D

Napisz program, który w zmiennej `numbers` utworzy tablicę **wielowymiarową** zgodnie z wartościami w zmiennych `rows` i `columns`.

Elementami tablicy mają być **kolejne liczby całkowite zaczynając od 1**.

Użyj pętli `for` lub `while`.


## Tabliczka mnożenia

Napisz program tworzący tabliczkę mnożenia dla podanej zmiennej `n`.
 
Wyniki zapisz do tablicy **dwuwymiarowej** (w zmiennej `calc`).

Wartości (pojedyncze kolumny) w tej tablicy mają być tekstami obliczeń:

- Pierwszy rząd
    - `1 x 1 = 1`
    - `1 x 2 = 2`
    - `1 x 3 = 3`
- Drugi rząd
    - `2 x 1 = 2`
    - `2 x 2 = 4`
    - `2 x 3 = 6`
- itd.
 

W konsoli należy później wyświetlić całą tablicę `calc` odpowiednio formatując dane. **Wtedy należy dodać kreski pionowe!**.

Na przykład dla `n = 3` wynik **w konsoli** będzie następujący:
```
1 x 1 = 1 | 1 x 2 = 2 | 1 x 3 = 3
2 x 1 = 2 | 2 x 2 = 4 | 2 x 3 = 6
3 x 1 = 3 | 3 x 2 = 6 | 3 x 3 = 9
```

Każdą linię wyświetl **osobno** przy użyciu `console.log`.

## Gwiazdki

Napisz program rysujący na podstawie wartości zmiennej `n` następujący schemat (tutaj dla `n = 5`).

Użyj do tego pętli (`for`) zagnieżdżonych (zależnych).

```
*
**
***
****
*****
```



## Break

Napisz program, w którym wykorzystasz instrukcję `break`. Niech `break` przerwie działanie pętli, gdy `i` będzie miało wartość `5`.

Użyj pętli `while`.