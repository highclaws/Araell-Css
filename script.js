var transformLetters = (function() {
    var vowels = ['a', 'e', 'i', 'o', 'u'].reduce(function(res, l) {
            res[l] = true;
            return res;
        }, {}),
        rx = /[a-z]/g,
        replaceFn = function(l) {
            if (l === 'z') return 'A';
            l = String.fromCharCode(l.charCodeAt(0) + 1);
            return vowels[l] ? l.toUpperCase() : l;
        };

    return function(s) {
        return s.replace(rx, replaceFn);
    };
})();
console.log((vowels));