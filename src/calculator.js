export class Calculator{

  mercury(age){
    age /= .24;
    return Math.round(10*age)/10;
  }

  venus(age){
    age /= .64;
    return Math.round(10*age)/10;
  }

  mars(age){
    age /= 1.88;
    return Math.round(10*age)/10;
  }

  jupiter(age){
    age /= 11.86;
    return Math.round(10*age)/10;    
  }

  //lifestyle, healthcare, and activity are handles as integers.
  //numbers 1-4: where 1 is the healthiest attribute, and 4 is the least healthy
  lifeExpectancyEarth(lifestyle, healthcare, activity){
    let expectedAge = 0;
    let array = [lifestyle, healthcare, activity];
    for(var i = 0; i < array.length; i++){
      if(array[i] === 1){
        expectedAge += 33;
      }else if(array[i] === 2){
        expectedAge += 25;
      }else if(array[i] === 3){
        expectedAge += 18;
      }else{
        expectedAge += 2;   
      }
    }
    return expectedAge;
  }

  lifeExpectancy(lifestyle, healthcare, activity){
    let expectedAge = 0;
    let array = [lifestyle, healthcare, activity];
    for(var i = 0; i < array.length; i++){
      if(array[i] === 1){
        expectedAge += 33;
      }else if(array[i] === 2){
        expectedAge += 25;
      }else if(array[i] === 3){
        expectedAge += 18;
      }else{
        expectedAge += 2;   
      }
    }
    array = [this.mercury(expectedAge), this.venus(expectedAge), expectedAge, this.mars(expectedAge), this.jupiter(expectedAge)];
    return array;
  }

  pastExpectancy(array, age){
    let currentAge = [this.mercury(age), this.venus(age), age, this.mars(age), this.jupiter(age)];
    let planetArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
    let returnArray = [];
    for(let i = 0; i <= array.length; i++){
      if(currentAge[i] - array[i] > 0){
        returnArray.push("Congratulations! You've lived " + (currentAge[i] - array[i]) 
        + " years longer than expected on " + planetArray[i] + ".");
      } else returnArray.push(planetArray[i] + " Not older")
    }
    return returnArray;
  }
}