function houseRobber(nums) {
  var results = new Array()
  if(nums.length > 0){
    results[0] = nums[0]
    results[1] = nums[1] > nums[0] ? nums[1] : nums[0];
    for(var i = 2; i < nums.length; i++){
      var newTotal = nums[i] + results[i -2]
      if( newTotal > results[i-1]){
        results[i] = newTotal
      } else {
        results[i] = results[i-1]
      }
    }
    return results[results.length-1]
  } else {
    return 0
  }
}
