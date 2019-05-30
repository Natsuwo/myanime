<template>
  <div>
    <div
      class="anime-banner"
      style="background-image: url(https://static.animecdn.xyz/media/imagesv2/2019/04/Fruits-Basket-2019-Dub-cover.jpg?v=15)"
    ></div>
    <div class="anime-overlay"></div>
  </div>
</template>

<style scoped>
.anime-banner {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 10%;
  position: absolute;
}

.anime-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
}

</style>
