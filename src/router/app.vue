<template>
  <v-app>
    <v-progress-circular indeterminate color="primary" v-if="isLoad"></v-progress-circular>
    <v-layout row v-else>
      <v-flex xs12 sm6 offset-sm3>
        <div :class="$style.container">
          <v-subheader>Create new channel</v-subheader>
          <v-text-field
            label="Channel name"
            v-model="channelName"
          ></v-text-field>

          <v-text-field
            label="Channel avatar"
            v-model="channelAvatar"
          ></v-text-field>

          <v-text-field
            label="intentions"
            v-model="channelIntentions"
          ></v-text-field>  
          
          <div><span>The Bookmark app uses a code SHARE_OPEN_GRAPH. Paste the code to receive intentions from RSS app</span></div>

          <v-checkbox v-model="isPrivate" label="Private channel"></v-checkbox>      

          <v-btn flat @click="createChannel">CREATE</v-btn>
        </div>

        <v-divider></v-divider>

        <request-user-info/>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import { createChannel } from '@/providers/appProvider'
  import RequestUserInfo from '@/components/app/requestUserInfo'

  export default {
    data () {
      return {
        isLoad:false,
        channelName: "",
        channelAvatar:"",
        channelIntentions:"",
        isPrivate: false
      }
    },
    methods:{
      createChannel: async function(){
        this.isLoad = true;
        createChannel({
          channelName: this.channelName,
          channelAvatar: this.channelAvatar,
          channelIntentions: this.channelIntentions,
          isPrivate: this.isPrivate,
          success: ()=>{
            this.isLoad = false;
          },
          error: ()=>{
            this.isLoad = false;
          }
        })
      }
    },
    components: {RequestUserInfo}
  }
</script>

<style module>
.container{
  margin: 20px;
}
</style>