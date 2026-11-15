class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    /*
    Input: s = "racecar", t = "carrace"
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let countMap = {};
        for (let i = 0; i < s.length; i++) {
            countMap[s[i]] = countMap[s[i]] ? ++countMap[s[i]] : 1;
            countMap[t[i]] = countMap[t[i]] ? --countMap[t[i]] : -1;
        }

        for (let char in countMap) {
            if (countMap[char] !== 0) {
                return false;
            }
        }
        return true;
    }
}
