/* eslint-disable no-unused-vars */
<template>
  <div id="app">

    Root Foo: {{rootFoo}} <br/>
    Robot Foo: {{robotFoo}} <br/>
    users Foo: {{usersFoo}} <br/>
    <br/>
    Root Getter Foo: {{rootGetterFoo}} <br/>
    Robots Getter Foo: {{robotsGetterFoo}} <br/>
    Users Getter Foo: {{usersGetterFoo}} <br/>


    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link
              active-class="robotActive"
              class="nav-link"
              :to="{ name: 'home' }"
              exact
            >
              <img class="logo" src="./assets/build-a-bot-logo.png" alt="" />
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="robotActive"
              class="nav-link"
              :to="{ name: 'robotBuilderPerformed' }"
              exact
            >
              Build-a-bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="robotActive"
              class="nav-link"
              :to="{ name: 'BrowserParts' }"
              exact
            >
              BrowseParts
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link
              active-class="robotActive"
              class="nav-link"
              :to="{ name: 'shoppingCart' }"
              exact
            >
              Cart
            </router-link>
            <div class="cart-items">
                {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
// import RobotBuilder from './build/RobotBuilder.vue'
import {mapState, mapGetters } from 'vuex';

export default {
  name: "AppStored",
  components: {}, 
  computed: {
    ...mapState( {
      rootFoo: 'foo',
      usersFoo: state => state.users.foo
    }),/*
    rootFoo(){
      return this.$store.state.foo;
    }, 

    usersFoo(){
      return this.$store.state.users.foo;
    }, 

    */

   /** ...mapState( 'moduleName', { computeMethod: 'state variable'}) */
   ...mapState( 'robots', { cart: 'cart'}),
   ...mapState( 'robots', { robotFoo: 'foo'} ),
    /* 
    cart() {
        return this.$store.state.robots.cart;
    }, 
    
    robotFoo(){
      return this.$store.state.robots.foo;
    },*/
    
    ...mapGetters('users', { usersGetterFoo: 'foo'}),
   /* usersGetterFoo(){
      return  this.$store.getters['users/foo'];
    },*/

    ...mapGetters( {rootGetterFoo: 'foo'}), // for the root module module name to justify
    /*
    rootGetterFoo(){
      return this.$store.getters['foo'];
    }, */

    
    ...mapGetters('robots', { robotsGetterFoo: 'foo'}),
    /* robotsGetterFoo(){
      return  this.$store.getters['robots/foo'];
    } */
  },  
  methods: {
    
  }
};
</script>

<!--  Global style belong to any child components of app component -->
<style>
body {
  background: linear-gradient(to bottom, #555, #999) fixed;
}
</style>

<!-- App style for only App component -->
<style scoped>
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart{
    position: relative;
    margin-left: auto;
    border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items{
    position: absolute;
    top: -5px;
    right: -9px;
    font-size: 18px;
    width: 20px;
    text-align: center;
    display: inline-block;
    border-radius: 100px;
    background-color: mediumseagreen;
}
</style>
