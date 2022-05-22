<template>
  <div>
    <label for="first-name" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :id="id"
      :v-model="model"
      autocomplete="given-name"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: ["label", "name", "id", "type", "model", "placeholder"],
};
</script>
