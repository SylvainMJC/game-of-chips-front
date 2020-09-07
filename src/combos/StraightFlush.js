import Combo from '../Combo.js'

class StraightFlush extends Combo {
  static isAvailable(cards) {
    return Straight.isAvailable(cards) && Flush.isAvailable(cards)
  }
}

export default StraightFlush;