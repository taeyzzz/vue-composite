import { onMounted } from 'vue'

export default function useCalculation(){
    onMounted(() => {
        console.log("mounted calculation");
    })
    
    const add = (a, b) => {
        return a + b
    }

    const subtract = (a, b) => {
        return a - b
    }

    const doSth = () => {
        console.log("do something");
    }

    doSth()

    return {
        add,
        subtract
    }
}