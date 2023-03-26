//Buck Harris
/* Sources Used: https://www.w3schools.com/JSREF/jsref_push.asp#:~:text=The%20push()%20method%20adds,the%20length%20of%20the%20array.
https://www.w3schools.com/js/js_loop_for.asp
https://www.w3schools.com/jsref/jsref_length_array.asp
https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
https://cs.stackexchange.com/questions/55041/residual-graph-in-maximum-flow
https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
https://www.google.com/search?client=safari&rls=en&q=hashmap+javascript&ie=UTF-8&oe=UTF-8
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
https://www.designcise.com/web/tutorial/how-to-get-the-length-of-javascript-map-object
https://stackoverflow.com/questions/8702219/how-to-get-javascript-hash-table-count
https://weblog.west-wind.com/posts/2017/mar/04/getting-javascript-properties-for-object-maps-by-index-or-name
https://bobbyhadz.com/blog/javascript-get-key-of-object-by-index
https://stackoverflow.com/questions/14743536/multiple-key-names-same-pair-value
https://flexiple.com/javascript/get-last-array-element-javascript/
https://masteringjs.io/tutorials/fundamentals/compare-arrays
Used informstion from lectures
*/
//Problem 3:
function augmentingPath(graph, start, end) {
  let path = [];
  let answer = augmentingPathX(graph, start, end, path);
  if (answer.slice(-1) != end)
    return [];
  else
    return clean(graph, path);
}
function clean(graph, path)
  {
    //cleans the output to get the actual path without the "junk" vertexes 
    count = 0;
    while (true)
      {      
        if (path[count] == path[path.length-1])
            {
              break;
            }
        if (!Object.keys(graph[path[count]]).includes(path[count+1]))
            {
            path.splice(count,1);
            count = 0;
            }
        else count++;
      }
    return path;
  }

function augmentingPathX(graph, start, end, path) {
  for (var i = 0; i < Object.keys(graph[start]).length; i++) {
    if (!path.includes(start) && !path.includes(end))
      path.push(start);
    if (start == end)
      return end;
    if (!path.includes(Object.keys(graph[start])[i]))
      augmentingPathX(graph, Object.keys(graph[start])[i], end, path)
  }
  return path;
}


var graph1 = {
  'foo': { 'boo': 7 },
  'boo': { 'foo': 3, 'bar': 2 },
  'bar': { 'boo': 4 }
};
console.log(augmentingPath(graph1, 'foo', 'bar'));

var graph2 = {
  'foo': { 'boo': 7 },
  'boo': { 'foo': 3, 'bar': 2 },
  'bar': { 'boo': 4 },
  'bun': { 'foo': 8}
};
console.log(augmentingPath(graph2, 'foo', 'bun'));

var graph3 = {
  'foo': { 'bar': 7 },
  'boo': { 'foo': 3, 'bar': 2 },
  'bar': { 'sun': 4 },
  'bun': { 'boo': 8},
  'sun': { 'foo': 3, 'bun': 1}
};
console.log(augmentingPath(graph3, 'foo', 'boo'));

var graph4 = {
  'foo': { 'boo': 7 },
  'boo': { 'foo': 3, 'bar': 2 },
  'bar': { 'bun': 4 },
  'bun': { 'foo': 5, 'nat': 3},
  'nat': { 'ben': 1,},
  'ben': { 'foo': 9}
};
console.log(augmentingPath(graph4, 'foo', 'boo'));

var graph5 = {
  'foo': { 'bun': 7 },
  'boo': { 'foo': 3, 'bar': 2 },
  'bar': { 'boo': 4 },
  'bun': { 'foo': 8}
};
console.log(augmentingPath(graph5, 'foo', 'ben'));

graph ={'a':{'e':1,'b': 7},
        'b':{},
        'c':{'d':1},
        'd':{'a':1,'h':1},
        'e':{'f':1},
        'f':{'g':1,'d':1},
        'g': {},
        'h':{'g':1}};

console.log(augmentingPath(graph,'a','h'));
console.log(augmentingPath(graph,'a','c'));

graph ={'a':{'b':3,'j':2},
        'b':{'a':5,'i':1,'d':2},
        'c':{'e':1,'l':2},
        'd':{'f':4,'g':7,'h':2},
        'e':{'k':2,'a':2},
        'f':{'c':5,'i':1},
        'g':{},
        'h':{'b':8},
        'i':{'d':1,'b':3},
        'j':{'j':1},
        'k':{},
        'l':{}};

console.log(augmentingPath(graph,'d','j'));

graph ={'a':{'c':1,'j':2},
        'b':{'a':5},
        'c':{'d':1,'j':1},
        'd':{'b':1},
        'e':{'d':1,'b':1},
        'f':{'e':5,'d':1},
        'g':{},
        'h':{'c':1,'i':1,'b':1},
        'i':{'e':1,'g':3},
        'j':{'l':1,'k':1},
        'k':{'l':1},
        'l':{'f':1}};

console.log(augmentingPath(graph,'h','e'));

graph ={'a':{'c':1},
        'b':{},
        'c':{'d':1,'j':1},
        'd':{'b':1},
        'e':{'d':1,'b':1},
        'f':{'d':1},
        'g':{},
        'h':{'c':1,'i':1},
        'i':{'e':1,'g':3},
        'j':{'l':1},
        'k':{},
        'l':{}};

console.log(augmentingPath(graph,'h','e'));


