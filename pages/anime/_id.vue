<template>
  <div class="anime-detail">
    <div class="anime-header">
      <AnimeBanner/>
      <v-layout row wrap>
        <v-flex d-flex pa-4 md5 sm6>
          <div class="anime-left-content">
            <AnimeLeftContent/>
          </div>
        </v-flex>
        <v-flex d-flex md2 hidden-md-and-down align-center>
          <AnimeThumbnail/>
        </v-flex>
        <v-flex d-flex pa-4 md5 sm6>
          <div class="anime-right-content">
            <AnimeRightContent/>
            <v-layout row pt-2>
              <v-flex shrink right>
                <v-btn dark color="red">Bookmark</v-btn>
              </v-flex>
              <v-flex shrink>
                <v-btn icon dark>
                  <v-icon>notifications</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <div class="anime-container">
      <div class="anime-control-header">
        <v-flex>
          <v-layout row align-center justify-center>
            <v-btn flat>Home</v-btn>
            <v-btn flat>Recent</v-btn>
            <v-btn flat>Fansubs</v-btn>
          </v-layout>
        </v-flex>
      </div>
      <div class="list-content">
        <div class="anime-row">
          <AnimeData/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimeData from "@/components/template/AnimeData";
import AnimeBanner from "@/components/template/anime-detail/AnimeBanner";
import AnimeLeftContent from "@/components/template/anime-detail/AnimeLeftContent";
import AnimeThumbnail from "@/components/template/anime-detail/AnimeThumbnail";
import AnimeRightContent from "@/components/template/anime-detail/AnimeRightContent";
export default {
  components: {
    AnimeBanner,
    AnimeLeftContent,
    AnimeThumbnail,
    AnimeRightContent,
    AnimeData
  },
  props: ["show"]
};
</script>

<style scoped>
.inline-block {
  display: inline-block;
}

.anime-row {
  max-width: 1284px;
  flex: 1 1 100%;
  margin: auto;
  padding: 10px 10px;
  width: 100%;
}

.anime-header {
  width: 100%;
  background-color: #fff;
  position: relative;
}

.anime-left-content {
  display: block;
  position: relative;
}

.anime-right-content {
  display: block;
  position: relative;
}

.anime-control-header {
  width: 100%;
  background-color: #282828;
}

#subcriber-count {
  color: #aaa;
}
</style>

