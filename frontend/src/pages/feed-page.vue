<template>
  <div class="feed">
    <storyList />
  </div>
</template>

<script>
// @ is an alias to /src
import storyList from '@/cmps/story-list.vue'

export default {
  name: 'feed',
  components: {
    storyList
  }
}
</script>
