<template>
  <v-layout row wrap align-center mt-4>
    <v-flex xs6 sm4 md2 pa-1 v-for="episode in episodes" :key="episode.view_id">
      <v-card class="mx-auto" dark max-width="400">
        <nuxt-link class="anime-url" :to="`/watch?ani=${episode.view_id}`">
          <v-img :src="episode.thumbnail">
            <div class="play-icon">
              <v-icon>play_arrow</v-icon>
            </div>
          </v-img>
        </nuxt-link>
      </v-card>
      <div>
        <nuxt-link
          :title="`${episode.anime_title.toUpperCase()} ${episode.number} - ${episode.title}`"
          class="anime-url"
          :to="`/watch?ani=${episode.view_id}`"
        >
          <div
            class="subheading episode-title"
          >{{`${episode.anime_title.toUpperCase()} ${episode.number} - ${episode.title}`}}</div>
        </nuxt-link>
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
          <span>{{ episode.update_at | moment("from", "now") }}</span>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import episodeService from "@/services/Episode";
export default {
  data() {
    return {
      episodes: [],
      animes: []
    };
  },
  async mounted() {
    this.episodes = (await episodeService.index()).data;
  },
  props: ["show"]
};
</script>

<style scoped>
.episode-title {
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 3.4rem;
  word-wrap: break-word;
  line-height: 18px;
  position: relative;
  -webkit-line-clamp: 2;
}
</style>

