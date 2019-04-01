

var base64 = function (s) {
    return window.btoa(unescape(encodeURIComponent(s)));
};
//替换table数据和worksheet名字
var format = function (s, c) {
    return s.replace(/{(\w+)}/g,
        function (m, p) {
            return c[p];
        });
}
export default function tableToExcel(tableid,butid,sheetName,style) {
    var uri = 'data:application/vnd.ms-excel;base64,';
    var template ='<html lang="en"><head>' +
        ' <meta charset="UTF-8"> <title>Title</title>' +
        ' <style type="text/css">' +style+
        '</style>' +
        '</head><body ><table class="excelTable">{table}</table></body></html>';
    if (!tableid.nodeType) tableid = document.getElementById(tableid);
    var ctx = {worksheet: sheetName || 'Worksheet', table: tableid.innerHTML};
    document.getElementById(butid).href = uri + base64(format(template, ctx));
}
  // export default removeByValue
