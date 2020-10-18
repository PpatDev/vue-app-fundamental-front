import Vue from "vue";
import Router from "vue-router";
import HomePage from "../home/HomePage.vue";
import RobotBuilderPerformed from "../build/RobotBuilderPerformed.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/PartInfo";
import BrowseParts from "../parts/BrowseParts";
import RobotHeads from "../parts/RobotHeads";
import RobotArms from "../parts/RobotArms";
import RobotTorsos from "../parts/RobotTorsos";
import RobotBases from "../parts/RobotBases";
import SidebarStandard from "../sidebars/sidebarStandard";
import SidebarBuild from "../sidebars/sidebarBuild";
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      }
    },
    {
      path: "/robotBuilderPerformed",
      name: "robotBuilderPerformed",
      components: {
        default: RobotBuilderPerformed,
        sidebar: SidebarBuild,
      }
    },
    {
      path: "/robotBuilder",
      name: "robotBuilder",
      component: RobotBuilder,
    },
    {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartInfo,
      props: true,
      beforeEnter( to, from, next ){
        const numberId = Number( to.params.id);
        const isValidId = Number.isInteger( numberId ) ;
        next(isValidId);
      },
    },
    {
      path: "/parts/browse",
      name: "BrowserParts",
      component: BrowseParts,
      children: [
        {
          name: "browserHeads",
          path: "heads",
          component: RobotHeads
        },
        {
          name: "browserArms",
          path: "arms",
          component: RobotArms
        },
        {
          name: "browserTorsos",
          path: "torsos",
          component: RobotTorsos
        },
        {
          name: "browserBases",
          path: "bases",
          component: RobotBases
        },
      ]
    }, 
    {
      name: "shoppingCart",
      path: '/cart', 
      component: ShoppingCart,
    }
  ]
});
