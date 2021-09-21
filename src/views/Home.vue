<template>
  <div class="home">
    {{ getSex(Sex.FEMALE) }}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { getSex, Sex } from '@/constant/enums/sex';
import { useStore } from 'vuex';
import { text } from '@/api/text';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    function save () {
      useStore().commit('setUserId', 13123);
    }
    save();
    text().then(res => {
      console.log(res);
    });
    return {
      getSex,
      Sex,
    };
  }
});
</script>
