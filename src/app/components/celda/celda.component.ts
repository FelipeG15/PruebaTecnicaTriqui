import { Component, OnInit, Input } from '@angular/core';
import { Enum } from './Enum';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.scss'],
})
export class CeldaComponent implements OnInit {

  @Input() public celda: Enum = Enum.EMPTY;
  @Input() public row: number;
  @Input() public col: number;
  
  constructor() { }

  ngOnInit() {}

}
