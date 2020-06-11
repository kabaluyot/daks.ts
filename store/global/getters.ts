import { GetterTree } from 'vuex'
import State from './state'

const Getters: GetterTree<typeof State, () => any> = {
  getCapitalizedTitle(State): string {
    return State.title.toUpperCase()
  }
}

export default Getters
