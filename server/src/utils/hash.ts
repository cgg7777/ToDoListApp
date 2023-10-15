import * as crypto from 'crypto';

const hash = (password: string): string => {
  const sha256 = crypto.createHash('sha256');
  const hashedPassword = sha256.update(password).digest('hex');
  return hashedPassword;
};

export default hash;
