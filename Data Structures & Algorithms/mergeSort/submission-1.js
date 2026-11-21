/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    // pairs=[(5, "apple"), (2, "banana"), (9, "cherry"), (1, "date"), (9, "elderberry")]

    mergeArr(firstArr, secondArr) {
        let res = [];
        let left = 0;
        let right = 0;
        while (left < firstArr.length && right < secondArr.length) {
            if (firstArr[left].key < secondArr[right].key) {
                res.push(firstArr[left]);
                left++;
            } else if(firstArr[left].key === secondArr[right].key) {
                res.push(firstArr[left]);
                left++;
            } else {
                res.push(secondArr[right]);
                right++;
            }
        }
        while (left < firstArr.length) {
            res.push(firstArr[left]);
            left++;
        }
        while (right < secondArr.length) {
            res.push(secondArr[right]);
            right++;
        }
        return res;
    }

    mergeSort(pairs) {
        if (pairs.length <= 1) {
            return pairs;
        }
        let n = pairs.length;
        let left = 0;
        let right = n - 1;
        let mid = Math.floor(left + (right - left) / 2);
        let leftArr = pairs.slice(left, mid + 1);
        let rightArr = pairs.slice(mid + 1, right+1);
        return this.mergeArr(this.mergeSort(leftArr), this.mergeSort(rightArr));
    }
}
