<template>
  <q-page class="div1" >
    <div class="div2">
      <q-input
      filled
      autogrow
      v-model="serachVk"
      input-class="text-white"
    />
      <q-btn @click="ssssssa" style="margin-left: 10px;" push color="primary" label="Search"/>
      <span class="count1">
        Пользователей: <br>
       {{ countUs }}
      </span>
    </div>
    <usersVk :posts="paginatedData"/>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
      input-class="text-white"
        v-model="current"
        :max="50"
        input
        gutter="sm"
      />
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'
import usersVk from '../components/usersVk.vue'
import { hooksApi } from '../hooks/hooksApi'

export default defineComponent({
  components: {
    usersVk 
  },

  name: 'IndexPage',

  data() {
    return {
      size: 6,
      expended: false
    }
  },

  setup (props) {
    const {items , serachVk , apiVk , countUs , current , progress , ssssssa} = hooksApi()
    return {
      items,
      serachVk,
      apiVk,
      countUs,
      ssssssa,
      current,
      progress
    }
  },

  computed: {
    paginatedData(){
      const start = (this.current - 1) * this.size,
            end = start + this.size;
      return this.items.slice(start, end);
      
    },
  },
})
</script>

<style scoped>
  .div1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .div2 {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .div3 {
    width: 250px;
    height: 400px;
    border: 3px solid grey;
    border-radius: 3%;
    margin-top: 30px;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .count1 {
    border: 2px solid gray;
    padding: 0px 10px 0px 10px;
    border-radius: 3px;
    margin-left: 10px;
    text-align: center;
  }

</style>
