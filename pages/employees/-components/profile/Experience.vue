<script>
import ExperienceForm from "./ExperienceForm.vue";
import Notification from "@/components/ui/Notification.vue";
export default {
  name: "Experience",
  props: ["id", "experience"],
  components: {
    ExperienceForm,
    Notification,
  },
  data() {
    return {
      toogleForm: false,
      showNotification: false,
    };
  },
  methods: {
    async tooggleFormAction() {
      this.toogleForm = !this.toogleForm;
      this.$emit("updateState");
    },
    toggleNotification() {
      this.showNotification = !this.showNotification;
    },
  },
};
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white px-4 py-5 sm:px-6">
      <div
        class="
          -ml-4
          -mt-2
          flex flex-wrap
          items-center
          justify-between
          sm:flex-nowrap
        "
      >
        <div class="mt-2">
          <h2 class="text-md font-medium text-gray-500">Experience</h2>
        </div>
        <div class="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            class="
              inline-flex
              items-center
              rounded
              border border-gray-300
              bg-white
              px-2.5
              py-1.5
              text-xs
              font-medium
              text-gray-700
              shadow-sm
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
            v-if="experience.length >= 1"
            @click="tooggleFormAction"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            Add New
          </button>
        </div>
      </div>
    </div>
    <button
      v-if="!experience.length && !toogleForm"
      type="button"
      class="
        relative
        block
        w-full
        rounded-lg
        border-2 border-dashed border-gray-300
        p-6
        text-center
        hover:border-gray-400
        focus:outline-none
        focus:ring-1
        focus:ring-indigo-500
        focus:ring-offset-1
      "
      @click="tooggleFormAction"
    >
      <svg
        class="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
      <span class="mt-2 block text-sm font-medium text-gray-900">
        Add Experience
      </span>
    </button>
    <div
      class="overflow-hidden bg-white shadow sm:rounded-md"
      v-if="!toogleForm"
    >
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="list in experience" :key="list.companyName">
          <a href="#" class="block hover:bg-gray-50">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="truncate text-sm font-medium text-indigo-600">
                  {{ list.designation }}
                </p>
                <div class="ml-2 flex flex-shrink-0">
                  <p
                    class="
                      inline-flex
                      rounded-full
                      bg-green-100
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-green-800
                    "
                  >
                    Full-time
                  </p>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center text-sm text-gray-500">
                    <!-- Heroicon name: solid/users -->
                    <svg
                      class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                      />
                    </svg>
                    {{ list.companyName }}
                  </p>
                  <p
                    class="
                      mt-2
                      flex
                      items-center
                      text-sm text-gray-500
                      sm:mt-0 sm:ml-6
                    "
                  >
                    <!-- Heroicon name: solid/location-marker -->
                    <svg
                      class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    India
                  </p>
                </div>
                <div
                  class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
                >
                  <!-- Heroicon name: solid/calendar -->
                  <svg
                    class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p>
                    <time datetime="2020-01-07">{{ list.experience }} </time>
                    Years
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <ExperienceForm
      v-if="toogleForm"
      :id="id"
      :tooggleFormAction="tooggleFormAction"
      :toggleNotification="toggleNotification"
    />
    <Notification
      message="Experience added successfully"
      :toggleNotification="toggleNotification"
      v-if="showNotification"
    />
  </div>
</template>
