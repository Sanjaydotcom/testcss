<script>
import { useAuthStore } from "../../store/auth";

export default {
  setup() {},
  data() {
    return {
      account: undefined,
    };
  },

  mounted() {
    const accounts = this.$msal.getAllAccounts();
    if (accounts.length == 0) {
      return;
    }
    this.account = accounts[0];
    console.log(accounts[0]);
  },

  methods: {
    async SignIn() {
      console.log("Signing In");
      const authStore = useAuthStore();
      await this.$msal
        .loginPopup({})
        .then(() => {
          const myAccounts = this.$msal.getAllAccounts();
          this.account = myAccounts[0];
          authStore.setHomeAccountId(this.account.homeAccountId);
          authStore.setAccessToken(this.acquireToken());
        })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.error(`error during authentication: ${error}`);
        });
    },

    async acquireToken() {
      console.log("Acquiring token");
      const accounts = this.$msal.getAllAccounts();
      const account = accounts[0];
      const tokenRequest = { scopes: ["user.read"], account };
      const tokenResponse = await this.$msal.acquireTokenPopup(tokenRequest);
      return tokenResponse;
    },
  },
};
</script>
<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center items-center">
        <img
          class="h-12 w-auto"
          src="https://avatars.githubusercontent.com/u/103851215"
          alt="LogistiX"
        />
        <p class="text-3xl ml-2 text-gray-500 font-medium">LogistiX</p>
      </div>
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <button
          @click="SignIn"
          class="
            flex
            w-full
            justify-center
            rounded-md
            border border-transparent
            bg-blue-600
            py-2
            px-4
            text-sm
            font-medium
            text-white
            shadow-sm
            hover:bg-blue-700
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
          "
        >
          Signin with Microsoft
        </button>
      </div>
    </div>
    <p class="font-light text-sm text-gray-500 text-center mt-4">
      Powered by LogistiX
    </p>
  </div>
</template>
