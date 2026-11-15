class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ansArr = [];
        const n = nums.length;
        let nxtCtr = 0;
        for(let i = 0; i < 2 * n; i++) {
            if(i >= n) {
                // we will get computed val
                ansArr[nxtCtr+n] = nums[nxtCtr];
                nxtCtr++;
            } else {
                ansArr[i] = nums[i];
            }
        }
        return ansArr;
    }
}
