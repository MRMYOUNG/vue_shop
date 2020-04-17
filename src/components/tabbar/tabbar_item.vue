<template>
    <div class="tabbar_item">
        <span class="iconfont" v-html="icon"></span>
        <span class="iconfont">{{ name }}</span>
    </div>
</template>

<script>
    export default {
        name: "tabbar_item",
        props: ["item_data"],
        data() {
            return {
                icon: this.item_data.icon,
                icon_focus: this.item_data.icon_focus,
                name: this.item_data.name,
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .tabbar_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .iconfont {
        font-size: 23px;
    }
</style>