import Combo from '../Combo.js'

class TwoPairs extends Combo {
  static isAvailable(cards) {
    let occureds = Combo.occureds(cards)
    let nbVals = Object.values(occureds).map(o => o.length)

    return nbVals.includes(2) && (nbVals.indexOf(2) !== nbVals.lastIndexOf(2))
  } 
  name(){
    return "TwoPairs";
  }
}

export default TwoPairs;