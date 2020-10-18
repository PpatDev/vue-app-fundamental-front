<template>
  <div id="app">
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

export default {
  name: "AppRouted",
  components: {}
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
</style>
