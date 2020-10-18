<template>
  <div>
    <h1>{{ getPartFromUrl.title }} is type of {{ partType }}</h1>
    <div>
      {{ getPartFromUrl.description }}
    </div>
  </div>
</template>

<script>

import PartsMixins from './PartsMixin';
export default {
  name: "partInfos",
  mixins: [PartsMixins],
  computed: {
    getPartFromUrl() {
      // eslint-disable-next-line no-unused-vars
      const type = this.$route.params.partType;
      // eslint-disable-next-line no-unused-vars
      const partId = this.$route.params.id;

      // getting params from route
      // eslint-disable-next-line no-unused-vars
      const { partType, id } = this.$route.params;

      /* getting  params with props and using params validators*/
      //const { partType, id } = this;
      /* getting params with props and using validators */
      //return availableParts[partType].find(part => part.id === +id);
      return this.parts[partType].find(part => part.id === +id); // now parts is computed into mixins
    }
  },
  props: {
    /*
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }, */
    partType: { type: String },
    id: { type: Number }
  }
};
</script>

<style scoped></style>
