import Combo from '../Combo.js'
import Straight from './Straight.js'
import Flush from './Flush.js'


class StraightFlush extends Combo {
  static isAvailable(cards) {
    return Straight.isAvailable(cards) && Flush.isAvailable(cards)
  }
  getname(){
    return "StraightFlush";
  }
}

export default StraightFlush;