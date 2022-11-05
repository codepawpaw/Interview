import Event from './entities/event.entity';
export declare class EventsService {
    getWarmupEvents(): Promise<Event[]>;
    getEventsWithWorkshops(): Promise<void>;
    getFutureEventWithWorkshops(): Promise<void>;
}
