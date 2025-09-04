export interface ICipher {
  encrypt(data: string): string;
  decrypt(data: string): string;
}
