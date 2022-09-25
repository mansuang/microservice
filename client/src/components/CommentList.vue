<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="comment in maskComments">{{ comment.content }}</li>
    </ul>
</template>

<script>
export default {
    props: ['comments'],
    computed: {
        maskComments() {
            return this.comments.map((comment) => {
                if (comment.status === "pending") {
                    comment.content = "This comment is awaiting moderation";
                }

                if (comment.status === "rejected") {
                    comment.content = "This comment has been rejected";
                }

                return comment;
            });

        }
    }
}
</script>