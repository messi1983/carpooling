export interface DashboardModel {
  currentPage: number;
}

export interface Trajet {
  villeDepart: string;
  villeArrivee: string;
}

export interface Alert {
  trajet: Trajet;
  allerRetour: boolean;
  dateAller: string;
  plageHorairesAller: string[];
  dateRetour: string;
  plageHorairesRetour: string[];
}

export interface Avis {}

export interface Message {}

export interface Profil {}

export interface Vehicle {}

export interface Account {}

export interface Friend {}
