import React from "react";
import Navbar from "@/components/navbar";
const DashboardLayout = ({
   children
}: {
   children: React.ReactNode;
}) => {
   return (
      <div className="h-full relative">
         <div className="hidden hfull md:flex md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
            <div>
              <Navbar>
	        
	      </Navbar> 
	    </div>
         </div>
	 <main className="md:pl-72">
            Hello content
	    {children}
  	 </main>
      </div>
   );
}
export default DashboardLayout
