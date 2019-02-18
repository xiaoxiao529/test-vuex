<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input></select-input>
        <list v-show="isShow"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'


export default {
  data(){
      return {
        
      }
  },
  computed:{
    isShow(){
      return this.$store.state.isShow
    }
  },
  methods: {
  },
  components:{
    'select-input':selectInput,
    'list':list
  }
}
</script>
