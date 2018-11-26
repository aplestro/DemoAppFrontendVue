<template>
  <v-app>
    <change-channel/>

    <v-divider></v-divider>

    <messages/>

    <v-divider></v-divider>

    <resource/>

    <v-divider></v-divider>

    <intentions/>
  </v-app>
</template>

<script>
  import ChangeChannel from '@/components/channel/changeChannel'
  import Messages from '@/components/channel/messages'
  import Resource from '@/components/channel/resource'
  import Intentions from '@/components/channel/intentions'

  export default {
    data () {
      return {
        
      }
    },
    components: { ChangeChannel, Messages, Resource, Intentions }
  }
</script>

<style module>
.container{
  margin: 20px;
}
</style>