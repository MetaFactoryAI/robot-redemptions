<template>
  <UiSticky class="mb-4">
    <nav id="topnav" class="border-bottom width-full bg-black">
      <Container>
        <div class="d-flex flex-items-center" style="height: 78px;">
          <div class="flex-auto d-flex flex-items-center">
            <router-link
              :to="{ name: 'home' }"
              class="d-inline-block text-blue d-flex text-white"
              style="font-size: 24px; padding-top: 4px;"
            >
              <img
                src="~/@/assets/logo.png"
                class="mr-4 v-align-middle"
                width="32"
                height="32"
              />
              <span v-text="'MetaFactory ROBOT Claims'" class="hide-sm" />
            </router-link>
          </div>
          <div :key="web3.account">
            <template v-if="$auth.isAuthenticated && !wrongNetwork">
              <UiButton
                @click="modalOpen = true"
                class="button-outline"
                :loading="loading"
              >
                <Avatar :address="web3.account" size="16" class="mr-2 ml-n1" />
                <span v-if="web3.name" v-text="web3.name" />
                <span v-else v-text="_shorten(web3.account)" />
              </UiButton>
            </template>
            <UiButton
              v-if="web3.injectedLoaded && wrongNetwork"
              class="text-red"
            >
              <Icon name="warning" class="ml-n1 mr-1 v-align-middle" />
              Wrong network
            </UiButton>
            <UiButton
              v-if="showLogin"
              @click="modalOpen = true"
              :loading="loading"
            >
              Connect wallet
            </UiButton>
            <UiButton @click="modalAboutOpen = true" class="ml-2">
              <span v-text="'?'" class="ml-n1 mr-n1" />
            </UiButton>
          </div>
        </div>
        <ModalAccount
          :open="modalOpen"
          @close="modalOpen = false"
          @login="handleLogin"
        />
        <ModalAbout :open="modalAboutOpen" @close="modalAboutOpen = false" />
      </Container>
    </nav>
  </UiSticky>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      modalOpen: false,
      modalAboutOpen: false
    };
  },
  computed: {
    wrongNetwork() {
      return this.config.chainId !== this.web3.injectedChainId;
    },
    showLogin() {
      return (
        (!this.$auth.isAuthenticated && !this.web3.injectedLoaded) ||
        (!this.$auth.isAuthenticated && !this.wrongNetwork)
      );
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin(connector) {
      this.modalOpen = false;
      this.loading = true;
      await this.login(connector);
      this.loading = false;
    }
  }
};
</script>
