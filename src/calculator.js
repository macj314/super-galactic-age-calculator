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
}