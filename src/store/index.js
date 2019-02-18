import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        isShow:false,
        listData:[],
        title:''
    },
    mutations:{
        changeShowMutation(state){
            state.isShow = !state.isShow
        },
        fetchDataMutation(state,payload){
            state.listData = payload
        },
        changeTitleMutation(state,payload){
            state.title = payload
        }
    },
    actions:{

        fetchDataAction({commit}){
            axios.get('https://www.easy-mock.com/mock/5c3867764ca7fb6358ce7273/example/mock')
            .then((data)=>{
                console.log(data.data)
                commit('fetchDataMutation',data.data.subjects)  // 拿到数据后，提交mutations，改变状态，只要改变state，都得通过提交mutations进行
            })
            .catch((error)=>{
                console.log(error)
            })
            
        }

    },
    getters:{}

})

export default store