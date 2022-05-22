<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useEmployeesStore } from "~~/store/employees";

export default {
  name: "ExperienceForm",
  props: ["id", "tooggleFormAction", "toggleNotification"],
  setup() {
    const employeesStore = useEmployeesStore();
    const state = reactive({
      companyName: "",
      designation: "",
      experience: "",
      salary: "",
    });

    const rules = computed(() => {
      return {
        companyName: { required },
        designation: { required },
        experience: { required },
        salary: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$, employeesStore };
  },
  methods: {
    async submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        await this.employeesStore.addExperience(this.state, this.id);
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
            Previous Work Experience
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="companyName"
                  class="block text-sm font-medium text-gray-700"
                  >Company Name</label
                >
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
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
                  v-model="state.companyName"
                />
                <span
                  v-if="v$.companyName.$error"
                  class="font-small text-xs text-red-600"
                >
                  {{ v$.companyName.$errors[0].$message }}
                </span>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="designation"
                  class="block text-sm font-medium text-gray-700"
                  >Designation</label
                >
                <input
                  type="text"
                  name="designation"
                  id="designation"
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
                  v-model="state.designation"
                />
                <span
                  v-if="v$.designation.$error"
                  class="font-small text-xs text-red-600"
                >
                  {{ v$.designation.$errors[0].$message }}
                </span>
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label
                  for="experience"
                  class="block text-sm font-medium text-gray-700"
                  >Experience</label
                >
                <select
                  v-model="state.experience"
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
                  <option>Option One</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </select>
                <span
                  v-if="v$.experience.$error"
                  class="font-small text-xs text-red-600"
                >
                  {{ v$.experience.$errors[0].$message }}
                </span>
              </div>
              <div class="col-span-6 sm:col-span-2">
                <label
                  for="salary"
                  class="block text-sm font-medium text-gray-700"
                  >Salary</label
                >
                <input
                  type="number"
                  name="salary"
                  id="salary"
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
                  v-model="state.salary"
                />
                <span
                  v-if="v$.salary.$error"
                  class="font-small text-xs text-red-600"
                >
                  {{ v$.salary.$errors[0].$message }}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="my-2 pt-6 sm:flex sm:items-center sm:justify-between">
        <a
          @click="this.tooggleFormAction"
          class="
            mt-4
            cursor-pointer
            text-center text-sm text-indigo-500
            sm:mt-0 sm:text-left
          "
        >
          Back to card view
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
