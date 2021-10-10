import { Component, OnInit, Input } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';
import { Servant } from 'src/app/servant';
import { BuscarService } from 'src/app/servicios/buscar.service';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
  styleUrls: ['./servants.component.css']
})
export class ServantsComponent implements OnInit {

  @Input() parametro: string = '';

  servants: Servant = {
    id: 0,
    name: '',
    rarity: '',
    class: '',
    atk: 0,
    hp: 0
  };
  servs: string = '';
  todos: string[] = [];

  constructor(
    private personajes: ServantService,
    private buscar: BuscarService
    ) { }

  ngOnInit(): void {
    //this.getData();
  }

  ngOnChanges(): void{
    /* console.log(this.parametro);
    console.log(this.buscar.getParametro()); */
    this.getData();
  }

  getData(){
    this.personajes
      .getListOfGroup()
      .subscribe(
        data => {
          //console.log(JSON.stringify(data));
          var result = []; 
          result = JSON.parse(JSON.stringify(data));
          var filtro = [];
          for (let index = 0; index < result.length; index++) {
            /* delete result[index]['id'];
            delete result[index]['id'];
            delete result[index]['ruby'];
            delete result[index]['type'];
            delete result[index]['flag'];
            delete result[index]['cost'];
            delete result[index]['lvMax'];
            delete result[index]['extraAssets'];
            delete result[index]['gender'];
            delete result[index]['attribute'];
            delete result[index]['traits'];
            delete result[index]['starAbsorb'];
            delete result[index]['starGen'];
            delete result[index]['instantDeathChance'];
            delete result[index]['cards'];
            delete result[index]['hitsDistribution'];
            delete result[index]['cardDetails'];
            delete result[index]['atkBase'];
            delete result[index]['hpBase'];
            delete result[index]['relateQuestIds'];
            delete result[index]['growthCurve'];
            delete result[index]['atkGrowth'];
            delete result[index]['hpGrowth'];
            delete result[index]['bondGrowth'];
            delete result[index]['expGrowth'];
            delete result[index]['expFeed'];
            delete result[index]['bondEquip'];
            delete result[index]['valentineEquip'];
            delete result[index]['valentineScript'];
            delete result[index]['ascensionAdd'];
            delete result[index]['traitAdd'];
            delete result[index]['svtChange'];
            delete result[index]['ascensionMaterials'];
            delete result[index]['skillMaterials'];
            delete result[index]['appendSkillMaterials'];
            delete result[index]['costumeMaterials'];
            delete result[index]['coin'];
            delete result[index]['script'];
            delete result[index]['skills'];
            delete result[index]['classPassive'];
            delete result[index]['extraPassive'];
            delete result[index]['appendPassive'];
            delete result[index]['noblePhantasms']; */
            //if(result[index]['name'].match('/.*'+this.buscar.getParametro()+'.*/')){
            if(result[index]['name'].includes(this.buscar.getParametro()) || result[index]['className'].includes(this.buscar.getParametro())){
              /* console.log(result[index]['name']);
              console.log(index); */
              filtro.push(result[index]);
            }
          }
          /* delete result['id'];
          delete result['ruby'];
          delete result['type'];
          delete result['flag'];
          delete result['cost'];
          delete result['lvMax'];
          delete result['extraAssets'];
          delete result['gender'];
          delete result['attribute'];
          delete result['traits'];
          delete result['starAbsorb'];
          delete result['starGen'];
          delete result['instantDeathChance'];
          delete result['cards'];
          delete result['hitsDistribution'];
          delete result['cardDetails'];
          delete result['atkBase'];
          delete result['hpBase'];
          delete result['relateQuestIds'];
          delete result['growthCurve'];
          delete result['atkGrowth'];
          delete result['hpGrowth'];
          delete result['bondGrowth'];
          delete result['expGrowth'];
          delete result['expFeed'];
          delete result['bondEquip'];
          delete result['valentineEquip'];
          delete result['valentineScript'];
          delete result['ascensionAdd'];
          delete result['traitAdd'];
          delete result['svtChange'];
          delete result['ascensionMaterials'];
          delete result['skillMaterials'];
          delete result['appendSkillMaterials'];
          delete result['costumeMaterials'];
          delete result['coin'];
          delete result['script'];
          delete result['skills'];
          delete result['classPassive'];
          delete result['extraPassive'];
          delete result['appendPassive'];
          delete result['noblePhantasms']; */
          //this.todos = result;
          this.todos = filtro;
          //console.log(result);
        },
        err => {
          console.log(err);
        }
    );
  }

}
