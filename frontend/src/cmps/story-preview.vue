<template>
  <div class="story-preview">
    <storyHeader :story="story"></storyHeader>
    <img :src="story.imgUrl" class="story-preview-img">
    <section class="story-preview-interaction">
      <storyActions :story="story"></storyActions>
    </section>
    <storyComments :story="story" :comments="comments"></storyComments>
  </div>
</template>

<script>
import storyActions from './story-actions.vue'
import storyComments from './story-comments.vue'
import storyHeader from './story-header.vue'
export default {
  name: 'story-preview',
  props: {
   story:Object
  },
  computed:{
    comments(){
      return this.story.comments
    }
  },
  components:{
    storyComments,
    storyHeader,
    storyActions,
    storyComments
  }
  
}
</script>