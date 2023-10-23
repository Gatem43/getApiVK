
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-blue-grey-9 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-avatar>
            <img src="https://previews.123rf.com/images/mmfcreative/mmfcreative2101/mmfcreative210107935/162050410-vk-initial-letter-vector-logo-icon.jpg">
          </q-avatar>
          API
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="DashBoard" />
        <q-route-tab to="/myDescription" label="Описание" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'MainLayout',

})
</script>
