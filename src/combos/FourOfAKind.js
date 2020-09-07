import Combo from '../Combo.js'

class FourOfAKind extends Combo {
  static isAvailable(cards) {
    let occureds = Combo.occureds(cards)

    return Object.values(occureds).map(o => o.length).includes(4)
  }
  getname(){
    return "FourOfAKind";
  }
}

export default FourOfAKind;