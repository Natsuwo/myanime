<template>
  <home-page></home-page>
</template>

<script>
import HomePage from '@/components/main/HomePage';
export default {
  components: {
    HomePage
  }
}
</script>
<style>
/* .v-navigation-drawer {
  transition: none !important;
} */
.inline-block {
  display: inline-block;
}

.anime-url {
  text-decoration: none;
}

.subheading {
  color: #fff;
  padding: 10px 5px;
}

.metadata-line {
  color: #999;
  padding: 0px 5px;
}

.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 72px);
}

.recommendation {
  margin-top: 20px;
}

.play-icon {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.play-icon .v-icon {
  color: red;
  font-size: 4rem;
  background: rgba(0, 0, 0, 0.75);
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  transition: opacity 0.5s;
  opacity: 0;
}

.play-icon:hover .v-icon {
  opacity: 1;
  transition: opacity 0.5s;
}

.title-anime {
  color: #aaa;
}

.title-anime a {
  text-decoration: none;
  color: #aaa;
}

.fansub-verify {
  user-select: none;
  color: #aaa!important;
  padding-bottom: 1px;
}
</style>
