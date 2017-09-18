import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})


export class AppComponent implements OnInit {

    constructor(private heroService: HeroService) {
    }

    title = 'Tour of heroes';
    selectedHero: Hero;
    heroes = [];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly()
            .then((heroes) => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}


