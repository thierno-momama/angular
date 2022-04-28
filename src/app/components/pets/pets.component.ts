import { Component, OnInit } from '@angular/core';
import { PetInterface } from './../../pet-interface';
import { PetService } from 'src/app/services/pet.service';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: PetInterface[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(pet => this.pets = pet);
  }
  //addFavorite(pet)
  addFavorite(pet: PetInterface){
    pet.favorite = !pet.favorite;
    this.petService.addFavorite(pet).subscribe();
  }
  deletePet(pet: PetInterface){
    this.petService.deletePet(pet).subscribe(() => this.pets = this.pets.filter(item => item.id !== pet.id));
  }
  //addPet($event)
  addPet(pet: PetInterface){
    this.petService.addPet(pet).subscribe(pet => this.pets.push(pet));
  }
}
