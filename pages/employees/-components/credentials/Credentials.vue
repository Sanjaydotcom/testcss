<script>
import CredentialCard from "./CredentialCard.vue";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useEmployeesStore } from "~~/store/employees";
export default {
  components: {
    CredentialCard,
  },
  data() {
    return {
      credentials: [],
    };
  },
  created() {
    this.credentials = this.employeesStore.getCredentialById(this.id); //getters
  },
  setup() {
    return {
      credentials,
    };
  },
};
</script>

<template>
  <div class="mx-auto mt-3 max-w-5xl px-4 sm:px-6 lg:px-8">
    <div
      v-for="cred in credentials"
      :key="cred.name"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <CredentialCard :cardName="cred.name" :src="cred.img" />
    </div>
  </div>
</template>

