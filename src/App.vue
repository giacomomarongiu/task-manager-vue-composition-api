<script setup lang="ts">
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import TaskListView from "./components/pages/TaskListView.vue";

import {ref, provide} from 'vue';

// Definisci un valore reattivo per il testo della barra di ricerca
const searchQuery = ref('');

// Usa `provide` per condividere il valore della ricerca con tutte le componenti figlie
provide('searchQuery', searchQuery);

// Funzione per aggiornare il valore di ricerca
const updateSearchQuery = (newQuery: string) => {
  searchQuery.value = newQuery;
};
</script>

<template>
  <!-- Emissione da AppHeader -->
  <AppHeader @updateSearchQuery="updateSearchQuery"/>
  <TaskListView/>
  <AppFooter></AppFooter>
</template>

<style scoped>

</style>
