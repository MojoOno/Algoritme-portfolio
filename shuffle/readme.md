## En shuffle-algoritme til din algoritme portfolio

Før vi kaster os ud i algoritmer der kan sortere, skal vi lige prøve det modsatte: en algoritme der “blander” elementerne i et array.

Der er mange forskellige måder at blande et array på - ligesom der er mange forskellige måder at blande et spil kort. Man kan bytte om på to tilfældige kort et antal gange, man kan klippe bunken op i to, og rifle dem sammen, og gentage et par gange, man kan tage ét tilfældigt kort ad gangen og bygge en ny bunke …

Du skal dog implementere en udgave af [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) algoritmen!

Den er ret ligetil, pseudokoden kan skrives som:

```
shuffle( arr )
  for i = 0 to arr.length - 2
    j = random( i, arr.length - 1 )
    arr.swap( i , j )
```

Afprøv funktionen på både sorterede og usorterede arrays og se hvad der sker - afprøv efterfølgende om din `isSorted` funktion vurderer arrayet som sorteret eller ej!