export default function merge(arrayA, arrayB)
{
    const arrayC = new Array(arrayA.length + arrayB.length);

    let i = 0; // Index for A
    let j = 0; // Index for B
    let k = 0; // Index for C

    // 1. Merge A og B ind i C, indtil et af dem er tomme
    while (i < arrayA.length && j < arrayB.length)
        {
            if (arrayA[i] <= arrayB[j])
                {
                    arrayC[k] = arrayA[i];
                    i++; k++;
                } else {
                    arrayC[k] = arrayB[j];
                    j++; k++;
                }
        }

    // 2. Kopier alt fra A ind i C - hvis der var noget i A
    while (i < arrayA.length)
        {
            arrayC[k] = arrayA[i];
            i++; k++;
        }

    // 3. Kopier alt fra B ind i C - hvis der var noget i B
    while (j < arrayB.length)
        {
            arrayC[k] = arrayB[j];
            j++; k++;
        }

    return arrayC;
}