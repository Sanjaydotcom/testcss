<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import Notification from "@/components/ui/Notification.vue";
import { useEmployeesStore } from "~~/store/employees";
export default {
  data() {
    return {
      IsToggleSlider: false,
      showNotification: false,
    };
  },
  props: ["editButtonClick", "id", "updateStaffExitDetails"],
  created() {
    this.IsToggleSlider = true;
  },
  components: {
    Notification,
  },

  setup() {
    const employeesStore = useEmployeesStore();
    const state = reactive({
      resignationDate: "",
      interviewDateExit: "",
      relivingdate: "",
      reasonForLeaving: "",
      interviewExitSummary: "",
      status: "",
    });

    const rules = computed(() => {
      return {
        resignationDate: { required },
        interviewDateExit: { required },
        relivingdate: { required },
        reasonForLeaving: { required },
        interviewExitSummary: { required },
        status: { required },
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
    async submitForm() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        await this.employeesStore.updateStaffExitDetails(this.state, this.id);

        this.editButtonClick();
        this.updateStaffExitDetails();
        this.showNotification = true;
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
                      Staff Exit Details
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div class="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      @click="this.editButtonClick"
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
                        >Resignation Date</label
                      >

                      <div class="mt-1">
                        <input
                          type="date"
                          name="resignationDate"
                          id="resignationDate"
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
                          v-model="state.resignationDate"
                        />
                        <span
                          v-if="v$.resignationDate.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.resignationDate.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        for="interviewDateExit"
                        class="block text-sm font-medium text-gray-700"
                        >Exit Interview Date</label
                      >
                      <div class="mt-1">
                        <input
                          v-model="state.interviewDateExit"
                          type="DATE"
                          name="interviewDateExit"
                          id="interviewDateExit"
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
                          v-if="v$.interviewDateExit.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.interviewDateExit.$errors[0].$message }}
                        </span>
                      </div>
                    </div>

                    <div class="mt-1">
                      <label
                        for="dob"
                        class="block text-sm font-medium text-gray-700"
                        >Reliving Date</label
                      >

                      <div class="mt-1">
                        <input
                          type="date"
                          name="relivingdate"
                          id="relivingdate"
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
                          v-model="state.relivingdate"
                        />
                        <span
                          v-if="v$.relivingdate.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.relivingdate.$errors[0].$message }}
                        </span>
                      </div>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="department"
                        class="block text-sm font-medium text-gray-700"
                        >status</label
                      >
                      <select
                        v-model="state.status"
                        id="department"
                        name="Department"
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
                        <option>Active</option>
                        <option>InActive</option>
                      </select>
                      <span
                        v-if="v$.status.$error"
                        class="font-small text-xs text-red-600"
                      >
                        {{ v$.status.$errors[0].$message }}
                      </span>
                    </div>

                    <div>
                      <label
                        for="description"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Reason For Leaving
                      </label>
                      <div class="mt-1">
                        <textarea
                          id="reasonForLeaving"
                          name="reasonForLeaving"
                          rows="4"
                          class="
                            block
                            w-full
                            rounded-md
                            border border-gray-300
                            shadow-sm
                            focus:border-indigo-500 focus:ring-indigo-500
                            sm:text-sm
                          "
                          v-model="state.reasonForLeaving"
                        ></textarea>
                        <span
                          v-if="v$.reasonForLeaving.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.reasonForLeaving.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        for="interviewExitSummary"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Exit Interview Summary
                      </label>
                      <div class="mt-1">
                        <textarea
                          id="interviewExitSummary"
                          name="interviewExitSummary"
                          rows="4"
                          class="
                            block
                            w-full
                            rounded-md
                            border border-gray-300
                            shadow-sm
                            focus:border-indigo-500 focus:ring-indigo-500
                            sm:text-sm
                          "
                          v-model="state.interviewExitSummary"
                        ></textarea>
                        <span
                          v-if="v$.interviewExitSummary.$error"
                          class="font-small text-xs text-red-600"
                        >
                          {{ v$.interviewExitSummary.$errors[0].$message }}
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
