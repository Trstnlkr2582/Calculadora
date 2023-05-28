import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showMore :boolean = false
  a :string = ""
  b :string = ""
  c :number = 0
  res:string = ""
  or:String = ""
  display :string = ""
  ans = "Ans$^{-1}$"
  exp = "$X^{Y}$"
  porci = ""
  calc = 0
  op :String = ""
  neg :String = ""
  percent(): void{
    this.porci = "%"
    this.showYourself()
  }
  mm(): void{
    this.c= this.c*-1
    this.res = ""+this.c
    document.getElementById("pan2")!.innerHTML = this.res
  }
  eq(): void{
    if(this.porci == "%"){
      this.calc = parseFloat(this.b)/100*parseFloat(this.a)
      this.b = ""+this.calc
    }
    if(this.op=="+"){
      this.c = parseFloat(this.a)+parseFloat(this.b)
    }
    if(this.op=="-"){
      this.c = parseFloat(this.a)-parseFloat(this.b)
    }
    if(this.op=="*"){
      if (this.porci == "%"){
        this.c = parseFloat(this.b)
      }
      else {
        this.c = parseFloat(this.a)*parseFloat(this.b)
      }
    }
    if(this.op=="/"){
      this.c = parseFloat(this.a)/parseFloat(this.b)
    }
    this.porci = ""
    this.res = ""+this.c
    document.getElementById("pan2")!.innerHTML = this.res
  }
  ope(opi:string): void{
    this.condt()
    this.op = ""+opi
    this.showYourself()
  }
  putNum0(): void{
    this.condt()
    if (document.getElementById("pan1")!.innerHTML != "0"){
      if (this.op != "") {
        this.b += "0"
      }
      else {
        this.a += "0"
      }
    }
    this.showYourself()
  }
  condt(): void{
    if (this.c != 0){
      this.a = ""+this. c
      this.c = 0
      this.b = ""
    }
  }
  putNum(num:number): void{
    this.condt()
    if (this.c != 0){
      this.a = ""+this. c
      this.c = 0
      this.b = ""
    }
    if (document.getElementById("pan1")!.innerHTML == "0"){
      if (this.or != "0" || this.op != "") {
        this.b = ""+num
      }
      else {
        this.a = ""+num
      }
    }
    else {
      if (this.op != "") {
        this.b += ""+num
      }
      else {
        this.a += ""+num
      }
    }
    this.showYourself()
  }
  putDot(): void{
    if (document.getElementById("pan1")!.innerHTML == "0"){
      if (this.or != "0" || this.op != "") {
        this.b = "0."
      }
      else {
        this.a = "0."
      }
    }
    else {
      if (!this.containsSpecialChars(this.display)){
        if (this.op != "") {
          this.b += "."
        }
        else {
          this.a += "."
        }
      }
    }
    this.showYourself()
  }
  clear(): void{
    this.a = ""
    this.op = ""
    this.b = ""
    this.porci = ""
    document.getElementById("pan1")!.innerHTML = "0"
    document.getElementById("pan2")!.innerHTML = "0"
    this.showYourself()
  }
  showYourself(): void{
    if (this.a=="" && this.b =="" && this.op ==""){
      this.or = "0"
    }
    else{
      this.or = ""
    }
    this.display = this.or + "" + this.neg + "" + this.a + "" + this.op + "" + this.b+""+this.porci
    document.getElementById("pan1")!.innerHTML = this.display
  }
  containsSpecialChars(str:string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  ngOnInit(){
    this.showYourself()
  }
  show(): void{
    this.showMore = !this.showMore
  }
}
