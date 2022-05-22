<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useEmployeesStore } from "~~/store/employees";
import Notification from "@/components/ui/Notification.vue";

export default {
  data() {
    return {
      IsSliderClicked: false,
      showNotification: false,
      assets: [],
    };
  },
  setup() {
    const employeesStore = useEmployeesStore();

    const state = reactive({
      code: "",
      type: "",
      issueDate: "",
      status: "",
    });

    const rules = computed(() => {
      return {
        code: { required },
        type: { required },
        issueDate: { required },
        status: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$, employeesStore };
  },
  props: ["id"],
  created() {
    this.assets = this.employeesStore.getAssetsById(this.id); //getters
  },
  methods: {
    EditButtonClick() {
      this.IsSliderClicked = !this.IsSliderClicked;
    },
    async toggleNotification() {
      this.showNotification = !this.showNotification;
    },
    async submit() {
      this.showNotification = true;
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        await this.employeesStore.addAssets(this.state, this.id);
        this.assets = this.employeesStore.getAssetsById(this.id); //getters
        this.EditButtonClick();
      }
    },
  },
};
</script>
<template>
  <div>
    <div class="mx-auto mt-3 max-w-5xl px-4 sm:px-6 lg:px-8">
      <div style="display: flex; justify-content: flex-end">
        <button
          type="button"
          class="
            inline-flex
            items-center
            rounded-md
            border border-gray-300
            bg-white
            px-3
            py-2
            text-sm
            font-medium
            leading-4
            text-gray-700
            shadow-sm
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
          "
          @click="EditButtonClick"
        >
          <svg
            class="-ml-0.5 mr-2 h-4 w-4"
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
          Assets
        </button>
      </div>
      <ol
        class="
          mt-4
          divide-y divide-gray-100
          text-sm
          leading-6
          lg:col-span-7
          xl:col-span-8
        "
        v-for="asset in assets"
        :key="asset.name"
      >
        <li class="relative flex space-x-6 py-6 xl:static">
          <div class="flex-auto">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">
                {{ asset.type }}
              </h3>
              <span
                class="
                  inline-block
                  flex-shrink-0
                  rounded-full
                  bg-green-100
                  px-2
                  py-0.5
                  text-xs
                  font-medium
                  text-green-800
                "
                >{{ asset.status }}</span
              >
            </div>
            <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
              <div class="flex items-start space-x-3">
                <dt class="mt-0.5">
                  <span class="sr-only">Code</span>
                  <!-- Heroicon name: solid/location-marker -->
                  <svg
                    class="h-5 w-5 text-gray-400"
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
                </dt>
                <dd>
                  {{ asset.code }}
                </dd>
              </div>
              <div
                class="
                  mt-2
                  flex
                  items-start
                  space-x-3
                  xl:mt-0
                  xl:ml-3.5
                  xl:border-l
                  xl:border-gray-400
                  xl:border-opacity-50
                  xl:pl-3.5
                "
              >
                <dt class="mt-0.5">
                  <span class="sr-only">IssueDate</span>
                  <!-- Heroicon name: solid/location-marker -->
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                </dt>
                <dd>{{ asset.issueDate }}</dd>
              </div>
            </dl>
          </div>
          <div
            class="
              absolute
              top-6
              right-0
              xl:relative xl:top-auto xl:right-auto xl:self-center
            "
          >
            <div>
              <button
                type="button"
                class="
                  -m-2
                  flex
                  items-center
                  rounded-full
                  p-2
                  text-gray-500
                  hover:text-gray-600
                "
                id="menu-0-button"
                aria-expanded="false"
                aria-haspopup="true"
                @click="EditButtonClick"
              >
                <span class="sr-only">Edit</span>
                <!-- Heroicon name: solid/dots-horizontal -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ol>
    </div>
    <!-- add Asset Slider -->
    <div v-if="IsSliderClicked">
      <div
        class="relative z-10"
        aria-labelledby="slide-over-title"
        status="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"
        ></div>
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0"></div>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="
                pointer-events-none
                fixed
                inset-y-0
                right-0
                flex
                max-w-full
                pl-10
                sm:pl-16
              "
            >
              <div class="pointer-events-auto w-screen max-w-md">
                <div
                  class="
                    flex
                    h-full
                    flex-col
                    divide-y divide-gray-200
                    bg-white
                    shadow-xl
                  "
                >
                  <div class="h-0 flex-1 overflow-y-auto">
                    <div class="py-6 px-4 sm:px-6">
                      <div class="flex items-center justify-between">
                        <h2
                          class="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Add Asset
                        </h2>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="
                              rounded-md
                              bg-indigo-700
                              text-indigo-200
                              hover:text-white
                              focus:outline-none focus:ring-2 focus:ring-white
                            "
                            @click="EditButtonClick"
                          >
                            <span class="sr-only">Close panel</span>
                            <!-- Heroicon name: outline/x -->
                            <svg
                              class="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="mt-1">
                        <p class="text-sm text-gray-500">
                          Get started by filling in the information below to
                          create your new project.
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-1 flex-col justify-between">
                      <div class="divide-y divide-gray-200 px-4 sm:px-6">
                        <div class="space-y-6 pt-6 pb-5">
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium text-gray-900"
                            >
                              Asset Code
                            </label>
                            <div class="mt-1">
                              <input
                                type="text"
                                name="code"
                                id="code"
                                autocomplete="address-level2"
                                class="
                                  mt-1
                                  block
                                  w-full
                                  rounded-md
                                  border-gray-300
                                  shadow-sm
                                  focus:border-indigo-500 focus:ring-indigo-500
                                  sm:text-sm
                                "
                                v-model="state.code"
                              />
                              <span
                                v-if="v$.code.$error"
                                class="font-small text-xs text-red-600"
                              >
                                {{ v$.code.$errors[0].$message }}
                              </span>
                            </div>
                          </div>
                          <div>
                            <label
                              for="description"
                              class="block text-sm font-medium text-gray-900"
                            >
                              Asset Type
                            </label>
                            <div class="mt-1">
                              <select
                                v-model="state.type"
                                id="blood-group"
                                name="type"
                                autocomplete="martial-status"
                                class="
                                  mt-1
                                  block
                                  w-full
                                  rounded-md
                                  border border-gray-300
                                  bg-white
                                  py-2
                                  px-3
                                  shadow-sm
                                  focus:border-indigo-500
                                  focus:outline-none
                                  focus:ring-indigo-500
                                  sm:text-sm
                                "
                              >
                                <option>Laptop</option>
                                <option>Monitor</option>
                              </select>
                              <span
                                v-if="v$.type.$error"
                                class="font-small text-xs text-red-600"
                              >
                                {{ v$.type.$errors[0].$message }}
                              </span>
                            </div>
                          </div>
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium text-gray-900"
                            >
                              Issue Date
                            </label>
                            <div class="mt-1">
                              <input
                                type="date"
                                name="issueDate"
                                id="project-name"
                                class="
                                  block
                                  w-full
                                  rounded-md
                                  border-gray-300
                                  shadow-sm
                                  focus:border-indigo-500 focus:ring-indigo-500
                                  sm:text-sm
                                "
                                v-model="state.issueDate"
                              />
                              <span
                                v-if="v$.issueDate.$error"
                                class="font-small text-xs text-red-600"
                              >
                                {{ v$.issueDate.$errors[0].$message }}
                              </span>
                            </div>
                          </div>
                          <div>
                            <label
                              for="description"
                              class="block text-sm font-medium text-gray-900"
                            >
                              Status
                            </label>
                            <div class="mt-1">
                              <select
                                v-model="state.status"
                                id="blood-group"
                                name="status"
                                autocomplete="martial-status"
                                class="
                                  mt-1
                                  block
                                  w-full
                                  rounded-md
                                  border border-gray-300
                                  bg-white
                                  py-2
                                  px-3
                                  shadow-sm
                                  focus:border-indigo-500
                                  focus:outline-none
                                  focus:ring-indigo-500
                                  sm:text-sm
                                "
                              >
                                <option>Active</option>
                                <option>Inactive</option>
                              </select>
                              <span
                                v-if="v$.status.$error"
                                class="font-small text-xs text-red-600"
                              >
                                {{ v$.status.$errors[0].$message }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="pt-4 pb-6">
                          <div class="flex text-sm">
                            <a
                              href="#"
                              class="
                                group
                                inline-flex
                                items-center
                                font-medium
                                text-indigo-600
                                hover:text-indigo-900
                              "
                            >
                              <!-- Heroicon name: solid/link -->
                              <svg
                                class="
                                  h-5
                                  w-5
                                  text-indigo-500
                                  group-hover:text-indigo-900
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <span class="ml-2"> Copy link </span>
                            </a>
                          </div>
                          <div class="mt-4 flex text-sm">
                            <a
                              href="#"
                              class="
                                group
                                inline-flex
                                items-center
                                text-gray-500
                                hover:text-gray-900
                              "
                            >
                              <!-- Heroicon name: solid/question-mark-circle -->
                              <svg
                                class="
                                  h-5
                                  w-5
                                  text-gray-400
                                  group-hover:text-gray-500
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <span class="ml-2">
                                Learn more about sharing
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      class="
                        rounded-md
                        border border-gray-300
                        bg-white
                        py-2
                        px-4
                        text-sm
                        font-medium
                        text-gray-700
                        shadow-sm
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                      "
                      @click="EditButtonClick"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="
                        ml-4
                        inline-flex
                        justify-center
                        rounded-md
                        border border-transparent
                        bg-indigo-600
                        py-2
                        px-4
                        text-sm
                        font-medium
                        text-white
                        shadow-sm
                        hover:bg-indigo-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                      "
                      @click="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
