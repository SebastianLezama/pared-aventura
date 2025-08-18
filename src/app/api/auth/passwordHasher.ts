// import crypto from 'crypto';

// export function PasswordHasher(password: string, salt: string): Promise<string> {

//   return new Promise((resolve, reject) => {
//     crypto.scrypt(password.normalize(), salt, 64, (err, hash) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(hash.toString('hex'))

//       const number = {

//       }
    
  
//     })
//   });
// }

// function generateSalt() {
//   return crypto.randomBytes(16).toString('hex').normalize()
// }