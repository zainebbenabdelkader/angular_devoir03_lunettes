import { Style } from "./style.model";

export class Lunette {
    idLunette?: number;
    nomLunette?: string;
    prixLunette?: number;
    dateCreation?: Date;
    style! : Style;
}
