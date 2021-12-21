import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Note } from '../../models/note.model';
import { NoteService } from '../../providers/note-service/note-service';
import { AddNotePage } from '../add-note/add-note';
import { ViewNotePage } from '../view-note/view-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notes: Promise<Note[]>
  private note: Note

  constructor(public navCtrl: NavController,
                private noteService: NoteService) {

  }

  ionViewWillEnter() {
    this.notes = this.getAllnotes()
    console.log(this.notes)
  }

  addNote() {
    this.navCtrl.push(AddNotePage)
  }

  getNote(createDate: number) {
    this.noteService.getNote(createDate).then(n => {
      this.note = n
      this.navCtrl.push(ViewNotePage, {note: this.note})
    })
  }

  getAllnotes() {
    return this.noteService.getAllNotes()
  }

}
