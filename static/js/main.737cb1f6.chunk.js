(this["webpackJsonpbinance-vs-coinbase"]=this["webpackJsonpbinance-vs-coinbase"]||[]).push([[0],{39:function(e,c,t){},40:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),s=t(16),i=t.n(s),o=t(3),r=t(4),l=t.n(r),u=(t(39),t(40),t(0)),b=function(e){var c=e.name,t=e.image,n=e.symbol,a=e.price;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"coin-container",children:Object(u.jsxs)("div",{className:"coin-row",children:[Object(u.jsxs)("div",{className:"coin",children:[Object(u.jsx)("img",{src:t,alt:"crypto"}),Object(u.jsx)("h1",{children:c}),Object(u.jsx)("p",{className:"coin-symbol",children:n})]}),Object(u.jsx)("div",{className:"coin-data",children:Object(u.jsxs)("p",{className:"coin-price",children:["$",a]})})]})})})};var d=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,1)[0],r=Object(n.useState)(""),d=Object(o.a)(r,2),j=d[0],h=d[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),f=p[0],O=p[1],v=Object(n.useState)(""),x=Object(o.a)(v,2),g=x[0],B=x[1],y=Object(n.useState)(""),C=Object(o.a)(y,2),N=C[0],S=C[1];Object(n.useEffect)((function(){F(),T(),w(),E(),$()}),[]);var T=function(){l.a.get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT").then((function(e){h(parseFloat(e.data.price).toFixed(2))})).catch((function(e){return console.log(e)}))},w=function(){l.a.get("https://api.coinbase.com/v2/prices/BTC-USD/spot").then((function(e){B(parseFloat(e.data.data.amount).toFixed(2))})).catch((function(e){return console.log(e)}))},E=function(){l.a.get("https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT").then((function(e){O(parseFloat(e.data.price).toFixed(2))})).catch((function(e){return console.log(e)}))},$=function(){l.a.get("https://api.coinbase.com/v2/prices/ETH-USD/spot").then((function(e){S(parseFloat(e.data.data.amount).toFixed(2))})).catch((function(e){return console.log(e)}))},F=function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))},k=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(u.jsxs)("div",{className:"coin-app",children:[Object(u.jsx)("h1",{children:"Average Price Across Major Crypto Exchanges"}),k.map((function(e){return Object(u.jsx)(b,{name:e.name,price:e.current_price,symbol:e.symbol,image:e.image},e.id)})),Object(u.jsx)("h1",{className:"compare-header",children:"Binance vs Coinbase"}),j>g?Object(u.jsxs)("div",{className:"switchBTC",children:["Buy Bitcoin from Coinbase for $",g," and sell to Binance for $",j]}):Object(u.jsxs)("div",{className:"switchBTC",children:["Buy Bitcoin from Binance for $",j," and sell to Coinbase for $",g]}),f>N?Object(u.jsxs)("div",{className:"switchETH",children:["Buy Ethereum from Coinbase for $",N," and sell to Binance for $",f]}):Object(u.jsxs)("div",{className:"switchETH",children:["Buy Ethereum from Binance for $",f," and sell to Coinbase for $",N]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.737cb1f6.chunk.js.map