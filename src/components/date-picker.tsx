"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

type Props = {
  id: string;
  name: string;
  defaultValue?: string;
};

export const DatePicker = ({ id, name, defaultValue }: Props) => {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date(),
  );
  const [open, setOpen] = useState(false);

  const formattedDate = date ? format(date, "yyyy-MM-dd") : "";

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger id={id} asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="justify-start text-left font-normal"
        >
          <CalendarIcon />
          {formattedDate}
          <input type="hidden" name={name} value={formattedDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  );
};
