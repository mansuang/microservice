<template>
  <form @submit.prevent="postMessage">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Title</label>
      <input class="form-control" v-model="title">
    </div>
    <div class="mb-3">
      <button className="btn btn-primary">Submit</button>
    </div>

  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    async postMessage() {
      console.log('post title')
      await this.axios.post("http://localhost:4000/posts", {
        title: this.title,
      });

      this.title = '';

      this.$emit('update')
    }
  }
}
</script>