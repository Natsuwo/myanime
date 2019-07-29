<template>
  <v-app dark>
    <v-container wrap>
      <tool-bar :offsetTop="offsetTop" />
      <v-content v-scroll="onScroll">
        <div class="landing-content">
          <nuxt />
        </div>
      </v-content>
    </v-container>

    <!-- <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import ToolBar from "@/components/main/ToolBar";
export default {
  data() {
    return {
      offsetTop: 0
    };
  },
  components: {
    ToolBar
  },
  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  }
};
</script>

