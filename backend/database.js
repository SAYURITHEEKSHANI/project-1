const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addTeacher = async (id, name, age) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateTeacher = async (name, age, id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteTeacher = async (id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudents = async () => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addStudent = async (id, name, age, religion) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateStudent = async (name, age, religion, id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
} 

const deleteStudent = async (id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");
const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teacher(id,name,age) values (?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age])
            .then(() => {
                resolve({status: "Successfully inserted Teacher"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}
const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((teachers) => {
                resolve(teachers);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((teacher) => {
                resolve(teacher);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, id])
            .then(() => {
                resolve({status: "Successfully updated Teacher"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}
const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Teacher"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}
module.exports = {
    addTeacher,
    readTeachers,
    readTeacherInfo,
    updateTeacher,
    deleteTeacher
}
module.exports = {
    addTeacher,
    readTeachers,
    readTeacherInfo,
    updateTeacher,
    deleteTeacher
}
import express from "express";
import bodyParser from "body-parser";
import {
    initializeDatabase,
    readTeachers,
    readTeacherInfo,
    addTeacher,
    deleteTeacher,
} from "./database.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/listTeachers", async function (req, res) {
    console.log("Request received to list teachers");
    let data = await readTeachers();
    
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
});
app.post("/getTeacherInfo", async function (req, res) {
    let reqBody = req.body;
    console.log("Request received to get Teacher Info");
    let data = await readTeacherInfo(reqBody.id);
  
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  });
  {
    "id": "teacher_id"
  }
  app.post("/addTeacher", async function (req, res) {
    let reqBody = req.body;
    console.log(
    "Request received to add teacher. Req body: " + JSON.stringify(reqBody)
    );
    let data = await addTeacher(reqBody.id, reqBody.name, reqBody.age);
    
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
});
{
    "id": "teacher_id",
    "name": "teacher_name",
    "age": "teacher_age"
  }
  app.post("/deleteTeacher", async function (req, res) {
    let reqBody = req.body;
    console.log(
    "Request received to delete teacher. Req body: " + JSON.stringify(reqBody)
    );
    let data = await deleteTeacher(reqBody.id);
    
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
});
{
    "id": "teacher_id"
  }
  app.post("/editTeacher", async function (req, res) {
    let reqBody = req.body;
    let data = await updateTeacher(reqBody.name, reqBody.age, reqBody.id);
  
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  });
  {
    "name": "teacher_name",
    "age": "teacher_age",
    "id": "teacher_id"
  }
  module.exports = app;
  import server from "./server.js";

server.listen(8080, function () {
  console.log(
    "Capstone Project Backend is running on http://localhost:8080"
  );
});
ng generate service app-service
constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8080'
}
getTeacherData() {
    return this.http.get('/api/listTeachers')
}
getOneTeacherData(payload: Object) {
    return this.http.post('/api/getTeacherInfo', payload)
}
addTeacher(payload: Object) {
    return this.http.post('/api/addTeacher', payload)
}
deleteTeacher(payload: Object) {
    return this.http.post('/api/deleteTeacher', payload)
}
editTeacher(payload: Object){
    return this.http.post('/api/editTeacher', payload)
}
ng generate module app-routing --flat --module=app
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewTeacherComponent } from './components/add-new-teacher/add-new-teacher.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';


const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'editTeacher', component: EditTeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<router-outlet></router-outlet>
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
@Input() title: string;
constructor(  private router: Router) { }
<div class="navbar-container">
    <div class="logo-container">
        <img width="80px" src="http://placehold.jp/18/ffffff/000000/120x120.png?text=LOGO">
    </div>
  
    <div class="links-container">
        <a routerLink="" [ngClass]="{bold : title=='Teachers'}">Teachers</a>
        <p>|</p>
        <a routerLink="student" [ngClass]="{bold : title=='Students'}">Students</a>
    </div>
    <div class="blank-space"></div>
</div>
<div class="info-container">
    <div class="logo-container">
        <p class="info-text">{{title}}</p>
    </div>
    <div class="blank-space"></div>
    <div class="links-container">
    </div>

</div>
import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-new-teacher',
    templateUrl: './add-new-teacher.component.html',
    styleUrls: ['./add-new-teacher.component.css']
})
export class AddNewTeacherComponent implements OnInit {

    constructor(private service : AppServiceService, private router: Router) { }

    ngOnInit(): void {
    }

    createTeacher(value){

        const teacher = {
            id : value.id,
            name : value.name,
            age : value.age
        }


        this.service.addTeacher(teacher).subscribe((response)=>{
            this.router.navigate([''])
        },(error)=>{
            console.log('ERROR - ', error)
        })
    }

}
constructor(private service : AppServiceService, private router: Router) { }
createTeacher(value) {
    const teacher = {
      id : value.id,
      name : value.name,
      age : value.age
    }
    
    
    this.service.addTeacher(teacher).subscribe((response)=>{
      this.router.navigate([''])
    },(error)=>{
      console.log('ERROR - ', error)
    })
}
<app-navbar title="Add New Teacher"></app-navbar>
<div>
    <form #addTeacherForm="ngForm"  class="form-container" (ngSubmit)="createTeacher(addTeacherForm.value)">
        <input id="teacher-id" ngModel name="id" type="text" placeholder="ID">
        <input id="teacher-name" ngModel name="name" type="text" placeholder="Name">
        <input id="teacher-age" ngModel name="age" type="text" placeholder="Age">
        <button id="teacher-add" class="form-button">Create</button>
    </form>
</div>
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {AppServiceService} from '../../app-service.service';

@Component({
    selector: 'app-edit-teacher',
    templateUrl: './edit-teacher.component.html',
    styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
    
    teacherData: any;
    
    constructor(private service : AppServiceService, private router: Router) { }

    navigation = this.router.getCurrentNavigation();
    
    ngOnInit(): void {
        this.getTeacherData();
    }
    
    getTeacherData(){
        let teacher = {
            id : this.navigation.extras.state.id
        }
        this.service.getOneTeacherData(teacher).subscribe((response)=>{
            this.teacherData = response[0];
        },(error)=>{
            console.log('ERROR - ', error)
        })
    }
    
    editTeacher(values){
        values.id = this.navigation.extras.state.id;
        this.service.editTeacher(values).subscribe((response)=>{
            this.teacherData = response[0];
        },(error)=>{
            console.log('ERROR - ', error)
        })
    }

}
ngOnInit(): void {
    this.getTeacherData();
}
getTeacherData(){
    let teacher = {
        id : this.navigation.extras.state.id
    }
    this.service.getOneTeacherData(teacher).subscribe((response)=>{
        this.teacherData = response[0];
    },(error)=>{
        console.log('ERROR - ', error)
    })
}

editTeacher(values){
    values.id = this.navigation.extras.state.id;
    this.service.editTeacher(values).subscribe((response)=>{
        this.teacherData = response[0];
    },(error)=>{
        console.log('ERROR - ', error)
    })
}
<app-navbar title="Edit Teacher Details"></app-navbar>
<div>
    <form #editTeacherForm="ngForm"  class="form-container" (ngSubmit)="editTeacher(editTeacherForm.value)">
        <input id="teacher-name" ngModel name="name" type="text" placeholder="Name" value="{{teacherData?.name}}">
        <input id="teacher-age" ngModel name="age" type="text" placeholder="Age" value="{{teacherData?.age}}">
        <button id="teacher-edit" class="form-button">Edit & Save</button>
    </form>
</div><app-navbar title="Edit Teacher Details"></app-navbar>
<div>
    <form #editTeacherForm="ngForm"  class="form-container" (ngSubmit)="editTeacher(editTeacherForm.value)">
        <input id="teacher-name" ngModel name="name" type="text" placeholder="Name" value="{{teacherData?.name}}">
        <input id="teacher-age" ngModel name="age" type="text" placeholder="Age" value="{{teacherData?.age}}">
        <button id="teacher-edit" class="form-button">Edit & Save</button>
    </form>
</div>
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { AppServiceService } from '../../app-service.service';
@Component({
    selector: 'app-teacher-table',
    templateUrl: './teacher-table.component.html',
    styleUrls: ['./teacher-table.component.css']
})

export class TeacherTableComponent implements OnInit {

    faTrash = faTrash;
    faPlus = faPlus;
    faPenSquare = faPenSquare;
    teacherData: any;
    selected: any;

    constructor(private service: AppServiceService, private router: Router) { }

    ngOnInit(): void {
        this.getTeacherData();
    }

    addNewTeacher() {
        this.router.navigate(['addTeacher'])
    }

    editTeacher(id) {
        const navigationExtras: NavigationExtras = {
            state: {
                id: id
            }
        };
        this.router.navigate(['editTeacher'], navigationExtras)
    }

    getTeacherData() {
        this.selected = 'Teachers';
        this.service.getTeacherData().subscribe((response) => {
            this.teacherData = Object.keys(response).map((key) => [response[key]]);
        }, (error) => {
            console.log('ERROR - ', error)
        })
    }

    getStudentData() {
        this.selected = 'Students';
        this.service.getStudentData().subscribe((response) => {
            this.teacherData = response;
        }, (error) => {
            console.log('ERROR - ', error)
        })
    }

    search(value) {

    }

    deleteTeacher(itemid) {
        const test = {
            id: itemid
        }
        this.service.deleteTeacher(test).subscribe((response) => {
            this.getTeacherData()
        })
    }
}
ngOnInit(): void {
    this.getTeacherData();
}
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';

faTrash = faTrash;
faPlus = faPlus;
faPenSquare = faPenSquare;
<app-navbar title="Teachers"></app-navbar>
<div class="add-btn-container">
  <div class="add-btn-elements-container">
    <input id="teacher-search" style="height: 20px;" #box (keyup)="search(box.value)" placeholder="Search">
    <button style="width: 120px; height: 43px; font-size: 14px;" (click)="addNewTeacher()" class="btn">Add New &nbsp;<fa-icon [icon]="faPlus"></fa-icon></button>
  </div>
</div>
<div class="table-container">
  <table id="teacher-table">
    <tr>
      <th>Name</th>
      <th>Staff ID</th>
      <th>DOB</th>
      <th style="width: 50px;"></th>
      <th style="width: 50px;"></th>
    </tr>
    <tr *ngFor="let teacher of teacherData">
      <td>{{teacher[0].name}}</td>
      <td>{{teacher[0].id}}</td>
      <td>{{2022 - teacher[0].age}}</td>
      <td id="teacher-edit-{{teacher[0].id}}" (click)="editTeacher(teacher[0].id)" style="text-align: center;">
        <fa-icon class="edit-icon" [icon]="faPenSquare"></fa-icon>
      </td>
      <td id="teacher-delete-{{teacher[0].id}}" (click)="deleteTeacher(teacher[0].id)"
        style="text-align: center; color: #FC4F4F;">
        <fa-icon class="trash-icon" [icon]="faTrash"></fa-icon>
      </td>
    </tr>
  </table>
</div>
