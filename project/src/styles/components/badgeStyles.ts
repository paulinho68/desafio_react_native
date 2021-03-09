import styled from 'styled-components/native';

export const Container = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin: 30px 0;

    background-color: #000;

    position: relative;
`;

export const Line = styled.View`
    width:100%;
    height: 1.5px;
    background-color:#EFEFF3;
`;

export const Badge = styled.View`
    width:40px;
    height:22px;
    background: #E7E7EA;
    border-radius: 10px;

    display:flex;
    justify-content:center;
    align-items:center;

    position: absolute;
    top: -10px;
    z-index:1;
`;

export const TextBadge = styled.Text`
    font-family: 'OpenSans-Regular';    
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    color: #2E2E30;
`;