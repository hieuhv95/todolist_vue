<template>
  <div class="row justify-content-center mb-4">
    <div class="col-12">
      <button
        v-if="!isShowForm"
        v-on:click="onClickAddTask"
        type="button"
        class="btn btn-primary btn-block"
      >
        Add Task
      </button>
      <button
        v-else
        v-on:click="onClickAddTask"
        type="button"
        class="btn btn-info btn-block"
      >
        Close form
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-add",
  props: {
    isShowForm: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  methods: {
    onClickAddTask() {
      // console.log("Clicked add task button");
      this.$emit("handleAddTask");
    },
  },
};
</script>

<style></style>
