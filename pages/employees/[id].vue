<script>
import { ref } from "vue";
import { ChevronLeftIcon, MailIcon, PhoneIcon } from "@heroicons/vue/solid";
import employeesJson from "../../store/employees.json";
import EditGeneral from "./-components/profile/EditGeneral.vue";
import EditEmployee from "./-components/profile/EditEmployee.vue";
import Directory from "./-components/Directory.vue";

import Profile from "./-components/profile/Profile.vue";
import Assets from "./-components/assets/Assets.vue";
import Appraisal from "./-components/appraisals/Appraisal.vue";
import Credential from "./-components/credentials/Credential.vue";
import EmptyCred from "./-components/credentials/EmptyCred.vue";
import Attachments from "./-components/attachments/Attachments.vue";

import { useEmployeesStore } from "~~/store/employees";
export default {
  components: {
    ChevronLeftIcon,
    MailIcon,
    PhoneIcon,
    EditGeneral,
    EditEmployee,
    Directory,
    Profile,
    Assets,
    EmptyCred,
    Assets,
    Profile,
    Attachments,
    Credential,
    Appraisal,
    ChevronLeftIcon,
  },
  setup() {
    const store = useEmployeesStore();
    const { params } = useRoute();
    const employeesState = reactive({
      profile: [],
      id: null,
      showDirectory: false,
      activeTab: "1",
    });

    onMounted(() => {
      getEmployeeById();
    });
    const custId = () => (params.id == "me" ? 1 : params.id);
    const getEmployeeById = () => {
      const employeeList = store.employeesList;

      const user = employeeList.filter(function (e) {
        return e.id == custId();
      });
      employeesState.profile = user[0];
    };
    const toogleDirectory = () => {
      employeesState.showDirectory = !employeesState.showDirectory;
    };
    return {
      employeesState,
      toogleDirectory,
      toogleDirectory,
    };
  },
};
</script>
<template>
  <main
    class="
      relative
      z-20
      max-h-screen
      flex-1
      overflow-y-auto
      focus:outline-none
      xl:order-last
    "
  >
    <div v-if="!employeesState.showDirectory && employeesState.profile">
      <div>
        <!-- Breadcrumb -->
        <nav
          class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
          aria-label="Breadcrumb"
        >
          <a
            @click="toogleDirectory"
            class="
              inline-flex
              items-center
              space-x-3
              text-sm
              font-medium
              text-gray-900
            "
          >
            <ChevronLeftIcon
              class="-ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Directory</span>
          </a>
        </nav>
        <article v-if="employeesState.profile">
          <!-- employeesState.profile header -->
          <div>
            <div>
              <img
                class="h-32 w-full object-cover lg:h-48"
                :src="employeesState.profile.coverImageUrl"
                alt=""
              />
            </div>
            <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div class="flex">
                  <img
                    class="
                      h-24
                      w-24
                      rounded-full
                      ring-4 ring-white
                      sm:h-32 sm:w-32
                    "
                    src="data:image/png;base64,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"
                    alt="user-img"
                  />
                </div>
                <div
                  class="
                    mt-6
                    sm:flex
                    sm:min-w-0
                    sm:flex-1
                    sm:items-center
                    sm:justify-end
                    sm:space-x-6
                    sm:pb-1
                  "
                >
                  <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                    <h1 class="truncate text-2xl font-bold text-gray-900">
                      {{ employeesState.profile.name }}
                    </h1>
                  </div>
                  <div
                    class="
                      justify-stretch
                      mt-6
                      flex flex-col
                      space-y-3
                      sm:flex-row sm:space-y-0 sm:space-x-4
                    "
                  >
                    <button
                      type="button"
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
                    >
                      <MailIcon
                        class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Message</span>
                    </button>
                    <button
                      type="button"
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
                    >
                      <PhoneIcon
                        class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                <h1 class="truncate text-2xl font-bold text-gray-900">
                  {{ employeesState.profile.name }}
                </h1>
              </div>
            </div>
          </div>
          <!-- Tabs -->
          <div class="mt-6 sm:mt-2 2xl:mt-5">
            <div class="border-b border-gray-200">
              <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <nav class="flex cursor-pointer space-x-4" aria-label="Tabs">
                  <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
                  <a
                    v-on:click="employeesState.activeTab = '1'"
                    v-bind:class="[
                      employeesState.activeTab === '1'
                        ? 'border-blue-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
                    ]"
                  >
                    Profile</a
                  >
                  <a
                    v-on:click="employeesState.activeTab = '2'"
                    v-bind:class="[
                      employeesState.activeTab === '2'
                        ? 'border-blue-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
                    ]"
                  >
                    Credentials
                  </a>
                  <a
                    v-on:click="employeesState.activeTab = '3'"
                    v-bind:class="[
                      employeesState.activeTab === '3'
                        ? 'border-blue-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
                    ]"
                  >
                    Assets
                  </a>
                  <a
                    v-on:click="employeesState.activeTab = '4'"
                    v-bind:class="[
                      employeesState.activeTab === '4'
                        ? 'border-blue-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
                    ]"
                  >
                    Appraisal
                  </a>
                  <a
                    v-on:click="employeesState.activeTab = '5'"
                    v-bind:class="[
                      employeesState.activeTab === '5'
                        ? 'border-blue-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
                    ]"
                  >
                    Attachments
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div v-if="employeesState.activeTab === '1'" class="tabcontent">
            <Profile :data="employeesState?.profile" />
          </div>
          <div v-if="employeesState.activeTab === '2'" class="tabcontent">
            <Credential :id="employeesState.profile.id" />
          </div>
          <div v-if="employeesState.activeTab === '3'" class="tabcontent">
            <Assets :id="employeesState.profile.id" />
          </div>
          <div v-if="employeesState.activeTab === '4'" class="tabcontent">
            <Appraisal :id="employeesState.profile.id" />
          </div>
          <div v-if="employeesState.activeTab === '5'" class="tabcontent">
            <Attachments :id="employeesState.profile.id" />
          </div>
        </article>
      </div>
    </div>

    <div
      v-else-if="
        (employeesState?.showDirectory && employeesState.profile) ||
        (!employeesState.showDirectory && !employeesState.profile)
      "
      class="lg:hidden"
    >
      <Directory />
    </div>
    <div
      v-if="!employeesState.showDirectory && !employeesState.profile"
      class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="text-center">
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
            stroke-width="1"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          ></path>
        </svg>
        <p class="mt-5 text-sm text-gray-500">
          Select an employee to view profile
        </p>
      </div>
    </div>
  </main>
</template>
