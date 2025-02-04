const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')




// Inicio  opciones primer menu 
const flowmarcas = addKeyword(['1']) 
.addAnswer(
    [
        'A continuacion selecione el numero de la marca que quieres consultar',
        '👉 *1-* Apple ',
            
    ],
    null,
    null,
    [flowApple]
)

const flowremoto = addKeyword(['2']).addAnswer(
    [
        '⚡️Hey que más ps, para que empecemos con el servicio remoto descarga el siguiente programa ⚡️',
        '\n ✅ https://www.ultraviewer.net/en/download.html' ])


const flowasesor = addKeyword(['3']).addAnswer(['📄 Nuestros asesores te responderan de 9:00 AM a 7:00 PM. ',
   ' \n Por favor escribe tu consulta'])


const flowdirecc = addKeyword(['4']).addAnswer(
    [
        '⚡️Hey que más ps, Nos encontraras en el *Centro Comercial Verecruz* en el Local *109* Burbuja *5* de 9:00 AM a 7:00 PM. De Lunes A Sabado⚡️',
        '\n ✅ https://maps.app.goo.gl/zTEMxnzoijsFid879' ])
        
 
const flowhora = addKeyword(['5']).addAnswer(
            [
                '⚡️Hey que más ps, Nuestro Horario de Atención es de 9:00 AM a 7:00 PM. De Lunes A Sabado⚡️',
                '\n ✅ Te Esperamos Pronto ⚡️' ])        


const flowclases = addKeyword(['6']).addAnswer(
            [
                '⚡️La mejor forma de predecir el futuro es crearlo ⚡️',
      '\n ⚡️Capacítate como técnico en software de dispositivos móviles ⚡️',
     
                '\n ✅ https://team-khcompany.com/#pricing' ])        


const flowcuenta = addKeyword(['7']).addAnswer(['👉 #42049019682 ahorros bancolombia ',
                    '👉 #3012815011 nequi ',
                    
                    '👍 Favor mandar comprobante ',
                    
                    '⚡ Gracias por confiar en KHCOMPANY',
                    '\n🙃 Escribe *Inicio* para volver ',
                        ])
// fin opciones primer menu 



// Inicio  opciones menu apple 
const flowApple = addKeyword(['1']).addAnswer(
    [
        'A continuacion selecione el numero del servicio que quieres consultar',
        '👉 *1-* Bypass del 6 al X ',
        '👉 *2-* Bypass del Xs al 15 ',
        '👉 *3-* Icloud Raiz ',
        '👉 *4-* Bandas',
        '👉 *5-* Bloqueo Por no Registro ',
        '👉 *6-* Turbo sim',   
        '👉 *7*- Otro Daño ',         
    ],
    null,
    null,
    [flowBypass6ax, flowIcloudraiz, flowbandas, flownoregistroip, flowturbo, flowotroda, flowBypassxsa16]
)


const flowBypass6ax = addKeyword(['1']).addAnswer(
    [ 'Nota importante 🤖 estos precios son solo para los iPhone que ',
         'están pidiendo pin o están en desactivado si ya es flasheado ',
        ' en “hola” los precios son diferentes.',
'Precios bypass ',
'iPhone 6 $35',
'iPhone 6 Plus $35 ',
'iPhone 6s #50',
'iPhone 6s Plus $50',
'iPhone 7 $50',
'iPhone 7 Plus $50 ',
'iPhone 8 $80',
'iPhone 8 Plus $80',
'iPhone X $80', 
'\n🙃 Escribe *Inicio* para volver al Menu'])

