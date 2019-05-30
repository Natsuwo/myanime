<template>
  <div class="random mt-3">
    <div class="flex xs12" style="border-top: 4px solid rgb(66, 66, 66);">
      <h2
        class="headline text-uppercase letter-spacing font-weight-regular d-inline-block px-3 py-2 grey darken-3"
      >Random</h2>
    </div>
    <AnimeDataSlider :show="show = true" class="pt-4"/>
  </div>
</template>

<script>
import AnimeDataSlider from "@/components/template/AnimeDataSlider";
export default {
  components: {
    AnimeDataSlider
  },
  props: ["episodes"]
};
</script>
