export const isMockEnabled = () => {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_USE_MOCK === "false") {
    return false;
  }
  return true;
};

export async function delayMock<T>(data: T, delayMs = 250): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
}

