<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="changeShow"
        :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
  
  computed:{
    title(){
        return this.$store.state.title
      }
  },
  methods: {
    changeShow(){
      this.$store.commit('changeShowMutation')
    }
  }
}
</script>
