<template>
  <v-layout row wrap align-center mt-4>
    <v-flex xs6 sm4 md2 pa-1 v-for="episode in episodes" :key="episode.playId">
      <span v-for="anime in animes" :key="anime.title">
        <v-card class="mx-auto" dark max-width="400">
          <nuxt-link class="anime-url" :to="`/watch?ani=${episode.playId}`">
            <v-img :src="episode.thumbnail">
              <div class="play-icon">
                <v-icon>play_arrow</v-icon>
              </div>
            </v-img>
          </nuxt-link>
        </v-card>
        <div>
          <nuxt-link
            :title="anime.title + ' - ' + episode.number"
            class="anime-url"
            :to="`/watch?ani=${episode.playId}`"
          >
            <div class="subheading">{{ anime.title }} - {{ episode.number }}</div>
          </nuxt-link>
          <div class="metadata-line">
            <div class="title-anime" v-if="show">
              <nuxt-link :to="`/anime/${anime.viewId}`">
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
      </span>
    </v-flex>
  </v-layout>
</template>

<script>
import animeService from "@/services/anime.service";
import episodeService from "@/services/episode.service";
export default {
  data() {
    return {
      episodes: [],
      animes: []
    };
  },
  async mounted() {
    this.animes = await animeService.index();
    this.episodes = await episodeService.index();
  },
  props: ["show"]
};
</script>

<style scoped>

</style>

