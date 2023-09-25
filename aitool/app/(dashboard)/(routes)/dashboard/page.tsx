//import { UserButton } from "@clerk/nextjs";

"use client"
import {Card} from "@/components/ui/card";

import {MessageSquare} from "lucide-react";

const tools = [
 {
  label: "Conversation",
  icon: MessageSquare,
  color: "text-violet-500",
  bgColor: "bg-violet-500/10",
  href: "/conversation"
 }
]
const DashboardPage = () => {
    return (
        <div>
	  <div className="mb-8 space-y-4 ">
	    <h2 className="text-2x1 md:text-4x1 font-bold text-center">
	     Explore de Power of AI
	    </h2>
	    <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
	      Chat with AI - Experience its power
	    </p>
	  </div>
	  <div className="px-4 md:px-20 lg:px-32 space-y-4">
             {tools.map((tool) => (
	       <Card 
	         key={tool.href}
		 className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
	       >

	       </Card> 
	     ))}	       
	  </div>
           {/* <p>Dashboard Page (Protected)</p> */}
           {/*  <UserButton afterSignOutUrl="/" /> this was to show gmail profile and sign out from there  */}
        </div>
    )
}

export default DashboardPage;
