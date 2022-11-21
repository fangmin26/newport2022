//정규식함수
export const checkName = (thisvalue) => {
  const nameRule = /^[가-힣a-zA-Z]+$/
  if (nameRule.test(thisvalue)) {
    return true
  } else {
    return false
  }
}

export const checkBirth = (thisvalue) => {
  const birthRule = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  if (birthRule.test(thisvalue)) {
    return true;
  } else {
    return false;
  }
};

export const checkPhone = (thisvalue) => {
  let reg_mobile = /^\d{3}-\d{3,4}-\d{4}$/; // 휴대폰 번호
  let reg_tel = /^\d{2,3}-\d{3,4}-\d{4}$/; // 일반 전화 번호
  if (reg_mobile.test(thisvalue) || reg_tel.test(thisvalue)) {
    return true
  } else {
    return false;
  }
};