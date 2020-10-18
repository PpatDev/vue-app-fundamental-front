<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">add To Cart</button>
    <div class="top-row">
      <div class="top part" :style="[headRobotStyle]">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale"> sale ! </span>
        </div>
        <img :src="selectedRobot.head.src" title="head" />
        <button class="prev-selector" @click="selectPreviousHeads()">
          &#9668;
        </button>
        <button class="next-selector" @click="selectNextHeads()">
          &#9658;
        </button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="selectedRobot.leftArm.src" title="left arm" />
        <button class="prev-selector" v-on:click="selectNextLeftArms()">
          &#9650;
        </button>
        <button class="next-selector" v-on:click="selectPreviousLeftArms()">
          &#9660;
        </button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm" />
        <button class="prev-selector" @click="selectNextTorsos()">
          &#9668;
        </button>
        <button class="next-selector" @click="selectPreviousTorsos()">
          &#9658;
        </button>
      </div>
      <div class="right part">
        <img
          v-bind:src="availableParts.arms[rightArmsIndex].src"
          title="left arm"
        />
        <button class="prev-selector" v-on:click="selectNextRightArms()">
          &#9650;
        </button>
        <button class="next-selector" v-on:click="selectPreviousRightArms()">
          &#9660;
        </button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part" :class="[defineBaseStyle]">
        <img :src="availableParts.bases[basesIndex].src" title="left arm" />
        <button class="prev-selector" @click="selectNextBases()">
          &#9668;
        </button>
        <button class="next-selector" @click="selectPreviousBases()">
          &#9658;
        </button>
      </div>
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
import availableParts from "../data/parts";
import createdHookMixin from "./created-hook-mixin";

function getNextValidIndex(index, lenght) {
  const deprecatedIndex = index + 1;
  return deprecatedIndex > lenght - 1 ? 0 : deprecatedIndex;
}

function getPreviousValidIndex(index, lenght) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? lenght - 1 : deprecatedIndex;
}
export default {
  name: "RobotBuilder",

  /*
    created() {
        console.log("the component is beeing created");
    },
    */
  beforeRouteLeave( to, from, next ){
    if( this.addedToCart ){
      next(true);
    }else{
      const response  = confirm('are you sure to leave without adding you robot to cart ? ');
      next(response);
    }
  },

  mixins: [createdHookMixin],

  data() {
    return {
      availableParts,
      headsIndex: 0,
      rightArmsIndex: 0,
      leftArmsIndex: 0,
      basesIndex: 0,
      torsosIndex: 0,
      cart: [],
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
    selectedRobot() {
      return {
        head: availableParts.heads[this.headsIndex],
        leftArm: availableParts.arms[this.leftArmsIndex],
        rightArm: availableParts.arms[this.rightArmsIndex],
        base: availableParts.bases[this.basesIndex],
        torso: availableParts.torsos[this.torsosIndex]
      };
    }
  },
  methods: {
    /* Head Index */
    selectNextHeads() {
      this.headsIndex = getNextValidIndex(this.headsIndex, 5);
    },
    selectPreviousHeads() {
      this.headsIndex = getPreviousValidIndex(this.headsIndex, 5);
    },

    /** Left Arms Index */
    selectNextLeftArms() {
      this.leftArmsIndex = getNextValidIndex(this.leftArmsIndex, 5);
    },

    selectPreviousLeftArms() {
      this.leftArmsIndex = getPreviousValidIndex(this.leftArmsIndex, 5);
    },

    /** Right Arms Index */

    selectNextRightArms() {
      this.rightArmsIndex = getNextValidIndex(this.rightArmsIndex, 5);
    },

    selectPreviousRightArms() {
      this.rightArmsIndex = getPreviousValidIndex(this.rightArmsIndex, 5);
    },

    /** Bases Index */
    selectNextBases() {
      this.basesIndex = getNextValidIndex(this.basesIndex, 5);
    },

    selectPreviousBases() {
      this.basesIndex = getPreviousValidIndex(this.basesIndex, 5);
    },

    /** Torsos Index */
    selectNextTorsos() {
      this.torsosIndex = getNextValidIndex(this.torsosIndex, 3);
    },

    selectPreviousTorsos() {
      this.torsosIndex = getPreviousValidIndex(this.torsosIndex, 3);
    },

    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;
      const robotObject = Object.assign({}, robot, { cost });
      this.cart.push(robotObject); // On rajoute un robot et son cout total dans le tableau
    },

    reinitCart() {
      this.cart = [];
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
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: tomato;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td,
th {
  text-align: 5px;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}

.toSale {
  border: 3px solid red;
}
</style>
