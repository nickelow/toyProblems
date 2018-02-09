//find the Kth smallest element in a binary search tree

function findKSmallest(tree, k){
  let count = 0;
  let found = false
  let result = null
  
  function traversal(tree){
    if(tree !== null && !found){
      traversal(tree.left)
      count++;
      if(count === k){
        result = tree.value
      }
      traversal(tree.right)
    }
  }
  traversal(tree)
  return result
}