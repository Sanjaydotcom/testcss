<script setup>
definePageMeta({
  layout: "app",
});
</script>

<script>
import Directory from "./employees/-components/Directory.vue";
export default {
  components: {
    Directory,
  },
};
</script>

<template>
  <NuxtChild />
  <aside
    class="
      hidden
      max-h-screen
      w-96
      flex-shrink-0
      border-r border-gray-200
      xl:order-first xl:flex xl:flex-col
    "
  >
    <Directory />
  </aside>
</template>
