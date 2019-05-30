<template>
  <div class="watch-container">
    <v-layout row wrap>
      <v-flex class="anime-left-zone" sm12 lg9 md7 lmd8>
        <div class="anime-player"></div>
        <div class="anime-page-action-bar py-3">
          <div class="anime-title">
            <h2>Steins;Gate Movie: Fuka Ryouiki no Déjà vu - 1</h2>
          </div>
          <div class="anime-views">
            <h3>461,740 views</h3>
          </div>
          <v-layout align-start justify-end row>
            <div class="user-vote-bar">
              <span class="anime-thumb-up">
                <v-btn icon flat>
                  <v-icon>thumb_up</v-icon>
                </v-btn>
                <span class="anime-thumb-up-count">10</span>
              </span>
              <span class="anime-thumb-down">
                <v-btn icon flat>
                  <v-icon>thumb_down</v-icon>
                </v-btn>
                <span class="anime-thumb-down-count">200</span>
              </span>
              <span class="anime-report">
                <v-btn flat>
                  <v-icon>flag</v-icon>
                  <span class="anime-report px-2">Report</span>
                </v-btn>
              </span>
            </div>
          </v-layout>
        </div>
        <v-divider/>
        <v-layout row py-3>
          <v-flex grow>
            <div class="layout row">
              <div class="flex shrink">
                <v-avatar>
                  <img
                    src="https://pbs.twimg.com/profile_images/614491610311557120/X1J5EXre_400x400.jpg"
                    alt="avatar-fansub"
                  >
                </v-avatar>
              </div>
              <div class="flex grow px-3">
                <div class="fansub-name">
                  Horriblesubs
                  <v-icon class="fansub-verify" size="14px">check_circle</v-icon>
                </div>
                <div class="fansub-last-update">13 hours ago</div>
              </div>
            </div>
          </v-flex>
          <v-flex shrink>
            <div class="layout row">
              <div class="flex shrink">
                <v-btn dark color="green">Bookmark</v-btn>
              </div>
              <div class="flex grow">
                <v-btn icon dark>
                  <v-icon>notifications</v-icon>
                </v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
        <v-flex class="description" xs12>
          This is description of this episode.
          #hash_tag
          <div class="flex xs12 md6 py-3">
            <v-card class="anime-card" flat dark>
              <div class="layout">
                <div class="flex shrink">
                  <v-img
                    src="https://static.animecdn.xyz/media/imagesv2/2019/04/Fruits-Basket-2019-Dub.jpg"
                    alt="anime-thumbnail"
                  ></v-img>
                </div>
                <div class="flex grow pa-3">
                  <div class="player-anime-title">Steins;Gate Movie: Fuka Ryouiki no Déjà vu</div>
                  <div class="player-anime-release-year">2013</div>
                  <div class="player-show-more">
                    Show all
                    <v-icon size="20px">keyboard_arrow_right</v-icon>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </v-flex>
        <v-divider/>
        <v-flex ma-3>
          <div class="layout row">
            <div class="flex xs6">
              <div class="comment-count">232 Comments</div>
            </div>
            <div class="flex xs6">
              <v-btn flat dark class="right player-comment-sort">
                <v-icon size="14px">sort</v-icon>
                <span class="px-2">Sort</span>
              </v-btn>
            </div>
          </div>
          <div class="flex xs12">
            <div class="layout align-center justify-center row">
              <div class="user-not-login">
                Sign in to post a comment!
                <v-btn dakr color="info">Sign In</v-btn>
              </div>
            </div>
          </div>
        </v-flex>
      </v-flex>
      <!-- Sidebar -->
      <v-flex pl-4 sm12 lg3 lmd4 md5>
        <div class="sidebar-playlist">
          <v-card flat>
            <div class="player-playlist-header pa-4">
              <div class="player-playlist-title">Steins;Gate Movie: Fuka Ryouiki no Déjà vu</div>
              <div class="player-playlist-fansub-title">Horriblesubs - 1/13</div>
            </div>
            <div class="player-playlist-video">
              <template class="template" v-for="item in 12">
                <div :key="item" class="pa-2 layout align-center justify-center player-playlist">
                  <div class="player-playlist-count px-1">{{ item }}</div>
                  <div class="player-playlist-thumbnail pr-2">
                    <v-img
                      width="100px"
                      src="https://www.myanime.co/file/cache/Ksu4I29-320x180.png"
                    ></v-img>
                  </div>
                  <div class="playlist-playlist-right-title">
                    <div
                      class="player-playlist-video-title pr-2"
                    >Steins;Gate Movie: Fuka Ryouiki no Déjà vu {{item}}</div>
                    <div class="player-playlist-video-fansub-title">Horriblesubs</div>
                  </div>
                </div>
              </template>
            </div>
          </v-card>
        </div>
        <div class="playlist-sidebar-single-ep pt-4">
          <template class="template" v-for="item in 12">
            <div :key="item" class="pa-2 layout player-playlist">
              <div class="player-playlist-thumbnail pr-2">
                <v-img width="168px" src="https://www.myanime.co/file/cache/Ksu4I29-320x180.png"></v-img>
              </div>
              <div class="playlist-playlist-right-title">
                <div
                  class="player-single-ep-video-title pr-2"
                >Steins;Gate Movie: Fuka Ryouiki no Déjà vu {{item}}</div>
                <div class="player-single-ep-video-fansub-title">Horriblesubs</div>
                <div class="player-single-ep-views">12K views</div>
              </div>
            </div>
          </template>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import Video from "@/components/Video";
