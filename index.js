// Code your solution here
function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.substring(0,name.length) === name)
}

function findMatching(drivers, name){
    return drivers.filter(el => el.toLowerCase() === name.toLowerCase());
}

function matchName(drivers, name){
    return drivers.filter(function(hometown){
      return hometown.name === name
    })
  }