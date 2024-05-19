import React from "react";

// Renamed Layout component to avoid conflict with named import
const CustomLayout = ({ children }) => {
  return (
<div className="flex min-h-screen items-center justify-between p-8 md:p-24 bg-ab907e relative">
      {children}
   
    
    </div>
  );
};

export default CustomLayout; // Changed the export to use the new name

