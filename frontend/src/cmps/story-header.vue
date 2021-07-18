<template>
  <header class="story-header">
    <router-link to="/profile">
      <img class="user-mid-img" :src="story.by.imgUrl" />
    </router-link>
    <router-link to="/profile" class="autor-name">
      {{ story.by.fullname }}
    </router-link>
  </header>
</template>

<script>
export default {
  name: "story-header",
  props: {
    story: Object,
  },
};
</script>

