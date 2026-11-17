class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let str of strs) {
            let countArr = new Array(26).fill(0);
            for(let i = 0; i < str.length; i++) {
                let countIdx = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
                countArr[countIdx] += 1;
            }
            const mapKey = countArr.toString();
            if(!res[mapKey]) {
                res[mapKey] = [str];
            } else {
                res[mapKey].push(str);
            }
        }
        return Object.values(res);
    }
}
