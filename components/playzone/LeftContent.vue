<template>
  <div class="player-left-content">
    <v-layout row wrap class="anime-player">
      <v-responsive :aspect-ratio="16/9">
        <iframe
          width="100%"
          height="100%"
          src="https://drstream.live/player?v=IqxEzMHOtr"
          frameborder="0"
        ></iframe>
      </v-responsive>
    </v-layout>
    <div class="pt-3 player-episode-title">Sounan Desu ka? - Episode 2 - Our First Meal</div>
    <v-layout row wrap>
      <div class="views flex" style="display: inline;">1,649,684 views</div>
      <v-spacer></v-spacer>
      <div style="display: inline;">
        <span class="player-thumb_up">
          <v-btn icon flat>
            <v-icon>thumb_up</v-icon>
          </v-btn>
          <span>1124</span>
        </span>
        <span class="player-thumb_down">
          <v-btn icon flat>
            <v-icon>thumb_down</v-icon>
          </v-btn>
          <span>412321</span>
        </span>
        <span class="player-report">
          <v-btn flat>
            <v-icon>flag</v-icon>Report
          </v-btn>
        </span>
      </div>
    </v-layout>
    <v-divider />
    <v-layout row wrap pt-3>
      <v-avatar class="player-fansub mr-3">
        <img
          src="https://pbs.twimg.com/profile_images/614491610311557120/X1J5EXre_400x400.jpg"
          alt="avatar-fansub"
        />
      </v-avatar>
      <div class="flex">
        <span class="player-fansub-title">Horriblesubs</span>
        <span class="player-update-at" style="display: block;">2017/08/19</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="red">Bookmark</v-btn>
      <v-btn icon flat>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-layout>
    <div class="player-description pt-3">This is description of episode #hastag</div>
    <v-layout class="player-anime-card" row wrap my-3>
      <v-flex>
        <v-card>
          <div class="layout row wrap">
            <div class="player-anime-thumbnail mr-3">
              <v-img
                src="https://static.animecdn.xyz/media/imagesv2/2019/04/Fruits-Basket-2019-Dub.jpg"
                alt="anime-thumbnail"
                width="70px"
              ></v-img>
            </div>
            <div class="flex player-anime-card-container mt-3">
              <div
                class="player-anime-card-container-title"
              >Steins;Gate Movie: Fuka Ryouiki no Déjà vu</div>
              <div class="player-anime-card-container-year">2013</div>
              <div class="player-anime-card-container-show-more">Show all</div>
            </div>
          </div>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
    <div class="player-show-more pb-3">Show more</div>
    <v-divider />
    <v-layout class="player-before-comments pt-3" align-center>
      <div class="comments-count pr-3">840 Comments</div>
      <div class="comments-sort pr-3">
        <v-btn flat small>
          <v-icon>sort</v-icon>Sort
        </v-btn>
      </div>
    </v-layout>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.player-left-content {
  width: 100%;
}

.anime-player {
  position: relative;
  width: 100%;
}
.player-fansub {
  width: 100%;
}
.player-fansub-title {
  font-weight: 500;
  font-size: 16px;
}
.player-update-at {
  color: #aaa;
}
.player-description,
.player-show-more,
.player-anime-card {
  margin-left: 64px;
}
.player-anime-card-container-title {
  font-weight: 400;
  font-size: 18px;
}
.player-anime-card-container-year,
.player-anime-card-container-show-more {
  color: #aaa;
}
.comments-count {
  font-size: 18px;
  font-weight: 400;
}
.player-episode-title {
  font-size: 24px;
}
.views {
  color: #aaa;
  font-size: 16px;
}
.player-thumb_up {
    cursor: pointer;
}
.player-thumb_down {
    cursor: pointer;
}
</style>
