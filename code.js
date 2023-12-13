function swap(arr, indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

function isListSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function getPermutations(arr, index, permutations) {
    if (index === arr.length) {
        permutations.push([...arr]);
    } else {
        for (let i = index; i < arr.length; i++) {
            swap(arr, index, i);
            getPermutations(arr, index + 1, permutations);
            swap(arr, index, i);
        }
    }
    return permutations; 
}

function permutationSort(arr) {
    let originalArray = [...arr]; 
    let permutations = []; 
    let perms = getPermutations(arr, 0, permutations);
    let sortedFound = false;
  
    //Loop through the generated permutations
    for (let permAt = 0; permAt < perms.length; permAt++) {
        if (isListSorted(perms[permAt])) {
            sortedFound = true;
            for (let j = 0; j < perms[permAt].length; j++) {
                arr[j] = perms[permAt][j];
            }
        }
    }

    return perms.length;
    //return permutationSort;
    
}

var s = [3, 5, 6, 1, 4, 2, 7];
console.log("Original Array Elements");
console.log(s);

console.log("Total premutation tried");
console.log(permutationSort(s));

console.log("Sorted Array Elements");
console.log(s);


// Referred to "Ryan Zafft" implementation for understanding and helping me fix parts of my code. 

/*
Sources Used: 
ChatGPT - Used it to know, how brut force sort works, with detail explanation
https://www.quora.com/What-is-the-time-complexity-likely-for-a-brute-force-array-sorting-algorithm-to-have
https://www.freecodecamp.org/news/brute-force-algorithms-explained/
*/
