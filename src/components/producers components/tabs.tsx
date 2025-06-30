import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={`rounded-lg border bg-[#070813] text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-pink-500 hover:scale-[1.02] flex p-1 space-x-1 ${className}`}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#070813] disabled:opacity-50 disabled:pointer-events-none 
    data-[state=active]:bg-[#0c0e1a] data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-pink-500
    ${className}`}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={`rounded-lg border bg-[#070813] text-white shadow-sm p-6 mt-4 ${className}`}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
