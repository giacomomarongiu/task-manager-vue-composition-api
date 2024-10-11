<script setup lang="ts">
import {ref} from 'vue'
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

const addIntoTasks = (task: Task): void => {
  task.id = tasks.value.length + 1;
  tasks.value.push(task);
};

</script>

<template>

  <div class="container mt-5">
    <!-- Titolo -->
    <h2 class="text-center">Task Management</h2>

    <TaskInput @addNewTask="addIntoTasks($event)"/>

    <!-- Lista delle Attività -->
    <div class="row">
      <div class="col-md-8 mx-auto">
        <ul class="list-group">

          <!-- TaskCard component -->
          <TaskCard v-for="task in tasks" :task="task"/>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
