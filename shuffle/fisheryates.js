export function shuffle (arr) 
{
    for (let i = 0; i <= arr.length - 2; i++)
    {
        //swapping index 0 with a random index between 0 and 9 on the first iteration.
        const j = i + Math.floor(Math.random() * (arr.length - i));
        swap(i, j);

        function swap(i, j){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;}
    }
    return arr;
}