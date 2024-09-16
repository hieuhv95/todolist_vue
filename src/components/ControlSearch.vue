<template>
  <div class="mb-4">
    <div class="d-flex gap-2">
      <input
        :value="strSearch"
        @input="handleSearch($event)"
        type="text"
        class="form-control"
        placeholder="Search for..."
      />
      <button class="btn btn-info" @click="clearSearch">Clear!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "control-search",
  props: {
    strSearch: { type: String, default: "" },
  },
  data() {
    return {};
  },
  methods: {
    handleSearch(e) {
      this.$emit("handleSearch", e.target.value);
    },
    clearSearch() {
      this.$emit("handleSearch", "");
    },
  },
};
</script>

<style></style>
