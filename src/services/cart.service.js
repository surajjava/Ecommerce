angular.module('myApp')
  .service('CartService', function($window) {
    const KEY = 'cart_v1';
    const read = () => angular.fromJson($window.localStorage.getItem(KEY)) || [];
    const write = x => $window.localStorage.setItem(KEY, angular.toJson(x));
    this.items = () => read();
    this.add = (p, q=1) => { const c=read(); const f=c.find(i=>i.id===p.id); f? f.qty+=q : c.push({...p, qty:q}); write(c); };
    this.update = (id, qty) => { const c=read(); const it=c.find(i=>i.id===id); if(it){ it.qty=Math.max(1,qty|0); write(c); } };
    this.remove = id => write(read().filter(i=>i.id!==id));
    this.clear  = () => write([]);
    this.total  = () => read().reduce((s,i)=>s+i.price*i.qty,0);
    this.count  = () => read().reduce((s,i)=>s+i.qty,0);
  });
