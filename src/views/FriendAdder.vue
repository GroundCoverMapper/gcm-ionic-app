<!-- FriendAdder.vue -->
<template>
  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Name:
      <input v-model="friendName" type="text" />
    </label>
    <br />
    <label>
      Age:
      <input v-model="friendAge" type="number" />
    </label>
    <br />
    <button @click="addFriend">Add Friend</button>
    <p>{{ status }}</p>
  </fieldset>
  <a href="/friendlist">friend list</a>
</template>

<script>
import { db } from '../../db';

export default {
  name: 'FriendAdder',
  data: () => {
    return {
      status: '',
      friendName: '',
      friendAge: 21,
    };
  },
  methods: {
    async addFriend() {
      try {
        // Add the new friend!
        const id = await db.friends.add({
          name: this.friendName,
          age: this.friendAge,
        });

        this.status = `Friend ${this.friendName}
          successfully added. Got id ${id}`;

        // Reset form:
        this.friendName = '';
        this.friendAge = defaultAge;
      } catch (error) {
        this.status = `Failed to add
          ${friendName}: ${error}`;
      }
    },
  },
};
</script>

