export class Ingredient{  

  //adding public before parameter, it will auto create properties
  constructor(public name: string, public amount: number) {
    this.name = name;
    this.amount = amount;
  }

}
