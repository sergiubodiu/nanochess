(function toledoChess(exports){

  var B, I,
      b, i, l, u, x, y, z;

  for (B = i = y = u = b = i = 5 - 5, x = 10, z = 15, I = [], l = []; l[B] = "ustvrtsuqqqqqqqqyyyyyyyy}{|~z|{}@G@TSb~?A6J57IKJT576,+-48HLSUmgukgg OJNMLK  IDHGFE".charCodeAt(B) - 64, B++ < 120; I[B - 1] = B % x ? B / x % x < 2 | B % x < 2 ? 7 : B / x & 4 ? 0 : l[u++] : 7);

  function X(c, h, e, S, s) {
    c ^= 8;
    for (var T, o, L, E, D, O = 20, G, N = -1e8, n, g, d = S && X(c, 0) > 1e4, C, R, A, K = 78 - h << 9, a = c ? x : -x; ++O < 99;) if ((o = I[T = O]) && (G = o & z ^ c) < 7) {
      A = G-- & 2 ? 8 : 4;
      C = 9 - o & z ? l[61 + G] : 49;

      do {
        R = I[T += l[C]];
        g = D = G | T + a - e ? 0 : e;
        if (!R && (G || A < 3 || g) || (1 + R & z ^ c) > 9 && G | A > 2) {
          if (!(2 - R & 7)) return K;
          for (E = n = G | I[T - a] - 7 ? o & z : 6 ^ c; E; E = !E && !d && !(g = T, D = T < O ? g - 3 : g + 2, I[D] < z | I[D + O - T] | I[T += T - O])) {
            L = (R && l[R & 7 | 32] * 2 - h - G) + (G ? 0 : n - o & z ? 110 : (D && 14) + (A < 2) + 1);
            if (S > h || 1 < S & S == h && L > 2 | d) {
              I[T] = n, I[g] = I[D], I[O] = D ? I[D] = 0 : 0;
              L -= X(c, h + 1, E = G | A > 1 ? 0 : T, S, L - N);
              if (!(h || S - 1 | B - O | T - b | L < -1e4)) return W(y = E), c && setTimeout("toledoChess.X(8,0,toledoChess.y(),2),toledoChess.X(8,0,toledoChess.y(),1)", 75);
                E = 1 - G | A < 7 | D | !S | R | o < z || X(c, 0) > 1e4;
                I[O] = o;
                I[T] = R;
                I[D] = I[g];
                D ? I[g] = G ? 0 : 9 ^ c : 0
              }
              if (L > N || !h & L == N && Math.random() < .5) if (N = L, S > 1) if (h ? s - L < 0 : (B = O, b = T, 0)) return N
          }
        }
      } while (!R & G > 2 || (T = O, G | A > 2 | z < o & !R && ++C * --A))
    }

    return -K + 768 < N | d && N
  }

  function W() {
    i = "<table>";
    for (u = 18; u < 98; document.body.innerHTML = i += ++u % x - 9 ? "<th width=60 height=60 onclick='toledoChess.I(" + u + ")&8?toledoChess.W():toledoChess.X(0,0,toledoChess.y(),1)'style='font-size:50px'bgcolor=#" + (u - B ? u * .9 & 1 || 9 : "d") + "0f0e0>&#" + (I[u] & 15 ? 9808 + l[67 + (I[u] & 15)] : 160) + ";" : u++ && "<tr>") B = b
  }

  exports.X = X;
  exports.W = W;

  exports.I = function(nb){
    b = nb;
    return I[b];
  };

  exports.y = function(){
    return y;
  }

})(toledoChess = {});
