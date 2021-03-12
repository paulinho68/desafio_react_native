import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content:center;
    background: #FAFBFD;
`;

export const Image = styled.Image`
    margin-bottom: 30px;
    width: 210px;
    height: 96px;
`;

export const ImageGoogle = styled.Image`
    width:24px;
    height:24px;
`;

export const Content = styled.View`
    padding: 0 38px;
    width: 100%;
`;

export const ContentInputs = styled.View`
    margin-bottom: 30px;
    width:100%;
`;

export const RegularText = styled.Text`
    font-family: 'OpenSans-Regular';
    font-weight: 600;
    font-size: 14px;
    color: #515151;
`;

export const Button = styled.TouchableOpacity`
    width:100%;
    height: 50px;
    margin-top: 60px;
    border-radius: 10px;
    background: #1E319D;
    box-shadow: 0px 0px 10px #1E319D;
    border-radius: 10px;

    display:flex;
    justify-content:center;
    align-items:center;

    elevation: 24;
`;

export const TextButton = styled.Text`
    font-family: 'OpenSans-Bold';    
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
`;

export const Footer = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    margin-top:30px; 
`;

export const FooterText = styled.Text`
    font-family: 'OpenSans-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
`;

export const LinkText = styled.Text`
    font-family: 'OpenSans-SemiBold';
    color: #1E319D;
    padding-left: 5px;
`;