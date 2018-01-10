function hasPathWithGivenSum(t, s) {
  var result = false
  
  function pathAdder(tree, sum, total){
    if(t){
      if(!tree.left && !tree.right){
        if(tree.value + total === sum){
          result = true
        }
      }
      if(tree.left){
        pathAdder(tree.left, sum, total + tree.value)
      }
      if(tree.right){
        pathAdder(tree.right, sum, total + tree.value)
      }
    } else {
      if (s === 0){
        result = true
      }
    }
  }
 
 pathAdder(t, s, 0)
 return result
}
