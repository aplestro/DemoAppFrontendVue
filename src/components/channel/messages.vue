<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <div :class="$style.container">
        <v-subheader>simple text</v-subheader>
        <v-text-field
          label="simple text message"
          v-model="simpleMessage"
        ></v-text-field>

        <v-btn flat @click="sendSimpleMessage">SEND SIMPLE MESSAGE</v-btn>

        <v-subheader>open graph</v-subheader>
        <v-text-field
          label="open graph text"
          v-model="openGraphText"
        ></v-text-field>    

        <v-text-field
          label="open graph img url"
          v-model="openGraphImg"
        ></v-text-field>  

        <v-text-field
          label="open graph url"
          v-model="openGraphUrl"
        ></v-text-field>   

        <v-btn flat @click="sendOpenGraphMessage">SEND OPEN GRAPH</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import { sendSimpleMessage, sendOpenGraphMessage } from '@/providers/channelProvider'

  export default {
    data () {
      return {
        simpleMessage: '',
        openGraphText: '',
        openGraphImg: '',
        openGraphUrl: '',
        htmlMessage: ''
      }
    },
    methods:{
      sendSimpleMessage: function(){
        sendSimpleMessage({
          channelID: this.$route.params.id,
          text: this.simpleMessage
        })        
      },
      sendOpenGraphMessage: function(){
        sendOpenGraphMessage({
          channelID: this.$route.params.id,
          title: this.openGraphText,
          image: this.openGraphImg,
          url: this.openGraphUrl
        })
      }
    }
  }
</script>

<style module>
.container{
  margin: 20px;
}
</style>