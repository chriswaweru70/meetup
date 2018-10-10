<template>
  <v-alert error dismissible @input="onClose" v-bind:value="true" icon="warning">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
    props: ['text'],
     methods: {
          onClose () {
              this.$emit ('dismissed')
          }
      }
  }
</script>