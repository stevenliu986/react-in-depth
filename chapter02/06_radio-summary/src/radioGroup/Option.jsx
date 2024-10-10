import { useContext } from "react";
import { RadioGroupContext } from "./contexts.js";

export function Option({ value, icon, isPopular, children }) {
  const { name, selectedValue, onChange } = useContext(RadioGroupContext);
  const isSelected = selectedValue === value;
  return (
    <label style={isPopular ? { border: "1px dash red" } : null}>
      {icon}
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <RadioGroupContext.Provider value={isSelected}>
        {children}
      </RadioGroupContext.Provider>
      {isPopular ? <strong>🔥 Popular!</strong> : null}
    </label>
  );
}
