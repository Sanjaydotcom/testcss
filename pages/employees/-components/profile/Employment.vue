<script>
import EditEmployee from "./EditEmployee";
export default {
  data() {
    return {
      IsEditClicked: false,
    };
  },
  name: "Employment",
  props: ["id", "employment", "editEmployeeButtonClick"],
  methods: {
    editButtonClick() {
      this.IsEditClicked = !this.IsEditClicked;
      console.log("IsEditClicked", this.IsEditClicked);
    },
  },
};
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="overflow-hidden bg-white sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <div
        class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"
      >
        <div>
          <h2 class="text-md font-medium text-gray-500">Employment Details</h2>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Employment details and application.
          </p>
        </div>
        <div class="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            @click="editEmployeeButtonClick"
            class="inline-flex items-center rounded bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
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
    </div>
    <div class="border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Designation</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ employment.designation }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Department</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ employment.department }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Branch</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ employment.branch }}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Division</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ employment.division }}</dd>
        </div>

        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Joining Date</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ employment.joiningDate }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Experience</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ employment.experience }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Year of Service</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ employment.yearOfService }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Gross Salary</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ employment.grossSalary }}
          </dd>
        </div>

        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Allowance</dt>
          <dd class="mt-1 text-sm text-gray-900">{{ employment.allowance }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
