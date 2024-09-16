<template>
  <div id="app">
    <b-container>
      <comp-title />
      <comp-control :strSearch="strSearch" @handleSearch="handleSearch" />
      <comp-form v-bind:isShowForm="isShowForm" v-on:toggleForm="toggleForm" />

      <todo-list-table v-bind:listTask="listTask" />
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
    };
  },
  computed: {
    listTaskSearch() {
      const { strSearch } = this;
      var newItems = [];
      this.listTask.forEach((item, index) => {
        if (item.name.includes(strSearch) === true) {
          newItems.push(item);
        }
      });
      console.log("Filtered newItems =", newItems);
      return newItems;
    },
  },
  methods: {
    handleSearch(data) {
      this.strSearch = data;
    },
    toggleForm() {
      this.isShowForm = !this.isShowForm;
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
