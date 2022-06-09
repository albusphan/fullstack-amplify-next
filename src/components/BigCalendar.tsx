import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
  getDay,
  locales,
});

const events: Event[] = [];

export const BigCalendar = () => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      style={{
        height: "100%",
      }}
    />
  );
};
