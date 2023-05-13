/* eslint-disable prettier/prettier */
import FormData from 'form-data';

export function toFormData(args) {
  if (!args || Object.keys(args).length === 0) {
    return undefined;
  }
  var form = new FormData();
  for (let item in args) {
    if (item === 'hookCancelToken') {
      continue;
    }
    form.append(item, args[item]);
  }
  return form;
}
