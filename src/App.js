import React from 'react';
import {useSelector} from 'react-redux';
import {YellowBox} from 'react-native';

import createRouter from './routes';

// import { Container } from './styles';

YellowBox.ignoreWarnings(['DatePickerAndroid']);

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
