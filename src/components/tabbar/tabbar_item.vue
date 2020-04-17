<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: "tabbar_item",
        props: ["item_data"],
        data() {
            // message:item_data[0].name
        }
    }
</script>

<style scoped>

</style>