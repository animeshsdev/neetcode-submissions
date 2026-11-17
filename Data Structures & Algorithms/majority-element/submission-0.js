
 class Solution {
  //@ts-ignore
  majorityElement(nums) {
    let n = nums.length;
    let neededFreq = Math.floor(n / 2);
    const hMap= {};
    for(let num of nums) {
      hMap[num] = hMap[num] ? ++hMap[num] : 1;
    }
    for(let num in hMap) {
      if(hMap[num] > neededFreq) {
        return num;
      }
    }
  }
}