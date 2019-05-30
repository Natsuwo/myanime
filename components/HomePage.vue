<template>
  <div class="home-page">
    <v-container fluid>
      <RencentUpload :episodes="episodes"/>
      <Recommendation :episodes="episodes"/>
      <TrendingAnime :episodes="episodes"/>
      <RandomAnime :episodes="episodes"/>
    </v-container>
  </div>
</template>

<script>
import RencentUpload from "./template/RencentUpload";
import Recommendation from "./template/Recommendation";
import TrendingAnime from "./template/TrendingAnime";
import RandomAnime from "./template/RandomAnime";
import axios from "axios";
export default {
  data() {
    return {
      episodes: []
    };
  },
  created() {},
  components: {
    RencentUpload,
    Recommendation,
    TrendingAnime,
    RandomAnime
  }
};
</script>

<style scoped>
</style>
