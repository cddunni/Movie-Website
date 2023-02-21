<template>
  <button
    type="submit"
    class="bg-green hover:bg-[#d22f27ea] text-white flex justify-center py-2 px-4 text-16 transition ease-in-out cursor-pointer h-10 duration-500 rounded-lg"
    :class="classes"
    loading="loading"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot>My Button</slot>
  </button>
</template>

<script src=''>
export default {
  name: "CButton",
  props: {
    size: {
      type: String,
      default: "md",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  components: {},
};
</script>
<style lang="" src="" scoped></style>
