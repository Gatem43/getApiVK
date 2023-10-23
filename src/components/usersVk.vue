<template>
  <div class="div2" style="width: 100%;" > 
    <div class="q-pa-md row items-start q-gutter-md" v-for="item in posts" :key="item.id">
      <q-card class="my-card bg-blue-grey-9 text-white" style="width: 250px;" flat bordered>
        <q-img
          :src="item.photo_200"
        />

        <q-card-section>
          <div class="text-h6 q-mt-sm q-mb-xs">{{ item.last_name }} {{ item.first_name }}</div>
          <div class="text-caption">
            
          </div>
        </q-card-section>

        <q-card-actions>
          <q-space />

          <q-btn label="Показать" color="primary" @click="item.alert = true" />
        </q-card-actions>

        <q-dialog
          v-model="item.alert"
        >
      <q-card style="width: 400px; max-width: 80vw;" class="bg-blue-grey-9 text-white">
        <q-card-section>
          <div align="center"><q-img :src="item.photo_200" style="width: 260px; border-radius: 100px;"/></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-h4">
            {{ item.last_name }}
            {{ item.first_name }}
          </div>
          <div class="text-h6">
            Онлайн: <span v-if="item.online === 0">Нет</span> <span v-else>Да</span> <br>
            Статус: <span v-if="item.status > ''">{{ item.status }}</span> <span v-else>Отсутствует</span> <br>
            Подписчиков: <span v-if="item.followers_count  > 0">{{ item.followers_count }}</span> <span v-else>Закрытый профиль</span> <br>
            Уведомления: <span v-if="item.can_send_friend_request === 1">Уведомление будет отправлено</span> <span v-else>Уведомление не будет отправлено</span> <br>
            Телефон: <span v-if="item.mobile_phone > ''">{{ item.mobile_phone }}</span> <span v-else>Отсутствует</span> <br>

          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
      </q-card>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        posts: {
            type: Array,
        },
      },
      data() {
        return{
        }
      },
      methods: {
        ksksksk() {
          const result = this.items.reduce((acc,curr)=>{
            acc.push({
              ...curr,
              alert: false
            })
            return acc
      }, [])
      }
  }
    }
</script>

<style scoped>
  .div2 {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>

