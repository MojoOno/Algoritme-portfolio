Tag udgangspunkt i koden til `isSorted` - men lav en helt ny funktion i en helt ny fil: `simplesort/simplesort.js` - kald funktionen `simpleSort( arr )` så den modtager det array der skal sorteres, og sorterer, eller prøver at sortere, det!

Start med at bruge dette array: `[1, 8, 9, 4, 6, 7, 2, 5, 3]` som input.

Det skulle gerne sorteres til `[1, 2, 3, 4, 5, 6, 7, 8, 9]` når algoritmen virker.

## 0. Genbrug loop og if-sætning fra isSorted

Løb igennem alle elementer, og opdag hvis der er ét der ikke er placeret korrekt - for eksempel er både 1, 8 og 9 korrekt placeret, men 4 må ikke komme efter 9, så det er forkert! Det efterfølgende 6 er derimod korrekt nok i forhold til 4, og det samme er 7 - så lad loopet køre hele vejen igennem!

Udskriv blot de “forkerte” værdier, og se om du er enig.

## 1. Byt om på forkert sorterede elementer

Udover at udskrive de forkerte elementer, så byt også om på dem! Altså byt 4 og 9 om, så arrayet bliver til `[1, 8, 4, 9, 6, 7, 2, 5, 3]` i stedet.

Lav for nemhedsskyld en funktion til at bytte om på to elementer - kald den `swap( indexA, indexB )` og lav den inde i simpleSort funktionen så den også har adgang til arrayet!

Sørg for at du ikke kommer til at tælle for langt i loopet, men efterfølgende får byttet 9 og 6 om!

Udskriv det ændrede array i hver iteration

## 2. Bliv ved med at bytte om

Når 9 og 4 i`[1, 8, 9, 4, 6, 7, 2, 5, 3]` blev byttet om til `[1, 8, 4, 9, 6, 7, 2, 5, 3]`, så er 4 jo stadig på den forkerte plads, så det er ikke nok med en if-sætning der tjekker om elementet til venstre er mindre end værdien vi kigger på. Der er behov for et while-loop, der kigger på det foregående element, og det før og det før, så længe der er nogle der ikke er i korrekt rækkefølge.

Du har brug for en ekstra tæller - hvis du har brugt `i` til at tælle frem i loopet, så brug `j` til at tælle tilbage mod `0` fra `i`.