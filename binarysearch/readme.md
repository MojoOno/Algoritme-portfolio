# Krav

- du skal lave funkionen i samme mappe som du lavede `binarysearch.js` men i en ny fil kaldet `binarysearch/binarysearch_recursive.js`
- funktionen skal hedde `binarySearchRecursive`, og udover værdien der søges efter og arrayet der søges i, også modtage start og end-indexes for søgningen - dem vi også af og til kalder min og max eller left og right.
    
    Fordi vi skal tælle iterationer, er det også nødvendigt at sende antallet af iterationer med som parameter:
    `binarySearchRecursive( search, values, start, end, iterations )` 
    
- den skal ligesom den iterative udgave returnere et objekt med tre properties:
    - `found` - en boolean der indikerer om searchFor blev fundet eller ej
    - `index` - et number der angiver hvilket index værdien blev fundet på, eller `-1` hvis den ikke blev fundet.
    - `iterations` - et number der angiver antallet af iterationer funktionen gennemløb før den enten fandt, eller opgav at finde værdien.
    Det vil altid blot være den modtagne iterations + 1
- den skal gå ud fra at arrayet er sorteret - den må gerne fejle, altså returnere `!found` og index `-1` hvis den skal søge i et usorteret array. Men ikke gå ind i et uendeligt loop eller crashe på anden vis.
- funktionen **må ikke** indeholde nogle loops!

# Anbefalet procedure

Det er nemmest hvis du IKKE kopierer for meget fra den tidligere binarySearch funktion, men begynder på en frisk, og eventuelt blot skæver til den anden fra tid til anden.

Husk at en rekursiv funktion altid skal have alle state-variabler med som parametre!

Start med base-casen, altså den situation hvor rekursionen skal stoppe.

Lav en if-sætning i funktionen der tjekker om der ikke er flere søgemuligheder tilbage (husk på hvad der standsede loopet i den iterative udgave). Sørg for at den returnerer at der ikke blev fundet den ønskede værdi.

Lav en else der laver en sammenligning mellem den ønskede værdi (search) og den aktuelle middle-værdi. 

Kald compare-funktionen, og beslut om værdien er fundet, eller om der skal søges højere eller lavere - kald derefter binarySearchRecursive igen, med de nye start og end værdier. Husk at returnere hvad den returnerer.

Indkapsl al funktionalitet i den recursive case i console.group og console.groupEnd, så du tydeligt kan se i output at der bliver kaldt en ny udgave af funktionen!