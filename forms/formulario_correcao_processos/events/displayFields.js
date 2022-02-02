function displayFields(form,customHTML){

   var instanceId = getValue('WKNumProces');

   customHTML.append("<script>");
   customHTML.append("var INSTANCEID = " + instanceId + ";");
   customHTML.append("</script>");
}