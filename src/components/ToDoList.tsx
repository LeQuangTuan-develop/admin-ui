"use client";

import { CalendarIcon, X } from "lucide-react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { format } from "date-fns";

const ToDoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-2">ToDo List</h1>
      {/* Calender */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button className="w-full">
                <CalendarIcon/>
                {date ? format(date, "PPP") : "Pick a date"}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(data) => {
                setDate(data);
                setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="h-[300px] w-full p-2">
        <div className="flex flex-col gap-2">
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" checked/>
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" />
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" />
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" checked/>
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" checked/>
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" />
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" />
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" />
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" />
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
          <Card className="flex-row items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="task-1" />
              <Label htmlFor="task-1" className="text-sm text-muted-foreground">
                To do list 1
              </Label>
            </div>
            <X className="w-4 h-4 text-red-500 cursor-pointer" />
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ToDoList;
