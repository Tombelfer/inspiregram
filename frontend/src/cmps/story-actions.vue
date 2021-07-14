<template>
  <div class="">
    <button>like</button>
    <button>comment</button>
    <button>send</button>
    {{story.likedBy.length}} likes

  </div>
</template>

<script>

export default {
  name: 'story-actions',
  props: {
   story:Object
  }
}
</script>