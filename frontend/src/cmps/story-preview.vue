<template>
  <article class="story-preview">
    <storyHeader :story="story"></storyHeader>
    <img :src="story.imgUrl" class="story-preview-img" />
    <section class="story-preview-interaction">
      <storyActions :story="story"></storyActions>
      <section class="like-count">{{ story.likedBy.length }} likes</section>
      <storyComments :story="story" :comments="comments"></storyComments>
      <addComment></addComment>
    </section>
  </article>
</template>

<script>
import storyActions from "./story-actions.vue";
import storyComments from "./story-comments.vue";
import storyHeader from "./story-header.vue";
import addComment from "./add-comment.vue";
export default {
  name: "story-preview",
  props: {
    story: Object,
  },
  computed: {
    comments() {
      return this.story.comments;
    },
  },
  components: {
    storyComments,
    storyHeader,
    storyActions,
    storyComments,
    addComment,
  },
};
</script>