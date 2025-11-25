export default function insertionSort(arr)
{
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (arr[j] < arr[j - 1] && j >= 0) {
            //console.log(`array: ${[arr]}`);
            //console.log(`index ${j-1} is larger than index ${j}. Swapping those two (${arr[j-1]} with ${arr[j]})`);
            swap(j, j-1);
            //console.log(`Array now looks like: ${arr}`);
            j--;
        }
    }
    return arr;

    function swap(i, j){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;}
}