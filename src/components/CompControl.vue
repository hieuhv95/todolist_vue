<template>
  <div class="mb-4">
    <b-row>
      <b-col>
        <control-sort
          @handleSort="handleSort"
          :orderBy="orderBy"
          :orderDir="orderDir"
        />
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
    orderBy: { type: String, default: "name" },
    orderDir: { type: String, default: "asc" },
  },
  data() {
    return {};
  },
  methods: {
    handleSearch(data) {
      this.$emit("handleSearch", data);
    },
    handleSort(data) {
      // console.log("Data received from child:", data);
      this.$emit("handleSort", data);
    },
  },
};
</script>

<style></style>
