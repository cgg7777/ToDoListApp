export class ExisitingId extends Error {
  status: number;
  constructor() {
    super('중복된 아이디입니다.');
    this.status = 409;
  }
}

export class LogininFailed extends Error {
  status: number;
  constructor() {
    super('아이디 혹은 비밀번호가 일치하지 않습니다.');
    this.status = 401;
  }
}

export class InvalidToken extends Error {
  status: number;
  constructor() {
    super('유효하지 않은 토큰입니다.');
    this.status = 402;
  }
}
