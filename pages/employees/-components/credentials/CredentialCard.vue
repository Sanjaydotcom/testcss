<script>
export default {
  props: {
    cardName: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  data() {
    return {
      isEmpty: false,
    };
  },
};
</script>

<template>
  <div>
    <!-- Filled state -->
    <div v-if="!isEmpty">
      <div
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">
                {{ cardName }}
              </h3>
              <span
                class="inline-block flex-shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800"
                >Inactive</span
              >
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">EM0030510</p>
          </div>
          <img
            class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            :src="src"
            alt=""
          />
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                href="#"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
                <span class="ml-3">Edit</span>
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href="#"
                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                <span class="ml-3">Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Empty state -->
    <div v-if="isEmpty">
      <div>
        <button
          type="button"
          class="group flex w-full items-center justify-between space-x-3 rounded-xl border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="flex min-w-0 flex-1 items-center space-x-3">
            <span class="block flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="src" alt="" />
            </span>
            <span class="block min-w-0 flex-1">
              <span class="block truncate text-sm font-medium text-gray-900"
                >{{ cardName }}
              </span>
            </span>
          </span>
          <span
            class="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center"
          >
            <svg
              class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
