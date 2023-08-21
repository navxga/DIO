import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #dadada;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div `
    background-color: #fff;
    width: 50%;
    box-shadow: 3px 3px 5px #979797;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`