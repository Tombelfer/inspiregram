<template>
  <div class="feed">
    <storyList :stories="stories"/>
    <!-- {{this.stories}} -->
  </div>
</template>

<script>
// @ is an alias to /src
import storyList from '@/cmps/story-list.vue'
import {storiesService, storyService} from '../services/story-service'

export default {
  name: 'feed',
  components: {
    storyList
  },
  data(){
    return{
      stories:[]
    }
  },
  created(){
    this.loadStories()
  },
  methods:{
    loadStories(){
      this.stories = storiesService.query()
      console.log(storiesService.query())
        
    }
  }
}
</script>
