<template>
  <div id="app">
    <b-container>
      <comp-title />
      <comp-control
        :orderBy="orderBy"
        :orderDir="orderDir"
        :strSearch="strSearch"
        @handleSearch="handleSearch"
        @handleSort="handleSoft"
      />
      <comp-form
        @handleAddTask="handleAddTask"
        :isShowForm="isShowForm"
        @toggleForm="toggleForm"
      />

      <todo-list-table
        :listTask="listTaskFiltered"
        @handleDeleteTask="handleDeleteTask"
      />
    </b-container>
  </div>
</template>

<script>
import CompControl from "./components/CompControl.vue";
import CompForm from "./components/CompForm.vue";
import CompTitle from "./components/CompTitle.vue";
import TodoListTable from "./components/TodoListTable.vue";
import listTask from "./mocks/task";
export default {
  components: { TodoListTable, CompTitle, CompControl, CompForm },
  name: "app",
  data() {
    return {
      listTask: listTask,
      isShowForm: false,
      strSearch: "",
      orderBy: "name",
      orderDir: "asc",
    };
  },
  computed: {
    listTaskFiltered() {
      return this.listTask
        .filter((item) =>
          item.name.toLowerCase().includes(this.strSearch.toLowerCase())
        )
        .sort(this.compareSort);
    },
  },
  methods: {
    compareSort(a, b) {
      let numberSort = this.orderDir === "asc" ? 1 : -1; // Sắp xếp asc/desc
      if (a[this.orderBy] < b[this.orderBy]) return -1 * numberSort;
      if (a[this.orderBy] > b[this.orderBy]) return 1 * numberSort;
      return 0;
    },
    handleSearch(data) {
      this.strSearch = data;
    },
    toggleForm() {
      this.isShowForm = !this.isShowForm;
    },
    handleSoft(data) {
      // console.log("Data received from comp-control:", data);
      this.orderBy = data.orderBy;
      this.orderDir = data.orderDir;
    },
    handleDeleteTask(taskDelete) {
      if (
        confirm(`Bạn có chắc chắn muốn xóa task "${taskDelete.name}" không?`)
      ) {
        this.listTask = this.listTask.filter(
          (task) => task.id !== taskDelete.id
        );
      }
    },
    handleAddTask(task) {
      this.listTask.push(task);
      this.isShowForm = false;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: bold;
  color: #007bff;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

.btn-danger,
.btn-warning {
  color: white;
}
</style>
