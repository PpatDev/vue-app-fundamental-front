<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="" />
            Build-a-bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- <RobotBuilder/> -->
      <RobotBuilderPerform />
    </main>
  </div>
</template>

<script>
// import RobotBuilder from './build/RobotBuilder.vue'
import RobotBuilderPerform from "./build/RobotBuilderPerformed.vue";

export default {
  name: "App",
  components: {
    /* RobotBuilder, */
    RobotBuilderPerform
  }
};
</script>

<!--  Global style belong to any child components of app component -->
<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<!-- App style for only App component -->
<style scoped>
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  background-color: #999;
  width: 1084px;
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
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
