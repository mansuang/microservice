<template>
    <div>
        <form @submit.prevent="createComment(postId)">
            <div className="form-group input-group-sm">
                <label>New Comment</label>
                <input v-model="content" className="form-control" size="xs" />
            </div>
            <button className="btn btn-outline-primary btn-sm">Comment</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['postId'],
    data() {
        return {
            content: ''
        }
    },
    methods: {
        async createComment(postId) {
            await this.axios.post(`http://localhost:4001/posts/${this.postId}/comments`, {
                content: this.content,
            });

            this.content = '';

            this.$emit('update')
        }
    }
}
</script>