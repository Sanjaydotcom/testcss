<template>
  <div>
    <label for="first-name" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <select
      v-bind:name="name"
      v-bind:id="id"
      autocomplete="martial-status"
      class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectField",
  props: ["label", "name", "id"],
};
</script>
