app.controller('ContactController', function ($scope, $http, $compile) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data){
                console.log(data);
                if (data.success) {
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = window.alert("Mensaje Enviado!");
                    $scope.result='';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = window.alert("Mensaje No Enviado!");
                    $scope.result='bg-danger';
                }
            });
        }
    }
    $scope.inputCounter=0;
});

app.directive('addInput', ['$compile', function ($compile,$scope) { 
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.find('button').bind('click', function () {

                var input = angular.element('<select data-alert="' + scope.inputCounter + '" name="producto' + scope.inputCounter + '"  id="producto' + scope.inputCounter + '"  class="inputfield" ng-model="formData.producto' + scope.inputCounter + '">' +
                     '<option value="productos" selected hidden>Seleccionar Producto</option>' +
                     '<option value="PABILO_CRUDO">Pabilo Crudo (Paquete de 100 Unidades)</option>' +
                     '<option value="PABILO_COLOR">Pabilo de Color (Paquete de 20 Unidades)</option>' +
                     '<option value="HILO_CROCHET">Hilo Crochet (Paquete de 12 Unidades)</option>' +
                     '<option value="CORDEL">Cordel (Paquete de 12 Unidades)</option>' +
                 '</select>');
                var compile = $compile(input)(scope);

                var input2 = angular.element('<select class="inputfield" name="seleccionar' + scope.inputCounter + '"  id="seleccionar' + scope.inputCounter + '">' +
                        '<option value="color" selected hidden>Seleccionar Color</option>' + 
                 '</select>' +
                 '<select class="inputfield" name="crochet' + scope.inputCounter + '"  id="crochet' + scope.inputCounter + '" ng-model="formData.crochet' + scope.inputCounter + '">' +
                     '<option value="01">Blanco 01</option>' +
                     '<option value="139">Beige 139</option>' +
                     '<option value="17">Beige 17</option>' +
                     '<option value="976">Marron 976</option>' +
                     '<option value="21">Marrón 21</option>' +
                     '<option value="3954">Amarillo 3954</option>' +
                     '<option value="221">Amarillo 221</option>' +
                     '<option value="29">Amarillo 29</option>' +
                     '<option value="151">Mostaza 151</option>' +
                     '<option value="54">Verde 54</option>' +
                     '<option value="59">Verde 59</option>' +
                     '<option value="5383">Verde 5383</option>' +
                     '<option value="252">Verde 252</option>' +
                     '<option value="231">Verde 231</option>' +
                     '<option value="138">Azul 138</option>' +
                     '<option value="2877">Azul 2877</option>' +
                     '<option value="232">Azul 232</option>' +
                     '<option value="2432">Azul 2432</option>' +
                     '<option value="2685">Lila 2685</option>' +
                     '<option value="4295">Lila 4295</option>' +
                     '<option value="94">Morado 94</option>' +
                     '<option value="1631">Morado 1631</option>' +
                     '<option value="5844">Fuscia 5844</option>' +
                     '<option value="9376">Fuscia 9376</option>' +
                     '<option value="183">Fuscia 183</option>' +
                     '<option value="476">Rosado 476</option>' +
                     '<option value="240">Rosado 240</option>' +
                     '<option value="38">Rojo 38</option>' +
                     '<option value="39">Rojo 39</option>' +
                     '<option value="46">Salmon 46</option>' +
                     '<option value="150">Naranja 150</option>' +
                     '<option value="9335">Naranja 9335</option>' +
                     '<option value="160">Naranja 160</option>' +
                     '<option value="479">Naranja 479</option>' +
                     '<option value="48">Melón 48</option>' +
                     '<option value="16">Marrón 16</option>' +
                     '<option value="53">Verde 53</option>' +
                     '<option value="70">Verde 70</option>' +
                     '<option value="06">Azul 06</option>' +
                     '<option value="07">Azul 07</option>' +
                     '<option value="1057">Azul 1057</option>' +
                     '<option value="180">Azul 180</option>' +
                     '<option value="1668">Azul 1668</option>' +
                     '<option value="05">Rosado 05</option>' +
                     '<option value="76">Rosado 76</option>' +
                     '<option value="42">Vinotinto 42</option>' +
                     '<option value="87">Negro 87</option>' +
                 '</select>' +
                 '<select class="inputfield" name="cordel' + scope.inputCounter + '"  id="cordel' + scope.inputCounter + '" ng-model="formData.cordel' + scope.inputCounter + '">' +
                     '<option value="BL">Blanco BL</option>' +
                     '<option value="BR">Bronce BR</option>' +
                     '<option value="MA">Marron MA</option>' +
                     '<option value="AM">Amarillo AM</option>' +
                     '<option value="VD">Verde VD</option>' +
                     '<option value="VD2">Verde Esmeralda VD2</option>' +
                     '<option value="AZ2">Azul Rey AZ2</option>' +
                     '<option value="AZ4">Azul Oscuro AZ4</option>' +
                     '<option value="MO">Morado MO</option>' +
                     '<option value="FUC">Fuscia FUC</option>' +
                     '<option value="RO">Rosado RO</option>' +
                     '<option value="NA">Naranja NA</option>' +
                     '<option value="NE">Negro NE</option>' +
                 '</select>' +
                 '<select class="inputfield" name="crudo' + scope.inputCounter + '"  id="crudo' + scope.inputCounter + '" ng-model="formData.crudo' + scope.inputCounter + '">' +
                     '<option value="BLANCO">Crudo</option>' +
                 '</select>' +
                 '<select class="inputfield" name="color' + scope.inputCounter + '"  id="color' + scope.inputCounter + '" ng-model="formData.color' + scope.inputCounter + '">' +
                     '<option value="BLANCO">Blanco</option>' +
                     '<option value="BEIGE">Beige</option>' +
                     '<option value="AMARILLO">Amarillo</option>' +
                     '<option value="NARANJA">Naranja</option>' +
                     '<option value="MOSTAZA">Mostaza</option>' +
                     '<option value="MARRON">Marrón</option>' +
                     '<option value="ROJO">Rojo</option>' +
                     '<option value="LILA">Lila</option>' +
                     '<option value="ROSADO">Rosado</option>' +
                     '<option value="FUSCIA">Fuscia</option>' +
                     '<option value="MORADO">Morado</option>' +
                     '<option value="VINOTINTO">Vinotinto</option>' +
                     '<option value="AZUL REY">Azul Rey</option>' +
                     '<option value="AZUL MARINO">Azul Marino</option>' +
                     '<option value="AZUL TURQUEZA">Azul Turqueza</option>' +
                     '<option value="VERDE ESMERALDA">Verde Esmeralda</option>' +
                     '<option value="VERDE MANZANA">Verde Manzana</option>' +
                     '<option value="NEGRO">Negro</option>' +
                 '</select>'); 
                var compile2 = $compile(input2)(scope);
                
                var input3 = angular.element('<input type="number" placeholder="Cantidad" name="cantidad' + scope.inputCounter + '"  id="cantidad' + scope.inputCounter + '"  class="inputfield" ng-model="formData.cantidad' + scope.inputCounter + '" min="0">'); 
                var compile3 = $compile(input3)(scope);

                //element.append(input0);
                element.append(compile);
                element.append(compile2);
                element.append(compile3);
                $('#seleccionar'+scope.inputCounter).show();
                $('#cordel'+scope.inputCounter).hide();
                $('#crochet'+scope.inputCounter).hide();
                $('#crudo'+scope.inputCounter).hide();
                $('#color'+scope.inputCounter).hide();
                scope.inputCounter++;
            });
        }
    }
}]);
app.directive("alert", function(){
    return function(scope, element, attrs){
        element.bind("click", function(){
            $('#producto'+attrs.alert).on('change', function(){
                var target = $('#producto'+attrs.alert+' option:selected').val();
                if (target=='CORDEL') { 
                    $('#seleccionar'+attrs.alert).hide();
                    $('#cordel'+attrs.alert).show(); 
                    $('#crochet'+attrs.alert).hide();
                    $('#crudo'+attrs.alert).hide();
                    $('#color'+attrs.alert).hide(); 
                }      
                if (target=='HILO_CROCHET') {
                    $('#seleccionar'+attrs.alert).hide();
                    $('#cordel'+attrs.alert).hide(); 
                    $('#crochet'+attrs.alert).show(); 
                    $('#crudo'+attrs.alert).hide();
                    $('#color'+attrs.alert).hide(); 
                }      
                if (target=='PABILO_CRUDO') {
                    $('#seleccionar'+attrs.alert).hide();
                    $('#cordel'+attrs.alert).hide(); 
                    $('#crochet'+attrs.alert).hide(); 
                    $('#crudo'+attrs.alert).show();
                    $('#color'+attrs.alert).hide(); 
                }      
                if (target=='PABILO_COLOR') {
                    $('#seleccionar'+attrs.alert).hide();
                    $('#cordel'+attrs.alert).hide(); 
                    $('#crochet'+attrs.alert).hide(); 
                    $('#crudo'+attrs.alert).hide();
                    $('#color'+attrs.alert).show(); 
                }                    
            });
        });
    };
});