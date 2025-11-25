export default function binarySearchRecursive(search, values, start, end, iterations)
{
    let index = -1;
    let found = false;

    if (start >= end)
        {
            return {found, index, iterations}
        }

    const middle = start + Math.floor(( end - start) / 2);
    if (values[middle] === search)
        {
            found = true;
            index = middle;
        } else {
            if (search > values[middle])
                {
                    return binarySearchRecursive(search, values, middle + 1, end, iterations + 1)
                } else {
                    return binarySearchRecursive(search, values, start, middle - 1, iterations + 1)
                }
        }
    return {found, index, iterations}
}

const values = [21,22,23,25,27,28,29,31,32,34,35];

const result = binarySearchRecursive(32, values, 0, values.length, 0)
console.log(result.found, result.index, result.iterations);
