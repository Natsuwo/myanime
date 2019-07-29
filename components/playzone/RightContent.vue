<template>
  <div class="player-sidebar">
    <v-layout pa-2>
      <div class="player-sidebar-thumbnail pr-2">
        <v-img width="168px" src="https://www.myanime.co/file/cache/Ksu4I29-320x180.png"></v-img>
      </div>
      <div class="player-sidebar-right-content">
        <div class="player-sidebar-title pr-2">Steins;Gate Movie: Fuka Ryouiki no Déjà vu</div>
        <div class="player-sidebar-fansub-name">Horriblesubs</div>
        <div class="player-sidebar-views">12K views</div>
      </div>
    </v-layout>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.player-sidebar-thumbnail {
  margin-right: 8px;
}
.player-sidebar-title {
  font-weight: 400;
  font-size: 15px;
}
.player-sidebar-fansub-name,
.player-sidebar-views {
    color: #aaa;
}
</style>
