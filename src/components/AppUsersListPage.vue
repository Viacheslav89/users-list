<template>
  <div class="users-list">
    <header class="header">
      <h3 class="header__title">Список пользователей</h3>
      <div class="header__nav">
        <input
          type="text"
          class="header__input"
          placeholder="Имя"
          v-model="searchUserName"
        />
        <input
          type="text"
          class="header__input"
          placeholder="Город"
          v-model="searchUserCity"
        />
      </div>
    </header>

    <main class="main">
      <ul class="main__list">
        <li class="main__item" v-for="user of getUsersList(searchUserCity, searchUserName)">
          <AppUser :user="user" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppUser from "./AppUser.vue";
import { useUsers } from "./../composables/useUsers";
import { onMounted, watch } from "vue";
import type { User, Address, Geo, Company } from "./../type";

const { fetchUsers, usersList, searchUserCity, searchUserName } = useUsers();

fetchUsers();

const getUsersList = (city: string, name: string) => {
  if (!usersList.value) {
    return usersList.value;
  } else {
    return usersList.value.filter((user: User) => {
       return user.address.city.includes(city) && user.name.includes(name);
    })
  }
};


</script>

<style scoped lang="scss">
.users-list {
  width: 800px;
  background-color: rgb(170, 172, 172);
  margin: 0 auto;
}

.header {
  padding: 15px;
  &__title {
    text-align: center;
    font-size: 23px;
    margin-bottom: 30px;
  }

  &__nav {
    width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  &__input {
    width: 285px;
    height: 25px;
    border-radius: 8px;
    padding-left: 8px;
  }
}

.main {
  min-height: 600px;

  &__list {
    padding: 0;
    width: 760px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__item {
    list-style: none;
  }
}
</style>
