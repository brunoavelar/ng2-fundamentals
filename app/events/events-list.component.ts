import { Component } from '@angular/core';
import { EventService } from './shared/events.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
`
})
export class EventsListComponent implements OnInit {
    events:any[];

    constructor(private eventService: EventService){
        
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}