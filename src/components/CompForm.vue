<template>
  <b-row>
    <b-col>
      <form-add
        v-bind:isShowForm="isShowForm"
        v-on:handleAddTask="handleAddTask"
      />
      <form v-if="isShowForm" action="" method="" class="mb-4 d-flex gap-3">
        <input type="text" class="form-control me-3" placeholder="Task Name" />
        <select class="form-select me-3">
          <option selected>Small</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button class="btn btn-primary me-3">Submit</button>
        <button v-on:click="handleCancle" class="btn btn-secondary">
          Cancel
        </button>
      </form>
    </b-col>
  </b-row>
</template>

<script>
import FormAdd from "./FormAdd.vue";
export default {
  components: { FormAdd },
  name: "comp-form",
  props: {
    isShowForm: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  methods: {
    handleAddTask() {
      // console.log("Received handleAddTask event");
      this.$emit("toggleForm");
    },
    handleCancle() {
      this.$emit("toggleForm");
    },
  },
};
</script>

<style>
.me-3 {
  margin-right: 1rem;
}
</style>
