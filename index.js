// Take an unordered array and sort it, such that
// The largest value is the first position in the array,
// the smallest value is in the second position.
// Example of meandering order: [25, 1, 24, 2, 23, 3]

function meanderingOrder(unsorted) {
  const sorted = unsorted.sort((a, b) => {
    return a - b;
  });

  let meanderingSort = [];
  for (
    let i = 0, j = unsorted.length - 1;
    i < unsorted.length / 2, j >= unsorted.length / 2;
    i++, j--
  ) {
    meanderingSort.push(sorted[j]);
    meanderingSort.push(sorted[i]);
  }
  return meanderingSort;
}

unsorted1 = [2, -1, 2, 30, 8, -5, 15, 4];
console.log(meanderingOrder(unsorted1));

// Two Sum problem from Leetcode
//Given an array of integers nums and an integer target, return indices
//of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

const exampleNums = [3, 2, 4];
const exampleTarget = 6;

function twoSum(nums, target) {
  const numArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        numArray.push(i);
        numArray.push(j);
        return numArray;
      }
    }
  }
}
