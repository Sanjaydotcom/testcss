<script>
import { ref, reactive, watchEffect, watch } from "vue";
import { FilterIcon, SearchIcon } from "@heroicons/vue/solid";
import { useEmployeesStore } from "~~/store/employees";

export default {
  components: {
    SearchIcon,
    FilterIcon,
  },
  setup() {
    const employees = reactive({
      data: [],
      searchKeyword: null,
    });
    const store = useEmployeesStore();
    const router = useRouter();

    watchEffect(() => {
      employees.data = store.getEmployees();
    });
    watch(useEmployeesStore(), () => {
      employees.data = store.getEmployees();
    });

    const filterEmployees = (search) => {
      employees.data = store.getEmployees().filter((employee) => {
        return employee.name.toLowerCase().includes(search.toLowerCase());
      });
    };
    const addNewOnclick = () => {
      router.push("/employees/new");
    };
    return {
      store,
      employees,
      filterEmployees,
      addNewOnclick,
    };
  },
};
</script>

<template>
  <div class="px-6 pt-6 pb-4">
    <div style="display: flex; justify-content: space-between">
      <h2 class="text-lg font-medium text-gray-900">Employees</h2>

      <button
        type="button"
        @click="addNewOnclick()"
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
        + Add New
      </button>
    </div>
    <p class="mt-1 text-sm text-gray-600">Search directory of employees</p>
    <form class="mt-6 flex space-x-4" action="#">
      <div class="min-w-0 flex-1">
        <label for="search" class="sr-only">Search</label>
        <div class="relative rounded-md shadow-sm">
          <div
            class="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-3
            "
          >
            <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            v-model="employees.searchKeyword"
            v-on:input="filterEmployees(employees.searchKeyword)"
            type="search"
            name="search"
            class="
              block
              w-full
              rounded-md
              border-gray-300
              pl-10
              focus:border-indigo-500 focus:ring-indigo-500
              sm:text-sm
            "
            placeholder="Search"
          />
        </div>
      </div>
      <button
        type="submit"
        class="
          inline-flex
          justify-center
          rounded-md
          border border-gray-300
          bg-white
          px-3.5
          py-2
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
        <FilterIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>
  <!-- Directory list -->
  <nav class="min-h-0 flex-1 overflow-y-auto" aria-label="Directory">
    <!-- <div
        v-for="letter in Object.keys(directory)"
        :key="letter"
        class="relative"
      >
        <div
          class="
            z-10
            sticky
            top-0
            border-t border-b border-gray-200
            bg-gray-50
            px-6
            py-1
            text-sm
            font-medium
            text-gray-500
          "
        >
          <h3>{{ letter }}</h3>
        </div> -->
    <ul role="list" class="relative z-0 divide-y divide-gray-200">
      <li v-for="person in employees.data" :key="person.id">
        <NuxtLink :to="`/employees/${person.id}`">
          <div
            class="
              relative
              flex
              items-center
              space-x-3
              px-6
              py-5
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-indigo-500
              hover:bg-gray-50
            "
          >
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXBx9D///+9w83Y3OHDydLIzdXt7/HN0tn3+Pnq7O/S1t319vfh5Ojd4OX8/P3r7fDhTC8lAAAKfElEQVR4nN2d67LrJgyFOWB8wZf9/m9bO44TOzEgoYVNumY6/dHdhC/chJCE+pddU1t3w2hcY21VVWr+x9rGmXHo6nbK//Uq54dP9WBspWepMy3/obJmqLNy5iJsu7FZyM7ZDpwLaWO6NlNLchC2nas83RYA1ZXpcnQmmnCqjWXTvSmtqcENwhJOnVPJeBukch2yTUjCBU9E96Z0f7hmoQhrI+y8D0hlelDLMIQDf2WJQ1rMaAUQTiNodH4xqhGwuIoJe5cH7wnpxINVSJiXD8IoIuyb3HwARgFhm73/3owCky6ZcDJX8T0YzeWEw4V4q4ZLCXt7ZQeu0jZtOiYRXjpAd4xJQzWBsL4Fb1XCyYNPeNkKeqaEbuQS9tWNfIsq7mxkEo53duAqPWYknG5YQr+lLcse5xDeucQcxVlwGIQFjNBNnJFKJ7zEyqZKN3DCyd4N9SHyZCQS9ncDnYi4bdAI/0oaoZs0zSFHIhxKBJwRSccNCmGhgEREAmGxgLRdI05Y0Db4LQJilLBoQApijLDgIboqOhcjhMUDxhHDhF35gDNi+H4jSFj/AuCMGDxqhAj73wCcFXIYBwinu9vNUMAMDxCWdpoIyaYQNuhWPMJKVuEvHP3nRS8hdp+YoRozdHXdt31fd4NppCENn1/g3TN8hMhldAmv+D7MtbDIhvVLfAuqhxC4ymjnX8z/kO5lz2rjIUStMtrGjKoB5qH0rDbnhCBzW1eUcIquAn3buRF+SoiZhJp85TdgVp3zqXhKCLmb0I7ump4w87GiEjrEt0Xs4U9hbHxHI0Q41nTDjfWBOGTP3G8nhIhvSrmthdwsUwiN/Gu4F2BPIcyo75/2ixBwZKL5MfMg6i/j6YtQPh2YawwY8Wvf/ySUf0dyDy6SmxpfX/9JKP0CSfTSIsBOFSaULzP0i71zyWfJx098JGzl80Aa8yo/1eij1+ZIKB4jxBuvkOQGx9GyORDKd4ozs4krsY163DEOhHLXDAAQME4Pa8G+TeIuFOyEe4l3rEMn7gnFXRjw6bEkXk/3nbgjlHchKtNFfJTad+KOULyQoroQcATfrXhvwqmQWbhIPhPfe+KbcBR+KGYh3Zol1duwUTk+VC7xaVh/E2KXaKnE3r73EeNFKF6hTx1dyZK25r3sbYTyrQI5SBHDdBtSCvaJ2NxWsf39+sU3QvnZGpuHLd67XmvNk1DukMVt96vEm/42qJ6EcucB4ty0F6xFKyHgujDNReqX3AB5uhtWQvkgBS80wCathPIhEY7aSRDghs/tCMUf9un+kQvgFFNvQsDvBd4sENvFc1w9CAG3PkUSmhch4OpOh9ubIMAotRshYsiX2Ifr4rAQIm6YyyTsnoSIe/si19LHfrEQIkIvoOffRZDg1molhPxaBdo0ah1ZChXoIbkXPROkpMHyuytIaAL8iA9q1eIdU6goPfT5ENYqBdlaFf6MD2nUYogozEIDP1yAInjnpUbBsiexR2DAAXjR/Lsr1GeBJyKqdMMwE0IiERXYqgFNncWqUbi0CuSOCCvwY2dCWCkP5DCFNar6p3BR+cDVFJgLMSlg+pY0HOotXL6O7hXw54KdL4C/uq5VB/swXCciU646hSxLBpqJ0MTOQUFztTHLKTItUI8Kc0rZPg+xJ2Lz441CmTSrAIYNzJxZ5RQ4kVI+TsGpq41C58JKz/rQWTPLwgmFLil4iQOr4BXmRFsGvgJABkKJaZOhAkCVgTAdMUc1qkxVENMGaqZqVFkYk5abPHVUsoxSleQgzlT2NReh0pZn3bS5ik5W8P3wLY6Nmq/SD37Hf4te2rjOWDXUou3Sg2iVxvNWdm/AZ4sP6XjF+DpzXWKHPR+eSNvBf2cz4WpG+GSwZ/xTad0MZz3ZDxeURJ3P+NeUj9eqGV9PdC2PeI1Npmc/PjVcRLjoUVxoeZfM+4hXDnVIf2mJ0jXS512idA+8tyhTE/DuqUhVyPvDImWBd8BlygHv8cvUCIzFKFL6DxdPU6Ye8TSgmKgypYFxbWVqjWu76eWfS2SA8aVF6hlf+j9eap4xwv9ju+0Z542wanQOyZu1xerLJuJ8qm2cM3g511QyR8Ar3yJ9Imrthj7nq9pTP7j0znzlzKRORNRrrzF1qQ65R4mA9Nw13aCTSPxKcxrvctcSjG9t4Q9oB5Xi+F/r5STmkCbWfpSIP9DWjMHEPOBrO3AV+1G0fR4wc7+oci6ffk28FfGQy807QaHTY+hiHYOeaa0JNRXuA+T14qGmAmeYwnMpOWrpgB91MeirKby0AE+MS4iN7Plv8lqMzsLjinrf+VWfhnp9ga2VlCLiVPyqMURcpm4eo4uI4/SrThQx3gOXUpEuUmzFSa0v0pZYQBdSO/H157yaezduhTtRJtRZzT1KEQN0wnaaCBfzp3UTCXYNvDREmgh9cVr7krBhlDFICcPUU780ukjBc+5TFTVPPDVoo50IrwyRqpgV7a0jHOtEeHWPVMW6wlsLOvZ/FrLQRJeaQD3v2HJ6KUZI4WYGarJHfMP3W92bgtZ3sK5++GzyI4TBtxHC/f8jhB9/y3mj5CcIo2+UhOyFnyCMvjMT2jF+gZDwVlBgsfkFQsJ7T4HF5hcIv/+W8+5a+YTEd9e8lk35hMS387wfUDwh+f1Dn6+ndELGG5aesgaFE3LeIfXt+2U4onzF3FhvyXo+44a77TN57th47wF7pmIRnpr2fIwy33T2meAaXVyer/OUdv/w4r6tru++ufDEKyS8re49ZdwUpvCUx80W8OQGCL35Qjdez/iyJQO/esi75DtIQSoJJckT/BV0cwb9Z757rJvWm97zRHn4zi/sIfT6NKobnMO+xkSGVMQH6kW8fKROvvDEWEtiXl5vIjT/5W2R/nzRwtGfOurH9ud6X3hR439dPm5Ixj31AcTmovCozhvuTbCUCXcRARfqJaZ46w8QpqwGlNuWEGKVffsPlEQgLXek+6TQjWTmcO9QVAJtIaDdmAVDWGgVTJLUefb4VbThQ7wTDFbh0pkYw3yKOHaot55TOP4hw1gdwnyWuh3T73UjKQ+6Qb2Vu2gaw/lAjGMq4+Y6VudFV4FKNCzVsQQSzi7FuZuPh8zpRm7n9CaezsXZoljRB1M8cUUrIxmt/Tz7Yt+hyVPwIWZ8BaEi0dxC1yUN19qEF5fn5zPtKG4ESU0KQtbajn8syn4gFh1iG1H8GBlqbS6tKzfUBMy+Gy01xzDBu5AQBfRHa8yG2ZhhKxB11KNclLOKkUGZYgUnxTlx08geSb22ccaM47jkvzbWVvxU3zSPe1okV5+W1bkSJSaE0osUIgiBT2yQleoYSo/Gu7TYhOBKSBBv2GaueLjjk5xdRBGVeatWvvhk5xZhzGjURr6bT0w492PWsRqvDpqfcJ6PJlMZRK0NwHeAiWzuyGYXgw9UsQEVu0051XHwlEG5RYDR6V0D6sjl+IVrFjT+fuocx44+pcPi/QMTLqpN+pycTyIG7kPPkUPRDi7uizihc10Ot2uuLJG2Gxvq6Wj+u2bMQrcoax5MWw/OPuoG+8hUZd18QM7ZiAsyfZaz/DCux96qWmol2+U0PA7d+dkfrP8AELeBvwZOOcwAAAAASUVORK5CYII="
                alt=""
              />
            </div>
            <div class="min-w-0 flex-1">
              <div class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ person.name }}
                </p>
                <p class="truncate text-sm text-gray-500">
                  {{ person.designation }}
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <!-- </div> -->
  </nav>
</template>
