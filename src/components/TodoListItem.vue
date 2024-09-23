<template>
  <tr>
    <td>{{ index }}</td>
    <td>
      {{ task.name }}
    </td>
    <td class="text-center">
      <span class="badge " :class="classLevel">{{ getLevelName }}</span>
    </td>
    <td>
      <button class="btn btn-warning btn-sm">Edit</button>
      <button @click="handleDelete" class="btn btn-danger btn-sm">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
import mapLevel from "../mocks/level";
export default {
  name: "todo-list-item",
  props: {
    task: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  created() {
    console.log("todolist=", mapLevel);
  },
  computed: {
    getLevelName() {
      const level = this.mapLevel[this.task.level];
      return level ? level.name : "Unknown"; // Kiểm tra nếu level không tồn tại
    },
    classLevel() {
      const level = this.mapLevel[this.task.level];
      return level ? level.class : ""; // Kiểm tra nếu level không tồn tại
    },
  },

  methods: {
    handleDelete() {
      this.$emit("handleDelete", this.task);
    },
  },
  data() {
    return {
      mapLevel,
    };
  },
};
</script>

<style></style>
