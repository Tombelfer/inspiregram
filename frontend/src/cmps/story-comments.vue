<template>
  <div class="story-comments">
    <div v-for="comment in comments" :key="comment._id">
      <div>
        <span>
      <router-link to="/" class="autor-name comment">
        {{ comment.by.fullname }}
      </router-link>
        </span>
        <span>
      <p class="comment-txt">
        {{ comment.txt }}
      </p>
        </span>
      </div>
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