import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { EventService } from '../shared/events.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot){
        const id = +route.params['id'];
        const eventExists = !!this.eventService.getEvent(id);

        if(!eventExists){
            this.router.navigate(['/404']);
        }

        return eventExists;
    }
}