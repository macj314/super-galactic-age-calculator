export class Calculator{
  constructor(age){
    this.age = age;
  }

  mercury(){
    this.age = (.24 / this.age);
    return this.age;
  }

  venus(){
    this.age = (.64 / this.age);
    return this.age;
  }
}