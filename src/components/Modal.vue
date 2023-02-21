<template>
		<div v-if="isModalVisible" class="modal">
			<div @click="onToggle"  class="absolute bg-black opacity-70 inset-0 z-0"></div>
			<div ref="modal" id="modal-wrapper" class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white" tabindex="-1">
				<div class="modal__header">
					<button @click="onToggle"
                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
						<svg class="mr-1" width="9" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M.563 6.5a.736.736 0 000 1.031l6.062 6.094c.313.281.781.281 1.063 0l.718-.719c.281-.281.281-.75 0-1.062L3.594 7l4.812-4.813c.281-.312.281-.78 0-1.062L7.687.406c-.28-.281-.75-.281-1.062 0L.562 6.5z"
								fill="#1ECAAB"
							/>
						</svg>

						<span class="fs-14 font-bitter">
							{{ title }}
						</span>
					</button>
				</div>
				<div v-if="isOpen" class="modal__content">
					<slot></slot>
				</div>
			</div>
		</div>
</template>

<script src="">

export default {
	name: 'Modal',
	data() {
    return {
      isOpen: true
    };
  },
  props: {
	title: {
			type: String,
			default: ''
		}
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style src="" lang="" scoped></style>
