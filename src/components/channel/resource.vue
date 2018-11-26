<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <div :class="$style.container">
        <div><span>The Sticker app and the Chat app use a code STICKER_IMG. Paste the code to send to the Chat app or receive resources from the Sticker app</span></div>
        
        <v-subheader>Create new resource</v-subheader>
        <v-text-field
          label="Code"
          v-model="newCode"
        ></v-text-field>

        <v-text-field
          label="data (url recomended)"
          v-model="url"
        ></v-text-field>  
        <v-btn flat @click="createNewResource">CREATE NEW RESOURCE</v-btn>

        <v-subheader>Request resource flow</v-subheader>
        <v-text-field
          label="Code"
          v-model="targetCode"
        ></v-text-field> 
        <v-text-field
          label="Message for the dialog"
          v-model="hint"
        ></v-text-field> 
        <v-btn flat @click="requestResourceFlow">REQUEST RESOURCE FLOW</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import { createNewResource, requestResourceFlow } from '@/providers/channelProvider'

  export default {
    data () {
      return {
        newCode:"",
        url:"",
        targetCode:"",
        hint:""
      }
    },
    methods:{
      createNewResource(){
        createNewResource(
          this.$route.params.id,
          this.newCode,
          this.url
        )
      },
      requestResourceFlow(){
        requestResourceFlow(
          this.targetCode,
          this.hint
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