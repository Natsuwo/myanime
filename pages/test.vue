<template>
  <div class="container">
    <v-flex xs12>
      <v-text-field v-model="content" label="Chat"></v-text-field>
    </v-flex>
    <v-btn @click="submit">Submit</v-btn>
    {{data}}
  </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
export default {
  data() {
    return {
      content: "",
      data: ""
    };
  },
  beforeCreate() {
    socket.on("data", (data) => {
      this.data = data
    })
  },
  methods: {
     submit() {
      socket.emit("user")
    }
  }
};
</script>
