<script setup lang="ts">

import {Task} from "../../../types/Task.ts";

const props = defineProps<{
  task: Task
}>();

</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <!-- Visualizza il titolo del task -->
    <div>
      <strong>{{ task.title }}</strong>
      <p class="mb-0 text-muted">{{ task.description }}</p>
      <span class="badge bg-info">{{ task.status }}</span>
    </div>

    <!-- Pulsanti di azione: Edit e Delete -->
    <div>
      <button class="btn btn-sm btn-warning me-2">Edit</button>
      <button class="btn btn-sm btn-danger">Delete</button>
    </div>
  </li>
</template>

<style scoped>

</style>