const flowBypassxsa16 = addKeyword(['2']).addAnswer([' ⚠️⚠️*EN EL MOMENTO ESTA CAIDO EL SERVICIO DE BYPASS PERO ESTOS SON LOS PRECIOS QUE HABIAN DISPONIBLES*⚠️⚠️',
    ' Precios Bypass Iphone IOS 17 ',
 '⚠️⚠️LEER PRIMERO⚠️⚠️',
 '1- HAY QUE DEJARLO PAGO 100% Y DEMORA 24 HORAS SE PUEDE REMOTO O FÍSICO ',
 '3- ❌ NO PUEDE ESTAR CON BANDAS CERRADAS NI REPORTADO EN COLOMBIA NI EN INTERNACIONAL ',
 '4- SI NO CONOCE SI ESTA CON BANDAS CERRADAS O REPORTADO MANDENOS EL IMEI PARA REVISAR ✅',
 'IPHONE SE 2ND GEN ⚡️ $380.000 ',
 'IPHONE SE 3ND GEN ⚡️ $440.000',
 'IPHONE XR, XS, XSMAX ⚡️ $390.000',
 'IPHONE 11 ⚡️ $440.000',
 'IPHONE 11 PRO ⚡️ $520.000',
 'IPHONE 11 PRO MAX ⚡️ $560.000',
 'IPHONE 12 MINI ⚡️ $430.000',
 'IPHONE 12 ⚡️ $540.000',
 'IPHONE 12 PRO ⚡️ $590.000',
 'IPHONE 12 PRO MAX ⚡️ $630.000',
 'IPHONE 13 MINI ⚡️ $520.000',
 'IPHONE 13 ⚡️ $690.000',
 'IPHONE 13 PRO ⚡️ $730.000',
 'IPHONE 13 ⚡️  PRO MAX $790.000',
 'IPHONE 14 ⚡️ $770.000',
 'IPHONE 14 PLUS ⚡️ $790.000',
 'IPHONE 14 PRO ⚡️ $840.000',
 'IPHONE 14 PRO MAX ⚡️ $880.000 ',
 '\n🙃 Escribe *Inicio* para volver al Menu'])

 const flowIcloudraiz = addKeyword(['3']).addAnswer(['⚡️Precios iCloud de raíz ⚡️',
    '*LEA MUY BIEN LA INFORMACIÓN HAY DOS METODOS*',
    ' lista actualizada.',
  '\n ⚠️⚠️ Método #1.⚠️⚠️  ',
  ' Tasa de efectividad 90%     ',                      
   ' iPhone series X $580.000     ',                  
    ' iPhone series 11 $690.000   ',                    
     ' iPhone series 12 $780.000   ',                        
     '  iPhone series 13 $800.000   ',                    
     '  iPhone series 14 $900.000',                          
     '  En cualquiera de los casos hay que dejarlo pago al 100% y en caso tal de no dar se pierden 100 mil por gastos de plataforma',
      '  - tarda de 7 a 25 días hábiles  pero normalmente sale en 7 días    ',

      '\n ⚠️⚠️ Método #2.⚠️⚠️',
   ' Tasa de efectividad 50%  Todos los iPhone $300.000  Hay que pagar 100.000 que no son devolusibles',
   '  y se demora de 1 a 7 días y en caso de ser exitoso tiene 24 h para pagar el restante. Leer muy bien ', 
'\n🙃 Escribe *Inicio* para volver al Menu'])

const flowbandas = addKeyword(['4']).addAnswer(['⚡️*INFORMACION DE BANDAS DE IPHONE*⚡️ ',

    '\n para poder darle una respuesta mas rápida a su duda por favor denos la siguiente información',
    
    '1- modelo del dispositivo ',
    '2- operador exacto ',
    '3- pais de donde viene ',
    
    '\n en caso tal de no saberse el operador de origen cuesta 10 mil solo el averiguar el operador para poderles brindar el precio exacto de las bandas ',
    
    '\n nota: en caso de las bandas ser muy caras hay otra opción que es por turbo sim hay dos precios ',
    
    '\n 1- la barata que vale 100 - no se configura automático y cada que se valla la señal tienen que configurarla manual ',
    '2- la cara que vale 130 - se programa automáticamente cada que se va la señal y se programa sola cuando el iphone se actualiza de versión automático ',
    '\n🙃 Escribe *Inicio* para volver al Menu'])
    
    const flownoregistroip = addKeyword(['5']).addAnswer([' ⚡️*INFORMACION DE DESBLOQUEO POR NO REGISTRO*⚡️ ',
        '\n *TIGO* $60 DE 1 A 7 DIAS O $95 DE 1 HORA A 24 HORAS ',
        ' *CLARO* $55 DE 1 A 7 DIAS O $85 DE 1 HORA A 24 HORAS',
        ' *MOVISTAR* $50 DE 1 A 7 DIAS O $80 DE 1 HORA A 24 HORAS',
        ' *MOVIL EXITO, WOM, ETB, PILLO PHONE* $55 DE 1 A 7 DIAS O $90 DE 1 HORA A 24 HORAS',
        '\n🙃 Escribe *Inicio* para volver al Menu'])
    
    const flowturbo = addKeyword(['6']).addAnswer(['⚡️*INFORMACION DE TURBO SIM DE IPHONE*⚡️ ',
        
        '\n 1- la barata que vale 100 - no se configura automático y cada que se valla la señal tienen que configurarla manual ',
        '2- la cara que vale 130 - se programa automáticamente cada que se va la señal y se programa sola cuando el iphone se actualiza de versión automático ',
        '\n🙃 Escribe *Inicio* para volver al Menu'])
    
    
    const flowotroda = addKeyword(['7']).addAnswer(['Describenos a detalle el daño a consultar'])
    
// fin  opciones menu apple

      
        
    







// este es el principal donde vamos a resivir todo el flujo
const flowPrincipal = addKeyword(['hola', 'ole', 'oe', 'hablalo', 'oelo', 'mijo', 'inicio'])
    .addAnswer('🙌 Hey que mas ps bienvenido a ⚡*TEAM-KHCOMPANY* 😎')
    .addAnswer('Por favor, haznos saber cómo podemos ayudarte.')
    .addAnswer(
        [
            'A continuacion selecione el numero a consultar',
            '👉 *1-* Cotizar Reparación ',
            '👉 *2*- Solicitar Reparación Remota ',
            '👉 *3-* Quiero Hablar Con Un *Asesor*',
            '👉 *4-* Conocer Nuestra Dirección ',
            '👉 *5-* Conocer Nuestro Horario De Atención',
            '👉 *6-* Cotizar Clases Online ',
            '👉 *7-* Cuentas Para Consignar',
            
           
        ],
        null,
        null,
        [flowcuenta, flowmarcas, flowasesor, flowremoto, flowdirecc, flowhora, flowclases]
    )


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
