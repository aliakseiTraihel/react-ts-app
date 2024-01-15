export function setUserData(data: object) {
  data && sessionStorage.setItem("auth_react_app", JSON.stringify(data));
}

export function getUserData() {
  if (sessionStorage.length > 0 && sessionStorage.getItem("auth_react_app") != null) {
    return JSON.parse(sessionStorage.getItem("auth_react_app") as string);
  }
  return null;
}

export function updateUserData(modified: object) {
  modified && setUserData({...getUserData, ...modified});
}