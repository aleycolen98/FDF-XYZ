function convertir(){

    var array = document.getElementById("input1").value.split('\n');
    var elements = array.length;
    var aa = 'Hola';
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


    for(var j=0; j<elements; j++){

        temporal2 = array[j].replace(/\s+/g, '&');
        temporal3 = temporal2.split('&');
        console.log(temporal3);

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
    console.log(uniqueArr)



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

        
        console.log(aux2);
    }
    array_final_4 = array_final_4 + "%endblock ChemicalSpeciesLabel" ;
    console.log(array_final_4);
    document.getElementById("input2").value = array_final_4;

}

document.getElementById("boton1").onclick = convertir;