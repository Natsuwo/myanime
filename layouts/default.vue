<template>
  <v-app dark>
    <tool-bar :offsetTop="offsetTop" />
    <v-content>
      <div v-scroll="onScroll">
        <div class="landing-content">
          <nuxt/>
        </div>
      </div>
    </v-content>

    <!-- <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import ToolBar from '@/components/ToolBar'
export default {
  data() {
    return {
            offsetTop: 0,
    }
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

