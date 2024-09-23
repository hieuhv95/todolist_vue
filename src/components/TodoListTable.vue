<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="listTask.length !== 0">
          <todo-list-item
            v-for="(task, index) in listTask"
            v-bind:key="task.id"
            v-bind:task="task"
            v-bind:index="index + 1"
            @handleDelete="handleDeleteTask"
          />
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="4"><h3>List Empty</h3></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  components: { TodoListItem },
  name: "todo-list-table",
  props: {
    listTask: { type: Array, default: [] },
  },
  data() {
    return {};
  },
  methods: {
    handleDeleteTask(data) {
      console.log("delete", data);
      this.$emit("handleDeleteTask", data);
    },
  },
};
</script>

<style></style>
