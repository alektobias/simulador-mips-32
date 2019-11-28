import produce from 'immer';

const INITIAL_STATE = [
    {name: '$zero', code: 0, value: 0},
    {name: '$t0', code: 8, value: null},
    {name: '$t1', code: 9, value: null},
    {name: '$t2', code: 10, value: null},
    {name: '$t3', code: 11, value: null},
    {name: '$t4', code: 12, value: null},
    {name: '$t5', code: 13, value: null},
    {name: '$t6', code: 14, value: null},
    {name: '$t7', code: 15, value: null},
    {name: '$s0', code: 16, value: null},
    {name: '$s1', code: 17, value: null},
    {name: '$s2', code: 18, value: null},
    {name: '$s3', code: 19, value: null},
    {name: '$s4', code: 20, value: null},
    {name: '$s5', code: 21, value: null},
    {name: '$s6', code: 22, value: null},
    {name: '$s7', code: 23, value: null},
    {name: '$t8', code: 24, value: null},
    {name: '$t9', code: 25, value: null},
]

export default function register(state = INITIAL_STATE, action){
    return produce(state, draft => {
        const { type, payload } = action;
        
        switch(type){
            case '@registers/ADDI_VALUES': {
                const { dest, a, b } = payload;
                draft.find( reg => reg.name === dest).value = a + b;
                break;
            }
            case '@registers/ADD_VALUES': {
                const { dest, a, b } = payload;
                draft.find( reg => reg.name === dest).value = a + b;
                break
            }
            case '@registers/SUB_VALUES': {
                const { dest, a, b } = payload;
                draft.find( reg => reg.name === dest).value = a - b;
                break
            }
            default: {
                break;
            }
        }
    });
}