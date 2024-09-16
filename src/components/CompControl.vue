<template>
  <div class="mb-4">
    <b-row>
      <b-col>
        <control-sort />
      </b-col>
      <b-col>
        <control-search @handleSearch="handleSearch" :strSearch="strSearch" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ControlSearch from "./ControlSearch.vue";
import ControlSort from "./ControlSort.vue";
export default {
  components: { ControlSort, ControlSearch },
  name: "comp-control",
  props: {
    strSearch: { type: String, default: "" },
  },
  data() {
    return {};
  },
  methods: {
    handleSearch(data) {
      this.$emit("handleSearch", data);
    },
  },
};
</script>

<style></style>
