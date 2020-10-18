<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" aria-hidden="true" />
    </div>
    <div class="get-started">
      <router-link class="routerLink" to="/robotBuilderPerformed">
        performed build a first robot app !
      </router-link>
      <router-link class="routerLink" to="/robotBuilder">
        build a first robot app !
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

.routerLink{
  display: flex;
  text-align: center;
}

.robot {
  height: 300px;
}
</style>
