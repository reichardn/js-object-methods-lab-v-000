

// veto - returns "NO!"
// passBill - returns "You can do that!"
// doCharity - returns "I like to help people."
// conductPressInterview - returns "I am proud to be an American"
// sayHi - returns "Hi, my name is . I am from . I represent the s and was in office ."


class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
  // "Hi, my name is <name>, I am from <homestate>. I represent the <politcalParty>s and was in office <yearsInOffice>."'
  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }

  doCharity() {
    return "I like to help people."
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }

  veto() {
    return 'NO!'
  }

  passBill() {
    return 'You can do that!'
  }

}


var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas");

