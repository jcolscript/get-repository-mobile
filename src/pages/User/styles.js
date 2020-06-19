import styled from 'styled-components/native';
import { FlatList, ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px 0px 30px;
  background: #fff;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #333;
  margin-top: 5px;
  text-align: center;
`;

export const Repos = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
`;

export const Repo = styled.View`
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

export const HeaderRepo = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;

export const RepoName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #5063f0;
  margin-left: 4px;
`;

export const Info = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #333;
`;
