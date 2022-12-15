import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CrearcuentaserviceService, Profesor } from 'src/app/services/crearcuentaservice.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ExtraerdatosService } from '../../services/extraerdatos.service';


@Component({
  selector: 'app-correoalumno',
  templateUrl: './correoalumno.page.html',
  styleUrls: ['./correoalumno.page.scss'],
})
export class CorreoalumnoPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Profesor[] = [];

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private registroService: CrearcuentaserviceService, 
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({ 
                  'correo' : new FormControl("", Validators.required),
                  'password' : new FormControl ("", Validators.required)                
                })
              }

  ngOnInit() {
  }

  async Ingresar2(){
    var f = this.formularioLogin.value;
    var a=0;
    if(this.formularioLogin.controls['correo'].errors?.required || this.formularioLogin.controls['password'].errors?.required) {
      this.alertMsg('Debe ingresar los datos solicitados');
      return null;
      }
    this.registroService.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.correo == obj.correoUsuario && f.password==obj.passUsuario){
          a=1;
          ExtraerdatosService.nombre=obj.nomUsuario;
          ExtraerdatosService.correoelectronico=obj.correoUsuario;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.navController.navigateRoot('inicioalumno');
        }
      }//findelfor
      if(a==0){
        this.alertMsg('Los datos ingresados son incorrectos');
      }
    })
  }//findelmetodo

  async alertMsg(mensajes: string){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: mensajes,
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

}
