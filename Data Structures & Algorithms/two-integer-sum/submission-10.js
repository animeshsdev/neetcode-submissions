class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            console.log(diff,"diff");
            console.log(hashMap[diff]);
            if(diff in hashMap) {
                return [hashMap[diff],i];
            } else {
                hashMap[nums[i]] = i;
            }
        }
    }
}
