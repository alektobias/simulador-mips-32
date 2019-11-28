import styled from 'styled-components';

export const Container = styled.div`
  color: #0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span {
      margin-top: 20px;
  }
  div {
    max-width: 1200px;
    width: 100%;
    background: #000;
    height: 800px;
    border-radius: 5px;
    margin-top: 40px;
    padding: 40px;
    display: grid;
    grid-template-columns: 80% 20%;
    section{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        h3{
            padding: 0 0 16px 16px
        }
        aside {
            justify-self: flex-start;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-left: 16px;
            span {
                font-size: 18px;
                line-height: 24px;
            }
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
                width: 100%;
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
