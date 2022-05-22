<script>
import AttachmentForm from "./AttachmentForm.vue";
import { ref } from "vue";
export default {
  components: {
    AttachmentForm,
  },
  setup() {
    const isFormVisible = ref(false);
    const toggleForm = (formId) => {
      isFormVisible.value = !isFormVisible.value;
    };
    const fetchDocIcon = (docType) => {
      const icon = attachments.filter(
        (attachment) => attachment.type === docType
      );
      return icon[0].img;
    };
    return {
      toggleForm,
      isFormVisible,
      attachments,
      myAttachments,
      fetchDocIcon,
    };
  },
};

const attachments = [
  {
    id: 1,
    name: "Resume",
    type: "Resume",
    img: "https://cdn-icons-png.flaticon.com/512/7550/7550834.png",
  },
  {
    id: 2,
    name: "Graduation Certificate",
    type: "Certificate",
    img: "https://cdn-icons-png.flaticon.com/512/7550/7550926.png",
  },
  {
    id: 3,
    name: "Income Tax",
    type: "Income",
    img: "https://cdn-icons-png.flaticon.com/512/7551/7551075.png",
  },
  {
    id: 4,
    name: "Other Attachments",
    type: "Other",
    img: "https://cdn-icons-png.flaticon.com/512/7550/7550911.png",
  },
];

const myAttachments = [
  {
    id: 1,
    name: "My Resume",
    type: "Resume",
    uploadDate: "2020-01-01",
  },
  {
    id: 2,
    name: "Graduation Certificate",
    type: "Certificate",
    uploadDate: "2020-01-01",
  },
];
</script>

<template>
  <div>
    <div class="mx-auto mt-3 mb-10 max-w-5xl px-4 sm:px-6 lg:px-8">
      <div>
        <p class="mt-10 font-medium text-sm text-gray-500">Add Attachments</p>
      </div>
      <div class="mt-6" v-if="!isFormVisible">
        <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div v-for="doc in attachments" :key="doc.id">
            <li>
              <button
                @click="toggleForm(doc.id)"
                type="button"
                class="
                  group
                  p-2
                  w-full
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border border-gray-300
                  shadow-sm
                  space-x-3
                  text-left
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <span class="min-w-0 flex-1 flex items-center space-x-3">
                  <span class="block flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="doc.img" alt="" />
                  </span>
                  <span class="block min-w-0 flex-1">
                    <span
                      class="block text-sm font-medium text-gray-900 truncate"
                    >
                      {{ doc.name }}
                    </span>
                  </span>
                </span>
                <span
                  class="
                    flex-shrink-0
                    h-10
                    w-10
                    inline-flex
                    items-center
                    justify-center
                  "
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
            </li>
          </div>
        </ul>
      </div>
      <AttachmentForm v-if="isFormVisible" :tooggleForm="toggleForm" />
    </div>

    <!-- Saved attachments section -->

    <div
      v-if="myAttachments.length > 0"
      class="mx-auto mt-3 mb-10 max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div>
        <p class="mt-10 font-medium text-sm text-gray-500">Saved Attachments</p>
      </div>
      <ul role="list" class="divide-y divide-gray-200">
        <div class="mt-6" v-for="doc in myAttachments" :key="doc.id">
          <li>
            <a href="#" class="block hover:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="min-w-0 flex-1 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-12 w-12 rounded-full"
                      :src="fetchDocIcon(doc.type)"
                      alt=""
                    />
                  </div>
                  <div
                    class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                  >
                    <div>
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ doc.name }}
                      </p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <!-- Heroicon name: solid/mail -->
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                        <span class="truncate">{{ doc.type }} </span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div>
                        <p class="mt-4 flex items-center text-sm text-gray-500">
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Updated on
                          <time class="ml-1.5" :datetime="doc.uploadDate">
                            {{ doc.uploadDate }}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>