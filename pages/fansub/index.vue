<template>
  <div class="full-width">
    <!-- Header -->
    <div class="fansub-header">
      <div class="anime-row">
        <div class="layout row justify-center align-center">
          <div class="flex shrink hidden-xs-only">
            <v-avatar size="80px">
              <img
                src="https://pbs.twimg.com/profile_images/614491610311557120/X1J5EXre_400x400.jpg"
                alt="avatar-fansub"
              >
            </v-avatar>
          </div>
          <div class="flex grow px-4">
            <div class="fansub-name">Horriblesubs <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon dark v-on="on" class="fansub-verify" size="14px">check_circle</v-icon>
                  </template>
                  <span>Trusted fansub</span>
                </v-tooltip></div>
            <div class="fansub-subcriber">102,016 follower</div>
          </div>
          <div class="shrink">
            <div class="fansub-bookmark">
              <v-btn color="red" dark>Bookmark</v-btn>
            </div>
          </div>
          <div class="shrink">
            <div class="fansub-bell">
              <v-btn icon dark>
                <v-icon>notifications</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fansub Menu -->
    <div class="fansub-menu">
      <v-flex>
        <v-layout row align-center justify-center>
          <v-btn flat>Home</v-btn>
          <v-btn flat>Videos</v-btn>
          <v-btn flat>Playlists</v-btn>
          <v-btn class="hidden-xs-only" flat>About</v-btn>
          <v-btn icon flat class="hidden-sm-and-down">
            <v-icon>search</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </div>
    <!-- Video -->
    <div class="fansub-videos">
      <div class="anime-row">
        <AnimeData/>
      </div>
    </div>
  </div>
</template>
<script>
import AnimeData from "@/components/template/AnimeData";
export default {
  components: {
    AnimeData
  }
};
</script>

<style scoped>
.fansub-verify {
  user-select: none;
  color: #aaa;
  padding-bottom: 4px;
}

.full-width {
    margin: 0;
    padding: 0;
}

.fansub-menu {
  background: #404040;
}

.fansub-name {
  font-weight: 500;
  font-size: 22px;
}

.fansub-subcriber {
  color: #aaa;
}

.anime-row {
  max-width: 1284px;
  flex: 1 1 100%;
  margin: auto;
  padding: 10px 10px;
  width: 100%;
}

.fansub-header {
  background: #474747;
}
</style>
