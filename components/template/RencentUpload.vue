<template>
<div class="recent-anime">
    <div class="flex xs12" style="border-top: 4px solid rgb(66, 66, 66);">
      <h2
        class="headline text-uppercase letter-spacing font-weight-regular d-inline-block px-3 py-2 grey darken-3"
      >Recent Uploads</h2>
    </div>
  <AnimeData :show="show = true"/>
  <v-btn>View More</v-btn>
  </div>
</template>

<script>
import AnimeData from './AnimeData'
export default {
  components: {
    AnimeData
  }
}
</script>

