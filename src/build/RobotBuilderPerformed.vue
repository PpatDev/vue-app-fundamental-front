<template>
  <div v-if="availableParts"  class="content">
    <div class="preview">
      <collapsible-section></collapsible-section>
      <collapsible-section>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src" />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left" />
            <img :src="selectedRobot.torso.src" />
            <img :src="selectedRobot.rightArm.src" class="rotate-right" />
          </div>

          <div class="bottom-row">
            <img :src="selectedRobot.base.src" />
          </div>
        </div>
      </collapsible-section>
      <button class="add-to-cart" @click="addToCart()">add To Cart</button>
    </div>

    <div class="top-row">
      <div class="top part" :style="[headRobotStyle]">
        <!-- <div class="robot-name">
                    {{selectedRobot.head.title}}
                    <span v-if="selectedRobot.head.onSale" class="sale"> sale ! </span>

                </div> -->
        <PartSelector
          :parts="availableParts.heads"
          position="top"
          @selectedPart="part => handlePartFromEvent(part)"
        />
      </div>
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        v-on:selectedPart="part => (selectedRobot.leftArm = part)"
      />
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @selectedPart="part => handlePartFromEvent(part)"
      />
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        v-on:selectedPart="part => (selectedRobot.rightArm = part)"
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        v-on:selectedPart="part => handlePartFromEvent(part)"
      />
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, robotIndex) in cart" :key="robotIndex">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import PartSelector from "./PartSelector.vue";
import CollapsibleSection from "../shared/CollapsibleSection.vue";
import {mapActions} from 'vuex';

export default {
  name: "RobotBuilderPerformed",

  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      const response = confirm(
        "are you sure to leave without adding you robot to cart ? "
      );
      next(response);
    }
  },

  created() {
        // this.$store.dispatch( 'robots/getPartsFromServer');   // dispatch to kickoff actions
        this.getPartsFromServer();
  }, 

  components: { PartSelector, CollapsibleSection },

  data() {
    return {
      
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        base: {},
        torso: {}
      }, 
      addedToCart: false,
    };
  },
  computed: {
    headRobotStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? "3px solid red"
          : "3px solid #aaa"
      };
    },
    defineBaseStyle() {
      return this.selectedRobot.base.toChange ? "toSale" : "";
    }, 
    availableParts() {
      return this.$store.state.robots.parts;
    }
  },
  methods: {
    ...mapActions('robots', ['getPartsFromServer', 'updateRobotToCart']),
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;
      const robotObject = Object.assign({}, robot, { cost });
      // this.cart.push(robotObject); // On rajoute un robot et son cout total dans le tableau
      // this.$store.commit('addRobotToCart', robotObject); // we use commit to commit mutations 
     
     //this.$store.dispatch( 'robots/updateRobotToCart', robotObject ). // the dispatch will post robotObject and then commit it to the state
      this.updateRobotToCart(robotObject).
     then( () => this.$router.push({ name: 'shoppingCart'}) ); // from assynchronous call route to shoppingCart component when request has succed
        
      this.addedToCart = true;
      console.log(robot);

    },
    reinitCart() {
      this.cart = [];
    },

    handlePartFromEvent(part) {
      const type = part.type;
      /*const id = part.id;
      const resolvedPart = this.availableParts[type].find( partVar=> partVar.id === +id );
      this.selectedRobot.base = resolvedPart;
      console.log('resolved part ===> ', type, id,  resolvedPart); */
      if (type === "heads") {
        this.selectedRobot.head = part;
      } else if (type === "arms") {
        this.selectedRobot.arms = part;
      } else if (type === "torsos") {
        this.selectedRobot.torso = part;
      } else if (type === "bases") {
        this.selectedRobot.base = part;
      }
    }
  }
};
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
td,
th {
  padding: 5px 20px 5px 5px;
}
.cost {
  text-align: right;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
