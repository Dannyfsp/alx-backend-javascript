export default function hasValuesFromArray(set, arr) {
  let num = 0;

  while (num < arr.length) {
    if (!set.has(arr[num])) {
      return false;
    }
    num += 1;
  }
  return true;
}
