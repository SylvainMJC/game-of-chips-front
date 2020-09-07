import Combo from '../Combo.js'


class HighCard extends Combo {
  static isAvailable(cards) {
    return true
  }
  getname(){
    return "HighCard";
  }
}

export default HighCard;