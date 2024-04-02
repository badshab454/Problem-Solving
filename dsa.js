function birdsInWeek(birdsPerDay, week) {
  var result = 0;
  for (let i = ((week * 7) - 7); i < week*7; i++){
    result += birdsPerDay[i];
  }
  return result;
}

console.log(birdsInWeek([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0], 1));