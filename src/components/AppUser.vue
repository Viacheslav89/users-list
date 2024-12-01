<template>
    <div class="user">
        <div class="user__wrapper">
            <h4 class="user__name">{{ user.name }}</h4>
            <div class="user__email">{{ user.email }}</div>
            <div class="user__address">
                <div class="user__city">{{ user.address.city }}</div>
                <div class="user__street">{{ user.address.street }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { User } from "./../type"
import { useUsers } from "./../composables/useUsers";


defineProps<{
    user: User;
}>();

const { fetchUsers, usersList, searchUserCity, searchUserName } = useUsers();



const test = "South";
// v-if="user.address.city.includes(test)"




</script>




<style scoped lang="scss">
.user {
    width: 240px;
    border: 1px solid black;
    border-radius: 7px;
    background-color: beige;
    margin-bottom: 15px;

    &__wrapper {
        margin-left: 10px;
    }

    &__email {
        margin-bottom: 10px;
    }

    &__address {
        margin-bottom: 10px;
    }
}

</style>