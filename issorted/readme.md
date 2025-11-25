Du skal lave en funktion `isSorted( arr )` der modtager et array, og returnerer `true` hvis det er sorteret.

I https://en.wikipedia.org/wiki/Binary_search_algorithm#Procedure artiklen, under afsnittet om Procedure, er der en præcis beskrivelse af hvad det vil sige at et array er sorteret:

> Given an array $A$ of $n$ elements with values or records $A_0,A_1,A_2,\ldots,A_{n-1}$ sorted such that $A_0 \leq A_1 \leq A_2 \leq \cdots \leq A_{n-1}$
> 

Så det er jo bare at kode det … altså en funktion der tjekker om værdien på index 0  er mindre end eller med værdien på index 1, og værdien på index 1 er mindre end eller lig med værdien på index 2, og så videre indtil index length-1.

Det er ikke så komplekst igen - vi taler om det på klassen - og det er basalt set blot noget med et loop og et tjek på om en værdi er mindre end den efterfølgende. Det bør kunne gøres på $O(n)$ - omend det måske nogle gange kan være endnu hurtigere at opdage hvis arrayet ***ikke*** er sorteret!

Afprøv funktionen med disse arrays:

Det perfekt sorterede: `[1, 2, 3, 4, 5, 6, 7, 8, 9]`

Det sorterede med huller: `[1, 2, 4, 5, 7, 9, 11]`

Det sorterede med huller og gentagelser: `[2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12]`

Det omvendt sorterede: `[9, 8, 7, 6, 5, 4, 3, 2, 1]`

Det helt random: `[1, 8, 9, 4, 6, 7, 2, 5, 3]`

Det næsten sorterede: `[1, 2, 4, 4, 5, 3, 6, 7, 8]`

Det med udelukkende ens værdier: `[4, 4, 4, 4, 4, 4, 4]`

Verificer at du får de forventede svar fra funktionen.