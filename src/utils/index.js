export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
// export const toTitleCase = phrase => {
//   return phrase !== undefined && _.startCase(_.toLower(phrase));
// };

export const pause = (duration) => {
  const start = Date.now();
  while (Date.now() - start < duration) {}
};

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const emailValidate = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim());
};

export const passwordValidate = (pwd) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  const isValid = new RegExp(regex).test(pwd.trim());

  return isValid;
};

export const validate = (key, val) => {
  if (key.toLowerCase() === "email") {
    return emailValidate(val);
  } else if (key.toLowerCase() === "password") {
    return passwordValidate(val);
  } else if (key.toLowerCase() === "url") {
    validateUrl(val);
  }
};

export const redirectToClient = (props) => {
  if (props.login.isLoggedIn) {
    if (props.login.type !== 2) {
      props.history.push("/login");
    }
  }
};

export const restrictLength = (e, len) => {
  return (e.target.value =
    e.target.value &&
    Math.max(0, parseInt(e.target.value)).toString().slice(0, len));
};

export const queryParam = (key) => {
  const href = new URL(window.location.href);
  return href.searchParams.get(key);
};

export const buttonStyle = { backgroundColor: "#2dced4", color: "white" };

export const isValidDate = (d) => {
  return d instanceof Date && !isNaN(d);
};

export const validateUrl = (value) => {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
};

export const getFormatedDate = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  // const minutes = date.getMinutes();
  const minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
  return `${month} ${day}, ${year} ${hour}:${minutes}`;
};

export const getDate = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month}, ${year}`;
};