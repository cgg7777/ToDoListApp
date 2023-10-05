class EmailDuplicated extends Error {
    constructor() {
        super("이미 사용중인 이메일입니다.");
        this.status = 409;
    }
}

export { EmailDuplicated };
