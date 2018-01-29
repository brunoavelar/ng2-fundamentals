import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './events.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsListResolverService implements Resolve<any> {

    constructor(private eventService: EventService) {

    }

    resolve(){
        let eventsSubject = this.eventService.getEvents();

        return eventsSubject.map(events => events);
    }
}