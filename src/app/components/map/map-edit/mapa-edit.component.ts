import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marker } from 'src/app/classes/marker.class';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-mapa-edit',
  templateUrl: './mapa-edit.component.html',
  styleUrls: ['./mapa-edit.component.css'],
})
export class MapaEditComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marker
  ) {
    this.form = new FormGroup({
      title: new FormControl({ value: data.title, disabled: false }, [
        Validators.required,
      ]),
      description: new FormControl({ value: data.description, disabled: false }, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {}

  saveChanges = (): void => this.dialogRef.close(this.form.value);

  closeDialog = (): void => this.dialogRef.close();

}
