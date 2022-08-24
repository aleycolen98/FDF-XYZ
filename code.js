function convertir(){

    var array = document.getElementById("input1").value.split('\n');
    var elements = array.length;
    var temporal2;
    var temporal3;
    var array_final;
    var array_final_2;
    var array_final_4;
    let element_list = new Map();
   
    element_list.set('H','1');
    element_list.set('He','2');
    element_list.set('Li','3');
    element_list.set('Be','4');
    element_list.set('B','5');
    element_list.set('C','6');
    element_list.set('N','7');
    element_list.set('O','8');
    element_list.set('F','9');
    element_list.set('Ne','10');
    element_list.set('Na','11');
    element_list.set('Mg','12');
    element_list.set('Al','13');
    element_list.set('Si','14');
    element_list.set('P','15');
    element_list.set('S','16');
    element_list.set('Cl','17');
    element_list.set('Ar','18');
    element_list.set('K','19');
    element_list.set('Ca','20');
    element_list.set('Sc','21');
    element_list.set('Ti','22');
    element_list.set('V','23');
    element_list.set('Cr','24');
    element_list.set('Mn','25');
    element_list.set('Fe','26');
    element_list.set('Co','27');
    element_list.set('Ni','28');
    element_list.set('Cu','29');
    element_list.set('Zn','30');
    element_list.set('Ga','31');
    element_list.set('Ge','32');
    element_list.set('As','33');
    element_list.set('Se','34');
    element_list.set('Br','35');
    element_list.set('Kr','36');
    element_list.set('Rb','37');
    element_list.set('Sr','38');
    element_list.set('Y','39');
    element_list.set('Zr','40');
    element_list.set('Nb','41');
    element_list.set('Mo','42');
    element_list.set('Tc','43');
    element_list.set('Ru','44');
    element_list.set('Rh','45');
    element_list.set('Pd','46');
    element_list.set('Ag','47');
    element_list.set('Cd','48');
    element_list.set('In','49');
    element_list.set('Sn','50');
    element_list.set('Sb','51');
    element_list.set('Te','52');
    element_list.set('I','53');
    element_list.set('Xe','54');
    element_list.set('Cs','55');
    element_list.set('Ba','56');
    element_list.set('La','57');
    element_list.set('Ce','58');
    element_list.set('Pr','59');
    element_list.set('Nd','60');
    element_list.set('Pm','61');
    element_list.set('Sm','62');
    element_list.set('Eu','63');
    element_list.set('Gd','64');
    element_list.set('Tb','65');
    element_list.set('Dy','66');
    element_list.set('Ho','67');
    element_list.set('Er','68');
    element_list.set('Tm','69');
    element_list.set('Yb','70');
    element_list.set('Lu','71');
    element_list.set('Hf','72');
    element_list.set('Ta','73');
    element_list.set('W','74');
    element_list.set('Re','75');
    element_list.set('Os','76');
    element_list.set('Ir','77');
    element_list.set('Pt','78');
    element_list.set('Au','79');
    element_list.set('Hg','80');
    element_list.set('Tl','81');
    element_list.set('Pb','82');
    element_list.set('Bi','83');
    element_list.set('Po','84');
    element_list.set('At','85');
    element_list.set('Rn','86');
    element_list.set('Fr','87');
    element_list.set('Ra','88');
    element_list.set('Ac','89');
    element_list.set('Th','90');
    element_list.set('Pa','91');
    element_list.set('U','92');
    element_list.set('Np','93');
    element_list.set('Pu','94');
    element_list.set('Am','95');
    element_list.set('Cm','96');
    element_list.set('Bk','97');
    element_list.set('Cf','98');
    element_list.set('Es','99');
    element_list.set('Fm','100');
    element_list.set('Md','101');
    element_list.set('No','102');
    element_list.set('Lr','103');
    element_list.set('Rf','104');
    element_list.set('Db','105');
    element_list.set('Sg','106');
    element_list.set('Bh','107');
    element_list.set('Hs','108');
    element_list.set('Mt','109');
    element_list.set('Ds','110');
    element_list.set('Rg','111');
    element_list.set('Cn','112');
    element_list.set('Nh','113');
    element_list.set('Fl','114');
    element_list.set('Mc','115');
    element_list.set('Lv','116');
    element_list.set('Ts','117');
    element_list.set('Og','118');


    for(var j=0; j<elements; j++){

        temporal2 = array[j].replace(/\s+/g, '&');
        temporal3 = temporal2.split('&');

        if(j==0){
            array_final = temporal3[5]+"      "+temporal3[0]+"   "+temporal3[1]+"   "+temporal3[2]+'\n';
            array_final_2 = temporal3[5]+" "+temporal3[3]+'\n';
        }
        else{
            array_final = array_final + temporal3[5]+"      "+temporal3[0]+"   "+temporal3[1]+"   "+temporal3[2]+'\n';
            array_final_2 = array_final_2 + temporal3[5]+" "+temporal3[3]+'\n';
        }


    }

    var array_3 = array_final_2.split('\n')
    var uniqueArr = [...new Set(array_3)]
    var array_final_3;



    /*for (let [key, value] of element_list) {
        console.log(key + ' goes ' + value);
      }*/



    document.getElementById("input3").value = array_final;
    
    for(var j=0; j<uniqueArr.length; j++){

        if(j==0){
            array_final_3 = uniqueArr[j] + '\n';
        }else{
            array_final_3 = array_final_3 + uniqueArr[j] + '\n';
        }
        

    }

    var aux1;
    aux1 = array_final_3.split('\n');
    var aux2;

    for(var j=0; j<aux1.length-2; j++){
        
        aux2 = aux1[j].split(' ');
        
        for (let [key, value] of element_list) {
            
            if(aux2[0]==key){
                aux2[2] = value;
            }
            
        }

        if(j==0){
            array_final_4 = "%block ChemicalSpeciesLabel"+'\n'+"    "+aux2[0]+" "+aux2[1]+" "+aux2[2]+'\n';
        }
        else{
            array_final_4 = array_final_4+"    "+aux2[0]+" "+aux2[1]+" "+aux2[2]+'\n';
        }

    }
    array_final_4 = array_final_4 + "%endblock ChemicalSpeciesLabel" ;
    document.getElementById("input2").value = array_final_4;

}


function borrar_datos(){

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";

}

document.getElementById("boton1").onclick = convertir;
document.getElementById("boton2").onclick = borrar_datos;
