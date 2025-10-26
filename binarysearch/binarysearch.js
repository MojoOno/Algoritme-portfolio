const values = [21,22,23,25,27,28,29,31,32,34,35];

function binarySearch(searchFor, values) {
    if (!values.includes(searchFor)) {
        console.log("Tallet findes ikke i det givne array");
        return -1;
    }

    let min_index = 0;
    let max_index = values.length - 1;
    let iterations = 0;

    while (min_index <= max_index) {
        iterations++;
        let middle_index = min_index + Math.floor((max_index - min_index) / 2);

        console.log("Min er: " + min_index);
        console.log("Middle er: " + middle_index);
        console.log("Max er: " + max_index);

        if (values[middle_index] === searchFor) {
            console.log("Antal forsøg for at finde det rigtige svar: " + iterations);
            return middle_index;
        }

        if (values[middle_index] < searchFor) {
            console.log("Tallet er større end " + values[middle_index]);
            min_index = middle_index + 1;
        } else {
            console.log("Tallet er mindre end " + values[middle_index]);
            max_index = middle_index - 1;
        }
    }

    return -1;
    
}

const result = binarySearch(22, values);
console.log("Det ønskede tal har index: " + result);