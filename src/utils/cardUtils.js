export function generateCardNumber() {
    return Array(4)
      .fill(0)
      .map(() => Math.floor(1000 + Math.random() * 9000))
      .join(" ");
  }
  
  export function generateCVV() {
    return Math.floor(100 + Math.random() * 900);
  }
  
  export function getCurrentDate() {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  }