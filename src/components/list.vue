<template>
    <ul class="list">
      <li @click="showDataAction(item.title)" :key="index" v-for="item,index in data">{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  computed:{
      data(){
          return this.$store.state.listData
      },
      
  },
  created(){
    this.$store.dispatch('fetchDataAction')
  },
  methods:{
    showDataAction(title){
      this.$store.commit('changeTitleMutation',title)
    }
  }
}
</script>
