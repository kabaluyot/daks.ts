<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'

const GLOBAL_STORE = namespace('global')

@Component
export default class Inspire extends Vue {
  @GLOBAL_STORE.Getter('getCapitalizedTitle')
  global_get_capitalized_title!: string

  mounted(): void {
    console.log('FROM VUEX', this.global_get_capitalized_title)
  }
}
</script>
