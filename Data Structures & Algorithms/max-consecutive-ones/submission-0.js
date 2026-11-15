class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let tempMax = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                max = Math.max(max, tempMax);
                tempMax = 0;
            } else {
                tempMax += 1;
            }
        }
        return Math.max(max, tempMax);
    }
}
