<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useEmployeesStore } from "~~/store/employees";
export default {
  name: "EducationForm",
  props: ["id", "tooggleForm", "toggleNotification"],
  setup() {
    const employeesStore = useEmployeesStore();
    const state = reactive({
      university: "",
      qualification: "",
      passingYear: "",
    });
    const rules = computed(() => {
      return {
        university: { required },
        qualification: { required },
        passingYear: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$, employeesStore };
  },
  methods: {
    async submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        await this.employeesStore.addEducation(this.state, this.id);
        this.toggleNotification();
        this.tooggleFormAction();
      }
    },
  },
};
</script>

<template>
  <div class="space-y-6 py-2">
    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-sm font-medium leading-6 text-gray-900">
            Add Attachments/Documents
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            You can upload pdf documents upto 5MB in size.
          </p>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div class="grid grid-cols-4 gap-6">
              <div class="col-span-6 sm:col-span-2">
                <label
                  for="experience"
                  class="block text-sm font-medium text-gray-700"
                  >Attachment Type</label
                >
                <select
                  id="experience"
                  name="experience"
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
                  <option>Resume</option>
                  <option>Certificate</option>
                  <option>Income Tax</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="nationality"
                  class="block text-sm font-medium text-gray-700"
                  >Attachment Name</label
                >
                <input
                  type="text"
                  v-model="state.qualification"
                  name="qualification"
                  id="qualification"
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
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                  >Select Document</label
                >
                <input
                  type="file"
                  name="attachment"
                  id="attachment"
                  placeholder="Select Document"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-400 focus:ring-indigo-400
                    sm:text-sm
                  "
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="my-2 pt-6 sm:flex sm:items-center sm:justify-between">
        <a
          @click="this.tooggleForm"
          class="
            mt-4
            cursor-pointer
            text-center text-sm text-indigo-500
            sm:mt-0 sm:text-left
          "
        >
          Cancel
        </a>
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            rounded-md
            border border-gray-300
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-gray-700
            shadow-sm
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-pink-500
            focus:ring-offset-2
          "
          @click="submitForm"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
