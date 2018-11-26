<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <div :class="$style.container">
        <v-btn flat @click="requestAplestro">REQUEST USER INFO</v-btn>
        <v-btn flat @click="requestServer">SERVER HAS USER INFO</v-btn>
        
        <v-list-tile avatar v-if="userData && userData.userID">
          <v-list-tile-avatar>
              <img :src="userData.userimg">
          </v-list-tile-avatar>
          <v-list-tile-content>
              <v-list-tile-title v-text="userData.username"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import { requestAplestroUserInfo, requestServerUserInfo } from '@/providers/appProvider'

  export default {
    data () {
      return {
        userData: {}
      }
    },
    methods:{
      requestAplestro: function(){
        requestAplestroUserInfo();
      },
      requestServer: async function(){
        this.userData = await requestServerUserInfo();
      }
    }
  }
</script>

<style module>
.container{
  margin: 20px;
}
</style>