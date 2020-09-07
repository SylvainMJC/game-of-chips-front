import Combo from '../Combo.js'


class HighCard extends Combo {
  static isAvailable(cards) {
    return true
  }
  name(){
    return "HighCard";
  }
}

export default HighCard;