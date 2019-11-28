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
                console.log(selectedReg[1].name, selectedReg[2].value, selectedReg[3])
                dispatch(addi(selectedReg[1].name, selectedReg[2].value, selectedReg[3]))
                var codeArray = selectedReg.map(reg => typeof reg === 'number' ? reg : reg.code  );
                codeArray[0] = 8;
                codeArray[4] = 0;
                codeArray[5] = 0;

                setCodeInstructions([...codeInstructions, codeArray.join('-')]);
                console.log(codeArray);
                break;
            }
            case 'ADD':
                dispatch(add(selectedReg[1].name, selectedReg[2].value, selectedReg[3].value))
                break;
            case 'SUB':
                dispatch(sub(selectedReg[1].name, selectedReg[2].value, selectedReg[3].value))
                break;
            default:
                alert('Essa operação é inválida!');
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
                </article>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enviar código" value={instruction} onChange={(e)=>setInstruction(e.target.value)}/>
                    <button>submit</button>
                </form>
            </section>
            <section>
                <aside>
                    {
                        registers.map(reg => <span>{reg.name}: {reg.value}</span>)
                    }
                </aside>
            </section>
        </div>
      </Container>
  );
}
