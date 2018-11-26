<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <div :class="$style.container">
        <v-subheader>Edit channel info</v-subheader>
        <v-text-field
          label="Channel name"
          v-model="channelName"
        ></v-text-field>

        <v-text-field
          label="Channel avatar"
          v-model="channelAvatar"
        ></v-text-field>  

        <v-text-field
          label="Channel name for this user"
          v-model="channelNameForUser"
        ></v-text-field>  

        <v-text-field
          label="intentions"
          v-model="intentions"
        ></v-text-field>  

        <v-text-field
          label="intentions for this user"
          v-model="userIntentions"
        ></v-text-field>  

        <v-btn flat @click="editChannel">EDIT</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import { editChannel } from '@/providers/channelProvider'

  export default {
    data () {
      return {
        isLoad:false,
        channelName: "",
        channelAvatar:"",
        channelNameForUser:"",
        intentions:"",
        userIntentions:""
      }
    },
    methods:{
      editChannel: async function(){
        editChannel({
          channelID: this.$route.params.id,
          channelName: this.channelName,
          channelAvatar: this.channelAvatar,
          channelNameForUser: this.channelNameForUser,
          channelIntentions: this.intentions,
          userIntentions: this.userIntentions
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