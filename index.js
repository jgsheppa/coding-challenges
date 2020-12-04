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
