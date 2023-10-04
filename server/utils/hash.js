import crypto from "crypto";

const hash = (password) => {
    const sha256 = crypto.createHash("sha256");
    const hashedPassword = sha256.update(password).digest("hex");
    return hashedPassword;
};

export default hash;
