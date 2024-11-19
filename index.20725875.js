var e=document.querySelector("thead"),o=document.querySelector("tbody"),r=document.querySelector("tfoot");function t(e){var o=e.cells[1];if(o){var r=o.cloneNode(!0),t=e.cells.length-1;e.insertBefore(r,e.cells[t])}}e.rows.length>0&&t(e.rows[0]);for(var l=o.rows,c=0;c<l.length;c++)t(l[c]);r&&r.rows.length>0&&t(r.rows[0]);
//# sourceMappingURL=index.20725875.js.map
