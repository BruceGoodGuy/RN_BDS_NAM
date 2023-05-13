/* eslint-disable prettier/prettier */
import {Alert} from 'react-native';

export function showAlert({
  title,
  message,
  actOk = {text: 'Ok', onPress: () => {}},
  acts = [],
  cancelable = true,
}) {
  Alert.alert(title, message, [...acts, actOk], {cancelable});
}

export const showAlertError = ({message, actOk, acts, cancelable}) => {
  const title = 'Lỗi';
  showAlert({
    title,
    message: message?.message || message,
    actOk,
    acts,
    cancelable,
  });
};
