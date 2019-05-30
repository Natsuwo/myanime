<template>
  <div class="container fluid">
    <no-ssr placeholder="Loading...">
      <siema ref="siema" class="siema" :ready="true" :options="options">
        <div class="slide" v-for="item in 12" :key="item">
          <div class="flex">
            <v-img
              src="https://static.animecdn.xyz/media/imagesv2/2019/04/Kimetsu-no-Yaiba-Sub-cover.jpg"
            >
              <div class="play-icon">
                <v-icon>play_arrow</v-icon>
              </div>
            </v-img>
            <div class="subheading">Steins;Gate Movie: Fuka Ryouiki no Déjà vu - {{ item }}</div>
            <div class="metadata-line">
              <div class="title-anime" v-if="show">
                <nuxt-link :to="`/anime/`">
                  Horriblesubs
                  <v-tooltip right>
                    <template v-slot:activator="{ on }">
                      <v-icon dark v-on="on" class="fansub-verify" size="14px">check_circle</v-icon>
                    </template>
                    <span>Trusted fansub</span>
                  </v-tooltip>
                </nuxt-link>
              </div>
              <span>1 views</span>
              <span>·</span>
              <span>5 hours ago</span>
            </div>
          </div>
        </div>
      </siema>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        duration: 200,
        easing: "ease-out",
        perPage: 6,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false
      }
    };
  }
};
</script>


<style>
.slide {
  padding-right: 10px;
}
</style>
