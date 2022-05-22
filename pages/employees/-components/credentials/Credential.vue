<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useEmployeesStore } from "~~/store/employees";
import Notification from "@/components/ui/Notification.vue";

export default {
  data() {
    return {
      credentials: [],
    };
  },
  setup() {
    const employeesStore = useEmployeesStore();

    const state = reactive({
      credentialType: "",
      credentialNumber: "",
      ExpDate: "",
      fileAttachment: "",
    });
    const rules = computed(() => {
      return {
        credentialType: { required },
        credentialNumber: { required },
        ExpDate: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$, employeesStore };
  },
  props: ["id"],
  created() {
    this.credentials = this.employeesStore.getCredentialById(this.id); //getters
  },
  methods: {
    async submitForm() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        await this.employeesStore.addCredential(this.state, this.id);
        this.credentials = this.employeesStore.getCredentialById(this.id); //getters
      }
    },
  },
};
</script>

<template>
  <div class="mx-auto mt-3 max-w-5xl px-4 sm:px-6 lg:px-8">
    <div></div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
    >
      <li
        v-for="data in credentials"
        :key="data.credentialType"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">
                {{ data.credentialType }}
              </h3>
              <span
                class="
                  inline-block
                  flex-shrink-0
                  rounded-full
                  bg-red-100
                  px-2
                  py-0.5
                  text-xs
                  font-medium
                  text-red-800
                "
                >Inactive</span
              >
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">
              {{ data.credentialNumber }}
            </p>
          </div>
          <img
            class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            src="https://cdn-icons.flaticon.com/png/512/3870/premium/3870839.png?token=exp=1652967133~hmac=10b7fd4e50d5a39a9c24261f605850ef"
            alt=""
          />
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                href="#"
                class="
                  relative
                  -mr-px
                  inline-flex
                  w-0
                  flex-1
                  items-center
                  justify-center
                  rounded-bl-lg
                  border border-transparent
                  py-4
                  text-sm
                  font-medium
                  text-gray-700
                  hover:text-gray-500
                "
              >
                <!-- Heroicon name: solid/mail -->
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
                class="
                  relative
                  inline-flex
                  w-0
                  flex-1
                  items-center
                  justify-center
                  rounded-br-lg
                  border border-transparent
                  py-4
                  text-sm
                  font-medium
                  text-gray-700
                  hover:text-gray-500
                "
              >
                <!-- Heroicon name: solid/phone -->
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
      </li>
    </ul>
    <!-- add -->

    <div class="space-y-6 py-2">
      <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:col-span-6 md:mt-0">
            <div class="md:col-span-1" style="margin-bottom: 20px">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Add Credentials +
              </h3>
              <p class="mt-1 text-sm text-gray-500"></p>
            </div>
            <form action="#" method="POST">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="bloodGroup"
                    class="block text-sm font-medium text-gray-700"
                    >Credential Type</label
                  >
                  <select
                    v-model="state.credentialType"
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
                    <option>Emirates</option>
                    <option>Aadhar Card</option>
                    <option>Driving Licence</option>
                  </select>
                  <span
                    v-if="v$.credentialType.$error"
                    class="font-small text-xs text-red-600"
                  >
                    {{ v$.credentialType.$errors[0].$message }}
                  </span>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="nationality"
                    class="block text-sm font-medium text-gray-700"
                    >Credential Number</label
                  >
                  <input
                    type="text"
                    v-model="state.credentialNumber"
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
                  <span
                    v-if="v$.credentialNumber.$error"
                    class="font-small text-xs text-red-600"
                  >
                    {{ v$.credentialNumber.$errors[0].$message }}
                  </span>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="passingYear"
                    class="block text-sm font-medium text-gray-700"
                    >Exp Date</label
                  >
                  <input
                    type="date"
                    v-model="state.ExpDate"
                    name="passingYear"
                    id="passingYear"
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
                    v-if="v$.ExpDate.$error"
                    class="font-small text-xs text-red-600"
                  >
                    {{ v$.ExpDate.$errors[0].$message }}
                  </span>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="passingYear"
                    class="block text-sm font-medium text-gray-700"
                    >File attach</label
                  >
                  <input
                    type="file"
                    name="passingYear"
                    id="passingYear"
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
              </div>
            </form>
          </div>
        </div>
        <div class="my-2 pt-6 sm:flex sm:items-center sm:justify-between">
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

    <!--  -->
  </div>
</template>
