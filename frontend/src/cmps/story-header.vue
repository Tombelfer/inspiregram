<template>
  <div class="story-header">
    <router-link to="/">
      <img class="user-mid-img" :src="story.by.imgUrl" />
    </router-link>
    <router-link to="/">
      {{ story.by.fullname }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "story-header",
  props: {
    story: Object,
  },
};
</script>

