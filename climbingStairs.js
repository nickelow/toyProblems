
function climbingStairs(n) {
  var results = new Array()
  results[0] = new Array()
  results[1] = new Array()
  for (var i = 0; i <= n; i++){
    results[0][i] = i
  }
  results[0][0] = 0
  results[1][0] = 1
  results[1][1] = 1
  for(var j = 2; j <= n; j++){
    results[1][j] = results[1][j-1] + results[1][j -2]
  }
  return results[1][n]
}
