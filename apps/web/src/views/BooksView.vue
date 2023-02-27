<template>
    <div>
        <h1>This is the BOOKS page</h1>

        <form @submit.prevent="createBook">
            <label for="title">Book Title:</label>
            <input type="text" id="title" v-model="title" />
            <button type="submit">Create Book</button>
        </form>

        <h2
            v-for="book in bookStore.books"
            :key="book.id"
            class="book"
            @click="bookStore.remove(book.id)"
        >
            {{ book }}
        </h2>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";

    import { useBookStore } from "../stores/bookStore";

    const bookStore = useBookStore();
    const title = ref("");

    onMounted(async () => {
        await bookStore.findAll();
    });

    const createBook = () => {
        if (!title.value.trim()) {
            alert("title field is required!");
            title.value = "";

            return;
        }

        bookStore.create({ title: title.value });
        title.value = "";
    };
</script>

<style scoped>
    .book {
        cursor: pointer;
    }
</style>
