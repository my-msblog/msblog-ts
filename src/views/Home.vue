<template>
  <div class="home">
    {{ getSex(Sex.FEMALE) }}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { getSex, Sex } from '@/utils/enum/sex';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    return {
      getSex,
      Sex,
    };
  }
});
</script>
