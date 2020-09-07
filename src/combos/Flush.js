import Combo from '../Combo.js'

class Flush extends Combo {

  static name(){
    return "Flush";
  }

  static isAvailable(cards) {
    let types = cards.map(card => card.type()).gemUniq()

    return types.length === 1
  }

  
}

export default Flush;