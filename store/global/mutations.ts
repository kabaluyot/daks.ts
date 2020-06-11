import { MutationTree } from 'vuex'
import State from './state'

const Mutations: MutationTree<typeof State> = {
  SET_TITLE(State, data: string) {
    State.title = data
  }
}

export default Mutations
