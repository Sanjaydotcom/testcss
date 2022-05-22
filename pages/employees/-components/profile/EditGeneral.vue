<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useEmployeesStore } from "@/store/employees";
import Notification from "@/components/ui/Notification.vue";
export default {
  data() {
    return {
      IsToggleSlider: false,
      showNotification: false,
    };
  },
  props: ["editGeneralButtonClick"],
  created() {
    this.IsToggleSlider = true;
  },
  components: {
    Notification,
  },

  setup() {
    const employeesStore = useEmployeesStore();
    const state = reactive({
      firstName: "",
      lastName: "",
      nationality: "",
      dob: "",
      bloodGroup: "",
      martialStatus: "",
      designation: "",
      department: "",
    });

    const rules = computed(() => {
      return {
        firstName: { required },
        lastName: { required },
        nationality: { required },
        dob: { required },
        bloodGroup: { required },
        martialStatus: { required },
        designation: { required },
        department: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$, employeesStore };
  },
  methods: {
    IsSliderClosed() {
      this.IsToggleSlider = false;
      this.$router.back();
    },
    async toggleNotification() {
      this.showNotification = !this.showNotification;
    },
    submitForm() {
      this.showNotification = true;
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        // const employeesStore = useEmployeesStore();
        // employeesStore.SaveEmployeeGeneralDetails(this.state);
        this.$router.back();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
<template>
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

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
          "
        >
          <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
          <div class="pointer-events-auto w-screen max-w-md">
            <div
              class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
            >
              <div class="px-4 sm:px-6">
                <div class="mt-5 flex items-start justify-between">
                  <div class="md:col-span-1">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">
                      Edit General info
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div class="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      @click="this.editGeneralButtonClick"
                      class="
                        rounded-md
                        bg-white
                        text-gray-400
                        hover:text-gray-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                      "
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
              </div>
              <div class="flex flex-1 flex-col justify-between">
                <div class="divide-y divide-gray-200 px-4 sm:px-6">
                  <div class="space-y-6 pt-6 pb-5">
                    <div>
                      <label
                        for="firstName"
                        class="block text-sm font-medium text-gray-700"
                        >First name</label
                      >

                      <div class="mt-1">
                        <input
                          type="text"
                          name="FirstName"
                          id="firstName"
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
                          v-model="state.firstName"
                        />
                        <span
                          v-if="v$.firstName.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.firstName.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        for="lastName"
                        class="block text-sm font-medium text-gray-700"
                        >Last name</label
                      >
                      <div class="mt-1">
                        <input
                          v-model="state.lastName"
                          type="text"
                          name="lastName"
                          id="lastName"
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
                        />
                        <span
                          v-if="v$.lastName.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.lastName.$errors[0].$message }}
                        </span>
                      </div>
                    </div>

                    <div class="md:w-1/2">
                      <label
                        for="dob"
                        class="block text-sm font-medium text-gray-700"
                        >Date of Birth</label
                      >

                      <div class="mt-1">
                        <input
                          type="date"
                          name="dob"
                          id="dob"
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
                          v-model="state.dob"
                        />
                        <span
                          v-if="v$.dob.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.dob.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700"
                          >Gender</label
                        >
                        <fieldset class="mt-4">
                          <legend class="sr-only">Notification method</legend>
                          <div
                            class="
                              space-y-4
                              sm:flex sm:items-center sm:space-y-0 sm:space-x-10
                            "
                          >
                            <div class="flex items-center">
                              <input
                                id="email"
                                name="notification-method"
                                type="radio"
                                checked
                                class="
                                  h-4
                                  w-4
                                  border-gray-300
                                  text-indigo-600
                                  focus:ring-indigo-500
                                "
                              />
                              <label
                                for="email"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                Male
                              </label>
                            </div>

                            <div class="flex items-center">
                              <input
                                id="sms"
                                name="notification-method"
                                type="radio"
                                class="
                                  h-4
                                  w-4
                                  border-gray-300
                                  text-indigo-600
                                  focus:ring-indigo-500
                                "
                              />
                              <label
                                for="sms"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                Female
                              </label>
                            </div>

                            <div class="flex items-center">
                              <input
                                id="push"
                                name="notification-method"
                                type="radio"
                                class="
                                  h-4
                                  w-4
                                  border-gray-300
                                  text-indigo-600
                                  focus:ring-indigo-500
                                "
                              />
                              <label
                                for="push"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                Others</label
                              >
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-gray-900">
                        Team Members
                      </h3>
                      <div class="mt-2">
                        <div class="flex space-x-2">
                          <a href="#" class="rounded-full hover:opacity-75">
                            <img
                              class="inline-block h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Tom Cook"
                            />
                          </a>

                          <a href="#" class="rounded-full hover:opacity-75">
                            <img
                              class="inline-block h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Whitney Francis"
                            />
                          </a>

                          <a href="#" class="rounded-full hover:opacity-75">
                            <img
                              class="inline-block h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Leonard Krasner"
                            />
                          </a>

                          <a href="#" class="rounded-full hover:opacity-75">
                            <img
                              class="inline-block h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Floyd Miles"
                            />
                          </a>

                          <a href="#" class="rounded-full hover:opacity-75">
                            <img
                              class="inline-block h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Emily Selman"
                            />
                          </a>

                          <button
                            type="button"
                            class="
                              inline-flex
                              h-8
                              w-8
                              flex-shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border-2 border-dashed border-gray-200
                              bg-white
                              text-gray-400
                              hover:border-gray-300 hover:text-gray-500
                              focus:outline-none
                              focus:ring-2
                              focus:ring-indigo-500
                              focus:ring-offset-2
                            "
                          >
                            <span class="sr-only">Add team member</span>
                            <!-- Heroicon name: solid/plus-sm -->
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
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="flex space-x-6">
                      <div class="w-1/2">
                        <label
                          for="bloodGroup"
                          class="block text-sm font-medium text-gray-700"
                          >Blood Group</label
                        >

                        <div class="mt-1">
                          <select
                            v-model="state.bloodGroup"
                            id="bloodGroup"
                            name="Blood Group"
                            autocomplete="country-name"
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
                            <option>Option One</option>
                            <option>Option Two</option>
                            <option>Option Three</option>
                          </select>
                          <span
                            v-if="v$.bloodGroup.$error"
                            class="font-small text-xs text-red-600"
                          >
                            {{ v$.bloodGroup.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="w-1/2">
                        <label
                          for="martialStatus"
                          class="block text-sm font-medium text-gray-700"
                          >Martial Status</label
                        >
                        <div class="mt-1">
                          <select
                            v-model="state.martialStatus"
                            id="martialStatus"
                            name="Martial Status"
                            autocomplete="country-name"
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
                            <option>Option One</option>
                            <option>Option Two</option>
                            <option>Option Three</option>
                          </select>
                          <span
                            v-if="v$.martialStatus.$error"
                            class="font-small text-xs text-red-600"
                          >
                            {{ v$.martialStatus.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        for="nationality"
                        class="block text-sm font-medium text-gray-700"
                        >Nationality</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          v-model="state.nationality"
                          name="nationality"
                          id="nationality"
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
                        />
                        <span
                          v-if="v$.nationality.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.nationality.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <fieldset>
                      <legend class="text-sm font-medium text-gray-900">
                        Privacy
                      </legend>
                      <div class="mt-2 space-y-5">
                        <div class="relative flex items-start">
                          <div class="absolute flex h-5 items-center">
                            <input
                              id="privacy-public"
                              name="privacy"
                              aria-describedby="privacy-public-description"
                              type="radio"
                              class="
                                h-4
                                w-4
                                border-gray-300
                                text-indigo-600
                                focus:ring-indigo-500
                              "
                              checked
                            />
                          </div>
                          <div class="pl-7 text-sm">
                            <label
                              for="privacy-public"
                              class="font-medium text-gray-900"
                            >
                              Public access
                            </label>
                            <p
                              id="privacy-public-description"
                              class="text-gray-500"
                            >
                              Everyone with the link will see this project.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div class="relative flex items-start">
                            <div class="absolute flex h-5 items-center">
                              <input
                                id="privacy-private-to-project"
                                name="privacy"
                                aria-describedby="privacy-private-to-project-description"
                                type="radio"
                                class="
                                  h-4
                                  w-4
                                  border-gray-300
                                  text-indigo-600
                                  focus:ring-indigo-500
                                "
                              />
                            </div>
                            <div class="pl-7 text-sm">
                              <label
                                for="privacy-private-to-project"
                                class="font-medium text-gray-900"
                              >
                                Private to project members
                              </label>
                              <p
                                id="privacy-private-to-project-description"
                                class="text-gray-500"
                              >
                                Only members of this project would be able to
                                access.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="relative flex items-start">
                            <div class="absolute flex h-5 items-center">
                              <input
                                id="privacy-private"
                                name="privacy"
                                aria-describedby="privacy-private-to-project-description"
                                type="radio"
                                class="
                                  h-4
                                  w-4
                                  border-gray-300
                                  text-indigo-600
                                  focus:ring-indigo-500
                                "
                              />
                            </div>
                            <div class="pl-7 text-sm">
                              <label
                                for="privacy-private"
                                class="font-medium text-gray-900"
                              >
                                Private to you
                              </label>
                              <p
                                id="privacy-private-description"
                                class="text-gray-500"
                              >
                                You are the only one able to access this
                                project.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
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
                        <span class="ml-2"> Learn more about sharing </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Notification
                message=" General Save Successfully"
                :toggleNotification="toggleNotification"
                v-if="showNotification"
              />
              <div
                class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6"
              >
                <div class="flex justify-end space-x-3">
                  <button
                    type="button"
                    @click="editGeneralButtonClick"
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
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    @click="submitForm"
                    class="
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
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
