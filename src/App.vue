<script setup lang="ts">
import BoardLayout from "./components/BoardLayout.vue";
</script>

<template>
  <BoardLayout class="layout" />
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  flex-grow: 1;
  align-self: stretch;
  background-color: rgba(0, 73, 73, 0);
  padding: 5px;
  // border-radius: 3px;
  user-select: none;
}
</style>
