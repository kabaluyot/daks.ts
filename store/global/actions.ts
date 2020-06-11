import { ActionTree } from 'vuex'
import State from './state'

const Actions: ActionTree<typeof State, () => void> = {
  setTitle(context, payload: string) {
    context.commit('SET_TITLE', payload)
  }
}

export default Actions
