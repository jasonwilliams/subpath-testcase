export const ensureArray = (x?: any) => {
  if (!x) {
    return [];
  } else if (Array.isArray(x)) {
    return x;
  }
  return [x];
};

export const objAsApiQueryString = (obj: Record<string, string | string[]>) => {
  const str: string[] = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      let propertyString = p;
      if (Array.isArray(obj[p])) {
        propertyString += "[]";
      }
      ensureArray(obj[p]).forEach((value: string) => {
        str.push(
          `${encodeURIComponent(propertyString)}=${encodeURIComponent(value)}`
        );
      });
    }
  }
  return str.join("&");
};
