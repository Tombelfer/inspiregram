<template>
  <div class="list">
    <storyPreview></storyPreview>
  </div>
</template>

<script>
// @ is an alias to /src
import storyPreview from '@/cmps/story-preview.vue'

export default {
  name: 'feed',
  components: {
    storyPreview
  }
}
</script>