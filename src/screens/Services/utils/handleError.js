/* eslint-disable prettier/prettier */
export default function (error) {
    return Promise.reject({
      message: error?.message,
      data: error?.data,
      status: error?.status,
    });
  }