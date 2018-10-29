import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            users: [],
            data: {}
        },
        //modification of values
        mutations: {
          /**
            destroySession(state, payload){
                state.userInfo = []
            },
             */
            storeUsers(state,payload){
              state.users = payload.users
            }
        },
        getters: {
            /*
            getToken(state){
                return token;
            }

            getShoppingCartProduct(state,id){
                return state.shoppingCart[id];
            }
            */
        }
    })
}

export default createStore


//Get: store.state.THING 
//set:  store.commit('functionInMutation', payload) <-- payload should be object with all params
/**
 * also valid: 
  store.commit({
  type: 'setToken',
  token: 'algo'
})& */