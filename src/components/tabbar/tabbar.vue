<template>
    <div class="tabbar">
        <tabbar_item class="tabbar_item iconfont" v-bind:item_data="tabbar_items"></tabbar_item>
    </div>
</template>

<script>
    import tabbar_item from "./tabbar_item"

    export default {
        name: "tabbar",
        data() {
            return {
                tabbar_items: [
                    {
                        //失去焦点图
                        icon: "&#xe619;",
                        //焦点图
                        icon_focus: "&#xe618;",
                        name: "首页"
                    },
                    {
                        icon: "&#xe620;",
                        icon_focus: "&#xe621;",
                        name: "分类"
                    },
                    {
                        icon: "&#xe61c;",
                        icon_focus: "&#xe61b;",
                        name: "购物车"
                    },
                    {
                        icon: "&#xe61e;",
                        icon_focus: "&#xe61e;",
                        name: "我的"
                    }
                ]
            }
        },
        components: {
            tabbar_item
        }
    }
</script>

<style scoped>
    .tabbar {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        width: inherit;
        height: 149px;
        background-color: #f6f6f6;
    }

    .tabbar_item {
        flex-grow: 1;
    }
</style>