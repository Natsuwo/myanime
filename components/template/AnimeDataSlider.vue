<template>
  <div>
    <no-ssr placeholder="Loading...">
      <siema
        class="siema"
        ref="siema"
        v-if="episodes"
        :options="options"
        :current.sync="currentSlide"
      >
        <template v-for="episode in episodes">
          <div class="slide" :key="episode._id">
            <div v-for="anime in animes" :key="anime.title">
              <div class="flex">
                <v-img :src="episode.thumbnail">
                  <div class="play-icon">
                    <v-icon>play_arrow</v-icon>
                  </div>
                </v-img>
                <div class="subheading">{{ anime.title }} - {{ episode.number }}</div>
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
                  <span>{{ episode.views }} views</span>
                  <span>·</span>
                  <span>{{ episode.updated_at | moment("from", "now") }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </siema>
    </no-ssr>
    <v-layout align-end justify-end row>
      <v-btn v-if="currentSlide < 1" disabled>
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-btn v-else @click="prev">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-btn v-if="currentSlide === 6" disabled>
        <v-icon>chevron_right</v-icon>
      </v-btn>
      <v-btn v-else @click="next">
        <v-icon>chevron_right</v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>
<script>
// import animeService from "@/services/anime.service";
// import episodeService from "@/services/episode.service";
export default {
  data() {
    return {
      options: {
        duration: 200,
        easing: "ease-out",
        perPage: {
          1200: "6",
          992: "5",
          768: "4",
          576: "3",
          0: "2"
        },
        startIndex: 0
      },
      currentSlide: 0,
      episodes: null,
      animes: null
    };
  },
  async mounted() {
    this.animes = await animeService.index();
    this.episodes = await episodeService.index();
  },
  methods: {
    next() {
      return this.$refs.siema.next();
    },
    prev() {
      return this.$refs.siema.prev();
    }
  },
  props: ["show"]
};
</script>

<style scoped>
.slide {
  padding-right: 10px;
}
</style>
