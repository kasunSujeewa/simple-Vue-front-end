<template >
  <div>
    <v-card>
      <h1>{{ User.first_name }}</h1>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created: {
    ...mapGetters({
      User: "getOneUser",
    }),
  },
};
</script>
<style >
</style>