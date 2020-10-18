/* eslint-disable no-unused-vars */
import Vue from 'vue';
import axios from 'axios';

export default {
    namespaced: true,
    state: {
        cart: [],
        parts: null,
        foo: 'robot-foo',
    }, 
    mutations: {
        addRobotToCart( state, robot ){
            state.cart.push(robot);
        },
        upDatePartsFromAction( state, dataParts ){
            state.parts = dataParts;
        }
    }, 
    actions: {
        getPartsFromServer({ commit }){
            axios.get('/api/parts')
                .then( result => commit('upDatePartsFromAction', result.data))
                .catch( console.error );
        },
        updateRobotToCart({ commit, state}, robot){
            const cart = [ ...state.cart, robot ]; // ...state.cart will get all the content of cart
            return axios.post('/api/cart', cart)
                .then( () => commit( 'addRobotToCart', robot ));
        },
    },
    getters: {
        getSaledcarts(state){
            const dataCart = state.cart;
            const filteredCart = dataCart.filter( item => item.head.onSale );
            return state.cart.filter(item => item.head.onSale);
        }, 
        foo(state){
            return `robot-foo-getter/${state.foo}`;
        }
    },

};