<template>
  <div class="mb-3">
    <b-dropdown id="dropdown-1" text="Sort by" class="me-3">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Name ASC</b-dropdown-item>
      <b-dropdown-item>Name DESC</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item>Level ASC</b-dropdown-item>
      <b-dropdown-item>Level DESC</b-dropdown-item>
    </b-dropdown>
    <span class="btn btn-success">NAME - DESC</span>
  </div>
</template>

<script>
export default {
  name: "control-sort",
  data() {
    return {};
  },
};
</script>

<style scoped>
.me-3 {
  margin-right: 1rem;
}
</style>
