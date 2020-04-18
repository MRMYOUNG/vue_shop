<template>
    <div class="tabbar">
        <tabbar_item class="tabbar_item"
                     v-for="item in tabbar_items"
                     v-bind:item_data="item"
                     v-bind:key="item.key"
                     v-bind:class="item.key"
                     v-on:emitChildClick="onChildClick">
        </tabbar_item>
    </div>
</template>

<script>

    //v-bind:class='{item.key:true,"focus":item.focus}'

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
                        key: "shouye",
                        focus: true
                    },
                    {
                        icon: "&#xe620;",
                        icon_focus: "&#xe621;",
                        name: "分类",
                        key: "fenlei",
                        focus: false
                    },
                    {
                        icon: "&#xe61c;",
                        icon_focus: "&#xe61b;",
                        name: "购物车",
                        key: "gouwuche",
                        focus: false
                    },
                    {
                        icon: "&#xe61e;",
                        icon_focus: "&#xe61e;",
                        name: "我的",
                        key: "wode",
                        focus: false
                    }
                ]
            }
        },
        methods: {
            onChildClick(item_data) {
                for (let tabbar_item of this.tabbar_items) {
                    tabbar_item.key === item_data.key ? tabbar_item.focus = true : tabbar_item.focus = false
                }
                // for(let i in this.tabbar_items){
                //     console.log(i+"-----------"+this.tabbar_items[i].focus)
                // }
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