import * as React from 'react';
import {DrawerActions} from '@react-navigation/native';
export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}
