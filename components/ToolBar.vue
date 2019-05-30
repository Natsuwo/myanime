<template>
  <div class="toolbar">
    <v-navigation-drawer v-model="drawer" :clipped="clipped" hide-overlay fixed app temporary>
      <div class="menuDrawer">
        <v-toolbar-side-icon class="iconInDrawer" @click="drawer = !drawer"/>
        <v-toolbar-title class="textInDrawer text-uppercase grey--text">
          <nuxt-link to="/">
            <span class="font-weight-light">{{titleOne}}</span><span>{{titleTwo}}</span>
          </nuxt-link>
        </v-toolbar-title>
      </div>
      <v-divider/>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="clipped"
      fixed
      flat
      app
      v-if="offsetTop >= 1"
      class="semi-transparent"
    >
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      <v-toolbar-title class="text-uppercase grey--text mr-3">
        <nuxt-link to="/">
          <span class="font-weight-light">{{titleOne}}</span><span>{{titleTwo}}</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer/>
      <search-bar class="justify-center align-center mt-2"/>
      <v-spacer/>
      <user-bar/>
    </v-toolbar>
    <v-toolbar :clipped-left="clipped" fixed flat app v-else class="transparent">
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      <v-toolbar-title class="text-uppercase grey--text mr-3">
        <nuxt-link to="/">
          <span class="font-weight-light">{{titleOne}}</span><span>{{titleTwo}}</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer/>
      <search-bar class="justify-center align-center mt-2"/>
      <v-spacer/>
      <user-bar/>
    </v-toolbar>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import UserBar from "./UserBar";
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      q: "",
      showBar: "transparent",
      items: [
        {
          icon: "home",
          title: "Home",
          to: "/"
        },
        {
          icon: "whatshot",
          title: "Trending",
          to: "/trending"
        }
      ],
      right: true,
      rightDrawer: false,
      titleOne: "My",
      titleTwo: "Anime"
    };
  },
  methods: {
    search() {
      if (this.q) {
        this.$router.push(`/courses/?search=${this.q}`);
      }
    }
  },
  components: {
    SearchBar,
    UserBar
  },
  props: ['offsetTop']
};
</script>

<style scoped>
.menuDrawer {
  display: flex;
  align-items: center;
  height: 64px;
}

.iconInDrawer {
  left: 6px;
}

.landing-content {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 1720px;
}

.nuxt-link-active {
  text-decoration: none;
  color: #fff;
}
</style>
