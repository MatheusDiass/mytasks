import crypto from 'crypto';
import { ICipher } from '@/domain/interfaces/cipher.interface';

export class CipherAdapter implements ICipher {
  private readonly algorithm = 'aes-256-gcm';
  private readonly key = Buffer.from(process.env.CIPHER_KEY!, 'base64');

  encrypt(data: string): string {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    let encrypted = Buffer.concat([
      cipher.update(data, 'utf8'),
      cipher.final(),
    ]);
    const tag = cipher.getAuthTag();
    return `${iv.toString('hex')}.${encrypted.toString('hex')}.${tag.toString('hex')}`;
  }

  decrypt(data: string): string {
    const [ivHex, encryptedHex, tagHex] = data.split('.');
    const iv = Buffer.from(ivHex!, 'hex');
    const encrypted = Buffer.from(encryptedHex!, 'hex');
    const tag = Buffer.from(tagHex!, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    decipher.setAuthTag(tag);
    let decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);
    return decrypted.toString('utf-8');
  }
}
