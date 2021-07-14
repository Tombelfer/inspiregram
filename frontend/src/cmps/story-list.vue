<template>
  <div class="story-list">
    <div v-for="story in stories" :key="story._id">
    <storyPreview :story="story"></storyPreview>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import storyPreview from '@/cmps/story-preview.vue'

export default {
  name: 'feed',
  props:{
    stories:Array
  },
  components: {
    storyPreview
  }
}
</script>