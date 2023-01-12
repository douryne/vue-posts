import axios from "axios";
import { ref, readonly } from "vue";

export type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export type PostsStore = {
    data: Post[] | null,
    loading: boolean,
    error: Error | null
}

const store = ref<PostsStore>({
    data: null,
    loading: true,
    error: null
})

export function setPosts(posts: Post[]) {
    store.value.data = posts;
}

export function createPost(post: Post) {
    if(!store.value.data) return;
    const postCopy = JSON.parse(JSON.stringify(post));
    setPosts([...store.value.data, postCopy]);
}

export function deletePost(postId: Post["id"]) {
    if(!store.value.data) return;
    const filteredPosts = store.value.data.filter(({id}) => id !== postId);
    setPosts([...filteredPosts]);
}

export function getPosts() {
    if(store.value.data || store.value.error) return readonly(store);

    async function fetchPosts() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
            store.value.data = response.data;
        } catch(e) {
            store.value.error = (e as Error);
        } finally {
            store.value.loading = false;
        }
        
    }

    setTimeout(() => {
        fetchPosts();
    }, 1500)

    return readonly(store);
}