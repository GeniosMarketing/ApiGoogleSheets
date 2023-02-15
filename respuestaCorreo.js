//PRIMERA FUNSION ENVIAR CORREO DE VENTA AL ENCARGADO
function enviarCorreos1() {
    const nHojaDatos = "Registro";
    const filasEncabezado = 1;
    const colCondicion = 17;
    const valorCondicion = "SINPAGO";
     
    const celdaActiva = SpreadsheetApp.getCurrentCell();
    const valorActivo = celdaActiva.getValue();
    const colActiva = celdaActiva.getColumn();
    const filaActiva = celdaActiva.getRow();
    const nHojaActiva = celdaActiva.getSheet().getName();
    
    //VARIALBLES DE LOS DATOS A ENVIAR
    //NOMBRE	TELEFONO	CORREO	METROS	PRECIOS	TOTAL	CONSTANCIA	EMPRESA	RTN	PAGO HECHO	SALDO
    const nombreCliente = celdaActiva.getSheet().getRange(filaActiva,1).getValue();
    const telefonoCliente = celdaActiva.getSheet().getRange(filaActiva,2).getValue();
    const correoCliente = celdaActiva.getSheet().getRange(filaActiva,3).getValue();
    const metros = celdaActiva.getSheet().getRange(filaActiva,4).getValue();
    const total = celdaActiva.getSheet().getRange(filaActiva,6).getValue();
    const constancia= celdaActiva.getSheet().getRange(filaActiva,7).getValue();
    const empresa = celdaActiva.getSheet().getRange(filaActiva,8).getValue();
    const rtn = celdaActiva.getSheet().getRange(filaActiva,9).getValue();
    const pago_hecho = celdaActiva.getSheet().getRange(filaActiva,10).getValue();
    const saldo = celdaActiva.getSheet().getRange(filaActiva,11).getValue();
    const costoProyecto = celdaActiva.getSheet().getRange(filaActiva,13).getValue();
    const metrosPendientes = celdaActiva.getSheet().getRange(filaActiva,14).getValue();
    const recaudado = celdaActiva.getSheet().getRange(filaActiva,20).getValue();
    const pndRecaudar = celdaActiva.getSheet().getRange(filaActiva,21).getValue();
    
    //DESTINATARIO RESPONSABLE
    const correoResponsable = celdaActiva.getSheet().getRange(filaActiva,16).getValue();
    
    //NOMBRE DEL ENCARGADO RESPONSABLE
    const nombreEncargado = celdaActiva.getSheet().getRange(filaActiva,19).getValue();
    //CONDICIONES
    if(nHojaDatos==nHojaActiva && filaActiva > filasEncabezado && colActiva==colCondicion && valorActivo==valorCondicion){
    MailApp.sendEmail(correoResponsable, "💰 COMPRA MT² CANCHA DOUGLAS TOMPSON ⚽️🥅","Estimado "+nombreEncargado+". Le informamos que se ha realializado una compra con los siguientes datos: \n"+
    "Cliente: "+nombreCliente+"\n"+
    "Teléno: "+telefonoCliente+"\n"+
    "correo: "+correoCliente+"\n"+
    "Cantidad de Mt²: "+metros+"\n"+
    "Total a pagar: "+total+"\n"+
    "Requiere constancia: "+constancia+"\n"+
    "Nombre de Empresa: "+empresa+"\n"+
    "RTN: "+rtn+"\n"+
    "Pagos realizados: "+pago_hecho+"\n"+
    "Saldo por pagar: "+saldo+"\n\n"+
    "Si desea contacar al cliente puede hacerlo al correo: "+correoCliente+"\n\n"+
    "------------------------------------------------------------------------------\n"+
    "Metros por vender: "+metrosPendientes+"\n"+
    "------------------------------------------------------------------------------\n"+
    "Costro del Proyecto: "+costoProyecto+"\n"+
    "Total recaudado: "+recaudado+"\n"+
    "Total por recaudar: "+pndRecaudar);
    }
    };
    
