import Combo from '../Combo.js'


class HighCard extends Combo {
  static isAvailable(cards) {
    return true
  }
  static name(){
    return "HighCard";
  }
}

export default HighCard;