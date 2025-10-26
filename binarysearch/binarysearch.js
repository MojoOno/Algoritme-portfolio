const values = [21,22,23,25,27,28,29,31,32,34,35];

export function binarySearch(searchFor, values) {
    let found = false;
    let index = -1;
    let min_index = 0;
    let max_index = values.length - 1;
    let iterations = 0;

    while (min_index <= max_index) {
        iterations++;
        let middle_index = min_index + Math.floor((max_index - min_index) / 2);

        if (values[middle_index] === searchFor) {
            found = true;
            index = middle_index;
            break;
        }

        if (values[middle_index] < searchFor) {
            min_index = middle_index + 1;
        } else {
            max_index = middle_index - 1;
        }
    }

    return { found, index, iterations };
}
