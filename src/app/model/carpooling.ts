import { Carpooler } from 'app/model/carpooler';
import { SimpleCarpooling } from 'app/model/simple.carpooling';

export class Carpooling {
    constructor(
        public id : number,
        public driver : Carpooler,
        public aller : SimpleCarpooling,
        public retour : SimpleCarpooling
    ) {}
}