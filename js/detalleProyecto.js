/**
 * Created by oscar on 19/Nov/2015.
 */
var myApp = angular.module("DetalleProyectoModule",[]);

myApp.controller( "DetalleProyectoController", function($scope, $http, $rootScope, $location){
        $scope.load = function(){
                var proyectoSelected = localStorage.getItem("proyecto");
                if( proyectoSelected ){
                        $scope.proyectoSelected = JSON.parse(proyectoSelected);   
                }
                $rootScope.pageTitle = $scope.proyectoSelected.titulo;
                window.scrollTo(0, 30);
              
        }
        $scope.load();
        $scope.setProyectoEnPortafolio = function( proyecto ){
                if( proyecto === 'yoplanner' ){
                        $scope.proyectoSelected.alias = "yoplanner";
                        $scope.proyectoSelected.titulo = "Yo Planner";
                        $scope.proyectoSelected.imagen = "images/work/yoplanner.png";
                        $scope.proyectoSelected.link = "http://www.yoplanner.com";
                        $scope.proyectoSelected.detalle1 = "Empresa mexicana especializada en la organización y planeación tanto de meetings y conferencias para empresas, como de viajes turísticos.";
                        $scope.proyectoSelected.detalle2 = "Puedes encontrar cualquier salon, centro de convenciones o auditorio dentro y fuera de los hoteles que se adapte a tus necesidades.";
                        $scope.proyectoSelected.detalle3 = "Aqui te podrán ayudar a conseguir hospedaje y transporte para todos los asistentes y ambientar el lugar para que tu meeting sea todo un éxito.";
                        $scope.proyectoSelected.images = ["images/single-project/yoplanner1.png","images/single-project/yoplanner2.png","images/single-project/yoplanner3.png"];
                        $scope.proyecto.opiniones = [{opinion:"Excelente, responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo.", autorOpinion:"Mauricio Gerardo Giron Riveroll"},
                        {opinion:"Estuvimos buscando una soluci&oacute;n eficaz para poder estar en contacto con los ciudadanos, para que pudieran conocer a sus representantes pol&iacute;ticos, y el equipo de Eliteware supo adecuarse a nuestros requerimientos y hacer realidad la aplicaci&oacute;n que necesit&aacute;bamos, ahora nos encontramos m&aacute;s cerca de los ciudadanos, conocer sus problem&aacute;ticas y recibir sus propuestas por medio de la aplicaci&oacute;n.", autorOpinion:"Javier Oloarte"}];            
                }else if( proyecto === 'biocalpert' ){
                        $scope.proyectoSelected.alias = "biocalpert";
                        $scope.proyectoSelected.titulo = "Biocalpert Admin";
                        $scope.proyectoSelected.imagen = "images/work/biocalper.png";
                        $scope.proyectoSelected.link = "http://www.yoplanner.com:8081/";
                        $scope.proyectoSelected.detalle1 = "Empresa fundada a principios del año 2010, cuyo objetivo principal es asesorar a los médicos en toda la república mexicana sobre equipos como Ultrasonido Portátil, Dopplex Vascular, Láser Quirurgico, Presoterapia, Grabadoras de Cardiologia";
                        $scope.proyectoSelected.detalle2 = "Dentro de nuestro equipo de trabajo, contamos con ingenieros Bio-médicos con más de 25 años de experiencia en tema de comercialización, capacitación y reparación de los mismos equipos.";
                        $scope.proyectoSelected.detalle3 = "";
                        $scope.proyectoSelected.images = ["images/single-project/biocalpert1.png","images/single-project/biocalpert2.png"];
                        $scope.proyecto.opiniones = [{opinion:"Excelente, responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo.", autorOpinion:"Mauricio Gerardo Giron Riveroll"},
                        {opinion:"Estuvimos buscando una soluci&oacute;n eficaz para poder estar en contacto con los ciudadanos, para que pudieran conocer a sus representantes pol&iacute;ticos, y el equipo de Eliteware supo adecuarse a nuestros requerimientos y hacer realidad la aplicaci&oacute;n que necesit&aacute;bamos, ahora nos encontramos m&aacute;s cerca de los ciudadanos, conocer sus problem&aacute;ticas y recibir sus propuestas por medio de la aplicaci&oacute;n.", autorOpinion:"Javier Oloarte"}];
                }else if( proyecto === 'mitianguis' ){
                        $scope.proyectoSelected.alias = "mitianguis";
                        $scope.proyectoSelected.titulo = "Mi Tianguis MX";
                        $scope.proyectoSelected.imagen = "images/work/mitianguis.png";
                        $scope.proyectoSelected.link = "http://www.yoplanner.com:8082/";
                        $scope.proyectoSelected.detalle1 = "Sitio Ecommerce desarrollado por Eliteware.IO con el objetivo de proveer a costos bajos su propia tienda virtual a cualquier persona que este interesada en verder algo";
                        $scope.proyectoSelected.detalle2 = "Dentro de las características del sitio esta el pago con tarjeta de crédito sin uso de terminal para poder hacer cobros en donde quiera que estes solo con acceso a internet.";
                        $scope.proyectoSelected.detalle3 = "Tambien podras afiliarte como miembro y pertener a la red Ecommerce y obtener muchos beneficios.";
                        $scope.proyectoSelected.images = ["images/work/mitianguis.png"];
                        $scope.proyecto.opiniones = [{opinion:"Excelente, responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo.", autorOpinion:"Mauricio Gerardo Giron Riveroll"},
                        {opinion:"Estuvimos buscando una soluci&oacute;n eficaz para poder estar en contacto con los ciudadanos, para que pudieran conocer a sus representantes pol&iacute;ticos, y el equipo de Eliteware supo adecuarse a nuestros requerimientos y hacer realidad la aplicaci&oacute;n que necesit&aacute;bamos, ahora nos encontramos m&aacute;s cerca de los ciudadanos, conocer sus problem&aacute;ticas y recibir sus propuestas por medio de la aplicaci&oacute;n.", autorOpinion:"Javier Oloarte"}];
                }
                $rootScope.pageTitle = $scope.proyectoSelected.titulo;
                window.scrollTo(0, 30);
        }
});
