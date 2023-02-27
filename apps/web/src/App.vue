<template>
    <div>
        <h2>
            <router-link :to="{ name: 'home' }">Home</router-link>
            |
            <router-link :to="{ name: 'books' }">Books</router-link>
        </h2>
    </div>

    <router-view />
</template>

<script setup lang="ts">
    //
</script>

<style scoped>
    /*  */
</style>
