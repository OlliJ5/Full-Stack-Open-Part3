(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),c=t.n(r),l=t(2),i=t(3),o=t.n(i),m="/api/persons",f=function(){return o.a.get(m).then(function(e){return e.data})},d=function(e){return o.a.post(m,e).then(function(e){return e.data})},s=function(e){return o.a.delete("".concat(m,"/").concat(e)).then(function(e){return e.data})},h=function(e,n){return o.a.put("".concat(m,"/").concat(e),n).then(function(e){return e.data})},b=function(e){var n=e.filter,t=e.handleFilterChange;return u.a.createElement("div",null,"filter: ",u.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.addNumber,t=e.newName,a=e.handleNameChange,r=e.newNumber,c=e.handleNumberChange;return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:t,onChange:a})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:r,onChange:c})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add"))))},p=function(e){var n=e.filteredPersons,t=e.handleClick;return u.a.createElement("div",null,n.map(function(e){return u.a.createElement("p",{key:e.name},e.name,"  ",e.number,u.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))}))},v=function(e){var n=e.message;return null===n?null:"K\xe4ytt\xe4j\xe4n tiedot on jo poistettu"===n?u.a.createElement("div",{className:"error"},n):u.a.createElement("div",{className:"success"},n)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),o=i[0],m=i[1],w=Object(a.useState)(""),g=Object(l.a)(w,2),j=g[0],C=g[1],N=Object(a.useState)(""),k=Object(l.a)(N,2),O=k[0],y=k[1],S=Object(a.useState)(null),P=Object(l.a)(S,2),T=P[0],F=P[1];Object(a.useEffect)(function(){f().then(function(e){r(e)})},[]);var H=t.filter(function(e){return e.name.toLowerCase().includes(O.toLowerCase())});return u.a.createElement("div",null,u.a.createElement(v,{message:T}),u.a.createElement("h1",null,"Phonebook"),u.a.createElement("h2",null,"Filter the phonebook"),u.a.createElement(b,{filter:O,handleFilterChange:function(e){y(e.target.value)}}),u.a.createElement("h2",null,"Add a new number"),u.a.createElement(E,{addNumber:function(e){e.preventDefault();var n={name:o,number:j};if(t.map(function(e){return e.name}).includes(o)){if(window.confirm("".concat(o," is in the phonebook. Replace the number?"))){var a=t.find(function(e){return e.name===o});h(a.id,n).then(function(e){r(t.map(function(n){return n.id!==a.id?n:e}))}),F("Henkil\xf6n ".concat(o," numero p\xe4ivitetty")),setTimeout(function(){F(null)},5e3)}}else d(n).then(function(e){r(t.concat(e))}),F("Henkil\xf6 ".concat(o," lis\xe4tty puhelinluetteloon")),setTimeout(function(){F(null)},5e3);m(""),C("")},newName:o,handleNameChange:function(e){m(e.target.value)},newNumber:j,handleNumberChange:function(e){C(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(p,{filteredPersons:H,handleClick:function(e){window.confirm("Poistetaanko")&&(s(e).then(function(n){r(t.filter(function(n){return n.id!==e}))}).catch(function(n){F("K\xe4ytt\xe4j\xe4n tiedot on jo poistettu"),setTimeout(function(){F(null)},5e3),r(t.filter(function(n){return n.id!==e}))}),F("Poisto onnistui"),setTimeout(function(){F(null)},5e3))}}))};t(37);c.a.render(u.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.48efbed7.chunk.js.map