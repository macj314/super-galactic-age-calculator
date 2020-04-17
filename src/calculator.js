export class Calculator{
  constructor(age){
    this.age = age;
  }

  mercury(){
    this.age = (this.age / .24);
    return this.age;
  }

  venus(){
    this.age = (this.age / .64);
    return this.age;
  }
}