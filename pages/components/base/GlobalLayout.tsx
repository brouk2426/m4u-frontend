import { ReactNode } from "react";
import globalStyles from "../../../styles/global";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="global-layout">
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default GlobalLayout;
