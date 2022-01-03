<template>
    <div>
        application layout
    </div>
    <div>
        <button @click="handleClickPath('/application')">Home Page</button>
        <button @click="handleClickPath('/application/calculator')">Calculator App</button>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    methods: {
        handleClickPath(path){
            this.$router.push(path)
        }
    }
}
</script>
