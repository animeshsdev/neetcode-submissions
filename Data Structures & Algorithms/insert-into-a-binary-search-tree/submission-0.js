class Solution {
  //@ts-ignore
  insertIntoBST(root,val) {
    console.log(root,"root")
    if(!root) {
      return new TreeNode(val);
    }
    const rootVal = root.val;
    if(rootVal > val) {
      root.left = this.insertIntoBST(root.left,val);
    } else {
      root.right = this.insertIntoBST(root.right,val);
    } 
    return root;
  }
}