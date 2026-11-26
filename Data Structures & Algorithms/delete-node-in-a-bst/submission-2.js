/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */

    getMinValue(root) {
        let curr = root;
        while (curr && curr.left) {
            curr = curr.left;
        }
        return curr.val;
    }

    deleteNode(root, key) {
        if (!root) {
            return null; // we will check this condition ---
        }
        let curr = root;
        if (curr.val < key) {
            curr.right = this.deleteNode(curr.right, key);
        } else if (curr.val > key) {
            curr.left = this.deleteNode(curr.left, key);
        } else {
            // case 0 children
            if (!curr.left && !curr.right) {
                return null;
            }

            // 1 child right
            if (!curr.left) {
                return curr.right;
            }

            // 1 child left
            if (!curr.right) {
                return curr.left;
            }

            const minValue = this.getMinValue(curr.right); // right subtree
            curr.val = minValue;
            curr.right = this.deleteNode(curr.right, minValue);
        }
        return root;
    }
}
