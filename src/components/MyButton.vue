<template>
    <div>
        <!-- 是组件标签内容的出口组件 -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"MyButton"
}
</script>
<style scoped>
    h3{
        background: red;
    }
</style>