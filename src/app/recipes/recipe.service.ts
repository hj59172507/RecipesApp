import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Another Test Recipe',
      'This is just a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
      [new Ingredient('meat', 1),
      new Ingredient('French Fries', 20)]
    ),
    new Recipe('Another Test Recipe',
      'This is just a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
      [new Ingredient('meat', 1),
      new Ingredient('French Fries', 20)]
      )
  ];

  constructor(private slService: ShoppingListService) {

  }

  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
