<template>
  <article class="cms-block-image-three-column">
    <CmsGenericElement
      :content="getLeftContent"
      class="cms-block-image-three-column__image"
    />
    <CmsGenericElement
      :content="getCenterContent"
      class="cms-block-image-three-column__image"
    />
    <CmsGenericElement
      :content="getRightContent"
      class="cms-block-image-three-column__image"
    />
  </article>
</template>

<script>
import CmsGenericElement from "sw-cms/CmsGenericElement"

export default {
  name: "CmsBlockImageThreeColumn",

  components: {
    CmsGenericElement,
  },

  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    getSlots() {
      return this.content.slots || []
    },
    getLeftContent() {
      return this.getSlots.find(({ slot }) => slot === "left")
    },
    getCenterContent() {
      return this.getSlots.find(({ slot }) => slot === "center")
    },
    getRightContent() {
      return this.getSlots.find(({ slot }) => slot === "right")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

::v-deep.cms-block-image-three-column {
  display: grid;
  grid-gap: var(--spacer-sm);
  grid-template-rows: repeat(3, auto);
  margin: var(--spacer-sm);

  &__image {
    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
  }

  @include for-desktop {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 340px);
    margin: var(--spacer-sm) 0;
  }
}
</style>
