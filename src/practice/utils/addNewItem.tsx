import React from "react";

export const addNewItem = <T extends Record<string, string | number>>(
  item: T, // newCar
  setter: React.Dispatch<React.SetStateAction<T[]>>, // setCar
  clearState: () => void, // clearNewCar
  requiredFields: (keyof T)[] // []
) => {

  // Improved Validation for Empty Strings, Null, Undefined

  const isValid = requiredFields.every((field) =>
    item[field] !== undefined && item[field] !== null && item[field] !== ''
  );

  if (isValid) {
    setter((prev) => [...prev, item]);
    clearState();
  } else {
    console.warn("Validation failed: Missing required fields", item);
  }
};