<template>
  <div class="mb-3">
    <b-dropdown id="dropdown-1" text="Sort by" class="me-3">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item @click="handleSoft('name', 'asc')"
        >Name ASC</b-dropdown-item
      >
      <b-dropdown-item @click="handleSoft('name', 'desc')"
        >Name DESC</b-dropdown-item
      >
      <b-dropdown-divider />
      <b-dropdown-item @click="handleSoft('level', 'asc')"
        >Level ASC</b-dropdown-item
      >
      <b-dropdown-item @click="handleSoft('level', 'desc')"
        >Level DESC</b-dropdown-item
      >
    </b-dropdown>
    <span class="order btn btn-success ">{{ orderBy }} - {{ orderDir }}</span>
  </div>
</template>

<script>
export default {
  name: "control-sort",
  data() {
    return {};
  },
  props: {
    orderBy: { type: String, default: "name" },
    orderDir: { type: String, default: "asc" },
  },
  methods: {
    handleSoft(orderBy, orderDir) {
      let data = { orderBy, orderDir };
      // console.log("Emitting handleSort with data:", data);
      this.$emit("handleSort", data);
    },
  },
};
</script>

<style scoped>
.me-3 {
  margin-right: 1rem;
}
.order {
  text-transform: uppercase;
}
</style>
