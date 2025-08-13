import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

type RootProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;
type ListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;
type TriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
type ContentProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

export const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  RootProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root ref={ref} className={cn("", className)} {...props} />
));
Tabs.displayName = "Tabs";

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  ListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  ContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";