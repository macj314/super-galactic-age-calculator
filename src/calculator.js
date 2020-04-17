export class Calculator{
  constructor(age){
    this.age = age;
  }

  mercury(){
    let tempNum;
    tempNum = (this.age / .24);
    return Math.round(10*tempNum)/10;
  }

  venus(){
    let tempNum;
    tempNum = (this.age / .64);
    return Math.round(10*tempNum)/10;
  }

  mars(){
    let tempNum;
    tempNum = (this.age / 1.88);
    return Math.round(10*tempNum)/10;
  }

  jupiter(){
    let tempNum;
    tempNum = (this.age / 11.86);
    return Math.round(10*tempNum)/10;    
  }


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
        expectedAge += 10;   
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
        expectedAge += 10;   
      }
    }
    this.age = expectedAge;
    array = [this.mercury(), this.venus(), expectedAge, this.mars(), this.jupiter()];
    return array;
  }
}