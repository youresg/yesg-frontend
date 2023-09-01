import { Cookies } from "react-cookie";

const cookies = new Cookies();

//쿠키 저장
export const setCookie = (name, value, option) => {
  const thirtyMinutes = 30 * 60 * 1000; // 30분을 밀리초로 계산
  cookies.set(name, value, { ...option, expires: new Date(Date.now() + thirtyMinutes), path: '/' });
};

//쿠키 가져옴
export const getCookie = (name) => {
  return cookies.get(name);
};

// 쿠키 삭제
export const removeCookie = (name, option) => {
  cookies.remove(name, { ...option });
};
