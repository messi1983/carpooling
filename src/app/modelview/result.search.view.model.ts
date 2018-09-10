import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';


export class ResultSearchViewModel {
    constructor(
        public title: string,
        public tabsDays: string[],
        public tabsCarpoolings: string[],
        public selections: CarpoolingViewModel[],
        public carpoolings: CarpoolingViewModel[]
    ) {}
    
}