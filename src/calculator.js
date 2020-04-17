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
    let expectedAge = 0;
    let array = [lifestyle, healthcare, activity];
    for(var i = 0; i < array.length; i++){
      if(array[i] === 1){
        expectedAge += 1;
      }else if(array[i] === 2){
        expectedAge += 2;
      }else if(array[i] === 3){
        expectedAge += 3;
      }else{
        expectedAge += 4;   
      }  
    }
    return expectedAge;
  }
}