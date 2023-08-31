import { Cookies } from "react-cookie";

const cookies = new Cookies();

//쿠키 저장
export const setCookie = (name, value, option) => {
  cookies.set(name, value, { ...option });
};

//쿠키 가져옴
export const getCookie = (name) => {
  return cookies.get(name);
};

// 쿠키 삭제
export const removeCookie = (name, option) => {
  cookies.remove(name, { ...option });
};
