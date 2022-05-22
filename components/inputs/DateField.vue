<template>
  <div>
    <label for="first-name" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <input
      v-bind:name="name"
      v-bind:type="type"
      v-bind:id="id"
      autocomplete="given-name"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
</template>

<script>
export default {
  name: "DateField",
  props: ["label", "name", "id", "type"],
};
</script>
