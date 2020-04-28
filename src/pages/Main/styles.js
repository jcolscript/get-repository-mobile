import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #5063f0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 15px;
`;

export const User = styled.View`
  flex-direction: column;
  border: 1px solid #eee;
  padding: 15px 10px;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.View`
  flex-direction: column;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #eee;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const Login = styled.Text`
  font-size: 9px;
  color: #333;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #333;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #5063f0;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
export const ProfileButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
