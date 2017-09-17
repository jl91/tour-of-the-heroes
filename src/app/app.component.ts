import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: '<h1>{{title}}</h1>\n' +
    '  <h2>{{hero.name}} details!</h2>\n' +
    '  <div><label>id: </label>{{hero.id}}</div>\n' +
    '  <div><label>name: </label>{{hero.name}}</div>'
})

export class AppComponent {
    title = 'Tour of heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}

export class Hero {
    id: number;
    name: string;
}
