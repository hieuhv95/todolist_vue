<template>
  <div id="app">
    <div class="container mt-5">
      <!-- Title -->
      <h2 class="text-center mb-4">Project 01 - ToDo List VueJs</h2>

      <!-- Sort By Section -->
      <div class="d-flex justify-content-center align-items-center mb-3">
        <button class="btn btn-secondary me-2">Sort by</button>
        <button class="btn btn-success">NAME - DESC</button>
      </div>

      <!-- Search and Clear Section -->
      <div class="row justify-content-center mb-4">
        <div class="col-md-6 d-flex">
          <input
            type="text"
            class="form-control me-2"
            placeholder="Search for..."
          />
          <button class="btn btn-info">Clear!</button>
        </div>
      </div>

      <!-- Add Task Button -->
      <div class="row justify-content-center mb-4">
        <div class="col-md-6 text-center">
          <button class="btn btn-primary w-100">Add Task</button>
        </div>
      </div>

      <!-- Add Task Form -->
      <div class="row justify-content-center mb-4">
        <div
          class="col-md-10 d-flex justify-content-between align-items-center"
        >
          <input
            type="text"
            class="form-control me-3"
            placeholder="Task Name"
          />
          <select class="form-select me-3">
            <option selected>Small</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button class="btn btn-primary me-2">Submit</button>
          <button class="btn btn-secondary">Cancel</button>
        </div>
      </div>

      <!-- Task List Section -->
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
              <tr>
                <td>1</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>High</td>
                <td>
                  <button class="btn btn-warning btn-sm">Edit</button>
                  <button class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>Small</td>
                <td>
                  <button class="btn btn-warning btn-sm">Edit</button>
                  <button class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>Medium</td>
                <td>
                  <button class="btn btn-warning btn-sm">Edit</button>
                  <button class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
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

h2 {
  font-weight: bold;
  color: #007bff;
}

.btn-info {
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-primary {
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

.btn-warning {
  color: white;
}

.btn-danger {
  color: white;
}
</style>
