export default (req, res, next) => {
    req.oper = [
        {
            name: 'ADDI',
            code: 8,
            funct: 0,

        },
        {
            name: 'ADD',
            code: 0,
            funct: 32,

        },
        {
            name: 'SUB',
            code: 0,
            funct: 34,

        }
    ];
    
    return next();
}