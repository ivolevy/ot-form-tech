// Define the security plan data structure
export interface SecurityLocation {
  name: string
  agents: number
  distribution: string
  functions: string
}

export interface SecuritySection {
  title: string
  locations: SecurityLocation[]
}

export interface SecurityPlan {
  title: string
  subtitle: string
  league: string
  sections: {
    exteriorPerimeter: {
      title: string
      subsections: SecuritySection[]
      totalAgents: number
    }
    stadiumStands: {
      title: string
      subsections: SecuritySection[]
      totalAgents: number
    }
    internalPerimeter: {
      title: string
      subsections: SecuritySection[]
      totalAgents: number
    }
    totalAgents: number
    generalConsiderations: string[]
  }
}

// Default security plan data
export const defaultSecurityPlan: SecurityPlan = {
  title: "PLAN OPERATIVO DE SEGURIDAD",
  subtitle: "CLUB ATLÉTICO RIVER PLATE VS CLUB ATLÉTICO TALLERES",
  league: "LIGA PROFESIONAL DE FÚTBOL",
  sections: {
    exteriorPerimeter: {
      title: "PERÍMETRO EXTERIOR",
      subsections: [
        {
          title: "AV. FIGUEROA ALCORTA",
          locations: [
            {
              name: "Ingreso al canal familiar",
              agents: 4,
              distribution: "4 en línea de cacheo",
              functions: "Control visual de los simpatizantes que ingresan por el troncal.",
            },
            {
              name: "Corredor canal familiar",
              agents: 8,
              distribution:
                "• 1 en puerta de Club C.A.S.A<br>• 1 en primer portón CHA<br>• 1 en ingreso principal CHA<br>• 1 en segundo portón CHA<br>• 3 línea cacheo en S.A<br>• 1 supervisor",
              functions:
                "• Control del flujo de simpatizantes por el canal.<br>• Control del flujo de simpatizantes por el canal y prevenir incidentes con el ingreso vehicular al sector.<br>• Control del flujo de simpatizantes por el canal y prevenir incidentes con el ingreso vehicular al sector.<br>• Control del flujo de simpatizantes por el canal.<br>• Cacheo de los simpatizantes que ingresan por el troncal.<br>• Supervisar el correcto funcionamiento del troncal.",
            },
            {
              name: "Antivandálicos",
              agents: 7,
              distribution: "7 en línea antivandálico",
              functions: "Control visual de los simpatizantes que ingresan por el troncal.",
            },
            {
              name: "Altura museo (21 bretes)",
              agents: 31,
              distribution: "• 1 por brete del cacheo (20)<br>• 10 línea de contención<br>• 1 supervisor",
              functions:
                "• Cacheo de simpatizantes para evitar el ingreso de elementos no autorizados.<br>• Refuerzo del cacheo principal para acelerar y optimizar el control.<br>• Supervisar y notificar cualquier novedad del trabajo realizado.",
            },
            {
              name: "Estacionamiento bicicletas",
              agents: 2,
              distribution: "• 1 en ingreso al aparcamiento<br>• 1 en final del aparcamiento",
              functions: "Velar por el cuidado y correcto aparcamiento de las bicicletas en el sector.",
            },
            {
              name: "Molinetes comedores internos",
              agents: 5,
              distribution: "5 en línea de molinete",
              functions: "Prevenir ingresos no autorizados y prestar colaboración con el personal de UTEDYC",
            },
          ],
        },
        {
          title: "AV. QUINTEROS",
          locations: [
            {
              name: "Ingreso desde Av. Libertador",
              agents: 10,
              distribution: "• 9 en línea de pre-cacheo<br>• 1 supervisor",
              functions:
                "• Control visual de los simpatizantes que ingresan por el troncal.<br>• Supervisar el correcto funcionamiento del sector",
            },
            {
              name: "Almte. Barilari",
              agents: 2,
              distribution: "2 detrás de vallado bajo",
              functions: "Impedir el paso de simpatizantes hacia el canal familiar",
            },
            {
              name: "Rafael Hernández",
              agents: 2,
              distribution: "2 detrás de vallado bajo",
              functions: "Impedir el paso de simpatizantes hacia el canal familiar",
            },
            {
              name: "Bavio (14 bretes)",
              agents: 25,
              distribution: "• 1 por brete del cacheo (14)<br>• 10 línea de contención<br>• 1 supervisor",
              functions:
                "• Cacheo de simpatizantes para evitar el ingreso de elementos no autorizados.<br>• Refuerzo del cacheo principal para acelerar y optimizar el control.<br>• Supervisar y notificar cualquier novedad del trabajo realizado.",
            },
          ],
        },
        {
          title: "CANAL FAMILIAR SOLIER",
          locations: [
            {
              name: "Ingreso desde Av. Libertador (5)",
              agents: 3,
              distribution: "• 1 en línea de pre-cacheo<br>• 1 supervisor",
              functions:
                "• Control visual de los simpatizantes que ingresan por el troncal.<br>• Supervisar el correcto funcionamiento del sector",
            },
            {
              name: "Altura Solier (5 bretes)",
              agents: 6,
              distribution: "• 1 por brete del cacheo (5)<br>• 1 supervisor",
              functions:
                "• Cacheo de simpatizantes para evitar el ingreso de elementos no autorizados.<br>• Supervisar el correcto funcionamiento del sector",
            },
          ],
        },
        {
          title: "AV. UDAONDO",
          locations: [
            {
              name: "Plaza de Libertador",
              agents: 3,
              distribution: "Distribuidos en la plaza",
              functions: "Prevenir el sector para usos que alteren el orden público.",
            },
            {
              name: "Espacio del Hincha",
              agents: 3,
              distribution: "• 2 en reja de tiro federal<br>• 1 en portón trasero",
              functions: "Control de simpatizantes en el sector",
            },
            {
              name: "Canal familiar Ricchieri",
              agents: 3,
              distribution: "En línea de pre-cacheo",
              functions: "Control visual de los simpatizantes que ingresan por el troncal.",
            },
            {
              name: "Ingreso al canal familiar desde Bavio",
              agents: 4,
              distribution: "• 3 en línea de cacheo<br>• 1 supervisor",
              functions:
                "• Cacheo de simpatizantes para evitar el ingreso de elementos no autorizados.<br>• Supervisar el correcto funcionamiento del canal",
            },
            {
              name: "Iglesia",
              agents: 10,
              distribution: "5 en línea antivandálico",
              functions: "Control visual de los simpatizantes que ingresan por el troncal.",
            },
            {
              name: "Shell (20 bretes)",
              agents: 44,
              distribution: "• 1 por brete del cacheo (21)<br>• 21 en línea de contención<br>• 2 supervisor",
              functions:
                "• Cacheo de simpatizantes para evitar el ingreso de elementos no autorizados.<br>• Refuerzo del cacheo principal para acelerar y optimizar el control.<br>• Supervisar el correcto funcionamiento del troncal",
            },
            {
              name: "Ingreso Playón prensa",
              agents: 2,
              distribution: "2 en portón de playón seco (ingreso a puerta P-O)",
              functions: "Control visual de los simpatizantes que ingresan por el sector.",
            },
            {
              name: "Salida e ingreso a la Av. Lugones",
              agents: 4,
              distribution:
                "• 1 ingreso Lugones<br>• 1 salida Campo Salles<br>• 1 portón ingreso Udaondo<br>• 1 portón salida Udaondo",
              functions:
                "• Impedir el ingreso de simpatizantes no autorizados por el sector. Permitir el ingreso de vehículos con carnet habilitante. Colaborar con el personal de UTEDYC apostado en el sector.<br>• Impedir el ingreso de simpatizantes no autorizados por el sector. Impedir el ingreso de vehículos por el sector.<br>• Impedir el ingreso y egreso de simpatizantes no autorizados por el sector.<br>• Impedir el ingreso y egreso de simpatizantes no autorizados por el sector.",
            },
          ],
        },
        {
          title: "PUENTE LABRUNA",
          locations: [
            {
              name: "Bretes sobre el puente",
              agents: 12,
              distribution: "• 1 por brete del cacheo (10)<br>• 1 supervisor",
              functions:
                "• Cacheo de simpatizantes para evitar el ingreso de elementos no autorizados.<br>• Supervisar el correcto funcionamiento del troncal",
            },
            {
              name: "Pie del puente",
              agents: 2,
              distribution: "Al costado de los molientes",
              functions: "Prevenir ingresos no autorizados y prestar colaboración con el personal de UTEDYC",
            },
          ],
        },
      ],
      totalAgents: 192,
    },
    stadiumStands: {
      title: "TRIBUNAS DEL ESTADIO",
      subsections: [
        {
          title: "SAN MARTIN",
          locations: [
            {
              name: "Alta",
              agents: 23,
              distribution:
                "• 3 agentes por tronera (15)<br>• 1 agente en balcón de cámara<br>• 2 bajo tribuna pase<br>• 1 en posta medica<br>• 2 pase tribuna exterior<br>• 2 supervisor",
              functions:
                "• Impedir que los simpatizantes obstaculicen troneras y medios de evacuación.<br>• Impedir que los simpatizantes obstaculicen el sector<br>• Impedir el uso de las puertas por personal no autorizado<br>• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Prevenir el sector de instrucciones.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Media",
              agents: 10,
              distribution: "2 vigiladores por escalera",
              functions: "Impedir que los simpatizantes obstaculicen los medios de evacuación.",
            },
            {
              name: "Baja e inferior",
              agents: 18,
              distribution:
                "• 1 posta medica<br>• 1 en cada escalera de la tribuna (7)<br>• 2 en sector ventanal<br>• 1 supervisor<br>• 7 Atrás banco suplentes",
              functions:
                "• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Impedir que los simpatizantes obstaculicen los medios de evacuación.<br>• Impedir el golpe de los vidrios por parte de los simpatizantes.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Palcos",
              agents: 7,
              distribution:
                "• 1 por puerta de emergencia<br>• 2 palco de honor<br>• 2 escaleras a palcos<br>• 1 escalera VIP<br>• 1 supervisor",
              functions:
                "• Impedir el ingreso y egreso de personal no autorizado por el sector. Dejar despejada el sector en caso de emergencia.<br>• Control y prevención para permitir únicamente el ingreso de personal autorizado<br>• Dejar el sector despejado en caso de emergencia. Permitir el ingreso por el sector de personas autorizadas.<br>• Impedir el ingreso de personal no autorizado.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Puente 360°",
              agents: 2,
              distribution: "2 en corredor puente",
              functions: "Permitir un flujo de simpatizantes constante del sector.",
            },
            {
              name: "Campo de juego",
              agents: 20,
              distribution: "• 10 lado local<br>• 10 lado visitante",
              functions:
                "Impedir el ingreso de simpatizantes y personas no autorizadas al campo de juego por el sector.",
            },
            {
              name: "Puertas",
              agents: 11,
              distribution:
                "• 1 puerta A<br>• 1 puerta B<br>• 1 puerta C<br>• 1 puerta E<br>• puerta D1<br>• 2 puerta D2<br>• 1 puerta D3<br>• 1 puerta F<br>• 1 Puerta G<br>• 1 supervisores",
              functions:
                "• Control y prevención de las puertas, permitiendo únicamente el ingreso de personas con entradas. Colaborando con el personal de UTEDYC del sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Pases de tribunas bajas",
              agents: 4,
              distribution: "• 2 lado Centenario<br>• 2 lado Sívori",
              functions: "Impedir el uso de las puertas por personal no autorizado",
            },
          ],
        },
        {
          title: "BELGRANO",
          locations: [
            {
              name: "Alta",
              agents: 23,
              distribution:
                "• 3 agentes por tronera (15)<br>• 1 agente en balcón de cámara<br>• 2 bajo tribuna pase<br>• 1 en posta medica<br>• 2 pase tribuna exterior<br>• 2 supervisor",
              functions:
                "• Impedir que los simpatizantes obstaculicen troneras y medios de evacuación.<br>• Impedir que los simpatizantes obstaculicen el sector<br>• Impedir el uso de las puertas por personal no autorizado<br>• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Prevenir el sector de instrucciones.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Media",
              agents: 6,
              distribution: "2 vigiladores por escalera",
              functions: "Impedir que los simpatizantes obstaculicen los medios de evacuación.",
            },
            {
              name: "Baja e inferior",
              agents: 18,
              distribution:
                "• 2 posta medica<br>• 2 en cada escalera de la tribuna (12)<br>• 2 en sector ventanal<br>• 2 supervisor",
              functions:
                "• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Impedir que los simpatizantes obstaculicen los medios de evacuación.<br>• Impedir el golpe de los vidrios por parte de los simpatizantes.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Palcos",
              agents: 10,
              distribution:
                "• 3 por puerta de emergencia<br>• 2 escalera a cabinas<br>• 2 escalera palcos entrepiso<br>• 2 palcos segundo piso<br>• 1 supervisor",
              functions:
                "• Impedir el ingreso y egreso de personal no autorizado por el sector. Dejar despejada el sector en caso de emergencia.<br>• Control visual del sector, permitiendo el ingreso de personas autorizadas.<br>• Control visual del sector, permitiendo el ingreso de personas autorizadas.<br>• Control visual del sector, permitiendo el ingreso de personas autorizadas.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Campo de juego",
              agents: 20,
              distribution: "Distribuidos uniformemente en el campo",
              functions:
                "Impedir el ingreso de simpatizantes y personas no autorizadas al campo de juego por el sector.",
            },
            {
              name: "Puertas",
              agents: 12,
              distribution:
                "• 1 puerta Q<br>• 2 puerta R<br>• 2 puerta T<br>• 3 puerta S<br>• 2 puerta Prensa<br>• 2 supervisores",
              functions:
                "• Control y prevención de las puertas, permitiendo únicamente el ingreso de personas con entradas. Colaborando con el personal de UTEDYC del sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Pases de tribunas bajas",
              agents: 4,
              distribution: "• 2 lado Centenario<br>• 2 lado Sívori",
              functions: "Impedir el uso de las puertas por personal no autorizado",
            },
          ],
        },
        {
          title: "SÍVORI",
          locations: [
            {
              name: "Alta",
              agents: 19,
              distribution:
                "• 3 agentes por tronera (15)<br>• 2 bajo tribuna pase<br>• 1 en posta medica<br>• 1 supervisor",
              functions:
                "• Impedir que los simpatizantes obstaculicen troneras y medios de evacuación.<br>• Impedir el uso de las puertas por personal no autorizado<br>• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Media",
              agents: 17,
              distribution: "2 vigiladores por escalera",
              functions: "Impedir que los simpatizantes obstaculicen los medios de evacuación.",
            },
            {
              name: "Baja e inferior",
              agents: 11,
              distribution:
                "• 1 posta medica<br>• 4 corredor tribuna baja<br>• 4 corredor tribuna inferior<br>• 2 en sector ventanal<br>• 1 supervisor",
              functions:
                "• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Impedir que los simpatizantes obstaculicen los medios de evacuación. Identificar, en caso de ser necesario, a los simpatizantes que requieran de atención médica dentro de la tribuna. Identificar los medios de evacuación mediante los bastones luminosos.<br>• Impedir que los simpatizantes obstaculicen los medios de evacuación. Identificar, en caso de ser necesario, a los simpatizantes que requieran de atención médica dentro de la tribuna.<br>• Impedir el golpe de los vidrios por parte de los simpatizantes.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Palcos",
              agents: 8,
              distribution:
                "• 1 por puerta de emergencia<br>• 1 escalera torre 2<br>• 3 baño de palcos<br>• 1 supervisor",
              functions:
                "• Impedir el ingreso y egreso de personal no autorizado por el sector. Dejar despejada el sector en caso de emergencia.<br>• Impedir el paso de personal no autorizado.<br>• Facilitar la circulación de simpatizantes por el sector, indicando los accesos a los baños y la salida de estos.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Campo de juego",
              agents: 10,
              distribution: "Distribuidos uniformemente en el campo",
              functions:
                "Impedir el ingreso de simpatizantes y personas no autorizadas al campo de juego por el sector.",
            },
            {
              name: "Puertas",
              agents: 20,
              distribution:
                "• 1 puerta X<br>• 1 puerta Y<br>• 9 puerta Z<br>• 1 Torre uno<br>• 2 torre dos<br>• 2 torre dos Bis<br>• 2 Torre tres<br>• 2 torre tres Bis<br>• 2 supervisores",
              functions:
                "• Control y prevención de las puertas, permitiendo únicamente el ingreso de personas con entradas. Colaborando con el personal de UTEDYC del sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Pases de tribunas bajas",
              agents: 4,
              distribution: "• 2 lado SM<br>• 2 lado Belgrano",
              functions: "Impedir el uso de las puertas por personal no autorizado",
            },
          ],
        },
        {
          title: "CENTENARIO",
          locations: [
            {
              name: "Alta",
              agents: 19,
              distribution:
                "• 3 agentes por tronera (15)<br>• 2 bajo tribuna pase<br>• 1 en posta medica<br>• 1 supervisor",
              functions:
                "• Impedir que los simpatizantes obstaculicen troneras y medios de evacuación.<br>• Impedir el uso de las puertas por personal no autorizado<br>• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Media",
              agents: 24,
              distribution: "2 vigiladores por escalera",
              functions: "Impedir que los simpatizantes obstaculicen los medios de evacuación.",
            },
            {
              name: "Baja e inferior",
              agents: 11,
              distribution:
                "• 1 posta medica<br>• 4 corredor tribuna baja<br>• 4 corredor tribuna inferior<br>• 2 en sector ventanal<br>• 1 supervisor",
              functions:
                "• Dejar despejado el sector de personal no autorizado a estar en el sector.<br>• Impedir que los simpatizantes obstaculicen los medios de evacuación. Identificar, en caso de ser necesario, a los simpatizantes que requieran de atención médica dentro de la tribuna. Identificar los medios de evacuación mediante los bastones luminosos.<br>• Impedir que los simpatizantes obstaculicen los medios de evacuación. Identificar, en caso de ser necesario, a los simpatizantes que requieran de atención médica dentro de la tribuna.<br>• Impedir el golpe de los vidrios por parte de los simpatizantes.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Palcos",
              agents: 8,
              distribution:
                "• 1 por puerta de emergencia<br>• 3 en escalera de palco visitante<br>• 2 en banda<br>• 1 supervisor",
              functions:
                "• Impedir el ingreso y egreso de personal no autorizado por el sector. Dejar despejada el sector en caso de emergencia.<br>• Impedir que los simpatizantes realicen acciones desmedidas hacia el palco visitante desde las tribunas bajas.<br>• Control y prevención del sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Palco visitante",
              agents: 2,
              distribution: "• 1 lado San Martin<br>• 1 lado centenario",
              functions: "Impedir el ingreso y egreso de personal no autorizado por el sector.",
            },
            {
              name: "Campo de juego",
              agents: 10,
              distribution: "Distribuidos uniformemente en el campo",
              functions:
                "Impedir el ingreso de simpatizantes y personas no autorizadas al campo de juego por el sector.",
            },
            {
              name: "Puertas",
              agents: 18,
              distribution:
                "• 2 puerta H<br>• 2 puerta I<br>• 2 puerta J<br>• 3 puerta K<br>• 2 puerta L<br>• 2 puerta M<br>• 3 puerta M bis<br>• 2 puerta O<br>• 2 supervisores",
              functions:
                "• Control y prevención de las puertas, permitiendo únicamente el ingreso de personas con entradas. Colaborando con el personal de UTEDYC del sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Pases de tribunas bajas",
              agents: 4,
              distribution: "• 2 lado SM<br>• 2 lado Belgrano",
              functions: "Impedir el uso de las puertas por personal no autorizado",
            },
          ],
        },
      ],
      totalAgents: 373,
    },
    internalPerimeter: {
      title: "PERÍMETRO INTERNO",
      subsections: [
        {
          title: "SECTOR SOCIAL, CALLE INTERNA Y OTROS",
          locations: [
            {
              name: "Back Up en Gerencia",
              agents: 5,
              distribution: "Ubicados en las cercanías de la gerencia de Seguridad",
              functions: "A disposición de la Gerencia en caso de ser necesario",
            },
            {
              name: "Playón Seco",
              agents: 4,
              distribution: "Corredor ingreso puerta P-O",
              functions:
                "Control del sector, previniendo que los simpatizantes que integren por el sector accedan a lugares no autorizados y garantizar el correcto flujo de circulación en el sector.",
            },
            {
              name: "Escaleras de puerta J",
              agents: 2,
              distribution: "Primer descanso de escaleras ingreso a tribuna",
              functions: "Impedir el acceso de los simpatizantes a la parte superior de la escalera.",
            },
            {
              name: "Escaleras de puerta L",
              agents: 2,
              distribution: "Primer descanso de escaleras ingreso a tribuna",
              functions: "Impedir el acceso de los simpatizantes a la parte superior de la escalera.",
            },
            {
              name: "Bajo terraza",
              agents: 4,
              distribution: "• 2 en puerta vidriada<br>• 2 en Defensoría Socios",
              functions:
                "Prevenir cualquier intento de agresión o alteración del orden que perjudique el patrimonio institucional del club.",
            },
            {
              name: "Escalera de terraza",
              agents: 2,
              distribution: "• 2 parte inferior de escaleras<br>• 2 parte superior de escaleras",
              functions:
                "• Impedir el acceso de simpatizantes por el sector.<br>• Impedir el acceso y egreso de simpatizantes por el sector.",
            },
            {
              name: "Ingreso Auxiliar N° 1",
              agents: 1,
              distribution: "Ingreso desde vereda Udaondo",
              functions: "Controlar el acceso únicamente de vehículos autorizados por el sector.",
            },
            {
              name: "Cajón vehicular Aux N° 1",
              agents: 1,
              distribution: "Portón del cajón",
              functions: "Corroborar el correcto ingreso de vehículos por el sector.",
            },
            {
              name: "Molinete Auxiliar N°1",
              agents: 2,
              distribution: "Al costado del molinete",
              functions: "Prevenir ingresos no autorizados y prestar colaboración con el personal de UTEDYC",
            },
            {
              name: "Maratón vieja",
              agents: 2,
              distribution: "• 1 en puerta<br>• 1 hall presidencia",
              functions: "Impedir el acceso de personal no autorizado por el sector.",
            },
            {
              name: "Maratón nueva",
              agents: 3,
              distribution: "• 1 en puerta<br>• 2 en los laterales",
              functions: "Impedir el acceso de personal no autorizado por el sector.",
            },
            {
              name: "Administración",
              agents: 2,
              distribution: "En puerta vidriada",
              functions:
                "Prevenir cualquier intento de agresión o alteración del orden que perjudique el patrimonio institucional del club.",
            },
            {
              name: "Vestuario local (Traje)",
              agents: 1,
              distribution: "En puerta",
              functions: "Impedir el acceso de personal no autorizado por el sector.",
            },
            {
              name: "Árbitros",
              agents: 1,
              distribution: "En puerta",
              functions: "Impedir el acceso de personal no autorizado por el sector.",
            },
            {
              name: "Dopping",
              agents: 1,
              distribution: "En puerta",
              functions: "Impedir el acceso de personal no autorizado por el sector.",
            },
            {
              name: "Sala directivos (Traje)",
              agents: 1,
              distribution: "En puerta",
              functions: "Impedir el acceso de personal no autorizado por el sector.",
            },
            {
              name: "Hall Central",
              agents: 7,
              distribution:
                "• 2 escalera D1<br>• 2 escalera D3<br>• 1 anillo lado vestuario Local<br>• 1 lado anillo vestuario visitante<br>• 1 supervisor",
              functions:
                "• Impedir el acceso de personal no autorizado por el sector. Colaborar con el personal de UTEDYC a fin de garantizar el correcto funcionamiento del sector.<br>• Impedir el acceso de personal no autorizado por el sector.<br>• Impedir el acceso de personal no autorizado por el sector.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Hospitality Paddock (Traje)",
              agents: 2,
              distribution: "En puerta",
              functions:
                "Colaborar con el personal del sector para garantizar el ingreso de las personas correctamente acreditadas.",
            },
            {
              name: "Hospitality Belgrano (Traje)",
              agents: 2,
              distribution: "En puerta",
              functions:
                "Colaborar con el personal del sector para garantizar el ingreso de las personas correctamente acreditadas.",
            },
            {
              name: "Hospitality Banda (Traje)",
              agents: 2,
              distribution: "En puerta",
              functions:
                "Colaborar con el personal del sector para garantizar el ingreso de las personas correctamente acreditadas.",
            },
            {
              name: "Hospitality Palco VIP (Traje)",
              agents: 2,
              distribution: "• 1 pasillo del sector<br>• 1 en 2do piso escaleras (ex Taekwondo)",
              functions:
                "Colaborar con el personal del sector para garantizar el ingreso de las personas correctamente acreditadas.",
            },
            {
              name: "Hospitality Avalian (San Martin)",
              agents: 4,
              distribution: "• 1 en puerta (Traje)<br>• 3 en puertas a carpa",
              functions:
                "Colaborar con el personal del sector para garantizar el ingreso de las personas correctamente acreditadas.",
            },
            {
              name: "Vestuario visitante",
              agents: 4,
              distribution: "• 3 en corredor (anillo)<br>• 1 supervisor",
              functions:
                "• Prevenir cualquier intento de agresión o alteración del orden que perjudique el patrimonio institucional del club.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
            {
              name: "Confitería",
              agents: 2,
              distribution: "En puertas exteriores",
              functions: "Garantizar el correcto funcionamiento del sector.",
            },
            {
              name: "Hall de prensa",
              agents: 4,
              distribution:
                "• 1 en puerta anillo<br>• 1 en segunda puerta anillo<br>• 1 escalera caracol<br>• 1 en molinetes",
              functions:
                "• Impedir el ingreso de los simpatizantes por los sectores.<br>• Prevenir ingresos no autorizados y prestar colaboración con el personal de UTEDYC",
            },
            {
              name: "Estacionamiento Alcorta",
              agents: 4,
              distribution: "Caja de estacionamiento",
              functions: "Cacheo de simpatizantes para evitar el ingreso de elementos no autorizados.",
            },
            {
              name: "Estacionamiento Auxiliar N°1",
              agents: 2,
              distribution: "Distribuidos en cruz en el estacionamiento",
              functions: "Garantizar la seguridad de los vehículos apostados en el sector",
            },
            {
              name: "Estacionamiento Auxiliar N°2",
              agents: 1,
              distribution: "• 1 puerta continua a Aux. N°1<br>• 1 puerta ingreso a la cancha",
              functions:
                "• Garantizar la seguridad de los vehículos apostados en el sector.<br>• Impedir el ingreso de personal no autorizado por el sector.",
            },
            {
              name: "Estacionamiento Bavio",
              agents: 15,
              distribution:
                "• 1 ingreso a Campo Salles<br>• 2 sobre Bavio<br>• 2 sobre Richieri<br>• 2 sobre Campo Salles<br>• 1 supervisor",
              functions:
                "• Garantizar la seguridad de los vehículos apostados en el sector.<br>• Permitir el correcto flujo de circulación vehicular y peatonal del lugar.<br>• Supervisar el correcto funcionamiento del sector, reportando cualquier novedad.",
            },
          ],
        },
      ],
      totalAgents: 85,
    },
    totalAgents: 650,
    generalConsiderations: [
      "Este dispositivo de seguridad privada no modifica los puestos y los turnos del servicio diario de seguridad del club.",
      "Procedimiento para el retiro de espectadores no habilitados en el molinete perimetrales y en las puertas. Próximo de la ubicación de los molinetes perimetrales y en las puertas del estadio habrá un equipo de seguridad privada con el fin de retirar de los molinetes a los espectadores que no estén habilitados para ingresar así no se atrasa el flujo del público.",
      "Esquema de control de ingreso y egreso personal convocado al servicio de seguridad privada El personal de seguridad interna procederá a realizar un control de ingresos de los vigiladores de seguridad privada. Para dicha tarea se contará con una aplicación de conteo electrónico (teléfono celular) que brindará la información de los vigiladores presentes en cada MD. Una vez finalizado el ingreso del staff de seguridad privada, los datos se validan en conjunto con el sistema de registro de la empresa contratada. El control se hace en el punto de entrega de DNI. Hora de activación del control: K.O – 5",
    ],
  },
}
