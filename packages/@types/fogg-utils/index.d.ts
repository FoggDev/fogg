declare module 'fogg-utils' {
  // Security
  export function encrypt(str: string): string;
  export function getBase64(value: string | object): string | object;
  export function getRandomCode(max: number): string;
  export function setBase64(value: string | object): string | boolean;

  // Is
  export function isPasswordMatch(p1: string, p2: string): boolean;
}
