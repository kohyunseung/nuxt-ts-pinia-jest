<template>
  <v-col>
    <h2> {{ msg }}</h2>
  </v-col>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'TestCase',
  props: {
    msg: String
  }

})
</script>
<style>

</style>
