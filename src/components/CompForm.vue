<template>
  <b-row>
    <b-col>
      <form-add
        v-bind:isShowForm="isShowForm"
        v-on:handleToggleForm="handleToggleForm"
      />
      <form
        v-if="isShowForm"
        @submit.prevent="handleAddNew"
        class="mb-4 d-flex gap-3"
      >
        <input
          v-model="taskname"
          type="text"
          class="form-control me-3"
          placeholder="Task Name"
          required
        />
        <select v-model="level" class="form-select me-3" required="required">
          <option value="0">Small</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>
        <button type="submit" class="btn btn-primary me-3">
          Submit
        </button>
        <button @click="handleCancle" class="btn btn-secondary">
          Cancel
        </button>
      </form>
    </b-col>
  </b-row>
</template>

<script>
import FormAdd from "./FormAdd.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { FormAdd },
  name: "comp-form",
  props: {
    isShowForm: { type: Boolean, default: false },
  },
  data() {
    return {
      taskname: "",
      level: 0,
    };
  },
  methods: {
    handleToggleForm() {
      this.$emit("toggleForm");
    },
    handleCancle() {
      this.$emit("toggleForm");
      this.handleResetForm();
    },
    handleAddNew() {
      let newTask = {
        id: uuidv4(),
        name: this.taskname,
        level: parseInt(this.level),
      };
      this.$emit("handleAddTask", newTask);
      this.handleCancle();
    },
    handleResetForm() {
      this.taskname = "";
      this.level = 0;
    },
  },
};
</script>

<style>
.me-3 {
  margin-right: 1rem;
}
</style>
