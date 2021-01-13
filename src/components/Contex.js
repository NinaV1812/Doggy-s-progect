import { createContext, useState } from "react";

export const CompactMode = createContext();
export function AddCompactModeFeature(props) {
    const [isCompact, setIsCompact] = useState([]);
  
    const toggleCompactMode = (breed) => setIsCompact(breed);
  
    return (
      <CompactMode.Provider value={{ isCompact, toggleCompactMode }}>
        {props.children}
      </CompactMode.Provider>
    );
  }