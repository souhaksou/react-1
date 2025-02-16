import Mock from 'mockjs';
import homeApi from './mockData/home';
import userApi from './mockData/user';

Mock.mock(/home\/getData/, () => homeApi());
Mock.mock(/user\/getData/, () => userApi());