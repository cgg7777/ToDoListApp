class UserNotExist extends Error {
    status: number;
    constructor() {
        super("이메일 또는 비밀번호가 일치하지 않습니다.");
        this.status = 400;
    }
}

export { UserNotExist };
