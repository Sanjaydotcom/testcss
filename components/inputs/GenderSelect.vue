<template>
  <div>
    <label class="text-md font-medium text-gray-900">Gender</label>
    <fieldset class="mt-4">
      <legend class="sr-only">Notification method</legend>
      <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        <div class="flex items-center">
          <input
            id="email"
            name="notification-method"
            type="radio"
            checked
            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            for="email"
            class="ml-3 block text-sm font-medium text-gray-700"
          >
            Male
          </label>
        </div>

        <div class="flex items-center">
          <input
            id="sms"
            name="notification-method"
            type="radio"
            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label for="sms" class="ml-3 block text-sm font-medium text-gray-700">
            Female
          </label>
        </div>

        <div class="flex items-center">
          <input
            id="push"
            name="notification-method"
            type="radio"
            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            for="push"
            class="ml-3 block text-sm font-medium text-gray-700"
          >
            Others</label
          >
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "GenderSelect",
  // props: ["label", "name", "id", "type"],
};
</script>
