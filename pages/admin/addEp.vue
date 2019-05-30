<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 xl12>
          <v-text-field v-model="epTitle" label="Episode Title"></v-text-field>
        </v-flex>
        <v-flex xs12 xl12>
          <v-text-field v-model="epNum" label="Episode Number"></v-text-field>
        </v-flex>
        <v-flex xs12 xl12>
          <v-text-field v-model="linkPlay" label="Link Play"></v-text-field>
        </v-flex>
      <v-btn @click="submit">Submit</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import shortid from 'shortid';
import axios from 'axios';
export default {
  data: () => ({
    valid: false,
    epTitle: "",
    epNum: "",
    linkPlay: ""
  }),
  methods: {
    submit() {
      const fieldEp = {};
      fieldEp.episodeNum = this.epNum;
      fieldEp.episodeTitle = this.epTitle;
      fieldEp.linkPlay = this.linkPlay;
      fieldEp.createAt = Date.now();
      fieldEp.episodeId = shortid.generate();
      axios.post('https://myanime-nuxt.firebaseio.com/episodes.json', fieldEp);
    }
  }
};
</script>