export default {
  data() {
    return {
      episode: []
    };
  },
  created() {},
  components: {
    AnimePlay: Video
  }
};
</script>

<style scoped>
.player-single-ep-video-title {
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  white-space: normal;
  max-height: 2.5rem;
  word-wrap: break-word;
  line-height: 18px;
  position: relative;
  -webkit-line-clamp: 2;
}

.player-single-ep-video-fansub-title {
  color: #aaa;
}

.player-single-ep-views {
  color: #aaa;
}

.player-playlist-count {
  color: #aaa;
  font-size: 12px;
  width: 30px;
}

.playlist-playlist-right-title {
  max-width: 270px;
}

.player-playlist-video-fansub-title {
  overflow: hidden;
  font-size: 12px;
}

.player-playlist-video-title {
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
}

.player-playlist {
  width: 100%;
  position: relative;
}

.player-playlist-video {
  background: #292929;
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
}

.player-playlist-video::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.player-playlist-video::-webkit-scrollbar {
  width: 10px;
}

.player-playlist-video::-webkit-scrollbar-thumb {
  background-color: #4f4f4f;
}

.player-playlist-video::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.player-playlist-title {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
}

.player-playlist-fansub-title {
  font-size: 13px;
}

.player-comment-sort {
  border: 1px solid #aaa;
}

.player-anime-title {
  font-size: 16px;
}

.player-anime-release-year {
  font-size: 12px;
  color: #aaa;
}

.player-show-more .v-icon {
  user-select: none;
  color: #aaa;
}

.player-show-more {
  color: #aaa;
  font-size: 14px;
}

.anime-card {
  overflow: hidden;
}

.v-image {
  width: 70px;
  height: auto;
}

.fansub-verify {
  user-select: none;
  color: #aaa;
  padding-bottom: 1px;
}

.fansub-name {
  font-weight: 600;
}

.fansub-last-update {
  color: #aaa;
}

.anime-views h3 {
  color: #aaa;
  font-weight: 400;
}

@media (min-width: 992px) {
  .watch-container {
    padding: 0 4rem;
  }
}

.anime-title {
  color: #dbdbdb;
}

.anime-player {
  width: 100%;
  height: 720px;
  background: black;
}
</style>

