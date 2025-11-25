## MergeSort 
Du skal lave en funktion `merge( arrayA, arrayB )` der modtager to sorterede arrays, og “merger” aka fletter dem sammen til et nyt, sorteret array, som den så returnerer!

Funktionen skal gå ud fra at `arrayA` og `arrayB` allerede *er* korrekt sorteret.

Husk at det tredje array, kald det fx `arrayC`, altid vil være præcis samme længde som arrayA + arrayB. 

Og behandl alle tre arrays som queues hvor der bliver fjernet ét element ad gangen fra enten A eller B - alt efter hvad der er mindst - og tilføjet til C.

På et tidspunkt vil alle elementer være fjernet fra enten A eller B - hvis A er tomt, så skal alle elementer fra B tilføjes C i den rækkefølge de ligger. Hvis B er tomt, skal alle elementer fra A tilføjes C i den rækkefølge de ligger. Både A og B var jo allerede sorteret!

Så du vil ende med tre loops, ikke inden i hinanden, men efter hinanden:

1. Merge A og B ind i C, indtil et af dem er tomme
2. Kopier alt fra A ind i C - hvis der var noget i A
3. Kopier alt fra B ind i C - hvis der var noget i B


Tip: Det er langt nemmere bare at lave tre forskellige loops til de tre forskellige opgaver, end at forsøge at samle alt i et og samme loop.



Slut af med at lade funktionen returnere det samlede array C.

*Afprøv for eksempel funktionen med disse to arrays:*


const listA = [1, 3, 7, 8];
const listB = [0, 2, 4, 5, 6, 9];
