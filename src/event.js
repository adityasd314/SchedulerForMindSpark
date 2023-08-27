import { EVENTS_DATA } from "./data.js";

class Event {
  constructor(name, desc, buildings, dates, times, tags, link) {
    this.name = name;
    this.desc = desc;
    this.venues = buildings;
    this.dates = dates;
    this.times = times;
    this.tags = tags;
    this.link = link;
    //('tags :>> ', tags);
  }
  static groupify(e) {
    return e.reduce(
      (t, event) => {
        t[2].push(event);
        if (!t[0].has(event.name)) {
          t[0].add(event.name);
          t[1].push(event);
        }
        return t;
      },
      [new Set(), [], []]
    );
  }

  static objectify(eventsArray) {
    const EVENTS = [];
    for (const event of eventsArray) {
      const { name, description, dates, venues, timings, tags, link } = event;
      console.log('venues :>> ', venues);
      const datesArray = Object.values(dates).map((date) => new Date(date));
      const timesArray = Object.values(timings);
      const event_object = new Event(
        name,
        description,
        venues,
        datesArray,
        timesArray,
        tags,// tags,
        link
      );
      console.log('event_object :>> ', event_object);
      //('tags :>> ', tags);
      EVENTS.push(event_object);
    }
    return EVENTS;
  }
  static sort(events) {
    return events
      .map((event) => {
        return event.dates.map(function (date, i) {
          //(event);
          const { name, desc, venues, dates, times, tags, link } = event;
          console.log('buildings :>> ',);
          const time = event.times[i];
          const building = event.venues[i];
          const sub = new SubEvent(
            name,
            desc,
            venues,
            dates,
            times,
            building,
            date,
            time,
            tags,
            link
          );
          console.log('sub :>> ', sub);
          return sub;
        });
      })
      .flat()
      .sort((b, a) => {
        return b.timeFromNow.diff - a.timeFromNow.diff;
      });
  }
  timeFrom(dt = new Date()) {
    const { dates, times } = this;
    return dates.map((date, i) => {
      const eventDate = new Date(date);
      const eventTime = times[i];
      eventDate.setHours(eventTime.hour_start);
      const diff = eventDate.getTime() - dt.getTime();

      const timeRem = new Date(diff);
      const day = timeRem.getUTCDate();
      const hours = timeRem.getUTCHours();
      const minutes = timeRem.getUTCMinutes();
      const seconds = timeRem.getUTCSeconds();
      return { day, hours, minutes, diff, seconds };
    });
  }
  get rounds() {
    return this.dates.length;
  }

  get timeFromNow() {
    return this.timeFrom(new Date(Date.now()));
  }
  get upcoming() { }
}
class SubEvent extends Event {
  constructor(name, desc, buildings, dates, times, venues, date, time, tags, link) {
    super(name, desc, buildings, dates, times, tags, link);

    this.date = date;
    this.time = time;
  }
  timeFrom(dt = new Date()) {
    const { date, time } = this;

    const eventDate = new Date(date);
    const eventTime = time;
    eventDate.setHours(eventTime.hour_start);
    const diff = eventDate.getTime() - dt.getTime();
    const timeRem = new Date(diff);
    const day = timeRem.getUTCDate();
    const hours = timeRem.getUTCHours();
    const minutes = timeRem.getUTCMinutes();
    const seconds = timeRem.getUTCSeconds();
    return { day, hours, minutes, diff, seconds };
  }
  get timeFromNow() {
    return this.timeFrom(new Date(Date.now()));
  }
  get buildings() {

    return this.venues["round " + this.round];
  }
  get round() {
    return this.dates.indexOf(this.date) + 1;
  }
  //   get date(){
  //     return this.dates[this.round]
  //   }
  //   get time(){
  //     return this.times[this.round]
  //   }
}
const EVENTS = Event.sort(Event.objectify(EVENTS_DATA));
console.log('EVENTS :>> ', EVENTS);
const completedEvents = [];
const upcomingEvents = EVENTS.filter((event) => {
  const isUpcoming = event.timeFromNow.diff > 0;
  if (!isUpcoming) completedEvents.push(event);
  return isUpcoming;
});
// const Cells = document.querySelectorAll(".grid-item");

const upcoming = Event.groupify(upcomingEvents);
const completed = Event.groupify(completedEvents);

// //({upcomingEvents, completedEvents})
// //(index)
// //(EVENTS)
export { upcoming, completed };