//SEGUNDA FUNSION PARA ENVIAR CORREO DE COMPRA AL CLIENTE
function enviarCorreos2() {
    const nHojaDatos = "Registro";
    const filasEncabezado = 1;
    const colCondicion = 17;
    const valorCondicion = "SINPAGO";
     
    const celdaActiva = SpreadsheetApp.getCurrentCell();
    const valorActivo = celdaActiva.getValue();
    const colActiva = celdaActiva.getColumn();
    const filaActiva = celdaActiva.getRow();
    const nHojaActiva = celdaActiva.getSheet().getName();
    
    //VARIALBLES DE LOS DATOS A ENVIAR
    //NOMBRE	TELEFONO	CORREO	METROS	PRECIOS	TOTAL	CONSTANCIA	EMPRESA	RTN	PAGO HECHO	SALDO
    const nombreCliente = celdaActiva.getSheet().getRange(filaActiva,1).getValue();
    const telefonoCliente = celdaActiva.getSheet().getRange(filaActiva,2).getValue();
    const correoCliente = celdaActiva.getSheet().getRange(filaActiva,3).getValue();
    const metros = celdaActiva.getSheet().getRange(filaActiva,4).getValue();
    const total = celdaActiva.getSheet().getRange(filaActiva,6).getValue();
    const constancia= celdaActiva.getSheet().getRange(filaActiva,7).getValue();
    const empresa = celdaActiva.getSheet().getRange(filaActiva,8).getValue();
    const rtn = celdaActiva.getSheet().getRange(filaActiva,9).getValue();
    const pago_hecho = celdaActiva.getSheet().getRange(filaActiva,10).getValue();
    const saldo = celdaActiva.getSheet().getRange(filaActiva,11).getValue();
    
    //DESTINATARIO RESPONSABLE
    const correoResponsable = celdaActiva.getSheet().getRange(filaActiva,16).getValue();
    
    //NOMBRE DEL ENCARGADO RESPONSABLE
    const nombreEncargado = celdaActiva.getSheet().getRange(filaActiva,19).getValue();
    //CONDICIONES
    if(nHojaDatos==nHojaActiva && filaActiva > filasEncabezado && colActiva==colCondicion && valorActivo==valorCondicion){
    MailApp.sendEmail(correoCliente, "💰 COMPRA MT² CANCHA DOUGLAS TOMPSON ⚽️🥅","Estimado "+nombreCliente+". Le informamos que se ha realializado una compra con los siguientes datos: \n"+
    "Cliente: "+nombreCliente+"\n"+
    "Teléno: "+telefonoCliente+"\n"+
    "correo: "+correoCliente+"\n"+
    "Cantidad de Mt²: "+metros+"\n"+
    "Total a pagar: "+total+"\n"+
    "Requeire constancia: "+constancia+"\n"+
    "Nombre de Empresa: "+empresa+"\n"+
    "RTN: "+rtn+"\n"+
    "Pagos realizados: "+pago_hecho+"\n"+
    "Saldo por pagar: "+saldo+"\n\n"+
    "-----------------------------------------------------------------------------------------------------\n"+
    nombreCliente+", pronto se le contactará por whatsApp para que pueda realizar su respectivo pago.\n"+
    "Si tiene alguna duda puede contactar a: "+nombreEncargado+" al correo: "+correoResponsable+"\n"+
    "MUCHAS GRACIAS POR SE PARTE DEL PROYECTO");
    }
    };


    //TERCERA FUNCION ENVIAR CORREO AL ENCARGADO DE VENTAS SOBRE EL PAGO RECIBIDO
    function enviarCorreos3() {
    const nHojaDatos = "Registro";
    const filasEncabezado = 1;
    const colCondicion = 18;
    const valorCondicion = "PAGADO";
     
    const celdaActiva = SpreadsheetApp.getCurrentCell();
    const valorActivo = celdaActiva.getValue();
    const colActiva = celdaActiva.getColumn();
    const filaActiva = celdaActiva.getRow();
    const nHojaActiva = celdaActiva.getSheet().getName();
    
    //VARIALBLES DE LOS DATOS A ENVIAR
    //NOMBRE	TELEFONO	CORREO	METROS	PRECIOS	TOTAL	CONSTANCIA	EMPRESA	RTN	PAGO HECHO	SALDO
    const nombreCliente = celdaActiva.getSheet().getRange(filaActiva,1).getValue();
    const telefonoCliente = celdaActiva.getSheet().getRange(filaActiva,2).getValue();
    const correoCliente = celdaActiva.getSheet().getRange(filaActiva,3).getValue();
    const metros = celdaActiva.getSheet().getRange(filaActiva,4).getValue();
    const total = celdaActiva.getSheet().getRange(filaActiva,6).getValue();
    const constancia= celdaActiva.getSheet().getRange(filaActiva,7).getValue();
    const empresa = celdaActiva.getSheet().getRange(filaActiva,8).getValue();
    const rtn = celdaActiva.getSheet().getRange(filaActiva,9).getValue();
    const pago_hecho = celdaActiva.getSheet().getRange(filaActiva,10).getValue();
    const saldo = celdaActiva.getSheet().getRange(filaActiva,11).getValue();
    
    //DESTINATARIO RESPONSABLE
    const correoResponsable = celdaActiva.getSheet().getRange(filaActiva,16).getValue();
    
    //NOMBRE DEL ENCARGADO RESPONSABLE
    const nombreEncargado = celdaActiva.getSheet().getRange(filaActiva,19).getValue();
    //CONDICIONES
    if(nHojaDatos==nHojaActiva && filaActiva > filasEncabezado && colActiva==colCondicion && valorActivo==valorCondicion){
    MailApp.sendEmail(correoResponsable, "💰 NOTIFICACIÓN DE PAGO ⚽️🥅","Estimado "+nombreEncargado+". Le informamos que se ha realializado un pago con los siguientes datos: \n"+
    "Cliente: "+nombreCliente+"\n"+
    "Teléno: "+telefonoCliente+"\n"+
    "Total a pagar: "+total+"\n"+
    "Pagos realizados: "+pago_hecho+"\n"+
    "Saldo por pagar: "+saldo+"\n\n"+
    "-----------------------------------------------------------------------------------------------------\n"
    );
    }
    };
    

    //CUARTA FUNSION NOTIFICACION AL CLIENTE POR PAGO REALIZADO
    function enviarCorreos4() {
    const nHojaDatos = "Registro";
    const filasEncabezado = 1;
    const colCondicion = 18;
    const valorCondicion = "PAGADO";
     
    const celdaActiva = SpreadsheetApp.getCurrentCell();
    const valorActivo = celdaActiva.getValue();
    const colActiva = celdaActiva.getColumn();
    const filaActiva = celdaActiva.getRow();
    const nHojaActiva = celdaActiva.getSheet().getName();
    
    //VARIALBLES DE LOS DATOS A ENVIAR
    //NOMBRE	TELEFONO	CORREO	METROS	PRECIOS	TOTAL	CONSTANCIA	EMPRESA	RTN	PAGO HECHO	SALDO
    const nombreCliente = celdaActiva.getSheet().getRange(filaActiva,1).getValue();
    const telefonoCliente = celdaActiva.getSheet().getRange(filaActiva,2).getValue();
    const correoCliente = celdaActiva.getSheet().getRange(filaActiva,3).getValue();
    const metros = celdaActiva.getSheet().getRange(filaActiva,4).getValue();
    const total = celdaActiva.getSheet().getRange(filaActiva,6).getValue();
    const constancia= celdaActiva.getSheet().getRange(filaActiva,7).getValue();
    const empresa = celdaActiva.getSheet().getRange(filaActiva,8).getValue();
    const rtn = celdaActiva.getSheet().getRange(filaActiva,9).getValue();
    const pago_hecho = celdaActiva.getSheet().getRange(filaActiva,10).getValue();
    const saldo = celdaActiva.getSheet().getRange(filaActiva,11).getValue();
    
    //DESTINATARIO RESPONSABLE
    const correoResponsable = celdaActiva.getSheet().getRange(filaActiva,16).getValue();
    
    //NOMBRE DEL ENCARGADO RESPONSABLE
    const nombreEncargado = celdaActiva.getSheet().getRange(filaActiva,19).getValue();
    //CONDICIONES
    if(nHojaDatos==nHojaActiva && filaActiva > filasEncabezado && colActiva==colCondicion && valorActivo==valorCondicion){
    MailApp.sendEmail(correoCliente, "💰 NOTIFICACIÓN DE PAGO ⚽️🥅","Estimado "+nombreCliente+". Le informamos que se ha realializado un pago con los siguientes datos: \n"+
    "Cliente: "+nombreCliente+"\n"+
    "Teléno: "+telefonoCliente+"\n"+
    "Cantidad de Mt²: "+metros+"\n"+
    "Total a pagar: "+total+"\n"+
    "Pagos realizados: "+pago_hecho+"\n"+
    "Saldo por pagar: "+saldo+"\n\n"+
    "-----------------------------------------------------------------------------------------------------\n"
    );
    }
    };
  