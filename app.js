const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')




const flowotroda1 = addKeyword(['1']).addAnswer(['Describenos a detalle el Bloqueo o envianos una foto'])


const flowremoto = addKeyword(['2']).addAnswer(
    [
        '⚡️Hey que más ps, para que empecemos con el servicio remoto descarga el siguiente programa ⚡️',
        '\n ✅ https://www.ultraviewer.net/en/download.html',
        '\n🙃 Escribe *Inicio* para volver al Menu'])


const flowasesor = addKeyword(['3']).addAnswer(['📄 Nuestros asesores te responderan de 9:00 AM a 7:00 PM. ',
   ' \n Por favor escribe tu consulta'])

   

   const flowcuentaxia = addKeyword(['1']).addAnswer(
    [
        '⚡️Los Precios de las cuentas de google varian en la versión que tenga⚡️',
        '\n Para ver la Versión el celular debe de estar formateado y en el inicio "*primera pantalla cuando prende*" ',
        '\n MIUI 12 $10 ',
        '\n MIUI 13 $20 ',
        '\n MIUI 14 $25 ',
        '\n MIUI HyperOS $30 ',
        '\n Aca encontras un ejemplo de las versiónes ',
        '✅  https://team-khcompany.com/xiaomi.jpg',
        '\n🙃 Escribe *Inicio* para volver al Menu'])


        const flowcuentaxiami = addKeyword(['2']).addAnswer(
            [
                '⚡️Precios de las cuentas de Xiaomi varian en la versión que tenga⚡️',
                '\n Estos Son los Precios del *Bypass* ',
                '\n MIUI 12 $35 ',
                '\n MIUI 13 $35 ',
                '\n MIUI 14 $60 ',
                '\n MIUI HyperOS $60 ',
                '\n Estos Son los Precios del *raiz* ',
                '\n *TODAS LAS CUENTAS DE RAIZ CUESTAN $130*  NO IMPORTA LA VERSIÓN NI EL CELULAR ',
                '\n Aca encontras un ejemplo del bloqueo de la cuenta Xiaomi ',
                '✅  https://team-khcompany.com/cuentami.jpg',
                '\n🙃 Escribe *Inicio* para volver al Menu'])

                const flownopagomi = addKeyword(['3']).addAnswer(
                    [
                    '⚡️ Precios De No Pago Xiaomi ⚡️',
                '\n Candado de Claro $50 ',
                '\n Payjoy $60 ',
                '\n Credi Minuto $60 ',
                '\n Credi Smart $60 ',
                '\n Credi Wom $60 ',
                '\n Bloqueo Administrativo $60 ',   
                '\n 👉 *1*- Otro Bloqueo ', 
            
                    ],
                    null,
                    null,
                    [flowotroda1]
                )

                const flowflasheomi = addKeyword(['4']).addAnswer(
                    [
                        '⚡️Precios Flasheo de Xiaomi varian en la gama del dispositivo⚡️',
                        '\n GAMA BAJA  $10 ',
                        '\n GAMA MEDIA $20 ',
                        '\n GAMA ALTA $30 ',
                        '\n *NOTA:* ',
                        '⚠️ En la gama media y alta de o no de el flasheo hay que pagarlo ya que consume creditos al hacer el servició ⚠️',
                        '\n ⚠️ *EL FLASHEO NO BORRA CUENTA DE GOOGLE NI CUENTAS XIAOMI* ⚠️',
                        '\n ⚠️ *SI EL CELULAR FUE LIBERADO EN EL FLASHEO SE PIERDE LA LIBERADA* ⚠️  ', 
                        '\n🙃 Escribe *Inicio* para volver al Menu'])    
               


   const flowdirecc = addKeyword(['4']).addAnswer(
    [
        '⚡️Hey que más ps, Nos encontraras en el *Centro Comercial Verecruz* en el Local *109* Burbuja *5* de 9:00 AM a 7:00 PM. De Lunes A Sabado⚡️',
        '\n ✅ https://maps.app.goo.gl/zTEMxnzoijsFid879',
        '\n🙃 Escribe *Inicio* para volver al Menu'])


        const flowhora = addKeyword(['5']).addAnswer(
            [
                '⚡️Hey que más ps, Nuestro Horario de Atención es de 9:00 AM a 7:00 PM. De Lunes A Sabado⚡️',
                '\n ✅ Te Esperamos Pronto ⚡️',
                '\n🙃 Escribe *Inicio* para volver al Menu'])
        
    

