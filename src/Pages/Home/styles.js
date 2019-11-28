import styled from 'styled-components';

export const Container = styled.div`
  color: #0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    max-width: 1200px;
    width: 100%;
    background: #000;
    height: 800px;
    border-radius: 5px;
    margin-top: 40px;
    padding: 40px;
    display: grid;
    grid-template-columns: 70% 30%;
    section{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        aside {
            justify-self: flex-start;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-left: 16px; 
        }
        article {
            justify-self: flex-start;
            height: 100%;
            max-height: 662px;
            display: flex;
            overflow-y: scroll;
            div {
                margin: 0;
                display:flex;
                flex-direction: column;
            }
            ::-webkit-scrollbar {
                width: 6px;
            }
            /* Track */
            ::-webkit-scrollbar-track {
            background: #111; 
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
            background: #0d0; 
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
            background: #0f0; 
            }
        }
        form {
            width: 100%;
            padding: 16px;
            border-radius: 20px;
            background: #111;
            
            display: flex; 
            justify-content: space-between;


            button {
                color: #0f0;
                background: transparent;
                border: none;
                text-transform: uppercase;
                justify-self: flex-end;
                cursor: pointer;
                font-size: 18px;
            }
            input {
                background: transparent;
                border: none;
                color: #0f0;
                width: 600px;
                font-size: 18px;
                line-height: 26px;
                ::placeholder{
                    color: #0f0;
                    
                }
            }

        }
    }
  }
`;
