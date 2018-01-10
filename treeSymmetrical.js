function isTreeSymmetric(t) {
  var symmetrical = true
  function treeChecker(t1, t2){
    if(t1 && t2){
      if(t1.value === t2.value){
        treeChecker(t1.left, t2.right)
        treeChecker(t1.right, t2.left)
      } else {
        symmetrical = false
      }
    } else {
      if(t1 && !t2){
        symmetrical = false
      }
      if(t2 && !t1){
        symmetrical = false
      }
    }
  }
  if(t){
    if(t.left && t.right){
      treeChecker(t.left, t.right)
    } else if (t.left || t.right){
      symmetrical = false
    }
  }
  return symmetrical
}
