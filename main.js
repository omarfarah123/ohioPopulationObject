const ohio = {
  _capital: 'Columbus',
  _population: 878553,
  get stateInfo(){
    if(typeof this._population === 'number'){
      return `The current population of the city of Columbus is ${this._population}`
    } else {
      return "System Malfunctino: Cannot retrieve population";
    }
  }
};
console.log(ohio.stateInfo);

