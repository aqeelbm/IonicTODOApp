import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../models/note.model';
import { NoteService } from '../../providers/note-service/note-service';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  formGroup: FormGroup
  note: Note
  date: Date = new Date()
  title: string = ''
  content: string = ''


  constructor(public navCtrl: NavController, private noteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    })
  }

  saveNote(note: Note) {
    this.noteService.saveNote(note)
    this.navCtrl.pop()
  }

}
