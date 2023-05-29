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
  test: string = ""
  res:string = ""
  or:String = ""
  display :string = ""
  ans = "Ans$^{-1}$"
  exp = "$X^{Y}$"
  porci = ""
  calc = 0
  selTrig = 0
  op :String = ""
  neg :String = ""
  trig: String = ""
  ansM(): void{
    this.c= 1/this.c
    this.res = ""+this.c
    document.getElementById("pan2")!.innerHTML = this.res
  }
  pi(): void{
    if(this.op!=")"){
      if (!this.containsSpecialChars(this.a)){
        this.a += "π"
     }
     else {
        if (this.op != "" && !this.containsSpecialChars(this.b)) {
          this.b += "π"
        }
      }
    }
    this.showYourself()
  }
  percent(): void{
    this.porci = "%"
    this.showYourself()
  }
  expC(): void{
    this.op = "^"
    this.showYourself()
  }
  mm(): void{
    this.c= this.c*-1
    this.res = ""+this.c
    document.getElementById("pan2")!.innerHTML = this.res
  }
  eq(): void{
    if(this.op == ")"){
      if(this.trig=="Sen("){
        this.dgToRad()
        this.c = (Number)(Math.sin(parseFloat(this.a)).toFixed(4))
      }
      else if(this.trig=="Cos("){
        this.dgToRad()
        this.c = (Number)(Math.cos(parseFloat(this.a)).toFixed(4))
      }
      else if(this.trig=="Tan("){
        this.dgToRad()
        this.c = (Number)(Math.tan(parseFloat(this.a)).toFixed(4))
      }
      else if(this.trig="Arcsen("){
        this.c = (Number)(Math.asin(parseFloat(this.a)).toFixed(4))
      }
      else if(this.trig="Arccos("){
        this.c = (Number)(Math.acos(-1).toFixed(4))
      }
      else if(this.trig="Arctan("){
        this.c = (Number)(Math.atan(parseFloat(this.a)).toFixed(4))
      }
      this.test = this.a
    }
    if(this.porci == "%"){
      this.calc = parseFloat(this.b)/100*parseFloat(this.a)
      this.b = ""+this.calc
    }
    if(this.op=="^"){
      this.c = Math.pow(parseFloat(this.a),parseFloat(this.b))
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
    if(this.op==""){
      this.c = parseFloat(this.a)
    }
    this.c = (Number)(this.c.toFixed(4))
    this.porci = ""
    this.res = ""+this.c
    document.getElementById("pan2")!.innerHTML = this.res
  }
  ope(opi:string): void{
    if (this.op != ")"){
      if(this.a==""){
        this.a = "0"
      }
      this.condt()
      this.op = ""+opi
      this.showYourself()
    }
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
  dgToRad(): void{
    const ei = /[π]/;
    if(this.test != this.a){
      if(!ei.test(this.a)){
        this.calc = parseFloat(this.a)*(Math.PI/180)
        this.a = ""+this.calc
      }
      else{
        this.a = this.a.replaceAll("π","")
        this.calc = parseFloat(this.a)*Math.PI
        this.a = ""+this.calc
      }
    }
  }
  putTrig(trig: String): void{
    this.condt()
    this.trig = trig
    this.op = ")"
    if (document.getElementById("pan1")!.innerHTML == "0"){
      this.a = "0"
    }
    this.showYourself()
  }
  putNum(num:number): void{
    this.condt()
    if(this.op !=")"){
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
    }
    this.showYourself()
  }
  putDot(): void{
    if(this.op!=")"){
      if (document.getElementById("pan1")!.innerHTML == "0" && !this.containsSpecialChars(this.a)){
        this.a = "0."
      }
      else {
        if (this.op != "" && !this.containsSpecialChars(this.b)) {
          this.b += "."
        }
      }
    }
    this.showYourself()
  }
  clear(): void{
    this.a = ""
    this.op = ""
    this.b = ""
    this.c = 0
    this.porci = ""
    this.trig = ""
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
    this.display = this.or + "" + this.neg + "" + this.trig + "" + this.a + "" + this.op + "" + this.b+""+this.porci
    document.getElementById("pan1")!.innerHTML = this.display
  }
  containsSpecialChars(str:string) {
    const specialChars = /[π`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  ngOnInit(){
    this.showYourself()
  }
  show(): void{
    this.showMore = !this.showMore
  }
}
