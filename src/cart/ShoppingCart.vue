<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency('$') }}
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="saleItems">You saved Money on the robots: </h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency('$') }}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';


export default {
  name: 'Cart',
  computed: {
      
      ...mapState( 'robots', { cart: 'cart'}),
      /*
      robots ===> the module
      cart ===> the computed method
      cart ===> the state to retrieve
      cart(){
          return this.$store.state.robots.cart;
      }, */

      ...mapGetters( 'robots', {cartSaleItems: 'getSaledcarts' }),
      /*
      cartSaleItems(){
          return this.$store.getters['robots/getSaledcarts'];
      } */
  }
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .saleItems{
      margin-top: 50px;
      font-size: 18px;
      color: red;
  }
</style>
