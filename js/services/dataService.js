/**
 * DataService - Clase de servicio que recupera informacioń estatica diversa
 * 
 */

angular.module('Data', [])
.service('DataService', function( ) {
	
	var dataOscarg = {
		nombre:"Oscar Garcia Pacheco",
		nombreCorto:"Oscar Garcia",
		imagen:"images/team/thumbs/oscarg.jpg",
		telefono:"5512449951",
		nacionalidad:"Mexicana",
		correo:"oscar.garcia@eliteware.io",
		profesion:"Ing. en Biónica",
		experiencia:[{nombre:"Java",porcentaje:95},{nombre:"AngularJS",porcentaje:90},{nombre:"NodeJS",porcentaje:88},{nombre:"B.D.",porcentaje:92},{nombre:"WEB",porcentaje:98}],
		facebook:"https://www.facebook.com/oscar.pacheco.021",
		twitter:"https://twitter.com/pachecobionico",
		linkedin:"https://mx.linkedin.com/in/oscargarciapacheco",
		descripcion:"Tengo mas de 9 años de experiencia en el desarrollo de aplicaciones tanto WEB, como de Escritorio y Moviles. He participado en muchos desarrollos en todas las etapas y procesos del mismo. Es un apoyo enorme en el equipo ya que cuenta con el conocimiento para resolver cualquier tipo de problema y tambien transmitirlo al equipo de trabajo",
		descripcionCorta1:"Tengo una visión amplia de las tecnologias y las adapto al negocio y las necesidades del cliente",		
		descripcionCorta2:"Soy muy perseverante y comprometido ¡Sale porque sale!.",
		posiciones:[{titulo:"Front-end developer", descripcion:"He Implementado del look and feel de todo un site usando las mas recientes tecnologias como bootstrap, css3, jquery y siguiendo las mejores técnicas UX con la finalidad de mejorar por mucho la experiencia del usuario al usar el sistema"},{titulo:"Java Sr. Developer",descripcion:"Puedo implementar de lógica de negocio usando los framework de java mas eficientes como Spring, Hibernate, JPA usando las mejores practicas y tecnicas siguiendo los estandares de Java."},{titulo:"Data Base Design", descripcion:"Tengo conocimientos sólidos en base de datos relaciones y bases de datos no-sql, he diseñaro base de datos para desarrollos desde 0 y modelado las entidades de la mejor manera para la optimización de consultas y operaciones sobre la base de datos."},{titulo:"Team Manager", descripcion:"He tenido la oportunidad de liderar equipos entre 4 y 8 personas dando buenos resultados motivando siempre al equipo y apoyando en todo lo necesario para cumplir con los compromisos planteados. Me apoyo en metodologias como SCRUM para dar mejores resultados a nuestros clientes."},{titulo:"Analyst Senior", descripcion:"Tengo la capacidad de tomar requerimientos del cliente y poder analizarlos para posteriormente realizar los diagramas en UML que el desarrollador requiera para poder llevar acabo la construcción tal cual es requerido por el cliente."}],
		comentarios:[{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"},{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"}]
	};
	this.getDataOscarg = function(){
		return dataOscarg;
	}
	var dataOscarm = {
		nombre:"Oscar Monroy Garcia",
		nombreCorto:"Oscar Monroy",
		imagen:"images/team/thumbs/oscarm.jpg",
		telefono:"0123456789",
		nacionalidad:"Mexicana",
		correo:"oscar.monroy@eliteware.io",
		profesion:"Ing. en Computación",
		posiciones:[{titulo:"Front-end developer", descripcion:"He Implementado del look and feel de todo un site usando las mas recientes tecnologias como bootstrap, css3, jquery y siguiendo las mejores técnicas UX con la finalidad de mejorar por mucho la experiencia del usuario al usar el sistema"},{titulo:"Java Sr. Developer",descripcion:"Puedo implementar de lógica de negocio usando los framework de java mas eficientes como Spring, Hibernate, JPA usando las mejores practicas y tecnicas siguiendo los estandares de Java."},{titulo:"Data Base Design", descripcion:"Tengo conocimientos sólidos en base de datos relaciones y bases de datos no-sql, he diseñaro base de datos para desarrollos desde 0 y modelado las entidades de la mejor manera para la optimización de consultas y operaciones sobre la base de datos."},{titulo:"Team Manager", descripcion:"He tenido la oportunidad de liderar equipos entre 4 y 8 personas dando buenos resultados motivando siempre al equipo y apoyando en todo lo necesario para cumplir con los compromisos planteados. Me apoyo en metodologias como SCRUM para dar mejores resultados a nuestros clientes."},{titulo:"Analyst Senior", descripcion:"Tengo la capacidad de tomar requerimientos del cliente y poder analizarlos para posteriormente realizar los diagramas en UML que el desarrollador requiera para poder llevar acabo la construcción tal cual es requerido por el cliente."}],
		facebook:"https://www.facebook.com/rakzo.kosupure",
		twitter:"",
		linkedin:"https://mx.linkedin.com/in/oscar-monroy-garcia-153488102",
		descripcion:"Con mas de 9 años de experiencia en el desarrollo de aplicaciones tanto WEB, como de Escritorio y Moviles. Ha participado en muchos desarrollos en todas las etapas y procesos del mismo. Es un apoyo enorme en el equipo ya que cuenta con el conocimiento para resolver cualquier tipo de problema y tambien transmitirlo al equipo de trabajo",
		descripcionCorta1:"Tiene una visión amplia de las tecnologias y las adapta al negocio y las necesidades del cliente",		
		descripcionCorta2:"Es muy perseverante y comprometido ¡Sale porque sale!.",
		experiencia:[{nombre:"Java",porcentaje:95},{nombre:"AngularJS",porcentaje:90},{nombre:"NodeJS",porcentaje:88},{nombre:"B.D.",porcentaje:92},{nombre:"WEB",porcentaje:98}],
		comentarios:[{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"},{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"}]
	};
	this.getDataOscarm = function(){
		return dataOscarm;
	}
	
	var dataOscarv = {
		nombre:"Oscar Vega",
		nombreCorto:"Oscar Vega",
		imagen:"images/team/thumbs/oscarv.jpg",
		telefono:"5512449951",
		nacionalidad:"Mexicana",
		correo:"oscar.vega@eliteware.io",
		profesion:"Ing. en Computación",
		posiciones:[{titulo:"Front-end developer", descripcion:"He Implementado del look and feel de todo un site usando las mas recientes tecnologias como bootstrap, css3, jquery y siguiendo las mejores técnicas UX con la finalidad de mejorar por mucho la experiencia del usuario al usar el sistema"},{titulo:"Java Sr. Developer",descripcion:"Puedo implementar de lógica de negocio usando los framework de java mas eficientes como Spring, Hibernate, JPA usando las mejores practicas y tecnicas siguiendo los estandares de Java."},{titulo:"Data Base Design", descripcion:"Tengo conocimientos sólidos en base de datos relaciones y bases de datos no-sql, he diseñaro base de datos para desarrollos desde 0 y modelado las entidades de la mejor manera para la optimización de consultas y operaciones sobre la base de datos."},{titulo:"Team Manager", descripcion:"He tenido la oportunidad de liderar equipos entre 4 y 8 personas dando buenos resultados motivando siempre al equipo y apoyando en todo lo necesario para cumplir con los compromisos planteados. Me apoyo en metodologias como SCRUM para dar mejores resultados a nuestros clientes."},{titulo:"Analyst Senior", descripcion:"Tengo la capacidad de tomar requerimientos del cliente y poder analizarlos para posteriormente realizar los diagramas en UML que el desarrollador requiera para poder llevar acabo la construcción tal cual es requerido por el cliente."}],
		facebook:"https://www.facebook.com/oscarvegaro",
		twitter:"",
		linkedin:"https://mx.linkedin.com/in/oscar-vega-rodríguez-13521027",
		descripcion:"Con mas de 9 años de experiencia en el desarrollo de aplicaciones tanto WEB, como de Escritorio y Moviles. Ha participado en muchos desarrollos en todas las etapas y procesos del mismo. Es un apoyo enorme en el equipo ya que cuenta con el conocimiento para resolver cualquier tipo de problema y tambien transmitirlo al equipo de trabajo",
		descripcionCorta1:"Tiene una visión amplia de las tecnologias y las adapta al negocio y las necesidades del cliente",		
		descripcionCorta2:"Es muy perseverante y comprometido ¡Sale porque sale!.",
		experiencia:[{nombre:"Java",porcentaje:95},{nombre:"AngularJS",porcentaje:90},{nombre:"NodeJS",porcentaje:88},{nombre:"B.D.",porcentaje:92},{nombre:"WEB",porcentaje:98}],
		comentarios:[{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"},{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"}]
	};
	this.getDataOscarv = function(){
		return dataOscarv;
	}
	
	var dataDanielm = {
		nombre:"Daniel Morales",
		nombreCorto:"Daniel Morales",
		imagen:"images/team/thumbs/danielm.jpg",
		telefono:"5512449951",
		nacionalidad:"Mexicana",
		correo:"daniel.morales@eliteware.io",
		profesion:"Ing. en Computación",
		posiciones:[{titulo:"Front-end developer", descripcion:"He Implementado del look and feel de todo un site usando las mas recientes tecnologias como bootstrap, css3, jquery y siguiendo las mejores técnicas UX con la finalidad de mejorar por mucho la experiencia del usuario al usar el sistema"},{titulo:"Java Sr. Developer",descripcion:"Puedo implementar de lógica de negocio usando los framework de java mas eficientes como Spring, Hibernate, JPA usando las mejores practicas y tecnicas siguiendo los estandares de Java."},{titulo:"Data Base Design", descripcion:"Tengo conocimientos sólidos en base de datos relaciones y bases de datos no-sql, he diseñaro base de datos para desarrollos desde 0 y modelado las entidades de la mejor manera para la optimización de consultas y operaciones sobre la base de datos."},{titulo:"Team Manager", descripcion:"He tenido la oportunidad de liderar equipos entre 4 y 8 personas dando buenos resultados motivando siempre al equipo y apoyando en todo lo necesario para cumplir con los compromisos planteados. Me apoyo en metodologias como SCRUM para dar mejores resultados a nuestros clientes."},{titulo:"Analyst Senior", descripcion:"Tengo la capacidad de tomar requerimientos del cliente y poder analizarlos para posteriormente realizar los diagramas en UML que el desarrollador requiera para poder llevar acabo la construcción tal cual es requerido por el cliente."}],
		facebook:"",
		twitter:"",
		linkedin:"https://mx.linkedin.com/in/josé-daniel-morales-ríos-a06a501a/es",
		descripcion:"Con mas de 9 años de experiencia en el desarrollo de aplicaciones tanto WEB, como de Escritorio y Moviles. Ha participado en muchos desarrollos en todas las etapas y procesos del mismo. Es un apoyo enorme en el equipo ya que cuenta con el conocimiento para resolver cualquier tipo de problema y tambien transmitirlo al equipo de trabajo",
		descripcionCorta1:"Tiene una visión amplia de las tecnologias y las adapta al negocio y las necesidades del cliente",		
		descripcionCorta2:"Es muy perseverante y comprometido ¡Sale porque sale!.",
		experiencia:[{nombre:"Java",porcentaje:95},{nombre:"AngularJS",porcentaje:90},{nombre:"NodeJS",porcentaje:88},{nombre:"B.D.",porcentaje:92},{nombre:"WEB",porcentaje:98}],
		comentarios:[{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"},{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"}]
	};
	this.getDataDanielm = function(){
		return dataDanielm;
	}
	
	var dataRafaeld = {
		nombre:"Rafael Delgadillo Esparza",
		nombreCorto:"Rafael Delgadillo",
		imagen:"images/team/thumbs/rafaeld.jpg",
		telefono:"5512449951",
		nacionalidad:"Mexicana",
		correo:"rafael.delgadillo@eliteware.io",
		profesion:"Ing. en Computación",
		posiciones:[{titulo:"Front-end developer", descripcion:"He Implementado del look and feel de todo un site usando las mas recientes tecnologias como bootstrap, css3, jquery y siguiendo las mejores técnicas UX con la finalidad de mejorar por mucho la experiencia del usuario al usar el sistema"},{titulo:"Java Sr. Developer",descripcion:"Puedo implementar de lógica de negocio usando los framework de java mas eficientes como Spring, Hibernate, JPA usando las mejores practicas y tecnicas siguiendo los estandares de Java."},{titulo:"Data Base Design", descripcion:"Tengo conocimientos sólidos en base de datos relaciones y bases de datos no-sql, he diseñaro base de datos para desarrollos desde 0 y modelado las entidades de la mejor manera para la optimización de consultas y operaciones sobre la base de datos."},{titulo:"Team Manager", descripcion:"He tenido la oportunidad de liderar equipos entre 4 y 8 personas dando buenos resultados motivando siempre al equipo y apoyando en todo lo necesario para cumplir con los compromisos planteados. Me apoyo en metodologias como SCRUM para dar mejores resultados a nuestros clientes."},{titulo:"Analyst Senior", descripcion:"Tengo la capacidad de tomar requerimientos del cliente y poder analizarlos para posteriormente realizar los diagramas en UML que el desarrollador requiera para poder llevar acabo la construcción tal cual es requerido por el cliente."}],
		facebook:"",
		twitter:"",
		linkedin:"https://mx.linkedin.com/in/mario-rafael-delgadillo-esparza-06048b101",
		descripcion:"Con mas de 9 años de experiencia en el desarrollo de aplicaciones tanto WEB, como de Escritorio y Moviles. Ha participado en muchos desarrollos en todas las etapas y procesos del mismo. Es un apoyo enorme en el equipo ya que cuenta con el conocimiento para resolver cualquier tipo de problema y tambien transmitirlo al equipo de trabajo",
		descripcionCorta1:"Tiene una visión amplia de las tecnologias y las adapta al negocio y las necesidades del cliente",		
		descripcionCorta2:"Es muy perseverante y comprometido ¡Sale porque sale!.",
		experiencia:[{nombre:"Java",porcentaje:95},{nombre:"AngularJS",porcentaje:90},{nombre:"NodeJS",porcentaje:88},{nombre:"B.D.",porcentaje:92},{nombre:"WEB",porcentaje:98}],
		comentarios:[{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"},{descripcion:"Excelente desarrollador responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo. altamente recomendable",autor:"Jaime Ruvalcaba"}]
	};
	this.getDataRafaeld = function(){
		return dataRafaeld;
	} 
	
});
