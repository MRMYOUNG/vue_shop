<template>
    <div class="tabbar">
        <tabbar_item class="tabbar_item"
                     v-for="item in tabbar_items"
                     v-bind:item_data="item"
                     v-bind:key="item.key"
                     v-on:click="item_click(item.key)">
        </tabbar_item>
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
                        name: "首页",
                        //自己设置的索引值
                        key: 1
                    },
                    {
                        icon: "&#xe620;",
                        icon_focus: "&#xe621;",
                        name: "分类",
                        key: 2
                    },
                    {
                        icon: "&#xe61c;",
                        icon_focus: "&#xe61b;",
                        name: "购物车",
                        key: 3
                    },
                    {
                        icon: "&#xe61e;",
                        icon_focus: "&#xe61e;",
                        name: "我的",
                        key: 4
                    }
                ]
            }
        },
        methods: {
            item_click(key) {
                switch (key) {
                    //首页
                    case 1:
                        break;
                    //分类
                    case 2:
                        break;
                    //购物车
                    case 3:
                        break;
                    //我的
                    case 4:
                        break;
                }
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
        justify-content: space-around;
        width: inherit;
        height: 149px;
        background-color: #f6f6f6;
    }

    .tabbar_item {
        flex-grow: 1;
    }
</style>