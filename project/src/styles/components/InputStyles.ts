import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { css } from 'styled-components';

interface IconProps {
    marginRight?: string;
    isErrored: boolean;
    isFocused: boolean;
}

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View`
    width: 100%;
    height: 40px;

    margin-bottom:30px;
    padding: 4px;

    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
        
    border-bottom-width: 1px;
    border-bottom-color: ${(props: ContainerProps) => props.isFocused ?
        '#1E319D' : (props.isErrored ? '#FE0606' : '#DCDCDC')
    };

`;

export const TextInput = styled.TextInput`
    flex:1;
    font-family: 'OpenSans-Regular';
    padding: 4px;
`;

export const Icon = styled(FeatherIcon)`
    color: ${(props: ContainerProps) => props.isFocused ?
        '#1E319D' : (props.isErrored ? '#FE0606' : '#1E319D')
    };
    margin-right: ${(props: IconProps) => props.marginRight ? props.marginRight : '10px'};
`;

