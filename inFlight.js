/*
Write a function that takes an integer flight_length (in minutes)
and a list of integers movie_lengths (in minutes) and returns a
boolean indicating whether there are two numbers in movie_lengths
whose sum equals flight_length.
*/


function inFlight(flightLength, list, index){
  var movieOne = list[index];
  if(list.length - index > 1) {
    for(var i = index; i < list.length; i++){
      if(movieOne + list[i] === flightLength){
        return true;
      }
    }
    return inFlight(flightLength, list, index+1);
  } else {
    return false;
  }
}