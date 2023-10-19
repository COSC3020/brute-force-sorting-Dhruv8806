
function Swap(arr, indexA, indexB) {
    let temp = arr[indexA]; //Store element at indexA
    arr[indexA] = arr[indexB]; //Swap elements
    arr[indexB] = temp;
}

function isListSorted(arr) { //Checking if array is sorted
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function tryAllPermutations(arr) { //Tries all permutations of the arr to sort it
    let permutationsTried = 0; //Counts how many permutations were tried
    let sortedListFound = false;

    function permute(arr, start) { //Recursive function to generate permutations
        if (start === arr.length) {
            permutationsTried++;
            if (isListSorted(arr)) {
                sortedListFound = true;
                console.log(arr);
                return;
            }
            return;
        }

        for (let i = start; i < arr.length; i++) {
            Swap(arr, start, i);
            permute(arr, start + 1);
            Swap(arr, start, i);
            if (sortedListFound) {
                return;
            }
        }
    }

    permute(arr, 0);

    // if (!sortedListFound) {
    //     console.log("No sorted list found after " + permutationsTried + " permutations.");
    // }

    return permutationsTried;
}

const Sorted = (arr) => { //Sorts an array using all possible permutations
    const copyArr = [...arr];
    const permutationsTried = tryAllPermutations(copyArr);

    console.log("Total permutations tried: " + permutationsTried);

    return permutationsTried; //return the number of permutations tried
};

var s = [3, 5, 6, 1, 4, 2];
console.log("Original Array Elements");
console.log(s);

console.log("Sorted Array Elements");
console.log(Sorted(s));

/*
Sources Used: 
ChatGPT - Used it to know, how brut force sort works, with detail explanation
https://www.quora.com/What-is-the-time-complexity-likely-for-a-brute-force-array-sorting-algorithm-to-have
https://www.freecodecamp.org/news/brute-force-algorithms-explained/
*/
