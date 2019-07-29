<template>
  <v-layout row wrap class="anime-container">
    <v-flex xs12 sm12 md9 pt-2 pr-4>
      <leftContent />  
    </v-flex>
    <v-flex xs12 sm12 md3 pt-2 pr-4>
      <rightContent />
    </v-flex>
  </v-layout>
</template>

<script>
import leftContent from "@/components/playzone/LeftContent";
import rightContent from "@/components/playzone/RightContent";
export default {
  components: {
    leftContent,
    rightContent
  }
};
</script>

<style scoped>
.anime-container {
  width: 100%;
}
</style>

