import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';
import { HeroServiceService } from '../hero-service.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailComponent, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor(private heroService: HeroServiceService) { }
  
  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
}
