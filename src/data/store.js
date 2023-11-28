import { reactive } from "vue";

export const store = reactive({
    loading: true,
    posts: [],
    API: "http://localhost:3000/posts"
});