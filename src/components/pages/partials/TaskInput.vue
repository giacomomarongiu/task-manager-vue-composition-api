<script setup lang="ts">
import {ref} from "vue";
import {Task} from "../../../types/Task.ts";

const emit = defineEmits<{ (e: 'addNewTask', task: Task): void }>();
const newTask = ref<Task>({
  id: 0,
  title: "",
  description: "",
  status: "Work in Progress"
});


const addNewTask = (): void => {
  emit("addNewTask", newTask.value);
  newTask.value = {
    id: 0,
    title: "",
    description: "",
    status: "Work in Progress"
  };
  //console.log(newTask.value);
};

</script>

<template>
  <!-- Sezione di Aggiunta Attività -->
  <div class="row mb-4">
    <div class="col-md-8 mx-auto">
      <!-- Riga per il Titolo dell'attività -->
      <div class="mb-3">
        <label for="task-title" class="form-label">Task Title</label>
        <input
            id="task-title"
            type="text"
            class="form-control"
            placeholder="Enter the task title..."
            v-model="newTask.title"
        />
      </div>

      <!-- Riga per la Descrizione dell'attività (textarea per più spazio) -->
      <div class="mb-3">
        <label for="task-description" class="form-label">Task Description</label>
        <textarea
            id="task-description"
            class="form-control"
            rows="4"
            placeholder="Enter the task description..."
            v-model="newTask.description"
        ></textarea>
      </div>

      <!-- Riga per lo Stato dell'attività -->
      <div class="mb-3">
        <label for="task-status" class="form-label">Task Status</label>
        <select id="task-status" class="form-select" v-model="newTask.status">
          <option value="Work in Progress">Work in Progress</option>
          <option value="Completed">Completed</option>
          <option value="Aborted">Aborted</option>
        </select>
      </div>

      <!-- Pulsante per aggiungere il task -->
      <div class="text-end">
        <button @click="addNewTask" type="button" class="btn btn-primary">Add Task</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Stile per personalizzare la larghezza e spaziatura */
#task-title {
  width: 100%;
}

#task-description {
  width: 100%;
  min-height: 100px;
}

#task-status {
  width: 100%;
}
</style>
