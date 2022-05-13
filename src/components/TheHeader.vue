<template>
    <header>
        <div class="header_navigation">
            <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="25" height="2" rx="1" fill="#E2E2E2"/>
                <rect width="25" height="2" rx="1" fill="#E2E2E2" y="8"/>
            </svg>
        </div>
        <div class="header_logo">
            <router-link to="/">English Trainer</router-link>
        </div>
        <div class="header_profile">
            <div class="header_profile_photo">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15">
                    <path fill="#cccccc" d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
                    <path fill="#cccccc" d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
                </svg>
            </div>
        </div>
    </header>
    <!-- <TheNavbar /> -->
</template>

<script>
import TheNavbar from './TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style scoped>
header {
    height: var(--header-height);
    width: 100%;
    max-width: var(--header-max-width);
    margin: auto;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(68,68,68,0.1);
}
header div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.header_navigation, .header_profile {
    width: 50px;
    cursor: pointer;
}
.header_logo {
    font-size: 14px;
}
.header_logo a {
    text-decoration: none;
    color: var(--main-color);
}
.header_profile_photo {
    width: 30px;
    height: 30px;
    border: 2px solid #F6F6F6;
    border-radius: 50%;
}
</style>