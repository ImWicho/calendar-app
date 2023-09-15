import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export default class CalendarPageComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    height: '100%',
    expandRows: true,
    events: 'https://fullcalendar.io/api/demo-feeds/events.json?start=2023-09-10T00:00:00Z&end=2023-09-17T00:00:00Z',
    headerToolbar: {
      left: 'prev today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay next'
    },
    eventTimeFormat : {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false
    },
  };
}
