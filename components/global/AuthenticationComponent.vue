<template>
  <!-- //! do not touch to this component -->
  <div>Here is the Auth0 login</div>
</template>

<script>
export default {
  name: 'PageLogin',
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$auth.loginWith('auth0')
    } else {
      console.log('already logged')
    }
  },
}
</script>
