import styled from 'styled-components/native';

interface ButtonProps {
    backgroundColor: string;
}

export const Button = styled.TouchableOpacity`
    width:100%;
    height: 50px;
    background: ${(props: ButtonProps) => props.backgroundColor ? props.backgroundColor : '#1E319D'};
    box-shadow: 0px 0px 10px #1E319D;
    border-radius: 10px;

    display:flex;
    justify-content:center;
    align-items:center;

    elevation: 24;
`;
