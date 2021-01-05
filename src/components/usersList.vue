<template>
  <div>
    <v-card
      v-for="User in Users"
      :key="User.id"
      max-width="500"
      style="margin: auto; margin-top: 20px"
    >
      <v-card-title class="white--text mt-8">
        <v-avatar size="56">
          <img alt="user" :src="User.avatar" />
        </v-avatar>
        <p class="ml-3">
          {{ User.first_name }}
        </p>
      </v-card-title>

      <v-card-subtitle>
        {{ User.email }}
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-view-agenda-outline</v-icon>
        </v-btn>
        <v-btn @click="EditData(User)" icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn @click="deleteUser(User.id)" icon>
          <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="editUser" max-width="400">
      <v-card>
        <div style="padding: 10px">
          <v-text-field v-model="editData.first_name"> </v-text-field>
          <v-text-field v-model="editData.last_name"> </v-text-field>
          <v-text-field v-model="editData.email"> </v-text-field>
          <v-btn rounded small @click="editForm()">Submit</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      editUser: false,
      editData: [],
    };
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    // viewUser(id) {
    //   this.$store.dispatch("viewOneUser", id);
    // },
    EditData(User) {
      this.editData = User;
      this.editUser = true;
    },
    editForm() {
      //this.$store.dispatch("editUserForm", editData);
      this.editUser = false;
    },
  },
  computed: {
    ...mapGetters({
      Users: "GetUsers",
    }),
  },
};
</script>
<style >
</style>