const flowBypass6ax = addKeyword(['1']).addAnswer(
    [ 'Nota importante 🤖 estos precios son solo para los iPhone que ',
         'están pidiendo pin o están en desactivado si ya es flasheado ',
        ' en “hola” los precios son diferentes.',
'Precios bypass ',
'\n iPhone 6 $35',
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
 '\n IPHONE SE 2ND GEN ⚡️ $380.000 ',
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



    const flowflasheoapple = addKeyword(['7']).addAnswer(
        [
            '⚡️ Precio Flasheo de Iphone, Ipad, Ipod. ⚡️',
            '\n *TODOS LOS FLASHEOS DE DISPOSITIVOS APPLE CUESTAN*  $10 ',
            '\n *NOTA:* ',
            ' ⚠️ *EL FLASHEO NO BORRA LA CUENTA DE ICLOUD* ⚠️',
            '\n ⚠️ *SI LE HICIERON BANDAS TEMPORALES SE REBLOQUEARA AL ESTADO ORIGINAL* ⚠️',
            '\n ⚠️ *SI EL CELULAR TENIA BYPASS QUEDA BLOQUEADO* ⚠️  ', 
            '\n🙃 Escribe *Inicio* para volver al Menu'])


const flowotroda = addKeyword(['8']).addAnswer(['Describenos a detalle el daño a consultar'])




const flowclases = addKeyword(['6']).addAnswer(
    [
        '⚡️ La mejor forma de predecir el futuro es crearlo ⚡️',
        '\n ⚡️ Capacítate como técnico en software de dispositivos móviles ⚡️',
        '\n ✅ https://team-khcompany.com/#pricing',
         '\n🙃 Escribe *Inicio* para volver al Menu'])       





const flowcuenta = addKeyword(['7']).addAnswer(['👉 #42049019682 ahorros bancolombia ',
'👉 #3012815011 nequi ',

'👍 Favor mandar comprobante ',

'⚡ Gracias por confiar en KHCOMPANY',
'\n🙃 Escribe *Inicio* para volver al menu',
    ])


    const flowxiaomi = addKeyword(['2']).addAnswer(
        [
            'A continuacion selecione el numero del servicio que quieres consultar',
            '\n👉 *1-* Cuenta Google ',
            '👉 *2-* Cuenta Xiaomi ',
            '👉 *3-* Bloqueo Por No Pago ',
            '👉 *4-* Flasheo ',
                    
        ],
        null,
        null,
        [flowcuentaxia, flowcuentaxiami, flownopagomi, flowflasheomi]
    )




const flowApple = addKeyword(['1']).addAnswer(
    [
        'A continuacion selecione el numero del servicio que quieres consultar',
        '\n 👉 *1-* Bypass del 6 al X ',
        '👉 *2-* Bypass del Xs al 15 ',
        '👉 *3-* Icloud Raiz ',
        '👉 *4-* Bandas',
        '👉 *5-* Bloqueo Por no Registro ',
        '👉 *6-* Turbo sim', 
        '👉 *7-* Flasheo',   
        '👉 *8*- Otro Daño ',         
    ],
    null,
    null,
    [flowBypass6ax, flowIcloudraiz, flowbandas, flownoregistroip, flowturbo, flowotroda, flowflasheoapple, flowBypassxsa16]
)




// Inicio  opciones primer menu 
const flowmarcas = addKeyword(['1']) 
.addAnswer(
    [
        'A continuacion selecione el numero de la marca que quieres consultar',
        '\n👉 *1-* Apple ',
        '👉 *2-* Xiaomi ',
       
           
            
    ],
    null,
    null,
    [flowApple, flowxiaomi]
)



// este es el principal donde vamos a resivir todo el flujo
const flowPrincipal = addKeyword(['hola', 'ole', 'oe', 'hablalo', 'oelo', 'mijo', 'inicio'])
    .addAnswer('🙌 Hey que mas ps bienvenido a ⚡*TEAM-KHCOMPANY*😎')
    .addAnswer('Por favor, haznos saber cómo podemos ayudarte.')
    .addAnswer(
        [
            'A continuacion selecione el numero a consultar',
            '\n👉 *1-* Cotizar Reparación ',
            '👉 *2*- Solicitar Reparación Remota ',
            '👉 *3-* Quiero Hablar Con Un *Asesor*',
            '👉 *4-* Conocer Nuestra Dirección ',
            '👉 *5-* Conocer Nuestro Horario De Atención',
            '👉 *6-* Cotizar Clases Online ',
            '👉 *7-* Cuentas Para Consignar',
           
        ],
        null,
        null,
        [flowmarcas, flowremoto, flowasesor, flowdirecc, flowhora, flowclases, flowcuenta]
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
