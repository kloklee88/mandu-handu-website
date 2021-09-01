import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    agm-map {
        height: 500px;
    }
    .menu-img {
        margin-top: 30px;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    data: Date = new Date();

    // google maps zoom level
    zoom: number = 15;

    // initial center position for the map
    lat: number = 40.4406;
    lng: number = -79.9959;
    markers: marker[] = [
        {
            lat:  40.4406,
            lng: -79.9959,
            label: 'MH',
            name: 'Mandu Handu',
            draggable: false
        }
    ];

    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    constructor(private renderer: Renderer2) { }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    name: string;
    draggable: boolean;
}
