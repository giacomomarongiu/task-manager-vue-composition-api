<script setup lang="ts">

import {Task} from "../../../types/Task.ts";
import {ref} from "vue";

// Props per il componente TaskCard
const props = defineProps<{
  task: Task
}>();

// Emits per comunicare con il componente genitore
const emit = defineEmits({
  'update-task': (task: Task) => true,
  'delete-task': (task: Task) => true
});

// Stato locale per la modalità di modifica
const isEditing = ref(false);

// Clonare i dati del task per modificarli senza alterare l'originale
const editableTask = ref({...props.task});

// Funzione per entrare in modalità modifica
const editTask = () => {
  isEditing.value = true;
  editableTask.value = {...props.task};
};

// Funzione per salvare le modifiche
const saveTask = () => {
  // Qui puoi emettere un evento per notificare il componente genitore delle modifiche
  emit('update-task', editableTask.value);
  isEditing.value = false;
  console.log('Task salvato:', editableTask.value);
};

// Funzione per annullare la modifica
const cancelEdit = () => {
  isEditing.value = false;
  editableTask.value = {...props.task}; // Reset delle modifiche
};

const deleteTask = () => {
  emit('delete-task', props.task);
};

</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <!-- Se siamo in modalità editing, visualizza gli input modificabili -->
    <div v-if="isEditing">
      <input v-model="editableTask.title" class="form-control mb-2"/>
      <input v-model="editableTask.description" class="form-control mb-2"/>
      <select v-model="editableTask.status" class="form-select">
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    <!-- Altrimenti visualizza i campi normali -->
    <div v-else>
      <strong>{{ task.title }}</strong>
      <p class="mb-0 text-muted">{{ task.description }}</p>
      <span class="badge bg-info">{{ task.status }}</span>
    </div>

    <!-- Pulsanti di azione: Edit, Save, Cancel e Delete -->
    <div>
      <button v-if="!isEditing" @click="editTask" class="btn btn-sm btn-warning me-2">Edit</button>
      <button v-if="isEditing" @click="saveTask" class="btn btn-sm btn-success me-2">Save</button>
      <button v-if="isEditing" @click="cancelEdit" class="btn btn-sm btn-secondary me-2">Cancel</button>
      <button @click="deleteTask" class="btn btn-sm btn-danger">Delete</button>
    </div>
  </li>
</template>

<style scoped>

</style>