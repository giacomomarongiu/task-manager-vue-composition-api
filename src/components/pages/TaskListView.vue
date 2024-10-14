<script setup lang="ts">
import {ref, inject, computed, Ref} from 'vue'
import TaskCard from "./partials/TaskCard.vue";
import TaskInput from "./partials/TaskInput.vue";
import {Task} from "../../types/Task.ts";

// Definizione iniziale dell'array `tasks` con alcuni task predefiniti
const tasks = ref<Task[]>([
  {id: 1, title: "Learn Vue.js", description: "Learn the basics of Vue 3 framework", status: "Work in Progress"},
  {
    id: 2,
    title: "Complete Project",
    description: "Finish the personal project on portfolio website",
    status: "Completed"
  },
  {id: 3, title: "Exercise", description: "Do 30 minutes of exercise every morning", status: "Work in Progress"}
]);

// Accedi al valore della ricerca tramite `inject`
const searchQuery = inject<Ref<string>>('searchQuery');

// Funzione per filtrare i task in base alla query di ricerca
const filteredTasks = computed(() => {
  return tasks.value.filter(task =>
      searchQuery?.value // Verifica se searchQuery è definito
          ? task.title.toLowerCase().includes(searchQuery.value.toLowerCase())
          : true // Se `searchQuery` non è definito, restituisci tutti i task
  );
});


// Funzione per aggiungere un nuovo task all'array gestendo l'evento della componente TaskInput
const addIntoTasks = (task: Task): void => {
  task.id = tasks.value.length + 1;
  tasks.value.push(task);
};
// Funzione per aggiornare un task esistente nell'array gestendo l'evento della componente TaskCard
const updateTask = (updatedTask: Task): void => {
  const index = tasks.value.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.value[index] = updatedTask;
  }
};
// Funzione per eliminare un task dall'array gestendo l'evento della componente TaskCard
const deleteTask = (task: Task): void => {
  const index = tasks.value.findIndex(t => t.id === task.id);
  // Rimuovere il task dall'array
  if (index !== -1) {
    tasks.value.splice(index, 1);
  }
};

</script>

<template>
  <p>Current Search: {{ searchQuery }}</p>
  <div v-if="filteredTasks" class="container mt-5">
    <!-- Titolo -->
    <h2 class="text-center">Task Management</h2>

    <!-- Input per aggiungere un nuovo task -->
    <TaskInput @addNewTask="addIntoTasks($event)"/>

    <!-- Lista delle Attività -->
    <div class="row">
      <div class="col-md-8 mx-auto">
        <ul class="list-group">

          <!-- TaskCard component -->
          <TaskCard @deleteTask="deleteTask" @updateTask="updateTask" v-for="task in filteredTasks" :task="task"/>
        </ul>
      </div>
    </div>
  </div>
  <div v-else> Non hai tasks da fare, riposati.</div>
</template>


<style scoped>

</style>
