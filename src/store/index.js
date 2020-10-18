/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import robotsModule from '../modules/robots';
import usersModule from '../modules/users'

Vue.use(Vuex);

export default new Vuex.Store({
    
    modules: {
        robots: robotsModule,
        users: usersModule,
    }, 
    state: {
        foo : 'root-foo',
    }, 
    getters: {
        foo(state){
            return `root-foo-getter/${state.foo}`;
        }
    }
    
});