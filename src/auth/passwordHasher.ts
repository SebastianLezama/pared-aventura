import crypto from 'crypto';

export function PasswordHasher(password: string, salt: string) {

  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize(), salt, 64, (err, hash) => {
      if (err) {
        return reject(err);
      }
      resolve(hash.toString('hex'));
    
  
    })
  });
}

function generateSalt() {
  return crypto.randomBytes(16).toString('hex').normalize()
}