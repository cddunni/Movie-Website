<template>
     <dialog
        v-bind="$attrs"
        :class="[     {
            'w-[407px]': size === 'sm',
            'w-[513px]': size === 'md'
          },
          'dialog m-auto',
          modalClass]"
      >
        <div :class="['p-[40px]', bodyClass]"><slot></slot></div>
      </dialog>
</template>
<script>

export default {
  name: "Dialog",
  props : {
    onClose: {
      type: Function
    },
    modalClass: {
      type:String
    },
    bodyClass: {
      type: String
    },
    size: {
      type: String,
      default: "sm"
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    const dialog = this.$parent.$refs.dialog.$el
    console.log(dialog)
    console.log(this.$parent.$refs)
    dialog.addEventListener('click', this.closeModal);
  },
  beforeDestroy() {
    const dialog = this.$parent.$refs.dialog.$el
    dialog.removeEventListener('click', this.closeModal);
  },
  methods: {
    closeModal(event) {
      const dialog = this.$parent.$refs.dialog.$el;
      const rect = dialog.getBoundingClientRect();

      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        dialog?.close?.();
        this.onClose?.();
      }
    }

  }
}
</script>
<style src="./dialog.css" scoped>

</style>

