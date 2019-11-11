import { Component, OnInit } from '@angular/core';
import { Enum } from '../celda/Enum';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss'],
})

export class TableroComponent implements OnInit {

  private usuarioActual : Enum;
  public tablero: Enum[][];
  private isFinJuego: boolean;
  public mensajeEstado;
  public mensajeTitulo;

  constructor() { }

  ngOnInit() {
    this.nuevoJuego();
  }

  get finJuego(): boolean {
    return this.isFinJuego
  }

  nuevoJuego() {
    this.tablero = [];
    
    //Limpiamos las celdas del tablero
    for (let row = 0; row < 3; row++) {
      this.tablero[row] = [];
      for (let col = 0; col < 3; col++) {
        this.tablero[row][col] = Enum.EMPTY;
      }
    }

    //Iniciamos el con el usuario X
    this.usuarioActual = Enum.x;
    this.isFinJuego = false;
    this.mensajeEstado = 'Es turno del jugador ' + this.usuarioActual;
    this.mensajeTitulo = 'Bienvenidos';
  }

  seleccionar(row: number, col: number): void {
    console.log(this.tablero);
    console.log(row);
    console.log(col);
    //Validamos si el juego se encuentra activo y la celda seleccionada esta dispoible
    if (!this.isFinJuego && this.tablero[row][col] === Enum.EMPTY) {
      this.tablero[row][col] = this.usuarioActual;
      //Validamos estado del juego con respecto a la ultima selección
      if (this.empate()) {
        this.mensajeEstado = '¡¡ Es Un Empate !!';
        this.isFinJuego = true;
      } else if (this.ganador()) {
        this.mensajeEstado = 'Ganaste Usuario ' + this.usuarioActual;
        this.mensajeTitulo = '¡¡ Felicitaciones !!';
        this.isFinJuego = true;
      } else {
        //Cambio de usuario actual
        this.usuarioActual = this.usuarioActual === Enum.x ? Enum.o : Enum.x;
        this.mensajeEstado = 'Es turno del jugador ' + this.usuarioActual;
        this.mensajeTitulo = '';
      }
    }
  }

  empate(): boolean {
    
    //Validamos si aun existen celdas disponibles o si existe un ganador
    //Limpiamos las celdas del tablero
    for (let row = 0; row < 3; row++) {
      //this.tablero[row] = [];
      for (let col = 0; col < 3; col++) {
        //this.tablero[row][col] = Enum.EMPTY;
        if(this.tablero[row][col] === Enum.EMPTY) 
          return false;
      }
    }
    /*for (let columns in this.tablero) {
      console.log(' SdaS ' + columns.);
      for (const col of columns) {
        console.log(' SS ' + col);
        if(col === Enum.EMPTY) 
          return false;
      }
    }*/
    return !this.ganador();
  }

  ganador(): boolean {
    //Validamos las celdas en horizontal
    for (const columns of this.tablero) {
      if(columns[0] === columns[1] && columns[0] === columns[2] && columns[0] !== Enum.EMPTY)
        return true;
    }

    //Validamos las celdas en vertical
    for (let col = 0; col < this.tablero[0].length; col++) {
      if (this.tablero[0][col] === this.tablero[1][col] && this.tablero[0][col] === this.tablero[2][col] && this.tablero[0][col] !== Enum.EMPTY)
        return true;
    }
    
    //Validamos las celdas en diagonal
    if (this.tablero[0][0] === this.tablero[1][1] && this.tablero[0][0] === this.tablero[2][2] && this.tablero[0][0] !== Enum.EMPTY) 
      return true;
    
    if (this.tablero[0][2] === this.tablero[1][1] && this.tablero[0][2] === this.tablero[2][0] && this.tablero[0][2] !== Enum.EMPTY) 
      return true;
    
    return false;
  }

}
