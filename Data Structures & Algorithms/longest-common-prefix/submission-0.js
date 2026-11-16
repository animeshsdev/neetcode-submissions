class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = "";
        for(let i = 0; i < strs[0].length; i++) {
            for(let str of strs) {
                if(i === str.length || strs[0][i] !== str[i]) { // breaking condition
                    return res;
                }
            }
            res+=strs[0][i];
        }
        return res;
    }
}
