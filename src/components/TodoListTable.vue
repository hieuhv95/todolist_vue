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
        <tbody>
          <todo-list-item
            v-for="(task, index) in listTask"
            v-bind:key="task.id"
            v-bind:task="task"
            v-bind:index="index + 1"
          />
          <!-- <todo-list-item />
          <todo-list-item /> -->
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
};
</script>

<style></style>
