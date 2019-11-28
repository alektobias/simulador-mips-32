import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { add, addi, sub } from '../../Store/modules/registers/actions';

export default function Home() {
    const dispatch = useDispatch();
    const registers = useSelector(state => state.registers);
    const [instructions, setInstructions] = useState([]);
    const [instruction, setInstruction] = useState('');

    const [codeInstructions, setCodeInstructions] = useState([]);
    const [binInstructions, setBinInstructions] = useState([]);
   
    function toBin(value, length) {
        return (`000000`.slice(value.toString(2).length) + value.toString(2)).slice(-length);
    }

    function handleSubmit(e){
        e.preventDefault()
        setInstructions([...instructions, instruction]);

        var inst = instruction.split(' ');
        inst = inst.map(item => item.replace(/,/, ''));
        
        const selectedReg = inst.map( item => {
            return registers.find( reg =>  reg.name === item) || Number(item);
        })
        switch(inst[0].toUpperCase()){
            case 'ADDI': {
                dispatch(addi(selectedReg[1].name, selectedReg[2].value, selectedReg[3]))
                let codeArray = []
                codeArray[0] = 8; //code
                codeArray[1] = selectedReg[2].code; //reg2
                codeArray[2] = selectedReg[3].code || selectedReg[3]; //reg3
                codeArray[3] = selectedReg[1].code; //reg1
                codeArray[4] = 0; //shamt
                codeArray[5] = 0; //func
                let bin = codeArray.map( (code, i) => {
                    return (i === 0 || i === 5) ? toBin(code, 6) : toBin(code, 5);
                });
                bin = bin.join("-");
                setBinInstructions([...binInstructions, bin])
                setCodeInstructions([...codeInstructions, codeArray.join('-')]);
                console.log(codeArray);
                break;
            }
            case 'ADD':
                dispatch(add(selectedReg[1].name, selectedReg[2].value, selectedReg[3].value))
                let codeArray = []
                codeArray[0] = 0; //code
                codeArray[1] = selectedReg[2].code; //reg2
                codeArray[2] = selectedReg[3].code || selectedReg[3]; //reg3
                codeArray[3] = selectedReg[1].code; //reg1
                codeArray[4] = 0; //shamt
                codeArray[5] = 32; //func
                let bin = codeArray.map( (code, i) => {
                    return (i === 0 || i === 5) ? toBin(code, 6) : toBin(code, 5);
                });
                bin = bin.join(" ");
                setBinInstructions([...binInstructions, bin])
                setCodeInstructions([...codeInstructions, codeArray.join('-')]);
                break;
            case 'SUB':
                dispatch(sub(selectedReg[1].name, selectedReg[2].value, selectedReg[3].value))
                break;
            default:
                alert('Essa operação é inválida!');
                window.location.reload();
                break;
        }

        

        setInstruction('');
    }

  return (
      <Container>
        <div>
            <section>
                <article>
                    <div>{instructions.map(inst => <span>{inst}</span>)}</div>
                    <div>{codeInstructions.map(code => <span>{code}</span>)}</div>
                    <div>{binInstructions.map(bin => <span>{bin}</span>)}</div>
                </article>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enviar código" value={instruction} onChange={(e)=>setInstruction(e.target.value)}/>
                    <button>submit</button>
                </form>
            </section>
            <section>
                <h3>Registradores</h3>
                <aside>
                    {
                        registers.map(reg => <span>{reg.name}: {reg.value}</span>)
                    }
                </aside>
            </section>
        </div>
        <span>
            Desenvolvipor por <strong>Alek Tobias Barreria Lima - 2015097097</strong> - DCA1040 Arquitetura de Computadores
        </span>
      </Container>
  );
}
