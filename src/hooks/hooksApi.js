import { ref } from 'vue'
import axios from 'axios'

export function hooksApi() {
    const items = ref([]);
    const serachVk = ref("");
    const apiVk = ref('vk1.a.PvDeHH_eyTkaGVy3h9xZ2H2PJFS-35TLN5_OQHIzdnp45J5JQbEtafhb5JLqyLuqtFhfFpO9DeskbMEXu0xEORwKCrtZ29mKw4EjKUsgegw98EWksyG2wr3CuKbfYaqvbeD1H81H8cI2iA65qk-puEZliJwOsDdvSPriHDSIYOO2B3aAiEKtn2xhta3TIHxoC0YuwhwHEKTHnuFdU88RQA');
    const countUs = ref(0);
    const current = ref(1);

    const ssssssa = () => {
        axios
        .get('https://api.vk.ru/method/users.search', {
          params: {
            access_token: apiVk.value,
            fields: 'photo_200,common_count,status,followers_count,can_send_friend_request,contacts,online',
            count: 300,
            q: serachVk.value,
            v: '5.154',
          },
         })
        .then(response => (console.log(response.data),
        countUs.value = response.data.response.count,
        items.value = response.data.response.items,
        current.value = 1
         ));

    }
    
    return {
        items , serachVk , apiVk , countUs , ssssssa , current
    }
}