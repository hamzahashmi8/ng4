import { Component, OnInit } from '@angular/core';
import { Recipesmodel } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  RecipeModel: Recipesmodel[] = [
    new Recipesmodel('first Recipe', 'this is a simple resipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
