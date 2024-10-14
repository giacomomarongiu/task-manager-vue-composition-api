<script setup lang="ts">
import {defineEmits, ref} from 'vue';

// Definisci l'emissione per l'aggiornamento della query
const emit = defineEmits({
  'updateSearchQuery': (query: string) => true
});
const searchQuery = ref('');

const updateSearch = () => {
  emit('updateSearchQuery', searchQuery.value);
};
</script>

<template>
  <!-- Barra di ricerca -->
  <form class="d-flex">
    <input
        v-model="searchQuery"
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        @keyup="updateSearch"
    />
  </form>
</template>

<style scoped>

</style>