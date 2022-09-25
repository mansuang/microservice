<template>
  <main class="container">
    <PostCreate @update="queryData" />
    <hr>
    <div class="spinner-border" role="status" v-if="loading">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-for="(post,postId) in posts" :key="postId">
      <h2>{{ post.title }}</h2>
      <CommentList :comments="post.comments" />
      <CommentCreate :postId="postId" @update="queryData" />
    </div>

  </main>
</template>

<script>
import PostCreate from './components/PostCreate.vue';
import CommentCreate from './components/CommentCreate.vue';
import CommentList from './components/CommentList.vue';
export default {
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  components: { PostCreate, CommentCreate, CommentList },
  methods: {
    async queryData() {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      let posts = await this.axios.get('http://my-app.com/query/posts')
      this.posts = posts.data
      this.loading = false;
    }
  },
  created() {
    this.queryData();

  }
}
</script>

<style scoped>

</style>
