export function addi(dest, a, b) {
    return{
        type: '@registers/ADDI_VALUES',
        payload: { dest, a, b }
    }
}

export function add(dest, a, b) {
    return {
        type: '@registers/ADD_VALUES',
        payload: { dest, a, b }
    }
}

export function sub(dest, a, b) {
    return {
        type: '@registers/SUB_VALUES',
        payload: { dest, a, b }
    }
}