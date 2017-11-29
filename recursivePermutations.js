//recursive function
//find all permutations of input string
//all characters are unique
//return a set

var recursivePermutations = function(string){
	var setMaker = function(object, string){
    var newObj = {};
    for(var i = 0; i < string.length; i++){
    	for(var key in object){
    		newObj[key.concat(string[i])] = key.concat(string[i])
    	}
    }
	}
}

//for each letter in string
//add next letter at each position in string
//call again with new set