import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Tecnico } from 'src/app/models/Tecnico';

@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})
export class TecnicoReadComponent implements AfterViewInit {
 
 tecnicos: Tecnico[] = [];
 
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  nome: String;
  cpf: number;
  telefone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nome: 'Hydrogen', cpf: 1.0079, telefone: 'H'},
  {id: 2, nome: 'Helium', cpf: 4.0026, telefone: 'He'},
  {id: 3, nome: 'Lithium', cpf: 6.941, telefone: 'Li'},
  {id: 4, nome: 'Beryllium', cpf: 9.0122, telefone: 'Be'},
  {id: 5, nome: 'Boron', cpf: 10.811, telefone: 'B'},
  {id: 6, nome: 'Carbon', cpf: 12.0107, telefone: 'C'},
  {id: 7, nome: 'Nitrogen', cpf: 14.0067, telefone: 'N'},
  {id: 8, nome: 'Oxygen', cpf: 15.9994, telefone: 'O'},
  {id: 9, nome: 'Fluorine', cpf: 18.9984, telefone: 'F'},
  {id: 10, nome: 'Neon', cpf: 20.1797, telefone: 'Ne'},
  {id: 11, nome: 'Sodium', cpf: 22.9897, telefone: 'Na'},
  {id: 12, nome: 'Magnesium', cpf: 24.305, telefone: 'Mg'},
  {id: 13, nome: 'Aluminum', cpf: 26.9815, telefone: 'Al'},
  {id: 14, nome: 'Silicon', cpf: 28.0855, telefone: 'Si'},
  {id: 15, nome: 'Phosphorus', cpf: 30.9738, telefone: 'P'},
  {id: 16, nome: 'Sulfur', cpf: 32.065, telefone: 'S'},
  {id: 17, nome: 'Chlorine', cpf: 35.453, telefone: 'Cl'},
  {id: 18, nome: 'Argon', cpf: 39.948, telefone: 'Ar'},
  {id: 19, nome: 'Potassium', cpf: 39.0983, telefone: 'K'},
  {id: 20, nome: 'Calcium', cpf: 40.078, telefone: 'Ca'},
];
