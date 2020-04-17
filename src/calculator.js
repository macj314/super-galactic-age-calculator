export class Calculator{
  constructor(age){
    this.age = age;
  }

  mercury(){
    this.age = (this.age / .24);
    return Math.round(10*this.age)/10;
  }

  venus(){
    this.age = (this.age / .64);
    return Math.round(10*this.age)/10;
  }

  mars(){
    this.age = (this.age / 1.88);
    return Math.round(10*this.age)/10;
  }

  jupiter(){
    this.age = (this.age / 11.86);
    return Math.round(10*this.age)/10;    
  }


  lifeExpectancy(lifestyle, healthcare, activity){
    let expectedAge;
    let array = [lifestyle, healthcare, activity];
    for(var i = 0; i < array.length;){
      if(array[i] === 1){
        expectedAge += 33;
      }else if(array[i] === 2){
        expectedAge += 25;
      }else if(array[i] === 3){
        expectedAge += 18;
      }else expectedAge += 13;      
    }
    return expectedAge;
  }
}