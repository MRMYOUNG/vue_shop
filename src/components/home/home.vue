<template>
    <div class="home">
        <router-view class="luyouzhaneifu"></router-view>
        <tabbar class="bottom-tabbar"/>
    </div>
</template>

<script>
    import tabbar from "./tabbar/tabbar"

    export default {
        name: "home",
        components: {
            tabbar
        }
    }
</script>

<style scoped>
    .home {
        width: inherit;
        height: inherit;
    }

    .bottom-tabbar {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: inherit;
        height: 84px;
    }
</style>