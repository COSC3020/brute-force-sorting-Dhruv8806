[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12372378&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

In my brute-force algorithm, following generating all permutations of the input list. The worst-case time complexity arises from checking each permutation, leading to $O(n!)$ due to the $n!$ possible permutations. Within each permutation check, the algorithm swaps elements in the array and checks if it's sorted,adding an extra $O(n)$ for each permutation. As a result, the overall worst-case time complexity is $\ O(n! + n)$. 

In the best-case scenario, the algorithm discovers the sorted list on first try, so the time complexity is $O(n!)$. When starting with an empty set, the time complexity becomes $O(1)$. On the flip side, in the worst-case, it takes in attempts to find the sorted list, resulting in an overall time complexity of $\ O(n! + n)$.

Exploring randomness, if permutations were generated randomly, the chance of obtaining the correct list in each attempt is $1/n!$ . On average, it would take $n!$ attempts to find the sorted list. Each attempt involves $O(n)$ operations, resulting in an average time complexity of $\ O(n × n!)$

Sources Used: 
Referred to " Countmooshroom " analysis 
