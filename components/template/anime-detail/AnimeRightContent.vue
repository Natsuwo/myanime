<template>
  <div class="anime-metadata">
    <div class="anime-type">
      <span>Type:</span>
      <span class="anime-metadata-value">TV-Series</span>
    </div>
    <div class="anime-year">
      <span>Year:</span>
      <span class="anime-metadata-value">Spring 2013</span>
    </div>
    <div class="status">
      <span>Status:</span>
      <span class="anime-metadata-value">Completed</span>
    </div>
    <div class="episodes">
      <span>Episodes:</span>
      <span class="anime-metadata-value">2030</span>
    </div>
    <div class="source">
      <span>Source:</span>
      <span class="anime-metadata-value">Blu-ray</span>
    </div>
    <div class="rating">
      <span>Rating:</span>
      <span class="anime-metadata-value">PG-13 - Teens 13 or older</span>
    </div>
    <div class="audio"></div>
    <div class="subtitles"></div>
    <div class="staff pt-3">
      <span>Staff</span>
      <span class="anime-though"></span>
    </div>
    <div class="original-work">
      <span>Original Work:</span>
      <span class="anime-metadata-value">Mages, Nitroplush, Shikura Chiyomaru</span>
    </div>
    <div class="chief-direction">
      <span>Chief Direction:</span>
      <span class="anime-metadata-value">Hamasaki Hiroshi, Satou Takuya</span>
    </div>
    <div class="direction">
      <span>Direction</span>
      <span class="anime-metadata-value">Wakabayashi Kanji</span>
    </div>
    <div class="character-design">
      <span>Character Design:</span>
      <span class="anime-metadata-value">Sakai Kyuuta</span>
    </div>
    <div class="music">
      <span>Music:</span>
      <span class="anime-metadata-value">Abo Takeshi, Murakami Jun</span>
    </div>
    <div class="animation work">
      <span>Animation Work:</span>
      <span class="anime-metadata-value">White Fox</span>
    </div>
  </div>
</template>

<style scoped>
.anime-metadata-value {
  color: #00a0b9;
}

.anime-though {
  position: relative;
  display: inline-block;
  width: 100%;
}

.anime-though::after {
  content: "";
  position: absolute;
  height: 5px;
  border-top: 2px solid white;
  bottom: 0.1rem;
  width: 100%;
}
</style>
