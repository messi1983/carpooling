import { Carpooler } from "app/model/carpooler";

export class CarpoolerViewModel {
  compteId: string;
  lastname: string;
  firstname: string;
  sexe: string;
  telephone: string;
  age: number;
  note: string;
  selected: boolean = false;

  constructor(public carpooler: Carpooler) {
    this.compteId = carpooler.compteId;
    this.lastname = carpooler.lastname;
    this.firstname = carpooler.firstname;
    this.sexe = carpooler.sexe;
    this.telephone = carpooler.telephone;
    this.age = carpooler.age;
    this.note = carpooler.note;
  }
}
