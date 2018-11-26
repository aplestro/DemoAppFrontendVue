<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <div :class="$style.container">
        <v-subheader>Intentions</v-subheader>

        <div><span>The Bookmark app uses the code SHARE_OPEN_GRAPH. Paste this code to send the intention to the Bookmark app. Insert the RSS intent data you received earlier</span></div>
        
        <v-text-field
          label="intention code"
          v-model="code"
        ></v-text-field>

        <v-text-field
          label="preview text"
          v-model="previewText"
        ></v-text-field>

        <v-text-field
          label="preview img (url)"
          v-model="previewImg"
        ></v-text-field>   

        <v-text-field
          label="intention data"
          v-model="data"
        ></v-text-field>    
        <v-btn flat @click="sendIntention">Send</v-btn>

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import { sendIntention } from '@/providers/channelProvider'

  export default {
    data () {
      return {
        code:"",
        previewText:"",
        previewImg:"",
        data:""
      }
    },
    methods:{
      sendIntention(){
        sendIntention(
          this.code,
          this.previewText,
          this.previewImg,
          this.data
        )
      }
    }
  }
</script>

<style module>
.container{
  margin: 20px;
}
</style>