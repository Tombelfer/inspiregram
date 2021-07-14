<template>
  <div class="story-comments">
    <div v-for="comment in comments" :key="comment._id">
      <!-- <img :src="comment.by.imgUrl" alt=""> -->
      {{comment.by.fullname}} {{ comment.txt }}
    </div>
  </div>
</template>

<script>
export default {
  name: "story-comments",
  props: {
    story: Object,
    comments: Array,
  },
};
</script>