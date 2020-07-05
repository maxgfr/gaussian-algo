function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function median(values){
  if(values.length ===0) return 0;

  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}
var nb_post_dernier_24h = 50000;
var posts_24h = [5, 4, 0, 0, 0, 2, 0, 9];
var posts_24h = [];
for(var i = 0; i<nb_post_dernier_24h; i++) {
  posts_24h.push(getRandomArbitrary(0,100));
}
//console.log(posts_24h)

var tot = 0;
for(var i = 0; i<posts_24h.length; i++) {
  tot += posts_24h[i];
}
var moyenne = (1 / nb_post_dernier_24h) * tot;
console.log('MOYENNE : ',moyenne)

var median = median(posts_24h);
console.log('MEDIAN : ',median)

var ecart_type_tot = 0;
for(var i = 0; i<posts_24h.length; i++) {
  ecart_type_tot +=  (posts_24h[i] - moyenne) * (posts_24h[i] - moyenne);
}
var ecart_type = Math.sqrt( ((1 / nb_post_dernier_24h) * ecart_type_tot) );
console.log('ECART TYPE : ',ecart_type)

var crit = (1 * ecart_type) + median;
console.log('CRITERE : ',crit)

var selected = [];
for(var i = 0; i<posts_24h.length; i++) {
  if(posts_24h[i] > crit) {
    selected.push(posts_24h[i])
  }
}
//console.log(selected)
console.log('NOMBRE DE POSTS SELECTIONNES : ', selected.length)
console.log('% SELECTIONNES : ', (selected.length / posts_24h.length) * 100, '%')
