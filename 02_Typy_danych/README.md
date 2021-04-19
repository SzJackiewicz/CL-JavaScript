![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Napisy

Stwórz dwie zmienne:

- `greeting`
- `techonology` 

zawierające kolejno takie teksty: "Hello", "JS".


W nowej zmiennej (`result`) **połącz** te dwa teksty, ale mają one być oddzielone spacją (użycie `+`, czyli konkatenacji).

Stworzony napis **wypisz w konsoli**.


## Zmienne

Stwórz 6 zmiennych. Wstaw do nich następujące dane:

- `numberValue`: liczbę
- `stringValue`: string
- `mixedValue`: liczbę + string np. (2 + "dwa")
- `logicValue`: wartość logiczną
- `nullValue`: wartość null – `null`

Do każdej zmiennej:
 1. dodaj komentarz z informacją, jaki typ danych przechowuje ta zmienna (do sprawdzenia typu wykorzystaj operator `typeof`)
 2. sprawdź (wypisz w konsoli) wartości tych zmiennych


Przykład:
```js
// Ta zmienna jest typu number i przechowuje wartość 25
const numberValue = 25;
console.log(numberValue);
console.log(typeof numberValue);


// Ta zmienna jest typu string i przechowuje wartość "Coders Lab"
const stringValue = "Coders Lab";
// itd.
```





## Tablice z imionami

### Część 1

Zdefiniuj tablicę w zmiennej `users` zawierającą kolejne imiona: 

```
John
Marie
Kate
Paul
Steven
```

Na koniec wypisz w terminalu w kolejnych liniach:

- drugi element
- piąty element
- długość tablicy


### Część 2

Zdefiniuj pustą tablicę w zmiennej `guests`, a następnie **pojedynczo** (jedno po drugim) dodaj do niej następujące imiona:

```
Chauncey
Ling
Ona
Nicole
Michaele
```

Na koniec wypisz w terminalu:

- pierwszy element
- trzeci element
- długość tablicy


## Tablica 2D

### Część 1

Utwórz tablicę dwuwymiarową (w zmiennej `numbers`) – 3 wiersze na 4 kolumny.

W kolejnych kolumnach mają wystąpić kolejne liczby całkowite, czyli powinno to wyglądać następująco:
```
1, 2, 3, 4
5, 6, 7, 8
9, 10, 11, 12
```

Wyświetl:

- drugi element z pierwszego wiersza
- drugi wiersz (drugi element z pierwszego wymiaru)
- długość trzeciego wiersza


### Część 2

Utwórz tablicę dwuwymiarową (w zmiennej `mixedValues`) odpowiednio składającą się z:

- tablicy z imionami: `Keli`, `Walter`, `Heriberto`
- tablicy z wartościami liczbowymi: `1, 2, 3, 4, 5, 6`

Wyświetlcie:

- trzeci element z pierwszego wiersza
- piąty element z drugiego wiersza
- długość drugiego wiersza


## Obiekty

### Samochód

W zmiennej `car` utwórz obiekt opisujący samochód.

Ma on mieć następujące atrybuty:

- `type` o wartości "sedan"
- `color` o wartości "green"
- `engine` o wartości 2.5

Stwórz zmienną `carDescription`. Ma ona zawierać informacje o obiekcie poprzez konkatenację (z wykorzystaniem spacji) z wartości w jego atrybutach `type`, `color`, `engine` (należy użyć operatora `+` do konkatenacji).


Wyświetlcie zmienną `carDescription` w konsoli. Wynik:

```
sedan green 2.5
```


### Kolor

W zmiennej `color` utwórz obiekt opisujący kolor.

Ma on mieć następujące atrybuty:
- `red` o wartości 100
- `green` o wartości 0
- `blue` o wartości 50

Poprzez zmienną `referenceColor` zmodyfikuj wcześniej utworzony obiekt –
ustaw mu:

- `red` na wartość 50
- `green` na wartość 50

