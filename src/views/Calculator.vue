<template>
    <div>
        Calculator App
    </div>
    <input type="number" v-model="aData" @input="handleAChanged" />
    <input type="number" v-model="bData" @input="handleBChanged" />
    <div>
        {{ result }}
    </div>
    <button @click="handleAdd">+</button>
    <button @click="handleSubtract">-</button>
</template>
<script>
import useCalculation from '../composables/use-calculation'
export default {
    setup(){
        console.log('setup');
        const { add, subtract} = useCalculation();
        return { add, subtract }
    },
    data(){
        console.log('data');
        return {
            aData: "",
            bData: "",
            result: ""
        }
    },
    methods: {
        handleAChanged(e){
            this.aData = e.target.value
        },
        handleBChanged(e){
            this.bData = e.target.value
        },
        handleAdd(){
            this.result = this.add(this.aData*1, this.bData*1)
        },
        handleSubtract(){
            this.result = this.subtract(this.aData*1, this.bData*1)
        }
    }
}
</script>