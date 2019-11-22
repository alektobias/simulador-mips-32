
export default (req, res, next)  => {
    const { operation } = req.body;
    const { reg, oper } = req;

   
    const operationArray = operation.split(' ').map(item => item.replace(/,/, ''));

    const instruction  = operationArray.map( item => {
        const operation = oper.find( op => op.name === item);
        const register = reg.find( op => op.name === item);
        
        if(operation) return operation
        if(register)    return register;
        return Number(item)
    });

    // Operation
    if (instruction[0].name === 'ADDI'){
        if(typeof instruction[2] !== 'number' && typeof instruction[3] !== 'number' ) return res.status(400).json('ADDI deve conter um numero inteiro')
        
        if(typeof instruction[3] === 'number' && typeof instruction[2] === 'number'){
            console.log(1);
            reg.find( item => item.name === instruction[1].name).value = instruction[2] + instruction[3];
        }
        else if(typeof instruction[3] === 'number'){
            console.log(2);
            reg.find( item => item.name === instruction[1].name).value = Number(reg.find(item => item.name === instruction[2].name).value) + Number(instruction[3]);
        }
        else if(typeof instruction[2] === 'number'){
            console.log(3);
            reg.find( item => item.name === instruction[1].name).value = Number(reg.find(item => item.name === instruction[3].name).value) + Number(instruction[2]);
        }
    }
    if (instruction[0].name === 'ADD'){
        reg.find( item => item.name === instruction[1].name).value = Number(reg.find(item => item.name === instruction[2].name).value) + Number(reg.find(item => item.name === instruction[3].name).value);
    }
    if (instruction[0].name === 'SUB'){
        reg.find( item => item.name === instruction[1].name).value = Number(reg.find(item => item.name === instruction[2].name).value) - Number(reg.find(item => item.name === instruction[3].name).value);
        
    }
    const codeInstruction = [ 0, 0, 0, 0, 0, 0];

    codeInstruction[0] = instruction[0].code;
    codeInstruction[1] = instruction[2].code;
    codeInstruction[2] = instruction[3].code
    codeInstruction[3] = instruction[1].code;
    codeInstruction[5] = instruction[0].funct;

    const binary = codeInstruction.map((item) => {
        const bin = item.toString(2);
        bin.length = 5
        return bin; 
    });


    console.log(binary)

    return next();
}