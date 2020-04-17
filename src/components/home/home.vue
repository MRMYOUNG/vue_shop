<template>
    <div class="home">
        <tabbar class="bottom-tabbar"/>
    </div>
</template>

<script>
    import tabbar from "../tabbar/tabbar"

    export default {
        name: "home",
        components: {
            tabbar
        }
    }
</script>

<style scoped>
    .bottom-tabbar {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: inherit;
        height: 149px;
    }
</style>