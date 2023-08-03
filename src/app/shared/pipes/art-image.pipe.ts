import { Pipe, PipeTransform } from '@angular/core';
import {GameDTO} from "../../game/interfaces/game.interface";

@Pipe({
  name: 'artImage'
})
export class ArtImagePipe implements PipeTransform {

  transform(game:GameDTO): string  {
    if ( !game.id && !game.gameArt ) {
      return 'assets/no-image.jpg';
    }
    if ( game.gameArt ) return game.gameArt;

    return 'assets/no-image.jpg'
  }

}
