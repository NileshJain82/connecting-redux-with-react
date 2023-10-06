export function addition(){
    return {
        type:"add"
    }
}

export function subtraction(){
    return {
        type:"sub"
    }
}

export function addByRandom(num){
    return {
        type:"random",
        payload : num
    }
}
