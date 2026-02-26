function YT(e, i) {
  for (var s = 0; s < i.length; s++) {
      const o = i[s];
      if (typeof o != "string" && !Array.isArray(o)) {
          for (const l in o)
              if (l !== "default" && !(l in e)) {
                  const f = Object.getOwnPropertyDescriptor(o, l);
                  f && Object.defineProperty(e, l, f.get ? f : {
                      enumerable: !0,
                      get: () => o[l]
                  })
              }
      }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
  }))
}
(function() {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload"))
      return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
      o(l);
  new MutationObserver(l => {
      for (const f of l)
          if (f.type === "childList")
              for (const d of f.addedNodes)
                  d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function s(l) {
      const f = {};
      return l.integrity && (f.integrity = l.integrity),
      l.referrerPolicy && (f.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials" ? f.credentials = "include" : l.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
      f
  }
  function o(l) {
      if (l.ep)
          return;
      l.ep = !0;
      const f = s(l);
      fetch(l.href, f)
  }
}
)();
function k0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var uf = {
  exports: {}
}
, sr = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Mg;
function XT() {
  if (Mg)
      return sr;
  Mg = 1;
  var e = Symbol.for("react.transitional.element")
    , i = Symbol.for("react.fragment");
  function s(o, l, f) {
      var d = null;
      if (f !== void 0 && (d = "" + f),
      l.key !== void 0 && (d = "" + l.key),
      "key"in l) {
          f = {};
          for (var m in l)
              m !== "key" && (f[m] = l[m])
      } else
          f = l;
      return l = f.ref,
      {
          $$typeof: e,
          type: o,
          key: d,
          ref: l !== void 0 ? l : null,
          props: f
      }
  }
  return sr.Fragment = i,
  sr.jsx = s,
  sr.jsxs = s,
  sr
}
var jg;
function FT() {
  return jg || (jg = 1,
  uf.exports = XT()),
  uf.exports
}
var y = FT()
, ff = {
  exports: {}
}
, rr = {}
, df = {
  exports: {}
}
, hf = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Rg;
function QT() {
  return Rg || (Rg = 1,
  (function(e) {
      function i(_, Y) {
          var U = _.length;
          _.push(Y);
          t: for (; 0 < U; ) {
              var it = U - 1 >>> 1
                , ct = _[it];
              if (0 < l(ct, Y))
                  _[it] = Y,
                  _[U] = ct,
                  U = it;
              else
                  break t
          }
      }
      function s(_) {
          return _.length === 0 ? null : _[0]
      }
      function o(_) {
          if (_.length === 0)
              return null;
          var Y = _[0]
            , U = _.pop();
          if (U !== Y) {
              _[0] = U;
              t: for (var it = 0, ct = _.length, M = ct >>> 1; it < M; ) {
                  var F = 2 * (it + 1) - 1
                    , $ = _[F]
                    , W = F + 1
                    , ut = _[W];
                  if (0 > l($, U))
                      W < ct && 0 > l(ut, $) ? (_[it] = ut,
                      _[W] = U,
                      it = W) : (_[it] = $,
                      _[F] = U,
                      it = F);
                  else if (W < ct && 0 > l(ut, U))
                      _[it] = ut,
                      _[W] = U,
                      it = W;
                  else
                      break t
              }
          }
          return Y
      }
      function l(_, Y) {
          var U = _.sortIndex - Y.sortIndex;
          return U !== 0 ? U : _.id - Y.id
      }
      if (e.unstable_now = void 0,
      typeof performance == "object" && typeof performance.now == "function") {
          var f = performance;
          e.unstable_now = function() {
              return f.now()
          }
      } else {
          var d = Date
            , m = d.now();
          e.unstable_now = function() {
              return d.now() - m
          }
      }
      var p = []
        , h = []
        , g = 1
        , x = null
        , b = 3
        , T = !1
        , C = !1
        , E = !1
        , N = !1
        , O = typeof setTimeout == "function" ? setTimeout : null
        , z = typeof clearTimeout == "function" ? clearTimeout : null
        , D = typeof setImmediate < "u" ? setImmediate : null;
      function q(_) {
          for (var Y = s(h); Y !== null; ) {
              if (Y.callback === null)
                  o(h);
              else if (Y.startTime <= _)
                  o(h),
                  Y.sortIndex = Y.expirationTime,
                  i(p, Y);
              else
                  break;
              Y = s(h)
          }
      }
      function G(_) {
          if (E = !1,
          q(_),
          !C)
              if (s(p) !== null)
                  C = !0,
                  Z || (Z = !0,
                  pt());
              else {
                  var Y = s(h);
                  Y !== null && ht(G, Y.startTime - _)
              }
      }
      var Z = !1
        , k = -1
        , H = 5
        , I = -1;
      function st() {
          return N ? !0 : !(e.unstable_now() - I < H)
      }
      function dt() {
          if (N = !1,
          Z) {
              var _ = e.unstable_now();
              I = _;
              var Y = !0;
              try {
                  t: {
                      C = !1,
                      E && (E = !1,
                      z(k),
                      k = -1),
                      T = !0;
                      var U = b;
                      try {
                          e: {
                              for (q(_),
                              x = s(p); x !== null && !(x.expirationTime > _ && st()); ) {
                                  var it = x.callback;
                                  if (typeof it == "function") {
                                      x.callback = null,
                                      b = x.priorityLevel;
                                      var ct = it(x.expirationTime <= _);
                                      if (_ = e.unstable_now(),
                                      typeof ct == "function") {
                                          x.callback = ct,
                                          q(_),
                                          Y = !0;
                                          break e
                                      }
                                      x === s(p) && o(p),
                                      q(_)
                                  } else
                                      o(p);
                                  x = s(p)
                              }
                              if (x !== null)
                                  Y = !0;
                              else {
                                  var M = s(h);
                                  M !== null && ht(G, M.startTime - _),
                                  Y = !1
                              }
                          }
                          break t
                      } finally {
                          x = null,
                          b = U,
                          T = !1
                      }
                      Y = void 0
                  }
              } finally {
                  Y ? pt() : Z = !1
              }
          }
      }
      var pt;
      if (typeof D == "function")
          pt = function() {
              D(dt)
          }
          ;
      else if (typeof MessageChannel < "u") {
          var Et = new MessageChannel
            , J = Et.port2;
          Et.port1.onmessage = dt,
          pt = function() {
              J.postMessage(null)
          }
      } else
          pt = function() {
              O(dt, 0)
          }
          ;
      function ht(_, Y) {
          k = O(function() {
              _(e.unstable_now())
          }, Y)
      }
      e.unstable_IdlePriority = 5,
      e.unstable_ImmediatePriority = 1,
      e.unstable_LowPriority = 4,
      e.unstable_NormalPriority = 3,
      e.unstable_Profiling = null,
      e.unstable_UserBlockingPriority = 2,
      e.unstable_cancelCallback = function(_) {
          _.callback = null
      }
      ,
      e.unstable_forceFrameRate = function(_) {
          0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < _ ? Math.floor(1e3 / _) : 5
      }
      ,
      e.unstable_getCurrentPriorityLevel = function() {
          return b
      }
      ,
      e.unstable_next = function(_) {
          switch (b) {
          case 1:
          case 2:
          case 3:
              var Y = 3;
              break;
          default:
              Y = b
          }
          var U = b;
          b = Y;
          try {
              return _()
          } finally {
              b = U
          }
      }
      ,
      e.unstable_requestPaint = function() {
          N = !0
      }
      ,
      e.unstable_runWithPriority = function(_, Y) {
          switch (_) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
              break;
          default:
              _ = 3
          }
          var U = b;
          b = _;
          try {
              return Y()
          } finally {
              b = U
          }
      }
      ,
      e.unstable_scheduleCallback = function(_, Y, U) {
          var it = e.unstable_now();
          switch (typeof U == "object" && U !== null ? (U = U.delay,
          U = typeof U == "number" && 0 < U ? it + U : it) : U = it,
          _) {
          case 1:
              var ct = -1;
              break;
          case 2:
              ct = 250;
              break;
          case 5:
              ct = 1073741823;
              break;
          case 4:
              ct = 1e4;
              break;
          default:
              ct = 5e3
          }
          return ct = U + ct,
          _ = {
              id: g++,
              callback: Y,
              priorityLevel: _,
              startTime: U,
              expirationTime: ct,
              sortIndex: -1
          },
          U > it ? (_.sortIndex = U,
          i(h, _),
          s(p) === null && _ === s(h) && (E ? (z(k),
          k = -1) : E = !0,
          ht(G, U - it))) : (_.sortIndex = ct,
          i(p, _),
          C || T || (C = !0,
          Z || (Z = !0,
          pt()))),
          _
      }
      ,
      e.unstable_shouldYield = st,
      e.unstable_wrapCallback = function(_) {
          var Y = b;
          return function() {
              var U = b;
              b = Y;
              try {
                  return _.apply(this, arguments)
              } finally {
                  b = U
              }
          }
      }
  }
  )(hf)),
  hf
}
var Og;
function KT() {
  return Og || (Og = 1,
  df.exports = QT()),
  df.exports
}
var mf = {
  exports: {}
}
, mt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Dg;
function ZT() {
  if (Dg)
      return mt;
  Dg = 1;
  var e = Symbol.for("react.transitional.element")
    , i = Symbol.for("react.portal")
    , s = Symbol.for("react.fragment")
    , o = Symbol.for("react.strict_mode")
    , l = Symbol.for("react.profiler")
    , f = Symbol.for("react.consumer")
    , d = Symbol.for("react.context")
    , m = Symbol.for("react.forward_ref")
    , p = Symbol.for("react.suspense")
    , h = Symbol.for("react.memo")
    , g = Symbol.for("react.lazy")
    , x = Symbol.for("react.activity")
    , b = Symbol.iterator;
  function T(M) {
      return M === null || typeof M != "object" ? null : (M = b && M[b] || M["@@iterator"],
      typeof M == "function" ? M : null)
  }
  var C = {
      isMounted: function() {
          return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
  }
    , E = Object.assign
    , N = {};
  function O(M, F, $) {
      this.props = M,
      this.context = F,
      this.refs = N,
      this.updater = $ || C
  }
  O.prototype.isReactComponent = {},
  O.prototype.setState = function(M, F) {
      if (typeof M != "object" && typeof M != "function" && M != null)
          throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, M, F, "setState")
  }
  ,
  O.prototype.forceUpdate = function(M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate")
  }
  ;
  function z() {}
  z.prototype = O.prototype;
  function D(M, F, $) {
      this.props = M,
      this.context = F,
      this.refs = N,
      this.updater = $ || C
  }
  var q = D.prototype = new z;
  q.constructor = D,
  E(q, O.prototype),
  q.isPureReactComponent = !0;
  var G = Array.isArray;
  function Z() {}
  var k = {
      H: null,
      A: null,
      T: null,
      S: null
  }
    , H = Object.prototype.hasOwnProperty;
  function I(M, F, $) {
      var W = $.ref;
      return {
          $$typeof: e,
          type: M,
          key: F,
          ref: W !== void 0 ? W : null,
          props: $
      }
  }
  function st(M, F) {
      return I(M.type, F, M.props)
  }
  function dt(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e
  }
  function pt(M) {
      var F = {
          "=": "=0",
          ":": "=2"
      };
      return "$" + M.replace(/[=:]/g, function($) {
          return F[$]
      })
  }
  var Et = /\/+/g;
  function J(M, F) {
      return typeof M == "object" && M !== null && M.key != null ? pt("" + M.key) : F.toString(36)
  }
  function ht(M) {
      switch (M.status) {
      case "fulfilled":
          return M.value;
      case "rejected":
          throw M.reason;
      default:
          switch (typeof M.status == "string" ? M.then(Z, Z) : (M.status = "pending",
          M.then(function(F) {
              M.status === "pending" && (M.status = "fulfilled",
              M.value = F)
          }, function(F) {
              M.status === "pending" && (M.status = "rejected",
              M.reason = F)
          })),
          M.status) {
          case "fulfilled":
              return M.value;
          case "rejected":
              throw M.reason
          }
      }
      throw M
  }
  function _(M, F, $, W, ut) {
      var yt = typeof M;
      (yt === "undefined" || yt === "boolean") && (M = null);
      var rt = !1;
      if (M === null)
          rt = !0;
      else
          switch (yt) {
          case "bigint":
          case "string":
          case "number":
              rt = !0;
              break;
          case "object":
              switch (M.$$typeof) {
              case e:
              case i:
                  rt = !0;
                  break;
              case g:
                  return rt = M._init,
                  _(rt(M._payload), F, $, W, ut)
              }
          }
      if (rt)
          return ut = ut(M),
          rt = W === "" ? "." + J(M, 0) : W,
          G(ut) ? ($ = "",
          rt != null && ($ = rt.replace(Et, "$&/") + "/"),
          _(ut, F, $, "", function(qe) {
              return qe
          })) : ut != null && (dt(ut) && (ut = st(ut, $ + (ut.key == null || M && M.key === ut.key ? "" : ("" + ut.key).replace(Et, "$&/") + "/") + rt)),
          F.push(ut)),
          1;
      rt = 0;
      var Ft = W === "" ? "." : W + ":";
      if (G(M))
          for (var _t = 0; _t < M.length; _t++)
              W = M[_t],
              yt = Ft + J(W, _t),
              rt += _(W, F, $, yt, ut);
      else if (_t = T(M),
      typeof _t == "function")
          for (M = _t.call(M),
          _t = 0; !(W = M.next()).done; )
              W = W.value,
              yt = Ft + J(W, _t++),
              rt += _(W, F, $, yt, ut);
      else if (yt === "object") {
          if (typeof M.then == "function")
              return _(ht(M), F, $, W, ut);
          throw F = String(M),
          Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.")
      }
      return rt
  }
  function Y(M, F, $) {
      if (M == null)
          return M;
      var W = []
        , ut = 0;
      return _(M, W, "", "", function(yt) {
          return F.call($, yt, ut++)
      }),
      W
  }
  function U(M) {
      if (M._status === -1) {
          var F = M._result;
          F = F(),
          F.then(function($) {
              (M._status === 0 || M._status === -1) && (M._status = 1,
              M._result = $)
          }, function($) {
              (M._status === 0 || M._status === -1) && (M._status = 2,
              M._result = $)
          }),
          M._status === -1 && (M._status = 0,
          M._result = F)
      }
      if (M._status === 1)
          return M._result.default;
      throw M._result
  }
  var it = typeof reportError == "function" ? reportError : function(M) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var F = new window.ErrorEvent("error",{
              bubbles: !0,
              cancelable: !0,
              message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
              error: M
          });
          if (!window.dispatchEvent(F))
              return
      } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", M);
          return
      }
      console.error(M)
  }
    , ct = {
      map: Y,
      forEach: function(M, F, $) {
          Y(M, function() {
              F.apply(this, arguments)
          }, $)
      },
      count: function(M) {
          var F = 0;
          return Y(M, function() {
              F++
          }),
          F
      },
      toArray: function(M) {
          return Y(M, function(F) {
              return F
          }) || []
      },
      only: function(M) {
          if (!dt(M))
              throw Error("React.Children.only expected to receive a single React element child.");
          return M
      }
  };
  return mt.Activity = x,
  mt.Children = ct,
  mt.Component = O,
  mt.Fragment = s,
  mt.Profiler = l,
  mt.PureComponent = D,
  mt.StrictMode = o,
  mt.Suspense = p,
  mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k,
  mt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(M) {
          return k.H.useMemoCache(M)
      }
  },
  mt.cache = function(M) {
      return function() {
          return M.apply(null, arguments)
      }
  }
  ,
  mt.cacheSignal = function() {
      return null
  }
  ,
  mt.cloneElement = function(M, F, $) {
      if (M == null)
          throw Error("The argument must be a React element, but you passed " + M + ".");
      var W = E({}, M.props)
        , ut = M.key;
      if (F != null)
          for (yt in F.key !== void 0 && (ut = "" + F.key),
          F)
              !H.call(F, yt) || yt === "key" || yt === "__self" || yt === "__source" || yt === "ref" && F.ref === void 0 || (W[yt] = F[yt]);
      var yt = arguments.length - 2;
      if (yt === 1)
          W.children = $;
      else if (1 < yt) {
          for (var rt = Array(yt), Ft = 0; Ft < yt; Ft++)
              rt[Ft] = arguments[Ft + 2];
          W.children = rt
      }
      return I(M.type, ut, W)
  }
  ,
  mt.createContext = function(M) {
      return M = {
          $$typeof: d,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null
      },
      M.Provider = M,
      M.Consumer = {
          $$typeof: f,
          _context: M
      },
      M
  }
  ,
  mt.createElement = function(M, F, $) {
      var W, ut = {}, yt = null;
      if (F != null)
          for (W in F.key !== void 0 && (yt = "" + F.key),
          F)
              H.call(F, W) && W !== "key" && W !== "__self" && W !== "__source" && (ut[W] = F[W]);
      var rt = arguments.length - 2;
      if (rt === 1)
          ut.children = $;
      else if (1 < rt) {
          for (var Ft = Array(rt), _t = 0; _t < rt; _t++)
              Ft[_t] = arguments[_t + 2];
          ut.children = Ft
      }
      if (M && M.defaultProps)
          for (W in rt = M.defaultProps,
          rt)
              ut[W] === void 0 && (ut[W] = rt[W]);
      return I(M, yt, ut)
  }
  ,
  mt.createRef = function() {
      return {
          current: null
      }
  }
  ,
  mt.forwardRef = function(M) {
      return {
          $$typeof: m,
          render: M
      }
  }
  ,
  mt.isValidElement = dt,
  mt.lazy = function(M) {
      return {
          $$typeof: g,
          _payload: {
              _status: -1,
              _result: M
          },
          _init: U
      }
  }
  ,
  mt.memo = function(M, F) {
      return {
          $$typeof: h,
          type: M,
          compare: F === void 0 ? null : F
      }
  }
  ,
  mt.startTransition = function(M) {
      var F = k.T
        , $ = {};
      k.T = $;
      try {
          var W = M()
            , ut = k.S;
          ut !== null && ut($, W),
          typeof W == "object" && W !== null && typeof W.then == "function" && W.then(Z, it)
      } catch (yt) {
          it(yt)
      } finally {
          F !== null && $.types !== null && (F.types = $.types),
          k.T = F
      }
  }
  ,
  mt.unstable_useCacheRefresh = function() {
      return k.H.useCacheRefresh()
  }
  ,
  mt.use = function(M) {
      return k.H.use(M)
  }
  ,
  mt.useActionState = function(M, F, $) {
      return k.H.useActionState(M, F, $)
  }
  ,
  mt.useCallback = function(M, F) {
      return k.H.useCallback(M, F)
  }
  ,
  mt.useContext = function(M) {
      return k.H.useContext(M)
  }
  ,
  mt.useDebugValue = function() {}
  ,
  mt.useDeferredValue = function(M, F) {
      return k.H.useDeferredValue(M, F)
  }
  ,
  mt.useEffect = function(M, F) {
      return k.H.useEffect(M, F)
  }
  ,
  mt.useEffectEvent = function(M) {
      return k.H.useEffectEvent(M)
  }
  ,
  mt.useId = function() {
      return k.H.useId()
  }
  ,
  mt.useImperativeHandle = function(M, F, $) {
      return k.H.useImperativeHandle(M, F, $)
  }
  ,
  mt.useInsertionEffect = function(M, F) {
      return k.H.useInsertionEffect(M, F)
  }
  ,
  mt.useLayoutEffect = function(M, F) {
      return k.H.useLayoutEffect(M, F)
  }
  ,
  mt.useMemo = function(M, F) {
      return k.H.useMemo(M, F)
  }
  ,
  mt.useOptimistic = function(M, F) {
      return k.H.useOptimistic(M, F)
  }
  ,
  mt.useReducer = function(M, F, $) {
      return k.H.useReducer(M, F, $)
  }
  ,
  mt.useRef = function(M) {
      return k.H.useRef(M)
  }
  ,
  mt.useState = function(M) {
      return k.H.useState(M)
  }
  ,
  mt.useSyncExternalStore = function(M, F, $) {
      return k.H.useSyncExternalStore(M, F, $)
  }
  ,
  mt.useTransition = function() {
      return k.H.useTransition()
  }
  ,
  mt.version = "19.2.0",
  mt
}
var _g;
function Nl() {
  return _g || (_g = 1,
  mf.exports = ZT()),
  mf.exports
}
var pf = {
  exports: {}
}
, de = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var zg;
function $T() {
  if (zg)
      return de;
  zg = 1;
  var e = Nl();
  function i(p) {
      var h = "https://react.dev/errors/" + p;
      if (1 < arguments.length) {
          h += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var g = 2; g < arguments.length; g++)
              h += "&args[]=" + encodeURIComponent(arguments[g])
      }
      return "Minified React error #" + p + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function s() {}
  var o = {
      d: {
          f: s,
          r: function() {
              throw Error(i(522))
          },
          D: s,
          C: s,
          L: s,
          m: s,
          X: s,
          S: s,
          M: s
      },
      p: 0,
      findDOMNode: null
  }
    , l = Symbol.for("react.portal");
  function f(p, h, g) {
      var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
          $$typeof: l,
          key: x == null ? null : "" + x,
          children: p,
          containerInfo: h,
          implementation: g
      }
  }
  var d = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, h) {
      if (p === "font")
          return "";
      if (typeof h == "string")
          return h === "use-credentials" ? h : ""
  }
  return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
  de.createPortal = function(p, h) {
      var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
          throw Error(i(299));
      return f(p, h, null, g)
  }
  ,
  de.flushSync = function(p) {
      var h = d.T
        , g = o.p;
      try {
          if (d.T = null,
          o.p = 2,
          p)
              return p()
      } finally {
          d.T = h,
          o.p = g,
          o.d.f()
      }
  }
  ,
  de.preconnect = function(p, h) {
      typeof p == "string" && (h ? (h = h.crossOrigin,
      h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null,
      o.d.C(p, h))
  }
  ,
  de.prefetchDNS = function(p) {
      typeof p == "string" && o.d.D(p)
  }
  ,
  de.preinit = function(p, h) {
      if (typeof p == "string" && h && typeof h.as == "string") {
          var g = h.as
            , x = m(g, h.crossOrigin)
            , b = typeof h.integrity == "string" ? h.integrity : void 0
            , T = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
          g === "style" ? o.d.S(p, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: x,
              integrity: b,
              fetchPriority: T
          }) : g === "script" && o.d.X(p, {
              crossOrigin: x,
              integrity: b,
              fetchPriority: T,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0
          })
      }
  }
  ,
  de.preinitModule = function(p, h) {
      if (typeof p == "string")
          if (typeof h == "object" && h !== null) {
              if (h.as == null || h.as === "script") {
                  var g = m(h.as, h.crossOrigin);
                  o.d.M(p, {
                      crossOrigin: g,
                      integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                      nonce: typeof h.nonce == "string" ? h.nonce : void 0
                  })
              }
          } else
              h == null && o.d.M(p)
  }
  ,
  de.preload = function(p, h) {
      if (typeof p == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
          var g = h.as
            , x = m(g, h.crossOrigin);
          o.d.L(p, g, {
              crossOrigin: x,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
              type: typeof h.type == "string" ? h.type : void 0,
              fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
              referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
              imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
              imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
              media: typeof h.media == "string" ? h.media : void 0
          })
      }
  }
  ,
  de.preloadModule = function(p, h) {
      if (typeof p == "string")
          if (h) {
              var g = m(h.as, h.crossOrigin);
              o.d.m(p, {
                  as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
                  crossOrigin: g,
                  integrity: typeof h.integrity == "string" ? h.integrity : void 0
              })
          } else
              o.d.m(p)
  }
  ,
  de.requestFormReset = function(p) {
      o.d.r(p)
  }
  ,
  de.unstable_batchedUpdates = function(p, h) {
      return p(h)
  }
  ,
  de.useFormState = function(p, h, g) {
      return d.H.useFormState(p, h, g)
  }
  ,
  de.useFormStatus = function() {
      return d.H.useHostTransitionStatus()
  }
  ,
  de.version = "19.2.0",
  de
}
var Lg;
function P0() {
  if (Lg)
      return pf.exports;
  Lg = 1;
  function e() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
          try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
          } catch (i) {
              console.error(i)
          }
  }
  return e(),
  pf.exports = $T(),
  pf.exports
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Vg;
function WT() {
  if (Vg)
      return rr;
  Vg = 1;
  var e = KT()
    , i = Nl()
    , s = P0();
  function o(t) {
      var n = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var a = 2; a < arguments.length; a++)
              n += "&args[]=" + encodeURIComponent(arguments[a])
      }
      return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function l(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
  }
  function f(t) {
      var n = t
        , a = t;
      if (t.alternate)
          for (; n.return; )
              n = n.return;
      else {
          t = n;
          do
              n = t,
              (n.flags & 4098) !== 0 && (a = n.return),
              t = n.return;
          while (t)
      }
      return n.tag === 3 ? a : null
  }
  function d(t) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n === null && (t = t.alternate,
          t !== null && (n = t.memoizedState)),
          n !== null)
              return n.dehydrated
      }
      return null
  }
  function m(t) {
      if (t.tag === 31) {
          var n = t.memoizedState;
          if (n === null && (t = t.alternate,
          t !== null && (n = t.memoizedState)),
          n !== null)
              return n.dehydrated
      }
      return null
  }
  function p(t) {
      if (f(t) !== t)
          throw Error(o(188))
  }
  function h(t) {
      var n = t.alternate;
      if (!n) {
          if (n = f(t),
          n === null)
              throw Error(o(188));
          return n !== t ? null : t
      }
      for (var a = t, r = n; ; ) {
          var c = a.return;
          if (c === null)
              break;
          var u = c.alternate;
          if (u === null) {
              if (r = c.return,
              r !== null) {
                  a = r;
                  continue
              }
              break
          }
          if (c.child === u.child) {
              for (u = c.child; u; ) {
                  if (u === a)
                      return p(c),
                      t;
                  if (u === r)
                      return p(c),
                      n;
                  u = u.sibling
              }
              throw Error(o(188))
          }
          if (a.return !== r.return)
              a = c,
              r = u;
          else {
              for (var v = !1, S = c.child; S; ) {
                  if (S === a) {
                      v = !0,
                      a = c,
                      r = u;
                      break
                  }
                  if (S === r) {
                      v = !0,
                      r = c,
                      a = u;
                      break
                  }
                  S = S.sibling
              }
              if (!v) {
                  for (S = u.child; S; ) {
                      if (S === a) {
                          v = !0,
                          a = u,
                          r = c;
                          break
                      }
                      if (S === r) {
                          v = !0,
                          r = u,
                          a = c;
                          break
                      }
                      S = S.sibling
                  }
                  if (!v)
                      throw Error(o(189))
              }
          }
          if (a.alternate !== r)
              throw Error(o(190))
      }
      if (a.tag !== 3)
          throw Error(o(188));
      return a.stateNode.current === a ? t : n
  }
  function g(t) {
      var n = t.tag;
      if (n === 5 || n === 26 || n === 27 || n === 6)
          return t;
      for (t = t.child; t !== null; ) {
          if (n = g(t),
          n !== null)
              return n;
          t = t.sibling
      }
      return null
  }
  var x = Object.assign
    , b = Symbol.for("react.element")
    , T = Symbol.for("react.transitional.element")
    , C = Symbol.for("react.portal")
    , E = Symbol.for("react.fragment")
    , N = Symbol.for("react.strict_mode")
    , O = Symbol.for("react.profiler")
    , z = Symbol.for("react.consumer")
    , D = Symbol.for("react.context")
    , q = Symbol.for("react.forward_ref")
    , G = Symbol.for("react.suspense")
    , Z = Symbol.for("react.suspense_list")
    , k = Symbol.for("react.memo")
    , H = Symbol.for("react.lazy")
    , I = Symbol.for("react.activity")
    , st = Symbol.for("react.memo_cache_sentinel")
    , dt = Symbol.iterator;
  function pt(t) {
      return t === null || typeof t != "object" ? null : (t = dt && t[dt] || t["@@iterator"],
      typeof t == "function" ? t : null)
  }
  var Et = Symbol.for("react.client.reference");
  function J(t) {
      if (t == null)
          return null;
      if (typeof t == "function")
          return t.$$typeof === Et ? null : t.displayName || t.name || null;
      if (typeof t == "string")
          return t;
      switch (t) {
      case E:
          return "Fragment";
      case O:
          return "Profiler";
      case N:
          return "StrictMode";
      case G:
          return "Suspense";
      case Z:
          return "SuspenseList";
      case I:
          return "Activity"
      }
      if (typeof t == "object")
          switch (t.$$typeof) {
          case C:
              return "Portal";
          case D:
              return t.displayName || "Context";
          case z:
              return (t._context.displayName || "Context") + ".Consumer";
          case q:
              var n = t.render;
              return t = t.displayName,
              t || (t = n.displayName || n.name || "",
              t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
              t;
          case k:
              return n = t.displayName || null,
              n !== null ? n : J(t.type) || "Memo";
          case H:
              n = t._payload,
              t = t._init;
              try {
                  return J(t(n))
              } catch {}
          }
      return null
  }
  var ht = Array.isArray
    , _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    , Y = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    , U = {
      pending: !1,
      data: null,
      method: null,
      action: null
  }
    , it = []
    , ct = -1;
  function M(t) {
      return {
          current: t
      }
  }
  function F(t) {
      0 > ct || (t.current = it[ct],
      it[ct] = null,
      ct--)
  }
  function $(t, n) {
      ct++,
      it[ct] = t.current,
      t.current = n
  }
  var W = M(null)
    , ut = M(null)
    , yt = M(null)
    , rt = M(null);
  function Ft(t, n) {
      switch ($(yt, n),
      $(ut, t),
      $(W, null),
      n.nodeType) {
      case 9:
      case 11:
          t = (t = n.documentElement) && (t = t.namespaceURI) ? Wy(t) : 0;
          break;
      default:
          if (t = n.tagName,
          n = n.namespaceURI)
              n = Wy(n),
              t = Jy(n, t);
          else
              switch (t) {
              case "svg":
                  t = 1;
                  break;
              case "math":
                  t = 2;
                  break;
              default:
                  t = 0
              }
      }
      F(W),
      $(W, t)
  }
  function _t() {
      F(W),
      F(ut),
      F(yt)
  }
  function qe(t) {
      t.memoizedState !== null && $(rt, t);
      var n = W.current
        , a = Jy(n, t.type);
      n !== a && ($(ut, t),
      $(W, a))
  }
  function mn(t) {
      ut.current === t && (F(W),
      F(ut)),
      rt.current === t && (F(rt),
      er._currentValue = U)
  }
  var pn, Di;
  function _i(t) {
      if (pn === void 0)
          try {
              throw Error()
          } catch (a) {
              var n = a.stack.trim().match(/\n( *(at )?)/);
              pn = n && n[1] || "",
              Di = -1 < a.stack.indexOf(`
  at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
          }
      return `
` + pn + t + Di
  }
  var Fl = !1;
  function Ql(t, n) {
      if (!t || Fl)
          return "";
      Fl = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
          var r = {
              DetermineComponentFrameRoot: function() {
                  try {
                      if (n) {
                          var K = function() {
                              throw Error()
                          };
                          if (Object.defineProperty(K.prototype, "props", {
                              set: function() {
                                  throw Error()
                              }
                          }),
                          typeof Reflect == "object" && Reflect.construct) {
                              try {
                                  Reflect.construct(K, [])
                              } catch (P) {
                                  var B = P
                              }
                              Reflect.construct(t, [], K)
                          } else {
                              try {
                                  K.call()
                              } catch (P) {
                                  B = P
                              }
                              t.call(K.prototype)
                          }
                      } else {
                          try {
                              throw Error()
                          } catch (P) {
                              B = P
                          }
                          (K = t()) && typeof K.catch == "function" && K.catch(function() {})
                      }
                  } catch (P) {
                      if (P && B && typeof P.stack == "string")
                          return [P.stack, B.stack]
                  }
                  return [null, null]
              }
          };
          r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var c = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
          c && c.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot"
          });
          var u = r.DetermineComponentFrameRoot()
            , v = u[0]
            , S = u[1];
          if (v && S) {
              var A = v.split(`
`)
                , V = S.split(`
`);
              for (c = r = 0; r < A.length && !A[r].includes("DetermineComponentFrameRoot"); )
                  r++;
              for (; c < V.length && !V[c].includes("DetermineComponentFrameRoot"); )
                  c++;
              if (r === A.length || c === V.length)
                  for (r = A.length - 1,
                  c = V.length - 1; 1 <= r && 0 <= c && A[r] !== V[c]; )
                      c--;
              for (; 1 <= r && 0 <= c; r--,
              c--)
                  if (A[r] !== V[c]) {
                      if (r !== 1 || c !== 1)
                          do
                              if (r--,
                              c--,
                              0 > c || A[r] !== V[c]) {
                                  var X = `
` + A[r].replace(" at new ", " at ");
                                  return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)),
                                  X
                              }
                          while (1 <= r && 0 <= c);
                      break
                  }
          }
      } finally {
          Fl = !1,
          Error.prepareStackTrace = a
      }
      return (a = t ? t.displayName || t.name : "") ? _i(a) : ""
  }
  function SS(t, n) {
      switch (t.tag) {
      case 26:
      case 27:
      case 5:
          return _i(t.type);
      case 16:
          return _i("Lazy");
      case 13:
          return t.child !== n && n !== null ? _i("Suspense Fallback") : _i("Suspense");
      case 19:
          return _i("SuspenseList");
      case 0:
      case 15:
          return Ql(t.type, !1);
      case 11:
          return Ql(t.type.render, !1);
      case 1:
          return Ql(t.type, !0);
      case 31:
          return _i("Activity");
      default:
          return ""
      }
  }
  function Mh(t) {
      try {
          var n = ""
            , a = null;
          do
              n += SS(t, a),
              a = t,
              t = t.return;
          while (t);
          return n
      } catch (r) {
          return `
Error generating stack: ` + r.message + `
` + r.stack
      }
  }
  var Kl = Object.prototype.hasOwnProperty
    , Zl = e.unstable_scheduleCallback
    , $l = e.unstable_cancelCallback
    , wS = e.unstable_shouldYield
    , TS = e.unstable_requestPaint
    , Ne = e.unstable_now
    , ES = e.unstable_getCurrentPriorityLevel
    , jh = e.unstable_ImmediatePriority
    , Rh = e.unstable_UserBlockingPriority
    , zr = e.unstable_NormalPriority
    , CS = e.unstable_LowPriority
    , Oh = e.unstable_IdlePriority
    , AS = e.log
    , NS = e.unstable_setDisableYieldValue
    , hs = null
    , Me = null;
  function Wn(t) {
      if (typeof AS == "function" && NS(t),
      Me && typeof Me.setStrictMode == "function")
          try {
              Me.setStrictMode(hs, t)
          } catch {}
  }
  var je = Math.clz32 ? Math.clz32 : RS
    , MS = Math.log
    , jS = Math.LN2;
  function RS(t) {
      return t >>>= 0,
      t === 0 ? 32 : 31 - (MS(t) / jS | 0) | 0
  }
  var Lr = 256
    , Vr = 262144
    , Br = 4194304;
  function zi(t) {
      var n = t & 42;
      if (n !== 0)
          return n;
      switch (t & -t) {
      case 1:
          return 1;
      case 2:
          return 2;
      case 4:
          return 4;
      case 8:
          return 8;
      case 16:
          return 16;
      case 32:
          return 32;
      case 64:
          return 64;
      case 128:
          return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
          return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
          return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
          return t & 62914560;
      case 67108864:
          return 67108864;
      case 134217728:
          return 134217728;
      case 268435456:
          return 268435456;
      case 536870912:
          return 536870912;
      case 1073741824:
          return 0;
      default:
          return t
      }
  }
  function Ur(t, n, a) {
      var r = t.pendingLanes;
      if (r === 0)
          return 0;
      var c = 0
        , u = t.suspendedLanes
        , v = t.pingedLanes;
      t = t.warmLanes;
      var S = r & 134217727;
      return S !== 0 ? (r = S & ~u,
      r !== 0 ? c = zi(r) : (v &= S,
      v !== 0 ? c = zi(v) : a || (a = S & ~t,
      a !== 0 && (c = zi(a))))) : (S = r & ~u,
      S !== 0 ? c = zi(S) : v !== 0 ? c = zi(v) : a || (a = r & ~t,
      a !== 0 && (c = zi(a)))),
      c === 0 ? 0 : n !== 0 && n !== c && (n & u) === 0 && (u = c & -c,
      a = n & -n,
      u >= a || u === 32 && (a & 4194048) !== 0) ? n : c
  }
  function ms(t, n) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
  }
  function OS(t, n) {
      switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
          return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
          return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
          return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
          return -1;
      default:
          return -1
      }
  }
  function Dh() {
      var t = Br;
      return Br <<= 1,
      (Br & 62914560) === 0 && (Br = 4194304),
      t
  }
  function Wl(t) {
      for (var n = [], a = 0; 31 > a; a++)
          n.push(t);
      return n
  }
  function ps(t, n) {
      t.pendingLanes |= n,
      n !== 268435456 && (t.suspendedLanes = 0,
      t.pingedLanes = 0,
      t.warmLanes = 0)
  }
  function DS(t, n, a, r, c, u) {
      var v = t.pendingLanes;
      t.pendingLanes = a,
      t.suspendedLanes = 0,
      t.pingedLanes = 0,
      t.warmLanes = 0,
      t.expiredLanes &= a,
      t.entangledLanes &= a,
      t.errorRecoveryDisabledLanes &= a,
      t.shellSuspendCounter = 0;
      var S = t.entanglements
        , A = t.expirationTimes
        , V = t.hiddenUpdates;
      for (a = v & ~a; 0 < a; ) {
          var X = 31 - je(a)
            , K = 1 << X;
          S[X] = 0,
          A[X] = -1;
          var B = V[X];
          if (B !== null)
              for (V[X] = null,
              X = 0; X < B.length; X++) {
                  var P = B[X];
                  P !== null && (P.lane &= -536870913)
              }
          a &= ~K
      }
      r !== 0 && _h(t, r, 0),
      u !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(v & ~n))
  }
  function _h(t, n, a) {
      t.pendingLanes |= n,
      t.suspendedLanes &= ~n;
      var r = 31 - je(n);
      t.entangledLanes |= n,
      t.entanglements[r] = t.entanglements[r] | 1073741824 | a & 261930
  }
  function zh(t, n) {
      var a = t.entangledLanes |= n;
      for (t = t.entanglements; a; ) {
          var r = 31 - je(a)
            , c = 1 << r;
          c & n | t[r] & n && (t[r] |= n),
          a &= ~c
      }
  }
  function Lh(t, n) {
      var a = n & -n;
      return a = (a & 42) !== 0 ? 1 : Jl(a),
      (a & (t.suspendedLanes | n)) !== 0 ? 0 : a
  }
  function Jl(t) {
      switch (t) {
      case 2:
          t = 1;
          break;
      case 8:
          t = 4;
          break;
      case 32:
          t = 16;
          break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
          t = 128;
          break;
      case 268435456:
          t = 134217728;
          break;
      default:
          t = 0
      }
      return t
  }
  function Il(t) {
      return t &= -t,
      2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }
  function Vh() {
      var t = Y.p;
      return t !== 0 ? t : (t = window.event,
      t === void 0 ? 32 : Sg(t.type))
  }
  function Bh(t, n) {
      var a = Y.p;
      try {
          return Y.p = t,
          n()
      } finally {
          Y.p = a
      }
  }
  var Jn = Math.random().toString(36).slice(2)
    , re = "__reactFiber$" + Jn
    , ge = "__reactProps$" + Jn
    , ca = "__reactContainer$" + Jn
    , tc = "__reactEvents$" + Jn
    , _S = "__reactListeners$" + Jn
    , zS = "__reactHandles$" + Jn
    , Uh = "__reactResources$" + Jn
    , ys = "__reactMarker$" + Jn;
  function ec(t) {
      delete t[re],
      delete t[ge],
      delete t[tc],
      delete t[_S],
      delete t[zS]
  }
  function ua(t) {
      var n = t[re];
      if (n)
          return n;
      for (var a = t.parentNode; a; ) {
          if (n = a[ca] || a[re]) {
              if (a = n.alternate,
              n.child !== null || a !== null && a.child !== null)
                  for (t = sg(t); t !== null; ) {
                      if (a = t[re])
                          return a;
                      t = sg(t)
                  }
              return n
          }
          t = a,
          a = t.parentNode
      }
      return null
  }
  function fa(t) {
      if (t = t[re] || t[ca]) {
          var n = t.tag;
          if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
              return t
      }
      return null
  }
  function gs(t) {
      var n = t.tag;
      if (n === 5 || n === 26 || n === 27 || n === 6)
          return t.stateNode;
      throw Error(o(33))
  }
  function da(t) {
      var n = t[Uh];
      return n || (n = t[Uh] = {
          hoistableStyles: new Map,
          hoistableScripts: new Map
      }),
      n
  }
  function ae(t) {
      t[ys] = !0
  }
  var kh = new Set
    , Ph = {};
  function Li(t, n) {
      ha(t, n),
      ha(t + "Capture", n)
  }
  function ha(t, n) {
      for (Ph[t] = n,
      t = 0; t < n.length; t++)
          kh.add(n[t])
  }
  var LS = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
    , Hh = {}
    , qh = {};
  function VS(t) {
      return Kl.call(qh, t) ? !0 : Kl.call(Hh, t) ? !1 : LS.test(t) ? qh[t] = !0 : (Hh[t] = !0,
      !1)
  }
  function kr(t, n, a) {
      if (VS(n))
          if (a === null)
              t.removeAttribute(n);
          else {
              switch (typeof a) {
              case "undefined":
              case "function":
              case "symbol":
                  t.removeAttribute(n);
                  return;
              case "boolean":
                  var r = n.toLowerCase().slice(0, 5);
                  if (r !== "data-" && r !== "aria-") {
                      t.removeAttribute(n);
                      return
                  }
              }
              t.setAttribute(n, "" + a)
          }
  }
  function Pr(t, n, a) {
      if (a === null)
          t.removeAttribute(n);
      else {
          switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
              t.removeAttribute(n);
              return
          }
          t.setAttribute(n, "" + a)
      }
  }
  function Mn(t, n, a, r) {
      if (r === null)
          t.removeAttribute(a);
      else {
          switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
              t.removeAttribute(a);
              return
          }
          t.setAttributeNS(n, a, "" + r)
      }
  }
  function Ge(t) {
      switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
          return t;
      case "object":
          return t;
      default:
          return ""
      }
  }
  function Gh(t) {
      var n = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
  }
  function BS(t, n, a) {
      var r = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
      if (!t.hasOwnProperty(n) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
          var c = r.get
            , u = r.set;
          return Object.defineProperty(t, n, {
              configurable: !0,
              get: function() {
                  return c.call(this)
              },
              set: function(v) {
                  a = "" + v,
                  u.call(this, v)
              }
          }),
          Object.defineProperty(t, n, {
              enumerable: r.enumerable
          }),
          {
              getValue: function() {
                  return a
              },
              setValue: function(v) {
                  a = "" + v
              },
              stopTracking: function() {
                  t._valueTracker = null,
                  delete t[n]
              }
          }
      }
  }
  function nc(t) {
      if (!t._valueTracker) {
          var n = Gh(t) ? "checked" : "value";
          t._valueTracker = BS(t, n, "" + t[n])
      }
  }
  function Yh(t) {
      if (!t)
          return !1;
      var n = t._valueTracker;
      if (!n)
          return !0;
      var a = n.getValue()
        , r = "";
      return t && (r = Gh(t) ? t.checked ? "true" : "false" : t.value),
      t = r,
      t !== a ? (n.setValue(t),
      !0) : !1
  }
  function Hr(t) {
      if (t = t || (typeof document < "u" ? document : void 0),
      typeof t > "u")
          return null;
      try {
          return t.activeElement || t.body
      } catch {
          return t.body
      }
  }
  var US = /[\n"\\]/g;
  function Ye(t) {
      return t.replace(US, function(n) {
          return "\\" + n.charCodeAt(0).toString(16) + " "
      })
  }
  function ic(t, n, a, r, c, u, v, S) {
      t.name = "",
      v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"),
      n != null ? v === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Ge(n)) : t.value !== "" + Ge(n) && (t.value = "" + Ge(n)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"),
      n != null ? ac(t, v, Ge(n)) : a != null ? ac(t, v, Ge(a)) : r != null && t.removeAttribute("value"),
      c == null && u != null && (t.defaultChecked = !!u),
      c != null && (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? t.name = "" + Ge(S) : t.removeAttribute("name")
  }
  function Xh(t, n, a, r, c, u, v, S) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
      n != null || a != null) {
          if (!(u !== "submit" && u !== "reset" || n != null)) {
              nc(t);
              return
          }
          a = a != null ? "" + Ge(a) : "",
          n = n != null ? "" + Ge(n) : a,
          S || n === t.value || (t.value = n),
          t.defaultValue = n
      }
      r = r ?? c,
      r = typeof r != "function" && typeof r != "symbol" && !!r,
      t.checked = S ? t.checked : !!r,
      t.defaultChecked = !!r,
      v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v),
      nc(t)
  }
  function ac(t, n, a) {
      n === "number" && Hr(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
  }
  function ma(t, n, a, r) {
      if (t = t.options,
      n) {
          n = {};
          for (var c = 0; c < a.length; c++)
              n["$" + a[c]] = !0;
          for (a = 0; a < t.length; a++)
              c = n.hasOwnProperty("$" + t[a].value),
              t[a].selected !== c && (t[a].selected = c),
              c && r && (t[a].defaultSelected = !0)
      } else {
          for (a = "" + Ge(a),
          n = null,
          c = 0; c < t.length; c++) {
              if (t[c].value === a) {
                  t[c].selected = !0,
                  r && (t[c].defaultSelected = !0);
                  return
              }
              n !== null || t[c].disabled || (n = t[c])
          }
          n !== null && (n.selected = !0)
      }
  }
  function Fh(t, n, a) {
      if (n != null && (n = "" + Ge(n),
      n !== t.value && (t.value = n),
      a == null)) {
          t.defaultValue !== n && (t.defaultValue = n);
          return
      }
      t.defaultValue = a != null ? "" + Ge(a) : ""
  }
  function Qh(t, n, a, r) {
      if (n == null) {
          if (r != null) {
              if (a != null)
                  throw Error(o(92));
              if (ht(r)) {
                  if (1 < r.length)
                      throw Error(o(93));
                  r = r[0]
              }
              a = r
          }
          a == null && (a = ""),
          n = a
      }
      a = Ge(n),
      t.defaultValue = a,
      r = t.textContent,
      r === a && r !== "" && r !== null && (t.value = r),
      nc(t)
  }
  function pa(t, n) {
      if (n) {
          var a = t.firstChild;
          if (a && a === t.lastChild && a.nodeType === 3) {
              a.nodeValue = n;
              return
          }
      }
      t.textContent = n
  }
  var kS = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Kh(t, n, a) {
      var r = n.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === "" ? r ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : r ? t.setProperty(n, a) : typeof a != "number" || a === 0 || kS.has(n) ? n === "float" ? t.cssFloat = a : t[n] = ("" + a).trim() : t[n] = a + "px"
  }
  function Zh(t, n, a) {
      if (n != null && typeof n != "object")
          throw Error(o(62));
      if (t = t.style,
      a != null) {
          for (var r in a)
              !a.hasOwnProperty(r) || n != null && n.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = "");
          for (var c in n)
              r = n[c],
              n.hasOwnProperty(c) && a[c] !== r && Kh(t, c, r)
      } else
          for (var u in n)
              n.hasOwnProperty(u) && Kh(t, u, n[u])
  }
  function sc(t) {
      if (t.indexOf("-") === -1)
          return !1;
      switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
          return !1;
      default:
          return !0
      }
  }
  var PS = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
    , HS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qr(t) {
      return HS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
  }
  function jn() {}
  var rc = null;
  function oc(t) {
      return t = t.target || t.srcElement || window,
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
  }
  var ya = null
    , ga = null;
  function $h(t) {
      var n = fa(t);
      if (n && (t = n.stateNode)) {
          var a = t[ge] || null;
          t: switch (t = n.stateNode,
          n.type) {
          case "input":
              if (ic(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
              n = a.name,
              a.type === "radio" && n != null) {
                  for (a = t; a.parentNode; )
                      a = a.parentNode;
                  for (a = a.querySelectorAll('input[name="' + Ye("" + n) + '"][type="radio"]'),
                  n = 0; n < a.length; n++) {
                      var r = a[n];
                      if (r !== t && r.form === t.form) {
                          var c = r[ge] || null;
                          if (!c)
                              throw Error(o(90));
                          ic(r, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
                      }
                  }
                  for (n = 0; n < a.length; n++)
                      r = a[n],
                      r.form === t.form && Yh(r)
              }
              break t;
          case "textarea":
              Fh(t, a.value, a.defaultValue);
              break t;
          case "select":
              n = a.value,
              n != null && ma(t, !!a.multiple, n, !1)
          }
      }
  }
  var lc = !1;
  function Wh(t, n, a) {
      if (lc)
          return t(n, a);
      lc = !0;
      try {
          var r = t(n);
          return r
      } finally {
          if (lc = !1,
          (ya !== null || ga !== null) && (Ro(),
          ya && (n = ya,
          t = ga,
          ga = ya = null,
          $h(n),
          t)))
              for (n = 0; n < t.length; n++)
                  $h(t[n])
      }
  }
  function vs(t, n) {
      var a = t.stateNode;
      if (a === null)
          return null;
      var r = a[ge] || null;
      if (r === null)
          return null;
      a = r[n];
      t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
          (r = !r.disabled) || (t = t.type,
          r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
          t = !r;
          break t;
      default:
          t = !1
      }
      if (t)
          return null;
      if (a && typeof a != "function")
          throw Error(o(231, n, typeof a));
      return a
  }
  var Rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , cc = !1;
  if (Rn)
      try {
          var xs = {};
          Object.defineProperty(xs, "passive", {
              get: function() {
                  cc = !0
              }
          }),
          window.addEventListener("test", xs, xs),
          window.removeEventListener("test", xs, xs)
      } catch {
          cc = !1
      }
  var In = null
    , uc = null
    , Gr = null;
  function Jh() {
      if (Gr)
          return Gr;
      var t, n = uc, a = n.length, r, c = "value"in In ? In.value : In.textContent, u = c.length;
      for (t = 0; t < a && n[t] === c[t]; t++)
          ;
      var v = a - t;
      for (r = 1; r <= v && n[a - r] === c[u - r]; r++)
          ;
      return Gr = c.slice(t, 1 < r ? 1 - r : void 0)
  }
  function Yr(t) {
      var n = t.keyCode;
      return "charCode"in t ? (t = t.charCode,
      t === 0 && n === 13 && (t = 13)) : t = n,
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
  }
  function Xr() {
      return !0
  }
  function Ih() {
      return !1
  }
  function ve(t) {
      function n(a, r, c, u, v) {
          this._reactName = a,
          this._targetInst = c,
          this.type = r,
          this.nativeEvent = u,
          this.target = v,
          this.currentTarget = null;
          for (var S in t)
              t.hasOwnProperty(S) && (a = t[S],
              this[S] = a ? a(u) : u[S]);
          return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xr : Ih,
          this.isPropagationStopped = Ih,
          this
      }
      return x(n.prototype, {
          preventDefault: function() {
              this.defaultPrevented = !0;
              var a = this.nativeEvent;
              a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
              this.isDefaultPrevented = Xr)
          },
          stopPropagation: function() {
              var a = this.nativeEvent;
              a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
              this.isPropagationStopped = Xr)
          },
          persist: function() {},
          isPersistent: Xr
      }),
      n
  }
  var Vi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
          return t.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
  }, Fr = ve(Vi), bs = x({}, Vi, {
      view: 0,
      detail: 0
  }), qS = ve(bs), fc, dc, Ss, Qr = x({}, bs, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: mc,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
          return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
      },
      movementX: function(t) {
          return "movementX"in t ? t.movementX : (t !== Ss && (Ss && t.type === "mousemove" ? (fc = t.screenX - Ss.screenX,
          dc = t.screenY - Ss.screenY) : dc = fc = 0,
          Ss = t),
          fc)
      },
      movementY: function(t) {
          return "movementY"in t ? t.movementY : dc
      }
  }), tm = ve(Qr), GS = x({}, Qr, {
      dataTransfer: 0
  }), YS = ve(GS), XS = x({}, bs, {
      relatedTarget: 0
  }), hc = ve(XS), FS = x({}, Vi, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
  }), QS = ve(FS), KS = x({}, Vi, {
      clipboardData: function(t) {
          return "clipboardData"in t ? t.clipboardData : window.clipboardData
      }
  }), ZS = ve(KS), $S = x({}, Vi, {
      data: 0
  }), em = ve($S), WS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
  }, JS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
  }, IS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
  };
  function tw(t) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(t) : (t = IS[t]) ? !!n[t] : !1
  }
  function mc() {
      return tw
  }
  var ew = x({}, bs, {
      key: function(t) {
          if (t.key) {
              var n = WS[t.key] || t.key;
              if (n !== "Unidentified")
                  return n
          }
          return t.type === "keypress" ? (t = Yr(t),
          t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? JS[t.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: mc,
      charCode: function(t) {
          return t.type === "keypress" ? Yr(t) : 0
      },
      keyCode: function(t) {
          return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
      },
      which: function(t) {
          return t.type === "keypress" ? Yr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
      }
  })
    , nw = ve(ew)
    , iw = x({}, Qr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
  })
    , nm = ve(iw)
    , aw = x({}, bs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mc
  })
    , sw = ve(aw)
    , rw = x({}, Vi, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
  })
    , ow = ve(rw)
    , lw = x({}, Qr, {
      deltaX: function(t) {
          return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
      },
      deltaY: function(t) {
          return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
  })
    , cw = ve(lw)
    , uw = x({}, Vi, {
      newState: 0,
      oldState: 0
  })
    , fw = ve(uw)
    , dw = [9, 13, 27, 32]
    , pc = Rn && "CompositionEvent"in window
    , ws = null;
  Rn && "documentMode"in document && (ws = document.documentMode);
  var hw = Rn && "TextEvent"in window && !ws
    , im = Rn && (!pc || ws && 8 < ws && 11 >= ws)
    , am = " "
    , sm = !1;
  function rm(t, n) {
      switch (t) {
      case "keyup":
          return dw.indexOf(n.keyCode) !== -1;
      case "keydown":
          return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
          return !0;
      default:
          return !1
      }
  }
  function om(t) {
      return t = t.detail,
      typeof t == "object" && "data"in t ? t.data : null
  }
  var va = !1;
  function mw(t, n) {
      switch (t) {
      case "compositionend":
          return om(n);
      case "keypress":
          return n.which !== 32 ? null : (sm = !0,
          am);
      case "textInput":
          return t = n.data,
          t === am && sm ? null : t;
      default:
          return null
      }
  }
  function pw(t, n) {
      if (va)
          return t === "compositionend" || !pc && rm(t, n) ? (t = Jh(),
          Gr = uc = In = null,
          va = !1,
          t) : null;
      switch (t) {
      case "paste":
          return null;
      case "keypress":
          if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
              if (n.char && 1 < n.char.length)
                  return n.char;
              if (n.which)
                  return String.fromCharCode(n.which)
          }
          return null;
      case "compositionend":
          return im && n.locale !== "ko" ? null : n.data;
      default:
          return null
      }
  }
  var yw = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
  };
  function lm(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n === "input" ? !!yw[t.type] : n === "textarea"
  }
  function cm(t, n, a, r) {
      ya ? ga ? ga.push(r) : ga = [r] : ya = r,
      n = Bo(n, "onChange"),
      0 < n.length && (a = new Fr("onChange","change",null,a,r),
      t.push({
          event: a,
          listeners: n
      }))
  }
  var Ts = null
    , Es = null;
  function gw(t) {
      Xy(t, 0)
  }
  function Kr(t) {
      var n = gs(t);
      if (Yh(n))
          return t
  }
  function um(t, n) {
      if (t === "change")
          return n
  }
  var fm = !1;
  if (Rn) {
      var yc;
      if (Rn) {
          var gc = "oninput"in document;
          if (!gc) {
              var dm = document.createElement("div");
              dm.setAttribute("oninput", "return;"),
              gc = typeof dm.oninput == "function"
          }
          yc = gc
      } else
          yc = !1;
      fm = yc && (!document.documentMode || 9 < document.documentMode)
  }
  function hm() {
      Ts && (Ts.detachEvent("onpropertychange", mm),
      Es = Ts = null)
  }
  function mm(t) {
      if (t.propertyName === "value" && Kr(Es)) {
          var n = [];
          cm(n, Es, t, oc(t)),
          Wh(gw, n)
      }
  }
  function vw(t, n, a) {
      t === "focusin" ? (hm(),
      Ts = n,
      Es = a,
      Ts.attachEvent("onpropertychange", mm)) : t === "focusout" && hm()
  }
  function xw(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
          return Kr(Es)
  }
  function bw(t, n) {
      if (t === "click")
          return Kr(n)
  }
  function Sw(t, n) {
      if (t === "input" || t === "change")
          return Kr(n)
  }
  function ww(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
  }
  var Re = typeof Object.is == "function" ? Object.is : ww;
  function Cs(t, n) {
      if (Re(t, n))
          return !0;
      if (typeof t != "object" || t === null || typeof n != "object" || n === null)
          return !1;
      var a = Object.keys(t)
        , r = Object.keys(n);
      if (a.length !== r.length)
          return !1;
      for (r = 0; r < a.length; r++) {
          var c = a[r];
          if (!Kl.call(n, c) || !Re(t[c], n[c]))
              return !1
      }
      return !0
  }
  function pm(t) {
      for (; t && t.firstChild; )
          t = t.firstChild;
      return t
  }
  function ym(t, n) {
      var a = pm(t);
      t = 0;
      for (var r; a; ) {
          if (a.nodeType === 3) {
              if (r = t + a.textContent.length,
              t <= n && r >= n)
                  return {
                      node: a,
                      offset: n - t
                  };
              t = r
          }
          t: {
              for (; a; ) {
                  if (a.nextSibling) {
                      a = a.nextSibling;
                      break t
                  }
                  a = a.parentNode
              }
              a = void 0
          }
          a = pm(a)
      }
  }
  function gm(t, n) {
      return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? gm(t, n.parentNode) : "contains"in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
  }
  function vm(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var n = Hr(t.document); n instanceof t.HTMLIFrameElement; ) {
          try {
              var a = typeof n.contentWindow.location.href == "string"
          } catch {
              a = !1
          }
          if (a)
              t = n.contentWindow;
          else
              break;
          n = Hr(t.document)
      }
      return n
  }
  function vc(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
  }
  var Tw = Rn && "documentMode"in document && 11 >= document.documentMode
    , xa = null
    , xc = null
    , As = null
    , bc = !1;
  function xm(t, n, a) {
      var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      bc || xa == null || xa !== Hr(r) || (r = xa,
      "selectionStart"in r && vc(r) ? r = {
          start: r.selectionStart,
          end: r.selectionEnd
      } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
      r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
      }),
      As && Cs(As, r) || (As = r,
      r = Bo(xc, "onSelect"),
      0 < r.length && (n = new Fr("onSelect","select",null,n,a),
      t.push({
          event: n,
          listeners: r
      }),
      n.target = xa)))
  }
  function Bi(t, n) {
      var a = {};
      return a[t.toLowerCase()] = n.toLowerCase(),
      a["Webkit" + t] = "webkit" + n,
      a["Moz" + t] = "moz" + n,
      a
  }
  var ba = {
      animationend: Bi("Animation", "AnimationEnd"),
      animationiteration: Bi("Animation", "AnimationIteration"),
      animationstart: Bi("Animation", "AnimationStart"),
      transitionrun: Bi("Transition", "TransitionRun"),
      transitionstart: Bi("Transition", "TransitionStart"),
      transitioncancel: Bi("Transition", "TransitionCancel"),
      transitionend: Bi("Transition", "TransitionEnd")
  }
    , Sc = {}
    , bm = {};
  Rn && (bm = document.createElement("div").style,
  "AnimationEvent"in window || (delete ba.animationend.animation,
  delete ba.animationiteration.animation,
  delete ba.animationstart.animation),
  "TransitionEvent"in window || delete ba.transitionend.transition);
  function Ui(t) {
      if (Sc[t])
          return Sc[t];
      if (!ba[t])
          return t;
      var n = ba[t], a;
      for (a in n)
          if (n.hasOwnProperty(a) && a in bm)
              return Sc[t] = n[a];
      return t
  }
  var Sm = Ui("animationend")
    , wm = Ui("animationiteration")
    , Tm = Ui("animationstart")
    , Ew = Ui("transitionrun")
    , Cw = Ui("transitionstart")
    , Aw = Ui("transitioncancel")
    , Em = Ui("transitionend")
    , Cm = new Map
    , wc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  wc.push("scrollEnd");
  function rn(t, n) {
      Cm.set(t, n),
      Li(n, [t])
  }
  var Zr = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var n = new window.ErrorEvent("error",{
              bubbles: !0,
              cancelable: !0,
              message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
              error: t
          });
          if (!window.dispatchEvent(n))
              return
      } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", t);
          return
      }
      console.error(t)
  }
    , Xe = []
    , Sa = 0
    , Tc = 0;
  function $r() {
      for (var t = Sa, n = Tc = Sa = 0; n < t; ) {
          var a = Xe[n];
          Xe[n++] = null;
          var r = Xe[n];
          Xe[n++] = null;
          var c = Xe[n];
          Xe[n++] = null;
          var u = Xe[n];
          if (Xe[n++] = null,
          r !== null && c !== null) {
              var v = r.pending;
              v === null ? c.next = c : (c.next = v.next,
              v.next = c),
              r.pending = c
          }
          u !== 0 && Am(a, c, u)
      }
  }
  function Wr(t, n, a, r) {
      Xe[Sa++] = t,
      Xe[Sa++] = n,
      Xe[Sa++] = a,
      Xe[Sa++] = r,
      Tc |= r,
      t.lanes |= r,
      t = t.alternate,
      t !== null && (t.lanes |= r)
  }
  function Ec(t, n, a, r) {
      return Wr(t, n, a, r),
      Jr(t)
  }
  function ki(t, n) {
      return Wr(t, null, null, n),
      Jr(t)
  }
  function Am(t, n, a) {
      t.lanes |= a;
      var r = t.alternate;
      r !== null && (r.lanes |= a);
      for (var c = !1, u = t.return; u !== null; )
          u.childLanes |= a,
          r = u.alternate,
          r !== null && (r.childLanes |= a),
          u.tag === 22 && (t = u.stateNode,
          t === null || t._visibility & 1 || (c = !0)),
          t = u,
          u = u.return;
      return t.tag === 3 ? (u = t.stateNode,
      c && n !== null && (c = 31 - je(a),
      t = u.hiddenUpdates,
      r = t[c],
      r === null ? t[c] = [n] : r.push(n),
      n.lane = a | 536870912),
      u) : null
  }
  function Jr(t) {
      if (50 < Ks)
          throw Ks = 0,
          _u = null,
          Error(o(185));
      for (var n = t.return; n !== null; )
          t = n,
          n = t.return;
      return t.tag === 3 ? t.stateNode : null
  }
  var wa = {};
  function Nw(t, n, a, r) {
      this.tag = t,
      this.key = a,
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
      this.index = 0,
      this.refCleanup = this.ref = null,
      this.pendingProps = n,
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
      this.mode = r,
      this.subtreeFlags = this.flags = 0,
      this.deletions = null,
      this.childLanes = this.lanes = 0,
      this.alternate = null
  }
  function Oe(t, n, a, r) {
      return new Nw(t,n,a,r)
  }
  function Cc(t) {
      return t = t.prototype,
      !(!t || !t.isReactComponent)
  }
  function On(t, n) {
      var a = t.alternate;
      return a === null ? (a = Oe(t.tag, n, t.key, t.mode),
      a.elementType = t.elementType,
      a.type = t.type,
      a.stateNode = t.stateNode,
      a.alternate = t,
      t.alternate = a) : (a.pendingProps = n,
      a.type = t.type,
      a.flags = 0,
      a.subtreeFlags = 0,
      a.deletions = null),
      a.flags = t.flags & 65011712,
      a.childLanes = t.childLanes,
      a.lanes = t.lanes,
      a.child = t.child,
      a.memoizedProps = t.memoizedProps,
      a.memoizedState = t.memoizedState,
      a.updateQueue = t.updateQueue,
      n = t.dependencies,
      a.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
      },
      a.sibling = t.sibling,
      a.index = t.index,
      a.ref = t.ref,
      a.refCleanup = t.refCleanup,
      a
  }
  function Nm(t, n) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0,
      t.lanes = n,
      t.child = null,
      t.subtreeFlags = 0,
      t.memoizedProps = null,
      t.memoizedState = null,
      t.updateQueue = null,
      t.dependencies = null,
      t.stateNode = null) : (t.childLanes = a.childLanes,
      t.lanes = a.lanes,
      t.child = a.child,
      t.subtreeFlags = 0,
      t.deletions = null,
      t.memoizedProps = a.memoizedProps,
      t.memoizedState = a.memoizedState,
      t.updateQueue = a.updateQueue,
      t.type = a.type,
      n = a.dependencies,
      t.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
      }),
      t
  }
  function Ir(t, n, a, r, c, u) {
      var v = 0;
      if (r = t,
      typeof t == "function")
          Cc(t) && (v = 1);
      else if (typeof t == "string")
          v = DT(t, a, W.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
          t: switch (t) {
          case I:
              return t = Oe(31, a, n, c),
              t.elementType = I,
              t.lanes = u,
              t;
          case E:
              return Pi(a.children, c, u, n);
          case N:
              v = 8,
              c |= 24;
              break;
          case O:
              return t = Oe(12, a, n, c | 2),
              t.elementType = O,
              t.lanes = u,
              t;
          case G:
              return t = Oe(13, a, n, c),
              t.elementType = G,
              t.lanes = u,
              t;
          case Z:
              return t = Oe(19, a, n, c),
              t.elementType = Z,
              t.lanes = u,
              t;
          default:
              if (typeof t == "object" && t !== null)
                  switch (t.$$typeof) {
                  case D:
                      v = 10;
                      break t;
                  case z:
                      v = 9;
                      break t;
                  case q:
                      v = 11;
                      break t;
                  case k:
                      v = 14;
                      break t;
                  case H:
                      v = 16,
                      r = null;
                      break t
                  }
              v = 29,
              a = Error(o(130, t === null ? "null" : typeof t, "")),
              r = null
          }
      return n = Oe(v, a, n, c),
      n.elementType = t,
      n.type = r,
      n.lanes = u,
      n
  }
  function Pi(t, n, a, r) {
      return t = Oe(7, t, r, n),
      t.lanes = a,
      t
  }
  function Ac(t, n, a) {
      return t = Oe(6, t, null, n),
      t.lanes = a,
      t
  }
  function Mm(t) {
      var n = Oe(18, null, null, 0);
      return n.stateNode = t,
      n
  }
  function Nc(t, n, a) {
      return n = Oe(4, t.children !== null ? t.children : [], t.key, n),
      n.lanes = a,
      n.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation
      },
      n
  }
  var jm = new WeakMap;
  function Fe(t, n) {
      if (typeof t == "object" && t !== null) {
          var a = jm.get(t);
          return a !== void 0 ? a : (n = {
              value: t,
              source: n,
              stack: Mh(n)
          },
          jm.set(t, n),
          n)
      }
      return {
          value: t,
          source: n,
          stack: Mh(n)
      }
  }
  var Ta = []
    , Ea = 0
    , to = null
    , Ns = 0
    , Qe = []
    , Ke = 0
    , ti = null
    , yn = 1
    , gn = "";
  function Dn(t, n) {
      Ta[Ea++] = Ns,
      Ta[Ea++] = to,
      to = t,
      Ns = n
  }
  function Rm(t, n, a) {
      Qe[Ke++] = yn,
      Qe[Ke++] = gn,
      Qe[Ke++] = ti,
      ti = t;
      var r = yn;
      t = gn;
      var c = 32 - je(r) - 1;
      r &= ~(1 << c),
      a += 1;
      var u = 32 - je(n) + c;
      if (30 < u) {
          var v = c - c % 5;
          u = (r & (1 << v) - 1).toString(32),
          r >>= v,
          c -= v,
          yn = 1 << 32 - je(n) + c | a << c | r,
          gn = u + t
      } else
          yn = 1 << u | a << c | r,
          gn = t
  }
  function Mc(t) {
      t.return !== null && (Dn(t, 1),
      Rm(t, 1, 0))
  }
  function jc(t) {
      for (; t === to; )
          to = Ta[--Ea],
          Ta[Ea] = null,
          Ns = Ta[--Ea],
          Ta[Ea] = null;
      for (; t === ti; )
          ti = Qe[--Ke],
          Qe[Ke] = null,
          gn = Qe[--Ke],
          Qe[Ke] = null,
          yn = Qe[--Ke],
          Qe[Ke] = null
  }
  function Om(t, n) {
      Qe[Ke++] = yn,
      Qe[Ke++] = gn,
      Qe[Ke++] = ti,
      yn = n.id,
      gn = n.overflow,
      ti = t
  }
  var oe = null
    , Ut = null
    , Ct = !1
    , ei = null
    , Ze = !1
    , Rc = Error(o(519));
  function ni(t) {
      var n = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ms(Fe(n, t)),
      Rc
  }
  function Dm(t) {
      var n = t.stateNode
        , a = t.type
        , r = t.memoizedProps;
      switch (n[re] = t,
      n[ge] = r,
      a) {
      case "dialog":
          St("cancel", n),
          St("close", n);
          break;
      case "iframe":
      case "object":
      case "embed":
          St("load", n);
          break;
      case "video":
      case "audio":
          for (a = 0; a < $s.length; a++)
              St($s[a], n);
          break;
      case "source":
          St("error", n);
          break;
      case "img":
      case "image":
      case "link":
          St("error", n),
          St("load", n);
          break;
      case "details":
          St("toggle", n);
          break;
      case "input":
          St("invalid", n),
          Xh(n, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
          break;
      case "select":
          St("invalid", n);
          break;
      case "textarea":
          St("invalid", n),
          Qh(n, r.value, r.defaultValue, r.children)
      }
      a = r.children,
      typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || r.suppressHydrationWarning === !0 || Zy(n.textContent, a) ? (r.popover != null && (St("beforetoggle", n),
      St("toggle", n)),
      r.onScroll != null && St("scroll", n),
      r.onScrollEnd != null && St("scrollend", n),
      r.onClick != null && (n.onclick = jn),
      n = !0) : n = !1,
      n || ni(t, !0)
  }
  function _m(t) {
      for (oe = t.return; oe; )
          switch (oe.tag) {
          case 5:
          case 31:
          case 13:
              Ze = !1;
              return;
          case 27:
          case 3:
              Ze = !0;
              return;
          default:
              oe = oe.return
          }
  }
  function Ca(t) {
      if (t !== oe)
          return !1;
      if (!Ct)
          return _m(t),
          Ct = !0,
          !1;
      var n = t.tag, a;
      if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = t.type,
      a = !(a !== "form" && a !== "button") || Ku(t.type, t.memoizedProps)),
      a = !a),
      a && Ut && ni(t),
      _m(t),
      n === 13) {
          if (t = t.memoizedState,
          t = t !== null ? t.dehydrated : null,
          !t)
              throw Error(o(317));
          Ut = ag(t)
      } else if (n === 31) {
          if (t = t.memoizedState,
          t = t !== null ? t.dehydrated : null,
          !t)
              throw Error(o(317));
          Ut = ag(t)
      } else
          n === 27 ? (n = Ut,
          yi(t.type) ? (t = Iu,
          Iu = null,
          Ut = t) : Ut = n) : Ut = oe ? We(t.stateNode.nextSibling) : null;
      return !0
  }
  function Hi() {
      Ut = oe = null,
      Ct = !1
  }
  function Oc() {
      var t = ei;
      return t !== null && (we === null ? we = t : we.push.apply(we, t),
      ei = null),
      t
  }
  function Ms(t) {
      ei === null ? ei = [t] : ei.push(t)
  }
  var Dc = M(null)
    , qi = null
    , _n = null;
  function ii(t, n, a) {
      $(Dc, n._currentValue),
      n._currentValue = a
  }
  function zn(t) {
      t._currentValue = Dc.current,
      F(Dc)
  }
  function _c(t, n, a) {
      for (; t !== null; ) {
          var r = t.alternate;
          if ((t.childLanes & n) !== n ? (t.childLanes |= n,
          r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
          t === a)
              break;
          t = t.return
      }
  }
  function zc(t, n, a, r) {
      var c = t.child;
      for (c !== null && (c.return = t); c !== null; ) {
          var u = c.dependencies;
          if (u !== null) {
              var v = c.child;
              u = u.firstContext;
              t: for (; u !== null; ) {
                  var S = u;
                  u = c;
                  for (var A = 0; A < n.length; A++)
                      if (S.context === n[A]) {
                          u.lanes |= a,
                          S = u.alternate,
                          S !== null && (S.lanes |= a),
                          _c(u.return, a, t),
                          r || (v = null);
                          break t
                      }
                  u = S.next
              }
          } else if (c.tag === 18) {
              if (v = c.return,
              v === null)
                  throw Error(o(341));
              v.lanes |= a,
              u = v.alternate,
              u !== null && (u.lanes |= a),
              _c(v, a, t),
              v = null
          } else
              v = c.child;
          if (v !== null)
              v.return = c;
          else
              for (v = c; v !== null; ) {
                  if (v === t) {
                      v = null;
                      break
                  }
                  if (c = v.sibling,
                  c !== null) {
                      c.return = v.return,
                      v = c;
                      break
                  }
                  v = v.return
              }
          c = v
      }
  }
  function Aa(t, n, a, r) {
      t = null;
      for (var c = n, u = !1; c !== null; ) {
          if (!u) {
              if ((c.flags & 524288) !== 0)
                  u = !0;
              else if ((c.flags & 262144) !== 0)
                  break
          }
          if (c.tag === 10) {
              var v = c.alternate;
              if (v === null)
                  throw Error(o(387));
              if (v = v.memoizedProps,
              v !== null) {
                  var S = c.type;
                  Re(c.pendingProps.value, v.value) || (t !== null ? t.push(S) : t = [S])
              }
          } else if (c === rt.current) {
              if (v = c.alternate,
              v === null)
                  throw Error(o(387));
              v.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(er) : t = [er])
          }
          c = c.return
      }
      t !== null && zc(n, t, a, r),
      n.flags |= 262144
  }
  function eo(t) {
      for (t = t.firstContext; t !== null; ) {
          if (!Re(t.context._currentValue, t.memoizedValue))
              return !0;
          t = t.next
      }
      return !1
  }
  function Gi(t) {
      qi = t,
      _n = null,
      t = t.dependencies,
      t !== null && (t.firstContext = null)
  }
  function le(t) {
      return zm(qi, t)
  }
  function no(t, n) {
      return qi === null && Gi(t),
      zm(t, n)
  }
  function zm(t, n) {
      var a = n._currentValue;
      if (n = {
          context: n,
          memoizedValue: a,
          next: null
      },
      _n === null) {
          if (t === null)
              throw Error(o(308));
          _n = n,
          t.dependencies = {
              lanes: 0,
              firstContext: n
          },
          t.flags |= 524288
      } else
          _n = _n.next = n;
      return a
  }
  var Mw = typeof AbortController < "u" ? AbortController : function() {
      var t = []
        , n = this.signal = {
          aborted: !1,
          addEventListener: function(a, r) {
              t.push(r)
          }
      };
      this.abort = function() {
          n.aborted = !0,
          t.forEach(function(a) {
              return a()
          })
      }
  }
    , jw = e.unstable_scheduleCallback
    , Rw = e.unstable_NormalPriority
    , $t = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
  };
  function Lc() {
      return {
          controller: new Mw,
          data: new Map,
          refCount: 0
      }
  }
  function js(t) {
      t.refCount--,
      t.refCount === 0 && jw(Rw, function() {
          t.controller.abort()
      })
  }
  var Rs = null
    , Vc = 0
    , Na = 0
    , Ma = null;
  function Ow(t, n) {
      if (Rs === null) {
          var a = Rs = [];
          Vc = 0,
          Na = ku(),
          Ma = {
              status: "pending",
              value: void 0,
              then: function(r) {
                  a.push(r)
              }
          }
      }
      return Vc++,
      n.then(Lm, Lm),
      n
  }
  function Lm() {
      if (--Vc === 0 && Rs !== null) {
          Ma !== null && (Ma.status = "fulfilled");
          var t = Rs;
          Rs = null,
          Na = 0,
          Ma = null;
          for (var n = 0; n < t.length; n++)
              (0,
              t[n])()
      }
  }
  function Dw(t, n) {
      var a = []
        , r = {
          status: "pending",
          value: null,
          reason: null,
          then: function(c) {
              a.push(c)
          }
      };
      return t.then(function() {
          r.status = "fulfilled",
          r.value = n;
          for (var c = 0; c < a.length; c++)
              (0,
              a[c])(n)
      }, function(c) {
          for (r.status = "rejected",
          r.reason = c,
          c = 0; c < a.length; c++)
              (0,
              a[c])(void 0)
      }),
      r
  }
  var Vm = _.S;
  _.S = function(t, n) {
      xy = Ne(),
      typeof n == "object" && n !== null && typeof n.then == "function" && Ow(t, n),
      Vm !== null && Vm(t, n)
  }
  ;
  var Yi = M(null);
  function Bc() {
      var t = Yi.current;
      return t !== null ? t : Bt.pooledCache
  }
  function io(t, n) {
      n === null ? $(Yi, Yi.current) : $(Yi, n.pool)
  }
  function Bm() {
      var t = Bc();
      return t === null ? null : {
          parent: $t._currentValue,
          pool: t
      }
  }
  var ja = Error(o(460))
    , Uc = Error(o(474))
    , ao = Error(o(542))
    , so = {
      then: function() {}
  };
  function Um(t) {
      return t = t.status,
      t === "fulfilled" || t === "rejected"
  }
  function km(t, n, a) {
      switch (a = t[a],
      a === void 0 ? t.push(n) : a !== n && (n.then(jn, jn),
      n = a),
      n.status) {
      case "fulfilled":
          return n.value;
      case "rejected":
          throw t = n.reason,
          Hm(t),
          t;
      default:
          if (typeof n.status == "string")
              n.then(jn, jn);
          else {
              if (t = Bt,
              t !== null && 100 < t.shellSuspendCounter)
                  throw Error(o(482));
              t = n,
              t.status = "pending",
              t.then(function(r) {
                  if (n.status === "pending") {
                      var c = n;
                      c.status = "fulfilled",
                      c.value = r
                  }
              }, function(r) {
                  if (n.status === "pending") {
                      var c = n;
                      c.status = "rejected",
                      c.reason = r
                  }
              })
          }
          switch (n.status) {
          case "fulfilled":
              return n.value;
          case "rejected":
              throw t = n.reason,
              Hm(t),
              t
          }
          throw Fi = n,
          ja
      }
  }
  function Xi(t) {
      try {
          var n = t._init;
          return n(t._payload)
      } catch (a) {
          throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Fi = a,
          ja) : a
      }
  }
  var Fi = null;
  function Pm() {
      if (Fi === null)
          throw Error(o(459));
      var t = Fi;
      return Fi = null,
      t
  }
  function Hm(t) {
      if (t === ja || t === ao)
          throw Error(o(483))
  }
  var Ra = null
    , Os = 0;
  function ro(t) {
      var n = Os;
      return Os += 1,
      Ra === null && (Ra = []),
      km(Ra, t, n)
  }
  function Ds(t, n) {
      n = n.props.ref,
      t.ref = n !== void 0 ? n : null
  }
  function oo(t, n) {
      throw n.$$typeof === b ? Error(o(525)) : (t = Object.prototype.toString.call(n),
      Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)))
  }
  function qm(t) {
      function n(R, j) {
          if (t) {
              var L = R.deletions;
              L === null ? (R.deletions = [j],
              R.flags |= 16) : L.push(j)
          }
      }
      function a(R, j) {
          if (!t)
              return null;
          for (; j !== null; )
              n(R, j),
              j = j.sibling;
          return null
      }
      function r(R) {
          for (var j = new Map; R !== null; )
              R.key !== null ? j.set(R.key, R) : j.set(R.index, R),
              R = R.sibling;
          return j
      }
      function c(R, j) {
          return R = On(R, j),
          R.index = 0,
          R.sibling = null,
          R
      }
      function u(R, j, L) {
          return R.index = L,
          t ? (L = R.alternate,
          L !== null ? (L = L.index,
          L < j ? (R.flags |= 67108866,
          j) : L) : (R.flags |= 67108866,
          j)) : (R.flags |= 1048576,
          j)
      }
      function v(R) {
          return t && R.alternate === null && (R.flags |= 67108866),
          R
      }
      function S(R, j, L, Q) {
          return j === null || j.tag !== 6 ? (j = Ac(L, R.mode, Q),
          j.return = R,
          j) : (j = c(j, L),
          j.return = R,
          j)
      }
      function A(R, j, L, Q) {
          var ot = L.type;
          return ot === E ? X(R, j, L.props.children, Q, L.key) : j !== null && (j.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === H && Xi(ot) === j.type) ? (j = c(j, L.props),
          Ds(j, L),
          j.return = R,
          j) : (j = Ir(L.type, L.key, L.props, null, R.mode, Q),
          Ds(j, L),
          j.return = R,
          j)
      }
      function V(R, j, L, Q) {
          return j === null || j.tag !== 4 || j.stateNode.containerInfo !== L.containerInfo || j.stateNode.implementation !== L.implementation ? (j = Nc(L, R.mode, Q),
          j.return = R,
          j) : (j = c(j, L.children || []),
          j.return = R,
          j)
      }
      function X(R, j, L, Q, ot) {
          return j === null || j.tag !== 7 ? (j = Pi(L, R.mode, Q, ot),
          j.return = R,
          j) : (j = c(j, L),
          j.return = R,
          j)
      }
      function K(R, j, L) {
          if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
              return j = Ac("" + j, R.mode, L),
              j.return = R,
              j;
          if (typeof j == "object" && j !== null) {
              switch (j.$$typeof) {
              case T:
                  return L = Ir(j.type, j.key, j.props, null, R.mode, L),
                  Ds(L, j),
                  L.return = R,
                  L;
              case C:
                  return j = Nc(j, R.mode, L),
                  j.return = R,
                  j;
              case H:
                  return j = Xi(j),
                  K(R, j, L)
              }
              if (ht(j) || pt(j))
                  return j = Pi(j, R.mode, L, null),
                  j.return = R,
                  j;
              if (typeof j.then == "function")
                  return K(R, ro(j), L);
              if (j.$$typeof === D)
                  return K(R, no(R, j), L);
              oo(R, j)
          }
          return null
      }
      function B(R, j, L, Q) {
          var ot = j !== null ? j.key : null;
          if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
              return ot !== null ? null : S(R, j, "" + L, Q);
          if (typeof L == "object" && L !== null) {
              switch (L.$$typeof) {
              case T:
                  return L.key === ot ? A(R, j, L, Q) : null;
              case C:
                  return L.key === ot ? V(R, j, L, Q) : null;
              case H:
                  return L = Xi(L),
                  B(R, j, L, Q)
              }
              if (ht(L) || pt(L))
                  return ot !== null ? null : X(R, j, L, Q, null);
              if (typeof L.then == "function")
                  return B(R, j, ro(L), Q);
              if (L.$$typeof === D)
                  return B(R, j, no(R, L), Q);
              oo(R, L)
          }
          return null
      }
      function P(R, j, L, Q, ot) {
          if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
              return R = R.get(L) || null,
              S(j, R, "" + Q, ot);
          if (typeof Q == "object" && Q !== null) {
              switch (Q.$$typeof) {
              case T:
                  return R = R.get(Q.key === null ? L : Q.key) || null,
                  A(j, R, Q, ot);
              case C:
                  return R = R.get(Q.key === null ? L : Q.key) || null,
                  V(j, R, Q, ot);
              case H:
                  return Q = Xi(Q),
                  P(R, j, L, Q, ot)
              }
              if (ht(Q) || pt(Q))
                  return R = R.get(L) || null,
                  X(j, R, Q, ot, null);
              if (typeof Q.then == "function")
                  return P(R, j, L, ro(Q), ot);
              if (Q.$$typeof === D)
                  return P(R, j, L, no(j, Q), ot);
              oo(j, Q)
          }
          return null
      }
      function tt(R, j, L, Q) {
          for (var ot = null, Nt = null, at = j, vt = j = 0, Tt = null; at !== null && vt < L.length; vt++) {
              at.index > vt ? (Tt = at,
              at = null) : Tt = at.sibling;
              var Mt = B(R, at, L[vt], Q);
              if (Mt === null) {
                  at === null && (at = Tt);
                  break
              }
              t && at && Mt.alternate === null && n(R, at),
              j = u(Mt, j, vt),
              Nt === null ? ot = Mt : Nt.sibling = Mt,
              Nt = Mt,
              at = Tt
          }
          if (vt === L.length)
              return a(R, at),
              Ct && Dn(R, vt),
              ot;
          if (at === null) {
              for (; vt < L.length; vt++)
                  at = K(R, L[vt], Q),
                  at !== null && (j = u(at, j, vt),
                  Nt === null ? ot = at : Nt.sibling = at,
                  Nt = at);
              return Ct && Dn(R, vt),
              ot
          }
          for (at = r(at); vt < L.length; vt++)
              Tt = P(at, R, vt, L[vt], Q),
              Tt !== null && (t && Tt.alternate !== null && at.delete(Tt.key === null ? vt : Tt.key),
              j = u(Tt, j, vt),
              Nt === null ? ot = Tt : Nt.sibling = Tt,
              Nt = Tt);
          return t && at.forEach(function(Si) {
              return n(R, Si)
          }),
          Ct && Dn(R, vt),
          ot
      }
      function lt(R, j, L, Q) {
          if (L == null)
              throw Error(o(151));
          for (var ot = null, Nt = null, at = j, vt = j = 0, Tt = null, Mt = L.next(); at !== null && !Mt.done; vt++,
          Mt = L.next()) {
              at.index > vt ? (Tt = at,
              at = null) : Tt = at.sibling;
              var Si = B(R, at, Mt.value, Q);
              if (Si === null) {
                  at === null && (at = Tt);
                  break
              }
              t && at && Si.alternate === null && n(R, at),
              j = u(Si, j, vt),
              Nt === null ? ot = Si : Nt.sibling = Si,
              Nt = Si,
              at = Tt
          }
          if (Mt.done)
              return a(R, at),
              Ct && Dn(R, vt),
              ot;
          if (at === null) {
              for (; !Mt.done; vt++,
              Mt = L.next())
                  Mt = K(R, Mt.value, Q),
                  Mt !== null && (j = u(Mt, j, vt),
                  Nt === null ? ot = Mt : Nt.sibling = Mt,
                  Nt = Mt);
              return Ct && Dn(R, vt),
              ot
          }
          for (at = r(at); !Mt.done; vt++,
          Mt = L.next())
              Mt = P(at, R, vt, Mt.value, Q),
              Mt !== null && (t && Mt.alternate !== null && at.delete(Mt.key === null ? vt : Mt.key),
              j = u(Mt, j, vt),
              Nt === null ? ot = Mt : Nt.sibling = Mt,
              Nt = Mt);
          return t && at.forEach(function(GT) {
              return n(R, GT)
          }),
          Ct && Dn(R, vt),
          ot
      }
      function Vt(R, j, L, Q) {
          if (typeof L == "object" && L !== null && L.type === E && L.key === null && (L = L.props.children),
          typeof L == "object" && L !== null) {
              switch (L.$$typeof) {
              case T:
                  t: {
                      for (var ot = L.key; j !== null; ) {
                          if (j.key === ot) {
                              if (ot = L.type,
                              ot === E) {
                                  if (j.tag === 7) {
                                      a(R, j.sibling),
                                      Q = c(j, L.props.children),
                                      Q.return = R,
                                      R = Q;
                                      break t
                                  }
                              } else if (j.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === H && Xi(ot) === j.type) {
                                  a(R, j.sibling),
                                  Q = c(j, L.props),
                                  Ds(Q, L),
                                  Q.return = R,
                                  R = Q;
                                  break t
                              }
                              a(R, j);
                              break
                          } else
                              n(R, j);
                          j = j.sibling
                      }
                      L.type === E ? (Q = Pi(L.props.children, R.mode, Q, L.key),
                      Q.return = R,
                      R = Q) : (Q = Ir(L.type, L.key, L.props, null, R.mode, Q),
                      Ds(Q, L),
                      Q.return = R,
                      R = Q)
                  }
                  return v(R);
              case C:
                  t: {
                      for (ot = L.key; j !== null; ) {
                          if (j.key === ot)
                              if (j.tag === 4 && j.stateNode.containerInfo === L.containerInfo && j.stateNode.implementation === L.implementation) {
                                  a(R, j.sibling),
                                  Q = c(j, L.children || []),
                                  Q.return = R,
                                  R = Q;
                                  break t
                              } else {
                                  a(R, j);
                                  break
                              }
                          else
                              n(R, j);
                          j = j.sibling
                      }
                      Q = Nc(L, R.mode, Q),
                      Q.return = R,
                      R = Q
                  }
                  return v(R);
              case H:
                  return L = Xi(L),
                  Vt(R, j, L, Q)
              }
              if (ht(L))
                  return tt(R, j, L, Q);
              if (pt(L)) {
                  if (ot = pt(L),
                  typeof ot != "function")
                      throw Error(o(150));
                  return L = ot.call(L),
                  lt(R, j, L, Q)
              }
              if (typeof L.then == "function")
                  return Vt(R, j, ro(L), Q);
              if (L.$$typeof === D)
                  return Vt(R, j, no(R, L), Q);
              oo(R, L)
          }
          return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L,
          j !== null && j.tag === 6 ? (a(R, j.sibling),
          Q = c(j, L),
          Q.return = R,
          R = Q) : (a(R, j),
          Q = Ac(L, R.mode, Q),
          Q.return = R,
          R = Q),
          v(R)) : a(R, j)
      }
      return function(R, j, L, Q) {
          try {
              Os = 0;
              var ot = Vt(R, j, L, Q);
              return Ra = null,
              ot
          } catch (at) {
              if (at === ja || at === ao)
                  throw at;
              var Nt = Oe(29, at, null, R.mode);
              return Nt.lanes = Q,
              Nt.return = R,
              Nt
          } finally {}
      }
  }
  var Qi = qm(!0)
    , Gm = qm(!1)
    , ai = !1;
  function kc(t) {
      t.updateQueue = {
          baseState: t.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
              pending: null,
              lanes: 0,
              hiddenCallbacks: null
          },
          callbacks: null
      }
  }
  function Pc(t, n) {
      t = t.updateQueue,
      n.updateQueue === t && (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null
      })
  }
  function si(t) {
      return {
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
      }
  }
  function ri(t, n, a) {
      var r = t.updateQueue;
      if (r === null)
          return null;
      if (r = r.shared,
      (Rt & 2) !== 0) {
          var c = r.pending;
          return c === null ? n.next = n : (n.next = c.next,
          c.next = n),
          r.pending = n,
          n = Jr(t),
          Am(t, null, a),
          n
      }
      return Wr(t, r, n, a),
      Jr(t)
  }
  function _s(t, n, a) {
      if (n = n.updateQueue,
      n !== null && (n = n.shared,
      (a & 4194048) !== 0)) {
          var r = n.lanes;
          r &= t.pendingLanes,
          a |= r,
          n.lanes = a,
          zh(t, a)
      }
  }
  function Hc(t, n) {
      var a = t.updateQueue
        , r = t.alternate;
      if (r !== null && (r = r.updateQueue,
      a === r)) {
          var c = null
            , u = null;
          if (a = a.firstBaseUpdate,
          a !== null) {
              do {
                  var v = {
                      lane: a.lane,
                      tag: a.tag,
                      payload: a.payload,
                      callback: null,
                      next: null
                  };
                  u === null ? c = u = v : u = u.next = v,
                  a = a.next
              } while (a !== null);
              u === null ? c = u = n : u = u.next = n
          } else
              c = u = n;
          a = {
              baseState: r.baseState,
              firstBaseUpdate: c,
              lastBaseUpdate: u,
              shared: r.shared,
              callbacks: r.callbacks
          },
          t.updateQueue = a;
          return
      }
      t = a.lastBaseUpdate,
      t === null ? a.firstBaseUpdate = n : t.next = n,
      a.lastBaseUpdate = n
  }
  var qc = !1;
  function zs() {
      if (qc) {
          var t = Ma;
          if (t !== null)
              throw t
      }
  }
  function Ls(t, n, a, r) {
      qc = !1;
      var c = t.updateQueue;
      ai = !1;
      var u = c.firstBaseUpdate
        , v = c.lastBaseUpdate
        , S = c.shared.pending;
      if (S !== null) {
          c.shared.pending = null;
          var A = S
            , V = A.next;
          A.next = null,
          v === null ? u = V : v.next = V,
          v = A;
          var X = t.alternate;
          X !== null && (X = X.updateQueue,
          S = X.lastBaseUpdate,
          S !== v && (S === null ? X.firstBaseUpdate = V : S.next = V,
          X.lastBaseUpdate = A))
      }
      if (u !== null) {
          var K = c.baseState;
          v = 0,
          X = V = A = null,
          S = u;
          do {
              var B = S.lane & -536870913
                , P = B !== S.lane;
              if (P ? (wt & B) === B : (r & B) === B) {
                  B !== 0 && B === Na && (qc = !0),
                  X !== null && (X = X.next = {
                      lane: 0,
                      tag: S.tag,
                      payload: S.payload,
                      callback: null,
                      next: null
                  });
                  t: {
                      var tt = t
                        , lt = S;
                      B = n;
                      var Vt = a;
                      switch (lt.tag) {
                      case 1:
                          if (tt = lt.payload,
                          typeof tt == "function") {
                              K = tt.call(Vt, K, B);
                              break t
                          }
                          K = tt;
                          break t;
                      case 3:
                          tt.flags = tt.flags & -65537 | 128;
                      case 0:
                          if (tt = lt.payload,
                          B = typeof tt == "function" ? tt.call(Vt, K, B) : tt,
                          B == null)
                              break t;
                          K = x({}, K, B);
                          break t;
                      case 2:
                          ai = !0
                      }
                  }
                  B = S.callback,
                  B !== null && (t.flags |= 64,
                  P && (t.flags |= 8192),
                  P = c.callbacks,
                  P === null ? c.callbacks = [B] : P.push(B))
              } else
                  P = {
                      lane: B,
                      tag: S.tag,
                      payload: S.payload,
                      callback: S.callback,
                      next: null
                  },
                  X === null ? (V = X = P,
                  A = K) : X = X.next = P,
                  v |= B;
              if (S = S.next,
              S === null) {
                  if (S = c.shared.pending,
                  S === null)
                      break;
                  P = S,
                  S = P.next,
                  P.next = null,
                  c.lastBaseUpdate = P,
                  c.shared.pending = null
              }
          } while (!0);
          X === null && (A = K),
          c.baseState = A,
          c.firstBaseUpdate = V,
          c.lastBaseUpdate = X,
          u === null && (c.shared.lanes = 0),
          fi |= v,
          t.lanes = v,
          t.memoizedState = K
      }
  }
  function Ym(t, n) {
      if (typeof t != "function")
          throw Error(o(191, t));
      t.call(n)
  }
  function Xm(t, n) {
      var a = t.callbacks;
      if (a !== null)
          for (t.callbacks = null,
          t = 0; t < a.length; t++)
              Ym(a[t], n)
  }
  var Oa = M(null)
    , lo = M(0);
  function Fm(t, n) {
      t = Gn,
      $(lo, t),
      $(Oa, n),
      Gn = t | n.baseLanes
  }
  function Gc() {
      $(lo, Gn),
      $(Oa, Oa.current)
  }
  function Yc() {
      Gn = lo.current,
      F(Oa),
      F(lo)
  }
  var De = M(null)
    , $e = null;
  function oi(t) {
      var n = t.alternate;
      $(Qt, Qt.current & 1),
      $(De, t),
      $e === null && (n === null || Oa.current !== null || n.memoizedState !== null) && ($e = t)
  }
  function Xc(t) {
      $(Qt, Qt.current),
      $(De, t),
      $e === null && ($e = t)
  }
  function Qm(t) {
      t.tag === 22 ? ($(Qt, Qt.current),
      $(De, t),
      $e === null && ($e = t)) : li()
  }
  function li() {
      $(Qt, Qt.current),
      $(De, De.current)
  }
  function _e(t) {
      F(De),
      $e === t && ($e = null),
      F(Qt)
  }
  var Qt = M(0);
  function co(t) {
      for (var n = t; n !== null; ) {
          if (n.tag === 13) {
              var a = n.memoizedState;
              if (a !== null && (a = a.dehydrated,
              a === null || Wu(a) || Ju(a)))
                  return n
          } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
              if ((n.flags & 128) !== 0)
                  return n
          } else if (n.child !== null) {
              n.child.return = n,
              n = n.child;
              continue
          }
          if (n === t)
              break;
          for (; n.sibling === null; ) {
              if (n.return === null || n.return === t)
                  return null;
              n = n.return
          }
          n.sibling.return = n.return,
          n = n.sibling
      }
      return null
  }
  var Ln = 0
    , gt = null
    , zt = null
    , Wt = null
    , uo = !1
    , Da = !1
    , Ki = !1
    , fo = 0
    , Vs = 0
    , _a = null
    , _w = 0;
  function Gt() {
      throw Error(o(321))
  }
  function Fc(t, n) {
      if (n === null)
          return !1;
      for (var a = 0; a < n.length && a < t.length; a++)
          if (!Re(t[a], n[a]))
              return !1;
      return !0
  }
  function Qc(t, n, a, r, c, u) {
      return Ln = u,
      gt = n,
      n.memoizedState = null,
      n.updateQueue = null,
      n.lanes = 0,
      _.H = t === null || t.memoizedState === null ? Rp : lu,
      Ki = !1,
      u = a(r, c),
      Ki = !1,
      Da && (u = Zm(n, a, r, c)),
      Km(t),
      u
  }
  function Km(t) {
      _.H = ks;
      var n = zt !== null && zt.next !== null;
      if (Ln = 0,
      Wt = zt = gt = null,
      uo = !1,
      Vs = 0,
      _a = null,
      n)
          throw Error(o(300));
      t === null || Jt || (t = t.dependencies,
      t !== null && eo(t) && (Jt = !0))
  }
  function Zm(t, n, a, r) {
      gt = t;
      var c = 0;
      do {
          if (Da && (_a = null),
          Vs = 0,
          Da = !1,
          25 <= c)
              throw Error(o(301));
          if (c += 1,
          Wt = zt = null,
          t.updateQueue != null) {
              var u = t.updateQueue;
              u.lastEffect = null,
              u.events = null,
              u.stores = null,
              u.memoCache != null && (u.memoCache.index = 0)
          }
          _.H = Op,
          u = n(a, r)
      } while (Da);
      return u
  }
  function zw() {
      var t = _.H
        , n = t.useState()[0];
      return n = typeof n.then == "function" ? Bs(n) : n,
      t = t.useState()[0],
      (zt !== null ? zt.memoizedState : null) !== t && (gt.flags |= 1024),
      n
  }
  function Kc() {
      var t = fo !== 0;
      return fo = 0,
      t
  }
  function Zc(t, n, a) {
      n.updateQueue = t.updateQueue,
      n.flags &= -2053,
      t.lanes &= ~a
  }
  function $c(t) {
      if (uo) {
          for (t = t.memoizedState; t !== null; ) {
              var n = t.queue;
              n !== null && (n.pending = null),
              t = t.next
          }
          uo = !1
      }
      Ln = 0,
      Wt = zt = gt = null,
      Da = !1,
      Vs = fo = 0,
      _a = null
  }
  function me() {
      var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
      };
      return Wt === null ? gt.memoizedState = Wt = t : Wt = Wt.next = t,
      Wt
  }
  function Kt() {
      if (zt === null) {
          var t = gt.alternate;
          t = t !== null ? t.memoizedState : null
      } else
          t = zt.next;
      var n = Wt === null ? gt.memoizedState : Wt.next;
      if (n !== null)
          Wt = n,
          zt = t;
      else {
          if (t === null)
              throw gt.alternate === null ? Error(o(467)) : Error(o(310));
          zt = t,
          t = {
              memoizedState: zt.memoizedState,
              baseState: zt.baseState,
              baseQueue: zt.baseQueue,
              queue: zt.queue,
              next: null
          },
          Wt === null ? gt.memoizedState = Wt = t : Wt = Wt.next = t
      }
      return Wt
  }
  function ho() {
      return {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null
      }
  }
  function Bs(t) {
      var n = Vs;
      return Vs += 1,
      _a === null && (_a = []),
      t = km(_a, t, n),
      n = gt,
      (Wt === null ? n.memoizedState : Wt.next) === null && (n = n.alternate,
      _.H = n === null || n.memoizedState === null ? Rp : lu),
      t
  }
  function mo(t) {
      if (t !== null && typeof t == "object") {
          if (typeof t.then == "function")
              return Bs(t);
          if (t.$$typeof === D)
              return le(t)
      }
      throw Error(o(438, String(t)))
  }
  function Wc(t) {
      var n = null
        , a = gt.updateQueue;
      if (a !== null && (n = a.memoCache),
      n == null) {
          var r = gt.alternate;
          r !== null && (r = r.updateQueue,
          r !== null && (r = r.memoCache,
          r != null && (n = {
              data: r.data.map(function(c) {
                  return c.slice()
              }),
              index: 0
          })))
      }
      if (n == null && (n = {
          data: [],
          index: 0
      }),
      a === null && (a = ho(),
      gt.updateQueue = a),
      a.memoCache = n,
      a = n.data[n.index],
      a === void 0)
          for (a = n.data[n.index] = Array(t),
          r = 0; r < t; r++)
              a[r] = st;
      return n.index++,
      a
  }
  function Vn(t, n) {
      return typeof n == "function" ? n(t) : n
  }
  function po(t) {
      var n = Kt();
      return Jc(n, zt, t)
  }
  function Jc(t, n, a) {
      var r = t.queue;
      if (r === null)
          throw Error(o(311));
      r.lastRenderedReducer = a;
      var c = t.baseQueue
        , u = r.pending;
      if (u !== null) {
          if (c !== null) {
              var v = c.next;
              c.next = u.next,
              u.next = v
          }
          n.baseQueue = c = u,
          r.pending = null
      }
      if (u = t.baseState,
      c === null)
          t.memoizedState = u;
      else {
          n = c.next;
          var S = v = null
            , A = null
            , V = n
            , X = !1;
          do {
              var K = V.lane & -536870913;
              if (K !== V.lane ? (wt & K) === K : (Ln & K) === K) {
                  var B = V.revertLane;
                  if (B === 0)
                      A !== null && (A = A.next = {
                          lane: 0,
                          revertLane: 0,
                          gesture: null,
                          action: V.action,
                          hasEagerState: V.hasEagerState,
                          eagerState: V.eagerState,
                          next: null
                      }),
                      K === Na && (X = !0);
                  else if ((Ln & B) === B) {
                      V = V.next,
                      B === Na && (X = !0);
                      continue
                  } else
                      K = {
                          lane: 0,
                          revertLane: V.revertLane,
                          gesture: null,
                          action: V.action,
                          hasEagerState: V.hasEagerState,
                          eagerState: V.eagerState,
                          next: null
                      },
                      A === null ? (S = A = K,
                      v = u) : A = A.next = K,
                      gt.lanes |= B,
                      fi |= B;
                  K = V.action,
                  Ki && a(u, K),
                  u = V.hasEagerState ? V.eagerState : a(u, K)
              } else
                  B = {
                      lane: K,
                      revertLane: V.revertLane,
                      gesture: V.gesture,
                      action: V.action,
                      hasEagerState: V.hasEagerState,
                      eagerState: V.eagerState,
                      next: null
                  },
                  A === null ? (S = A = B,
                  v = u) : A = A.next = B,
                  gt.lanes |= K,
                  fi |= K;
              V = V.next
          } while (V !== null && V !== n);
          if (A === null ? v = u : A.next = S,
          !Re(u, t.memoizedState) && (Jt = !0,
          X && (a = Ma,
          a !== null)))
              throw a;
          t.memoizedState = u,
          t.baseState = v,
          t.baseQueue = A,
          r.lastRenderedState = u
      }
      return c === null && (r.lanes = 0),
      [t.memoizedState, r.dispatch]
  }
  function Ic(t) {
      var n = Kt()
        , a = n.queue;
      if (a === null)
          throw Error(o(311));
      a.lastRenderedReducer = t;
      var r = a.dispatch
        , c = a.pending
        , u = n.memoizedState;
      if (c !== null) {
          a.pending = null;
          var v = c = c.next;
          do
              u = t(u, v.action),
              v = v.next;
          while (v !== c);
          Re(u, n.memoizedState) || (Jt = !0),
          n.memoizedState = u,
          n.baseQueue === null && (n.baseState = u),
          a.lastRenderedState = u
      }
      return [u, r]
  }
  function $m(t, n, a) {
      var r = gt
        , c = Kt()
        , u = Ct;
      if (u) {
          if (a === void 0)
              throw Error(o(407));
          a = a()
      } else
          a = n();
      var v = !Re((zt || c).memoizedState, a);
      if (v && (c.memoizedState = a,
      Jt = !0),
      c = c.queue,
      nu(Im.bind(null, r, c, t), [t]),
      c.getSnapshot !== n || v || Wt !== null && Wt.memoizedState.tag & 1) {
          if (r.flags |= 2048,
          za(9, {
              destroy: void 0
          }, Jm.bind(null, r, c, a, n), null),
          Bt === null)
              throw Error(o(349));
          u || (Ln & 127) !== 0 || Wm(r, n, a)
      }
      return a
  }
  function Wm(t, n, a) {
      t.flags |= 16384,
      t = {
          getSnapshot: n,
          value: a
      },
      n = gt.updateQueue,
      n === null ? (n = ho(),
      gt.updateQueue = n,
      n.stores = [t]) : (a = n.stores,
      a === null ? n.stores = [t] : a.push(t))
  }
  function Jm(t, n, a, r) {
      n.value = a,
      n.getSnapshot = r,
      tp(n) && ep(t)
  }
  function Im(t, n, a) {
      return a(function() {
          tp(n) && ep(t)
      })
  }
  function tp(t) {
      var n = t.getSnapshot;
      t = t.value;
      try {
          var a = n();
          return !Re(t, a)
      } catch {
          return !0
      }
  }
  function ep(t) {
      var n = ki(t, 2);
      n !== null && Te(n, t, 2)
  }
  function tu(t) {
      var n = me();
      if (typeof t == "function") {
          var a = t;
          if (t = a(),
          Ki) {
              Wn(!0);
              try {
                  a()
              } finally {
                  Wn(!1)
              }
          }
      }
      return n.memoizedState = n.baseState = t,
      n.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vn,
          lastRenderedState: t
      },
      n
  }
  function np(t, n, a, r) {
      return t.baseState = a,
      Jc(t, zt, typeof r == "function" ? r : Vn)
  }
  function Lw(t, n, a, r, c) {
      if (vo(t))
          throw Error(o(485));
      if (t = n.action,
      t !== null) {
          var u = {
              payload: c,
              action: t,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function(v) {
                  u.listeners.push(v)
              }
          };
          _.T !== null ? a(!0) : u.isTransition = !1,
          r(u),
          a = n.pending,
          a === null ? (u.next = n.pending = u,
          ip(n, u)) : (u.next = a.next,
          n.pending = a.next = u)
      }
  }
  function ip(t, n) {
      var a = n.action
        , r = n.payload
        , c = t.state;
      if (n.isTransition) {
          var u = _.T
            , v = {};
          _.T = v;
          try {
              var S = a(c, r)
                , A = _.S;
              A !== null && A(v, S),
              ap(t, n, S)
          } catch (V) {
              eu(t, n, V)
          } finally {
              u !== null && v.types !== null && (u.types = v.types),
              _.T = u
          }
      } else
          try {
              u = a(c, r),
              ap(t, n, u)
          } catch (V) {
              eu(t, n, V)
          }
  }
  function ap(t, n, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(r) {
          sp(t, n, r)
      }, function(r) {
          return eu(t, n, r)
      }) : sp(t, n, a)
  }
  function sp(t, n, a) {
      n.status = "fulfilled",
      n.value = a,
      rp(n),
      t.state = a,
      n = t.pending,
      n !== null && (a = n.next,
      a === n ? t.pending = null : (a = a.next,
      n.next = a,
      ip(t, a)))
  }
  function eu(t, n, a) {
      var r = t.pending;
      if (t.pending = null,
      r !== null) {
          r = r.next;
          do
              n.status = "rejected",
              n.reason = a,
              rp(n),
              n = n.next;
          while (n !== r)
      }
      t.action = null
  }
  function rp(t) {
      t = t.listeners;
      for (var n = 0; n < t.length; n++)
          (0,
          t[n])()
  }
  function op(t, n) {
      return n
  }
  function lp(t, n) {
      if (Ct) {
          var a = Bt.formState;
          if (a !== null) {
              t: {
                  var r = gt;
                  if (Ct) {
                      if (Ut) {
                          e: {
                              for (var c = Ut, u = Ze; c.nodeType !== 8; ) {
                                  if (!u) {
                                      c = null;
                                      break e
                                  }
                                  if (c = We(c.nextSibling),
                                  c === null) {
                                      c = null;
                                      break e
                                  }
                              }
                              u = c.data,
                              c = u === "F!" || u === "F" ? c : null
                          }
                          if (c) {
                              Ut = We(c.nextSibling),
                              r = c.data === "F!";
                              break t
                          }
                      }
                      ni(r)
                  }
                  r = !1
              }
              r && (n = a[0])
          }
      }
      return a = me(),
      a.memoizedState = a.baseState = n,
      r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: op,
          lastRenderedState: n
      },
      a.queue = r,
      a = Np.bind(null, gt, r),
      r.dispatch = a,
      r = tu(!1),
      u = ou.bind(null, gt, !1, r.queue),
      r = me(),
      c = {
          state: n,
          dispatch: null,
          action: t,
          pending: null
      },
      r.queue = c,
      a = Lw.bind(null, gt, c, u, a),
      c.dispatch = a,
      r.memoizedState = t,
      [n, a, !1]
  }
  function cp(t) {
      var n = Kt();
      return up(n, zt, t)
  }
  function up(t, n, a) {
      if (n = Jc(t, n, op)[0],
      t = po(Vn)[0],
      typeof n == "object" && n !== null && typeof n.then == "function")
          try {
              var r = Bs(n)
          } catch (v) {
              throw v === ja ? ao : v
          }
      else
          r = n;
      n = Kt();
      var c = n.queue
        , u = c.dispatch;
      return a !== n.memoizedState && (gt.flags |= 2048,
      za(9, {
          destroy: void 0
      }, Vw.bind(null, c, a), null)),
      [r, u, t]
  }
  function Vw(t, n) {
      t.action = n
  }
  function fp(t) {
      var n = Kt()
        , a = zt;
      if (a !== null)
          return up(n, a, t);
      Kt(),
      n = n.memoizedState,
      a = Kt();
      var r = a.queue.dispatch;
      return a.memoizedState = t,
      [n, r, !1]
  }
  function za(t, n, a, r) {
      return t = {
          tag: t,
          create: a,
          deps: r,
          inst: n,
          next: null
      },
      n = gt.updateQueue,
      n === null && (n = ho(),
      gt.updateQueue = n),
      a = n.lastEffect,
      a === null ? n.lastEffect = t.next = t : (r = a.next,
      a.next = t,
      t.next = r,
      n.lastEffect = t),
      t
  }
  function dp() {
      return Kt().memoizedState
  }
  function yo(t, n, a, r) {
      var c = me();
      gt.flags |= t,
      c.memoizedState = za(1 | n, {
          destroy: void 0
      }, a, r === void 0 ? null : r)
  }
  function go(t, n, a, r) {
      var c = Kt();
      r = r === void 0 ? null : r;
      var u = c.memoizedState.inst;
      zt !== null && r !== null && Fc(r, zt.memoizedState.deps) ? c.memoizedState = za(n, u, a, r) : (gt.flags |= t,
      c.memoizedState = za(1 | n, u, a, r))
  }
  function hp(t, n) {
      yo(8390656, 8, t, n)
  }
  function nu(t, n) {
      go(2048, 8, t, n)
  }
  function Bw(t) {
      gt.flags |= 4;
      var n = gt.updateQueue;
      if (n === null)
          n = ho(),
          gt.updateQueue = n,
          n.events = [t];
      else {
          var a = n.events;
          a === null ? n.events = [t] : a.push(t)
      }
  }
  function mp(t) {
      var n = Kt().memoizedState;
      return Bw({
          ref: n,
          nextImpl: t
      }),
      function() {
          if ((Rt & 2) !== 0)
              throw Error(o(440));
          return n.impl.apply(void 0, arguments)
      }
  }
  function pp(t, n) {
      return go(4, 2, t, n)
  }
  function yp(t, n) {
      return go(4, 4, t, n)
  }
  function gp(t, n) {
      if (typeof n == "function") {
          t = t();
          var a = n(t);
          return function() {
              typeof a == "function" ? a() : n(null)
          }
      }
      if (n != null)
          return t = t(),
          n.current = t,
          function() {
              n.current = null
          }
  }
  function vp(t, n, a) {
      a = a != null ? a.concat([t]) : null,
      go(4, 4, gp.bind(null, n, t), a)
  }
  function iu() {}
  function xp(t, n) {
      var a = Kt();
      n = n === void 0 ? null : n;
      var r = a.memoizedState;
      return n !== null && Fc(n, r[1]) ? r[0] : (a.memoizedState = [t, n],
      t)
  }
  function bp(t, n) {
      var a = Kt();
      n = n === void 0 ? null : n;
      var r = a.memoizedState;
      if (n !== null && Fc(n, r[1]))
          return r[0];
      if (r = t(),
      Ki) {
          Wn(!0);
          try {
              t()
          } finally {
              Wn(!1)
          }
      }
      return a.memoizedState = [r, n],
      r
  }
  function au(t, n, a) {
      return a === void 0 || (Ln & 1073741824) !== 0 && (wt & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = a,
      t = Sy(),
      gt.lanes |= t,
      fi |= t,
      a)
  }
  function Sp(t, n, a, r) {
      return Re(a, n) ? a : Oa.current !== null ? (t = au(t, a, r),
      Re(t, n) || (Jt = !0),
      t) : (Ln & 42) === 0 || (Ln & 1073741824) !== 0 && (wt & 261930) === 0 ? (Jt = !0,
      t.memoizedState = a) : (t = Sy(),
      gt.lanes |= t,
      fi |= t,
      n)
  }
  function wp(t, n, a, r, c) {
      var u = Y.p;
      Y.p = u !== 0 && 8 > u ? u : 8;
      var v = _.T
        , S = {};
      _.T = S,
      ou(t, !1, n, a);
      try {
          var A = c()
            , V = _.S;
          if (V !== null && V(S, A),
          A !== null && typeof A == "object" && typeof A.then == "function") {
              var X = Dw(A, r);
              Us(t, n, X, Ve(t))
          } else
              Us(t, n, r, Ve(t))
      } catch (K) {
          Us(t, n, {
              then: function() {},
              status: "rejected",
              reason: K
          }, Ve())
      } finally {
          Y.p = u,
          v !== null && S.types !== null && (v.types = S.types),
          _.T = v
      }
  }
  function Uw() {}
  function su(t, n, a, r) {
      if (t.tag !== 5)
          throw Error(o(476));
      var c = Tp(t).queue;
      wp(t, c, n, U, a === null ? Uw : function() {
          return Ep(t),
          a(r)
      }
      )
  }
  function Tp(t) {
      var n = t.memoizedState;
      if (n !== null)
          return n;
      n = {
          memoizedState: U,
          baseState: U,
          baseQueue: null,
          queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Vn,
              lastRenderedState: U
          },
          next: null
      };
      var a = {};
      return n.next = {
          memoizedState: a,
          baseState: a,
          baseQueue: null,
          queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Vn,
              lastRenderedState: a
          },
          next: null
      },
      t.memoizedState = n,
      t = t.alternate,
      t !== null && (t.memoizedState = n),
      n
  }
  function Ep(t) {
      var n = Tp(t);
      n.next === null && (n = t.alternate.memoizedState),
      Us(t, n.next.queue, {}, Ve())
  }
  function ru() {
      return le(er)
  }
  function Cp() {
      return Kt().memoizedState
  }
  function Ap() {
      return Kt().memoizedState
  }
  function kw(t) {
      for (var n = t.return; n !== null; ) {
          switch (n.tag) {
          case 24:
          case 3:
              var a = Ve();
              t = si(a);
              var r = ri(n, t, a);
              r !== null && (Te(r, n, a),
              _s(r, n, a)),
              n = {
                  cache: Lc()
              },
              t.payload = n;
              return
          }
          n = n.return
      }
  }
  function Pw(t, n, a) {
      var r = Ve();
      a = {
          lane: r,
          revertLane: 0,
          gesture: null,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
      },
      vo(t) ? Mp(n, a) : (a = Ec(t, n, a, r),
      a !== null && (Te(a, t, r),
      jp(a, n, r)))
  }
  function Np(t, n, a) {
      var r = Ve();
      Us(t, n, a, r)
  }
  function Us(t, n, a, r) {
      var c = {
          lane: r,
          revertLane: 0,
          gesture: null,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
      };
      if (vo(t))
          Mp(n, c);
      else {
          var u = t.alternate;
          if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer,
          u !== null))
              try {
                  var v = n.lastRenderedState
                    , S = u(v, a);
                  if (c.hasEagerState = !0,
                  c.eagerState = S,
                  Re(S, v))
                      return Wr(t, n, c, 0),
                      Bt === null && $r(),
                      !1
              } catch {} finally {}
          if (a = Ec(t, n, c, r),
          a !== null)
              return Te(a, t, r),
              jp(a, n, r),
              !0
      }
      return !1
  }
  function ou(t, n, a, r) {
      if (r = {
          lane: 2,
          revertLane: ku(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null
      },
      vo(t)) {
          if (n)
              throw Error(o(479))
      } else
          n = Ec(t, a, r, 2),
          n !== null && Te(n, t, 2)
  }
  function vo(t) {
      var n = t.alternate;
      return t === gt || n !== null && n === gt
  }
  function Mp(t, n) {
      Da = uo = !0;
      var a = t.pending;
      a === null ? n.next = n : (n.next = a.next,
      a.next = n),
      t.pending = n
  }
  function jp(t, n, a) {
      if ((a & 4194048) !== 0) {
          var r = n.lanes;
          r &= t.pendingLanes,
          a |= r,
          n.lanes = a,
          zh(t, a)
      }
  }
  var ks = {
      readContext: le,
      use: mo,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useLayoutEffect: Gt,
      useInsertionEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      useHostTransitionStatus: Gt,
      useFormState: Gt,
      useActionState: Gt,
      useOptimistic: Gt,
      useMemoCache: Gt,
      useCacheRefresh: Gt
  };
  ks.useEffectEvent = Gt;
  var Rp = {
      readContext: le,
      use: mo,
      useCallback: function(t, n) {
          return me().memoizedState = [t, n === void 0 ? null : n],
          t
      },
      useContext: le,
      useEffect: hp,
      useImperativeHandle: function(t, n, a) {
          a = a != null ? a.concat([t]) : null,
          yo(4194308, 4, gp.bind(null, n, t), a)
      },
      useLayoutEffect: function(t, n) {
          return yo(4194308, 4, t, n)
      },
      useInsertionEffect: function(t, n) {
          yo(4, 2, t, n)
      },
      useMemo: function(t, n) {
          var a = me();
          n = n === void 0 ? null : n;
          var r = t();
          if (Ki) {
              Wn(!0);
              try {
                  t()
              } finally {
                  Wn(!1)
              }
          }
          return a.memoizedState = [r, n],
          r
      },
      useReducer: function(t, n, a) {
          var r = me();
          if (a !== void 0) {
              var c = a(n);
              if (Ki) {
                  Wn(!0);
                  try {
                      a(n)
                  } finally {
                      Wn(!1)
                  }
              }
          } else
              c = n;
          return r.memoizedState = r.baseState = c,
          t = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: c
          },
          r.queue = t,
          t = t.dispatch = Pw.bind(null, gt, t),
          [r.memoizedState, t]
      },
      useRef: function(t) {
          var n = me();
          return t = {
              current: t
          },
          n.memoizedState = t
      },
      useState: function(t) {
          t = tu(t);
          var n = t.queue
            , a = Np.bind(null, gt, n);
          return n.dispatch = a,
          [t.memoizedState, a]
      },
      useDebugValue: iu,
      useDeferredValue: function(t, n) {
          var a = me();
          return au(a, t, n)
      },
      useTransition: function() {
          var t = tu(!1);
          return t = wp.bind(null, gt, t.queue, !0, !1),
          me().memoizedState = t,
          [!1, t]
      },
      useSyncExternalStore: function(t, n, a) {
          var r = gt
            , c = me();
          if (Ct) {
              if (a === void 0)
                  throw Error(o(407));
              a = a()
          } else {
              if (a = n(),
              Bt === null)
                  throw Error(o(349));
              (wt & 127) !== 0 || Wm(r, n, a)
          }
          c.memoizedState = a;
          var u = {
              value: a,
              getSnapshot: n
          };
          return c.queue = u,
          hp(Im.bind(null, r, u, t), [t]),
          r.flags |= 2048,
          za(9, {
              destroy: void 0
          }, Jm.bind(null, r, u, a, n), null),
          a
      },
      useId: function() {
          var t = me()
            , n = Bt.identifierPrefix;
          if (Ct) {
              var a = gn
                , r = yn;
              a = (r & ~(1 << 32 - je(r) - 1)).toString(32) + a,
              n = "_" + n + "R_" + a,
              a = fo++,
              0 < a && (n += "H" + a.toString(32)),
              n += "_"
          } else
              a = _w++,
              n = "_" + n + "r_" + a.toString(32) + "_";
          return t.memoizedState = n
      },
      useHostTransitionStatus: ru,
      useFormState: lp,
      useActionState: lp,
      useOptimistic: function(t) {
          var n = me();
          n.memoizedState = n.baseState = t;
          var a = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null
          };
          return n.queue = a,
          n = ou.bind(null, gt, !0, a),
          a.dispatch = n,
          [t, n]
      },
      useMemoCache: Wc,
      useCacheRefresh: function() {
          return me().memoizedState = kw.bind(null, gt)
      },
      useEffectEvent: function(t) {
          var n = me()
            , a = {
              impl: t
          };
          return n.memoizedState = a,
          function() {
              if ((Rt & 2) !== 0)
                  throw Error(o(440));
              return a.impl.apply(void 0, arguments)
          }
      }
  }
    , lu = {
      readContext: le,
      use: mo,
      useCallback: xp,
      useContext: le,
      useEffect: nu,
      useImperativeHandle: vp,
      useInsertionEffect: pp,
      useLayoutEffect: yp,
      useMemo: bp,
      useReducer: po,
      useRef: dp,
      useState: function() {
          return po(Vn)
      },
      useDebugValue: iu,
      useDeferredValue: function(t, n) {
          var a = Kt();
          return Sp(a, zt.memoizedState, t, n)
      },
      useTransition: function() {
          var t = po(Vn)[0]
            , n = Kt().memoizedState;
          return [typeof t == "boolean" ? t : Bs(t), n]
      },
      useSyncExternalStore: $m,
      useId: Cp,
      useHostTransitionStatus: ru,
      useFormState: cp,
      useActionState: cp,
      useOptimistic: function(t, n) {
          var a = Kt();
          return np(a, zt, t, n)
      },
      useMemoCache: Wc,
      useCacheRefresh: Ap
  };
  lu.useEffectEvent = mp;
  var Op = {
      readContext: le,
      use: mo,
      useCallback: xp,
      useContext: le,
      useEffect: nu,
      useImperativeHandle: vp,
      useInsertionEffect: pp,
      useLayoutEffect: yp,
      useMemo: bp,
      useReducer: Ic,
      useRef: dp,
      useState: function() {
          return Ic(Vn)
      },
      useDebugValue: iu,
      useDeferredValue: function(t, n) {
          var a = Kt();
          return zt === null ? au(a, t, n) : Sp(a, zt.memoizedState, t, n)
      },
      useTransition: function() {
          var t = Ic(Vn)[0]
            , n = Kt().memoizedState;
          return [typeof t == "boolean" ? t : Bs(t), n]
      },
      useSyncExternalStore: $m,
      useId: Cp,
      useHostTransitionStatus: ru,
      useFormState: fp,
      useActionState: fp,
      useOptimistic: function(t, n) {
          var a = Kt();
          return zt !== null ? np(a, zt, t, n) : (a.baseState = t,
          [t, a.queue.dispatch])
      },
      useMemoCache: Wc,
      useCacheRefresh: Ap
  };
  Op.useEffectEvent = mp;
  function cu(t, n, a, r) {
      n = t.memoizedState,
      a = a(r, n),
      a = a == null ? n : x({}, n, a),
      t.memoizedState = a,
      t.lanes === 0 && (t.updateQueue.baseState = a)
  }
  var uu = {
      enqueueSetState: function(t, n, a) {
          t = t._reactInternals;
          var r = Ve()
            , c = si(r);
          c.payload = n,
          a != null && (c.callback = a),
          n = ri(t, c, r),
          n !== null && (Te(n, t, r),
          _s(n, t, r))
      },
      enqueueReplaceState: function(t, n, a) {
          t = t._reactInternals;
          var r = Ve()
            , c = si(r);
          c.tag = 1,
          c.payload = n,
          a != null && (c.callback = a),
          n = ri(t, c, r),
          n !== null && (Te(n, t, r),
          _s(n, t, r))
      },
      enqueueForceUpdate: function(t, n) {
          t = t._reactInternals;
          var a = Ve()
            , r = si(a);
          r.tag = 2,
          n != null && (r.callback = n),
          n = ri(t, r, a),
          n !== null && (Te(n, t, a),
          _s(n, t, a))
      }
  };
  function Dp(t, n, a, r, c, u, v) {
      return t = t.stateNode,
      typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, u, v) : n.prototype && n.prototype.isPureReactComponent ? !Cs(a, r) || !Cs(c, u) : !0
  }
  function _p(t, n, a, r) {
      t = n.state,
      typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, r),
      n.state !== t && uu.enqueueReplaceState(n, n.state, null)
  }
  function Zi(t, n) {
      var a = n;
      if ("ref"in n) {
          a = {};
          for (var r in n)
              r !== "ref" && (a[r] = n[r])
      }
      if (t = t.defaultProps) {
          a === n && (a = x({}, a));
          for (var c in t)
              a[c] === void 0 && (a[c] = t[c])
      }
      return a
  }
  function zp(t) {
      Zr(t)
  }
  function Lp(t) {
      console.error(t)
  }
  function Vp(t) {
      Zr(t)
  }
  function xo(t, n) {
      try {
          var a = t.onUncaughtError;
          a(n.value, {
              componentStack: n.stack
          })
      } catch (r) {
          setTimeout(function() {
              throw r
          })
      }
  }
  function Bp(t, n, a) {
      try {
          var r = t.onCaughtError;
          r(a.value, {
              componentStack: a.stack,
              errorBoundary: n.tag === 1 ? n.stateNode : null
          })
      } catch (c) {
          setTimeout(function() {
              throw c
          })
      }
  }
  function fu(t, n, a) {
      return a = si(a),
      a.tag = 3,
      a.payload = {
          element: null
      },
      a.callback = function() {
          xo(t, n)
      }
      ,
      a
  }
  function Up(t) {
      return t = si(t),
      t.tag = 3,
      t
  }
  function kp(t, n, a, r) {
      var c = a.type.getDerivedStateFromError;
      if (typeof c == "function") {
          var u = r.value;
          t.payload = function() {
              return c(u)
          }
          ,
          t.callback = function() {
              Bp(n, a, r)
          }
      }
      var v = a.stateNode;
      v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
          Bp(n, a, r),
          typeof c != "function" && (di === null ? di = new Set([this]) : di.add(this));
          var S = r.stack;
          this.componentDidCatch(r.value, {
              componentStack: S !== null ? S : ""
          })
      }
      )
  }
  function Hw(t, n, a, r, c) {
      if (a.flags |= 32768,
      r !== null && typeof r == "object" && typeof r.then == "function") {
          if (n = a.alternate,
          n !== null && Aa(n, a, c, !0),
          a = De.current,
          a !== null) {
              switch (a.tag) {
              case 31:
              case 13:
                  return $e === null ? Oo() : a.alternate === null && Yt === 0 && (Yt = 3),
                  a.flags &= -257,
                  a.flags |= 65536,
                  a.lanes = c,
                  r === so ? a.flags |= 16384 : (n = a.updateQueue,
                  n === null ? a.updateQueue = new Set([r]) : n.add(r),
                  Vu(t, r, c)),
                  !1;
              case 22:
                  return a.flags |= 65536,
                  r === so ? a.flags |= 16384 : (n = a.updateQueue,
                  n === null ? (n = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([r])
                  },
                  a.updateQueue = n) : (a = n.retryQueue,
                  a === null ? n.retryQueue = new Set([r]) : a.add(r)),
                  Vu(t, r, c)),
                  !1
              }
              throw Error(o(435, a.tag))
          }
          return Vu(t, r, c),
          Oo(),
          !1
      }
      if (Ct)
          return n = De.current,
          n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256),
          n.flags |= 65536,
          n.lanes = c,
          r !== Rc && (t = Error(o(422), {
              cause: r
          }),
          Ms(Fe(t, a)))) : (r !== Rc && (n = Error(o(423), {
              cause: r
          }),
          Ms(Fe(n, a))),
          t = t.current.alternate,
          t.flags |= 65536,
          c &= -c,
          t.lanes |= c,
          r = Fe(r, a),
          c = fu(t.stateNode, r, c),
          Hc(t, c),
          Yt !== 4 && (Yt = 2)),
          !1;
      var u = Error(o(520), {
          cause: r
      });
      if (u = Fe(u, a),
      Qs === null ? Qs = [u] : Qs.push(u),
      Yt !== 4 && (Yt = 2),
      n === null)
          return !0;
      r = Fe(r, a),
      a = n;
      do {
          switch (a.tag) {
          case 3:
              return a.flags |= 65536,
              t = c & -c,
              a.lanes |= t,
              t = fu(a.stateNode, r, t),
              Hc(a, t),
              !1;
          case 1:
              if (n = a.type,
              u = a.stateNode,
              (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (di === null || !di.has(u))))
                  return a.flags |= 65536,
                  c &= -c,
                  a.lanes |= c,
                  c = Up(c),
                  kp(c, t, a, r),
                  Hc(a, c),
                  !1
          }
          a = a.return
      } while (a !== null);
      return !1
  }
  var du = Error(o(461))
    , Jt = !1;
  function ce(t, n, a, r) {
      n.child = t === null ? Gm(n, null, a, r) : Qi(n, t.child, a, r)
  }
  function Pp(t, n, a, r, c) {
      a = a.render;
      var u = n.ref;
      if ("ref"in r) {
          var v = {};
          for (var S in r)
              S !== "ref" && (v[S] = r[S])
      } else
          v = r;
      return Gi(n),
      r = Qc(t, n, a, v, u, c),
      S = Kc(),
      t !== null && !Jt ? (Zc(t, n, c),
      Bn(t, n, c)) : (Ct && S && Mc(n),
      n.flags |= 1,
      ce(t, n, r, c),
      n.child)
  }
  function Hp(t, n, a, r, c) {
      if (t === null) {
          var u = a.type;
          return typeof u == "function" && !Cc(u) && u.defaultProps === void 0 && a.compare === null ? (n.tag = 15,
          n.type = u,
          qp(t, n, u, r, c)) : (t = Ir(a.type, null, r, n, n.mode, c),
          t.ref = n.ref,
          t.return = n,
          n.child = t)
      }
      if (u = t.child,
      !bu(t, c)) {
          var v = u.memoizedProps;
          if (a = a.compare,
          a = a !== null ? a : Cs,
          a(v, r) && t.ref === n.ref)
              return Bn(t, n, c)
      }
      return n.flags |= 1,
      t = On(u, r),
      t.ref = n.ref,
      t.return = n,
      n.child = t
  }
  function qp(t, n, a, r, c) {
      if (t !== null) {
          var u = t.memoizedProps;
          if (Cs(u, r) && t.ref === n.ref)
              if (Jt = !1,
              n.pendingProps = r = u,
              bu(t, c))
                  (t.flags & 131072) !== 0 && (Jt = !0);
              else
                  return n.lanes = t.lanes,
                  Bn(t, n, c)
      }
      return hu(t, n, a, r, c)
  }
  function Gp(t, n, a, r) {
      var c = r.children
        , u = t !== null ? t.memoizedState : null;
      if (t === null && n.stateNode === null && (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
      }),
      r.mode === "hidden") {
          if ((n.flags & 128) !== 0) {
              if (u = u !== null ? u.baseLanes | a : a,
              t !== null) {
                  for (r = n.child = t.child,
                  c = 0; r !== null; )
                      c = c | r.lanes | r.childLanes,
                      r = r.sibling;
                  r = c & ~u
              } else
                  r = 0,
                  n.child = null;
              return Yp(t, n, u, a, r)
          }
          if ((a & 536870912) !== 0)
              n.memoizedState = {
                  baseLanes: 0,
                  cachePool: null
              },
              t !== null && io(n, u !== null ? u.cachePool : null),
              u !== null ? Fm(n, u) : Gc(),
              Qm(n);
          else
              return r = n.lanes = 536870912,
              Yp(t, n, u !== null ? u.baseLanes | a : a, a, r)
      } else
          u !== null ? (io(n, u.cachePool),
          Fm(n, u),
          li(),
          n.memoizedState = null) : (t !== null && io(n, null),
          Gc(),
          li());
      return ce(t, n, c, a),
      n.child
  }
  function Ps(t, n) {
      return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
      }),
      n.sibling
  }
  function Yp(t, n, a, r, c) {
      var u = Bc();
      return u = u === null ? null : {
          parent: $t._currentValue,
          pool: u
      },
      n.memoizedState = {
          baseLanes: a,
          cachePool: u
      },
      t !== null && io(n, null),
      Gc(),
      Qm(n),
      t !== null && Aa(t, n, r, !0),
      n.childLanes = c,
      null
  }
  function bo(t, n) {
      return n = wo({
          mode: n.mode,
          children: n.children
      }, t.mode),
      n.ref = t.ref,
      t.child = n,
      n.return = t,
      n
  }
  function Xp(t, n, a) {
      return Qi(n, t.child, null, a),
      t = bo(n, n.pendingProps),
      t.flags |= 2,
      _e(n),
      n.memoizedState = null,
      t
  }
  function qw(t, n, a) {
      var r = n.pendingProps
        , c = (n.flags & 128) !== 0;
      if (n.flags &= -129,
      t === null) {
          if (Ct) {
              if (r.mode === "hidden")
                  return t = bo(n, r),
                  n.lanes = 536870912,
                  Ps(null, t);
              if (Xc(n),
              (t = Ut) ? (t = ig(t, Ze),
              t = t !== null && t.data === "&" ? t : null,
              t !== null && (n.memoizedState = {
                  dehydrated: t,
                  treeContext: ti !== null ? {
                      id: yn,
                      overflow: gn
                  } : null,
                  retryLane: 536870912,
                  hydrationErrors: null
              },
              a = Mm(t),
              a.return = n,
              n.child = a,
              oe = n,
              Ut = null)) : t = null,
              t === null)
                  throw ni(n);
              return n.lanes = 536870912,
              null
          }
          return bo(n, r)
      }
      var u = t.memoizedState;
      if (u !== null) {
          var v = u.dehydrated;
          if (Xc(n),
          c)
              if (n.flags & 256)
                  n.flags &= -257,
                  n = Xp(t, n, a);
              else if (n.memoizedState !== null)
                  n.child = t.child,
                  n.flags |= 128,
                  n = null;
              else
                  throw Error(o(558));
          else if (Jt || Aa(t, n, a, !1),
          c = (a & t.childLanes) !== 0,
          Jt || c) {
              if (r = Bt,
              r !== null && (v = Lh(r, a),
              v !== 0 && v !== u.retryLane))
                  throw u.retryLane = v,
                  ki(t, v),
                  Te(r, t, v),
                  du;
              Oo(),
              n = Xp(t, n, a)
          } else
              t = u.treeContext,
              Ut = We(v.nextSibling),
              oe = n,
              Ct = !0,
              ei = null,
              Ze = !1,
              t !== null && Om(n, t),
              n = bo(n, r),
              n.flags |= 4096;
          return n
      }
      return t = On(t.child, {
          mode: r.mode,
          children: r.children
      }),
      t.ref = n.ref,
      n.child = t,
      t.return = n,
      t
  }
  function So(t, n) {
      var a = n.ref;
      if (a === null)
          t !== null && t.ref !== null && (n.flags |= 4194816);
      else {
          if (typeof a != "function" && typeof a != "object")
              throw Error(o(284));
          (t === null || t.ref !== a) && (n.flags |= 4194816)
      }
  }
  function hu(t, n, a, r, c) {
      return Gi(n),
      a = Qc(t, n, a, r, void 0, c),
      r = Kc(),
      t !== null && !Jt ? (Zc(t, n, c),
      Bn(t, n, c)) : (Ct && r && Mc(n),
      n.flags |= 1,
      ce(t, n, a, c),
      n.child)
  }
  function Fp(t, n, a, r, c, u) {
      return Gi(n),
      n.updateQueue = null,
      a = Zm(n, r, a, c),
      Km(t),
      r = Kc(),
      t !== null && !Jt ? (Zc(t, n, u),
      Bn(t, n, u)) : (Ct && r && Mc(n),
      n.flags |= 1,
      ce(t, n, a, u),
      n.child)
  }
  function Qp(t, n, a, r, c) {
      if (Gi(n),
      n.stateNode === null) {
          var u = wa
            , v = a.contextType;
          typeof v == "object" && v !== null && (u = le(v)),
          u = new a(r,u),
          n.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
          u.updater = uu,
          n.stateNode = u,
          u._reactInternals = n,
          u = n.stateNode,
          u.props = r,
          u.state = n.memoizedState,
          u.refs = {},
          kc(n),
          v = a.contextType,
          u.context = typeof v == "object" && v !== null ? le(v) : wa,
          u.state = n.memoizedState,
          v = a.getDerivedStateFromProps,
          typeof v == "function" && (cu(n, a, v, r),
          u.state = n.memoizedState),
          typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (v = u.state,
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
          v !== u.state && uu.enqueueReplaceState(u, u.state, null),
          Ls(n, r, u, c),
          zs(),
          u.state = n.memoizedState),
          typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          r = !0
      } else if (t === null) {
          u = n.stateNode;
          var S = n.memoizedProps
            , A = Zi(a, S);
          u.props = A;
          var V = u.context
            , X = a.contextType;
          v = wa,
          typeof X == "object" && X !== null && (v = le(X));
          var K = a.getDerivedStateFromProps;
          X = typeof K == "function" || typeof u.getSnapshotBeforeUpdate == "function",
          S = n.pendingProps !== S,
          X || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (S || V !== v) && _p(n, u, r, v),
          ai = !1;
          var B = n.memoizedState;
          u.state = B,
          Ls(n, r, u, c),
          zs(),
          V = n.memoizedState,
          S || B !== V || ai ? (typeof K == "function" && (cu(n, a, K, r),
          V = n.memoizedState),
          (A = ai || Dp(n, a, A, r, B, V, v)) ? (X || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
          typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          n.memoizedProps = r,
          n.memoizedState = V),
          u.props = r,
          u.state = V,
          u.context = v,
          r = A) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          r = !1)
      } else {
          u = n.stateNode,
          Pc(t, n),
          v = n.memoizedProps,
          X = Zi(a, v),
          u.props = X,
          K = n.pendingProps,
          B = u.context,
          V = a.contextType,
          A = wa,
          typeof V == "object" && V !== null && (A = le(V)),
          S = a.getDerivedStateFromProps,
          (V = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v !== K || B !== A) && _p(n, u, r, A),
          ai = !1,
          B = n.memoizedState,
          u.state = B,
          Ls(n, r, u, c),
          zs();
          var P = n.memoizedState;
          v !== K || B !== P || ai || t !== null && t.dependencies !== null && eo(t.dependencies) ? (typeof S == "function" && (cu(n, a, S, r),
          P = n.memoizedState),
          (X = ai || Dp(n, a, X, r, B, P, A) || t !== null && t.dependencies !== null && eo(t.dependencies)) ? (V || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, P, A),
          typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, P, A)),
          typeof u.componentDidUpdate == "function" && (n.flags |= 4),
          typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (n.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (n.flags |= 1024),
          n.memoizedProps = r,
          n.memoizedState = P),
          u.props = r,
          u.state = P,
          u.context = A,
          r = X) : (typeof u.componentDidUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (n.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && B === t.memoizedState || (n.flags |= 1024),
          r = !1)
      }
      return u = r,
      So(t, n),
      r = (n.flags & 128) !== 0,
      u || r ? (u = n.stateNode,
      a = r && typeof a.getDerivedStateFromError != "function" ? null : u.render(),
      n.flags |= 1,
      t !== null && r ? (n.child = Qi(n, t.child, null, c),
      n.child = Qi(n, null, a, c)) : ce(t, n, a, c),
      n.memoizedState = u.state,
      t = n.child) : t = Bn(t, n, c),
      t
  }
  function Kp(t, n, a, r) {
      return Hi(),
      n.flags |= 256,
      ce(t, n, a, r),
      n.child
  }
  var mu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
  };
  function pu(t) {
      return {
          baseLanes: t,
          cachePool: Bm()
      }
  }
  function yu(t, n, a) {
      return t = t !== null ? t.childLanes & ~a : 0,
      n && (t |= Le),
      t
  }
  function Zp(t, n, a) {
      var r = n.pendingProps, c = !1, u = (n.flags & 128) !== 0, v;
      if ((v = u) || (v = t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0),
      v && (c = !0,
      n.flags &= -129),
      v = (n.flags & 32) !== 0,
      n.flags &= -33,
      t === null) {
          if (Ct) {
              if (c ? oi(n) : li(),
              (t = Ut) ? (t = ig(t, Ze),
              t = t !== null && t.data !== "&" ? t : null,
              t !== null && (n.memoizedState = {
                  dehydrated: t,
                  treeContext: ti !== null ? {
                      id: yn,
                      overflow: gn
                  } : null,
                  retryLane: 536870912,
                  hydrationErrors: null
              },
              a = Mm(t),
              a.return = n,
              n.child = a,
              oe = n,
              Ut = null)) : t = null,
              t === null)
                  throw ni(n);
              return Ju(t) ? n.lanes = 32 : n.lanes = 536870912,
              null
          }
          var S = r.children;
          return r = r.fallback,
          c ? (li(),
          c = n.mode,
          S = wo({
              mode: "hidden",
              children: S
          }, c),
          r = Pi(r, c, a, null),
          S.return = n,
          r.return = n,
          S.sibling = r,
          n.child = S,
          r = n.child,
          r.memoizedState = pu(a),
          r.childLanes = yu(t, v, a),
          n.memoizedState = mu,
          Ps(null, r)) : (oi(n),
          gu(n, S))
      }
      var A = t.memoizedState;
      if (A !== null && (S = A.dehydrated,
      S !== null)) {
          if (u)
              n.flags & 256 ? (oi(n),
              n.flags &= -257,
              n = vu(t, n, a)) : n.memoizedState !== null ? (li(),
              n.child = t.child,
              n.flags |= 128,
              n = null) : (li(),
              S = r.fallback,
              c = n.mode,
              r = wo({
                  mode: "visible",
                  children: r.children
              }, c),
              S = Pi(S, c, a, null),
              S.flags |= 2,
              r.return = n,
              S.return = n,
              r.sibling = S,
              n.child = r,
              Qi(n, t.child, null, a),
              r = n.child,
              r.memoizedState = pu(a),
              r.childLanes = yu(t, v, a),
              n.memoizedState = mu,
              n = Ps(null, r));
          else if (oi(n),
          Ju(S)) {
              if (v = S.nextSibling && S.nextSibling.dataset,
              v)
                  var V = v.dgst;
              v = V,
              r = Error(o(419)),
              r.stack = "",
              r.digest = v,
              Ms({
                  value: r,
                  source: null,
                  stack: null
              }),
              n = vu(t, n, a)
          } else if (Jt || Aa(t, n, a, !1),
          v = (a & t.childLanes) !== 0,
          Jt || v) {
              if (v = Bt,
              v !== null && (r = Lh(v, a),
              r !== 0 && r !== A.retryLane))
                  throw A.retryLane = r,
                  ki(t, r),
                  Te(v, t, r),
                  du;
              Wu(S) || Oo(),
              n = vu(t, n, a)
          } else
              Wu(S) ? (n.flags |= 192,
              n.child = t.child,
              n = null) : (t = A.treeContext,
              Ut = We(S.nextSibling),
              oe = n,
              Ct = !0,
              ei = null,
              Ze = !1,
              t !== null && Om(n, t),
              n = gu(n, r.children),
              n.flags |= 4096);
          return n
      }
      return c ? (li(),
      S = r.fallback,
      c = n.mode,
      A = t.child,
      V = A.sibling,
      r = On(A, {
          mode: "hidden",
          children: r.children
      }),
      r.subtreeFlags = A.subtreeFlags & 65011712,
      V !== null ? S = On(V, S) : (S = Pi(S, c, a, null),
      S.flags |= 2),
      S.return = n,
      r.return = n,
      r.sibling = S,
      n.child = r,
      Ps(null, r),
      r = n.child,
      S = t.child.memoizedState,
      S === null ? S = pu(a) : (c = S.cachePool,
      c !== null ? (A = $t._currentValue,
      c = c.parent !== A ? {
          parent: A,
          pool: A
      } : c) : c = Bm(),
      S = {
          baseLanes: S.baseLanes | a,
          cachePool: c
      }),
      r.memoizedState = S,
      r.childLanes = yu(t, v, a),
      n.memoizedState = mu,
      Ps(t.child, r)) : (oi(n),
      a = t.child,
      t = a.sibling,
      a = On(a, {
          mode: "visible",
          children: r.children
      }),
      a.return = n,
      a.sibling = null,
      t !== null && (v = n.deletions,
      v === null ? (n.deletions = [t],
      n.flags |= 16) : v.push(t)),
      n.child = a,
      n.memoizedState = null,
      a)
  }
  function gu(t, n) {
      return n = wo({
          mode: "visible",
          children: n
      }, t.mode),
      n.return = t,
      t.child = n
  }
  function wo(t, n) {
      return t = Oe(22, t, null, n),
      t.lanes = 0,
      t
  }
  function vu(t, n, a) {
      return Qi(n, t.child, null, a),
      t = gu(n, n.pendingProps.children),
      t.flags |= 2,
      n.memoizedState = null,
      t
  }
  function $p(t, n, a) {
      t.lanes |= n;
      var r = t.alternate;
      r !== null && (r.lanes |= n),
      _c(t.return, n, a)
  }
  function xu(t, n, a, r, c, u) {
      var v = t.memoizedState;
      v === null ? t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: a,
          tailMode: c,
          treeForkCount: u
      } : (v.isBackwards = n,
      v.rendering = null,
      v.renderingStartTime = 0,
      v.last = r,
      v.tail = a,
      v.tailMode = c,
      v.treeForkCount = u)
  }
  function Wp(t, n, a) {
      var r = n.pendingProps
        , c = r.revealOrder
        , u = r.tail;
      r = r.children;
      var v = Qt.current
        , S = (v & 2) !== 0;
      if (S ? (v = v & 1 | 2,
      n.flags |= 128) : v &= 1,
      $(Qt, v),
      ce(t, n, r, a),
      r = Ct ? Ns : 0,
      !S && t !== null && (t.flags & 128) !== 0)
          t: for (t = n.child; t !== null; ) {
              if (t.tag === 13)
                  t.memoizedState !== null && $p(t, a, n);
              else if (t.tag === 19)
                  $p(t, a, n);
              else if (t.child !== null) {
                  t.child.return = t,
                  t = t.child;
                  continue
              }
              if (t === n)
                  break t;
              for (; t.sibling === null; ) {
                  if (t.return === null || t.return === n)
                      break t;
                  t = t.return
              }
              t.sibling.return = t.return,
              t = t.sibling
          }
      switch (c) {
      case "forwards":
          for (a = n.child,
          c = null; a !== null; )
              t = a.alternate,
              t !== null && co(t) === null && (c = a),
              a = a.sibling;
          a = c,
          a === null ? (c = n.child,
          n.child = null) : (c = a.sibling,
          a.sibling = null),
          xu(n, !1, c, a, u, r);
          break;
      case "backwards":
      case "unstable_legacy-backwards":
          for (a = null,
          c = n.child,
          n.child = null; c !== null; ) {
              if (t = c.alternate,
              t !== null && co(t) === null) {
                  n.child = c;
                  break
              }
              t = c.sibling,
              c.sibling = a,
              a = c,
              c = t
          }
          xu(n, !0, a, null, u, r);
          break;
      case "together":
          xu(n, !1, null, null, void 0, r);
          break;
      default:
          n.memoizedState = null
      }
      return n.child
  }
  function Bn(t, n, a) {
      if (t !== null && (n.dependencies = t.dependencies),
      fi |= n.lanes,
      (a & n.childLanes) === 0)
          if (t !== null) {
              if (Aa(t, n, a, !1),
              (a & n.childLanes) === 0)
                  return null
          } else
              return null;
      if (t !== null && n.child !== t.child)
          throw Error(o(153));
      if (n.child !== null) {
          for (t = n.child,
          a = On(t, t.pendingProps),
          n.child = a,
          a.return = n; t.sibling !== null; )
              t = t.sibling,
              a = a.sibling = On(t, t.pendingProps),
              a.return = n;
          a.sibling = null
      }
      return n.child
  }
  function bu(t, n) {
      return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies,
      !!(t !== null && eo(t)))
  }
  function Gw(t, n, a) {
      switch (n.tag) {
      case 3:
          Ft(n, n.stateNode.containerInfo),
          ii(n, $t, t.memoizedState.cache),
          Hi();
          break;
      case 27:
      case 5:
          qe(n);
          break;
      case 4:
          Ft(n, n.stateNode.containerInfo);
          break;
      case 10:
          ii(n, n.type, n.memoizedProps.value);
          break;
      case 31:
          if (n.memoizedState !== null)
              return n.flags |= 128,
              Xc(n),
              null;
          break;
      case 13:
          var r = n.memoizedState;
          if (r !== null)
              return r.dehydrated !== null ? (oi(n),
              n.flags |= 128,
              null) : (a & n.child.childLanes) !== 0 ? Zp(t, n, a) : (oi(n),
              t = Bn(t, n, a),
              t !== null ? t.sibling : null);
          oi(n);
          break;
      case 19:
          var c = (t.flags & 128) !== 0;
          if (r = (a & n.childLanes) !== 0,
          r || (Aa(t, n, a, !1),
          r = (a & n.childLanes) !== 0),
          c) {
              if (r)
                  return Wp(t, n, a);
              n.flags |= 128
          }
          if (c = n.memoizedState,
          c !== null && (c.rendering = null,
          c.tail = null,
          c.lastEffect = null),
          $(Qt, Qt.current),
          r)
              break;
          return null;
      case 22:
          return n.lanes = 0,
          Gp(t, n, a, n.pendingProps);
      case 24:
          ii(n, $t, t.memoizedState.cache)
      }
      return Bn(t, n, a)
  }
  function Jp(t, n, a) {
      if (t !== null)
          if (t.memoizedProps !== n.pendingProps)
              Jt = !0;
          else {
              if (!bu(t, a) && (n.flags & 128) === 0)
                  return Jt = !1,
                  Gw(t, n, a);
              Jt = (t.flags & 131072) !== 0
          }
      else
          Jt = !1,
          Ct && (n.flags & 1048576) !== 0 && Rm(n, Ns, n.index);
      switch (n.lanes = 0,
      n.tag) {
      case 16:
          t: {
              var r = n.pendingProps;
              if (t = Xi(n.elementType),
              n.type = t,
              typeof t == "function")
                  Cc(t) ? (r = Zi(t, r),
                  n.tag = 1,
                  n = Qp(null, n, t, r, a)) : (n.tag = 0,
                  n = hu(null, n, t, r, a));
              else {
                  if (t != null) {
                      var c = t.$$typeof;
                      if (c === q) {
                          n.tag = 11,
                          n = Pp(null, n, t, r, a);
                          break t
                      } else if (c === k) {
                          n.tag = 14,
                          n = Hp(null, n, t, r, a);
                          break t
                      }
                  }
                  throw n = J(t) || t,
                  Error(o(306, n, ""))
              }
          }
          return n;
      case 0:
          return hu(t, n, n.type, n.pendingProps, a);
      case 1:
          return r = n.type,
          c = Zi(r, n.pendingProps),
          Qp(t, n, r, c, a);
      case 3:
          t: {
              if (Ft(n, n.stateNode.containerInfo),
              t === null)
                  throw Error(o(387));
              r = n.pendingProps;
              var u = n.memoizedState;
              c = u.element,
              Pc(t, n),
              Ls(n, r, null, a);
              var v = n.memoizedState;
              if (r = v.cache,
              ii(n, $t, r),
              r !== u.cache && zc(n, [$t], a, !0),
              zs(),
              r = v.element,
              u.isDehydrated)
                  if (u = {
                      element: r,
                      isDehydrated: !1,
                      cache: v.cache
                  },
                  n.updateQueue.baseState = u,
                  n.memoizedState = u,
                  n.flags & 256) {
                      n = Kp(t, n, r, a);
                      break t
                  } else if (r !== c) {
                      c = Fe(Error(o(424)), n),
                      Ms(c),
                      n = Kp(t, n, r, a);
                      break t
                  } else {
                      switch (t = n.stateNode.containerInfo,
                      t.nodeType) {
                      case 9:
                          t = t.body;
                          break;
                      default:
                          t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                      }
                      for (Ut = We(t.firstChild),
                      oe = n,
                      Ct = !0,
                      ei = null,
                      Ze = !0,
                      a = Gm(n, null, r, a),
                      n.child = a; a; )
                          a.flags = a.flags & -3 | 4096,
                          a = a.sibling
                  }
              else {
                  if (Hi(),
                  r === c) {
                      n = Bn(t, n, a);
                      break t
                  }
                  ce(t, n, r, a)
              }
              n = n.child
          }
          return n;
      case 26:
          return So(t, n),
          t === null ? (a = cg(n.type, null, n.pendingProps, null)) ? n.memoizedState = a : Ct || (a = n.type,
          t = n.pendingProps,
          r = Uo(yt.current).createElement(a),
          r[re] = n,
          r[ge] = t,
          ue(r, a, t),
          ae(r),
          n.stateNode = r) : n.memoizedState = cg(n.type, t.memoizedProps, n.pendingProps, t.memoizedState),
          null;
      case 27:
          return qe(n),
          t === null && Ct && (r = n.stateNode = rg(n.type, n.pendingProps, yt.current),
          oe = n,
          Ze = !0,
          c = Ut,
          yi(n.type) ? (Iu = c,
          Ut = We(r.firstChild)) : Ut = c),
          ce(t, n, n.pendingProps.children, a),
          So(t, n),
          t === null && (n.flags |= 4194304),
          n.child;
      case 5:
          return t === null && Ct && ((c = r = Ut) && (r = xT(r, n.type, n.pendingProps, Ze),
          r !== null ? (n.stateNode = r,
          oe = n,
          Ut = We(r.firstChild),
          Ze = !1,
          c = !0) : c = !1),
          c || ni(n)),
          qe(n),
          c = n.type,
          u = n.pendingProps,
          v = t !== null ? t.memoizedProps : null,
          r = u.children,
          Ku(c, u) ? r = null : v !== null && Ku(c, v) && (n.flags |= 32),
          n.memoizedState !== null && (c = Qc(t, n, zw, null, null, a),
          er._currentValue = c),
          So(t, n),
          ce(t, n, r, a),
          n.child;
      case 6:
          return t === null && Ct && ((t = a = Ut) && (a = bT(a, n.pendingProps, Ze),
          a !== null ? (n.stateNode = a,
          oe = n,
          Ut = null,
          t = !0) : t = !1),
          t || ni(n)),
          null;
      case 13:
          return Zp(t, n, a);
      case 4:
          return Ft(n, n.stateNode.containerInfo),
          r = n.pendingProps,
          t === null ? n.child = Qi(n, null, r, a) : ce(t, n, r, a),
          n.child;
      case 11:
          return Pp(t, n, n.type, n.pendingProps, a);
      case 7:
          return ce(t, n, n.pendingProps, a),
          n.child;
      case 8:
          return ce(t, n, n.pendingProps.children, a),
          n.child;
      case 12:
          return ce(t, n, n.pendingProps.children, a),
          n.child;
      case 10:
          return r = n.pendingProps,
          ii(n, n.type, r.value),
          ce(t, n, r.children, a),
          n.child;
      case 9:
          return c = n.type._context,
          r = n.pendingProps.children,
          Gi(n),
          c = le(c),
          r = r(c),
          n.flags |= 1,
          ce(t, n, r, a),
          n.child;
      case 14:
          return Hp(t, n, n.type, n.pendingProps, a);
      case 15:
          return qp(t, n, n.type, n.pendingProps, a);
      case 19:
          return Wp(t, n, a);
      case 31:
          return qw(t, n, a);
      case 22:
          return Gp(t, n, a, n.pendingProps);
      case 24:
          return Gi(n),
          r = le($t),
          t === null ? (c = Bc(),
          c === null && (c = Bt,
          u = Lc(),
          c.pooledCache = u,
          u.refCount++,
          u !== null && (c.pooledCacheLanes |= a),
          c = u),
          n.memoizedState = {
              parent: r,
              cache: c
          },
          kc(n),
          ii(n, $t, c)) : ((t.lanes & a) !== 0 && (Pc(t, n),
          Ls(n, null, null, a),
          zs()),
          c = t.memoizedState,
          u = n.memoizedState,
          c.parent !== r ? (c = {
              parent: r,
              cache: r
          },
          n.memoizedState = c,
          n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c),
          ii(n, $t, r)) : (r = u.cache,
          ii(n, $t, r),
          r !== c.cache && zc(n, [$t], a, !0))),
          ce(t, n, n.pendingProps.children, a),
          n.child;
      case 29:
          throw n.pendingProps
      }
      throw Error(o(156, n.tag))
  }
  function Un(t) {
      t.flags |= 4
  }
  function Su(t, n, a, r, c) {
      if ((n = (t.mode & 32) !== 0) && (n = !1),
      n) {
          if (t.flags |= 16777216,
          (c & 335544128) === c)
              if (t.stateNode.complete)
                  t.flags |= 8192;
              else if (Cy())
                  t.flags |= 8192;
              else
                  throw Fi = so,
                  Uc
      } else
          t.flags &= -16777217
  }
  function Ip(t, n) {
      if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
          t.flags &= -16777217;
      else if (t.flags |= 16777216,
      !mg(n))
          if (Cy())
              t.flags |= 8192;
          else
              throw Fi = so,
              Uc
  }
  function To(t, n) {
      n !== null && (t.flags |= 4),
      t.flags & 16384 && (n = t.tag !== 22 ? Dh() : 536870912,
      t.lanes |= n,
      Ua |= n)
  }
  function Hs(t, n) {
      if (!Ct)
          switch (t.tailMode) {
          case "hidden":
              n = t.tail;
              for (var a = null; n !== null; )
                  n.alternate !== null && (a = n),
                  n = n.sibling;
              a === null ? t.tail = null : a.sibling = null;
              break;
          case "collapsed":
              a = t.tail;
              for (var r = null; a !== null; )
                  a.alternate !== null && (r = a),
                  a = a.sibling;
              r === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
          }
  }
  function kt(t) {
      var n = t.alternate !== null && t.alternate.child === t.child
        , a = 0
        , r = 0;
      if (n)
          for (var c = t.child; c !== null; )
              a |= c.lanes | c.childLanes,
              r |= c.subtreeFlags & 65011712,
              r |= c.flags & 65011712,
              c.return = t,
              c = c.sibling;
      else
          for (c = t.child; c !== null; )
              a |= c.lanes | c.childLanes,
              r |= c.subtreeFlags,
              r |= c.flags,
              c.return = t,
              c = c.sibling;
      return t.subtreeFlags |= r,
      t.childLanes = a,
      n
  }
  function Yw(t, n, a) {
      var r = n.pendingProps;
      switch (jc(n),
      n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
          return kt(n),
          null;
      case 1:
          return kt(n),
          null;
      case 3:
          return a = n.stateNode,
          r = null,
          t !== null && (r = t.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          zn($t),
          _t(),
          a.pendingContext && (a.context = a.pendingContext,
          a.pendingContext = null),
          (t === null || t.child === null) && (Ca(n) ? Un(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024,
          Oc())),
          kt(n),
          null;
      case 26:
          var c = n.type
            , u = n.memoizedState;
          return t === null ? (Un(n),
          u !== null ? (kt(n),
          Ip(n, u)) : (kt(n),
          Su(n, c, null, r, a))) : u ? u !== t.memoizedState ? (Un(n),
          kt(n),
          Ip(n, u)) : (kt(n),
          n.flags &= -16777217) : (t = t.memoizedProps,
          t !== r && Un(n),
          kt(n),
          Su(n, c, t, r, a)),
          null;
      case 27:
          if (mn(n),
          a = yt.current,
          c = n.type,
          t !== null && n.stateNode != null)
              t.memoizedProps !== r && Un(n);
          else {
              if (!r) {
                  if (n.stateNode === null)
                      throw Error(o(166));
                  return kt(n),
                  null
              }
              t = W.current,
              Ca(n) ? Dm(n) : (t = rg(c, r, a),
              n.stateNode = t,
              Un(n))
          }
          return kt(n),
          null;
      case 5:
          if (mn(n),
          c = n.type,
          t !== null && n.stateNode != null)
              t.memoizedProps !== r && Un(n);
          else {
              if (!r) {
                  if (n.stateNode === null)
                      throw Error(o(166));
                  return kt(n),
                  null
              }
              if (u = W.current,
              Ca(n))
                  Dm(n);
              else {
                  var v = Uo(yt.current);
                  switch (u) {
                  case 1:
                      u = v.createElementNS("http://www.w3.org/2000/svg", c);
                      break;
                  case 2:
                      u = v.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                      break;
                  default:
                      switch (c) {
                      case "svg":
                          u = v.createElementNS("http://www.w3.org/2000/svg", c);
                          break;
                      case "math":
                          u = v.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                          break;
                      case "script":
                          u = v.createElement("div"),
                          u.innerHTML = "<script><\/script>",
                          u = u.removeChild(u.firstChild);
                          break;
                      case "select":
                          u = typeof r.is == "string" ? v.createElement("select", {
                              is: r.is
                          }) : v.createElement("select"),
                          r.multiple ? u.multiple = !0 : r.size && (u.size = r.size);
                          break;
                      default:
                          u = typeof r.is == "string" ? v.createElement(c, {
                              is: r.is
                          }) : v.createElement(c)
                      }
                  }
                  u[re] = n,
                  u[ge] = r;
                  t: for (v = n.child; v !== null; ) {
                      if (v.tag === 5 || v.tag === 6)
                          u.appendChild(v.stateNode);
                      else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                          v.child.return = v,
                          v = v.child;
                          continue
                      }
                      if (v === n)
                          break t;
                      for (; v.sibling === null; ) {
                          if (v.return === null || v.return === n)
                              break t;
                          v = v.return
                      }
                      v.sibling.return = v.return,
                      v = v.sibling
                  }
                  n.stateNode = u;
                  t: switch (ue(u, c, r),
                  c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break t;
                  case "img":
                      r = !0;
                      break t;
                  default:
                      r = !1
                  }
                  r && Un(n)
              }
          }
          return kt(n),
          Su(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, a),
          null;
      case 6:
          if (t && n.stateNode != null)
              t.memoizedProps !== r && Un(n);
          else {
              if (typeof r != "string" && n.stateNode === null)
                  throw Error(o(166));
              if (t = yt.current,
              Ca(n)) {
                  if (t = n.stateNode,
                  a = n.memoizedProps,
                  r = null,
                  c = oe,
                  c !== null)
                      switch (c.tag) {
                      case 27:
                      case 5:
                          r = c.memoizedProps
                      }
                  t[re] = n,
                  t = !!(t.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || Zy(t.nodeValue, a)),
                  t || ni(n, !0)
              } else
                  t = Uo(t).createTextNode(r),
                  t[re] = n,
                  n.stateNode = t
          }
          return kt(n),
          null;
      case 31:
          if (a = n.memoizedState,
          t === null || t.memoizedState !== null) {
              if (r = Ca(n),
              a !== null) {
                  if (t === null) {
                      if (!r)
                          throw Error(o(318));
                      if (t = n.memoizedState,
                      t = t !== null ? t.dehydrated : null,
                      !t)
                          throw Error(o(557));
                      t[re] = n
                  } else
                      Hi(),
                      (n.flags & 128) === 0 && (n.memoizedState = null),
                      n.flags |= 4;
                  kt(n),
                  t = !1
              } else
                  a = Oc(),
                  t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
                  t = !0;
              if (!t)
                  return n.flags & 256 ? (_e(n),
                  n) : (_e(n),
                  null);
              if ((n.flags & 128) !== 0)
                  throw Error(o(558))
          }
          return kt(n),
          null;
      case 13:
          if (r = n.memoizedState,
          t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
              if (c = Ca(n),
              r !== null && r.dehydrated !== null) {
                  if (t === null) {
                      if (!c)
                          throw Error(o(318));
                      if (c = n.memoizedState,
                      c = c !== null ? c.dehydrated : null,
                      !c)
                          throw Error(o(317));
                      c[re] = n
                  } else
                      Hi(),
                      (n.flags & 128) === 0 && (n.memoizedState = null),
                      n.flags |= 4;
                  kt(n),
                  c = !1
              } else
                  c = Oc(),
                  t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c),
                  c = !0;
              if (!c)
                  return n.flags & 256 ? (_e(n),
                  n) : (_e(n),
                  null)
          }
          return _e(n),
          (n.flags & 128) !== 0 ? (n.lanes = a,
          n) : (a = r !== null,
          t = t !== null && t.memoizedState !== null,
          a && (r = n.child,
          c = null,
          r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (c = r.alternate.memoizedState.cachePool.pool),
          u = null,
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (u = r.memoizedState.cachePool.pool),
          u !== c && (r.flags |= 2048)),
          a !== t && a && (n.child.flags |= 8192),
          To(n, n.updateQueue),
          kt(n),
          null);
      case 4:
          return _t(),
          t === null && Gu(n.stateNode.containerInfo),
          kt(n),
          null;
      case 10:
          return zn(n.type),
          kt(n),
          null;
      case 19:
          if (F(Qt),
          r = n.memoizedState,
          r === null)
              return kt(n),
              null;
          if (c = (n.flags & 128) !== 0,
          u = r.rendering,
          u === null)
              if (c)
                  Hs(r, !1);
              else {
                  if (Yt !== 0 || t !== null && (t.flags & 128) !== 0)
                      for (t = n.child; t !== null; ) {
                          if (u = co(t),
                          u !== null) {
                              for (n.flags |= 128,
                              Hs(r, !1),
                              t = u.updateQueue,
                              n.updateQueue = t,
                              To(n, t),
                              n.subtreeFlags = 0,
                              t = a,
                              a = n.child; a !== null; )
                                  Nm(a, t),
                                  a = a.sibling;
                              return $(Qt, Qt.current & 1 | 2),
                              Ct && Dn(n, r.treeForkCount),
                              n.child
                          }
                          t = t.sibling
                      }
                  r.tail !== null && Ne() > Mo && (n.flags |= 128,
                  c = !0,
                  Hs(r, !1),
                  n.lanes = 4194304)
              }
          else {
              if (!c)
                  if (t = co(u),
                  t !== null) {
                      if (n.flags |= 128,
                      c = !0,
                      t = t.updateQueue,
                      n.updateQueue = t,
                      To(n, t),
                      Hs(r, !0),
                      r.tail === null && r.tailMode === "hidden" && !u.alternate && !Ct)
                          return kt(n),
                          null
                  } else
                      2 * Ne() - r.renderingStartTime > Mo && a !== 536870912 && (n.flags |= 128,
                      c = !0,
                      Hs(r, !1),
                      n.lanes = 4194304);
              r.isBackwards ? (u.sibling = n.child,
              n.child = u) : (t = r.last,
              t !== null ? t.sibling = u : n.child = u,
              r.last = u)
          }
          return r.tail !== null ? (t = r.tail,
          r.rendering = t,
          r.tail = t.sibling,
          r.renderingStartTime = Ne(),
          t.sibling = null,
          a = Qt.current,
          $(Qt, c ? a & 1 | 2 : a & 1),
          Ct && Dn(n, r.treeForkCount),
          t) : (kt(n),
          null);
      case 22:
      case 23:
          return _e(n),
          Yc(),
          r = n.memoizedState !== null,
          t !== null ? t.memoizedState !== null !== r && (n.flags |= 8192) : r && (n.flags |= 8192),
          r ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (kt(n),
          n.subtreeFlags & 6 && (n.flags |= 8192)) : kt(n),
          a = n.updateQueue,
          a !== null && To(n, a.retryQueue),
          a = null,
          t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
          r = null,
          n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool),
          r !== a && (n.flags |= 2048),
          t !== null && F(Yi),
          null;
      case 24:
          return a = null,
          t !== null && (a = t.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          zn($t),
          kt(n),
          null;
      case 25:
          return null;
      case 30:
          return null
      }
      throw Error(o(156, n.tag))
  }
  function Xw(t, n) {
      switch (jc(n),
      n.tag) {
      case 1:
          return t = n.flags,
          t & 65536 ? (n.flags = t & -65537 | 128,
          n) : null;
      case 3:
          return zn($t),
          _t(),
          t = n.flags,
          (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128,
          n) : null;
      case 26:
      case 27:
      case 5:
          return mn(n),
          null;
      case 31:
          if (n.memoizedState !== null) {
              if (_e(n),
              n.alternate === null)
                  throw Error(o(340));
              Hi()
          }
          return t = n.flags,
          t & 65536 ? (n.flags = t & -65537 | 128,
          n) : null;
      case 13:
          if (_e(n),
          t = n.memoizedState,
          t !== null && t.dehydrated !== null) {
              if (n.alternate === null)
                  throw Error(o(340));
              Hi()
          }
          return t = n.flags,
          t & 65536 ? (n.flags = t & -65537 | 128,
          n) : null;
      case 19:
          return F(Qt),
          null;
      case 4:
          return _t(),
          null;
      case 10:
          return zn(n.type),
          null;
      case 22:
      case 23:
          return _e(n),
          Yc(),
          t !== null && F(Yi),
          t = n.flags,
          t & 65536 ? (n.flags = t & -65537 | 128,
          n) : null;
      case 24:
          return zn($t),
          null;
      case 25:
          return null;
      default:
          return null
      }
  }
  function ty(t, n) {
      switch (jc(n),
      n.tag) {
      case 3:
          zn($t),
          _t();
          break;
      case 26:
      case 27:
      case 5:
          mn(n);
          break;
      case 4:
          _t();
          break;
      case 31:
          n.memoizedState !== null && _e(n);
          break;
      case 13:
          _e(n);
          break;
      case 19:
          F(Qt);
          break;
      case 10:
          zn(n.type);
          break;
      case 22:
      case 23:
          _e(n),
          Yc(),
          t !== null && F(Yi);
          break;
      case 24:
          zn($t)
      }
  }
  function qs(t, n) {
      try {
          var a = n.updateQueue
            , r = a !== null ? a.lastEffect : null;
          if (r !== null) {
              var c = r.next;
              a = c;
              do {
                  if ((a.tag & t) === t) {
                      r = void 0;
                      var u = a.create
                        , v = a.inst;
                      r = u(),
                      v.destroy = r
                  }
                  a = a.next
              } while (a !== c)
          }
      } catch (S) {
          Dt(n, n.return, S)
      }
  }
  function ci(t, n, a) {
      try {
          var r = n.updateQueue
            , c = r !== null ? r.lastEffect : null;
          if (c !== null) {
              var u = c.next;
              r = u;
              do {
                  if ((r.tag & t) === t) {
                      var v = r.inst
                        , S = v.destroy;
                      if (S !== void 0) {
                          v.destroy = void 0,
                          c = n;
                          var A = a
                            , V = S;
                          try {
                              V()
                          } catch (X) {
                              Dt(c, A, X)
                          }
                      }
                  }
                  r = r.next
              } while (r !== u)
          }
      } catch (X) {
          Dt(n, n.return, X)
      }
  }
  function ey(t) {
      var n = t.updateQueue;
      if (n !== null) {
          var a = t.stateNode;
          try {
              Xm(n, a)
          } catch (r) {
              Dt(t, t.return, r)
          }
      }
  }
  function ny(t, n, a) {
      a.props = Zi(t.type, t.memoizedProps),
      a.state = t.memoizedState;
      try {
          a.componentWillUnmount()
      } catch (r) {
          Dt(t, n, r)
      }
  }
  function Gs(t, n) {
      try {
          var a = t.ref;
          if (a !== null) {
              switch (t.tag) {
              case 26:
              case 27:
              case 5:
                  var r = t.stateNode;
                  break;
              case 30:
                  r = t.stateNode;
                  break;
              default:
                  r = t.stateNode
              }
              typeof a == "function" ? t.refCleanup = a(r) : a.current = r
          }
      } catch (c) {
          Dt(t, n, c)
      }
  }
  function vn(t, n) {
      var a = t.ref
        , r = t.refCleanup;
      if (a !== null)
          if (typeof r == "function")
              try {
                  r()
              } catch (c) {
                  Dt(t, n, c)
              } finally {
                  t.refCleanup = null,
                  t = t.alternate,
                  t != null && (t.refCleanup = null)
              }
          else if (typeof a == "function")
              try {
                  a(null)
              } catch (c) {
                  Dt(t, n, c)
              }
          else
              a.current = null
  }
  function iy(t) {
      var n = t.type
        , a = t.memoizedProps
        , r = t.stateNode;
      try {
          t: switch (n) {
          case "button":
          case "input":
          case "select":
          case "textarea":
              a.autoFocus && r.focus();
              break t;
          case "img":
              a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet)
          }
      } catch (c) {
          Dt(t, t.return, c)
      }
  }
  function wu(t, n, a) {
      try {
          var r = t.stateNode;
          hT(r, t.type, a, n),
          r[ge] = n
      } catch (c) {
          Dt(t, t.return, c)
      }
  }
  function ay(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && yi(t.type) || t.tag === 4
  }
  function Tu(t) {
      t: for (; ; ) {
          for (; t.sibling === null; ) {
              if (t.return === null || ay(t.return))
                  return null;
              t = t.return
          }
          for (t.sibling.return = t.return,
          t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
              if (t.tag === 27 && yi(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                  continue t;
              t.child.return = t,
              t = t.child
          }
          if (!(t.flags & 2))
              return t.stateNode
      }
  }
  function Eu(t, n, a) {
      var r = t.tag;
      if (r === 5 || r === 6)
          t = t.stateNode,
          n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
          n.appendChild(t),
          a = a._reactRootContainer,
          a != null || n.onclick !== null || (n.onclick = jn));
      else if (r !== 4 && (r === 27 && yi(t.type) && (a = t.stateNode,
      n = null),
      t = t.child,
      t !== null))
          for (Eu(t, n, a),
          t = t.sibling; t !== null; )
              Eu(t, n, a),
              t = t.sibling
  }
  function Eo(t, n, a) {
      var r = t.tag;
      if (r === 5 || r === 6)
          t = t.stateNode,
          n ? a.insertBefore(t, n) : a.appendChild(t);
      else if (r !== 4 && (r === 27 && yi(t.type) && (a = t.stateNode),
      t = t.child,
      t !== null))
          for (Eo(t, n, a),
          t = t.sibling; t !== null; )
              Eo(t, n, a),
              t = t.sibling
  }
  function sy(t) {
      var n = t.stateNode
        , a = t.memoizedProps;
      try {
          for (var r = t.type, c = n.attributes; c.length; )
              n.removeAttributeNode(c[0]);
          ue(n, r, a),
          n[re] = t,
          n[ge] = a
      } catch (u) {
          Dt(t, t.return, u)
      }
  }
  var kn = !1
    , It = !1
    , Cu = !1
    , ry = typeof WeakSet == "function" ? WeakSet : Set
    , se = null;
  function Fw(t, n) {
      if (t = t.containerInfo,
      Fu = Xo,
      t = vm(t),
      vc(t)) {
          if ("selectionStart"in t)
              var a = {
                  start: t.selectionStart,
                  end: t.selectionEnd
              };
          else
              t: {
                  a = (a = t.ownerDocument) && a.defaultView || window;
                  var r = a.getSelection && a.getSelection();
                  if (r && r.rangeCount !== 0) {
                      a = r.anchorNode;
                      var c = r.anchorOffset
                        , u = r.focusNode;
                      r = r.focusOffset;
                      try {
                          a.nodeType,
                          u.nodeType
                      } catch {
                          a = null;
                          break t
                      }
                      var v = 0
                        , S = -1
                        , A = -1
                        , V = 0
                        , X = 0
                        , K = t
                        , B = null;
                      e: for (; ; ) {
                          for (var P; K !== a || c !== 0 && K.nodeType !== 3 || (S = v + c),
                          K !== u || r !== 0 && K.nodeType !== 3 || (A = v + r),
                          K.nodeType === 3 && (v += K.nodeValue.length),
                          (P = K.firstChild) !== null; )
                              B = K,
                              K = P;
                          for (; ; ) {
                              if (K === t)
                                  break e;
                              if (B === a && ++V === c && (S = v),
                              B === u && ++X === r && (A = v),
                              (P = K.nextSibling) !== null)
                                  break;
                              K = B,
                              B = K.parentNode
                          }
                          K = P
                      }
                      a = S === -1 || A === -1 ? null : {
                          start: S,
                          end: A
                      }
                  } else
                      a = null
              }
          a = a || {
              start: 0,
              end: 0
          }
      } else
          a = null;
      for (Qu = {
          focusedElem: t,
          selectionRange: a
      },
      Xo = !1,
      se = n; se !== null; )
          if (n = se,
          t = n.child,
          (n.subtreeFlags & 1028) !== 0 && t !== null)
              t.return = n,
              se = t;
          else
              for (; se !== null; ) {
                  switch (n = se,
                  u = n.alternate,
                  t = n.flags,
                  n.tag) {
                  case 0:
                      if ((t & 4) !== 0 && (t = n.updateQueue,
                      t = t !== null ? t.events : null,
                      t !== null))
                          for (a = 0; a < t.length; a++)
                              c = t[a],
                              c.ref.impl = c.nextImpl;
                      break;
                  case 11:
                  case 15:
                      break;
                  case 1:
                      if ((t & 1024) !== 0 && u !== null) {
                          t = void 0,
                          a = n,
                          c = u.memoizedProps,
                          u = u.memoizedState,
                          r = a.stateNode;
                          try {
                              var tt = Zi(a.type, c);
                              t = r.getSnapshotBeforeUpdate(tt, u),
                              r.__reactInternalSnapshotBeforeUpdate = t
                          } catch (lt) {
                              Dt(a, a.return, lt)
                          }
                      }
                      break;
                  case 3:
                      if ((t & 1024) !== 0) {
                          if (t = n.stateNode.containerInfo,
                          a = t.nodeType,
                          a === 9)
                              $u(t);
                          else if (a === 1)
                              switch (t.nodeName) {
                              case "HEAD":
                              case "HTML":
                              case "BODY":
                                  $u(t);
                                  break;
                              default:
                                  t.textContent = ""
                              }
                      }
                      break;
                  case 5:
                  case 26:
                  case 27:
                  case 6:
                  case 4:
                  case 17:
                      break;
                  default:
                      if ((t & 1024) !== 0)
                          throw Error(o(163))
                  }
                  if (t = n.sibling,
                  t !== null) {
                      t.return = n.return,
                      se = t;
                      break
                  }
                  se = n.return
              }
  }
  function oy(t, n, a) {
      var r = a.flags;
      switch (a.tag) {
      case 0:
      case 11:
      case 15:
          Hn(t, a),
          r & 4 && qs(5, a);
          break;
      case 1:
          if (Hn(t, a),
          r & 4)
              if (t = a.stateNode,
              n === null)
                  try {
                      t.componentDidMount()
                  } catch (v) {
                      Dt(a, a.return, v)
                  }
              else {
                  var c = Zi(a.type, n.memoizedProps);
                  n = n.memoizedState;
                  try {
                      t.componentDidUpdate(c, n, t.__reactInternalSnapshotBeforeUpdate)
                  } catch (v) {
                      Dt(a, a.return, v)
                  }
              }
          r & 64 && ey(a),
          r & 512 && Gs(a, a.return);
          break;
      case 3:
          if (Hn(t, a),
          r & 64 && (t = a.updateQueue,
          t !== null)) {
              if (n = null,
              a.child !== null)
                  switch (a.child.tag) {
                  case 27:
                  case 5:
                      n = a.child.stateNode;
                      break;
                  case 1:
                      n = a.child.stateNode
                  }
              try {
                  Xm(t, n)
              } catch (v) {
                  Dt(a, a.return, v)
              }
          }
          break;
      case 27:
          n === null && r & 4 && sy(a);
      case 26:
      case 5:
          Hn(t, a),
          n === null && r & 4 && iy(a),
          r & 512 && Gs(a, a.return);
          break;
      case 12:
          Hn(t, a);
          break;
      case 31:
          Hn(t, a),
          r & 4 && uy(t, a);
          break;
      case 13:
          Hn(t, a),
          r & 4 && fy(t, a),
          r & 64 && (t = a.memoizedState,
          t !== null && (t = t.dehydrated,
          t !== null && (a = eT.bind(null, a),
          ST(t, a))));
          break;
      case 22:
          if (r = a.memoizedState !== null || kn,
          !r) {
              n = n !== null && n.memoizedState !== null || It,
              c = kn;
              var u = It;
              kn = r,
              (It = n) && !u ? qn(t, a, (a.subtreeFlags & 8772) !== 0) : Hn(t, a),
              kn = c,
              It = u
          }
          break;
      case 30:
          break;
      default:
          Hn(t, a)
      }
  }
  function ly(t) {
      var n = t.alternate;
      n !== null && (t.alternate = null,
      ly(n)),
      t.child = null,
      t.deletions = null,
      t.sibling = null,
      t.tag === 5 && (n = t.stateNode,
      n !== null && ec(n)),
      t.stateNode = null,
      t.return = null,
      t.dependencies = null,
      t.memoizedProps = null,
      t.memoizedState = null,
      t.pendingProps = null,
      t.stateNode = null,
      t.updateQueue = null
  }
  var Pt = null
    , xe = !1;
  function Pn(t, n, a) {
      for (a = a.child; a !== null; )
          cy(t, n, a),
          a = a.sibling
  }
  function cy(t, n, a) {
      if (Me && typeof Me.onCommitFiberUnmount == "function")
          try {
              Me.onCommitFiberUnmount(hs, a)
          } catch {}
      switch (a.tag) {
      case 26:
          It || vn(a, n),
          Pn(t, n, a),
          a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
          a.parentNode.removeChild(a));
          break;
      case 27:
          It || vn(a, n);
          var r = Pt
            , c = xe;
          yi(a.type) && (Pt = a.stateNode,
          xe = !1),
          Pn(t, n, a),
          Js(a.stateNode),
          Pt = r,
          xe = c;
          break;
      case 5:
          It || vn(a, n);
      case 6:
          if (r = Pt,
          c = xe,
          Pt = null,
          Pn(t, n, a),
          Pt = r,
          xe = c,
          Pt !== null)
              if (xe)
                  try {
                      (Pt.nodeType === 9 ? Pt.body : Pt.nodeName === "HTML" ? Pt.ownerDocument.body : Pt).removeChild(a.stateNode)
                  } catch (u) {
                      Dt(a, n, u)
                  }
              else
                  try {
                      Pt.removeChild(a.stateNode)
                  } catch (u) {
                      Dt(a, n, u)
                  }
          break;
      case 18:
          Pt !== null && (xe ? (t = Pt,
          eg(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode),
          Fa(t)) : eg(Pt, a.stateNode));
          break;
      case 4:
          r = Pt,
          c = xe,
          Pt = a.stateNode.containerInfo,
          xe = !0,
          Pn(t, n, a),
          Pt = r,
          xe = c;
          break;
      case 0:
      case 11:
      case 14:
      case 15:
          ci(2, a, n),
          It || ci(4, a, n),
          Pn(t, n, a);
          break;
      case 1:
          It || (vn(a, n),
          r = a.stateNode,
          typeof r.componentWillUnmount == "function" && ny(a, n, r)),
          Pn(t, n, a);
          break;
      case 21:
          Pn(t, n, a);
          break;
      case 22:
          It = (r = It) || a.memoizedState !== null,
          Pn(t, n, a),
          It = r;
          break;
      default:
          Pn(t, n, a)
      }
  }
  function uy(t, n) {
      if (n.memoizedState === null && (t = n.alternate,
      t !== null && (t = t.memoizedState,
      t !== null))) {
          t = t.dehydrated;
          try {
              Fa(t)
          } catch (a) {
              Dt(n, n.return, a)
          }
      }
  }
  function fy(t, n) {
      if (n.memoizedState === null && (t = n.alternate,
      t !== null && (t = t.memoizedState,
      t !== null && (t = t.dehydrated,
      t !== null))))
          try {
              Fa(t)
          } catch (a) {
              Dt(n, n.return, a)
          }
  }
  function Qw(t) {
      switch (t.tag) {
      case 31:
      case 13:
      case 19:
          var n = t.stateNode;
          return n === null && (n = t.stateNode = new ry),
          n;
      case 22:
          return t = t.stateNode,
          n = t._retryCache,
          n === null && (n = t._retryCache = new ry),
          n;
      default:
          throw Error(o(435, t.tag))
      }
  }
  function Co(t, n) {
      var a = Qw(t);
      n.forEach(function(r) {
          if (!a.has(r)) {
              a.add(r);
              var c = nT.bind(null, t, r);
              r.then(c, c)
          }
      })
  }
  function be(t, n) {
      var a = n.deletions;
      if (a !== null)
          for (var r = 0; r < a.length; r++) {
              var c = a[r]
                , u = t
                , v = n
                , S = v;
              t: for (; S !== null; ) {
                  switch (S.tag) {
                  case 27:
                      if (yi(S.type)) {
                          Pt = S.stateNode,
                          xe = !1;
                          break t
                      }
                      break;
                  case 5:
                      Pt = S.stateNode,
                      xe = !1;
                      break t;
                  case 3:
                  case 4:
                      Pt = S.stateNode.containerInfo,
                      xe = !0;
                      break t
                  }
                  S = S.return
              }
              if (Pt === null)
                  throw Error(o(160));
              cy(u, v, c),
              Pt = null,
              xe = !1,
              u = c.alternate,
              u !== null && (u.return = null),
              c.return = null
          }
      if (n.subtreeFlags & 13886)
          for (n = n.child; n !== null; )
              dy(n, t),
              n = n.sibling
  }
  var on = null;
  function dy(t, n) {
      var a = t.alternate
        , r = t.flags;
      switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
          be(n, t),
          Se(t),
          r & 4 && (ci(3, t, t.return),
          qs(3, t),
          ci(5, t, t.return));
          break;
      case 1:
          be(n, t),
          Se(t),
          r & 512 && (It || a === null || vn(a, a.return)),
          r & 64 && kn && (t = t.updateQueue,
          t !== null && (r = t.callbacks,
          r !== null && (a = t.shared.hiddenCallbacks,
          t.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
          break;
      case 26:
          var c = on;
          if (be(n, t),
          Se(t),
          r & 512 && (It || a === null || vn(a, a.return)),
          r & 4) {
              var u = a !== null ? a.memoizedState : null;
              if (r = t.memoizedState,
              a === null)
                  if (r === null)
                      if (t.stateNode === null) {
                          t: {
                              r = t.type,
                              a = t.memoizedProps,
                              c = c.ownerDocument || c;
                              e: switch (r) {
                              case "title":
                                  u = c.getElementsByTagName("title")[0],
                                  (!u || u[ys] || u[re] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = c.createElement(r),
                                  c.head.insertBefore(u, c.querySelector("head > title"))),
                                  ue(u, r, a),
                                  u[re] = t,
                                  ae(u),
                                  r = u;
                                  break t;
                              case "link":
                                  var v = dg("link", "href", c).get(r + (a.href || ""));
                                  if (v) {
                                      for (var S = 0; S < v.length; S++)
                                          if (u = v[S],
                                          u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                              v.splice(S, 1);
                                              break e
                                          }
                                  }
                                  u = c.createElement(r),
                                  ue(u, r, a),
                                  c.head.appendChild(u);
                                  break;
                              case "meta":
                                  if (v = dg("meta", "content", c).get(r + (a.content || ""))) {
                                      for (S = 0; S < v.length; S++)
                                          if (u = v[S],
                                          u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                              v.splice(S, 1);
                                              break e
                                          }
                                  }
                                  u = c.createElement(r),
                                  ue(u, r, a),
                                  c.head.appendChild(u);
                                  break;
                              default:
                                  throw Error(o(468, r))
                              }
                              u[re] = t,
                              ae(u),
                              r = u
                          }
                          t.stateNode = r
                      } else
                          hg(c, t.type, t.stateNode);
                  else
                      t.stateNode = fg(c, r, t.memoizedProps);
              else
                  u !== r ? (u === null ? a.stateNode !== null && (a = a.stateNode,
                  a.parentNode.removeChild(a)) : u.count--,
                  r === null ? hg(c, t.type, t.stateNode) : fg(c, r, t.memoizedProps)) : r === null && t.stateNode !== null && wu(t, t.memoizedProps, a.memoizedProps)
          }
          break;
      case 27:
          be(n, t),
          Se(t),
          r & 512 && (It || a === null || vn(a, a.return)),
          a !== null && r & 4 && wu(t, t.memoizedProps, a.memoizedProps);
          break;
      case 5:
          if (be(n, t),
          Se(t),
          r & 512 && (It || a === null || vn(a, a.return)),
          t.flags & 32) {
              c = t.stateNode;
              try {
                  pa(c, "")
              } catch (tt) {
                  Dt(t, t.return, tt)
              }
          }
          r & 4 && t.stateNode != null && (c = t.memoizedProps,
          wu(t, c, a !== null ? a.memoizedProps : c)),
          r & 1024 && (Cu = !0);
          break;
      case 6:
          if (be(n, t),
          Se(t),
          r & 4) {
              if (t.stateNode === null)
                  throw Error(o(162));
              r = t.memoizedProps,
              a = t.stateNode;
              try {
                  a.nodeValue = r
              } catch (tt) {
                  Dt(t, t.return, tt)
              }
          }
          break;
      case 3:
          if (Ho = null,
          c = on,
          on = ko(n.containerInfo),
          be(n, t),
          on = c,
          Se(t),
          r & 4 && a !== null && a.memoizedState.isDehydrated)
              try {
                  Fa(n.containerInfo)
              } catch (tt) {
                  Dt(t, t.return, tt)
              }
          Cu && (Cu = !1,
          hy(t));
          break;
      case 4:
          r = on,
          on = ko(t.stateNode.containerInfo),
          be(n, t),
          Se(t),
          on = r;
          break;
      case 12:
          be(n, t),
          Se(t);
          break;
      case 31:
          be(n, t),
          Se(t),
          r & 4 && (r = t.updateQueue,
          r !== null && (t.updateQueue = null,
          Co(t, r)));
          break;
      case 13:
          be(n, t),
          Se(t),
          t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (No = Ne()),
          r & 4 && (r = t.updateQueue,
          r !== null && (t.updateQueue = null,
          Co(t, r)));
          break;
      case 22:
          c = t.memoizedState !== null;
          var A = a !== null && a.memoizedState !== null
            , V = kn
            , X = It;
          if (kn = V || c,
          It = X || A,
          be(n, t),
          It = X,
          kn = V,
          Se(t),
          r & 8192)
              t: for (n = t.stateNode,
              n._visibility = c ? n._visibility & -2 : n._visibility | 1,
              c && (a === null || A || kn || It || $i(t)),
              a = null,
              n = t; ; ) {
                  if (n.tag === 5 || n.tag === 26) {
                      if (a === null) {
                          A = a = n;
                          try {
                              if (u = A.stateNode,
                              c)
                                  v = u.style,
                                  typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                              else {
                                  S = A.stateNode;
                                  var K = A.memoizedProps.style
                                    , B = K != null && K.hasOwnProperty("display") ? K.display : null;
                                  S.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim()
                              }
                          } catch (tt) {
                              Dt(A, A.return, tt)
                          }
                      }
                  } else if (n.tag === 6) {
                      if (a === null) {
                          A = n;
                          try {
                              A.stateNode.nodeValue = c ? "" : A.memoizedProps
                          } catch (tt) {
                              Dt(A, A.return, tt)
                          }
                      }
                  } else if (n.tag === 18) {
                      if (a === null) {
                          A = n;
                          try {
                              var P = A.stateNode;
                              c ? ng(P, !0) : ng(A.stateNode, !1)
                          } catch (tt) {
                              Dt(A, A.return, tt)
                          }
                      }
                  } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
                      n.child.return = n,
                      n = n.child;
                      continue
                  }
                  if (n === t)
                      break t;
                  for (; n.sibling === null; ) {
                      if (n.return === null || n.return === t)
                          break t;
                      a === n && (a = null),
                      n = n.return
                  }
                  a === n && (a = null),
                  n.sibling.return = n.return,
                  n = n.sibling
              }
          r & 4 && (r = t.updateQueue,
          r !== null && (a = r.retryQueue,
          a !== null && (r.retryQueue = null,
          Co(t, a))));
          break;
      case 19:
          be(n, t),
          Se(t),
          r & 4 && (r = t.updateQueue,
          r !== null && (t.updateQueue = null,
          Co(t, r)));
          break;
      case 30:
          break;
      case 21:
          break;
      default:
          be(n, t),
          Se(t)
      }
  }
  function Se(t) {
      var n = t.flags;
      if (n & 2) {
          try {
              for (var a, r = t.return; r !== null; ) {
                  if (ay(r)) {
                      a = r;
                      break
                  }
                  r = r.return
              }
              if (a == null)
                  throw Error(o(160));
              switch (a.tag) {
              case 27:
                  var c = a.stateNode
                    , u = Tu(t);
                  Eo(t, u, c);
                  break;
              case 5:
                  var v = a.stateNode;
                  a.flags & 32 && (pa(v, ""),
                  a.flags &= -33);
                  var S = Tu(t);
                  Eo(t, S, v);
                  break;
              case 3:
              case 4:
                  var A = a.stateNode.containerInfo
                    , V = Tu(t);
                  Eu(t, V, A);
                  break;
              default:
                  throw Error(o(161))
              }
          } catch (X) {
              Dt(t, t.return, X)
          }
          t.flags &= -3
      }
      n & 4096 && (t.flags &= -4097)
  }
  function hy(t) {
      if (t.subtreeFlags & 1024)
          for (t = t.child; t !== null; ) {
              var n = t;
              hy(n),
              n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
              t = t.sibling
          }
  }
  function Hn(t, n) {
      if (n.subtreeFlags & 8772)
          for (n = n.child; n !== null; )
              oy(t, n.alternate, n),
              n = n.sibling
  }
  function $i(t) {
      for (t = t.child; t !== null; ) {
          var n = t;
          switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
              ci(4, n, n.return),
              $i(n);
              break;
          case 1:
              vn(n, n.return);
              var a = n.stateNode;
              typeof a.componentWillUnmount == "function" && ny(n, n.return, a),
              $i(n);
              break;
          case 27:
              Js(n.stateNode);
          case 26:
          case 5:
              vn(n, n.return),
              $i(n);
              break;
          case 22:
              n.memoizedState === null && $i(n);
              break;
          case 30:
              $i(n);
              break;
          default:
              $i(n)
          }
          t = t.sibling
      }
  }
  function qn(t, n, a) {
      for (a = a && (n.subtreeFlags & 8772) !== 0,
      n = n.child; n !== null; ) {
          var r = n.alternate
            , c = t
            , u = n
            , v = u.flags;
          switch (u.tag) {
          case 0:
          case 11:
          case 15:
              qn(c, u, a),
              qs(4, u);
              break;
          case 1:
              if (qn(c, u, a),
              r = u,
              c = r.stateNode,
              typeof c.componentDidMount == "function")
                  try {
                      c.componentDidMount()
                  } catch (V) {
                      Dt(r, r.return, V)
                  }
              if (r = u,
              c = r.updateQueue,
              c !== null) {
                  var S = r.stateNode;
                  try {
                      var A = c.shared.hiddenCallbacks;
                      if (A !== null)
                          for (c.shared.hiddenCallbacks = null,
                          c = 0; c < A.length; c++)
                              Ym(A[c], S)
                  } catch (V) {
                      Dt(r, r.return, V)
                  }
              }
              a && v & 64 && ey(u),
              Gs(u, u.return);
              break;
          case 27:
              sy(u);
          case 26:
          case 5:
              qn(c, u, a),
              a && r === null && v & 4 && iy(u),
              Gs(u, u.return);
              break;
          case 12:
              qn(c, u, a);
              break;
          case 31:
              qn(c, u, a),
              a && v & 4 && uy(c, u);
              break;
          case 13:
              qn(c, u, a),
              a && v & 4 && fy(c, u);
              break;
          case 22:
              u.memoizedState === null && qn(c, u, a),
              Gs(u, u.return);
              break;
          case 30:
              break;
          default:
              qn(c, u, a)
          }
          n = n.sibling
      }
  }
  function Au(t, n) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
      t = null,
      n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++,
      a != null && js(a))
  }
  function Nu(t, n) {
      t = null,
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      n = n.memoizedState.cache,
      n !== t && (n.refCount++,
      t != null && js(t))
  }
  function ln(t, n, a, r) {
      if (n.subtreeFlags & 10256)
          for (n = n.child; n !== null; )
              my(t, n, a, r),
              n = n.sibling
  }
  function my(t, n, a, r) {
      var c = n.flags;
      switch (n.tag) {
      case 0:
      case 11:
      case 15:
          ln(t, n, a, r),
          c & 2048 && qs(9, n);
          break;
      case 1:
          ln(t, n, a, r);
          break;
      case 3:
          ln(t, n, a, r),
          c & 2048 && (t = null,
          n.alternate !== null && (t = n.alternate.memoizedState.cache),
          n = n.memoizedState.cache,
          n !== t && (n.refCount++,
          t != null && js(t)));
          break;
      case 12:
          if (c & 2048) {
              ln(t, n, a, r),
              t = n.stateNode;
              try {
                  var u = n.memoizedProps
                    , v = u.id
                    , S = u.onPostCommit;
                  typeof S == "function" && S(v, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
              } catch (A) {
                  Dt(n, n.return, A)
              }
          } else
              ln(t, n, a, r);
          break;
      case 31:
          ln(t, n, a, r);
          break;
      case 13:
          ln(t, n, a, r);
          break;
      case 23:
          break;
      case 22:
          u = n.stateNode,
          v = n.alternate,
          n.memoizedState !== null ? u._visibility & 2 ? ln(t, n, a, r) : Ys(t, n) : u._visibility & 2 ? ln(t, n, a, r) : (u._visibility |= 2,
          La(t, n, a, r, (n.subtreeFlags & 10256) !== 0 || !1)),
          c & 2048 && Au(v, n);
          break;
      case 24:
          ln(t, n, a, r),
          c & 2048 && Nu(n.alternate, n);
          break;
      default:
          ln(t, n, a, r)
      }
  }
  function La(t, n, a, r, c) {
      for (c = c && ((n.subtreeFlags & 10256) !== 0 || !1),
      n = n.child; n !== null; ) {
          var u = t
            , v = n
            , S = a
            , A = r
            , V = v.flags;
          switch (v.tag) {
          case 0:
          case 11:
          case 15:
              La(u, v, S, A, c),
              qs(8, v);
              break;
          case 23:
              break;
          case 22:
              var X = v.stateNode;
              v.memoizedState !== null ? X._visibility & 2 ? La(u, v, S, A, c) : Ys(u, v) : (X._visibility |= 2,
              La(u, v, S, A, c)),
              c && V & 2048 && Au(v.alternate, v);
              break;
          case 24:
              La(u, v, S, A, c),
              c && V & 2048 && Nu(v.alternate, v);
              break;
          default:
              La(u, v, S, A, c)
          }
          n = n.sibling
      }
  }
  function Ys(t, n) {
      if (n.subtreeFlags & 10256)
          for (n = n.child; n !== null; ) {
              var a = t
                , r = n
                , c = r.flags;
              switch (r.tag) {
              case 22:
                  Ys(a, r),
                  c & 2048 && Au(r.alternate, r);
                  break;
              case 24:
                  Ys(a, r),
                  c & 2048 && Nu(r.alternate, r);
                  break;
              default:
                  Ys(a, r)
              }
              n = n.sibling
          }
  }
  var Xs = 8192;
  function Va(t, n, a) {
      if (t.subtreeFlags & Xs)
          for (t = t.child; t !== null; )
              py(t, n, a),
              t = t.sibling
  }
  function py(t, n, a) {
      switch (t.tag) {
      case 26:
          Va(t, n, a),
          t.flags & Xs && t.memoizedState !== null && _T(a, on, t.memoizedState, t.memoizedProps);
          break;
      case 5:
          Va(t, n, a);
          break;
      case 3:
      case 4:
          var r = on;
          on = ko(t.stateNode.containerInfo),
          Va(t, n, a),
          on = r;
          break;
      case 22:
          t.memoizedState === null && (r = t.alternate,
          r !== null && r.memoizedState !== null ? (r = Xs,
          Xs = 16777216,
          Va(t, n, a),
          Xs = r) : Va(t, n, a));
          break;
      default:
          Va(t, n, a)
      }
  }
  function yy(t) {
      var n = t.alternate;
      if (n !== null && (t = n.child,
      t !== null)) {
          n.child = null;
          do
              n = t.sibling,
              t.sibling = null,
              t = n;
          while (t !== null)
      }
  }
  function Fs(t) {
      var n = t.deletions;
      if ((t.flags & 16) !== 0) {
          if (n !== null)
              for (var a = 0; a < n.length; a++) {
                  var r = n[a];
                  se = r,
                  vy(r, t)
              }
          yy(t)
      }
      if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
              gy(t),
              t = t.sibling
  }
  function gy(t) {
      switch (t.tag) {
      case 0:
      case 11:
      case 15:
          Fs(t),
          t.flags & 2048 && ci(9, t, t.return);
          break;
      case 3:
          Fs(t);
          break;
      case 12:
          Fs(t);
          break;
      case 22:
          var n = t.stateNode;
          t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3,
          Ao(t)) : Fs(t);
          break;
      default:
          Fs(t)
      }
  }
  function Ao(t) {
      var n = t.deletions;
      if ((t.flags & 16) !== 0) {
          if (n !== null)
              for (var a = 0; a < n.length; a++) {
                  var r = n[a];
                  se = r,
                  vy(r, t)
              }
          yy(t)
      }
      for (t = t.child; t !== null; ) {
          switch (n = t,
          n.tag) {
          case 0:
          case 11:
          case 15:
              ci(8, n, n.return),
              Ao(n);
              break;
          case 22:
              a = n.stateNode,
              a._visibility & 2 && (a._visibility &= -3,
              Ao(n));
              break;
          default:
              Ao(n)
          }
          t = t.sibling
      }
  }
  function vy(t, n) {
      for (; se !== null; ) {
          var a = se;
          switch (a.tag) {
          case 0:
          case 11:
          case 15:
              ci(8, a, n);
              break;
          case 23:
          case 22:
              if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                  var r = a.memoizedState.cachePool.pool;
                  r != null && r.refCount++
              }
              break;
          case 24:
              js(a.memoizedState.cache)
          }
          if (r = a.child,
          r !== null)
              r.return = a,
              se = r;
          else
              t: for (a = t; se !== null; ) {
                  r = se;
                  var c = r.sibling
                    , u = r.return;
                  if (ly(r),
                  r === a) {
                      se = null;
                      break t
                  }
                  if (c !== null) {
                      c.return = u,
                      se = c;
                      break t
                  }
                  se = u
              }
      }
  }
  var Kw = {
      getCacheForType: function(t) {
          var n = le($t)
            , a = n.data.get(t);
          return a === void 0 && (a = t(),
          n.data.set(t, a)),
          a
      },
      cacheSignal: function() {
          return le($t).controller.signal
      }
  }
    , Zw = typeof WeakMap == "function" ? WeakMap : Map
    , Rt = 0
    , Bt = null
    , bt = null
    , wt = 0
    , Ot = 0
    , ze = null
    , ui = !1
    , Ba = !1
    , Mu = !1
    , Gn = 0
    , Yt = 0
    , fi = 0
    , Wi = 0
    , ju = 0
    , Le = 0
    , Ua = 0
    , Qs = null
    , we = null
    , Ru = !1
    , No = 0
    , xy = 0
    , Mo = 1 / 0
    , jo = null
    , di = null
    , ne = 0
    , hi = null
    , ka = null
    , Yn = 0
    , Ou = 0
    , Du = null
    , by = null
    , Ks = 0
    , _u = null;
  function Ve() {
      return (Rt & 2) !== 0 && wt !== 0 ? wt & -wt : _.T !== null ? ku() : Vh()
  }
  function Sy() {
      if (Le === 0)
          if ((wt & 536870912) === 0 || Ct) {
              var t = Vr;
              Vr <<= 1,
              (Vr & 3932160) === 0 && (Vr = 262144),
              Le = t
          } else
              Le = 536870912;
      return t = De.current,
      t !== null && (t.flags |= 32),
      Le
  }
  function Te(t, n, a) {
      (t === Bt && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (Pa(t, 0),
      mi(t, wt, Le, !1)),
      ps(t, a),
      ((Rt & 2) === 0 || t !== Bt) && (t === Bt && ((Rt & 2) === 0 && (Wi |= a),
      Yt === 4 && mi(t, wt, Le, !1)),
      xn(t))
  }
  function wy(t, n, a) {
      if ((Rt & 6) !== 0)
          throw Error(o(327));
      var r = !a && (n & 127) === 0 && (n & t.expiredLanes) === 0 || ms(t, n)
        , c = r ? Jw(t, n) : Lu(t, n, !0)
        , u = r;
      do {
          if (c === 0) {
              Ba && !r && mi(t, n, 0, !1);
              break
          } else {
              if (a = t.current.alternate,
              u && !$w(a)) {
                  c = Lu(t, n, !1),
                  u = !1;
                  continue
              }
              if (c === 2) {
                  if (u = n,
                  t.errorRecoveryDisabledLanes & u)
                      var v = 0;
                  else
                      v = t.pendingLanes & -536870913,
                      v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
                  if (v !== 0) {
                      n = v;
                      t: {
                          var S = t;
                          c = Qs;
                          var A = S.current.memoizedState.isDehydrated;
                          if (A && (Pa(S, v).flags |= 256),
                          v = Lu(S, v, !1),
                          v !== 2) {
                              if (Mu && !A) {
                                  S.errorRecoveryDisabledLanes |= u,
                                  Wi |= u,
                                  c = 4;
                                  break t
                              }
                              u = we,
                              we = c,
                              u !== null && (we === null ? we = u : we.push.apply(we, u))
                          }
                          c = v
                      }
                      if (u = !1,
                      c !== 2)
                          continue
                  }
              }
              if (c === 1) {
                  Pa(t, 0),
                  mi(t, n, 0, !0);
                  break
              }
              t: {
                  switch (r = t,
                  u = c,
                  u) {
                  case 0:
                  case 1:
                      throw Error(o(345));
                  case 4:
                      if ((n & 4194048) !== n)
                          break;
                  case 6:
                      mi(r, n, Le, !ui);
                      break t;
                  case 2:
                      we = null;
                      break;
                  case 3:
                  case 5:
                      break;
                  default:
                      throw Error(o(329))
                  }
                  if ((n & 62914560) === n && (c = No + 300 - Ne(),
                  10 < c)) {
                      if (mi(r, n, Le, !ui),
                      Ur(r, 0, !0) !== 0)
                          break t;
                      Yn = n,
                      r.timeoutHandle = Iy(Ty.bind(null, r, a, we, jo, Ru, n, Le, Wi, Ua, ui, u, "Throttled", -0, 0), c);
                      break t
                  }
                  Ty(r, a, we, jo, Ru, n, Le, Wi, Ua, ui, u, null, -0, 0)
              }
          }
          break
      } while (!0);
      xn(t)
  }
  function Ty(t, n, a, r, c, u, v, S, A, V, X, K, B, P) {
      if (t.timeoutHandle = -1,
      K = n.subtreeFlags,
      K & 8192 || (K & 16785408) === 16785408) {
          K = {
              stylesheets: null,
              count: 0,
              imgCount: 0,
              imgBytes: 0,
              suspenseyImages: [],
              waitingForImages: !0,
              waitingForViewTransition: !1,
              unsuspend: jn
          },
          py(n, u, K);
          var tt = (u & 62914560) === u ? No - Ne() : (u & 4194048) === u ? xy - Ne() : 0;
          if (tt = zT(K, tt),
          tt !== null) {
              Yn = u,
              t.cancelPendingCommit = tt(Oy.bind(null, t, n, u, a, r, c, v, S, A, X, K, null, B, P)),
              mi(t, u, v, !V);
              return
          }
      }
      Oy(t, n, u, a, r, c, v, S, A)
  }
  function $w(t) {
      for (var n = t; ; ) {
          var a = n.tag;
          if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue,
          a !== null && (a = a.stores,
          a !== null)))
              for (var r = 0; r < a.length; r++) {
                  var c = a[r]
                    , u = c.getSnapshot;
                  c = c.value;
                  try {
                      if (!Re(u(), c))
                          return !1
                  } catch {
                      return !1
                  }
              }
          if (a = n.child,
          n.subtreeFlags & 16384 && a !== null)
              a.return = n,
              n = a;
          else {
              if (n === t)
                  break;
              for (; n.sibling === null; ) {
                  if (n.return === null || n.return === t)
                      return !0;
                  n = n.return
              }
              n.sibling.return = n.return,
              n = n.sibling
          }
      }
      return !0
  }
  function mi(t, n, a, r) {
      n &= ~ju,
      n &= ~Wi,
      t.suspendedLanes |= n,
      t.pingedLanes &= ~n,
      r && (t.warmLanes |= n),
      r = t.expirationTimes;
      for (var c = n; 0 < c; ) {
          var u = 31 - je(c)
            , v = 1 << u;
          r[u] = -1,
          c &= ~v
      }
      a !== 0 && _h(t, a, n)
  }
  function Ro() {
      return (Rt & 6) === 0 ? (Zs(0),
      !1) : !0
  }
  function zu() {
      if (bt !== null) {
          if (Ot === 0)
              var t = bt.return;
          else
              t = bt,
              _n = qi = null,
              $c(t),
              Ra = null,
              Os = 0,
              t = bt;
          for (; t !== null; )
              ty(t.alternate, t),
              t = t.return;
          bt = null
      }
  }
  function Pa(t, n) {
      var a = t.timeoutHandle;
      a !== -1 && (t.timeoutHandle = -1,
      yT(a)),
      a = t.cancelPendingCommit,
      a !== null && (t.cancelPendingCommit = null,
      a()),
      Yn = 0,
      zu(),
      Bt = t,
      bt = a = On(t.current, null),
      wt = n,
      Ot = 0,
      ze = null,
      ui = !1,
      Ba = ms(t, n),
      Mu = !1,
      Ua = Le = ju = Wi = fi = Yt = 0,
      we = Qs = null,
      Ru = !1,
      (n & 8) !== 0 && (n |= n & 32);
      var r = t.entangledLanes;
      if (r !== 0)
          for (t = t.entanglements,
          r &= n; 0 < r; ) {
              var c = 31 - je(r)
                , u = 1 << c;
              n |= t[c],
              r &= ~u
          }
      return Gn = n,
      $r(),
      a
  }
  function Ey(t, n) {
      gt = null,
      _.H = ks,
      n === ja || n === ao ? (n = Pm(),
      Ot = 3) : n === Uc ? (n = Pm(),
      Ot = 4) : Ot = n === du ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1,
      ze = n,
      bt === null && (Yt = 1,
      xo(t, Fe(n, t.current)))
  }
  function Cy() {
      var t = De.current;
      return t === null ? !0 : (wt & 4194048) === wt ? $e === null : (wt & 62914560) === wt || (wt & 536870912) !== 0 ? t === $e : !1
  }
  function Ay() {
      var t = _.H;
      return _.H = ks,
      t === null ? ks : t
  }
  function Ny() {
      var t = _.A;
      return _.A = Kw,
      t
  }
  function Oo() {
      Yt = 4,
      ui || (wt & 4194048) !== wt && De.current !== null || (Ba = !0),
      (fi & 134217727) === 0 && (Wi & 134217727) === 0 || Bt === null || mi(Bt, wt, Le, !1)
  }
  function Lu(t, n, a) {
      var r = Rt;
      Rt |= 2;
      var c = Ay()
        , u = Ny();
      (Bt !== t || wt !== n) && (jo = null,
      Pa(t, n)),
      n = !1;
      var v = Yt;
      t: do
          try {
              if (Ot !== 0 && bt !== null) {
                  var S = bt
                    , A = ze;
                  switch (Ot) {
                  case 8:
                      zu(),
                      v = 6;
                      break t;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                      De.current === null && (n = !0);
                      var V = Ot;
                      if (Ot = 0,
                      ze = null,
                      Ha(t, S, A, V),
                      a && Ba) {
                          v = 0;
                          break t
                      }
                      break;
                  default:
                      V = Ot,
                      Ot = 0,
                      ze = null,
                      Ha(t, S, A, V)
                  }
              }
              Ww(),
              v = Yt;
              break
          } catch (X) {
              Ey(t, X)
          }
      while (!0);
      return n && t.shellSuspendCounter++,
      _n = qi = null,
      Rt = r,
      _.H = c,
      _.A = u,
      bt === null && (Bt = null,
      wt = 0,
      $r()),
      v
  }
  function Ww() {
      for (; bt !== null; )
          My(bt)
  }
  function Jw(t, n) {
      var a = Rt;
      Rt |= 2;
      var r = Ay()
        , c = Ny();
      Bt !== t || wt !== n ? (jo = null,
      Mo = Ne() + 500,
      Pa(t, n)) : Ba = ms(t, n);
      t: do
          try {
              if (Ot !== 0 && bt !== null) {
                  n = bt;
                  var u = ze;
                  e: switch (Ot) {
                  case 1:
                      Ot = 0,
                      ze = null,
                      Ha(t, n, u, 1);
                      break;
                  case 2:
                  case 9:
                      if (Um(u)) {
                          Ot = 0,
                          ze = null,
                          jy(n);
                          break
                      }
                      n = function() {
                          Ot !== 2 && Ot !== 9 || Bt !== t || (Ot = 7),
                          xn(t)
                      }
                      ,
                      u.then(n, n);
                      break t;
                  case 3:
                      Ot = 7;
                      break t;
                  case 4:
                      Ot = 5;
                      break t;
                  case 7:
                      Um(u) ? (Ot = 0,
                      ze = null,
                      jy(n)) : (Ot = 0,
                      ze = null,
                      Ha(t, n, u, 7));
                      break;
                  case 5:
                      var v = null;
                      switch (bt.tag) {
                      case 26:
                          v = bt.memoizedState;
                      case 5:
                      case 27:
                          var S = bt;
                          if (v ? mg(v) : S.stateNode.complete) {
                              Ot = 0,
                              ze = null;
                              var A = S.sibling;
                              if (A !== null)
                                  bt = A;
                              else {
                                  var V = S.return;
                                  V !== null ? (bt = V,
                                  Do(V)) : bt = null
                              }
                              break e
                          }
                      }
                      Ot = 0,
                      ze = null,
                      Ha(t, n, u, 5);
                      break;
                  case 6:
                      Ot = 0,
                      ze = null,
                      Ha(t, n, u, 6);
                      break;
                  case 8:
                      zu(),
                      Yt = 6;
                      break t;
                  default:
                      throw Error(o(462))
                  }
              }
              Iw();
              break
          } catch (X) {
              Ey(t, X)
          }
      while (!0);
      return _n = qi = null,
      _.H = r,
      _.A = c,
      Rt = a,
      bt !== null ? 0 : (Bt = null,
      wt = 0,
      $r(),
      Yt)
  }
  function Iw() {
      for (; bt !== null && !wS(); )
          My(bt)
  }
  function My(t) {
      var n = Jp(t.alternate, t, Gn);
      t.memoizedProps = t.pendingProps,
      n === null ? Do(t) : bt = n
  }
  function jy(t) {
      var n = t
        , a = n.alternate;
      switch (n.tag) {
      case 15:
      case 0:
          n = Fp(a, n, n.pendingProps, n.type, void 0, wt);
          break;
      case 11:
          n = Fp(a, n, n.pendingProps, n.type.render, n.ref, wt);
          break;
      case 5:
          $c(n);
      default:
          ty(a, n),
          n = bt = Nm(n, Gn),
          n = Jp(a, n, Gn)
      }
      t.memoizedProps = t.pendingProps,
      n === null ? Do(t) : bt = n
  }
  function Ha(t, n, a, r) {
      _n = qi = null,
      $c(n),
      Ra = null,
      Os = 0;
      var c = n.return;
      try {
          if (Hw(t, c, n, a, wt)) {
              Yt = 1,
              xo(t, Fe(a, t.current)),
              bt = null;
              return
          }
      } catch (u) {
          if (c !== null)
              throw bt = c,
              u;
          Yt = 1,
          xo(t, Fe(a, t.current)),
          bt = null;
          return
      }
      n.flags & 32768 ? (Ct || r === 1 ? t = !0 : Ba || (wt & 536870912) !== 0 ? t = !1 : (ui = t = !0,
      (r === 2 || r === 9 || r === 3 || r === 6) && (r = De.current,
      r !== null && r.tag === 13 && (r.flags |= 16384))),
      Ry(n, t)) : Do(n)
  }
  function Do(t) {
      var n = t;
      do {
          if ((n.flags & 32768) !== 0) {
              Ry(n, ui);
              return
          }
          t = n.return;
          var a = Yw(n.alternate, n, Gn);
          if (a !== null) {
              bt = a;
              return
          }
          if (n = n.sibling,
          n !== null) {
              bt = n;
              return
          }
          bt = n = t
      } while (n !== null);
      Yt === 0 && (Yt = 5)
  }
  function Ry(t, n) {
      do {
          var a = Xw(t.alternate, t);
          if (a !== null) {
              a.flags &= 32767,
              bt = a;
              return
          }
          if (a = t.return,
          a !== null && (a.flags |= 32768,
          a.subtreeFlags = 0,
          a.deletions = null),
          !n && (t = t.sibling,
          t !== null)) {
              bt = t;
              return
          }
          bt = t = a
      } while (t !== null);
      Yt = 6,
      bt = null
  }
  function Oy(t, n, a, r, c, u, v, S, A) {
      t.cancelPendingCommit = null;
      do
          _o();
      while (ne !== 0);
      if ((Rt & 6) !== 0)
          throw Error(o(327));
      if (n !== null) {
          if (n === t.current)
              throw Error(o(177));
          if (u = n.lanes | n.childLanes,
          u |= Tc,
          DS(t, a, u, v, S, A),
          t === Bt && (bt = Bt = null,
          wt = 0),
          ka = n,
          hi = t,
          Yn = a,
          Ou = u,
          Du = c,
          by = r,
          (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null,
          t.callbackPriority = 0,
          iT(zr, function() {
              return Vy(),
              null
          })) : (t.callbackNode = null,
          t.callbackPriority = 0),
          r = (n.flags & 13878) !== 0,
          (n.subtreeFlags & 13878) !== 0 || r) {
              r = _.T,
              _.T = null,
              c = Y.p,
              Y.p = 2,
              v = Rt,
              Rt |= 4;
              try {
                  Fw(t, n, a)
              } finally {
                  Rt = v,
                  Y.p = c,
                  _.T = r
              }
          }
          ne = 1,
          Dy(),
          _y(),
          zy()
      }
  }
  function Dy() {
      if (ne === 1) {
          ne = 0;
          var t = hi
            , n = ka
            , a = (n.flags & 13878) !== 0;
          if ((n.subtreeFlags & 13878) !== 0 || a) {
              a = _.T,
              _.T = null;
              var r = Y.p;
              Y.p = 2;
              var c = Rt;
              Rt |= 4;
              try {
                  dy(n, t);
                  var u = Qu
                    , v = vm(t.containerInfo)
                    , S = u.focusedElem
                    , A = u.selectionRange;
                  if (v !== S && S && S.ownerDocument && gm(S.ownerDocument.documentElement, S)) {
                      if (A !== null && vc(S)) {
                          var V = A.start
                            , X = A.end;
                          if (X === void 0 && (X = V),
                          "selectionStart"in S)
                              S.selectionStart = V,
                              S.selectionEnd = Math.min(X, S.value.length);
                          else {
                              var K = S.ownerDocument || document
                                , B = K && K.defaultView || window;
                              if (B.getSelection) {
                                  var P = B.getSelection()
                                    , tt = S.textContent.length
                                    , lt = Math.min(A.start, tt)
                                    , Vt = A.end === void 0 ? lt : Math.min(A.end, tt);
                                  !P.extend && lt > Vt && (v = Vt,
                                  Vt = lt,
                                  lt = v);
                                  var R = ym(S, lt)
                                    , j = ym(S, Vt);
                                  if (R && j && (P.rangeCount !== 1 || P.anchorNode !== R.node || P.anchorOffset !== R.offset || P.focusNode !== j.node || P.focusOffset !== j.offset)) {
                                      var L = K.createRange();
                                      L.setStart(R.node, R.offset),
                                      P.removeAllRanges(),
                                      lt > Vt ? (P.addRange(L),
                                      P.extend(j.node, j.offset)) : (L.setEnd(j.node, j.offset),
                                      P.addRange(L))
                                  }
                              }
                          }
                      }
                      for (K = [],
                      P = S; P = P.parentNode; )
                          P.nodeType === 1 && K.push({
                              element: P,
                              left: P.scrollLeft,
                              top: P.scrollTop
                          });
                      for (typeof S.focus == "function" && S.focus(),
                      S = 0; S < K.length; S++) {
                          var Q = K[S];
                          Q.element.scrollLeft = Q.left,
                          Q.element.scrollTop = Q.top
                      }
                  }
                  Xo = !!Fu,
                  Qu = Fu = null
              } finally {
                  Rt = c,
                  Y.p = r,
                  _.T = a
              }
          }
          t.current = n,
          ne = 2
      }
  }
  function _y() {
      if (ne === 2) {
          ne = 0;
          var t = hi
            , n = ka
            , a = (n.flags & 8772) !== 0;
          if ((n.subtreeFlags & 8772) !== 0 || a) {
              a = _.T,
              _.T = null;
              var r = Y.p;
              Y.p = 2;
              var c = Rt;
              Rt |= 4;
              try {
                  oy(t, n.alternate, n)
              } finally {
                  Rt = c,
                  Y.p = r,
                  _.T = a
              }
          }
          ne = 3
      }
  }
  function zy() {
      if (ne === 4 || ne === 3) {
          ne = 0,
          TS();
          var t = hi
            , n = ka
            , a = Yn
            , r = by;
          (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ne = 5 : (ne = 0,
          ka = hi = null,
          Ly(t, t.pendingLanes));
          var c = t.pendingLanes;
          if (c === 0 && (di = null),
          Il(a),
          n = n.stateNode,
          Me && typeof Me.onCommitFiberRoot == "function")
              try {
                  Me.onCommitFiberRoot(hs, n, void 0, (n.current.flags & 128) === 128)
              } catch {}
          if (r !== null) {
              n = _.T,
              c = Y.p,
              Y.p = 2,
              _.T = null;
              try {
                  for (var u = t.onRecoverableError, v = 0; v < r.length; v++) {
                      var S = r[v];
                      u(S.value, {
                          componentStack: S.stack
                      })
                  }
              } finally {
                  _.T = n,
                  Y.p = c
              }
          }
          (Yn & 3) !== 0 && _o(),
          xn(t),
          c = t.pendingLanes,
          (a & 261930) !== 0 && (c & 42) !== 0 ? t === _u ? Ks++ : (Ks = 0,
          _u = t) : Ks = 0,
          Zs(0)
      }
  }
  function Ly(t, n) {
      (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache,
      n != null && (t.pooledCache = null,
      js(n)))
  }
  function _o() {
      return Dy(),
      _y(),
      zy(),
      Vy()
  }
  function Vy() {
      if (ne !== 5)
          return !1;
      var t = hi
        , n = Ou;
      Ou = 0;
      var a = Il(Yn)
        , r = _.T
        , c = Y.p;
      try {
          Y.p = 32 > a ? 32 : a,
          _.T = null,
          a = Du,
          Du = null;
          var u = hi
            , v = Yn;
          if (ne = 0,
          ka = hi = null,
          Yn = 0,
          (Rt & 6) !== 0)
              throw Error(o(331));
          var S = Rt;
          if (Rt |= 4,
          gy(u.current),
          my(u, u.current, v, a),
          Rt = S,
          Zs(0, !1),
          Me && typeof Me.onPostCommitFiberRoot == "function")
              try {
                  Me.onPostCommitFiberRoot(hs, u)
              } catch {}
          return !0
      } finally {
          Y.p = c,
          _.T = r,
          Ly(t, n)
      }
  }
  function By(t, n, a) {
      n = Fe(a, n),
      n = fu(t.stateNode, n, 2),
      t = ri(t, n, 2),
      t !== null && (ps(t, 2),
      xn(t))
  }
  function Dt(t, n, a) {
      if (t.tag === 3)
          By(t, t, a);
      else
          for (; n !== null; ) {
              if (n.tag === 3) {
                  By(n, t, a);
                  break
              } else if (n.tag === 1) {
                  var r = n.stateNode;
                  if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (di === null || !di.has(r))) {
                      t = Fe(a, t),
                      a = Up(2),
                      r = ri(n, a, 2),
                      r !== null && (kp(a, r, n, t),
                      ps(r, 2),
                      xn(r));
                      break
                  }
              }
              n = n.return
          }
  }
  function Vu(t, n, a) {
      var r = t.pingCache;
      if (r === null) {
          r = t.pingCache = new Zw;
          var c = new Set;
          r.set(n, c)
      } else
          c = r.get(n),
          c === void 0 && (c = new Set,
          r.set(n, c));
      c.has(a) || (Mu = !0,
      c.add(a),
      t = tT.bind(null, t, n, a),
      n.then(t, t))
  }
  function tT(t, n, a) {
      var r = t.pingCache;
      r !== null && r.delete(n),
      t.pingedLanes |= t.suspendedLanes & a,
      t.warmLanes &= ~a,
      Bt === t && (wt & a) === a && (Yt === 4 || Yt === 3 && (wt & 62914560) === wt && 300 > Ne() - No ? (Rt & 2) === 0 && Pa(t, 0) : ju |= a,
      Ua === wt && (Ua = 0)),
      xn(t)
  }
  function Uy(t, n) {
      n === 0 && (n = Dh()),
      t = ki(t, n),
      t !== null && (ps(t, n),
      xn(t))
  }
  function eT(t) {
      var n = t.memoizedState
        , a = 0;
      n !== null && (a = n.retryLane),
      Uy(t, a)
  }
  function nT(t, n) {
      var a = 0;
      switch (t.tag) {
      case 31:
      case 13:
          var r = t.stateNode
            , c = t.memoizedState;
          c !== null && (a = c.retryLane);
          break;
      case 19:
          r = t.stateNode;
          break;
      case 22:
          r = t.stateNode._retryCache;
          break;
      default:
          throw Error(o(314))
      }
      r !== null && r.delete(n),
      Uy(t, a)
  }
  function iT(t, n) {
      return Zl(t, n)
  }
  var zo = null
    , qa = null
    , Bu = !1
    , Lo = !1
    , Uu = !1
    , pi = 0;
  function xn(t) {
      t !== qa && t.next === null && (qa === null ? zo = qa = t : qa = qa.next = t),
      Lo = !0,
      Bu || (Bu = !0,
      sT())
  }
  function Zs(t, n) {
      if (!Uu && Lo) {
          Uu = !0;
          do
              for (var a = !1, r = zo; r !== null; ) {
                  if (t !== 0) {
                      var c = r.pendingLanes;
                      if (c === 0)
                          var u = 0;
                      else {
                          var v = r.suspendedLanes
                            , S = r.pingedLanes;
                          u = (1 << 31 - je(42 | t) + 1) - 1,
                          u &= c & ~(v & ~S),
                          u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                      }
                      u !== 0 && (a = !0,
                      qy(r, u))
                  } else
                      u = wt,
                      u = Ur(r, r === Bt ? u : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                      (u & 3) === 0 || ms(r, u) || (a = !0,
                      qy(r, u));
                  r = r.next
              }
          while (a);
          Uu = !1
      }
  }
  function aT() {
      ky()
  }
  function ky() {
      Lo = Bu = !1;
      var t = 0;
      pi !== 0 && pT() && (t = pi);
      for (var n = Ne(), a = null, r = zo; r !== null; ) {
          var c = r.next
            , u = Py(r, n);
          u === 0 ? (r.next = null,
          a === null ? zo = c : a.next = c,
          c === null && (qa = a)) : (a = r,
          (t !== 0 || (u & 3) !== 0) && (Lo = !0)),
          r = c
      }
      ne !== 0 && ne !== 5 || Zs(t),
      pi !== 0 && (pi = 0)
  }
  function Py(t, n) {
      for (var a = t.suspendedLanes, r = t.pingedLanes, c = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
          var v = 31 - je(u)
            , S = 1 << v
            , A = c[v];
          A === -1 ? ((S & a) === 0 || (S & r) !== 0) && (c[v] = OS(S, n)) : A <= n && (t.expiredLanes |= S),
          u &= ~S
      }
      if (n = Bt,
      a = wt,
      a = Ur(t, t === n ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
      r = t.callbackNode,
      a === 0 || t === n && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
          return r !== null && r !== null && $l(r),
          t.callbackNode = null,
          t.callbackPriority = 0;
      if ((a & 3) === 0 || ms(t, a)) {
          if (n = a & -a,
          n === t.callbackPriority)
              return n;
          switch (r !== null && $l(r),
          Il(a)) {
          case 2:
          case 8:
              a = Rh;
              break;
          case 32:
              a = zr;
              break;
          case 268435456:
              a = Oh;
              break;
          default:
              a = zr
          }
          return r = Hy.bind(null, t),
          a = Zl(a, r),
          t.callbackPriority = n,
          t.callbackNode = a,
          n
      }
      return r !== null && r !== null && $l(r),
      t.callbackPriority = 2,
      t.callbackNode = null,
      2
  }
  function Hy(t, n) {
      if (ne !== 0 && ne !== 5)
          return t.callbackNode = null,
          t.callbackPriority = 0,
          null;
      var a = t.callbackNode;
      if (_o() && t.callbackNode !== a)
          return null;
      var r = wt;
      return r = Ur(t, t === Bt ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
      r === 0 ? null : (wy(t, r, n),
      Py(t, Ne()),
      t.callbackNode != null && t.callbackNode === a ? Hy.bind(null, t) : null)
  }
  function qy(t, n) {
      if (_o())
          return null;
      wy(t, n, !0)
  }
  function sT() {
      gT(function() {
          (Rt & 6) !== 0 ? Zl(jh, aT) : ky()
      })
  }
  function ku() {
      if (pi === 0) {
          var t = Na;
          t === 0 && (t = Lr,
          Lr <<= 1,
          (Lr & 261888) === 0 && (Lr = 256)),
          pi = t
      }
      return pi
  }
  function Gy(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : qr("" + t)
  }
  function Yy(t, n) {
      var a = n.ownerDocument.createElement("input");
      return a.name = n.name,
      a.value = n.value,
      t.id && a.setAttribute("form", t.id),
      n.parentNode.insertBefore(a, n),
      t = new FormData(t),
      a.parentNode.removeChild(a),
      t
  }
  function rT(t, n, a, r, c) {
      if (n === "submit" && a && a.stateNode === c) {
          var u = Gy((c[ge] || null).action)
            , v = r.submitter;
          v && (n = (n = v[ge] || null) ? Gy(n.formAction) : v.getAttribute("formAction"),
          n !== null && (u = n,
          v = null));
          var S = new Fr("action","action",null,r,c);
          t.push({
              event: S,
              listeners: [{
                  instance: null,
                  listener: function() {
                      if (r.defaultPrevented) {
                          if (pi !== 0) {
                              var A = v ? Yy(c, v) : new FormData(c);
                              su(a, {
                                  pending: !0,
                                  data: A,
                                  method: c.method,
                                  action: u
                              }, null, A)
                          }
                      } else
                          typeof u == "function" && (S.preventDefault(),
                          A = v ? Yy(c, v) : new FormData(c),
                          su(a, {
                              pending: !0,
                              data: A,
                              method: c.method,
                              action: u
                          }, u, A))
                  },
                  currentTarget: c
              }]
          })
      }
  }
  for (var Pu = 0; Pu < wc.length; Pu++) {
      var Hu = wc[Pu]
        , oT = Hu.toLowerCase()
        , lT = Hu[0].toUpperCase() + Hu.slice(1);
      rn(oT, "on" + lT)
  }
  rn(Sm, "onAnimationEnd"),
  rn(wm, "onAnimationIteration"),
  rn(Tm, "onAnimationStart"),
  rn("dblclick", "onDoubleClick"),
  rn("focusin", "onFocus"),
  rn("focusout", "onBlur"),
  rn(Ew, "onTransitionRun"),
  rn(Cw, "onTransitionStart"),
  rn(Aw, "onTransitionCancel"),
  rn(Em, "onTransitionEnd"),
  ha("onMouseEnter", ["mouseout", "mouseover"]),
  ha("onMouseLeave", ["mouseout", "mouseover"]),
  ha("onPointerEnter", ["pointerout", "pointerover"]),
  ha("onPointerLeave", ["pointerout", "pointerover"]),
  Li("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
  Li("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
  Li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
  Li("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
  Li("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
  Li("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var $s = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , cT = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($s));
  function Xy(t, n) {
      n = (n & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
          var r = t[a]
            , c = r.event;
          r = r.listeners;
          t: {
              var u = void 0;
              if (n)
                  for (var v = r.length - 1; 0 <= v; v--) {
                      var S = r[v]
                        , A = S.instance
                        , V = S.currentTarget;
                      if (S = S.listener,
                      A !== u && c.isPropagationStopped())
                          break t;
                      u = S,
                      c.currentTarget = V;
                      try {
                          u(c)
                      } catch (X) {
                          Zr(X)
                      }
                      c.currentTarget = null,
                      u = A
                  }
              else
                  for (v = 0; v < r.length; v++) {
                      if (S = r[v],
                      A = S.instance,
                      V = S.currentTarget,
                      S = S.listener,
                      A !== u && c.isPropagationStopped())
                          break t;
                      u = S,
                      c.currentTarget = V;
                      try {
                          u(c)
                      } catch (X) {
                          Zr(X)
                      }
                      c.currentTarget = null,
                      u = A
                  }
          }
      }
  }
  function St(t, n) {
      var a = n[tc];
      a === void 0 && (a = n[tc] = new Set);
      var r = t + "__bubble";
      a.has(r) || (Fy(n, t, 2, !1),
      a.add(r))
  }
  function qu(t, n, a) {
      var r = 0;
      n && (r |= 4),
      Fy(a, t, r, n)
  }
  var Vo = "_reactListening" + Math.random().toString(36).slice(2);
  function Gu(t) {
      if (!t[Vo]) {
          t[Vo] = !0,
          kh.forEach(function(a) {
              a !== "selectionchange" && (cT.has(a) || qu(a, !1, t),
              qu(a, !0, t))
          });
          var n = t.nodeType === 9 ? t : t.ownerDocument;
          n === null || n[Vo] || (n[Vo] = !0,
          qu("selectionchange", !1, n))
      }
  }
  function Fy(t, n, a, r) {
      switch (Sg(n)) {
      case 2:
          var c = BT;
          break;
      case 8:
          c = UT;
          break;
      default:
          c = sf
      }
      a = c.bind(null, n, a, t),
      c = void 0,
      !cc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0),
      r ? c !== void 0 ? t.addEventListener(n, a, {
          capture: !0,
          passive: c
      }) : t.addEventListener(n, a, !0) : c !== void 0 ? t.addEventListener(n, a, {
          passive: c
      }) : t.addEventListener(n, a, !1)
  }
  function Yu(t, n, a, r, c) {
      var u = r;
      if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
          t: for (; ; ) {
              if (r === null)
                  return;
              var v = r.tag;
              if (v === 3 || v === 4) {
                  var S = r.stateNode.containerInfo;
                  if (S === c)
                      break;
                  if (v === 4)
                      for (v = r.return; v !== null; ) {
                          var A = v.tag;
                          if ((A === 3 || A === 4) && v.stateNode.containerInfo === c)
                              return;
                          v = v.return
                      }
                  for (; S !== null; ) {
                      if (v = ua(S),
                      v === null)
                          return;
                      if (A = v.tag,
                      A === 5 || A === 6 || A === 26 || A === 27) {
                          r = u = v;
                          continue t
                      }
                      S = S.parentNode
                  }
              }
              r = r.return
          }
      Wh(function() {
          var V = u
            , X = oc(a)
            , K = [];
          t: {
              var B = Cm.get(t);
              if (B !== void 0) {
                  var P = Fr
                    , tt = t;
                  switch (t) {
                  case "keypress":
                      if (Yr(a) === 0)
                          break t;
                  case "keydown":
                  case "keyup":
                      P = nw;
                      break;
                  case "focusin":
                      tt = "focus",
                      P = hc;
                      break;
                  case "focusout":
                      tt = "blur",
                      P = hc;
                      break;
                  case "beforeblur":
                  case "afterblur":
                      P = hc;
                      break;
                  case "click":
                      if (a.button === 2)
                          break t;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                      P = tm;
                      break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                      P = YS;
                      break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                      P = sw;
                      break;
                  case Sm:
                  case wm:
                  case Tm:
                      P = QS;
                      break;
                  case Em:
                      P = ow;
                      break;
                  case "scroll":
                  case "scrollend":
                      P = qS;
                      break;
                  case "wheel":
                      P = cw;
                      break;
                  case "copy":
                  case "cut":
                  case "paste":
                      P = ZS;
                      break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                      P = nm;
                      break;
                  case "toggle":
                  case "beforetoggle":
                      P = fw
                  }
                  var lt = (n & 4) !== 0
                    , Vt = !lt && (t === "scroll" || t === "scrollend")
                    , R = lt ? B !== null ? B + "Capture" : null : B;
                  lt = [];
                  for (var j = V, L; j !== null; ) {
                      var Q = j;
                      if (L = Q.stateNode,
                      Q = Q.tag,
                      Q !== 5 && Q !== 26 && Q !== 27 || L === null || R === null || (Q = vs(j, R),
                      Q != null && lt.push(Ws(j, Q, L))),
                      Vt)
                          break;
                      j = j.return
                  }
                  0 < lt.length && (B = new P(B,tt,null,a,X),
                  K.push({
                      event: B,
                      listeners: lt
                  }))
              }
          }
          if ((n & 7) === 0) {
              t: {
                  if (B = t === "mouseover" || t === "pointerover",
                  P = t === "mouseout" || t === "pointerout",
                  B && a !== rc && (tt = a.relatedTarget || a.fromElement) && (ua(tt) || tt[ca]))
                      break t;
                  if ((P || B) && (B = X.window === X ? X : (B = X.ownerDocument) ? B.defaultView || B.parentWindow : window,
                  P ? (tt = a.relatedTarget || a.toElement,
                  P = V,
                  tt = tt ? ua(tt) : null,
                  tt !== null && (Vt = f(tt),
                  lt = tt.tag,
                  tt !== Vt || lt !== 5 && lt !== 27 && lt !== 6) && (tt = null)) : (P = null,
                  tt = V),
                  P !== tt)) {
                      if (lt = tm,
                      Q = "onMouseLeave",
                      R = "onMouseEnter",
                      j = "mouse",
                      (t === "pointerout" || t === "pointerover") && (lt = nm,
                      Q = "onPointerLeave",
                      R = "onPointerEnter",
                      j = "pointer"),
                      Vt = P == null ? B : gs(P),
                      L = tt == null ? B : gs(tt),
                      B = new lt(Q,j + "leave",P,a,X),
                      B.target = Vt,
                      B.relatedTarget = L,
                      Q = null,
                      ua(X) === V && (lt = new lt(R,j + "enter",tt,a,X),
                      lt.target = L,
                      lt.relatedTarget = Vt,
                      Q = lt),
                      Vt = Q,
                      P && tt)
                          e: {
                              for (lt = uT,
                              R = P,
                              j = tt,
                              L = 0,
                              Q = R; Q; Q = lt(Q))
                                  L++;
                              Q = 0;
                              for (var ot = j; ot; ot = lt(ot))
                                  Q++;
                              for (; 0 < L - Q; )
                                  R = lt(R),
                                  L--;
                              for (; 0 < Q - L; )
                                  j = lt(j),
                                  Q--;
                              for (; L--; ) {
                                  if (R === j || j !== null && R === j.alternate) {
                                      lt = R;
                                      break e
                                  }
                                  R = lt(R),
                                  j = lt(j)
                              }
                              lt = null
                          }
                      else
                          lt = null;
                      P !== null && Qy(K, B, P, lt, !1),
                      tt !== null && Vt !== null && Qy(K, Vt, tt, lt, !0)
                  }
              }
              t: {
                  if (B = V ? gs(V) : window,
                  P = B.nodeName && B.nodeName.toLowerCase(),
                  P === "select" || P === "input" && B.type === "file")
                      var Nt = um;
                  else if (lm(B))
                      if (fm)
                          Nt = Sw;
                      else {
                          Nt = xw;
                          var at = vw
                      }
                  else
                      P = B.nodeName,
                      !P || P.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? V && sc(V.elementType) && (Nt = um) : Nt = bw;
                  if (Nt && (Nt = Nt(t, V))) {
                      cm(K, Nt, a, X);
                      break t
                  }
                  at && at(t, B, V),
                  t === "focusout" && V && B.type === "number" && V.memoizedProps.value != null && ac(B, "number", B.value)
              }
              switch (at = V ? gs(V) : window,
              t) {
              case "focusin":
                  (lm(at) || at.contentEditable === "true") && (xa = at,
                  xc = V,
                  As = null);
                  break;
              case "focusout":
                  As = xc = xa = null;
                  break;
              case "mousedown":
                  bc = !0;
                  break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                  bc = !1,
                  xm(K, a, X);
                  break;
              case "selectionchange":
                  if (Tw)
                      break;
              case "keydown":
              case "keyup":
                  xm(K, a, X)
              }
              var vt;
              if (pc)
                  t: {
                      switch (t) {
                      case "compositionstart":
                          var Tt = "onCompositionStart";
                          break t;
                      case "compositionend":
                          Tt = "onCompositionEnd";
                          break t;
                      case "compositionupdate":
                          Tt = "onCompositionUpdate";
                          break t
                      }
                      Tt = void 0
                  }
              else
                  va ? rm(t, a) && (Tt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (Tt = "onCompositionStart");
              Tt && (im && a.locale !== "ko" && (va || Tt !== "onCompositionStart" ? Tt === "onCompositionEnd" && va && (vt = Jh()) : (In = X,
              uc = "value"in In ? In.value : In.textContent,
              va = !0)),
              at = Bo(V, Tt),
              0 < at.length && (Tt = new em(Tt,t,null,a,X),
              K.push({
                  event: Tt,
                  listeners: at
              }),
              vt ? Tt.data = vt : (vt = om(a),
              vt !== null && (Tt.data = vt)))),
              (vt = hw ? mw(t, a) : pw(t, a)) && (Tt = Bo(V, "onBeforeInput"),
              0 < Tt.length && (at = new em("onBeforeInput","beforeinput",null,a,X),
              K.push({
                  event: at,
                  listeners: Tt
              }),
              at.data = vt)),
              rT(K, t, V, a, X)
          }
          Xy(K, n)
      })
  }
  function Ws(t, n, a) {
      return {
          instance: t,
          listener: n,
          currentTarget: a
      }
  }
  function Bo(t, n) {
      for (var a = n + "Capture", r = []; t !== null; ) {
          var c = t
            , u = c.stateNode;
          if (c = c.tag,
          c !== 5 && c !== 26 && c !== 27 || u === null || (c = vs(t, a),
          c != null && r.unshift(Ws(t, c, u)),
          c = vs(t, n),
          c != null && r.push(Ws(t, c, u))),
          t.tag === 3)
              return r;
          t = t.return
      }
      return []
  }
  function uT(t) {
      if (t === null)
          return null;
      do
          t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null
  }
  function Qy(t, n, a, r, c) {
      for (var u = n._reactName, v = []; a !== null && a !== r; ) {
          var S = a
            , A = S.alternate
            , V = S.stateNode;
          if (S = S.tag,
          A !== null && A === r)
              break;
          S !== 5 && S !== 26 && S !== 27 || V === null || (A = V,
          c ? (V = vs(a, u),
          V != null && v.unshift(Ws(a, V, A))) : c || (V = vs(a, u),
          V != null && v.push(Ws(a, V, A)))),
          a = a.return
      }
      v.length !== 0 && t.push({
          event: n,
          listeners: v
      })
  }
  var fT = /\r\n?/g
    , dT = /\u0000|\uFFFD/g;
  function Ky(t) {
      return (typeof t == "string" ? t : "" + t).replace(fT, `
`).replace(dT, "")
  }
  function Zy(t, n) {
      return n = Ky(n),
      Ky(t) === n
  }
  function Lt(t, n, a, r, c, u) {
      switch (a) {
      case "children":
          typeof r == "string" ? n === "body" || n === "textarea" && r === "" || pa(t, r) : (typeof r == "number" || typeof r == "bigint") && n !== "body" && pa(t, "" + r);
          break;
      case "className":
          Pr(t, "class", r);
          break;
      case "tabIndex":
          Pr(t, "tabindex", r);
          break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
          Pr(t, a, r);
          break;
      case "style":
          Zh(t, r, u);
          break;
      case "data":
          if (n !== "object") {
              Pr(t, "data", r);
              break
          }
      case "src":
      case "href":
          if (r === "" && (n !== "a" || a !== "href")) {
              t.removeAttribute(a);
              break
          }
          if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
              t.removeAttribute(a);
              break
          }
          r = qr("" + r),
          t.setAttribute(a, r);
          break;
      case "action":
      case "formAction":
          if (typeof r == "function") {
              t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
              break
          } else
              typeof u == "function" && (a === "formAction" ? (n !== "input" && Lt(t, n, "name", c.name, c, null),
              Lt(t, n, "formEncType", c.formEncType, c, null),
              Lt(t, n, "formMethod", c.formMethod, c, null),
              Lt(t, n, "formTarget", c.formTarget, c, null)) : (Lt(t, n, "encType", c.encType, c, null),
              Lt(t, n, "method", c.method, c, null),
              Lt(t, n, "target", c.target, c, null)));
          if (r == null || typeof r == "symbol" || typeof r == "boolean") {
              t.removeAttribute(a);
              break
          }
          r = qr("" + r),
          t.setAttribute(a, r);
          break;
      case "onClick":
          r != null && (t.onclick = jn);
          break;
      case "onScroll":
          r != null && St("scroll", t);
          break;
      case "onScrollEnd":
          r != null && St("scrollend", t);
          break;
      case "dangerouslySetInnerHTML":
          if (r != null) {
              if (typeof r != "object" || !("__html"in r))
                  throw Error(o(61));
              if (a = r.__html,
              a != null) {
                  if (c.children != null)
                      throw Error(o(60));
                  t.innerHTML = a
              }
          }
          break;
      case "multiple":
          t.multiple = r && typeof r != "function" && typeof r != "symbol";
          break;
      case "muted":
          t.muted = r && typeof r != "function" && typeof r != "symbol";
          break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
          break;
      case "autoFocus":
          break;
      case "xlinkHref":
          if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
              t.removeAttribute("xlink:href");
              break
          }
          a = qr("" + r),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
          break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
          r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "" + r) : t.removeAttribute(a);
          break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
          r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
      case "capture":
      case "download":
          r === !0 ? t.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, r) : t.removeAttribute(a);
          break;
      case "cols":
      case "rows":
      case "size":
      case "span":
          r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(a, r) : t.removeAttribute(a);
          break;
      case "rowSpan":
      case "start":
          r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(a) : t.setAttribute(a, r);
          break;
      case "popover":
          St("beforetoggle", t),
          St("toggle", t),
          kr(t, "popover", r);
          break;
      case "xlinkActuate":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
          break;
      case "xlinkArcrole":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
          break;
      case "xlinkRole":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:role", r);
          break;
      case "xlinkShow":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:show", r);
          break;
      case "xlinkTitle":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:title", r);
          break;
      case "xlinkType":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:type", r);
          break;
      case "xmlBase":
          Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
          break;
      case "xmlLang":
          Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
          break;
      case "xmlSpace":
          Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
          break;
      case "is":
          kr(t, "is", r);
          break;
      case "innerText":
      case "textContent":
          break;
      default:
          (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = PS.get(a) || a,
          kr(t, a, r))
      }
  }
  function Xu(t, n, a, r, c, u) {
      switch (a) {
      case "style":
          Zh(t, r, u);
          break;
      case "dangerouslySetInnerHTML":
          if (r != null) {
              if (typeof r != "object" || !("__html"in r))
                  throw Error(o(61));
              if (a = r.__html,
              a != null) {
                  if (c.children != null)
                      throw Error(o(60));
                  t.innerHTML = a
              }
          }
          break;
      case "children":
          typeof r == "string" ? pa(t, r) : (typeof r == "number" || typeof r == "bigint") && pa(t, "" + r);
          break;
      case "onScroll":
          r != null && St("scroll", t);
          break;
      case "onScrollEnd":
          r != null && St("scrollend", t);
          break;
      case "onClick":
          r != null && (t.onclick = jn);
          break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
          break;
      case "innerText":
      case "textContent":
          break;
      default:
          if (!Ph.hasOwnProperty(a))
              t: {
                  if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"),
                  n = a.slice(2, c ? a.length - 7 : void 0),
                  u = t[ge] || null,
                  u = u != null ? u[a] : null,
                  typeof u == "function" && t.removeEventListener(n, u, c),
                  typeof r == "function")) {
                      typeof u != "function" && u !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)),
                      t.addEventListener(n, r, c);
                      break t
                  }
                  a in t ? t[a] = r : r === !0 ? t.setAttribute(a, "") : kr(t, a, r)
              }
      }
  }
  function ue(t, n, a) {
      switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
          break;
      case "img":
          St("error", t),
          St("load", t);
          var r = !1, c = !1, u;
          for (u in a)
              if (a.hasOwnProperty(u)) {
                  var v = a[u];
                  if (v != null)
                      switch (u) {
                      case "src":
                          r = !0;
                          break;
                      case "srcSet":
                          c = !0;
                          break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                          throw Error(o(137, n));
                      default:
                          Lt(t, n, u, v, a, null)
                      }
              }
          c && Lt(t, n, "srcSet", a.srcSet, a, null),
          r && Lt(t, n, "src", a.src, a, null);
          return;
      case "input":
          St("invalid", t);
          var S = u = v = c = null
            , A = null
            , V = null;
          for (r in a)
              if (a.hasOwnProperty(r)) {
                  var X = a[r];
                  if (X != null)
                      switch (r) {
                      case "name":
                          c = X;
                          break;
                      case "type":
                          v = X;
                          break;
                      case "checked":
                          A = X;
                          break;
                      case "defaultChecked":
                          V = X;
                          break;
                      case "value":
                          u = X;
                          break;
                      case "defaultValue":
                          S = X;
                          break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                          if (X != null)
                              throw Error(o(137, n));
                          break;
                      default:
                          Lt(t, n, r, X, a, null)
                      }
              }
          Xh(t, u, S, A, V, v, c, !1);
          return;
      case "select":
          St("invalid", t),
          r = v = u = null;
          for (c in a)
              if (a.hasOwnProperty(c) && (S = a[c],
              S != null))
                  switch (c) {
                  case "value":
                      u = S;
                      break;
                  case "defaultValue":
                      v = S;
                      break;
                  case "multiple":
                      r = S;
                  default:
                      Lt(t, n, c, S, a, null)
                  }
          n = u,
          a = v,
          t.multiple = !!r,
          n != null ? ma(t, !!r, n, !1) : a != null && ma(t, !!r, a, !0);
          return;
      case "textarea":
          St("invalid", t),
          u = c = r = null;
          for (v in a)
              if (a.hasOwnProperty(v) && (S = a[v],
              S != null))
                  switch (v) {
                  case "value":
                      r = S;
                      break;
                  case "defaultValue":
                      c = S;
                      break;
                  case "children":
                      u = S;
                      break;
                  case "dangerouslySetInnerHTML":
                      if (S != null)
                          throw Error(o(91));
                      break;
                  default:
                      Lt(t, n, v, S, a, null)
                  }
          Qh(t, r, c, u);
          return;
      case "option":
          for (A in a)
              if (a.hasOwnProperty(A) && (r = a[A],
              r != null))
                  switch (A) {
                  case "selected":
                      t.selected = r && typeof r != "function" && typeof r != "symbol";
                      break;
                  default:
                      Lt(t, n, A, r, a, null)
                  }
          return;
      case "dialog":
          St("beforetoggle", t),
          St("toggle", t),
          St("cancel", t),
          St("close", t);
          break;
      case "iframe":
      case "object":
          St("load", t);
          break;
      case "video":
      case "audio":
          for (r = 0; r < $s.length; r++)
              St($s[r], t);
          break;
      case "image":
          St("error", t),
          St("load", t);
          break;
      case "details":
          St("toggle", t);
          break;
      case "embed":
      case "source":
      case "link":
          St("error", t),
          St("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
          for (V in a)
              if (a.hasOwnProperty(V) && (r = a[V],
              r != null))
                  switch (V) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                      throw Error(o(137, n));
                  default:
                      Lt(t, n, V, r, a, null)
                  }
          return;
      default:
          if (sc(n)) {
              for (X in a)
                  a.hasOwnProperty(X) && (r = a[X],
                  r !== void 0 && Xu(t, n, X, r, a, void 0));
              return
          }
      }
      for (S in a)
          a.hasOwnProperty(S) && (r = a[S],
          r != null && Lt(t, n, S, r, a, null))
  }
  function hT(t, n, a, r) {
      switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
          break;
      case "input":
          var c = null
            , u = null
            , v = null
            , S = null
            , A = null
            , V = null
            , X = null;
          for (P in a) {
              var K = a[P];
              if (a.hasOwnProperty(P) && K != null)
                  switch (P) {
                  case "checked":
                      break;
                  case "value":
                      break;
                  case "defaultValue":
                      A = K;
                  default:
                      r.hasOwnProperty(P) || Lt(t, n, P, null, r, K)
                  }
          }
          for (var B in r) {
              var P = r[B];
              if (K = a[B],
              r.hasOwnProperty(B) && (P != null || K != null))
                  switch (B) {
                  case "type":
                      u = P;
                      break;
                  case "name":
                      c = P;
                      break;
                  case "checked":
                      V = P;
                      break;
                  case "defaultChecked":
                      X = P;
                      break;
                  case "value":
                      v = P;
                      break;
                  case "defaultValue":
                      S = P;
                      break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                      if (P != null)
                          throw Error(o(137, n));
                      break;
                  default:
                      P !== K && Lt(t, n, B, P, r, K)
                  }
          }
          ic(t, v, S, A, V, X, u, c);
          return;
      case "select":
          P = v = S = B = null;
          for (u in a)
              if (A = a[u],
              a.hasOwnProperty(u) && A != null)
                  switch (u) {
                  case "value":
                      break;
                  case "multiple":
                      P = A;
                  default:
                      r.hasOwnProperty(u) || Lt(t, n, u, null, r, A)
                  }
          for (c in r)
              if (u = r[c],
              A = a[c],
              r.hasOwnProperty(c) && (u != null || A != null))
                  switch (c) {
                  case "value":
                      B = u;
                      break;
                  case "defaultValue":
                      S = u;
                      break;
                  case "multiple":
                      v = u;
                  default:
                      u !== A && Lt(t, n, c, u, r, A)
                  }
          n = S,
          a = v,
          r = P,
          B != null ? ma(t, !!a, B, !1) : !!r != !!a && (n != null ? ma(t, !!a, n, !0) : ma(t, !!a, a ? [] : "", !1));
          return;
      case "textarea":
          P = B = null;
          for (S in a)
              if (c = a[S],
              a.hasOwnProperty(S) && c != null && !r.hasOwnProperty(S))
                  switch (S) {
                  case "value":
                      break;
                  case "children":
                      break;
                  default:
                      Lt(t, n, S, null, r, c)
                  }
          for (v in r)
              if (c = r[v],
              u = a[v],
              r.hasOwnProperty(v) && (c != null || u != null))
                  switch (v) {
                  case "value":
                      B = c;
                      break;
                  case "defaultValue":
                      P = c;
                      break;
                  case "children":
                      break;
                  case "dangerouslySetInnerHTML":
                      if (c != null)
                          throw Error(o(91));
                      break;
                  default:
                      c !== u && Lt(t, n, v, c, r, u)
                  }
          Fh(t, B, P);
          return;
      case "option":
          for (var tt in a)
              if (B = a[tt],
              a.hasOwnProperty(tt) && B != null && !r.hasOwnProperty(tt))
                  switch (tt) {
                  case "selected":
                      t.selected = !1;
                      break;
                  default:
                      Lt(t, n, tt, null, r, B)
                  }
          for (A in r)
              if (B = r[A],
              P = a[A],
              r.hasOwnProperty(A) && B !== P && (B != null || P != null))
                  switch (A) {
                  case "selected":
                      t.selected = B && typeof B != "function" && typeof B != "symbol";
                      break;
                  default:
                      Lt(t, n, A, B, r, P)
                  }
          return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
          for (var lt in a)
              B = a[lt],
              a.hasOwnProperty(lt) && B != null && !r.hasOwnProperty(lt) && Lt(t, n, lt, null, r, B);
          for (V in r)
              if (B = r[V],
              P = a[V],
              r.hasOwnProperty(V) && B !== P && (B != null || P != null))
                  switch (V) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                      if (B != null)
                          throw Error(o(137, n));
                      break;
                  default:
                      Lt(t, n, V, B, r, P)
                  }
          return;
      default:
          if (sc(n)) {
              for (var Vt in a)
                  B = a[Vt],
                  a.hasOwnProperty(Vt) && B !== void 0 && !r.hasOwnProperty(Vt) && Xu(t, n, Vt, void 0, r, B);
              for (X in r)
                  B = r[X],
                  P = a[X],
                  !r.hasOwnProperty(X) || B === P || B === void 0 && P === void 0 || Xu(t, n, X, B, r, P);
              return
          }
      }
      for (var R in a)
          B = a[R],
          a.hasOwnProperty(R) && B != null && !r.hasOwnProperty(R) && Lt(t, n, R, null, r, B);
      for (K in r)
          B = r[K],
          P = a[K],
          !r.hasOwnProperty(K) || B === P || B == null && P == null || Lt(t, n, K, B, r, P)
  }
  function $y(t) {
      switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
          return !0;
      default:
          return !1
      }
  }
  function mT() {
      if (typeof performance.getEntriesByType == "function") {
          for (var t = 0, n = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
              var c = a[r]
                , u = c.transferSize
                , v = c.initiatorType
                , S = c.duration;
              if (u && S && $y(v)) {
                  for (v = 0,
                  S = c.responseEnd,
                  r += 1; r < a.length; r++) {
                      var A = a[r]
                        , V = A.startTime;
                      if (V > S)
                          break;
                      var X = A.transferSize
                        , K = A.initiatorType;
                      X && $y(K) && (A = A.responseEnd,
                      v += X * (A < S ? 1 : (S - V) / (A - V)))
                  }
                  if (--r,
                  n += 8 * (u + v) / (c.duration / 1e3),
                  t++,
                  10 < t)
                      break
              }
          }
          if (0 < t)
              return n / t / 1e6
      }
      return navigator.connection && (t = navigator.connection.downlink,
      typeof t == "number") ? t : 5
  }
  var Fu = null
    , Qu = null;
  function Uo(t) {
      return t.nodeType === 9 ? t : t.ownerDocument
  }
  function Wy(t) {
      switch (t) {
      case "http://www.w3.org/2000/svg":
          return 1;
      case "http://www.w3.org/1998/Math/MathML":
          return 2;
      default:
          return 0
      }
  }
  function Jy(t, n) {
      if (t === 0)
          switch (n) {
          case "svg":
              return 1;
          case "math":
              return 2;
          default:
              return 0
          }
      return t === 1 && n === "foreignObject" ? 0 : t
  }
  function Ku(t, n) {
      return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
  }
  var Zu = null;
  function pT() {
      var t = window.event;
      return t && t.type === "popstate" ? t === Zu ? !1 : (Zu = t,
      !0) : (Zu = null,
      !1)
  }
  var Iy = typeof setTimeout == "function" ? setTimeout : void 0
    , yT = typeof clearTimeout == "function" ? clearTimeout : void 0
    , tg = typeof Promise == "function" ? Promise : void 0
    , gT = typeof queueMicrotask == "function" ? queueMicrotask : typeof tg < "u" ? function(t) {
      return tg.resolve(null).then(t).catch(vT)
  }
  : Iy;
  function vT(t) {
      setTimeout(function() {
          throw t
      })
  }
  function yi(t) {
      return t === "head"
  }
  function eg(t, n) {
      var a = n
        , r = 0;
      do {
          var c = a.nextSibling;
          if (t.removeChild(a),
          c && c.nodeType === 8)
              if (a = c.data,
              a === "/$" || a === "/&") {
                  if (r === 0) {
                      t.removeChild(c),
                      Fa(n);
                      return
                  }
                  r--
              } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                  r++;
              else if (a === "html")
                  Js(t.ownerDocument.documentElement);
              else if (a === "head") {
                  a = t.ownerDocument.head,
                  Js(a);
                  for (var u = a.firstChild; u; ) {
                      var v = u.nextSibling
                        , S = u.nodeName;
                      u[ys] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u),
                      u = v
                  }
              } else
                  a === "body" && Js(t.ownerDocument.body);
          a = c
      } while (a);
      Fa(n)
  }
  function ng(t, n) {
      var a = t;
      t = 0;
      do {
          var r = a.nextSibling;
          if (a.nodeType === 1 ? n ? (a._stashedDisplay = a.style.display,
          a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
          a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (n ? (a._stashedText = a.nodeValue,
          a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
          r && r.nodeType === 8)
              if (a = r.data,
              a === "/$") {
                  if (t === 0)
                      break;
                  t--
              } else
                  a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
          a = r
      } while (a)
  }
  function $u(t) {
      var n = t.firstChild;
      for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
          var a = n;
          switch (n = n.nextSibling,
          a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
              $u(a),
              ec(a);
              continue;
          case "SCRIPT":
          case "STYLE":
              continue;
          case "LINK":
              if (a.rel.toLowerCase() === "stylesheet")
                  continue
          }
          t.removeChild(a)
      }
  }
  function xT(t, n, a, r) {
      for (; t.nodeType === 1; ) {
          var c = a;
          if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
              if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                  break
          } else if (r) {
              if (!t[ys])
                  switch (n) {
                  case "meta":
                      if (!t.hasAttribute("itemprop"))
                          break;
                      return t;
                  case "link":
                      if (u = t.getAttribute("rel"),
                      u === "stylesheet" && t.hasAttribute("data-precedence"))
                          break;
                      if (u !== c.rel || t.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || t.getAttribute("title") !== (c.title == null ? null : c.title))
                          break;
                      return t;
                  case "style":
                      if (t.hasAttribute("data-precedence"))
                          break;
                      return t;
                  case "script":
                      if (u = t.getAttribute("src"),
                      (u !== (c.src == null ? null : c.src) || t.getAttribute("type") !== (c.type == null ? null : c.type) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                          break;
                      return t;
                  default:
                      return t
                  }
          } else if (n === "input" && t.type === "hidden") {
              var u = c.name == null ? null : "" + c.name;
              if (c.type === "hidden" && t.getAttribute("name") === u)
                  return t
          } else
              return t;
          if (t = We(t.nextSibling),
          t === null)
              break
      }
      return null
  }
  function bT(t, n, a) {
      if (n === "")
          return null;
      for (; t.nodeType !== 3; )
          if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = We(t.nextSibling),
          t === null))
              return null;
      return t
  }
  function ig(t, n) {
      for (; t.nodeType !== 8; )
          if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = We(t.nextSibling),
          t === null))
              return null;
      return t
  }
  function Wu(t) {
      return t.data === "$?" || t.data === "$~"
  }
  function Ju(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
  }
  function ST(t, n) {
      var a = t.ownerDocument;
      if (t.data === "$~")
          t._reactRetry = n;
      else if (t.data !== "$?" || a.readyState !== "loading")
          n();
      else {
          var r = function() {
              n(),
              a.removeEventListener("DOMContentLoaded", r)
          };
          a.addEventListener("DOMContentLoaded", r),
          t._reactRetry = r
      }
  }
  function We(t) {
      for (; t != null; t = t.nextSibling) {
          var n = t.nodeType;
          if (n === 1 || n === 3)
              break;
          if (n === 8) {
              if (n = t.data,
              n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
                  break;
              if (n === "/$" || n === "/&")
                  return null
          }
      }
      return t
  }
  var Iu = null;
  function ag(t) {
      t = t.nextSibling;
      for (var n = 0; t; ) {
          if (t.nodeType === 8) {
              var a = t.data;
              if (a === "/$" || a === "/&") {
                  if (n === 0)
                      return We(t.nextSibling);
                  n--
              } else
                  a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || n++
          }
          t = t.nextSibling
      }
      return null
  }
  function sg(t) {
      t = t.previousSibling;
      for (var n = 0; t; ) {
          if (t.nodeType === 8) {
              var a = t.data;
              if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                  if (n === 0)
                      return t;
                  n--
              } else
                  a !== "/$" && a !== "/&" || n++
          }
          t = t.previousSibling
      }
      return null
  }
  function rg(t, n, a) {
      switch (n = Uo(a),
      t) {
      case "html":
          if (t = n.documentElement,
          !t)
              throw Error(o(452));
          return t;
      case "head":
          if (t = n.head,
          !t)
              throw Error(o(453));
          return t;
      case "body":
          if (t = n.body,
          !t)
              throw Error(o(454));
          return t;
      default:
          throw Error(o(451))
      }
  }
  function Js(t) {
      for (var n = t.attributes; n.length; )
          t.removeAttributeNode(n[0]);
      ec(t)
  }
  var Je = new Map
    , og = new Set;
  function ko(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
  }
  var Xn = Y.d;
  Y.d = {
      f: wT,
      r: TT,
      D: ET,
      C: CT,
      L: AT,
      m: NT,
      X: jT,
      S: MT,
      M: RT
  };
  function wT() {
      var t = Xn.f()
        , n = Ro();
      return t || n
  }
  function TT(t) {
      var n = fa(t);
      n !== null && n.tag === 5 && n.type === "form" ? Ep(n) : Xn.r(t)
  }
  var Ga = typeof document > "u" ? null : document;
  function lg(t, n, a) {
      var r = Ga;
      if (r && typeof n == "string" && n) {
          var c = Ye(n);
          c = 'link[rel="' + t + '"][href="' + c + '"]',
          typeof a == "string" && (c += '[crossorigin="' + a + '"]'),
          og.has(c) || (og.add(c),
          t = {
              rel: t,
              crossOrigin: a,
              href: n
          },
          r.querySelector(c) === null && (n = r.createElement("link"),
          ue(n, "link", t),
          ae(n),
          r.head.appendChild(n)))
      }
  }
  function ET(t) {
      Xn.D(t),
      lg("dns-prefetch", t, null)
  }
  function CT(t, n) {
      Xn.C(t, n),
      lg("preconnect", t, n)
  }
  function AT(t, n, a) {
      Xn.L(t, n, a);
      var r = Ga;
      if (r && t && n) {
          var c = 'link[rel="preload"][as="' + Ye(n) + '"]';
          n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + Ye(a.imageSrcSet) + '"]',
          typeof a.imageSizes == "string" && (c += '[imagesizes="' + Ye(a.imageSizes) + '"]')) : c += '[href="' + Ye(t) + '"]';
          var u = c;
          switch (n) {
          case "style":
              u = Ya(t);
              break;
          case "script":
              u = Xa(t)
          }
          Je.has(u) || (t = x({
              rel: "preload",
              href: n === "image" && a && a.imageSrcSet ? void 0 : t,
              as: n
          }, a),
          Je.set(u, t),
          r.querySelector(c) !== null || n === "style" && r.querySelector(Is(u)) || n === "script" && r.querySelector(tr(u)) || (n = r.createElement("link"),
          ue(n, "link", t),
          ae(n),
          r.head.appendChild(n)))
      }
  }
  function NT(t, n) {
      Xn.m(t, n);
      var a = Ga;
      if (a && t) {
          var r = n && typeof n.as == "string" ? n.as : "script"
            , c = 'link[rel="modulepreload"][as="' + Ye(r) + '"][href="' + Ye(t) + '"]'
            , u = c;
          switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
              u = Xa(t)
          }
          if (!Je.has(u) && (t = x({
              rel: "modulepreload",
              href: t
          }, n),
          Je.set(u, t),
          a.querySelector(c) === null)) {
              switch (r) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                  if (a.querySelector(tr(u)))
                      return
              }
              r = a.createElement("link"),
              ue(r, "link", t),
              ae(r),
              a.head.appendChild(r)
          }
      }
  }
  function MT(t, n, a) {
      Xn.S(t, n, a);
      var r = Ga;
      if (r && t) {
          var c = da(r).hoistableStyles
            , u = Ya(t);
          n = n || "default";
          var v = c.get(u);
          if (!v) {
              var S = {
                  loading: 0,
                  preload: null
              };
              if (v = r.querySelector(Is(u)))
                  S.loading = 5;
              else {
                  t = x({
                      rel: "stylesheet",
                      href: t,
                      "data-precedence": n
                  }, a),
                  (a = Je.get(u)) && tf(t, a);
                  var A = v = r.createElement("link");
                  ae(A),
                  ue(A, "link", t),
                  A._p = new Promise(function(V, X) {
                      A.onload = V,
                      A.onerror = X
                  }
                  ),
                  A.addEventListener("load", function() {
                      S.loading |= 1
                  }),
                  A.addEventListener("error", function() {
                      S.loading |= 2
                  }),
                  S.loading |= 4,
                  Po(v, n, r)
              }
              v = {
                  type: "stylesheet",
                  instance: v,
                  count: 1,
                  state: S
              },
              c.set(u, v)
          }
      }
  }
  function jT(t, n) {
      Xn.X(t, n);
      var a = Ga;
      if (a && t) {
          var r = da(a).hoistableScripts
            , c = Xa(t)
            , u = r.get(c);
          u || (u = a.querySelector(tr(c)),
          u || (t = x({
              src: t,
              async: !0
          }, n),
          (n = Je.get(c)) && ef(t, n),
          u = a.createElement("script"),
          ae(u),
          ue(u, "link", t),
          a.head.appendChild(u)),
          u = {
              type: "script",
              instance: u,
              count: 1,
              state: null
          },
          r.set(c, u))
      }
  }
  function RT(t, n) {
      Xn.M(t, n);
      var a = Ga;
      if (a && t) {
          var r = da(a).hoistableScripts
            , c = Xa(t)
            , u = r.get(c);
          u || (u = a.querySelector(tr(c)),
          u || (t = x({
              src: t,
              async: !0,
              type: "module"
          }, n),
          (n = Je.get(c)) && ef(t, n),
          u = a.createElement("script"),
          ae(u),
          ue(u, "link", t),
          a.head.appendChild(u)),
          u = {
              type: "script",
              instance: u,
              count: 1,
              state: null
          },
          r.set(c, u))
      }
  }
  function cg(t, n, a, r) {
      var c = (c = yt.current) ? ko(c) : null;
      if (!c)
          throw Error(o(446));
      switch (t) {
      case "meta":
      case "title":
          return null;
      case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ya(a.href),
          a = da(c).hoistableStyles,
          r = a.get(n),
          r || (r = {
              type: "style",
              instance: null,
              count: 0,
              state: null
          },
          a.set(n, r)),
          r) : {
              type: "void",
              instance: null,
              count: 0,
              state: null
          };
      case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
              t = Ya(a.href);
              var u = da(c).hoistableStyles
                , v = u.get(t);
              if (v || (c = c.ownerDocument || c,
              v = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: {
                      loading: 0,
                      preload: null
                  }
              },
              u.set(t, v),
              (u = c.querySelector(Is(t))) && !u._p && (v.instance = u,
              v.state.loading = 5),
              Je.has(t) || (a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy
              },
              Je.set(t, a),
              u || OT(c, t, a, v.state))),
              n && r === null)
                  throw Error(o(528, ""));
              return v
          }
          if (n && r !== null)
              throw Error(o(529, ""));
          return null;
      case "script":
          return n = a.async,
          a = a.src,
          typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Xa(a),
          a = da(c).hoistableScripts,
          r = a.get(n),
          r || (r = {
              type: "script",
              instance: null,
              count: 0,
              state: null
          },
          a.set(n, r)),
          r) : {
              type: "void",
              instance: null,
              count: 0,
              state: null
          };
      default:
          throw Error(o(444, t))
      }
  }
  function Ya(t) {
      return 'href="' + Ye(t) + '"'
  }
  function Is(t) {
      return 'link[rel="stylesheet"][' + t + "]"
  }
  function ug(t) {
      return x({}, t, {
          "data-precedence": t.precedence,
          precedence: null
      })
  }
  function OT(t, n, a, r) {
      t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? r.loading = 1 : (n = t.createElement("link"),
      r.preload = n,
      n.addEventListener("load", function() {
          return r.loading |= 1
      }),
      n.addEventListener("error", function() {
          return r.loading |= 2
      }),
      ue(n, "link", a),
      ae(n),
      t.head.appendChild(n))
  }
  function Xa(t) {
      return '[src="' + Ye(t) + '"]'
  }
  function tr(t) {
      return "script[async]" + t
  }
  function fg(t, n, a) {
      if (n.count++,
      n.instance === null)
          switch (n.type) {
          case "style":
              var r = t.querySelector('style[data-href~="' + Ye(a.href) + '"]');
              if (r)
                  return n.instance = r,
                  ae(r),
                  r;
              var c = x({}, a, {
                  "data-href": a.href,
                  "data-precedence": a.precedence,
                  href: null,
                  precedence: null
              });
              return r = (t.ownerDocument || t).createElement("style"),
              ae(r),
              ue(r, "style", c),
              Po(r, a.precedence, t),
              n.instance = r;
          case "stylesheet":
              c = Ya(a.href);
              var u = t.querySelector(Is(c));
              if (u)
                  return n.state.loading |= 4,
                  n.instance = u,
                  ae(u),
                  u;
              r = ug(a),
              (c = Je.get(c)) && tf(r, c),
              u = (t.ownerDocument || t).createElement("link"),
              ae(u);
              var v = u;
              return v._p = new Promise(function(S, A) {
                  v.onload = S,
                  v.onerror = A
              }
              ),
              ue(u, "link", r),
              n.state.loading |= 4,
              Po(u, a.precedence, t),
              n.instance = u;
          case "script":
              return u = Xa(a.src),
              (c = t.querySelector(tr(u))) ? (n.instance = c,
              ae(c),
              c) : (r = a,
              (c = Je.get(u)) && (r = x({}, a),
              ef(r, c)),
              t = t.ownerDocument || t,
              c = t.createElement("script"),
              ae(c),
              ue(c, "link", r),
              t.head.appendChild(c),
              n.instance = c);
          case "void":
              return null;
          default:
              throw Error(o(443, n.type))
          }
      else
          n.type === "stylesheet" && (n.state.loading & 4) === 0 && (r = n.instance,
          n.state.loading |= 4,
          Po(r, a.precedence, t));
      return n.instance
  }
  function Po(t, n, a) {
      for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = r.length ? r[r.length - 1] : null, u = c, v = 0; v < r.length; v++) {
          var S = r[v];
          if (S.dataset.precedence === n)
              u = S;
          else if (u !== c)
              break
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (n = a.nodeType === 9 ? a.head : a,
      n.insertBefore(t, n.firstChild))
  }
  function tf(t, n) {
      t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title)
  }
  function ef(t, n) {
      t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity)
  }
  var Ho = null;
  function dg(t, n, a) {
      if (Ho === null) {
          var r = new Map
            , c = Ho = new Map;
          c.set(a, r)
      } else
          c = Ho,
          r = c.get(a),
          r || (r = new Map,
          c.set(a, r));
      if (r.has(t))
          return r;
      for (r.set(t, null),
      a = a.getElementsByTagName(t),
      c = 0; c < a.length; c++) {
          var u = a[c];
          if (!(u[ys] || u[re] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
              var v = u.getAttribute(n) || "";
              v = t + v;
              var S = r.get(v);
              S ? S.push(u) : r.set(v, [u])
          }
      }
      return r
  }
  function hg(t, n, a) {
      t = t.ownerDocument || t,
      t.head.insertBefore(a, n === "title" ? t.querySelector("head > title") : null)
  }
  function DT(t, n, a) {
      if (a === 1 || n.itemProp != null)
          return !1;
      switch (t) {
      case "meta":
      case "title":
          return !0;
      case "style":
          if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
              break;
          return !0;
      case "link":
          if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
              break;
          switch (n.rel) {
          case "stylesheet":
              return t = n.disabled,
              typeof n.precedence == "string" && t == null;
          default:
              return !0
          }
      case "script":
          if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
              return !0
      }
      return !1
  }
  function mg(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
  }
  function _T(t, n, a, r) {
      if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
          if (a.instance === null) {
              var c = Ya(r.href)
                , u = n.querySelector(Is(c));
              if (u) {
                  n = u._p,
                  n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++,
                  t = qo.bind(t),
                  n.then(t, t)),
                  a.state.loading |= 4,
                  a.instance = u,
                  ae(u);
                  return
              }
              u = n.ownerDocument || n,
              r = ug(r),
              (c = Je.get(c)) && tf(r, c),
              u = u.createElement("link"),
              ae(u);
              var v = u;
              v._p = new Promise(function(S, A) {
                  v.onload = S,
                  v.onerror = A
              }
              ),
              ue(u, "link", r),
              a.instance = u
          }
          t.stylesheets === null && (t.stylesheets = new Map),
          t.stylesheets.set(a, n),
          (n = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++,
          a = qo.bind(t),
          n.addEventListener("load", a),
          n.addEventListener("error", a))
      }
  }
  var nf = 0;
  function zT(t, n) {
      return t.stylesheets && t.count === 0 && Yo(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount ? function(a) {
          var r = setTimeout(function() {
              if (t.stylesheets && Yo(t, t.stylesheets),
              t.unsuspend) {
                  var u = t.unsuspend;
                  t.unsuspend = null,
                  u()
              }
          }, 6e4 + n);
          0 < t.imgBytes && nf === 0 && (nf = 62500 * mT());
          var c = setTimeout(function() {
              if (t.waitingForImages = !1,
              t.count === 0 && (t.stylesheets && Yo(t, t.stylesheets),
              t.unsuspend)) {
                  var u = t.unsuspend;
                  t.unsuspend = null,
                  u()
              }
          }, (t.imgBytes > nf ? 50 : 800) + n);
          return t.unsuspend = a,
          function() {
              t.unsuspend = null,
              clearTimeout(r),
              clearTimeout(c)
          }
      }
      : null
  }
  function qo() {
      if (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
          if (this.stylesheets)
              Yo(this, this.stylesheets);
          else if (this.unsuspend) {
              var t = this.unsuspend;
              this.unsuspend = null,
              t()
          }
      }
  }
  var Go = null;
  function Yo(t, n) {
      t.stylesheets = null,
      t.unsuspend !== null && (t.count++,
      Go = new Map,
      n.forEach(LT, t),
      Go = null,
      qo.call(t))
  }
  function LT(t, n) {
      if (!(n.state.loading & 4)) {
          var a = Go.get(t);
          if (a)
              var r = a.get(null);
          else {
              a = new Map,
              Go.set(t, a);
              for (var c = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < c.length; u++) {
                  var v = c[u];
                  (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (a.set(v.dataset.precedence, v),
                  r = v)
              }
              r && a.set(null, r)
          }
          c = n.instance,
          v = c.getAttribute("data-precedence"),
          u = a.get(v) || r,
          u === r && a.set(null, c),
          a.set(v, c),
          this.count++,
          r = qo.bind(this),
          c.addEventListener("load", r),
          c.addEventListener("error", r),
          u ? u.parentNode.insertBefore(c, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
          t.insertBefore(c, t.firstChild)),
          n.state.loading |= 4
      }
  }
  var er = {
      $$typeof: D,
      Provider: null,
      Consumer: null,
      _currentValue: U,
      _currentValue2: U,
      _threadCount: 0
  };
  function VT(t, n, a, r, c, u, v, S, A) {
      this.tag = 1,
      this.containerInfo = t,
      this.pingCache = this.current = this.pendingChildren = null,
      this.timeoutHandle = -1,
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
      this.callbackPriority = 0,
      this.expirationTimes = Wl(-1),
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
      this.entanglements = Wl(0),
      this.hiddenUpdates = Wl(null),
      this.identifierPrefix = r,
      this.onUncaughtError = c,
      this.onCaughtError = u,
      this.onRecoverableError = v,
      this.pooledCache = null,
      this.pooledCacheLanes = 0,
      this.formState = A,
      this.incompleteTransitions = new Map
  }
  function pg(t, n, a, r, c, u, v, S, A, V, X, K) {
      return t = new VT(t,n,a,v,A,V,X,K,S),
      n = 1,
      u === !0 && (n |= 24),
      u = Oe(3, null, null, n),
      t.current = u,
      u.stateNode = t,
      n = Lc(),
      n.refCount++,
      t.pooledCache = n,
      n.refCount++,
      u.memoizedState = {
          element: r,
          isDehydrated: a,
          cache: n
      },
      kc(u),
      t
  }
  function yg(t) {
      return t ? (t = wa,
      t) : wa
  }
  function gg(t, n, a, r, c, u) {
      c = yg(c),
      r.context === null ? r.context = c : r.pendingContext = c,
      r = si(n),
      r.payload = {
          element: a
      },
      u = u === void 0 ? null : u,
      u !== null && (r.callback = u),
      a = ri(t, r, n),
      a !== null && (Te(a, t, n),
      _s(a, t, n))
  }
  function vg(t, n) {
      if (t = t.memoizedState,
      t !== null && t.dehydrated !== null) {
          var a = t.retryLane;
          t.retryLane = a !== 0 && a < n ? a : n
      }
  }
  function af(t, n) {
      vg(t, n),
      (t = t.alternate) && vg(t, n)
  }
  function xg(t) {
      if (t.tag === 13 || t.tag === 31) {
          var n = ki(t, 67108864);
          n !== null && Te(n, t, 67108864),
          af(t, 67108864)
      }
  }
  function bg(t) {
      if (t.tag === 13 || t.tag === 31) {
          var n = Ve();
          n = Jl(n);
          var a = ki(t, n);
          a !== null && Te(a, t, n),
          af(t, n)
      }
  }
  var Xo = !0;
  function BT(t, n, a, r) {
      var c = _.T;
      _.T = null;
      var u = Y.p;
      try {
          Y.p = 2,
          sf(t, n, a, r)
      } finally {
          Y.p = u,
          _.T = c
      }
  }
  function UT(t, n, a, r) {
      var c = _.T;
      _.T = null;
      var u = Y.p;
      try {
          Y.p = 8,
          sf(t, n, a, r)
      } finally {
          Y.p = u,
          _.T = c
      }
  }
  function sf(t, n, a, r) {
      if (Xo) {
          var c = rf(r);
          if (c === null)
              Yu(t, n, r, Fo, a),
              wg(t, r);
          else if (PT(c, t, n, a, r))
              r.stopPropagation();
          else if (wg(t, r),
          n & 4 && -1 < kT.indexOf(t)) {
              for (; c !== null; ) {
                  var u = fa(c);
                  if (u !== null)
                      switch (u.tag) {
                      case 3:
                          if (u = u.stateNode,
                          u.current.memoizedState.isDehydrated) {
                              var v = zi(u.pendingLanes);
                              if (v !== 0) {
                                  var S = u;
                                  for (S.pendingLanes |= 2,
                                  S.entangledLanes |= 2; v; ) {
                                      var A = 1 << 31 - je(v);
                                      S.entanglements[1] |= A,
                                      v &= ~A
                                  }
                                  xn(u),
                                  (Rt & 6) === 0 && (Mo = Ne() + 500,
                                  Zs(0))
                              }
                          }
                          break;
                      case 31:
                      case 13:
                          S = ki(u, 2),
                          S !== null && Te(S, u, 2),
                          Ro(),
                          af(u, 2)
                      }
                  if (u = rf(r),
                  u === null && Yu(t, n, r, Fo, a),
                  u === c)
                      break;
                  c = u
              }
              c !== null && r.stopPropagation()
          } else
              Yu(t, n, r, null, a)
      }
  }
  function rf(t) {
      return t = oc(t),
      of(t)
  }
  var Fo = null;
  function of(t) {
      if (Fo = null,
      t = ua(t),
      t !== null) {
          var n = f(t);
          if (n === null)
              t = null;
          else {
              var a = n.tag;
              if (a === 13) {
                  if (t = d(n),
                  t !== null)
                      return t;
                  t = null
              } else if (a === 31) {
                  if (t = m(n),
                  t !== null)
                      return t;
                  t = null
              } else if (a === 3) {
                  if (n.stateNode.current.memoizedState.isDehydrated)
                      return n.tag === 3 ? n.stateNode.containerInfo : null;
                  t = null
              } else
                  n !== t && (t = null)
          }
      }
      return Fo = t,
      null
  }
  function Sg(t) {
      switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
          return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
          return 8;
      case "message":
          switch (ES()) {
          case jh:
              return 2;
          case Rh:
              return 8;
          case zr:
          case CS:
              return 32;
          case Oh:
              return 268435456;
          default:
              return 32
          }
      default:
          return 32
      }
  }
  var lf = !1
    , gi = null
    , vi = null
    , xi = null
    , nr = new Map
    , ir = new Map
    , bi = []
    , kT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function wg(t, n) {
      switch (t) {
      case "focusin":
      case "focusout":
          gi = null;
          break;
      case "dragenter":
      case "dragleave":
          vi = null;
          break;
      case "mouseover":
      case "mouseout":
          xi = null;
          break;
      case "pointerover":
      case "pointerout":
          nr.delete(n.pointerId);
          break;
      case "gotpointercapture":
      case "lostpointercapture":
          ir.delete(n.pointerId)
      }
  }
  function ar(t, n, a, r, c, u) {
      return t === null || t.nativeEvent !== u ? (t = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [c]
      },
      n !== null && (n = fa(n),
      n !== null && xg(n)),
      t) : (t.eventSystemFlags |= r,
      n = t.targetContainers,
      c !== null && n.indexOf(c) === -1 && n.push(c),
      t)
  }
  function PT(t, n, a, r, c) {
      switch (n) {
      case "focusin":
          return gi = ar(gi, t, n, a, r, c),
          !0;
      case "dragenter":
          return vi = ar(vi, t, n, a, r, c),
          !0;
      case "mouseover":
          return xi = ar(xi, t, n, a, r, c),
          !0;
      case "pointerover":
          var u = c.pointerId;
          return nr.set(u, ar(nr.get(u) || null, t, n, a, r, c)),
          !0;
      case "gotpointercapture":
          return u = c.pointerId,
          ir.set(u, ar(ir.get(u) || null, t, n, a, r, c)),
          !0
      }
      return !1
  }
  function Tg(t) {
      var n = ua(t.target);
      if (n !== null) {
          var a = f(n);
          if (a !== null) {
              if (n = a.tag,
              n === 13) {
                  if (n = d(a),
                  n !== null) {
                      t.blockedOn = n,
                      Bh(t.priority, function() {
                          bg(a)
                      });
                      return
                  }
              } else if (n === 31) {
                  if (n = m(a),
                  n !== null) {
                      t.blockedOn = n,
                      Bh(t.priority, function() {
                          bg(a)
                      });
                      return
                  }
              } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                  t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                  return
              }
          }
      }
      t.blockedOn = null
  }
  function Qo(t) {
      if (t.blockedOn !== null)
          return !1;
      for (var n = t.targetContainers; 0 < n.length; ) {
          var a = rf(t.nativeEvent);
          if (a === null) {
              a = t.nativeEvent;
              var r = new a.constructor(a.type,a);
              rc = r,
              a.target.dispatchEvent(r),
              rc = null
          } else
              return n = fa(a),
              n !== null && xg(n),
              t.blockedOn = a,
              !1;
          n.shift()
      }
      return !0
  }
  function Eg(t, n, a) {
      Qo(t) && a.delete(n)
  }
  function HT() {
      lf = !1,
      gi !== null && Qo(gi) && (gi = null),
      vi !== null && Qo(vi) && (vi = null),
      xi !== null && Qo(xi) && (xi = null),
      nr.forEach(Eg),
      ir.forEach(Eg)
  }
  function Ko(t, n) {
      t.blockedOn === n && (t.blockedOn = null,
      lf || (lf = !0,
      e.unstable_scheduleCallback(e.unstable_NormalPriority, HT)))
  }
  var Zo = null;
  function Cg(t) {
      Zo !== t && (Zo = t,
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
          Zo === t && (Zo = null);
          for (var n = 0; n < t.length; n += 3) {
              var a = t[n]
                , r = t[n + 1]
                , c = t[n + 2];
              if (typeof r != "function") {
                  if (of(r || a) === null)
                      continue;
                  break
              }
              var u = fa(a);
              u !== null && (t.splice(n, 3),
              n -= 3,
              su(u, {
                  pending: !0,
                  data: c,
                  method: a.method,
                  action: r
              }, r, c))
          }
      }))
  }
  function Fa(t) {
      function n(A) {
          return Ko(A, t)
      }
      gi !== null && Ko(gi, t),
      vi !== null && Ko(vi, t),
      xi !== null && Ko(xi, t),
      nr.forEach(n),
      ir.forEach(n);
      for (var a = 0; a < bi.length; a++) {
          var r = bi[a];
          r.blockedOn === t && (r.blockedOn = null)
      }
      for (; 0 < bi.length && (a = bi[0],
      a.blockedOn === null); )
          Tg(a),
          a.blockedOn === null && bi.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay,
      a != null)
          for (r = 0; r < a.length; r += 3) {
              var c = a[r]
                , u = a[r + 1]
                , v = c[ge] || null;
              if (typeof u == "function")
                  v || Cg(a);
              else if (v) {
                  var S = null;
                  if (u && u.hasAttribute("formAction")) {
                      if (c = u,
                      v = u[ge] || null)
                          S = v.formAction;
                      else if (of(c) !== null)
                          continue
                  } else
                      S = v.action;
                  typeof S == "function" ? a[r + 1] = S : (a.splice(r, 3),
                  r -= 3),
                  Cg(a)
              }
          }
  }
  function Ag() {
      function t(u) {
          u.canIntercept && u.info === "react-transition" && u.intercept({
              handler: function() {
                  return new Promise(function(v) {
                      return c = v
                  }
                  )
              },
              focusReset: "manual",
              scroll: "manual"
          })
      }
      function n() {
          c !== null && (c(),
          c = null),
          r || setTimeout(a, 20)
      }
      function a() {
          if (!r && !navigation.transition) {
              var u = navigation.currentEntry;
              u && u.url != null && navigation.navigate(u.url, {
                  state: u.getState(),
                  info: "react-transition",
                  history: "replace"
              })
          }
      }
      if (typeof navigation == "object") {
          var r = !1
            , c = null;
          return navigation.addEventListener("navigate", t),
          navigation.addEventListener("navigatesuccess", n),
          navigation.addEventListener("navigateerror", n),
          setTimeout(a, 100),
          function() {
              r = !0,
              navigation.removeEventListener("navigate", t),
              navigation.removeEventListener("navigatesuccess", n),
              navigation.removeEventListener("navigateerror", n),
              c !== null && (c(),
              c = null)
          }
      }
  }
  function cf(t) {
      this._internalRoot = t
  }
  $o.prototype.render = cf.prototype.render = function(t) {
      var n = this._internalRoot;
      if (n === null)
          throw Error(o(409));
      var a = n.current
        , r = Ve();
      gg(a, r, t, n, null, null)
  }
  ,
  $o.prototype.unmount = cf.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          gg(t.current, 2, null, t, null, null),
          Ro(),
          n[ca] = null
      }
  }
  ;
  function $o(t) {
      this._internalRoot = t
  }
  $o.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
          var n = Vh();
          t = {
              blockedOn: null,
              target: t,
              priority: n
          };
          for (var a = 0; a < bi.length && n !== 0 && n < bi[a].priority; a++)
              ;
          bi.splice(a, 0, t),
          a === 0 && Tg(t)
      }
  }
  ;
  var Ng = i.version;
  if (Ng !== "19.2.0")
      throw Error(o(527, Ng, "19.2.0"));
  Y.findDOMNode = function(t) {
      var n = t._reactInternals;
      if (n === void 0)
          throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
          Error(o(268, t)));
      return t = h(n),
      t = t !== null ? g(t) : null,
      t = t === null ? null : t.stateNode,
      t
  }
  ;
  var qT = {
      bundleType: 0,
      version: "19.2.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: _,
      reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Wo.isDisabled && Wo.supportsFiber)
          try {
              hs = Wo.inject(qT),
              Me = Wo
          } catch {}
  }
  return rr.createRoot = function(t, n) {
      if (!l(t))
          throw Error(o(299));
      var a = !1
        , r = ""
        , c = zp
        , u = Lp
        , v = Vp;
      return n != null && (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
      n.onCaughtError !== void 0 && (u = n.onCaughtError),
      n.onRecoverableError !== void 0 && (v = n.onRecoverableError)),
      n = pg(t, 1, !1, null, null, a, r, null, c, u, v, Ag),
      t[ca] = n.current,
      Gu(t),
      new cf(n)
  }
  ,
  rr.hydrateRoot = function(t, n, a) {
      if (!l(t))
          throw Error(o(299));
      var r = !1
        , c = ""
        , u = zp
        , v = Lp
        , S = Vp
        , A = null;
      return a != null && (a.unstable_strictMode === !0 && (r = !0),
      a.identifierPrefix !== void 0 && (c = a.identifierPrefix),
      a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
      a.onCaughtError !== void 0 && (v = a.onCaughtError),
      a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
      a.formState !== void 0 && (A = a.formState)),
      n = pg(t, 1, !0, n, a ?? null, r, c, A, u, v, S, Ag),
      n.context = yg(null),
      a = n.current,
      r = Ve(),
      r = Jl(r),
      c = si(r),
      c.callback = null,
      ri(a, c, r),
      a = r,
      n.current.lanes = a,
      ps(n, a),
      xn(n),
      t[ca] = n.current,
      Gu(t),
      new $o(n)
  }
  ,
  rr.version = "19.2.0",
  rr
}
var Bg;
function JT() {
  if (Bg)
      return ff.exports;
  Bg = 1;
  function e() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
          try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
          } catch (i) {
              console.error(i)
          }
  }
  return e(),
  ff.exports = WT(),
  ff.exports
}
var IT = JT();
function t2(e, i) {
  if (e instanceof RegExp)
      return {
          keys: !1,
          pattern: e
      };
  var s, o, l, f, d = [], m = "", p = e.split("/");
  for (p[0] || p.shift(); l = p.shift(); )
      s = l[0],
      s === "*" ? (d.push(s),
      m += l[1] === "?" ? "(?:/(.*))?" : "/(.*)") : s === ":" ? (o = l.indexOf("?", 1),
      f = l.indexOf(".", 1),
      d.push(l.substring(1, ~o ? o : ~f ? f : l.length)),
      m += ~o && !~f ? "(?:/([^/]+?))?" : "/([^/]+?)",
      ~f && (m += (~o ? "?" : "") + "\\" + l.substring(f))) : m += "/" + l;
  return {
      keys: d,
      pattern: new RegExp("^" + m + (i ? "(?=$|/)" : "/?$"),"i")
  }
}
var w = Nl();
const Ti = k0(w)
, H0 = YT({
  __proto__: null,
  default: Ti
}, [w]);
var yf = {
  exports: {}
}
, gf = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ug;
function e2() {
  if (Ug)
      return gf;
  Ug = 1;
  var e = Nl();
  function i(x, b) {
      return x === b && (x !== 0 || 1 / x === 1 / b) || x !== x && b !== b
  }
  var s = typeof Object.is == "function" ? Object.is : i
    , o = e.useState
    , l = e.useEffect
    , f = e.useLayoutEffect
    , d = e.useDebugValue;
  function m(x, b) {
      var T = b()
        , C = o({
          inst: {
              value: T,
              getSnapshot: b
          }
      })
        , E = C[0].inst
        , N = C[1];
      return f(function() {
          E.value = T,
          E.getSnapshot = b,
          p(E) && N({
              inst: E
          })
      }, [x, T, b]),
      l(function() {
          return p(E) && N({
              inst: E
          }),
          x(function() {
              p(E) && N({
                  inst: E
              })
          })
      }, [x]),
      d(T),
      T
  }
  function p(x) {
      var b = x.getSnapshot;
      x = x.value;
      try {
          var T = b();
          return !s(x, T)
      } catch {
          return !0
      }
  }
  function h(x, b) {
      return b()
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : m;
  return gf.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g,
  gf
}
var kg;
function n2() {
  return kg || (kg = 1,
  yf.exports = e2()),
  yf.exports
}
var i2 = n2();
const a2 = H0.useInsertionEffect
, s2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
, r2 = s2 ? w.useLayoutEffect : w.useEffect
, o2 = a2 || r2
, q0 = e => {
  const i = w.useRef([e, (...s) => i[0](...s)]).current;
  return o2( () => {
      i[0] = e
  }
  ),
  i[1]
}
, l2 = "popstate"
, Cd = "pushState"
, Ad = "replaceState"
, c2 = "hashchange"
, Pg = [l2, Cd, Ad, c2]
, u2 = e => {
  for (const i of Pg)
      addEventListener(i, e);
  return () => {
      for (const i of Pg)
          removeEventListener(i, e)
  }
}
, G0 = (e, i) => i2.useSyncExternalStore(u2, e, i)
, f2 = () => location.search
, d2 = ({ssrSearch: e=""}={}) => G0(f2, () => e)
, Hg = () => location.pathname
, h2 = ({ssrPath: e}={}) => G0(Hg, e ? () => e : Hg)
, m2 = (e, {replace: i=!1, state: s=null}={}) => history[i ? Ad : Cd](s, "", e)
, p2 = (e={}) => [h2(e), m2]
, qg = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[qg] > "u") {
  for (const e of [Cd, Ad]) {
      const i = history[e];
      history[e] = function() {
          const s = i.apply(this, arguments)
            , o = new Event(e);
          return o.arguments = arguments,
          dispatchEvent(o),
          s
      }
  }
  Object.defineProperty(window, qg, {
      value: !0
  })
}
const y2 = (e, i) => i.toLowerCase().indexOf(e.toLowerCase()) ? "~" + i : i.slice(e.length) || "/"
, Y0 = (e="") => e === "/" ? "" : e
, g2 = (e, i) => e[0] === "~" ? e.slice(1) : Y0(i) + e
, v2 = (e="", i) => y2(Gg(Y0(e)), Gg(i))
, Gg = e => {
  try {
      return decodeURI(e)
  } catch {
      return e
  }
}
, X0 = {
  hook: p2,
  searchHook: d2,
  parser: t2,
  base: "",
  ssrPath: void 0,
  ssrSearch: void 0,
  hrefs: e => e
}
, F0 = w.createContext(X0)
, Ml = () => w.useContext(F0)
, Q0 = {}
, K0 = w.createContext(Q0)
, x2 = () => w.useContext(K0)
, Nd = e => {
  const [i,s] = e.hook(e);
  return [v2(e.base, i), q0( (o, l) => s(g2(o, e.base), l))]
}
, Z0 = (e, i, s, o) => {
  const {pattern: l, keys: f} = i instanceof RegExp ? {
      keys: !1,
      pattern: i
  } : e(i || "*", o)
    , d = l.exec(s) || []
    , [m,...p] = d;
  return m !== void 0 ? [!0, ( () => {
      const h = f !== !1 ? Object.fromEntries(f.map( (x, b) => [x, p[b]])) : d.groups;
      let g = {
          ...p
      };
      return h && Object.assign(g, h),
      g
  }
  )(), ...o ? [m] : []] : [!1, null]
}
, b2 = ({children: e, ...i}) => {
  const s = Ml()
    , o = i.hook ? X0 : s;
  let l = o;
  const [f,d] = i.ssrPath?.split("?") ?? [];
  d && (i.ssrSearch = d,
  i.ssrPath = f),
  i.hrefs = i.hrefs ?? i.hook?.hrefs;
  let m = w.useRef({})
    , p = m.current
    , h = p;
  for (let g in o) {
      const x = g === "base" ? o[g] + (i[g] || "") : i[g] || o[g];
      p === h && x !== h[g] && (m.current = h = {
          ...h
      }),
      h[g] = x,
      x !== o[g] && (l = h)
  }
  return w.createElement(F0.Provider, {
      value: l,
      children: e
  })
}
, Yg = ({children: e, component: i}, s) => i ? w.createElement(i, {
  params: s
}) : typeof e == "function" ? e(s) : e
, S2 = e => {
  let i = w.useRef(Q0)
    , s = i.current;
  for (const o in e)
      e[o] !== s[o] && (s = e);
  return Object.keys(e).length === 0 && (s = e),
  i.current = s
}
, vf = ({path: e, nest: i, match: s, ...o}) => {
  const l = Ml()
    , [f] = Nd(l)
    , [d,m,p] = s ?? Z0(l.parser, e, f, i)
    , h = S2({
      ...x2(),
      ...m
  });
  if (!d)
      return null;
  const g = p ? w.createElement(b2, {
      base: p
  }, Yg(o, h)) : Yg(o, h);
  return w.createElement(K0.Provider, {
      value: h,
      children: g
  })
}
, xf = w.forwardRef( (e, i) => {
  const s = Ml()
    , [o,l] = Nd(s)
    , {to: f="", href: d=f, onClick: m, asChild: p, children: h, className: g, replace: x, state: b, ...T} = e
    , C = q0(N => {
      N.ctrlKey || N.metaKey || N.altKey || N.shiftKey || N.button !== 0 || (m?.(N),
      N.defaultPrevented || (N.preventDefault(),
      l(d, e)))
  }
  )
    , E = s.hrefs(d[0] === "~" ? d.slice(1) : s.base + d, s);
  return p && w.isValidElement(h) ? w.cloneElement(h, {
      onClick: C,
      href: E
  }) : w.createElement("a", {
      ...T,
      onClick: C,
      href: E,
      className: g?.call ? g(o === d) : g,
      children: h,
      ref: i
  })
}
)
, $0 = e => Array.isArray(e) ? e.flatMap(i => $0(i && i.type === w.Fragment ? i.props.children : i)) : [e]
, w2 = ({children: e, location: i}) => {
  const s = Ml()
    , [o] = Nd(s);
  for (const l of $0(e)) {
      let f = 0;
      if (w.isValidElement(l) && (f = Z0(s.parser, l.props.path, i || o, l.props.nest))[0])
          return w.cloneElement(l, {
              match: f
          })
  }
  return null
}
;
var jl = class {
  constructor() {
      this.listeners = new Set,
      this.subscribe = this.subscribe.bind(this)
  }
  subscribe(e) {
      return this.listeners.add(e),
      this.onSubscribe(),
      () => {
          this.listeners.delete(e),
          this.onUnsubscribe()
      }
  }
  hasListeners() {
      return this.listeners.size > 0
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
, Rl = typeof window > "u" || "Deno"in globalThis;
function un() {}
function T2(e, i) {
  return typeof e == "function" ? e(i) : e
}
function E2(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function C2(e, i) {
  return Math.max(e + (i || 0) - Date.now(), 0)
}
function Xg(e, i) {
  return typeof e == "function" ? e(i) : e
}
function A2(e, i) {
  return typeof e == "function" ? e(i) : e
}
function Fg(e, i) {
  const {type: s="all", exact: o, fetchStatus: l, predicate: f, queryKey: d, stale: m} = e;
  if (d) {
      if (o) {
          if (i.queryHash !== Md(d, i.options))
              return !1
      } else if (!gr(i.queryKey, d))
          return !1
  }
  if (s !== "all") {
      const p = i.isActive();
      if (s === "active" && !p || s === "inactive" && p)
          return !1
  }
  return !(typeof m == "boolean" && i.isStale() !== m || l && l !== i.state.fetchStatus || f && !f(i))
}
function Qg(e, i) {
  const {exact: s, status: o, predicate: l, mutationKey: f} = e;
  if (f) {
      if (!i.options.mutationKey)
          return !1;
      if (s) {
          if (yr(i.options.mutationKey) !== yr(f))
              return !1
      } else if (!gr(i.options.mutationKey, f))
          return !1
  }
  return !(o && i.state.status !== o || l && !l(i))
}
function Md(e, i) {
  return (i?.queryKeyHashFn || yr)(e)
}
function yr(e) {
  return JSON.stringify(e, (i, s) => Yf(s) ? Object.keys(s).sort().reduce( (o, l) => (o[l] = s[l],
  o), {}) : s)
}
function gr(e, i) {
  return e === i ? !0 : typeof e != typeof i ? !1 : e && i && typeof e == "object" && typeof i == "object" ? !Object.keys(i).some(s => !gr(e[s], i[s])) : !1
}
function W0(e, i) {
  if (e === i)
      return e;
  const s = Kg(e) && Kg(i);
  if (s || Yf(e) && Yf(i)) {
      const o = s ? e : Object.keys(e)
        , l = o.length
        , f = s ? i : Object.keys(i)
        , d = f.length
        , m = s ? [] : {};
      let p = 0;
      for (let h = 0; h < d; h++) {
          const g = s ? h : f[h];
          (!s && o.includes(g) || s) && e[g] === void 0 && i[g] === void 0 ? (m[g] = void 0,
          p++) : (m[g] = W0(e[g], i[g]),
          m[g] === e[g] && e[g] !== void 0 && p++)
      }
      return l === d && p === l ? e : m
  }
  return i
}
function Kg(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function Yf(e) {
  if (!Zg(e))
      return !1;
  const i = e.constructor;
  if (i === void 0)
      return !0;
  const s = i.prototype;
  return !(!Zg(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Zg(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}
function N2(e) {
  return new Promise(i => {
      setTimeout(i, e)
  }
  )
}
function M2(e, i, s) {
  return typeof s.structuralSharing == "function" ? s.structuralSharing(e, i) : s.structuralSharing !== !1 ? W0(e, i) : i
}
function j2(e, i, s=0) {
  const o = [...e, i];
  return s && o.length > s ? o.slice(1) : o
}
function R2(e, i, s=0) {
  const o = [i, ...e];
  return s && o.length > s ? o.slice(0, -1) : o
}
var jd = Symbol();
function J0(e, i) {
  return !e.queryFn && i?.initialPromise ? () => i.initialPromise : !e.queryFn || e.queryFn === jd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var O2 = class extends jl {
  #t;
  #e;
  #n;
  constructor() {
      super(),
      this.#n = e => {
          if (!Rl && window.addEventListener) {
              const i = () => e();
              return window.addEventListener("visibilitychange", i, !1),
              () => {
                  window.removeEventListener("visibilitychange", i)
              }
          }
      }
  }
  onSubscribe() {
      this.#e || this.setEventListener(this.#n)
  }
  onUnsubscribe() {
      this.hasListeners() || (this.#e?.(),
      this.#e = void 0)
  }
  setEventListener(e) {
      this.#n = e,
      this.#e?.(),
      this.#e = e(i => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
      }
      )
  }
  setFocused(e) {
      this.#t !== e && (this.#t = e,
      this.onFocus())
  }
  onFocus() {
      const e = this.isFocused();
      this.listeners.forEach(i => {
          i(e)
      }
      )
  }
  isFocused() {
      return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden"
  }
}
, I0 = new O2
, D2 = class extends jl {
  #t = !0;
  #e;
  #n;
  constructor() {
      super(),
      this.#n = e => {
          if (!Rl && window.addEventListener) {
              const i = () => e(!0)
                , s = () => e(!1);
              return window.addEventListener("online", i, !1),
              window.addEventListener("offline", s, !1),
              () => {
                  window.removeEventListener("online", i),
                  window.removeEventListener("offline", s)
              }
          }
      }
  }
  onSubscribe() {
      this.#e || this.setEventListener(this.#n)
  }
  onUnsubscribe() {
      this.hasListeners() || (this.#e?.(),
      this.#e = void 0)
  }
  setEventListener(e) {
      this.#n = e,
      this.#e?.(),
      this.#e = e(this.setOnline.bind(this))
  }
  setOnline(e) {
      this.#t !== e && (this.#t = e,
      this.listeners.forEach(s => {
          s(e)
      }
      ))
  }
  isOnline() {
      return this.#t
  }
}
, yl = new D2;
function _2() {
  let e, i;
  const s = new Promise( (l, f) => {
      e = l,
      i = f
  }
  );
  s.status = "pending",
  s.catch( () => {}
  );
  function o(l) {
      Object.assign(s, l),
      delete s.resolve,
      delete s.reject
  }
  return s.resolve = l => {
      o({
          status: "fulfilled",
          value: l
      }),
      e(l)
  }
  ,
  s.reject = l => {
      o({
          status: "rejected",
          reason: l
      }),
      i(l)
  }
  ,
  s
}
function z2(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
function tx(e) {
  return (e ?? "online") === "online" ? yl.isOnline() : !0
}
var ex = class extends Error {
  constructor(e) {
      super("CancelledError"),
      this.revert = e?.revert,
      this.silent = e?.silent
  }
}
;
function bf(e) {
  return e instanceof ex
}
function nx(e) {
  let i = !1, s = 0, o = !1, l;
  const f = _2()
    , d = E => {
      o || (b(new ex(E)),
      e.abort?.())
  }
    , m = () => {
      i = !0
  }
    , p = () => {
      i = !1
  }
    , h = () => I0.isFocused() && (e.networkMode === "always" || yl.isOnline()) && e.canRun()
    , g = () => tx(e.networkMode) && e.canRun()
    , x = E => {
      o || (o = !0,
      e.onSuccess?.(E),
      l?.(),
      f.resolve(E))
  }
    , b = E => {
      o || (o = !0,
      e.onError?.(E),
      l?.(),
      f.reject(E))
  }
    , T = () => new Promise(E => {
      l = N => {
          (o || h()) && E(N)
      }
      ,
      e.onPause?.()
  }
  ).then( () => {
      l = void 0,
      o || e.onContinue?.()
  }
  )
    , C = () => {
      if (o)
          return;
      let E;
      const N = s === 0 ? e.initialPromise : void 0;
      try {
          E = N ?? e.fn()
      } catch (O) {
          E = Promise.reject(O)
      }
      Promise.resolve(E).then(x).catch(O => {
          if (o)
              return;
          const z = e.retry ?? (Rl ? 0 : 3)
            , D = e.retryDelay ?? z2
            , q = typeof D == "function" ? D(s, O) : D
            , G = z === !0 || typeof z == "number" && s < z || typeof z == "function" && z(s, O);
          if (i || !G) {
              b(O);
              return
          }
          s++,
          e.onFail?.(s, O),
          N2(q).then( () => h() ? void 0 : T()).then( () => {
              i ? b(O) : C()
          }
          )
      }
      )
  }
  ;
  return {
      promise: f,
      cancel: d,
      continue: () => (l?.(),
      f),
      cancelRetry: m,
      continueRetry: p,
      canStart: g,
      start: () => (g() ? C() : T().then(C),
      f)
  }
}
function L2() {
  let e = []
    , i = 0
    , s = m => {
      m()
  }
    , o = m => {
      m()
  }
    , l = m => setTimeout(m, 0);
  const f = m => {
      i ? e.push(m) : l( () => {
          s(m)
      }
      )
  }
    , d = () => {
      const m = e;
      e = [],
      m.length && l( () => {
          o( () => {
              m.forEach(p => {
                  s(p)
              }
              )
          }
          )
      }
      )
  }
  ;
  return {
      batch: m => {
          let p;
          i++;
          try {
              p = m()
          } finally {
              i--,
              i || d()
          }
          return p
      }
      ,
      batchCalls: m => (...p) => {
          f( () => {
              m(...p)
          }
          )
      }
      ,
      schedule: f,
      setNotifyFunction: m => {
          s = m
      }
      ,
      setBatchNotifyFunction: m => {
          o = m
      }
      ,
      setScheduler: m => {
          l = m
      }
  }
}
var pe = L2()
, ix = class {
  #t;
  destroy() {
      this.clearGcTimeout()
  }
  scheduleGc() {
      this.clearGcTimeout(),
      E2(this.gcTime) && (this.#t = setTimeout( () => {
          this.optionalRemove()
      }
      , this.gcTime))
  }
  updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (Rl ? 1 / 0 : 300 * 1e3))
  }
  clearGcTimeout() {
      this.#t && (clearTimeout(this.#t),
      this.#t = void 0)
  }
}
, V2 = class extends ix {
  #t;
  #e;
  #n;
  #i;
  #r;
  #s;
  constructor(e) {
      super(),
      this.#s = !1,
      this.#r = e.defaultOptions,
      this.setOptions(e.options),
      this.observers = [],
      this.#n = e.cache,
      this.queryKey = e.queryKey,
      this.queryHash = e.queryHash,
      this.#t = U2(this.options),
      this.state = e.state ?? this.#t,
      this.scheduleGc()
  }
  get meta() {
      return this.options.meta
  }
  get promise() {
      return this.#i?.promise
  }
  setOptions(e) {
      this.options = {
          ...this.#r,
          ...e
      },
      this.updateGcTime(this.options.gcTime)
  }
  optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
  }
  setData(e, i) {
      const s = M2(this.state.data, e, this.options);
      return this.#a({
          data: s,
          type: "success",
          dataUpdatedAt: i?.updatedAt,
          manual: i?.manual
      }),
      s
  }
  setState(e, i) {
      this.#a({
          type: "setState",
          state: e,
          setStateOptions: i
      })
  }
  cancel(e) {
      const i = this.#i?.promise;
      return this.#i?.cancel(e),
      i ? i.then(un).catch(un) : Promise.resolve()
  }
  destroy() {
      super.destroy(),
      this.cancel({
          silent: !0
      })
  }
  reset() {
      this.destroy(),
      this.setState(this.#t)
  }
  isActive() {
      return this.observers.some(e => A2(e.options.enabled, this) !== !1)
  }
  isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === jd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
  }
  isStale() {
      return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
  }
  isStaleByTime(e=0) {
      return this.state.isInvalidated || this.state.data === void 0 || !C2(this.state.dataUpdatedAt, e)
  }
  onFocus() {
      this.observers.find(i => i.shouldFetchOnWindowFocus())?.refetch({
          cancelRefetch: !1
      }),
      this.#i?.continue()
  }
  onOnline() {
      this.observers.find(i => i.shouldFetchOnReconnect())?.refetch({
          cancelRefetch: !1
      }),
      this.#i?.continue()
  }
  addObserver(e) {
      this.observers.includes(e) || (this.observers.push(e),
      this.clearGcTimeout(),
      this.#n.notify({
          type: "observerAdded",
          query: this,
          observer: e
      }))
  }
  removeObserver(e) {
      this.observers.includes(e) && (this.observers = this.observers.filter(i => i !== e),
      this.observers.length || (this.#i && (this.#s ? this.#i.cancel({
          revert: !0
      }) : this.#i.cancelRetry()),
      this.scheduleGc()),
      this.#n.notify({
          type: "observerRemoved",
          query: this,
          observer: e
      }))
  }
  getObserversCount() {
      return this.observers.length
  }
  invalidate() {
      this.state.isInvalidated || this.#a({
          type: "invalidate"
      })
  }
  fetch(e, i) {
      if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && i?.cancelRefetch)
              this.cancel({
                  silent: !0
              });
          else if (this.#i)
              return this.#i.continueRetry(),
              this.#i.promise
      }
      if (e && this.setOptions(e),
      !this.options.queryFn) {
          const m = this.observers.find(p => p.options.queryFn);
          m && this.setOptions(m.options)
      }
      const s = new AbortController
        , o = m => {
          Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (this.#s = !0,
              s.signal)
          })
      }
        , l = () => {
          const m = J0(this.options, i)
            , p = {
              queryKey: this.queryKey,
              meta: this.meta
          };
          return o(p),
          this.#s = !1,
          this.options.persister ? this.options.persister(m, p, this) : m(p)
      }
        , f = {
          fetchOptions: i,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: l
      };
      o(f),
      this.options.behavior?.onFetch(f, this),
      this.#e = this.state,
      (this.state.fetchStatus === "idle" || this.state.fetchMeta !== f.fetchOptions?.meta) && this.#a({
          type: "fetch",
          meta: f.fetchOptions?.meta
      });
      const d = m => {
          bf(m) && m.silent || this.#a({
              type: "error",
              error: m
          }),
          bf(m) || (this.#n.config.onError?.(m, this),
          this.#n.config.onSettled?.(this.state.data, m, this)),
          this.scheduleGc()
      }
      ;
      return this.#i = nx({
          initialPromise: i?.initialPromise,
          fn: f.fetchFn,
          abort: s.abort.bind(s),
          onSuccess: m => {
              if (m === void 0) {
                  d(new Error(`${this.queryHash} data is undefined`));
                  return
              }
              try {
                  this.setData(m)
              } catch (p) {
                  d(p);
                  return
              }
              this.#n.config.onSuccess?.(m, this),
              this.#n.config.onSettled?.(m, this.state.error, this),
              this.scheduleGc()
          }
          ,
          onError: d,
          onFail: (m, p) => {
              this.#a({
                  type: "failed",
                  failureCount: m,
                  error: p
              })
          }
          ,
          onPause: () => {
              this.#a({
                  type: "pause"
              })
          }
          ,
          onContinue: () => {
              this.#a({
                  type: "continue"
              })
          }
          ,
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0
      }),
      this.#i.start()
  }
  #a(e) {
      const i = s => {
          switch (e.type) {
          case "failed":
              return {
                  ...s,
                  fetchFailureCount: e.failureCount,
                  fetchFailureReason: e.error
              };
          case "pause":
              return {
                  ...s,
                  fetchStatus: "paused"
              };
          case "continue":
              return {
                  ...s,
                  fetchStatus: "fetching"
              };
          case "fetch":
              return {
                  ...s,
                  ...B2(s.data, this.options),
                  fetchMeta: e.meta ?? null
              };
          case "success":
              return {
                  ...s,
                  data: e.data,
                  dataUpdateCount: s.dataUpdateCount + 1,
                  dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null
                  }
              };
          case "error":
              const o = e.error;
              return bf(o) && o.revert && this.#e ? {
                  ...this.#e,
                  fetchStatus: "idle"
              } : {
                  ...s,
                  error: o,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error"
              };
          case "invalidate":
              return {
                  ...s,
                  isInvalidated: !0
              };
          case "setState":
              return {
                  ...s,
                  ...e.state
              }
          }
      }
      ;
      this.state = i(this.state),
      pe.batch( () => {
          this.observers.forEach(s => {
              s.onQueryUpdate()
          }
          ),
          this.#n.notify({
              query: this,
              type: "updated",
              action: e
          })
      }
      )
  }
}
;
function B2(e, i) {
  return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: tx(i.networkMode) ? "fetching" : "paused",
      ...e === void 0 && {
          error: null,
          status: "pending"
      }
  }
}
function U2(e) {
  const i = typeof e.initialData == "function" ? e.initialData() : e.initialData
    , s = i !== void 0
    , o = s ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
      data: i,
      dataUpdateCount: 0,
      dataUpdatedAt: s ? o ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: s ? "success" : "pending",
      fetchStatus: "idle"
  }
}
var k2 = class extends jl {
  constructor(e={}) {
      super(),
      this.config = e,
      this.#t = new Map
  }
  #t;
  build(e, i, s) {
      const o = i.queryKey
        , l = i.queryHash ?? Md(o, i);
      let f = this.get(l);
      return f || (f = new V2({
          cache: this,
          queryKey: o,
          queryHash: l,
          options: e.defaultQueryOptions(i),
          state: s,
          defaultOptions: e.getQueryDefaults(o)
      }),
      this.add(f)),
      f
  }
  add(e) {
      this.#t.has(e.queryHash) || (this.#t.set(e.queryHash, e),
      this.notify({
          type: "added",
          query: e
      }))
  }
  remove(e) {
      const i = this.#t.get(e.queryHash);
      i && (e.destroy(),
      i === e && this.#t.delete(e.queryHash),
      this.notify({
          type: "removed",
          query: e
      }))
  }
  clear() {
      pe.batch( () => {
          this.getAll().forEach(e => {
              this.remove(e)
          }
          )
      }
      )
  }
  get(e) {
      return this.#t.get(e)
  }
  getAll() {
      return [...this.#t.values()]
  }
  find(e) {
      const i = {
          exact: !0,
          ...e
      };
      return this.getAll().find(s => Fg(i, s))
  }
  findAll(e={}) {
      const i = this.getAll();
      return Object.keys(e).length > 0 ? i.filter(s => Fg(e, s)) : i
  }
  notify(e) {
      pe.batch( () => {
          this.listeners.forEach(i => {
              i(e)
          }
          )
      }
      )
  }
  onFocus() {
      pe.batch( () => {
          this.getAll().forEach(e => {
              e.onFocus()
          }
          )
      }
      )
  }
  onOnline() {
      pe.batch( () => {
          this.getAll().forEach(e => {
              e.onOnline()
          }
          )
      }
      )
  }
}
, P2 = class extends ix {
  #t;
  #e;
  #n;
  constructor(e) {
      super(),
      this.mutationId = e.mutationId,
      this.#e = e.mutationCache,
      this.#t = [],
      this.state = e.state || H2(),
      this.setOptions(e.options),
      this.scheduleGc()
  }
  setOptions(e) {
      this.options = e,
      this.updateGcTime(this.options.gcTime)
  }
  get meta() {
      return this.options.meta
  }
  addObserver(e) {
      this.#t.includes(e) || (this.#t.push(e),
      this.clearGcTimeout(),
      this.#e.notify({
          type: "observerAdded",
          mutation: this,
          observer: e
      }))
  }
  removeObserver(e) {
      this.#t = this.#t.filter(i => i !== e),
      this.scheduleGc(),
      this.#e.notify({
          type: "observerRemoved",
          mutation: this,
          observer: e
      })
  }
  optionalRemove() {
      this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this))
  }
  continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables)
  }
  async execute(e) {
      this.#n = nx({
          fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
          onFail: (o, l) => {
              this.#i({
                  type: "failed",
                  failureCount: o,
                  error: l
              })
          }
          ,
          onPause: () => {
              this.#i({
                  type: "pause"
              })
          }
          ,
          onContinue: () => {
              this.#i({
                  type: "continue"
              })
          }
          ,
          retry: this.options.retry ?? 0,
          retryDelay: this.options.retryDelay,
          networkMode: this.options.networkMode,
          canRun: () => this.#e.canRun(this)
      });
      const i = this.state.status === "pending"
        , s = !this.#n.canStart();
      try {
          if (!i) {
              this.#i({
                  type: "pending",
                  variables: e,
                  isPaused: s
              }),
              await this.#e.config.onMutate?.(e, this);
              const l = await this.options.onMutate?.(e);
              l !== this.state.context && this.#i({
                  type: "pending",
                  context: l,
                  variables: e,
                  isPaused: s
              })
          }
          const o = await this.#n.start();
          return await this.#e.config.onSuccess?.(o, e, this.state.context, this),
          await this.options.onSuccess?.(o, e, this.state.context),
          await this.#e.config.onSettled?.(o, null, this.state.variables, this.state.context, this),
          await this.options.onSettled?.(o, null, e, this.state.context),
          this.#i({
              type: "success",
              data: o
          }),
          o
      } catch (o) {
          try {
              throw await this.#e.config.onError?.(o, e, this.state.context, this),
              await this.options.onError?.(o, e, this.state.context),
              await this.#e.config.onSettled?.(void 0, o, this.state.variables, this.state.context, this),
              await this.options.onSettled?.(void 0, o, e, this.state.context),
              o
          } finally {
              this.#i({
                  type: "error",
                  error: o
              })
          }
      } finally {
          this.#e.runNext(this)
      }
  }
  #i(e) {
      const i = s => {
          switch (e.type) {
          case "failed":
              return {
                  ...s,
                  failureCount: e.failureCount,
                  failureReason: e.error
              };
          case "pause":
              return {
                  ...s,
                  isPaused: !0
              };
          case "continue":
              return {
                  ...s,
                  isPaused: !1
              };
          case "pending":
              return {
                  ...s,
                  context: e.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: e.isPaused,
                  status: "pending",
                  variables: e.variables,
                  submittedAt: Date.now()
              };
          case "success":
              return {
                  ...s,
                  data: e.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1
              };
          case "error":
              return {
                  ...s,
                  data: void 0,
                  error: e.error,
                  failureCount: s.failureCount + 1,
                  failureReason: e.error,
                  isPaused: !1,
                  status: "error"
              }
          }
      }
      ;
      this.state = i(this.state),
      pe.batch( () => {
          this.#t.forEach(s => {
              s.onMutationUpdate(e)
          }
          ),
          this.#e.notify({
              mutation: this,
              type: "updated",
              action: e
          })
      }
      )
  }
}
;
function H2() {
  return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0
  }
}
var q2 = class extends jl {
  constructor(e={}) {
      super(),
      this.config = e,
      this.#t = new Map,
      this.#e = Date.now()
  }
  #t;
  #e;
  build(e, i, s) {
      const o = new P2({
          mutationCache: this,
          mutationId: ++this.#e,
          options: e.defaultMutationOptions(i),
          state: s
      });
      return this.add(o),
      o
  }
  add(e) {
      const i = Jo(e)
        , s = this.#t.get(i) ?? [];
      s.push(e),
      this.#t.set(i, s),
      this.notify({
          type: "added",
          mutation: e
      })
  }
  remove(e) {
      const i = Jo(e);
      if (this.#t.has(i)) {
          const s = this.#t.get(i)?.filter(o => o !== e);
          s && (s.length === 0 ? this.#t.delete(i) : this.#t.set(i, s))
      }
      this.notify({
          type: "removed",
          mutation: e
      })
  }
  canRun(e) {
      const i = this.#t.get(Jo(e))?.find(s => s.state.status === "pending");
      return !i || i === e
  }
  runNext(e) {
      return this.#t.get(Jo(e))?.find(s => s !== e && s.state.isPaused)?.continue() ?? Promise.resolve()
  }
  clear() {
      pe.batch( () => {
          this.getAll().forEach(e => {
              this.remove(e)
          }
          )
      }
      )
  }
  getAll() {
      return [...this.#t.values()].flat()
  }
  find(e) {
      const i = {
          exact: !0,
          ...e
      };
      return this.getAll().find(s => Qg(i, s))
  }
  findAll(e={}) {
      return this.getAll().filter(i => Qg(e, i))
  }
  notify(e) {
      pe.batch( () => {
          this.listeners.forEach(i => {
              i(e)
          }
          )
      }
      )
  }
  resumePausedMutations() {
      const e = this.getAll().filter(i => i.state.isPaused);
      return pe.batch( () => Promise.all(e.map(i => i.continue().catch(un))))
  }
}
;
function Jo(e) {
  return e.options.scope?.id ?? String(e.mutationId)
}
function $g(e) {
  return {
      onFetch: (i, s) => {
          const o = i.options
            , l = i.fetchOptions?.meta?.fetchMore?.direction
            , f = i.state.data?.pages || []
            , d = i.state.data?.pageParams || [];
          let m = {
              pages: [],
              pageParams: []
          }
            , p = 0;
          const h = async () => {
              let g = !1;
              const x = C => {
                  Object.defineProperty(C, "signal", {
                      enumerable: !0,
                      get: () => (i.signal.aborted ? g = !0 : i.signal.addEventListener("abort", () => {
                          g = !0
                      }
                      ),
                      i.signal)
                  })
              }
                , b = J0(i.options, i.fetchOptions)
                , T = async (C, E, N) => {
                  if (g)
                      return Promise.reject();
                  if (E == null && C.pages.length)
                      return Promise.resolve(C);
                  const O = {
                      queryKey: i.queryKey,
                      pageParam: E,
                      direction: N ? "backward" : "forward",
                      meta: i.options.meta
                  };
                  x(O);
                  const z = await b(O)
                    , {maxPages: D} = i.options
                    , q = N ? R2 : j2;
                  return {
                      pages: q(C.pages, z, D),
                      pageParams: q(C.pageParams, E, D)
                  }
              }
              ;
              if (l && f.length) {
                  const C = l === "backward"
                    , E = C ? G2 : Wg
                    , N = {
                      pages: f,
                      pageParams: d
                  }
                    , O = E(o, N);
                  m = await T(N, O, C)
              } else {
                  const C = e ?? f.length;
                  do {
                      const E = p === 0 ? d[0] ?? o.initialPageParam : Wg(o, m);
                      if (p > 0 && E == null)
                          break;
                      m = await T(m, E),
                      p++
                  } while (p < C)
              }
              return m
          }
          ;
          i.options.persister ? i.fetchFn = () => i.options.persister?.(h, {
              queryKey: i.queryKey,
              meta: i.options.meta,
              signal: i.signal
          }, s) : i.fetchFn = h
      }
  }
}
function Wg(e, {pages: i, pageParams: s}) {
  const o = i.length - 1;
  return i.length > 0 ? e.getNextPageParam(i[o], i, s[o], s) : void 0
}
function G2(e, {pages: i, pageParams: s}) {
  return i.length > 0 ? e.getPreviousPageParam?.(i[0], i, s[0], s) : void 0
}
var Y2 = class {
  #t;
  #e;
  #n;
  #i;
  #r;
  #s;
  #a;
  #o;
  constructor(e={}) {
      this.#t = e.queryCache || new k2,
      this.#e = e.mutationCache || new q2,
      this.#n = e.defaultOptions || {},
      this.#i = new Map,
      this.#r = new Map,
      this.#s = 0
  }
  mount() {
      this.#s++,
      this.#s === 1 && (this.#a = I0.subscribe(async e => {
          e && (await this.resumePausedMutations(),
          this.#t.onFocus())
      }
      ),
      this.#o = yl.subscribe(async e => {
          e && (await this.resumePausedMutations(),
          this.#t.onOnline())
      }
      ))
  }
  unmount() {
      this.#s--,
      this.#s === 0 && (this.#a?.(),
      this.#a = void 0,
      this.#o?.(),
      this.#o = void 0)
  }
  isFetching(e) {
      return this.#t.findAll({
          ...e,
          fetchStatus: "fetching"
      }).length
  }
  isMutating(e) {
      return this.#e.findAll({
          ...e,
          status: "pending"
      }).length
  }
  getQueryData(e) {
      const i = this.defaultQueryOptions({
          queryKey: e
      });
      return this.#t.get(i.queryHash)?.state.data
  }
  ensureQueryData(e) {
      const i = this.getQueryData(e.queryKey);
      if (i === void 0)
          return this.fetchQuery(e);
      {
          const s = this.defaultQueryOptions(e)
            , o = this.#t.build(this, s);
          return e.revalidateIfStale && o.isStaleByTime(Xg(s.staleTime, o)) && this.prefetchQuery(s),
          Promise.resolve(i)
      }
  }
  getQueriesData(e) {
      return this.#t.findAll(e).map( ({queryKey: i, state: s}) => {
          const o = s.data;
          return [i, o]
      }
      )
  }
  setQueryData(e, i, s) {
      const o = this.defaultQueryOptions({
          queryKey: e
      })
        , f = this.#t.get(o.queryHash)?.state.data
        , d = T2(i, f);
      if (d !== void 0)
          return this.#t.build(this, o).setData(d, {
              ...s,
              manual: !0
          })
  }
  setQueriesData(e, i, s) {
      return pe.batch( () => this.#t.findAll(e).map( ({queryKey: o}) => [o, this.setQueryData(o, i, s)]))
  }
  getQueryState(e) {
      const i = this.defaultQueryOptions({
          queryKey: e
      });
      return this.#t.get(i.queryHash)?.state
  }
  removeQueries(e) {
      const i = this.#t;
      pe.batch( () => {
          i.findAll(e).forEach(s => {
              i.remove(s)
          }
          )
      }
      )
  }
  resetQueries(e, i) {
      const s = this.#t
        , o = {
          type: "active",
          ...e
      };
      return pe.batch( () => (s.findAll(e).forEach(l => {
          l.reset()
      }
      ),
      this.refetchQueries(o, i)))
  }
  cancelQueries(e={}, i={}) {
      const s = {
          revert: !0,
          ...i
      }
        , o = pe.batch( () => this.#t.findAll(e).map(l => l.cancel(s)));
      return Promise.all(o).then(un).catch(un)
  }
  invalidateQueries(e={}, i={}) {
      return pe.batch( () => {
          if (this.#t.findAll(e).forEach(o => {
              o.invalidate()
          }
          ),
          e.refetchType === "none")
              return Promise.resolve();
          const s = {
              ...e,
              type: e.refetchType ?? e.type ?? "active"
          };
          return this.refetchQueries(s, i)
      }
      )
  }
  refetchQueries(e={}, i) {
      const s = {
          ...i,
          cancelRefetch: i?.cancelRefetch ?? !0
      }
        , o = pe.batch( () => this.#t.findAll(e).filter(l => !l.isDisabled()).map(l => {
          let f = l.fetch(void 0, s);
          return s.throwOnError || (f = f.catch(un)),
          l.state.fetchStatus === "paused" ? Promise.resolve() : f
      }
      ));
      return Promise.all(o).then(un)
  }
  fetchQuery(e) {
      const i = this.defaultQueryOptions(e);
      i.retry === void 0 && (i.retry = !1);
      const s = this.#t.build(this, i);
      return s.isStaleByTime(Xg(i.staleTime, s)) ? s.fetch(i) : Promise.resolve(s.state.data)
  }
  prefetchQuery(e) {
      return this.fetchQuery(e).then(un).catch(un)
  }
  fetchInfiniteQuery(e) {
      return e.behavior = $g(e.pages),
      this.fetchQuery(e)
  }
  prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(un).catch(un)
  }
  ensureInfiniteQueryData(e) {
      return e.behavior = $g(e.pages),
      this.ensureQueryData(e)
  }
  resumePausedMutations() {
      return yl.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
  }
  getQueryCache() {
      return this.#t
  }
  getMutationCache() {
      return this.#e
  }
  getDefaultOptions() {
      return this.#n
  }
  setDefaultOptions(e) {
      this.#n = e
  }
  setQueryDefaults(e, i) {
      this.#i.set(yr(e), {
          queryKey: e,
          defaultOptions: i
      })
  }
  getQueryDefaults(e) {
      const i = [...this.#i.values()];
      let s = {};
      return i.forEach(o => {
          gr(e, o.queryKey) && (s = {
              ...s,
              ...o.defaultOptions
          })
      }
      ),
      s
  }
  setMutationDefaults(e, i) {
      this.#r.set(yr(e), {
          mutationKey: e,
          defaultOptions: i
      })
  }
  getMutationDefaults(e) {
      const i = [...this.#r.values()];
      let s = {};
      return i.forEach(o => {
          gr(e, o.mutationKey) && (s = {
              ...s,
              ...o.defaultOptions
          })
      }
      ),
      s
  }
  defaultQueryOptions(e) {
      if (e._defaulted)
          return e;
      const i = {
          ...this.#n.queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0
      };
      return i.queryHash || (i.queryHash = Md(i.queryKey, i)),
      i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"),
      i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
      !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
      i.enabled !== !0 && i.queryFn === jd && (i.enabled = !1),
      i
  }
  defaultMutationOptions(e) {
      return e?._defaulted ? e : {
          ...this.#n.mutations,
          ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
          ...e,
          _defaulted: !0
      }
  }
  clear() {
      this.#t.clear(),
      this.#e.clear()
  }
}
, X2 = w.createContext(void 0)
, F2 = ({client: e, children: i}) => (w.useEffect( () => (e.mount(),
() => {
  e.unmount()
}
), [e]),
y.jsx(X2.Provider, {
  value: e,
  children: i
}));
async function Q2(e) {
  if (!e.ok) {
      const i = await e.text() || e.statusText;
      throw new Error(`${e.status}: ${i}`)
  }
}
const K2 = ({on401: e}) => async ({queryKey: i}) => {
  const s = await fetch(i.join("/"), {
      credentials: "include"
  });
  return await Q2(s),
  await s.json()
}
, Z2 = new Y2({
  defaultOptions: {
      queries: {
          queryFn: K2({
              on401: "throw"
          }),
          refetchInterval: !1,
          refetchOnWindowFocus: !1,
          staleTime: 1 / 0,
          retry: !1
      },
      mutations: {
          retry: !1
      }
  }
})
, $2 = 1
, W2 = 1e6;
let Sf = 0;
function J2() {
  return Sf = (Sf + 1) % Number.MAX_SAFE_INTEGER,
  Sf.toString()
}
const wf = new Map
, Jg = e => {
  if (wf.has(e))
      return;
  const i = setTimeout( () => {
      wf.delete(e),
      ur({
          type: "REMOVE_TOAST",
          toastId: e
      })
  }
  , W2);
  wf.set(e, i)
}
, I2 = (e, i) => {
  switch (i.type) {
  case "ADD_TOAST":
      return {
          ...e,
          toasts: [i.toast, ...e.toasts].slice(0, $2)
      };
  case "UPDATE_TOAST":
      return {
          ...e,
          toasts: e.toasts.map(s => s.id === i.toast.id ? {
              ...s,
              ...i.toast
          } : s)
      };
  case "DISMISS_TOAST":
      {
          const {toastId: s} = i;
          return s ? Jg(s) : e.toasts.forEach(o => {
              Jg(o.id)
          }
          ),
          {
              ...e,
              toasts: e.toasts.map(o => o.id === s || s === void 0 ? {
                  ...o,
                  open: !1
              } : o)
          }
      }
  case "REMOVE_TOAST":
      return i.toastId === void 0 ? {
          ...e,
          toasts: []
      } : {
          ...e,
          toasts: e.toasts.filter(s => s.id !== i.toastId)
      }
  }
}
, cl = [];
let ul = {
  toasts: []
};
function ur(e) {
  ul = I2(ul, e),
  cl.forEach(i => {
      i(ul)
  }
  )
}
function tE({...e}) {
  const i = J2()
    , s = l => ur({
      type: "UPDATE_TOAST",
      toast: {
          ...l,
          id: i
      }
  })
    , o = () => ur({
      type: "DISMISS_TOAST",
      toastId: i
  });
  return ur({
      type: "ADD_TOAST",
      toast: {
          ...e,
          id: i,
          open: !0,
          onOpenChange: l => {
              l || o()
          }
      }
  }),
  {
      id: i,
      dismiss: o,
      update: s
  }
}
function eE() {
  const [e,i] = w.useState(ul);
  return w.useEffect( () => (cl.push(i),
  () => {
      const s = cl.indexOf(i);
      s > -1 && cl.splice(s, 1)
  }
  ), [e]),
  {
      ...e,
      toast: tE,
      dismiss: s => ur({
          type: "DISMISS_TOAST",
          toastId: s
      })
  }
}
var Nr = P0();
const ax = k0(Nr);
function Ue(e, i, {checkForDefaultPrevented: s=!0}={}) {
  return function(l) {
      if (e?.(l),
      s === !1 || !l.defaultPrevented)
          return i?.(l)
  }
}
function Ig(e, i) {
  if (typeof e == "function")
      return e(i);
  e != null && (e.current = i)
}
function Ol(...e) {
  return i => {
      let s = !1;
      const o = e.map(l => {
          const f = Ig(l, i);
          return !s && typeof f == "function" && (s = !0),
          f
      }
      );
      if (s)
          return () => {
              for (let l = 0; l < o.length; l++) {
                  const f = o[l];
                  typeof f == "function" ? f() : Ig(e[l], null)
              }
          }
  }
}
function Ae(...e) {
  return w.useCallback(Ol(...e), e)
}
function Dl(e, i=[]) {
  let s = [];
  function o(f, d) {
      const m = w.createContext(d)
        , p = s.length;
      s = [...s, d];
      const h = x => {
          const {scope: b, children: T, ...C} = x
            , E = b?.[e]?.[p] || m
            , N = w.useMemo( () => C, Object.values(C));
          return y.jsx(E.Provider, {
              value: N,
              children: T
          })
      }
      ;
      h.displayName = f + "Provider";
      function g(x, b) {
          const T = b?.[e]?.[p] || m
            , C = w.useContext(T);
          if (C)
              return C;
          if (d !== void 0)
              return d;
          throw new Error(`\`${x}\` must be used within \`${f}\``)
      }
      return [h, g]
  }
  const l = () => {
      const f = s.map(d => w.createContext(d));
      return function(m) {
          const p = m?.[e] || f;
          return w.useMemo( () => ({
              [`__scope${e}`]: {
                  ...m,
                  [e]: p
              }
          }), [m, p])
      }
  }
  ;
  return l.scopeName = e,
  [o, nE(l, ...i)]
}
function nE(...e) {
  const i = e[0];
  if (e.length === 1)
      return i;
  const s = () => {
      const o = e.map(l => ({
          useScope: l(),
          scopeName: l.scopeName
      }));
      return function(f) {
          const d = o.reduce( (m, {useScope: p, scopeName: h}) => {
              const x = p(f)[`__scope${h}`];
              return {
                  ...m,
                  ...x
              }
          }
          , {});
          return w.useMemo( () => ({
              [`__scope${i.scopeName}`]: d
          }), [d])
      }
  }
  ;
  return s.scopeName = i.scopeName,
  s
}
function Xf(e) {
  const i = iE(e)
    , s = w.forwardRef( (o, l) => {
      const {children: f, ...d} = o
        , m = w.Children.toArray(f)
        , p = m.find(sE);
      if (p) {
          const h = p.props.children
            , g = m.map(x => x === p ? w.Children.count(h) > 1 ? w.Children.only(null) : w.isValidElement(h) ? h.props.children : null : x);
          return y.jsx(i, {
              ...d,
              ref: l,
              children: w.isValidElement(h) ? w.cloneElement(h, void 0, g) : null
          })
      }
      return y.jsx(i, {
          ...d,
          ref: l,
          children: f
      })
  }
  );
  return s.displayName = `${e}.Slot`,
  s
}
function iE(e) {
  const i = w.forwardRef( (s, o) => {
      const {children: l, ...f} = s;
      if (w.isValidElement(l)) {
          const d = oE(l)
            , m = rE(f, l.props);
          return l.type !== w.Fragment && (m.ref = o ? Ol(o, d) : d),
          w.cloneElement(l, m)
      }
      return w.Children.count(l) > 1 ? w.Children.only(null) : null
  }
  );
  return i.displayName = `${e}.SlotClone`,
  i
}
var aE = Symbol("radix.slottable");
function sE(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === aE
}
function rE(e, i) {
  const s = {
      ...i
  };
  for (const o in i) {
      const l = e[o]
        , f = i[o];
      /^on[A-Z]/.test(o) ? l && f ? s[o] = (...m) => {
          f(...m),
          l(...m)
      }
      : l && (s[o] = l) : o === "style" ? s[o] = {
          ...l,
          ...f
      } : o === "className" && (s[o] = [l, f].filter(Boolean).join(" "))
  }
  return {
      ...e,
      ...s
  }
}
function oE(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
    , s = i && "isReactWarning"in i && i.isReactWarning;
  return s ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
  s = i && "isReactWarning"in i && i.isReactWarning,
  s ? e.props.ref : e.props.ref || e.ref)
}
function lE(e) {
  const i = e + "CollectionProvider"
    , [s,o] = Dl(i)
    , [l,f] = s(i, {
      collectionRef: {
          current: null
      },
      itemMap: new Map
  })
    , d = E => {
      const {scope: N, children: O} = E
        , z = Ti.useRef(null)
        , D = Ti.useRef(new Map).current;
      return y.jsx(l, {
          scope: N,
          itemMap: D,
          collectionRef: z,
          children: O
      })
  }
  ;
  d.displayName = i;
  const m = e + "CollectionSlot"
    , p = Xf(m)
    , h = Ti.forwardRef( (E, N) => {
      const {scope: O, children: z} = E
        , D = f(m, O)
        , q = Ae(N, D.collectionRef);
      return y.jsx(p, {
          ref: q,
          children: z
      })
  }
  );
  h.displayName = m;
  const g = e + "CollectionItemSlot"
    , x = "data-radix-collection-item"
    , b = Xf(g)
    , T = Ti.forwardRef( (E, N) => {
      const {scope: O, children: z, ...D} = E
        , q = Ti.useRef(null)
        , G = Ae(N, q)
        , Z = f(g, O);
      return Ti.useEffect( () => (Z.itemMap.set(q, {
          ref: q,
          ...D
      }),
      () => void Z.itemMap.delete(q))),
      y.jsx(b, {
          [x]: "",
          ref: G,
          children: z
      })
  }
  );
  T.displayName = g;
  function C(E) {
      const N = f(e + "CollectionConsumer", E);
      return Ti.useCallback( () => {
          const z = N.collectionRef.current;
          if (!z)
              return [];
          const D = Array.from(z.querySelectorAll(`[${x}]`));
          return Array.from(N.itemMap.values()).sort( (Z, k) => D.indexOf(Z.ref.current) - D.indexOf(k.ref.current))
      }
      , [N.collectionRef, N.itemMap])
  }
  return [{
      Provider: d,
      Slot: h,
      ItemSlot: T
  }, C, o]
}
var cE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
, An = cE.reduce( (e, i) => {
  const s = Xf(`Primitive.${i}`)
    , o = w.forwardRef( (l, f) => {
      const {asChild: d, ...m} = l
        , p = d ? s : i;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
      y.jsx(p, {
          ...m,
          ref: f
      })
  }
  );
  return o.displayName = `Primitive.${i}`,
  {
      ...e,
      [i]: o
  }
}
, {});
function sx(e, i) {
  e && Nr.flushSync( () => e.dispatchEvent(i))
}
function sn(e) {
  const i = w.useRef(e);
  return w.useEffect( () => {
      i.current = e
  }
  ),
  w.useMemo( () => (...s) => i.current?.(...s), [])
}
function rx(e, i=globalThis?.document) {
  const s = sn(e);
  w.useEffect( () => {
      const o = l => {
          l.key === "Escape" && s(l)
      }
      ;
      return i.addEventListener("keydown", o, {
          capture: !0
      }),
      () => i.removeEventListener("keydown", o, {
          capture: !0
      })
  }
  , [s, i])
}
var uE = "DismissableLayer", Ff = "dismissableLayer.update", fE = "dismissableLayer.pointerDownOutside", dE = "dismissableLayer.focusOutside", tv, ox = w.createContext({
  layers: new Set,
  layersWithOutsidePointerEventsDisabled: new Set,
  branches: new Set
}), lx = w.forwardRef( (e, i) => {
  const {disableOutsidePointerEvents: s=!1, onEscapeKeyDown: o, onPointerDownOutside: l, onFocusOutside: f, onInteractOutside: d, onDismiss: m, ...p} = e
    , h = w.useContext(ox)
    , [g,x] = w.useState(null)
    , b = g?.ownerDocument ?? globalThis?.document
    , [,T] = w.useState({})
    , C = Ae(i, k => x(k))
    , E = Array.from(h.layers)
    , [N] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1)
    , O = E.indexOf(N)
    , z = g ? E.indexOf(g) : -1
    , D = h.layersWithOutsidePointerEventsDisabled.size > 0
    , q = z >= O
    , G = mE(k => {
      const H = k.target
        , I = [...h.branches].some(st => st.contains(H));
      !q || I || (l?.(k),
      d?.(k),
      k.defaultPrevented || m?.())
  }
  , b)
    , Z = pE(k => {
      const H = k.target;
      [...h.branches].some(st => st.contains(H)) || (f?.(k),
      d?.(k),
      k.defaultPrevented || m?.())
  }
  , b);
  return rx(k => {
      z === h.layers.size - 1 && (o?.(k),
      !k.defaultPrevented && m && (k.preventDefault(),
      m()))
  }
  , b),
  w.useEffect( () => {
      if (g)
          return s && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (tv = b.body.style.pointerEvents,
          b.body.style.pointerEvents = "none"),
          h.layersWithOutsidePointerEventsDisabled.add(g)),
          h.layers.add(g),
          ev(),
          () => {
              s && h.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = tv)
          }
  }
  , [g, b, s, h]),
  w.useEffect( () => () => {
      g && (h.layers.delete(g),
      h.layersWithOutsidePointerEventsDisabled.delete(g),
      ev())
  }
  , [g, h]),
  w.useEffect( () => {
      const k = () => T({});
      return document.addEventListener(Ff, k),
      () => document.removeEventListener(Ff, k)
  }
  , []),
  y.jsx(An.div, {
      ...p,
      ref: C,
      style: {
          pointerEvents: D ? q ? "auto" : "none" : void 0,
          ...e.style
      },
      onFocusCapture: Ue(e.onFocusCapture, Z.onFocusCapture),
      onBlurCapture: Ue(e.onBlurCapture, Z.onBlurCapture),
      onPointerDownCapture: Ue(e.onPointerDownCapture, G.onPointerDownCapture)
  })
}
);
lx.displayName = uE;
var hE = "DismissableLayerBranch"
, cx = w.forwardRef( (e, i) => {
  const s = w.useContext(ox)
    , o = w.useRef(null)
    , l = Ae(i, o);
  return w.useEffect( () => {
      const f = o.current;
      if (f)
          return s.branches.add(f),
          () => {
              s.branches.delete(f)
          }
  }
  , [s.branches]),
  y.jsx(An.div, {
      ...e,
      ref: l
  })
}
);
cx.displayName = hE;
function mE(e, i=globalThis?.document) {
  const s = sn(e)
    , o = w.useRef(!1)
    , l = w.useRef( () => {}
  );
  return w.useEffect( () => {
      const f = m => {
          if (m.target && !o.current) {
              let p = function() {
                  ux(fE, s, h, {
                      discrete: !0
                  })
              };
              const h = {
                  originalEvent: m
              };
              m.pointerType === "touch" ? (i.removeEventListener("click", l.current),
              l.current = p,
              i.addEventListener("click", l.current, {
                  once: !0
              })) : p()
          } else
              i.removeEventListener("click", l.current);
          o.current = !1
      }
        , d = window.setTimeout( () => {
          i.addEventListener("pointerdown", f)
      }
      , 0);
      return () => {
          window.clearTimeout(d),
          i.removeEventListener("pointerdown", f),
          i.removeEventListener("click", l.current)
      }
  }
  , [i, s]),
  {
      onPointerDownCapture: () => o.current = !0
  }
}
function pE(e, i=globalThis?.document) {
  const s = sn(e)
    , o = w.useRef(!1);
  return w.useEffect( () => {
      const l = f => {
          f.target && !o.current && ux(dE, s, {
              originalEvent: f
          }, {
              discrete: !1
          })
      }
      ;
      return i.addEventListener("focusin", l),
      () => i.removeEventListener("focusin", l)
  }
  , [i, s]),
  {
      onFocusCapture: () => o.current = !0,
      onBlurCapture: () => o.current = !1
  }
}
function ev() {
  const e = new CustomEvent(Ff);
  document.dispatchEvent(e)
}
function ux(e, i, s, {discrete: o}) {
  const l = s.originalEvent.target
    , f = new CustomEvent(e,{
      bubbles: !1,
      cancelable: !0,
      detail: s
  });
  i && l.addEventListener(e, i, {
      once: !0
  }),
  o ? sx(l, f) : l.dispatchEvent(f)
}
var yE = lx
, gE = cx
, En = globalThis?.document ? w.useLayoutEffect : () => {}
, vE = "Portal"
, fx = w.forwardRef( (e, i) => {
  const {container: s, ...o} = e
    , [l,f] = w.useState(!1);
  En( () => f(!0), []);
  const d = s || l && globalThis?.document?.body;
  return d ? ax.createPortal(y.jsx(An.div, {
      ...o,
      ref: i
  }), d) : null
}
);
fx.displayName = vE;
function xE(e, i) {
  return w.useReducer( (s, o) => i[s][o] ?? s, e)
}
var dx = e => {
  const {present: i, children: s} = e
    , o = bE(i)
    , l = typeof s == "function" ? s({
      present: o.isPresent
  }) : w.Children.only(s)
    , f = Ae(o.ref, SE(l));
  return typeof s == "function" || o.isPresent ? w.cloneElement(l, {
      ref: f
  }) : null
}
;
dx.displayName = "Presence";
function bE(e) {
  const [i,s] = w.useState()
    , o = w.useRef({})
    , l = w.useRef(e)
    , f = w.useRef("none")
    , d = e ? "mounted" : "unmounted"
    , [m,p] = xE(d, {
      mounted: {
          UNMOUNT: "unmounted",
          ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
          MOUNT: "mounted",
          ANIMATION_END: "unmounted"
      },
      unmounted: {
          MOUNT: "mounted"
      }
  });
  return w.useEffect( () => {
      const h = Io(o.current);
      f.current = m === "mounted" ? h : "none"
  }
  , [m]),
  En( () => {
      const h = o.current
        , g = l.current;
      if (g !== e) {
          const b = f.current
            , T = Io(h);
          e ? p("MOUNT") : T === "none" || h?.display === "none" ? p("UNMOUNT") : p(g && b !== T ? "ANIMATION_OUT" : "UNMOUNT"),
          l.current = e
      }
  }
  , [e, p]),
  En( () => {
      if (i) {
          let h;
          const g = i.ownerDocument.defaultView ?? window
            , x = T => {
              const E = Io(o.current).includes(T.animationName);
              if (T.target === i && E && (p("ANIMATION_END"),
              !l.current)) {
                  const N = i.style.animationFillMode;
                  i.style.animationFillMode = "forwards",
                  h = g.setTimeout( () => {
                      i.style.animationFillMode === "forwards" && (i.style.animationFillMode = N)
                  }
                  )
              }
          }
            , b = T => {
              T.target === i && (f.current = Io(o.current))
          }
          ;
          return i.addEventListener("animationstart", b),
          i.addEventListener("animationcancel", x),
          i.addEventListener("animationend", x),
          () => {
              g.clearTimeout(h),
              i.removeEventListener("animationstart", b),
              i.removeEventListener("animationcancel", x),
              i.removeEventListener("animationend", x)
          }
      } else
          p("ANIMATION_END")
  }
  , [i, p]),
  {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: w.useCallback(h => {
          h && (o.current = getComputedStyle(h)),
          s(h)
      }
      , [])
  }
}
function Io(e) {
  return e?.animationName || "none"
}
function SE(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
    , s = i && "isReactWarning"in i && i.isReactWarning;
  return s ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
  s = i && "isReactWarning"in i && i.isReactWarning,
  s ? e.props.ref : e.props.ref || e.ref)
}
function wE({prop: e, defaultProp: i, onChange: s= () => {}
}) {
  const [o,l] = TE({
      defaultProp: i,
      onChange: s
  })
    , f = e !== void 0
    , d = f ? e : o
    , m = sn(s)
    , p = w.useCallback(h => {
      if (f) {
          const x = typeof h == "function" ? h(e) : h;
          x !== e && m(x)
      } else
          l(h)
  }
  , [f, e, l, m]);
  return [d, p]
}
function TE({defaultProp: e, onChange: i}) {
  const s = w.useState(e)
    , [o] = s
    , l = w.useRef(o)
    , f = sn(i);
  return w.useEffect( () => {
      l.current !== o && (f(o),
      l.current = o)
  }
  , [o, l, f]),
  s
}
var EE = "VisuallyHidden"
, Rd = w.forwardRef( (e, i) => y.jsx(An.span, {
  ...e,
  ref: i,
  style: {
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...e.style
  }
}));
Rd.displayName = EE;
var Od = "ToastProvider"
, [Dd,CE,AE] = lE("Toast")
, [hx] = Dl("Toast", [AE])
, [NE,_l] = hx(Od)
, mx = e => {
  const {__scopeToast: i, label: s="Notification", duration: o=5e3, swipeDirection: l="right", swipeThreshold: f=50, children: d} = e
    , [m,p] = w.useState(null)
    , [h,g] = w.useState(0)
    , x = w.useRef(!1)
    , b = w.useRef(!1);
  return s.trim() || console.error(`Invalid prop \`label\` supplied to \`${Od}\`. Expected non-empty \`string\`.`),
  y.jsx(Dd.Provider, {
      scope: i,
      children: y.jsx(NE, {
          scope: i,
          label: s,
          duration: o,
          swipeDirection: l,
          swipeThreshold: f,
          toastCount: h,
          viewport: m,
          onViewportChange: p,
          onToastAdd: w.useCallback( () => g(T => T + 1), []),
          onToastRemove: w.useCallback( () => g(T => T - 1), []),
          isFocusedToastEscapeKeyDownRef: x,
          isClosePausedRef: b,
          children: d
      })
  })
}
;
mx.displayName = Od;
var px = "ToastViewport"
, ME = ["F8"]
, Qf = "toast.viewportPause"
, Kf = "toast.viewportResume"
, yx = w.forwardRef( (e, i) => {
  const {__scopeToast: s, hotkey: o=ME, label: l="Notifications ({hotkey})", ...f} = e
    , d = _l(px, s)
    , m = CE(s)
    , p = w.useRef(null)
    , h = w.useRef(null)
    , g = w.useRef(null)
    , x = w.useRef(null)
    , b = Ae(i, x, d.onViewportChange)
    , T = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
    , C = d.toastCount > 0;
  w.useEffect( () => {
      const N = O => {
          o.length !== 0 && o.every(D => O[D] || O.code === D) && x.current?.focus()
      }
      ;
      return document.addEventListener("keydown", N),
      () => document.removeEventListener("keydown", N)
  }
  , [o]),
  w.useEffect( () => {
      const N = p.current
        , O = x.current;
      if (C && N && O) {
          const z = () => {
              if (!d.isClosePausedRef.current) {
                  const Z = new CustomEvent(Qf);
                  O.dispatchEvent(Z),
                  d.isClosePausedRef.current = !0
              }
          }
            , D = () => {
              if (d.isClosePausedRef.current) {
                  const Z = new CustomEvent(Kf);
                  O.dispatchEvent(Z),
                  d.isClosePausedRef.current = !1
              }
          }
            , q = Z => {
              !N.contains(Z.relatedTarget) && D()
          }
            , G = () => {
              N.contains(document.activeElement) || D()
          }
          ;
          return N.addEventListener("focusin", z),
          N.addEventListener("focusout", q),
          N.addEventListener("pointermove", z),
          N.addEventListener("pointerleave", G),
          window.addEventListener("blur", z),
          window.addEventListener("focus", D),
          () => {
              N.removeEventListener("focusin", z),
              N.removeEventListener("focusout", q),
              N.removeEventListener("pointermove", z),
              N.removeEventListener("pointerleave", G),
              window.removeEventListener("blur", z),
              window.removeEventListener("focus", D)
          }
      }
  }
  , [C, d.isClosePausedRef]);
  const E = w.useCallback( ({tabbingDirection: N}) => {
      const z = m().map(D => {
          const q = D.ref.current
            , G = [q, ...HE(q)];
          return N === "forwards" ? G : G.reverse()
      }
      );
      return (N === "forwards" ? z.reverse() : z).flat()
  }
  , [m]);
  return w.useEffect( () => {
      const N = x.current;
      if (N) {
          const O = z => {
              const D = z.altKey || z.ctrlKey || z.metaKey;
              if (z.key === "Tab" && !D) {
                  const G = document.activeElement
                    , Z = z.shiftKey;
                  if (z.target === N && Z) {
                      h.current?.focus();
                      return
                  }
                  const I = E({
                      tabbingDirection: Z ? "backwards" : "forwards"
                  })
                    , st = I.findIndex(dt => dt === G);
                  Tf(I.slice(st + 1)) ? z.preventDefault() : Z ? h.current?.focus() : g.current?.focus()
              }
          }
          ;
          return N.addEventListener("keydown", O),
          () => N.removeEventListener("keydown", O)
      }
  }
  , [m, E]),
  y.jsxs(gE, {
      ref: p,
      role: "region",
      "aria-label": l.replace("{hotkey}", T),
      tabIndex: -1,
      style: {
          pointerEvents: C ? void 0 : "none"
      },
      children: [C && y.jsx(Zf, {
          ref: h,
          onFocusFromOutsideViewport: () => {
              const N = E({
                  tabbingDirection: "forwards"
              });
              Tf(N)
          }
      }), y.jsx(Dd.Slot, {
          scope: s,
          children: y.jsx(An.ol, {
              tabIndex: -1,
              ...f,
              ref: b
          })
      }), C && y.jsx(Zf, {
          ref: g,
          onFocusFromOutsideViewport: () => {
              const N = E({
                  tabbingDirection: "backwards"
              });
              Tf(N)
          }
      })]
  })
}
);
yx.displayName = px;
var gx = "ToastFocusProxy"
, Zf = w.forwardRef( (e, i) => {
  const {__scopeToast: s, onFocusFromOutsideViewport: o, ...l} = e
    , f = _l(gx, s);
  return y.jsx(Rd, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...l,
      ref: i,
      style: {
          position: "fixed"
      },
      onFocus: d => {
          const m = d.relatedTarget;
          !f.viewport?.contains(m) && o()
      }
  })
}
);
Zf.displayName = gx;
var zl = "Toast"
, jE = "toast.swipeStart"
, RE = "toast.swipeMove"
, OE = "toast.swipeCancel"
, DE = "toast.swipeEnd"
, vx = w.forwardRef( (e, i) => {
  const {forceMount: s, open: o, defaultOpen: l, onOpenChange: f, ...d} = e
    , [m=!0,p] = wE({
      prop: o,
      defaultProp: l,
      onChange: f
  });
  return y.jsx(dx, {
      present: s || m,
      children: y.jsx(LE, {
          open: m,
          ...d,
          ref: i,
          onClose: () => p(!1),
          onPause: sn(e.onPause),
          onResume: sn(e.onResume),
          onSwipeStart: Ue(e.onSwipeStart, h => {
              h.currentTarget.setAttribute("data-swipe", "start")
          }
          ),
          onSwipeMove: Ue(e.onSwipeMove, h => {
              const {x: g, y: x} = h.detail.delta;
              h.currentTarget.setAttribute("data-swipe", "move"),
              h.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${g}px`),
              h.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${x}px`)
          }
          ),
          onSwipeCancel: Ue(e.onSwipeCancel, h => {
              h.currentTarget.setAttribute("data-swipe", "cancel"),
              h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
              h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
              h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
          }
          ),
          onSwipeEnd: Ue(e.onSwipeEnd, h => {
              const {x: g, y: x} = h.detail.delta;
              h.currentTarget.setAttribute("data-swipe", "end"),
              h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
              h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
              h.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${g}px`),
              h.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${x}px`),
              p(!1)
          }
          )
      })
  })
}
);
vx.displayName = zl;
var [_E,zE] = hx(zl, {
  onClose() {}
})
, LE = w.forwardRef( (e, i) => {
  const {__scopeToast: s, type: o="foreground", duration: l, open: f, onClose: d, onEscapeKeyDown: m, onPause: p, onResume: h, onSwipeStart: g, onSwipeMove: x, onSwipeCancel: b, onSwipeEnd: T, ...C} = e
    , E = _l(zl, s)
    , [N,O] = w.useState(null)
    , z = Ae(i, J => O(J))
    , D = w.useRef(null)
    , q = w.useRef(null)
    , G = l || E.duration
    , Z = w.useRef(0)
    , k = w.useRef(G)
    , H = w.useRef(0)
    , {onToastAdd: I, onToastRemove: st} = E
    , dt = sn( () => {
      N?.contains(document.activeElement) && E.viewport?.focus(),
      d()
  }
  )
    , pt = w.useCallback(J => {
      !J || J === 1 / 0 || (window.clearTimeout(H.current),
      Z.current = new Date().getTime(),
      H.current = window.setTimeout(dt, J))
  }
  , [dt]);
  w.useEffect( () => {
      const J = E.viewport;
      if (J) {
          const ht = () => {
              pt(k.current),
              h?.()
          }
            , _ = () => {
              const Y = new Date().getTime() - Z.current;
              k.current = k.current - Y,
              window.clearTimeout(H.current),
              p?.()
          }
          ;
          return J.addEventListener(Qf, _),
          J.addEventListener(Kf, ht),
          () => {
              J.removeEventListener(Qf, _),
              J.removeEventListener(Kf, ht)
          }
      }
  }
  , [E.viewport, G, p, h, pt]),
  w.useEffect( () => {
      f && !E.isClosePausedRef.current && pt(G)
  }
  , [f, G, E.isClosePausedRef, pt]),
  w.useEffect( () => (I(),
  () => st()), [I, st]);
  const Et = w.useMemo( () => N ? Cx(N) : null, [N]);
  return E.viewport ? y.jsxs(y.Fragment, {
      children: [Et && y.jsx(VE, {
          __scopeToast: s,
          role: "status",
          "aria-live": o === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: Et
      }), y.jsx(_E, {
          scope: s,
          onClose: dt,
          children: Nr.createPortal(y.jsx(Dd.ItemSlot, {
              scope: s,
              children: y.jsx(yE, {
                  asChild: !0,
                  onEscapeKeyDown: Ue(m, () => {
                      E.isFocusedToastEscapeKeyDownRef.current || dt(),
                      E.isFocusedToastEscapeKeyDownRef.current = !1
                  }
                  ),
                  children: y.jsx(An.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": f ? "open" : "closed",
                      "data-swipe-direction": E.swipeDirection,
                      ...C,
                      ref: z,
                      style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...e.style
                      },
                      onKeyDown: Ue(e.onKeyDown, J => {
                          J.key === "Escape" && (m?.(J.nativeEvent),
                          J.nativeEvent.defaultPrevented || (E.isFocusedToastEscapeKeyDownRef.current = !0,
                          dt()))
                      }
                      ),
                      onPointerDown: Ue(e.onPointerDown, J => {
                          J.button === 0 && (D.current = {
                              x: J.clientX,
                              y: J.clientY
                          })
                      }
                      ),
                      onPointerMove: Ue(e.onPointerMove, J => {
                          if (!D.current)
                              return;
                          const ht = J.clientX - D.current.x
                            , _ = J.clientY - D.current.y
                            , Y = !!q.current
                            , U = ["left", "right"].includes(E.swipeDirection)
                            , it = ["left", "up"].includes(E.swipeDirection) ? Math.min : Math.max
                            , ct = U ? it(0, ht) : 0
                            , M = U ? 0 : it(0, _)
                            , F = J.pointerType === "touch" ? 10 : 2
                            , $ = {
                              x: ct,
                              y: M
                          }
                            , W = {
                              originalEvent: J,
                              delta: $
                          };
                          Y ? (q.current = $,
                          tl(RE, x, W, {
                              discrete: !1
                          })) : nv($, E.swipeDirection, F) ? (q.current = $,
                          tl(jE, g, W, {
                              discrete: !1
                          }),
                          J.target.setPointerCapture(J.pointerId)) : (Math.abs(ht) > F || Math.abs(_) > F) && (D.current = null)
                      }
                      ),
                      onPointerUp: Ue(e.onPointerUp, J => {
                          const ht = q.current
                            , _ = J.target;
                          if (_.hasPointerCapture(J.pointerId) && _.releasePointerCapture(J.pointerId),
                          q.current = null,
                          D.current = null,
                          ht) {
                              const Y = J.currentTarget
                                , U = {
                                  originalEvent: J,
                                  delta: ht
                              };
                              nv(ht, E.swipeDirection, E.swipeThreshold) ? tl(DE, T, U, {
                                  discrete: !0
                              }) : tl(OE, b, U, {
                                  discrete: !0
                              }),
                              Y.addEventListener("click", it => it.preventDefault(), {
                                  once: !0
                              })
                          }
                      }
                      )
                  })
              })
          }), E.viewport)
      })]
  }) : null
}
)
, VE = e => {
  const {__scopeToast: i, children: s, ...o} = e
    , l = _l(zl, i)
    , [f,d] = w.useState(!1)
    , [m,p] = w.useState(!1);
  return kE( () => d(!0)),
  w.useEffect( () => {
      const h = window.setTimeout( () => p(!0), 1e3);
      return () => window.clearTimeout(h)
  }
  , []),
  m ? null : y.jsx(fx, {
      asChild: !0,
      children: y.jsx(Rd, {
          ...o,
          children: f && y.jsxs(y.Fragment, {
              children: [l.label, " ", s]
          })
      })
  })
}
, BE = "ToastTitle"
, xx = w.forwardRef( (e, i) => {
  const {__scopeToast: s, ...o} = e;
  return y.jsx(An.div, {
      ...o,
      ref: i
  })
}
);
xx.displayName = BE;
var UE = "ToastDescription"
, bx = w.forwardRef( (e, i) => {
  const {__scopeToast: s, ...o} = e;
  return y.jsx(An.div, {
      ...o,
      ref: i
  })
}
);
bx.displayName = UE;
var Sx = "ToastAction"
, wx = w.forwardRef( (e, i) => {
  const {altText: s, ...o} = e;
  return s.trim() ? y.jsx(Ex, {
      altText: s,
      asChild: !0,
      children: y.jsx(_d, {
          ...o,
          ref: i
      })
  }) : (console.error(`Invalid prop \`altText\` supplied to \`${Sx}\`. Expected non-empty \`string\`.`),
  null)
}
);
wx.displayName = Sx;
var Tx = "ToastClose"
, _d = w.forwardRef( (e, i) => {
  const {__scopeToast: s, ...o} = e
    , l = zE(Tx, s);
  return y.jsx(Ex, {
      asChild: !0,
      children: y.jsx(An.button, {
          type: "button",
          ...o,
          ref: i,
          onClick: Ue(e.onClick, l.onClose)
      })
  })
}
);
_d.displayName = Tx;
var Ex = w.forwardRef( (e, i) => {
  const {__scopeToast: s, altText: o, ...l} = e;
  return y.jsx(An.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": o || void 0,
      ...l,
      ref: i
  })
}
);
function Cx(e) {
  const i = [];
  return Array.from(e.childNodes).forEach(o => {
      if (o.nodeType === o.TEXT_NODE && o.textContent && i.push(o.textContent),
      PE(o)) {
          const l = o.ariaHidden || o.hidden || o.style.display === "none"
            , f = o.dataset.radixToastAnnounceExclude === "";
          if (!l)
              if (f) {
                  const d = o.dataset.radixToastAnnounceAlt;
                  d && i.push(d)
              } else
                  i.push(...Cx(o))
      }
  }
  ),
  i
}
function tl(e, i, s, {discrete: o}) {
  const l = s.originalEvent.currentTarget
    , f = new CustomEvent(e,{
      bubbles: !0,
      cancelable: !0,
      detail: s
  });
  i && l.addEventListener(e, i, {
      once: !0
  }),
  o ? sx(l, f) : l.dispatchEvent(f)
}
var nv = (e, i, s=0) => {
  const o = Math.abs(e.x)
    , l = Math.abs(e.y)
    , f = o > l;
  return i === "left" || i === "right" ? f && o > s : !f && l > s
}
;
function kE(e= () => {}
) {
  const i = sn(e);
  En( () => {
      let s = 0
        , o = 0;
      return s = window.requestAnimationFrame( () => o = window.requestAnimationFrame(i)),
      () => {
          window.cancelAnimationFrame(s),
          window.cancelAnimationFrame(o)
      }
  }
  , [i])
}
function PE(e) {
  return e.nodeType === e.ELEMENT_NODE
}
function HE(e) {
  const i = []
    , s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: o => {
          const l = o.tagName === "INPUT" && o.type === "hidden";
          return o.disabled || o.hidden || l ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
  });
  for (; s.nextNode(); )
      i.push(s.currentNode);
  return i
}
function Tf(e) {
  const i = document.activeElement;
  return e.some(s => s === i ? !0 : (s.focus(),
  document.activeElement !== i))
}
var qE = mx
, Ax = yx
, Nx = vx
, Mx = xx
, jx = bx
, Rx = wx
, Ox = _d;
function Dx(e) {
  var i, s, o = "";
  if (typeof e == "string" || typeof e == "number")
      o += e;
  else if (typeof e == "object")
      if (Array.isArray(e)) {
          var l = e.length;
          for (i = 0; i < l; i++)
              e[i] && (s = Dx(e[i])) && (o && (o += " "),
              o += s)
      } else
          for (s in e)
              e[s] && (o && (o += " "),
              o += s);
  return o
}
function _x() {
  for (var e, i, s = 0, o = "", l = arguments.length; s < l; s++)
      (e = arguments[s]) && (i = Dx(e)) && (o && (o += " "),
      o += i);
  return o
}
const iv = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
, av = _x
, Ll = (e, i) => s => {
  var o;
  if (i?.variants == null)
      return av(e, s?.class, s?.className);
  const {variants: l, defaultVariants: f} = i
    , d = Object.keys(l).map(h => {
      const g = s?.[h]
        , x = f?.[h];
      if (g === null)
          return null;
      const b = iv(g) || iv(x);
      return l[h][b]
  }
  )
    , m = s && Object.entries(s).reduce( (h, g) => {
      let[x,b] = g;
      return b === void 0 || (h[x] = b),
      h
  }
  , {})
    , p = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce( (h, g) => {
      let {class: x, className: b, ...T} = g;
      return Object.entries(T).every(C => {
          let[E,N] = C;
          return Array.isArray(N) ? N.includes({
              ...f,
              ...m
          }[E]) : {
              ...f,
              ...m
          }[E] === N
      }
      ) ? [...h, x, b] : h
  }
  , []);
  return av(e, d, p, s?.class, s?.className)
}
;
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const GE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
, YE = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, o) => o ? o.toUpperCase() : s.toLowerCase())
, sv = e => {
  const i = YE(e);
  return i.charAt(0).toUpperCase() + i.slice(1)
}
, zx = (...e) => e.filter( (i, s, o) => !!i && i.trim() !== "" && o.indexOf(i) === s).join(" ").trim()
, XE = e => {
  for (const i in e)
      if (i.startsWith("aria-") || i === "role" || i === "title")
          return !0
}
;
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const QE = w.forwardRef( ({color: e="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: l="", children: f, iconNode: d, ...m}, p) => w.createElement("svg", {
  ref: p,
  ...FE,
  width: i,
  height: i,
  stroke: e,
  strokeWidth: o ? Number(s) * 24 / Number(i) : s,
  className: zx("lucide", l),
  ...!f && !XE(m) && {
      "aria-hidden": "true"
  },
  ...m
}, [...d.map( ([h,g]) => w.createElement(h, g)), ...Array.isArray(f) ? f : [f]]));
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jt = (e, i) => {
  const s = w.forwardRef( ({className: o, ...l}, f) => w.createElement(QE, {
      ref: f,
      iconNode: i,
      className: zx(`lucide-${GE(sv(e))}`, `lucide-${e}`, o),
      ...l
  }));
  return s.displayName = sv(e),
  s
}
;
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const KE = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "m12 5 7 7-7 7",
  key: "xquz4c"
}]]
, ZE = jt("arrow-right", KE);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $E = [["path", {
  d: "M12 7v14",
  key: "1akyts"
}], ["path", {
  d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
  key: "ruj8y"
}]]
, WE = jt("book-open", $E);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const JE = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}]]
, IE = jt("calendar", JE);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tC = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M18 17V9",
  key: "2bz60n"
}], ["path", {
  d: "M13 17V5",
  key: "1frdt8"
}], ["path", {
  d: "M8 17v-3",
  key: "17ska0"
}]]
, rv = jt("chart-column", tC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const eC = [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]]
, Lx = jt("check", eC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nC = [["path", {
  d: "m9 18 6-6-6-6",
  key: "mthhwq"
}]]
, iC = jt("chevron-right", nC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const aC = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12",
  key: "1pkeuh"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16",
  key: "4dfq90"
}]]
, sC = jt("circle-alert", aC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rC = [["path", {
  d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
  key: "kmsa83"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]]
, oC = jt("circle-play", rC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lC = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
  key: "1u773s"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]]
, cC = jt("circle-question-mark", lC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uC = [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "M16 14v6",
  key: "1j4efv"
}], ["path", {
  d: "M8 14v6",
  key: "17c4r9"
}], ["path", {
  d: "M12 16v6",
  key: "c8a4gj"
}]]
, fC = jt("cloud-rain", uC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dC = [["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "5",
  rx: "2",
  key: "ynyp8z"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "10",
  y2: "10",
  key: "1b3vmo"
}]]
, hC = jt("credit-card", dC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mC = [["path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  key: "1jg4f8"
}]]
, pC = jt("facebook", mC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yC = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10 9H8",
  key: "b1mrlr"
}], ["path", {
  d: "M16 13H8",
  key: "t4e002"
}], ["path", {
  d: "M16 17H8",
  key: "z1uh3a"
}]]
, gC = jt("file-text", yC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vC = [["path", {
  d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
  key: "1p9q5i"
}], ["path", {
  d: "M14 6a6 6 0 0 1 6 6v3",
  key: "1hnv84"
}], ["path", {
  d: "M4 15v-3a6 6 0 0 1 6-6",
  key: "9ciidu"
}], ["rect", {
  x: "2",
  y: "15",
  width: "20",
  height: "4",
  rx: "1",
  key: "g3x8cw"
}]]
, xC = jt("hard-hat", vC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bC = [["rect", {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "5",
  ry: "5",
  key: "2e1cvw"
}], ["path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
  key: "9exkf1"
}], ["line", {
  x1: "17.5",
  x2: "17.51",
  y1: "6.5",
  y2: "6.5",
  key: "r4j83e"
}]]
, SC = jt("instagram", bC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wC = [["path", {
  d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
  key: "nnexq3"
}], ["path", {
  d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  key: "mt58a7"
}]]
, TC = jt("leaf", wC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const EC = [["path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
  key: "c2jq9f"
}], ["rect", {
  width: "4",
  height: "12",
  x: "2",
  y: "9",
  key: "mk3on5"
}], ["circle", {
  cx: "4",
  cy: "4",
  r: "2",
  key: "bt5ra8"
}]]
, CC = jt("linkedin", EC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const AC = [["rect", {
  width: "18",
  height: "11",
  x: "3",
  y: "11",
  rx: "2",
  ry: "2",
  key: "1w4ew1"
}], ["path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4",
  key: "fwvmzm"
}]]
, NC = jt("lock", AC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const MC = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}]]
, jC = jt("map-pin", MC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const RC = [["path", {
  d: "M4 5h16",
  key: "1tepv9"
}], ["path", {
  d: "M4 12h16",
  key: "1lakjw"
}], ["path", {
  d: "M4 19h16",
  key: "1djgab"
}]]
, OC = jt("menu", RC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const DC = [["path", {
  d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
  key: "e79jfc"
}], ["circle", {
  cx: "13.5",
  cy: "6.5",
  r: ".5",
  fill: "currentColor",
  key: "1okk4w"
}], ["circle", {
  cx: "17.5",
  cy: "10.5",
  r: ".5",
  fill: "currentColor",
  key: "f64h9f"
}], ["circle", {
  cx: "6.5",
  cy: "12.5",
  r: ".5",
  fill: "currentColor",
  key: "qy21gx"
}], ["circle", {
  cx: "8.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "fotxhn"
}]]
, vr = jt("palette", DC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _C = [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "1357e3"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}]]
, zC = jt("rotate-ccw", _C);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const LC = [["path", {
  d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
  key: "1c8476"
}], ["path", {
  d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
  key: "1ydtos"
}], ["path", {
  d: "M7 3v4a1 1 0 0 0 1 1h7",
  key: "t51u73"
}]]
, VC = jt("save", LC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const BC = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["path", {
  d: "M7 12h10",
  key: "b7w52i"
}]]
, UC = jt("scan-line", BC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kC = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}]]
, PC = jt("shield", kC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const HC = [["path", {
  d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
  key: "1s2grr"
}], ["path", {
  d: "M20 2v4",
  key: "1rf3ol"
}], ["path", {
  d: "M22 4h-4",
  key: "gwowj6"
}], ["circle", {
  cx: "4",
  cy: "20",
  r: "2",
  key: "6kqj1y"
}]]
, qC = jt("sparkles", HC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const GC = [["path", {
  d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
  key: "r04s7s"
}]]
, YC = jt("star", GC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const XC = [["path", {
  d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
  key: "pff0z6"
}]]
, FC = jt("twitter", XC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const QC = [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["path", {
  d: "M16 3.128a4 4 0 0 1 0 7.744",
  key: "16gr8j"
}], ["path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87",
  key: "kshegd"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}]]
, zd = jt("users", QC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const KC = [["path", {
  d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
  key: "ftymec"
}], ["rect", {
  x: "2",
  y: "6",
  width: "14",
  height: "12",
  rx: "2",
  key: "158x01"
}]]
, ZC = jt("video", KC);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $C = [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]]
, Ld = jt("x", $C);
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const WC = [["path", {
  d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  key: "1xq2db"
}]]
, Vx = jt("zap", WC)
, Vd = "-"
, JC = e => {
  const i = tA(e)
    , {conflictingClassGroups: s, conflictingClassGroupModifiers: o} = e;
  return {
      getClassGroupId: d => {
          const m = d.split(Vd);
          return m[0] === "" && m.length !== 1 && m.shift(),
          Bx(m, i) || IC(d)
      }
      ,
      getConflictingClassGroupIds: (d, m) => {
          const p = s[d] || [];
          return m && o[d] ? [...p, ...o[d]] : p
      }
  }
}
, Bx = (e, i) => {
  if (e.length === 0)
      return i.classGroupId;
  const s = e[0]
    , o = i.nextPart.get(s)
    , l = o ? Bx(e.slice(1), o) : void 0;
  if (l)
      return l;
  if (i.validators.length === 0)
      return;
  const f = e.join(Vd);
  return i.validators.find( ({validator: d}) => d(f))?.classGroupId
}
, ov = /^\[(.+)\]$/
, IC = e => {
  if (ov.test(e)) {
      const i = ov.exec(e)[1]
        , s = i?.substring(0, i.indexOf(":"));
      if (s)
          return "arbitrary.." + s
  }
}
, tA = e => {
  const {theme: i, classGroups: s} = e
    , o = {
      nextPart: new Map,
      validators: []
  };
  for (const l in s)
      $f(s[l], o, l, i);
  return o
}
, $f = (e, i, s, o) => {
  e.forEach(l => {
      if (typeof l == "string") {
          const f = l === "" ? i : lv(i, l);
          f.classGroupId = s;
          return
      }
      if (typeof l == "function") {
          if (eA(l)) {
              $f(l(o), i, s, o);
              return
          }
          i.validators.push({
              validator: l,
              classGroupId: s
          });
          return
      }
      Object.entries(l).forEach( ([f,d]) => {
          $f(d, lv(i, f), s, o)
      }
      )
  }
  )
}
, lv = (e, i) => {
  let s = e;
  return i.split(Vd).forEach(o => {
      s.nextPart.has(o) || s.nextPart.set(o, {
          nextPart: new Map,
          validators: []
      }),
      s = s.nextPart.get(o)
  }
  ),
  s
}
, eA = e => e.isThemeGetter
, nA = e => {
  if (e < 1)
      return {
          get: () => {}
          ,
          set: () => {}
      };
  let i = 0
    , s = new Map
    , o = new Map;
  const l = (f, d) => {
      s.set(f, d),
      i++,
      i > e && (i = 0,
      o = s,
      s = new Map)
  }
  ;
  return {
      get(f) {
          let d = s.get(f);
          if (d !== void 0)
              return d;
          if ((d = o.get(f)) !== void 0)
              return l(f, d),
              d
      },
      set(f, d) {
          s.has(f) ? s.set(f, d) : l(f, d)
      }
  }
}
, Wf = "!"
, Jf = ":"
, iA = Jf.length
, aA = e => {
  const {prefix: i, experimentalParseClassName: s} = e;
  let o = l => {
      const f = [];
      let d = 0, m = 0, p = 0, h;
      for (let C = 0; C < l.length; C++) {
          let E = l[C];
          if (d === 0 && m === 0) {
              if (E === Jf) {
                  f.push(l.slice(p, C)),
                  p = C + iA;
                  continue
              }
              if (E === "/") {
                  h = C;
                  continue
              }
          }
          E === "[" ? d++ : E === "]" ? d-- : E === "(" ? m++ : E === ")" && m--
      }
      const g = f.length === 0 ? l : l.substring(p)
        , x = sA(g)
        , b = x !== g
        , T = h && h > p ? h - p : void 0;
      return {
          modifiers: f,
          hasImportantModifier: b,
          baseClassName: x,
          maybePostfixModifierPosition: T
      }
  }
  ;
  if (i) {
      const l = i + Jf
        , f = o;
      o = d => d.startsWith(l) ? f(d.substring(l.length)) : {
          isExternal: !0,
          modifiers: [],
          hasImportantModifier: !1,
          baseClassName: d,
          maybePostfixModifierPosition: void 0
      }
  }
  if (s) {
      const l = o;
      o = f => s({
          className: f,
          parseClassName: l
      })
  }
  return o
}
, sA = e => e.endsWith(Wf) ? e.substring(0, e.length - 1) : e.startsWith(Wf) ? e.substring(1) : e
, rA = e => {
  const i = Object.fromEntries(e.orderSensitiveModifiers.map(o => [o, !0]));
  return o => {
      if (o.length <= 1)
          return o;
      const l = [];
      let f = [];
      return o.forEach(d => {
          d[0] === "[" || i[d] ? (l.push(...f.sort(), d),
          f = []) : f.push(d)
      }
      ),
      l.push(...f.sort()),
      l
  }
}
, oA = e => ({
  cache: nA(e.cacheSize),
  parseClassName: aA(e),
  sortModifiers: rA(e),
  ...JC(e)
})
, lA = /\s+/
, cA = (e, i) => {
  const {parseClassName: s, getClassGroupId: o, getConflictingClassGroupIds: l, sortModifiers: f} = i
    , d = []
    , m = e.trim().split(lA);
  let p = "";
  for (let h = m.length - 1; h >= 0; h -= 1) {
      const g = m[h]
        , {isExternal: x, modifiers: b, hasImportantModifier: T, baseClassName: C, maybePostfixModifierPosition: E} = s(g);
      if (x) {
          p = g + (p.length > 0 ? " " + p : p);
          continue
      }
      let N = !!E
        , O = o(N ? C.substring(0, E) : C);
      if (!O) {
          if (!N) {
              p = g + (p.length > 0 ? " " + p : p);
              continue
          }
          if (O = o(C),
          !O) {
              p = g + (p.length > 0 ? " " + p : p);
              continue
          }
          N = !1
      }
      const z = f(b).join(":")
        , D = T ? z + Wf : z
        , q = D + O;
      if (d.includes(q))
          continue;
      d.push(q);
      const G = l(O, N);
      for (let Z = 0; Z < G.length; ++Z) {
          const k = G[Z];
          d.push(D + k)
      }
      p = g + (p.length > 0 ? " " + p : p)
  }
  return p
}
;
function uA() {
  let e = 0, i, s, o = "";
  for (; e < arguments.length; )
      (i = arguments[e++]) && (s = Ux(i)) && (o && (o += " "),
      o += s);
  return o
}
const Ux = e => {
  if (typeof e == "string")
      return e;
  let i, s = "";
  for (let o = 0; o < e.length; o++)
      e[o] && (i = Ux(e[o])) && (s && (s += " "),
      s += i);
  return s
}
;
function fA(e, ...i) {
  let s, o, l, f = d;
  function d(p) {
      const h = i.reduce( (g, x) => x(g), e());
      return s = oA(h),
      o = s.cache.get,
      l = s.cache.set,
      f = m,
      m(p)
  }
  function m(p) {
      const h = o(p);
      if (h)
          return h;
      const g = cA(p, s);
      return l(p, g),
      g
  }
  return function() {
      return f(uA.apply(null, arguments))
  }
}
const ie = e => {
  const i = s => s[e] || [];
  return i.isThemeGetter = !0,
  i
}
, kx = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
, Px = /^\((?:(\w[\w-]*):)?(.+)\)$/i
, dA = /^\d+\/\d+$/
, hA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
, mA = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
, pA = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
, yA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
, gA = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
, Qa = e => dA.test(e)
, xt = e => !!e && !Number.isNaN(Number(e))
, wi = e => !!e && Number.isInteger(Number(e))
, Ef = e => e.endsWith("%") && xt(e.slice(0, -1))
, Fn = e => hA.test(e)
, vA = () => !0
, xA = e => mA.test(e) && !pA.test(e)
, Hx = () => !1
, bA = e => yA.test(e)
, SA = e => gA.test(e)
, wA = e => !et(e) && !nt(e)
, TA = e => rs(e, Yx, Hx)
, et = e => kx.test(e)
, Ji = e => rs(e, Xx, xA)
, Cf = e => rs(e, MA, xt)
, cv = e => rs(e, qx, Hx)
, EA = e => rs(e, Gx, SA)
, el = e => rs(e, Fx, bA)
, nt = e => Px.test(e)
, or = e => os(e, Xx)
, CA = e => os(e, jA)
, uv = e => os(e, qx)
, AA = e => os(e, Yx)
, NA = e => os(e, Gx)
, nl = e => os(e, Fx, !0)
, rs = (e, i, s) => {
  const o = kx.exec(e);
  return o ? o[1] ? i(o[1]) : s(o[2]) : !1
}
, os = (e, i, s=!1) => {
  const o = Px.exec(e);
  return o ? o[1] ? i(o[1]) : s : !1
}
, qx = e => e === "position" || e === "percentage"
, Gx = e => e === "image" || e === "url"
, Yx = e => e === "length" || e === "size" || e === "bg-size"
, Xx = e => e === "length"
, MA = e => e === "number"
, jA = e => e === "family-name"
, Fx = e => e === "shadow"
, RA = () => {
  const e = ie("color")
    , i = ie("font")
    , s = ie("text")
    , o = ie("font-weight")
    , l = ie("tracking")
    , f = ie("leading")
    , d = ie("breakpoint")
    , m = ie("container")
    , p = ie("spacing")
    , h = ie("radius")
    , g = ie("shadow")
    , x = ie("inset-shadow")
    , b = ie("text-shadow")
    , T = ie("drop-shadow")
    , C = ie("blur")
    , E = ie("perspective")
    , N = ie("aspect")
    , O = ie("ease")
    , z = ie("animate")
    , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
    , q = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
    , G = () => [...q(), nt, et]
    , Z = () => ["auto", "hidden", "clip", "visible", "scroll"]
    , k = () => ["auto", "contain", "none"]
    , H = () => [nt, et, p]
    , I = () => [Qa, "full", "auto", ...H()]
    , st = () => [wi, "none", "subgrid", nt, et]
    , dt = () => ["auto", {
      span: ["full", wi, nt, et]
  }, wi, nt, et]
    , pt = () => [wi, "auto", nt, et]
    , Et = () => ["auto", "min", "max", "fr", nt, et]
    , J = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
    , ht = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
    , _ = () => ["auto", ...H()]
    , Y = () => [Qa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()]
    , U = () => [e, nt, et]
    , it = () => [...q(), uv, cv, {
      position: [nt, et]
  }]
    , ct = () => ["no-repeat", {
      repeat: ["", "x", "y", "space", "round"]
  }]
    , M = () => ["auto", "cover", "contain", AA, TA, {
      size: [nt, et]
  }]
    , F = () => [Ef, or, Ji]
    , $ = () => ["", "none", "full", h, nt, et]
    , W = () => ["", xt, or, Ji]
    , ut = () => ["solid", "dashed", "dotted", "double"]
    , yt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
    , rt = () => [xt, Ef, uv, cv]
    , Ft = () => ["", "none", C, nt, et]
    , _t = () => ["none", xt, nt, et]
    , qe = () => ["none", xt, nt, et]
    , mn = () => [xt, nt, et]
    , pn = () => [Qa, "full", ...H()];
  return {
      cacheSize: 500,
      theme: {
          animate: ["spin", "ping", "pulse", "bounce"],
          aspect: ["video"],
          blur: [Fn],
          breakpoint: [Fn],
          color: [vA],
          container: [Fn],
          "drop-shadow": [Fn],
          ease: ["in", "out", "in-out"],
          font: [wA],
          "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
          "inset-shadow": [Fn],
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
          perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
          radius: [Fn],
          shadow: [Fn],
          spacing: ["px", xt],
          text: [Fn],
          "text-shadow": [Fn],
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
          aspect: [{
              aspect: ["auto", "square", Qa, et, nt, N]
          }],
          container: ["container"],
          columns: [{
              columns: [xt, et, nt, m]
          }],
          "break-after": [{
              "break-after": D()
          }],
          "break-before": [{
              "break-before": D()
          }],
          "break-inside": [{
              "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          "box-decoration": [{
              "box-decoration": ["slice", "clone"]
          }],
          box: [{
              box: ["border", "content"]
          }],
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          sr: ["sr-only", "not-sr-only"],
          float: [{
              float: ["right", "left", "none", "start", "end"]
          }],
          clear: [{
              clear: ["left", "right", "both", "none", "start", "end"]
          }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [{
              object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          "object-position": [{
              object: G()
          }],
          overflow: [{
              overflow: Z()
          }],
          "overflow-x": [{
              "overflow-x": Z()
          }],
          "overflow-y": [{
              "overflow-y": Z()
          }],
          overscroll: [{
              overscroll: k()
          }],
          "overscroll-x": [{
              "overscroll-x": k()
          }],
          "overscroll-y": [{
              "overscroll-y": k()
          }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{
              inset: I()
          }],
          "inset-x": [{
              "inset-x": I()
          }],
          "inset-y": [{
              "inset-y": I()
          }],
          start: [{
              start: I()
          }],
          end: [{
              end: I()
          }],
          top: [{
              top: I()
          }],
          right: [{
              right: I()
          }],
          bottom: [{
              bottom: I()
          }],
          left: [{
              left: I()
          }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{
              z: [wi, "auto", nt, et]
          }],
          basis: [{
              basis: [Qa, "full", "auto", m, ...H()]
          }],
          "flex-direction": [{
              flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          "flex-wrap": [{
              flex: ["nowrap", "wrap", "wrap-reverse"]
          }],
          flex: [{
              flex: [xt, Qa, "auto", "initial", "none", et]
          }],
          grow: [{
              grow: ["", xt, nt, et]
          }],
          shrink: [{
              shrink: ["", xt, nt, et]
          }],
          order: [{
              order: [wi, "first", "last", "none", nt, et]
          }],
          "grid-cols": [{
              "grid-cols": st()
          }],
          "col-start-end": [{
              col: dt()
          }],
          "col-start": [{
              "col-start": pt()
          }],
          "col-end": [{
              "col-end": pt()
          }],
          "grid-rows": [{
              "grid-rows": st()
          }],
          "row-start-end": [{
              row: dt()
          }],
          "row-start": [{
              "row-start": pt()
          }],
          "row-end": [{
              "row-end": pt()
          }],
          "grid-flow": [{
              "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          "auto-cols": [{
              "auto-cols": Et()
          }],
          "auto-rows": [{
              "auto-rows": Et()
          }],
          gap: [{
              gap: H()
          }],
          "gap-x": [{
              "gap-x": H()
          }],
          "gap-y": [{
              "gap-y": H()
          }],
          "justify-content": [{
              justify: [...J(), "normal"]
          }],
          "justify-items": [{
              "justify-items": [...ht(), "normal"]
          }],
          "justify-self": [{
              "justify-self": ["auto", ...ht()]
          }],
          "align-content": [{
              content: ["normal", ...J()]
          }],
          "align-items": [{
              items: [...ht(), {
                  baseline: ["", "last"]
              }]
          }],
          "align-self": [{
              self: ["auto", ...ht(), {
                  baseline: ["", "last"]
              }]
          }],
          "place-content": [{
              "place-content": J()
          }],
          "place-items": [{
              "place-items": [...ht(), "baseline"]
          }],
          "place-self": [{
              "place-self": ["auto", ...ht()]
          }],
          p: [{
              p: H()
          }],
          px: [{
              px: H()
          }],
          py: [{
              py: H()
          }],
          ps: [{
              ps: H()
          }],
          pe: [{
              pe: H()
          }],
          pt: [{
              pt: H()
          }],
          pr: [{
              pr: H()
          }],
          pb: [{
              pb: H()
          }],
          pl: [{
              pl: H()
          }],
          m: [{
              m: _()
          }],
          mx: [{
              mx: _()
          }],
          my: [{
              my: _()
          }],
          ms: [{
              ms: _()
          }],
          me: [{
              me: _()
          }],
          mt: [{
              mt: _()
          }],
          mr: [{
              mr: _()
          }],
          mb: [{
              mb: _()
          }],
          ml: [{
              ml: _()
          }],
          "space-x": [{
              "space-x": H()
          }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{
              "space-y": H()
          }],
          "space-y-reverse": ["space-y-reverse"],
          size: [{
              size: Y()
          }],
          w: [{
              w: [m, "screen", ...Y()]
          }],
          "min-w": [{
              "min-w": [m, "screen", "none", ...Y()]
          }],
          "max-w": [{
              "max-w": [m, "screen", "none", "prose", {
                  screen: [d]
              }, ...Y()]
          }],
          h: [{
              h: ["screen", "lh", ...Y()]
          }],
          "min-h": [{
              "min-h": ["screen", "lh", "none", ...Y()]
          }],
          "max-h": [{
              "max-h": ["screen", "lh", ...Y()]
          }],
          "font-size": [{
              text: ["base", s, or, Ji]
          }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [{
              font: [o, nt, Cf]
          }],
          "font-stretch": [{
              "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ef, et]
          }],
          "font-family": [{
              font: [CA, et, i]
          }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          tracking: [{
              tracking: [l, nt, et]
          }],
          "line-clamp": [{
              "line-clamp": [xt, "none", nt, Cf]
          }],
          leading: [{
              leading: [f, ...H()]
          }],
          "list-image": [{
              "list-image": ["none", nt, et]
          }],
          "list-style-position": [{
              list: ["inside", "outside"]
          }],
          "list-style-type": [{
              list: ["disc", "decimal", "none", nt, et]
          }],
          "text-alignment": [{
              text: ["left", "center", "right", "justify", "start", "end"]
          }],
          "placeholder-color": [{
              placeholder: U()
          }],
          "text-color": [{
              text: U()
          }],
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          "text-decoration-style": [{
              decoration: [...ut(), "wavy"]
          }],
          "text-decoration-thickness": [{
              decoration: [xt, "from-font", "auto", nt, Ji]
          }],
          "text-decoration-color": [{
              decoration: U()
          }],
          "underline-offset": [{
              "underline-offset": [xt, "auto", nt, et]
          }],
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{
              text: ["wrap", "nowrap", "balance", "pretty"]
          }],
          indent: [{
              indent: H()
          }],
          "vertical-align": [{
              align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", nt, et]
          }],
          whitespace: [{
              whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          break: [{
              break: ["normal", "words", "all", "keep"]
          }],
          wrap: [{
              wrap: ["break-word", "anywhere", "normal"]
          }],
          hyphens: [{
              hyphens: ["none", "manual", "auto"]
          }],
          content: [{
              content: ["none", nt, et]
          }],
          "bg-attachment": [{
              bg: ["fixed", "local", "scroll"]
          }],
          "bg-clip": [{
              "bg-clip": ["border", "padding", "content", "text"]
          }],
          "bg-origin": [{
              "bg-origin": ["border", "padding", "content"]
          }],
          "bg-position": [{
              bg: it()
          }],
          "bg-repeat": [{
              bg: ct()
          }],
          "bg-size": [{
              bg: M()
          }],
          "bg-image": [{
              bg: ["none", {
                  linear: [{
                      to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                  }, wi, nt, et],
                  radial: ["", nt, et],
                  conic: [wi, nt, et]
              }, NA, EA]
          }],
          "bg-color": [{
              bg: U()
          }],
          "gradient-from-pos": [{
              from: F()
          }],
          "gradient-via-pos": [{
              via: F()
          }],
          "gradient-to-pos": [{
              to: F()
          }],
          "gradient-from": [{
              from: U()
          }],
          "gradient-via": [{
              via: U()
          }],
          "gradient-to": [{
              to: U()
          }],
          rounded: [{
              rounded: $()
          }],
          "rounded-s": [{
              "rounded-s": $()
          }],
          "rounded-e": [{
              "rounded-e": $()
          }],
          "rounded-t": [{
              "rounded-t": $()
          }],
          "rounded-r": [{
              "rounded-r": $()
          }],
          "rounded-b": [{
              "rounded-b": $()
          }],
          "rounded-l": [{
              "rounded-l": $()
          }],
          "rounded-ss": [{
              "rounded-ss": $()
          }],
          "rounded-se": [{
              "rounded-se": $()
          }],
          "rounded-ee": [{
              "rounded-ee": $()
          }],
          "rounded-es": [{
              "rounded-es": $()
          }],
          "rounded-tl": [{
              "rounded-tl": $()
          }],
          "rounded-tr": [{
              "rounded-tr": $()
          }],
          "rounded-br": [{
              "rounded-br": $()
          }],
          "rounded-bl": [{
              "rounded-bl": $()
          }],
          "border-w": [{
              border: W()
          }],
          "border-w-x": [{
              "border-x": W()
          }],
          "border-w-y": [{
              "border-y": W()
          }],
          "border-w-s": [{
              "border-s": W()
          }],
          "border-w-e": [{
              "border-e": W()
          }],
          "border-w-t": [{
              "border-t": W()
          }],
          "border-w-r": [{
              "border-r": W()
          }],
          "border-w-b": [{
              "border-b": W()
          }],
          "border-w-l": [{
              "border-l": W()
          }],
          "divide-x": [{
              "divide-x": W()
          }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{
              "divide-y": W()
          }],
          "divide-y-reverse": ["divide-y-reverse"],
          "border-style": [{
              border: [...ut(), "hidden", "none"]
          }],
          "divide-style": [{
              divide: [...ut(), "hidden", "none"]
          }],
          "border-color": [{
              border: U()
          }],
          "border-color-x": [{
              "border-x": U()
          }],
          "border-color-y": [{
              "border-y": U()
          }],
          "border-color-s": [{
              "border-s": U()
          }],
          "border-color-e": [{
              "border-e": U()
          }],
          "border-color-t": [{
              "border-t": U()
          }],
          "border-color-r": [{
              "border-r": U()
          }],
          "border-color-b": [{
              "border-b": U()
          }],
          "border-color-l": [{
              "border-l": U()
          }],
          "divide-color": [{
              divide: U()
          }],
          "outline-style": [{
              outline: [...ut(), "none", "hidden"]
          }],
          "outline-offset": [{
              "outline-offset": [xt, nt, et]
          }],
          "outline-w": [{
              outline: ["", xt, or, Ji]
          }],
          "outline-color": [{
              outline: U()
          }],
          shadow: [{
              shadow: ["", "none", g, nl, el]
          }],
          "shadow-color": [{
              shadow: U()
          }],
          "inset-shadow": [{
              "inset-shadow": ["none", x, nl, el]
          }],
          "inset-shadow-color": [{
              "inset-shadow": U()
          }],
          "ring-w": [{
              ring: W()
          }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{
              ring: U()
          }],
          "ring-offset-w": [{
              "ring-offset": [xt, Ji]
          }],
          "ring-offset-color": [{
              "ring-offset": U()
          }],
          "inset-ring-w": [{
              "inset-ring": W()
          }],
          "inset-ring-color": [{
              "inset-ring": U()
          }],
          "text-shadow": [{
              "text-shadow": ["none", b, nl, el]
          }],
          "text-shadow-color": [{
              "text-shadow": U()
          }],
          opacity: [{
              opacity: [xt, nt, et]
          }],
          "mix-blend": [{
              "mix-blend": [...yt(), "plus-darker", "plus-lighter"]
          }],
          "bg-blend": [{
              "bg-blend": yt()
          }],
          "mask-clip": [{
              "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
          }, "mask-no-clip"],
          "mask-composite": [{
              mask: ["add", "subtract", "intersect", "exclude"]
          }],
          "mask-image-linear-pos": [{
              "mask-linear": [xt]
          }],
          "mask-image-linear-from-pos": [{
              "mask-linear-from": rt()
          }],
          "mask-image-linear-to-pos": [{
              "mask-linear-to": rt()
          }],
          "mask-image-linear-from-color": [{
              "mask-linear-from": U()
          }],
          "mask-image-linear-to-color": [{
              "mask-linear-to": U()
          }],
          "mask-image-t-from-pos": [{
              "mask-t-from": rt()
          }],
          "mask-image-t-to-pos": [{
              "mask-t-to": rt()
          }],
          "mask-image-t-from-color": [{
              "mask-t-from": U()
          }],
          "mask-image-t-to-color": [{
              "mask-t-to": U()
          }],
          "mask-image-r-from-pos": [{
              "mask-r-from": rt()
          }],
          "mask-image-r-to-pos": [{
              "mask-r-to": rt()
          }],
          "mask-image-r-from-color": [{
              "mask-r-from": U()
          }],
          "mask-image-r-to-color": [{
              "mask-r-to": U()
          }],
          "mask-image-b-from-pos": [{
              "mask-b-from": rt()
          }],
          "mask-image-b-to-pos": [{
              "mask-b-to": rt()
          }],
          "mask-image-b-from-color": [{
              "mask-b-from": U()
          }],
          "mask-image-b-to-color": [{
              "mask-b-to": U()
          }],
          "mask-image-l-from-pos": [{
              "mask-l-from": rt()
          }],
          "mask-image-l-to-pos": [{
              "mask-l-to": rt()
          }],
          "mask-image-l-from-color": [{
              "mask-l-from": U()
          }],
          "mask-image-l-to-color": [{
              "mask-l-to": U()
          }],
          "mask-image-x-from-pos": [{
              "mask-x-from": rt()
          }],
          "mask-image-x-to-pos": [{
              "mask-x-to": rt()
          }],
          "mask-image-x-from-color": [{
              "mask-x-from": U()
          }],
          "mask-image-x-to-color": [{
              "mask-x-to": U()
          }],
          "mask-image-y-from-pos": [{
              "mask-y-from": rt()
          }],
          "mask-image-y-to-pos": [{
              "mask-y-to": rt()
          }],
          "mask-image-y-from-color": [{
              "mask-y-from": U()
          }],
          "mask-image-y-to-color": [{
              "mask-y-to": U()
          }],
          "mask-image-radial": [{
              "mask-radial": [nt, et]
          }],
          "mask-image-radial-from-pos": [{
              "mask-radial-from": rt()
          }],
          "mask-image-radial-to-pos": [{
              "mask-radial-to": rt()
          }],
          "mask-image-radial-from-color": [{
              "mask-radial-from": U()
          }],
          "mask-image-radial-to-color": [{
              "mask-radial-to": U()
          }],
          "mask-image-radial-shape": [{
              "mask-radial": ["circle", "ellipse"]
          }],
          "mask-image-radial-size": [{
              "mask-radial": [{
                  closest: ["side", "corner"],
                  farthest: ["side", "corner"]
              }]
          }],
          "mask-image-radial-pos": [{
              "mask-radial-at": q()
          }],
          "mask-image-conic-pos": [{
              "mask-conic": [xt]
          }],
          "mask-image-conic-from-pos": [{
              "mask-conic-from": rt()
          }],
          "mask-image-conic-to-pos": [{
              "mask-conic-to": rt()
          }],
          "mask-image-conic-from-color": [{
              "mask-conic-from": U()
          }],
          "mask-image-conic-to-color": [{
              "mask-conic-to": U()
          }],
          "mask-mode": [{
              mask: ["alpha", "luminance", "match"]
          }],
          "mask-origin": [{
              "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
          }],
          "mask-position": [{
              mask: it()
          }],
          "mask-repeat": [{
              mask: ct()
          }],
          "mask-size": [{
              mask: M()
          }],
          "mask-type": [{
              "mask-type": ["alpha", "luminance"]
          }],
          "mask-image": [{
              mask: ["none", nt, et]
          }],
          filter: [{
              filter: ["", "none", nt, et]
          }],
          blur: [{
              blur: Ft()
          }],
          brightness: [{
              brightness: [xt, nt, et]
          }],
          contrast: [{
              contrast: [xt, nt, et]
          }],
          "drop-shadow": [{
              "drop-shadow": ["", "none", T, nl, el]
          }],
          "drop-shadow-color": [{
              "drop-shadow": U()
          }],
          grayscale: [{
              grayscale: ["", xt, nt, et]
          }],
          "hue-rotate": [{
              "hue-rotate": [xt, nt, et]
          }],
          invert: [{
              invert: ["", xt, nt, et]
          }],
          saturate: [{
              saturate: [xt, nt, et]
          }],
          sepia: [{
              sepia: ["", xt, nt, et]
          }],
          "backdrop-filter": [{
              "backdrop-filter": ["", "none", nt, et]
          }],
          "backdrop-blur": [{
              "backdrop-blur": Ft()
          }],
          "backdrop-brightness": [{
              "backdrop-brightness": [xt, nt, et]
          }],
          "backdrop-contrast": [{
              "backdrop-contrast": [xt, nt, et]
          }],
          "backdrop-grayscale": [{
              "backdrop-grayscale": ["", xt, nt, et]
          }],
          "backdrop-hue-rotate": [{
              "backdrop-hue-rotate": [xt, nt, et]
          }],
          "backdrop-invert": [{
              "backdrop-invert": ["", xt, nt, et]
          }],
          "backdrop-opacity": [{
              "backdrop-opacity": [xt, nt, et]
          }],
          "backdrop-saturate": [{
              "backdrop-saturate": [xt, nt, et]
          }],
          "backdrop-sepia": [{
              "backdrop-sepia": ["", xt, nt, et]
          }],
          "border-collapse": [{
              border: ["collapse", "separate"]
          }],
          "border-spacing": [{
              "border-spacing": H()
          }],
          "border-spacing-x": [{
              "border-spacing-x": H()
          }],
          "border-spacing-y": [{
              "border-spacing-y": H()
          }],
          "table-layout": [{
              table: ["auto", "fixed"]
          }],
          caption: [{
              caption: ["top", "bottom"]
          }],
          transition: [{
              transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", nt, et]
          }],
          "transition-behavior": [{
              transition: ["normal", "discrete"]
          }],
          duration: [{
              duration: [xt, "initial", nt, et]
          }],
          ease: [{
              ease: ["linear", "initial", O, nt, et]
          }],
          delay: [{
              delay: [xt, nt, et]
          }],
          animate: [{
              animate: ["none", z, nt, et]
          }],
          backface: [{
              backface: ["hidden", "visible"]
          }],
          perspective: [{
              perspective: [E, nt, et]
          }],
          "perspective-origin": [{
              "perspective-origin": G()
          }],
          rotate: [{
              rotate: _t()
          }],
          "rotate-x": [{
              "rotate-x": _t()
          }],
          "rotate-y": [{
              "rotate-y": _t()
          }],
          "rotate-z": [{
              "rotate-z": _t()
          }],
          scale: [{
              scale: qe()
          }],
          "scale-x": [{
              "scale-x": qe()
          }],
          "scale-y": [{
              "scale-y": qe()
          }],
          "scale-z": [{
              "scale-z": qe()
          }],
          "scale-3d": ["scale-3d"],
          skew: [{
              skew: mn()
          }],
          "skew-x": [{
              "skew-x": mn()
          }],
          "skew-y": [{
              "skew-y": mn()
          }],
          transform: [{
              transform: [nt, et, "", "none", "gpu", "cpu"]
          }],
          "transform-origin": [{
              origin: G()
          }],
          "transform-style": [{
              transform: ["3d", "flat"]
          }],
          translate: [{
              translate: pn()
          }],
          "translate-x": [{
              "translate-x": pn()
          }],
          "translate-y": [{
              "translate-y": pn()
          }],
          "translate-z": [{
              "translate-z": pn()
          }],
          "translate-none": ["translate-none"],
          accent: [{
              accent: U()
          }],
          appearance: [{
              appearance: ["none", "auto"]
          }],
          "caret-color": [{
              caret: U()
          }],
          "color-scheme": [{
              scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
          }],
          cursor: [{
              cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", nt, et]
          }],
          "field-sizing": [{
              "field-sizing": ["fixed", "content"]
          }],
          "pointer-events": [{
              "pointer-events": ["auto", "none"]
          }],
          resize: [{
              resize: ["none", "", "y", "x"]
          }],
          "scroll-behavior": [{
              scroll: ["auto", "smooth"]
          }],
          "scroll-m": [{
              "scroll-m": H()
          }],
          "scroll-mx": [{
              "scroll-mx": H()
          }],
          "scroll-my": [{
              "scroll-my": H()
          }],
          "scroll-ms": [{
              "scroll-ms": H()
          }],
          "scroll-me": [{
              "scroll-me": H()
          }],
          "scroll-mt": [{
              "scroll-mt": H()
          }],
          "scroll-mr": [{
              "scroll-mr": H()
          }],
          "scroll-mb": [{
              "scroll-mb": H()
          }],
          "scroll-ml": [{
              "scroll-ml": H()
          }],
          "scroll-p": [{
              "scroll-p": H()
          }],
          "scroll-px": [{
              "scroll-px": H()
          }],
          "scroll-py": [{
              "scroll-py": H()
          }],
          "scroll-ps": [{
              "scroll-ps": H()
          }],
          "scroll-pe": [{
              "scroll-pe": H()
          }],
          "scroll-pt": [{
              "scroll-pt": H()
          }],
          "scroll-pr": [{
              "scroll-pr": H()
          }],
          "scroll-pb": [{
              "scroll-pb": H()
          }],
          "scroll-pl": [{
              "scroll-pl": H()
          }],
          "snap-align": [{
              snap: ["start", "end", "center", "align-none"]
          }],
          "snap-stop": [{
              snap: ["normal", "always"]
          }],
          "snap-type": [{
              snap: ["none", "x", "y", "both"]
          }],
          "snap-strictness": [{
              snap: ["mandatory", "proximity"]
          }],
          touch: [{
              touch: ["auto", "none", "manipulation"]
          }],
          "touch-x": [{
              "touch-pan": ["x", "left", "right"]
          }],
          "touch-y": [{
              "touch-pan": ["y", "up", "down"]
          }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{
              select: ["none", "text", "all", "auto"]
          }],
          "will-change": [{
              "will-change": ["auto", "scroll", "contents", "transform", nt, et]
          }],
          fill: [{
              fill: ["none", ...U()]
          }],
          "stroke-w": [{
              stroke: [xt, or, Ji, Cf]
          }],
          stroke: [{
              stroke: ["none", ...U()]
          }],
          "forced-color-adjust": [{
              "forced-color-adjust": ["auto", "none"]
          }]
      },
      conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          translate: ["translate-x", "translate-y", "translate-none"],
          "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
          "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  }
}
, OA = fA(RA);
function ee(...e) {
  return OA(_x(e))
}
const DA = qE
, Qx = w.forwardRef( ({className: e, ...i}, s) => y.jsx(Ax, {
  ref: s,
  className: ee("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
  ...i
}));
Qx.displayName = Ax.displayName;
const _A = Ll("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
  variants: {
      variant: {
          default: "border bg-background text-foreground",
          destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
  },
  defaultVariants: {
      variant: "default"
  }
})
, Kx = w.forwardRef( ({className: e, variant: i, ...s}, o) => y.jsx(Nx, {
  ref: o,
  className: ee(_A({
      variant: i
  }), e),
  ...s
}));
Kx.displayName = Nx.displayName;
const zA = w.forwardRef( ({className: e, ...i}, s) => y.jsx(Rx, {
  ref: s,
  className: ee("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
  ...i
}));
zA.displayName = Rx.displayName;
const Zx = w.forwardRef( ({className: e, ...i}, s) => y.jsx(Ox, {
  ref: s,
  className: ee("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
  "toast-close": "",
  ...i,
  children: y.jsx(Ld, {
      className: "h-4 w-4"
  })
}));
Zx.displayName = Ox.displayName;
const $x = w.forwardRef( ({className: e, ...i}, s) => y.jsx(Mx, {
  ref: s,
  className: ee("text-sm font-semibold", e),
  ...i
}));
$x.displayName = Mx.displayName;
const Wx = w.forwardRef( ({className: e, ...i}, s) => y.jsx(jx, {
  ref: s,
  className: ee("text-sm opacity-90", e),
  ...i
}));
Wx.displayName = jx.displayName;
function LA() {
  const {toasts: e} = eE();
  return y.jsxs(DA, {
      children: [e.map(function({id: i, title: s, description: o, action: l, ...f}) {
          return y.jsxs(Kx, {
              ...f,
              children: [y.jsxs("div", {
                  className: "grid gap-1",
                  children: [s && y.jsx($x, {
                      children: s
                  }), o && y.jsx(Wx, {
                      children: o
                  })]
              }), l, y.jsx(Zx, {})]
          }, i)
      }), y.jsx(Qx, {})]
  })
}
function Ka(e, i, {checkForDefaultPrevented: s=!0}={}) {
  return function(l) {
      if (e?.(l),
      s === !1 || !l.defaultPrevented)
          return i?.(l)
  }
}
function Af(e, i, {checkForDefaultPrevented: s=!0}={}) {
  return function(l) {
      if (e?.(l),
      s === !1 || !l.defaultPrevented)
          return i?.(l)
  }
}
function VA(e) {
  const i = BA(e)
    , s = w.forwardRef( (o, l) => {
      const {children: f, ...d} = o
        , m = w.Children.toArray(f)
        , p = m.find(kA);
      if (p) {
          const h = p.props.children
            , g = m.map(x => x === p ? w.Children.count(h) > 1 ? w.Children.only(null) : w.isValidElement(h) ? h.props.children : null : x);
          return y.jsx(i, {
              ...d,
              ref: l,
              children: w.isValidElement(h) ? w.cloneElement(h, void 0, g) : null
          })
      }
      return y.jsx(i, {
          ...d,
          ref: l,
          children: f
      })
  }
  );
  return s.displayName = `${e}.Slot`,
  s
}
function BA(e) {
  const i = w.forwardRef( (s, o) => {
      const {children: l, ...f} = s;
      if (w.isValidElement(l)) {
          const d = HA(l)
            , m = PA(f, l.props);
          return l.type !== w.Fragment && (m.ref = o ? Ol(o, d) : d),
          w.cloneElement(l, m)
      }
      return w.Children.count(l) > 1 ? w.Children.only(null) : null
  }
  );
  return i.displayName = `${e}.SlotClone`,
  i
}
var UA = Symbol("radix.slottable");
function kA(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === UA
}
function PA(e, i) {
  const s = {
      ...i
  };
  for (const o in i) {
      const l = e[o]
        , f = i[o];
      /^on[A-Z]/.test(o) ? l && f ? s[o] = (...m) => {
          const p = f(...m);
          return l(...m),
          p
      }
      : l && (s[o] = l) : o === "style" ? s[o] = {
          ...l,
          ...f
      } : o === "className" && (s[o] = [l, f].filter(Boolean).join(" "))
  }
  return {
      ...e,
      ...s
  }
}
function HA(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
    , s = i && "isReactWarning"in i && i.isReactWarning;
  return s ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
  s = i && "isReactWarning"in i && i.isReactWarning,
  s ? e.props.ref : e.props.ref || e.ref)
}
var qA = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
, Ri = qA.reduce( (e, i) => {
  const s = VA(`Primitive.${i}`)
    , o = w.forwardRef( (l, f) => {
      const {asChild: d, ...m} = l
        , p = d ? s : i;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
      y.jsx(p, {
          ...m,
          ref: f
      })
  }
  );
  return o.displayName = `Primitive.${i}`,
  {
      ...e,
      [i]: o
  }
}
, {});
function GA(e, i) {
  e && Nr.flushSync( () => e.dispatchEvent(i))
}
var YA = "DismissableLayer", If = "dismissableLayer.update", XA = "dismissableLayer.pointerDownOutside", FA = "dismissableLayer.focusOutside", fv, Jx = w.createContext({
  layers: new Set,
  layersWithOutsidePointerEventsDisabled: new Set,
  branches: new Set
}), Ix = w.forwardRef( (e, i) => {
  const {disableOutsidePointerEvents: s=!1, onEscapeKeyDown: o, onPointerDownOutside: l, onFocusOutside: f, onInteractOutside: d, onDismiss: m, ...p} = e
    , h = w.useContext(Jx)
    , [g,x] = w.useState(null)
    , b = g?.ownerDocument ?? globalThis?.document
    , [,T] = w.useState({})
    , C = Ae(i, k => x(k))
    , E = Array.from(h.layers)
    , [N] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1)
    , O = E.indexOf(N)
    , z = g ? E.indexOf(g) : -1
    , D = h.layersWithOutsidePointerEventsDisabled.size > 0
    , q = z >= O
    , G = ZA(k => {
      const H = k.target
        , I = [...h.branches].some(st => st.contains(H));
      !q || I || (l?.(k),
      d?.(k),
      k.defaultPrevented || m?.())
  }
  , b)
    , Z = $A(k => {
      const H = k.target;
      [...h.branches].some(st => st.contains(H)) || (f?.(k),
      d?.(k),
      k.defaultPrevented || m?.())
  }
  , b);
  return rx(k => {
      z === h.layers.size - 1 && (o?.(k),
      !k.defaultPrevented && m && (k.preventDefault(),
      m()))
  }
  , b),
  w.useEffect( () => {
      if (g)
          return s && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (fv = b.body.style.pointerEvents,
          b.body.style.pointerEvents = "none"),
          h.layersWithOutsidePointerEventsDisabled.add(g)),
          h.layers.add(g),
          dv(),
          () => {
              s && h.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = fv)
          }
  }
  , [g, b, s, h]),
  w.useEffect( () => () => {
      g && (h.layers.delete(g),
      h.layersWithOutsidePointerEventsDisabled.delete(g),
      dv())
  }
  , [g, h]),
  w.useEffect( () => {
      const k = () => T({});
      return document.addEventListener(If, k),
      () => document.removeEventListener(If, k)
  }
  , []),
  y.jsx(Ri.div, {
      ...p,
      ref: C,
      style: {
          pointerEvents: D ? q ? "auto" : "none" : void 0,
          ...e.style
      },
      onFocusCapture: Af(e.onFocusCapture, Z.onFocusCapture),
      onBlurCapture: Af(e.onBlurCapture, Z.onBlurCapture),
      onPointerDownCapture: Af(e.onPointerDownCapture, G.onPointerDownCapture)
  })
}
);
Ix.displayName = YA;
var QA = "DismissableLayerBranch"
, KA = w.forwardRef( (e, i) => {
  const s = w.useContext(Jx)
    , o = w.useRef(null)
    , l = Ae(i, o);
  return w.useEffect( () => {
      const f = o.current;
      if (f)
          return s.branches.add(f),
          () => {
              s.branches.delete(f)
          }
  }
  , [s.branches]),
  y.jsx(Ri.div, {
      ...e,
      ref: l
  })
}
);
KA.displayName = QA;
function ZA(e, i=globalThis?.document) {
  const s = sn(e)
    , o = w.useRef(!1)
    , l = w.useRef( () => {}
  );
  return w.useEffect( () => {
      const f = m => {
          if (m.target && !o.current) {
              let p = function() {
                  tb(XA, s, h, {
                      discrete: !0
                  })
              };
              const h = {
                  originalEvent: m
              };
              m.pointerType === "touch" ? (i.removeEventListener("click", l.current),
              l.current = p,
              i.addEventListener("click", l.current, {
                  once: !0
              })) : p()
          } else
              i.removeEventListener("click", l.current);
          o.current = !1
      }
        , d = window.setTimeout( () => {
          i.addEventListener("pointerdown", f)
      }
      , 0);
      return () => {
          window.clearTimeout(d),
          i.removeEventListener("pointerdown", f),
          i.removeEventListener("click", l.current)
      }
  }
  , [i, s]),
  {
      onPointerDownCapture: () => o.current = !0
  }
}
function $A(e, i=globalThis?.document) {
  const s = sn(e)
    , o = w.useRef(!1);
  return w.useEffect( () => {
      const l = f => {
          f.target && !o.current && tb(FA, s, {
              originalEvent: f
          }, {
              discrete: !1
          })
      }
      ;
      return i.addEventListener("focusin", l),
      () => i.removeEventListener("focusin", l)
  }
  , [i, s]),
  {
      onFocusCapture: () => o.current = !0,
      onBlurCapture: () => o.current = !1
  }
}
function dv() {
  const e = new CustomEvent(If);
  document.dispatchEvent(e)
}
function tb(e, i, s, {discrete: o}) {
  const l = s.originalEvent.target
    , f = new CustomEvent(e,{
      bubbles: !1,
      cancelable: !0,
      detail: s
  });
  i && l.addEventListener(e, i, {
      once: !0
  }),
  o ? GA(l, f) : l.dispatchEvent(f)
}
const WA = ["top", "right", "bottom", "left"]
, Ci = Math.min
, Be = Math.max
, gl = Math.round
, il = Math.floor
, Sn = e => ({
  x: e,
  y: e
})
, JA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}
, IA = {
  start: "end",
  end: "start"
};
function td(e, i, s) {
  return Be(e, Ci(i, s))
}
function Qn(e, i) {
  return typeof e == "function" ? e(i) : e
}
function Kn(e) {
  return e.split("-")[0]
}
function ls(e) {
  return e.split("-")[1]
}
function Bd(e) {
  return e === "x" ? "y" : "x"
}
function Ud(e) {
  return e === "y" ? "height" : "width"
}
const tN = new Set(["top", "bottom"]);
function bn(e) {
  return tN.has(Kn(e)) ? "y" : "x"
}
function kd(e) {
  return Bd(bn(e))
}
function eN(e, i, s) {
  s === void 0 && (s = !1);
  const o = ls(e)
    , l = kd(e)
    , f = Ud(l);
  let d = l === "x" ? o === (s ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return i.reference[f] > i.floating[f] && (d = vl(d)),
  [d, vl(d)]
}
function nN(e) {
  const i = vl(e);
  return [ed(e), i, ed(i)]
}
function ed(e) {
  return e.replace(/start|end/g, i => IA[i])
}
const hv = ["left", "right"]
, mv = ["right", "left"]
, iN = ["top", "bottom"]
, aN = ["bottom", "top"];
function sN(e, i, s) {
  switch (e) {
  case "top":
  case "bottom":
      return s ? i ? mv : hv : i ? hv : mv;
  case "left":
  case "right":
      return i ? iN : aN;
  default:
      return []
  }
}
function rN(e, i, s, o) {
  const l = ls(e);
  let f = sN(Kn(e), s === "start", o);
  return l && (f = f.map(d => d + "-" + l),
  i && (f = f.concat(f.map(ed)))),
  f
}
function vl(e) {
  return e.replace(/left|right|bottom|top/g, i => JA[i])
}
function oN(e) {
  return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...e
  }
}
function eb(e) {
  return typeof e != "number" ? oN(e) : {
      top: e,
      right: e,
      bottom: e,
      left: e
  }
}
function xl(e) {
  const {x: i, y: s, width: o, height: l} = e;
  return {
      width: o,
      height: l,
      top: s,
      left: i,
      right: i + o,
      bottom: s + l,
      x: i,
      y: s
  }
}
function pv(e, i, s) {
  let {reference: o, floating: l} = e;
  const f = bn(i)
    , d = kd(i)
    , m = Ud(d)
    , p = Kn(i)
    , h = f === "y"
    , g = o.x + o.width / 2 - l.width / 2
    , x = o.y + o.height / 2 - l.height / 2
    , b = o[m] / 2 - l[m] / 2;
  let T;
  switch (p) {
  case "top":
      T = {
          x: g,
          y: o.y - l.height
      };
      break;
  case "bottom":
      T = {
          x: g,
          y: o.y + o.height
      };
      break;
  case "right":
      T = {
          x: o.x + o.width,
          y: x
      };
      break;
  case "left":
      T = {
          x: o.x - l.width,
          y: x
      };
      break;
  default:
      T = {
          x: o.x,
          y: o.y
      }
  }
  switch (ls(i)) {
  case "start":
      T[d] -= b * (s && h ? -1 : 1);
      break;
  case "end":
      T[d] += b * (s && h ? -1 : 1);
      break
  }
  return T
}
const lN = async (e, i, s) => {
  const {placement: o="bottom", strategy: l="absolute", middleware: f=[], platform: d} = s
    , m = f.filter(Boolean)
    , p = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let h = await d.getElementRects({
      reference: e,
      floating: i,
      strategy: l
  })
    , {x: g, y: x} = pv(h, o, p)
    , b = o
    , T = {}
    , C = 0;
  for (let E = 0; E < m.length; E++) {
      const {name: N, fn: O} = m[E]
        , {x: z, y: D, data: q, reset: G} = await O({
          x: g,
          y: x,
          initialPlacement: o,
          placement: b,
          strategy: l,
          middlewareData: T,
          rects: h,
          platform: d,
          elements: {
              reference: e,
              floating: i
          }
      });
      g = z ?? g,
      x = D ?? x,
      T = {
          ...T,
          [N]: {
              ...T[N],
              ...q
          }
      },
      G && C <= 50 && (C++,
      typeof G == "object" && (G.placement && (b = G.placement),
      G.rects && (h = G.rects === !0 ? await d.getElementRects({
          reference: e,
          floating: i,
          strategy: l
      }) : G.rects),
      {x: g, y: x} = pv(h, b, p)),
      E = -1)
  }
  return {
      x: g,
      y: x,
      placement: b,
      strategy: l,
      middlewareData: T
  }
}
;
async function xr(e, i) {
  var s;
  i === void 0 && (i = {});
  const {x: o, y: l, platform: f, rects: d, elements: m, strategy: p} = e
    , {boundary: h="clippingAncestors", rootBoundary: g="viewport", elementContext: x="floating", altBoundary: b=!1, padding: T=0} = Qn(i, e)
    , C = eb(T)
    , N = m[b ? x === "floating" ? "reference" : "floating" : x]
    , O = xl(await f.getClippingRect({
      element: (s = await (f.isElement == null ? void 0 : f.isElement(N))) == null || s ? N : N.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating)),
      boundary: h,
      rootBoundary: g,
      strategy: p
  }))
    , z = x === "floating" ? {
      x: o,
      y: l,
      width: d.floating.width,
      height: d.floating.height
  } : d.reference
    , D = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating))
    , q = await (f.isElement == null ? void 0 : f.isElement(D)) ? await (f.getScale == null ? void 0 : f.getScale(D)) || {
      x: 1,
      y: 1
  } : {
      x: 1,
      y: 1
  }
    , G = xl(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: m,
      rect: z,
      offsetParent: D,
      strategy: p
  }) : z);
  return {
      top: (O.top - G.top + C.top) / q.y,
      bottom: (G.bottom - O.bottom + C.bottom) / q.y,
      left: (O.left - G.left + C.left) / q.x,
      right: (G.right - O.right + C.right) / q.x
  }
}
const cN = e => ({
  name: "arrow",
  options: e,
  async fn(i) {
      const {x: s, y: o, placement: l, rects: f, platform: d, elements: m, middlewareData: p} = i
        , {element: h, padding: g=0} = Qn(e, i) || {};
      if (h == null)
          return {};
      const x = eb(g)
        , b = {
          x: s,
          y: o
      }
        , T = kd(l)
        , C = Ud(T)
        , E = await d.getDimensions(h)
        , N = T === "y"
        , O = N ? "top" : "left"
        , z = N ? "bottom" : "right"
        , D = N ? "clientHeight" : "clientWidth"
        , q = f.reference[C] + f.reference[T] - b[T] - f.floating[C]
        , G = b[T] - f.reference[T]
        , Z = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
      let k = Z ? Z[D] : 0;
      (!k || !await (d.isElement == null ? void 0 : d.isElement(Z))) && (k = m.floating[D] || f.floating[C]);
      const H = q / 2 - G / 2
        , I = k / 2 - E[C] / 2 - 1
        , st = Ci(x[O], I)
        , dt = Ci(x[z], I)
        , pt = st
        , Et = k - E[C] - dt
        , J = k / 2 - E[C] / 2 + H
        , ht = td(pt, J, Et)
        , _ = !p.arrow && ls(l) != null && J !== ht && f.reference[C] / 2 - (J < pt ? st : dt) - E[C] / 2 < 0
        , Y = _ ? J < pt ? J - pt : J - Et : 0;
      return {
          [T]: b[T] + Y,
          data: {
              [T]: ht,
              centerOffset: J - ht - Y,
              ..._ && {
                  alignmentOffset: Y
              }
          },
          reset: _
      }
  }
})
, uN = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "flip",
      options: e,
      async fn(i) {
          var s, o;
          const {placement: l, middlewareData: f, rects: d, initialPlacement: m, platform: p, elements: h} = i
            , {mainAxis: g=!0, crossAxis: x=!0, fallbackPlacements: b, fallbackStrategy: T="bestFit", fallbackAxisSideDirection: C="none", flipAlignment: E=!0, ...N} = Qn(e, i);
          if ((s = f.arrow) != null && s.alignmentOffset)
              return {};
          const O = Kn(l)
            , z = bn(m)
            , D = Kn(m) === m
            , q = await (p.isRTL == null ? void 0 : p.isRTL(h.floating))
            , G = b || (D || !E ? [vl(m)] : nN(m))
            , Z = C !== "none";
          !b && Z && G.push(...rN(m, E, C, q));
          const k = [m, ...G]
            , H = await xr(i, N)
            , I = [];
          let st = ((o = f.flip) == null ? void 0 : o.overflows) || [];
          if (g && I.push(H[O]),
          x) {
              const J = eN(l, d, q);
              I.push(H[J[0]], H[J[1]])
          }
          if (st = [...st, {
              placement: l,
              overflows: I
          }],
          !I.every(J => J <= 0)) {
              var dt, pt;
              const J = (((dt = f.flip) == null ? void 0 : dt.index) || 0) + 1
                , ht = k[J];
              if (ht && (!(x === "alignment" ? z !== bn(ht) : !1) || st.every(U => bn(U.placement) === z ? U.overflows[0] > 0 : !0)))
                  return {
                      data: {
                          index: J,
                          overflows: st
                      },
                      reset: {
                          placement: ht
                      }
                  };
              let _ = (pt = st.filter(Y => Y.overflows[0] <= 0).sort( (Y, U) => Y.overflows[1] - U.overflows[1])[0]) == null ? void 0 : pt.placement;
              if (!_)
                  switch (T) {
                  case "bestFit":
                      {
                          var Et;
                          const Y = (Et = st.filter(U => {
                              if (Z) {
                                  const it = bn(U.placement);
                                  return it === z || it === "y"
                              }
                              return !0
                          }
                          ).map(U => [U.placement, U.overflows.filter(it => it > 0).reduce( (it, ct) => it + ct, 0)]).sort( (U, it) => U[1] - it[1])[0]) == null ? void 0 : Et[0];
                          Y && (_ = Y);
                          break
                      }
                  case "initialPlacement":
                      _ = m;
                      break
                  }
              if (l !== _)
                  return {
                      reset: {
                          placement: _
                      }
                  }
          }
          return {}
      }
  }
};
function yv(e, i) {
  return {
      top: e.top - i.height,
      right: e.right - i.width,
      bottom: e.bottom - i.height,
      left: e.left - i.width
  }
}
function gv(e) {
  return WA.some(i => e[i] >= 0)
}
const fN = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "hide",
      options: e,
      async fn(i) {
          const {rects: s} = i
            , {strategy: o="referenceHidden", ...l} = Qn(e, i);
          switch (o) {
          case "referenceHidden":
              {
                  const f = await xr(i, {
                      ...l,
                      elementContext: "reference"
                  })
                    , d = yv(f, s.reference);
                  return {
                      data: {
                          referenceHiddenOffsets: d,
                          referenceHidden: gv(d)
                      }
                  }
              }
          case "escaped":
              {
                  const f = await xr(i, {
                      ...l,
                      altBoundary: !0
                  })
                    , d = yv(f, s.floating);
                  return {
                      data: {
                          escapedOffsets: d,
                          escaped: gv(d)
                      }
                  }
              }
          default:
              return {}
          }
      }
  }
}
, nb = new Set(["left", "top"]);
async function dN(e, i) {
  const {placement: s, platform: o, elements: l} = e
    , f = await (o.isRTL == null ? void 0 : o.isRTL(l.floating))
    , d = Kn(s)
    , m = ls(s)
    , p = bn(s) === "y"
    , h = nb.has(d) ? -1 : 1
    , g = f && p ? -1 : 1
    , x = Qn(i, e);
  let {mainAxis: b, crossAxis: T, alignmentAxis: C} = typeof x == "number" ? {
      mainAxis: x,
      crossAxis: 0,
      alignmentAxis: null
  } : {
      mainAxis: x.mainAxis || 0,
      crossAxis: x.crossAxis || 0,
      alignmentAxis: x.alignmentAxis
  };
  return m && typeof C == "number" && (T = m === "end" ? C * -1 : C),
  p ? {
      x: T * g,
      y: b * h
  } : {
      x: b * h,
      y: T * g
  }
}
const hN = function(e) {
  return e === void 0 && (e = 0),
  {
      name: "offset",
      options: e,
      async fn(i) {
          var s, o;
          const {x: l, y: f, placement: d, middlewareData: m} = i
            , p = await dN(i, e);
          return d === ((s = m.offset) == null ? void 0 : s.placement) && (o = m.arrow) != null && o.alignmentOffset ? {} : {
              x: l + p.x,
              y: f + p.y,
              data: {
                  ...p,
                  placement: d
              }
          }
      }
  }
}
, mN = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "shift",
      options: e,
      async fn(i) {
          const {x: s, y: o, placement: l} = i
            , {mainAxis: f=!0, crossAxis: d=!1, limiter: m={
              fn: N => {
                  let {x: O, y: z} = N;
                  return {
                      x: O,
                      y: z
                  }
              }
          }, ...p} = Qn(e, i)
            , h = {
              x: s,
              y: o
          }
            , g = await xr(i, p)
            , x = bn(Kn(l))
            , b = Bd(x);
          let T = h[b]
            , C = h[x];
          if (f) {
              const N = b === "y" ? "top" : "left"
                , O = b === "y" ? "bottom" : "right"
                , z = T + g[N]
                , D = T - g[O];
              T = td(z, T, D)
          }
          if (d) {
              const N = x === "y" ? "top" : "left"
                , O = x === "y" ? "bottom" : "right"
                , z = C + g[N]
                , D = C - g[O];
              C = td(z, C, D)
          }
          const E = m.fn({
              ...i,
              [b]: T,
              [x]: C
          });
          return {
              ...E,
              data: {
                  x: E.x - s,
                  y: E.y - o,
                  enabled: {
                      [b]: f,
                      [x]: d
                  }
              }
          }
      }
  }
}
, pN = function(e) {
  return e === void 0 && (e = {}),
  {
      options: e,
      fn(i) {
          const {x: s, y: o, placement: l, rects: f, middlewareData: d} = i
            , {offset: m=0, mainAxis: p=!0, crossAxis: h=!0} = Qn(e, i)
            , g = {
              x: s,
              y: o
          }
            , x = bn(l)
            , b = Bd(x);
          let T = g[b]
            , C = g[x];
          const E = Qn(m, i)
            , N = typeof E == "number" ? {
              mainAxis: E,
              crossAxis: 0
          } : {
              mainAxis: 0,
              crossAxis: 0,
              ...E
          };
          if (p) {
              const D = b === "y" ? "height" : "width"
                , q = f.reference[b] - f.floating[D] + N.mainAxis
                , G = f.reference[b] + f.reference[D] - N.mainAxis;
              T < q ? T = q : T > G && (T = G)
          }
          if (h) {
              var O, z;
              const D = b === "y" ? "width" : "height"
                , q = nb.has(Kn(l))
                , G = f.reference[x] - f.floating[D] + (q && ((O = d.offset) == null ? void 0 : O[x]) || 0) + (q ? 0 : N.crossAxis)
                , Z = f.reference[x] + f.reference[D] + (q ? 0 : ((z = d.offset) == null ? void 0 : z[x]) || 0) - (q ? N.crossAxis : 0);
              C < G ? C = G : C > Z && (C = Z)
          }
          return {
              [b]: T,
              [x]: C
          }
      }
  }
}
, yN = function(e) {
  return e === void 0 && (e = {}),
  {
      name: "size",
      options: e,
      async fn(i) {
          var s, o;
          const {placement: l, rects: f, platform: d, elements: m} = i
            , {apply: p= () => {}
          , ...h} = Qn(e, i)
            , g = await xr(i, h)
            , x = Kn(l)
            , b = ls(l)
            , T = bn(l) === "y"
            , {width: C, height: E} = f.floating;
          let N, O;
          x === "top" || x === "bottom" ? (N = x,
          O = b === (await (d.isRTL == null ? void 0 : d.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (O = x,
          N = b === "end" ? "top" : "bottom");
          const z = E - g.top - g.bottom
            , D = C - g.left - g.right
            , q = Ci(E - g[N], z)
            , G = Ci(C - g[O], D)
            , Z = !i.middlewareData.shift;
          let k = q
            , H = G;
          if ((s = i.middlewareData.shift) != null && s.enabled.x && (H = D),
          (o = i.middlewareData.shift) != null && o.enabled.y && (k = z),
          Z && !b) {
              const st = Be(g.left, 0)
                , dt = Be(g.right, 0)
                , pt = Be(g.top, 0)
                , Et = Be(g.bottom, 0);
              T ? H = C - 2 * (st !== 0 || dt !== 0 ? st + dt : Be(g.left, g.right)) : k = E - 2 * (pt !== 0 || Et !== 0 ? pt + Et : Be(g.top, g.bottom))
          }
          await p({
              ...i,
              availableWidth: H,
              availableHeight: k
          });
          const I = await d.getDimensions(m.floating);
          return C !== I.width || E !== I.height ? {
              reset: {
                  rects: !0
              }
          } : {}
      }
  }
};
function Vl() {
  return typeof window < "u"
}
function cs(e) {
  return ib(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function He(e) {
  var i;
  return (e == null || (i = e.ownerDocument) == null ? void 0 : i.defaultView) || window
}
function Nn(e) {
  var i;
  return (i = (ib(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : i.documentElement
}
function ib(e) {
  return Vl() ? e instanceof Node || e instanceof He(e).Node : !1
}
function dn(e) {
  return Vl() ? e instanceof Element || e instanceof He(e).Element : !1
}
function Cn(e) {
  return Vl() ? e instanceof HTMLElement || e instanceof He(e).HTMLElement : !1
}
function vv(e) {
  return !Vl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof He(e).ShadowRoot
}
const gN = new Set(["inline", "contents"]);
function Mr(e) {
  const {overflow: i, overflowX: s, overflowY: o, display: l} = hn(e);
  return /auto|scroll|overlay|hidden|clip/.test(i + o + s) && !gN.has(l)
}
const vN = new Set(["table", "td", "th"]);
function xN(e) {
  return vN.has(cs(e))
}
const bN = [":popover-open", ":modal"];
function Bl(e) {
  return bN.some(i => {
      try {
          return e.matches(i)
      } catch {
          return !1
      }
  }
  )
}
const SN = ["transform", "translate", "scale", "rotate", "perspective"]
, wN = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
, TN = ["paint", "layout", "strict", "content"];
function Pd(e) {
  const i = Hd()
    , s = dn(e) ? hn(e) : e;
  return SN.some(o => s[o] ? s[o] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !i && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !i && (s.filter ? s.filter !== "none" : !1) || wN.some(o => (s.willChange || "").includes(o)) || TN.some(o => (s.contain || "").includes(o))
}
function EN(e) {
  let i = Ai(e);
  for (; Cn(i) && !ns(i); ) {
      if (Pd(i))
          return i;
      if (Bl(i))
          return null;
      i = Ai(i)
  }
  return null
}
function Hd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const CN = new Set(["html", "body", "#document"]);
function ns(e) {
  return CN.has(cs(e))
}
function hn(e) {
  return He(e).getComputedStyle(e)
}
function Ul(e) {
  return dn(e) ? {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
  } : {
      scrollLeft: e.scrollX,
      scrollTop: e.scrollY
  }
}
function Ai(e) {
  if (cs(e) === "html")
      return e;
  const i = e.assignedSlot || e.parentNode || vv(e) && e.host || Nn(e);
  return vv(i) ? i.host : i
}
function ab(e) {
  const i = Ai(e);
  return ns(i) ? e.ownerDocument ? e.ownerDocument.body : e.body : Cn(i) && Mr(i) ? i : ab(i)
}
function br(e, i, s) {
  var o;
  i === void 0 && (i = []),
  s === void 0 && (s = !0);
  const l = ab(e)
    , f = l === ((o = e.ownerDocument) == null ? void 0 : o.body)
    , d = He(l);
  if (f) {
      const m = nd(d);
      return i.concat(d, d.visualViewport || [], Mr(l) ? l : [], m && s ? br(m) : [])
  }
  return i.concat(l, br(l, [], s))
}
function nd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function sb(e) {
  const i = hn(e);
  let s = parseFloat(i.width) || 0
    , o = parseFloat(i.height) || 0;
  const l = Cn(e)
    , f = l ? e.offsetWidth : s
    , d = l ? e.offsetHeight : o
    , m = gl(s) !== f || gl(o) !== d;
  return m && (s = f,
  o = d),
  {
      width: s,
      height: o,
      $: m
  }
}
function qd(e) {
  return dn(e) ? e : e.contextElement
}
function ts(e) {
  const i = qd(e);
  if (!Cn(i))
      return Sn(1);
  const s = i.getBoundingClientRect()
    , {width: o, height: l, $: f} = sb(i);
  let d = (f ? gl(s.width) : s.width) / o
    , m = (f ? gl(s.height) : s.height) / l;
  return (!d || !Number.isFinite(d)) && (d = 1),
  (!m || !Number.isFinite(m)) && (m = 1),
  {
      x: d,
      y: m
  }
}
const AN = Sn(0);
function rb(e) {
  const i = He(e);
  return !Hd() || !i.visualViewport ? AN : {
      x: i.visualViewport.offsetLeft,
      y: i.visualViewport.offsetTop
  }
}
function NN(e, i, s) {
  return i === void 0 && (i = !1),
  !s || i && s !== He(e) ? !1 : i
}
function oa(e, i, s, o) {
  i === void 0 && (i = !1),
  s === void 0 && (s = !1);
  const l = e.getBoundingClientRect()
    , f = qd(e);
  let d = Sn(1);
  i && (o ? dn(o) && (d = ts(o)) : d = ts(e));
  const m = NN(f, s, o) ? rb(f) : Sn(0);
  let p = (l.left + m.x) / d.x
    , h = (l.top + m.y) / d.y
    , g = l.width / d.x
    , x = l.height / d.y;
  if (f) {
      const b = He(f)
        , T = o && dn(o) ? He(o) : o;
      let C = b
        , E = nd(C);
      for (; E && o && T !== C; ) {
          const N = ts(E)
            , O = E.getBoundingClientRect()
            , z = hn(E)
            , D = O.left + (E.clientLeft + parseFloat(z.paddingLeft)) * N.x
            , q = O.top + (E.clientTop + parseFloat(z.paddingTop)) * N.y;
          p *= N.x,
          h *= N.y,
          g *= N.x,
          x *= N.y,
          p += D,
          h += q,
          C = He(E),
          E = nd(C)
      }
  }
  return xl({
      width: g,
      height: x,
      x: p,
      y: h
  })
}
function kl(e, i) {
  const s = Ul(e).scrollLeft;
  return i ? i.left + s : oa(Nn(e)).left + s
}
function ob(e, i) {
  const s = e.getBoundingClientRect()
    , o = s.left + i.scrollLeft - kl(e, s)
    , l = s.top + i.scrollTop;
  return {
      x: o,
      y: l
  }
}
function MN(e) {
  let {elements: i, rect: s, offsetParent: o, strategy: l} = e;
  const f = l === "fixed"
    , d = Nn(o)
    , m = i ? Bl(i.floating) : !1;
  if (o === d || m && f)
      return s;
  let p = {
      scrollLeft: 0,
      scrollTop: 0
  }
    , h = Sn(1);
  const g = Sn(0)
    , x = Cn(o);
  if ((x || !x && !f) && ((cs(o) !== "body" || Mr(d)) && (p = Ul(o)),
  Cn(o))) {
      const T = oa(o);
      h = ts(o),
      g.x = T.x + o.clientLeft,
      g.y = T.y + o.clientTop
  }
  const b = d && !x && !f ? ob(d, p) : Sn(0);
  return {
      width: s.width * h.x,
      height: s.height * h.y,
      x: s.x * h.x - p.scrollLeft * h.x + g.x + b.x,
      y: s.y * h.y - p.scrollTop * h.y + g.y + b.y
  }
}
function jN(e) {
  return Array.from(e.getClientRects())
}
function RN(e) {
  const i = Nn(e)
    , s = Ul(e)
    , o = e.ownerDocument.body
    , l = Be(i.scrollWidth, i.clientWidth, o.scrollWidth, o.clientWidth)
    , f = Be(i.scrollHeight, i.clientHeight, o.scrollHeight, o.clientHeight);
  let d = -s.scrollLeft + kl(e);
  const m = -s.scrollTop;
  return hn(o).direction === "rtl" && (d += Be(i.clientWidth, o.clientWidth) - l),
  {
      width: l,
      height: f,
      x: d,
      y: m
  }
}
const xv = 25;
function ON(e, i) {
  const s = He(e)
    , o = Nn(e)
    , l = s.visualViewport;
  let f = o.clientWidth
    , d = o.clientHeight
    , m = 0
    , p = 0;
  if (l) {
      f = l.width,
      d = l.height;
      const g = Hd();
      (!g || g && i === "fixed") && (m = l.offsetLeft,
      p = l.offsetTop)
  }
  const h = kl(o);
  if (h <= 0) {
      const g = o.ownerDocument
        , x = g.body
        , b = getComputedStyle(x)
        , T = g.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0
        , C = Math.abs(o.clientWidth - x.clientWidth - T);
      C <= xv && (f -= C)
  } else
      h <= xv && (f += h);
  return {
      width: f,
      height: d,
      x: m,
      y: p
  }
}
const DN = new Set(["absolute", "fixed"]);
function _N(e, i) {
  const s = oa(e, !0, i === "fixed")
    , o = s.top + e.clientTop
    , l = s.left + e.clientLeft
    , f = Cn(e) ? ts(e) : Sn(1)
    , d = e.clientWidth * f.x
    , m = e.clientHeight * f.y
    , p = l * f.x
    , h = o * f.y;
  return {
      width: d,
      height: m,
      x: p,
      y: h
  }
}
function bv(e, i, s) {
  let o;
  if (i === "viewport")
      o = ON(e, s);
  else if (i === "document")
      o = RN(Nn(e));
  else if (dn(i))
      o = _N(i, s);
  else {
      const l = rb(e);
      o = {
          x: i.x - l.x,
          y: i.y - l.y,
          width: i.width,
          height: i.height
      }
  }
  return xl(o)
}
function lb(e, i) {
  const s = Ai(e);
  return s === i || !dn(s) || ns(s) ? !1 : hn(s).position === "fixed" || lb(s, i)
}
function zN(e, i) {
  const s = i.get(e);
  if (s)
      return s;
  let o = br(e, [], !1).filter(m => dn(m) && cs(m) !== "body")
    , l = null;
  const f = hn(e).position === "fixed";
  let d = f ? Ai(e) : e;
  for (; dn(d) && !ns(d); ) {
      const m = hn(d)
        , p = Pd(d);
      !p && m.position === "fixed" && (l = null),
      (f ? !p && !l : !p && m.position === "static" && !!l && DN.has(l.position) || Mr(d) && !p && lb(e, d)) ? o = o.filter(g => g !== d) : l = m,
      d = Ai(d)
  }
  return i.set(e, o),
  o
}
function LN(e) {
  let {element: i, boundary: s, rootBoundary: o, strategy: l} = e;
  const d = [...s === "clippingAncestors" ? Bl(i) ? [] : zN(i, this._c) : [].concat(s), o]
    , m = d[0]
    , p = d.reduce( (h, g) => {
      const x = bv(i, g, l);
      return h.top = Be(x.top, h.top),
      h.right = Ci(x.right, h.right),
      h.bottom = Ci(x.bottom, h.bottom),
      h.left = Be(x.left, h.left),
      h
  }
  , bv(i, m, l));
  return {
      width: p.right - p.left,
      height: p.bottom - p.top,
      x: p.left,
      y: p.top
  }
}
function VN(e) {
  const {width: i, height: s} = sb(e);
  return {
      width: i,
      height: s
  }
}
function BN(e, i, s) {
  const o = Cn(i)
    , l = Nn(i)
    , f = s === "fixed"
    , d = oa(e, !0, f, i);
  let m = {
      scrollLeft: 0,
      scrollTop: 0
  };
  const p = Sn(0);
  function h() {
      p.x = kl(l)
  }
  if (o || !o && !f)
      if ((cs(i) !== "body" || Mr(l)) && (m = Ul(i)),
      o) {
          const T = oa(i, !0, f, i);
          p.x = T.x + i.clientLeft,
          p.y = T.y + i.clientTop
      } else
          l && h();
  f && !o && l && h();
  const g = l && !o && !f ? ob(l, m) : Sn(0)
    , x = d.left + m.scrollLeft - p.x - g.x
    , b = d.top + m.scrollTop - p.y - g.y;
  return {
      x,
      y: b,
      width: d.width,
      height: d.height
  }
}
function Nf(e) {
  return hn(e).position === "static"
}
function Sv(e, i) {
  if (!Cn(e) || hn(e).position === "fixed")
      return null;
  if (i)
      return i(e);
  let s = e.offsetParent;
  return Nn(e) === s && (s = s.ownerDocument.body),
  s
}
function cb(e, i) {
  const s = He(e);
  if (Bl(e))
      return s;
  if (!Cn(e)) {
      let l = Ai(e);
      for (; l && !ns(l); ) {
          if (dn(l) && !Nf(l))
              return l;
          l = Ai(l)
      }
      return s
  }
  let o = Sv(e, i);
  for (; o && xN(o) && Nf(o); )
      o = Sv(o, i);
  return o && ns(o) && Nf(o) && !Pd(o) ? s : o || EN(e) || s
}
const UN = async function(e) {
  const i = this.getOffsetParent || cb
    , s = this.getDimensions
    , o = await s(e.floating);
  return {
      reference: BN(e.reference, await i(e.floating), e.strategy),
      floating: {
          x: 0,
          y: 0,
          width: o.width,
          height: o.height
      }
  }
};
function kN(e) {
  return hn(e).direction === "rtl"
}
const PN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: MN,
  getDocumentElement: Nn,
  getClippingRect: LN,
  getOffsetParent: cb,
  getElementRects: UN,
  getClientRects: jN,
  getDimensions: VN,
  getScale: ts,
  isElement: dn,
  isRTL: kN
};
function ub(e, i) {
  return e.x === i.x && e.y === i.y && e.width === i.width && e.height === i.height
}
function HN(e, i) {
  let s = null, o;
  const l = Nn(e);
  function f() {
      var m;
      clearTimeout(o),
      (m = s) == null || m.disconnect(),
      s = null
  }
  function d(m, p) {
      m === void 0 && (m = !1),
      p === void 0 && (p = 1),
      f();
      const h = e.getBoundingClientRect()
        , {left: g, top: x, width: b, height: T} = h;
      if (m || i(),
      !b || !T)
          return;
      const C = il(x)
        , E = il(l.clientWidth - (g + b))
        , N = il(l.clientHeight - (x + T))
        , O = il(g)
        , D = {
          rootMargin: -C + "px " + -E + "px " + -N + "px " + -O + "px",
          threshold: Be(0, Ci(1, p)) || 1
      };
      let q = !0;
      function G(Z) {
          const k = Z[0].intersectionRatio;
          if (k !== p) {
              if (!q)
                  return d();
              k ? d(!1, k) : o = setTimeout( () => {
                  d(!1, 1e-7)
              }
              , 1e3)
          }
          k === 1 && !ub(h, e.getBoundingClientRect()) && d(),
          q = !1
      }
      try {
          s = new IntersectionObserver(G,{
              ...D,
              root: l.ownerDocument
          })
      } catch {
          s = new IntersectionObserver(G,D)
      }
      s.observe(e)
  }
  return d(!0),
  f
}
function qN(e, i, s, o) {
  o === void 0 && (o = {});
  const {ancestorScroll: l=!0, ancestorResize: f=!0, elementResize: d=typeof ResizeObserver == "function", layoutShift: m=typeof IntersectionObserver == "function", animationFrame: p=!1} = o
    , h = qd(e)
    , g = l || f ? [...h ? br(h) : [], ...br(i)] : [];
  g.forEach(O => {
      l && O.addEventListener("scroll", s, {
          passive: !0
      }),
      f && O.addEventListener("resize", s)
  }
  );
  const x = h && m ? HN(h, s) : null;
  let b = -1
    , T = null;
  d && (T = new ResizeObserver(O => {
      let[z] = O;
      z && z.target === h && T && (T.unobserve(i),
      cancelAnimationFrame(b),
      b = requestAnimationFrame( () => {
          var D;
          (D = T) == null || D.observe(i)
      }
      )),
      s()
  }
  ),
  h && !p && T.observe(h),
  T.observe(i));
  let C, E = p ? oa(e) : null;
  p && N();
  function N() {
      const O = oa(e);
      E && !ub(E, O) && s(),
      E = O,
      C = requestAnimationFrame(N)
  }
  return s(),
  () => {
      var O;
      g.forEach(z => {
          l && z.removeEventListener("scroll", s),
          f && z.removeEventListener("resize", s)
      }
      ),
      x?.(),
      (O = T) == null || O.disconnect(),
      T = null,
      p && cancelAnimationFrame(C)
  }
}
const GN = hN
, YN = mN
, XN = uN
, FN = yN
, QN = fN
, wv = cN
, KN = pN
, ZN = (e, i, s) => {
  const o = new Map
    , l = {
      platform: PN,
      ...s
  }
    , f = {
      ...l.platform,
      _c: o
  };
  return lN(e, i, {
      ...l,
      platform: f
  })
}
;
var $N = typeof document < "u"
, WN = function() {}
, fl = $N ? w.useLayoutEffect : WN;
function bl(e, i) {
  if (e === i)
      return !0;
  if (typeof e != typeof i)
      return !1;
  if (typeof e == "function" && e.toString() === i.toString())
      return !0;
  let s, o, l;
  if (e && i && typeof e == "object") {
      if (Array.isArray(e)) {
          if (s = e.length,
          s !== i.length)
              return !1;
          for (o = s; o-- !== 0; )
              if (!bl(e[o], i[o]))
                  return !1;
          return !0
      }
      if (l = Object.keys(e),
      s = l.length,
      s !== Object.keys(i).length)
          return !1;
      for (o = s; o-- !== 0; )
          if (!{}.hasOwnProperty.call(i, l[o]))
              return !1;
      for (o = s; o-- !== 0; ) {
          const f = l[o];
          if (!(f === "_owner" && e.$$typeof) && !bl(e[f], i[f]))
              return !1
      }
      return !0
  }
  return e !== e && i !== i
}
function fb(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Tv(e, i) {
  const s = fb(e);
  return Math.round(i * s) / s
}
function Mf(e) {
  const i = w.useRef(e);
  return fl( () => {
      i.current = e
  }
  ),
  i
}
function JN(e) {
  e === void 0 && (e = {});
  const {placement: i="bottom", strategy: s="absolute", middleware: o=[], platform: l, elements: {reference: f, floating: d}={}, transform: m=!0, whileElementsMounted: p, open: h} = e
    , [g,x] = w.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: i,
      middlewareData: {},
      isPositioned: !1
  })
    , [b,T] = w.useState(o);
  bl(b, o) || T(o);
  const [C,E] = w.useState(null)
    , [N,O] = w.useState(null)
    , z = w.useCallback(U => {
      U !== Z.current && (Z.current = U,
      E(U))
  }
  , [])
    , D = w.useCallback(U => {
      U !== k.current && (k.current = U,
      O(U))
  }
  , [])
    , q = f || C
    , G = d || N
    , Z = w.useRef(null)
    , k = w.useRef(null)
    , H = w.useRef(g)
    , I = p != null
    , st = Mf(p)
    , dt = Mf(l)
    , pt = Mf(h)
    , Et = w.useCallback( () => {
      if (!Z.current || !k.current)
          return;
      const U = {
          placement: i,
          strategy: s,
          middleware: b
      };
      dt.current && (U.platform = dt.current),
      ZN(Z.current, k.current, U).then(it => {
          const ct = {
              ...it,
              isPositioned: pt.current !== !1
          };
          J.current && !bl(H.current, ct) && (H.current = ct,
          Nr.flushSync( () => {
              x(ct)
          }
          ))
      }
      )
  }
  , [b, i, s, dt, pt]);
  fl( () => {
      h === !1 && H.current.isPositioned && (H.current.isPositioned = !1,
      x(U => ({
          ...U,
          isPositioned: !1
      })))
  }
  , [h]);
  const J = w.useRef(!1);
  fl( () => (J.current = !0,
  () => {
      J.current = !1
  }
  ), []),
  fl( () => {
      if (q && (Z.current = q),
      G && (k.current = G),
      q && G) {
          if (st.current)
              return st.current(q, G, Et);
          Et()
      }
  }
  , [q, G, Et, st, I]);
  const ht = w.useMemo( () => ({
      reference: Z,
      floating: k,
      setReference: z,
      setFloating: D
  }), [z, D])
    , _ = w.useMemo( () => ({
      reference: q,
      floating: G
  }), [q, G])
    , Y = w.useMemo( () => {
      const U = {
          position: s,
          left: 0,
          top: 0
      };
      if (!_.floating)
          return U;
      const it = Tv(_.floating, g.x)
        , ct = Tv(_.floating, g.y);
      return m ? {
          ...U,
          transform: "translate(" + it + "px, " + ct + "px)",
          ...fb(_.floating) >= 1.5 && {
              willChange: "transform"
          }
      } : {
          position: s,
          left: it,
          top: ct
      }
  }
  , [s, m, _.floating, g.x, g.y]);
  return w.useMemo( () => ({
      ...g,
      update: Et,
      refs: ht,
      elements: _,
      floatingStyles: Y
  }), [g, Et, ht, _, Y])
}
const IN = e => {
  function i(s) {
      return {}.hasOwnProperty.call(s, "current")
  }
  return {
      name: "arrow",
      options: e,
      fn(s) {
          const {element: o, padding: l} = typeof e == "function" ? e(s) : e;
          return o && i(o) ? o.current != null ? wv({
              element: o.current,
              padding: l
          }).fn(s) : {} : o ? wv({
              element: o,
              padding: l
          }).fn(s) : {}
      }
  }
}
, tM = (e, i) => ({
  ...GN(e),
  options: [e, i]
})
, eM = (e, i) => ({
  ...YN(e),
  options: [e, i]
})
, nM = (e, i) => ({
  ...KN(e),
  options: [e, i]
})
, iM = (e, i) => ({
  ...XN(e),
  options: [e, i]
})
, aM = (e, i) => ({
  ...FN(e),
  options: [e, i]
})
, sM = (e, i) => ({
  ...QN(e),
  options: [e, i]
})
, rM = (e, i) => ({
  ...IN(e),
  options: [e, i]
});
var oM = "Arrow"
, db = w.forwardRef( (e, i) => {
  const {children: s, width: o=10, height: l=5, ...f} = e;
  return y.jsx(Ri.svg, {
      ...f,
      ref: i,
      width: o,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? s : y.jsx("polygon", {
          points: "0,0 30,0 15,10"
      })
  })
}
);
db.displayName = oM;
var lM = db;
function cM(e) {
  const [i,s] = w.useState(void 0);
  return En( () => {
      if (e) {
          s({
              width: e.offsetWidth,
              height: e.offsetHeight
          });
          const o = new ResizeObserver(l => {
              if (!Array.isArray(l) || !l.length)
                  return;
              const f = l[0];
              let d, m;
              if ("borderBoxSize"in f) {
                  const p = f.borderBoxSize
                    , h = Array.isArray(p) ? p[0] : p;
                  d = h.inlineSize,
                  m = h.blockSize
              } else
                  d = e.offsetWidth,
                  m = e.offsetHeight;
              s({
                  width: d,
                  height: m
              })
          }
          );
          return o.observe(e, {
              box: "border-box"
          }),
          () => o.unobserve(e)
      } else
          s(void 0)
  }
  , [e]),
  i
}
var hb = "Popper"
, [mb,pb] = Dl(hb)
, [v5,yb] = mb(hb)
, gb = "PopperAnchor"
, vb = w.forwardRef( (e, i) => {
  const {__scopePopper: s, virtualRef: o, ...l} = e
    , f = yb(gb, s)
    , d = w.useRef(null)
    , m = Ae(i, d)
    , p = w.useRef(null);
  return w.useEffect( () => {
      const h = p.current;
      p.current = o?.current || d.current,
      h !== p.current && f.onAnchorChange(p.current)
  }
  ),
  o ? null : y.jsx(Ri.div, {
      ...l,
      ref: m
  })
}
);
vb.displayName = gb;
var Gd = "PopperContent"
, [uM,fM] = mb(Gd)
, xb = w.forwardRef( (e, i) => {
  const {__scopePopper: s, side: o="bottom", sideOffset: l=0, align: f="center", alignOffset: d=0, arrowPadding: m=0, avoidCollisions: p=!0, collisionBoundary: h=[], collisionPadding: g=0, sticky: x="partial", hideWhenDetached: b=!1, updatePositionStrategy: T="optimized", onPlaced: C, ...E} = e
    , N = yb(Gd, s)
    , [O,z] = w.useState(null)
    , D = Ae(i, rt => z(rt))
    , [q,G] = w.useState(null)
    , Z = cM(q)
    , k = Z?.width ?? 0
    , H = Z?.height ?? 0
    , I = o + (f !== "center" ? "-" + f : "")
    , st = typeof g == "number" ? g : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...g
  }
    , dt = Array.isArray(h) ? h : [h]
    , pt = dt.length > 0
    , Et = {
      padding: st,
      boundary: dt.filter(hM),
      altBoundary: pt
  }
    , {refs: J, floatingStyles: ht, placement: _, isPositioned: Y, middlewareData: U} = JN({
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...rt) => qN(...rt, {
          animationFrame: T === "always"
      }),
      elements: {
          reference: N.anchor
      },
      middleware: [tM({
          mainAxis: l + H,
          alignmentAxis: d
      }), p && eM({
          mainAxis: !0,
          crossAxis: !1,
          limiter: x === "partial" ? nM() : void 0,
          ...Et
      }), p && iM({
          ...Et
      }), aM({
          ...Et,
          apply: ({elements: rt, rects: Ft, availableWidth: _t, availableHeight: qe}) => {
              const {width: mn, height: pn} = Ft.reference
                , Di = rt.floating.style;
              Di.setProperty("--radix-popper-available-width", `${_t}px`),
              Di.setProperty("--radix-popper-available-height", `${qe}px`),
              Di.setProperty("--radix-popper-anchor-width", `${mn}px`),
              Di.setProperty("--radix-popper-anchor-height", `${pn}px`)
          }
      }), q && rM({
          element: q,
          padding: m
      }), mM({
          arrowWidth: k,
          arrowHeight: H
      }), b && sM({
          strategy: "referenceHidden",
          ...Et
      })]
  })
    , [it,ct] = wb(_)
    , M = sn(C);
  En( () => {
      Y && M?.()
  }
  , [Y, M]);
  const F = U.arrow?.x
    , $ = U.arrow?.y
    , W = U.arrow?.centerOffset !== 0
    , [ut,yt] = w.useState();
  return En( () => {
      O && yt(window.getComputedStyle(O).zIndex)
  }
  , [O]),
  y.jsx("div", {
      ref: J.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
          ...ht,
          transform: Y ? ht.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ut,
          "--radix-popper-transform-origin": [U.transformOrigin?.x, U.transformOrigin?.y].join(" "),
          ...U.hide?.referenceHidden && {
              visibility: "hidden",
              pointerEvents: "none"
          }
      },
      dir: e.dir,
      children: y.jsx(uM, {
          scope: s,
          placedSide: it,
          onArrowChange: G,
          arrowX: F,
          arrowY: $,
          shouldHideArrow: W,
          children: y.jsx(Ri.div, {
              "data-side": it,
              "data-align": ct,
              ...E,
              ref: D,
              style: {
                  ...E.style,
                  animation: Y ? void 0 : "none"
              }
          })
      })
  })
}
);
xb.displayName = Gd;
var bb = "PopperArrow"
, dM = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}
, Sb = w.forwardRef(function(i, s) {
  const {__scopePopper: o, ...l} = i
    , f = fM(bb, o)
    , d = dM[f.placedSide];
  return y.jsx("span", {
      ref: f.onArrowChange,
      style: {
          position: "absolute",
          left: f.arrowX,
          top: f.arrowY,
          [d]: 0,
          transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
          }[f.placedSide],
          transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[f.placedSide],
          visibility: f.shouldHideArrow ? "hidden" : void 0
      },
      children: y.jsx(lM, {
          ...l,
          ref: s,
          style: {
              ...l.style,
              display: "block"
          }
      })
  })
});
Sb.displayName = bb;
function hM(e) {
  return e !== null
}
var mM = e => ({
  name: "transformOrigin",
  options: e,
  fn(i) {
      const {placement: s, rects: o, middlewareData: l} = i
        , d = l.arrow?.centerOffset !== 0
        , m = d ? 0 : e.arrowWidth
        , p = d ? 0 : e.arrowHeight
        , [h,g] = wb(s)
        , x = {
          start: "0%",
          center: "50%",
          end: "100%"
      }[g]
        , b = (l.arrow?.x ?? 0) + m / 2
        , T = (l.arrow?.y ?? 0) + p / 2;
      let C = ""
        , E = "";
      return h === "bottom" ? (C = d ? x : `${b}px`,
      E = `${-p}px`) : h === "top" ? (C = d ? x : `${b}px`,
      E = `${o.floating.height + p}px`) : h === "right" ? (C = `${-p}px`,
      E = d ? x : `${T}px`) : h === "left" && (C = `${o.floating.width + p}px`,
      E = d ? x : `${T}px`),
      {
          data: {
              x: C,
              y: E
          }
      }
  }
});
function wb(e) {
  const [i,s="center"] = e.split("-");
  return [i, s]
}
var pM = vb
, yM = xb
, gM = Sb
, vM = "Portal"
, Tb = w.forwardRef( (e, i) => {
  const {container: s, ...o} = e
    , [l,f] = w.useState(!1);
  En( () => f(!0), []);
  const d = s || l && globalThis?.document?.body;
  return d ? ax.createPortal(y.jsx(Ri.div, {
      ...o,
      ref: i
  }), d) : null
}
);
Tb.displayName = vM;
function xM(e, i) {
  return w.useReducer( (s, o) => i[s][o] ?? s, e)
}
var Yd = e => {
  const {present: i, children: s} = e
    , o = bM(i)
    , l = typeof s == "function" ? s({
      present: o.isPresent
  }) : w.Children.only(s)
    , f = Ae(o.ref, SM(l));
  return typeof s == "function" || o.isPresent ? w.cloneElement(l, {
      ref: f
  }) : null
}
;
Yd.displayName = "Presence";
function bM(e) {
  const [i,s] = w.useState()
    , o = w.useRef(null)
    , l = w.useRef(e)
    , f = w.useRef("none")
    , d = e ? "mounted" : "unmounted"
    , [m,p] = xM(d, {
      mounted: {
          UNMOUNT: "unmounted",
          ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
          MOUNT: "mounted",
          ANIMATION_END: "unmounted"
      },
      unmounted: {
          MOUNT: "mounted"
      }
  });
  return w.useEffect( () => {
      const h = al(o.current);
      f.current = m === "mounted" ? h : "none"
  }
  , [m]),
  En( () => {
      const h = o.current
        , g = l.current;
      if (g !== e) {
          const b = f.current
            , T = al(h);
          e ? p("MOUNT") : T === "none" || h?.display === "none" ? p("UNMOUNT") : p(g && b !== T ? "ANIMATION_OUT" : "UNMOUNT"),
          l.current = e
      }
  }
  , [e, p]),
  En( () => {
      if (i) {
          let h;
          const g = i.ownerDocument.defaultView ?? window
            , x = T => {
              const E = al(o.current).includes(CSS.escape(T.animationName));
              if (T.target === i && E && (p("ANIMATION_END"),
              !l.current)) {
                  const N = i.style.animationFillMode;
                  i.style.animationFillMode = "forwards",
                  h = g.setTimeout( () => {
                      i.style.animationFillMode === "forwards" && (i.style.animationFillMode = N)
                  }
                  )
              }
          }
            , b = T => {
              T.target === i && (f.current = al(o.current))
          }
          ;
          return i.addEventListener("animationstart", b),
          i.addEventListener("animationcancel", x),
          i.addEventListener("animationend", x),
          () => {
              g.clearTimeout(h),
              i.removeEventListener("animationstart", b),
              i.removeEventListener("animationcancel", x),
              i.removeEventListener("animationend", x)
          }
      } else
          p("ANIMATION_END")
  }
  , [i, p]),
  {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: w.useCallback(h => {
          o.current = h ? getComputedStyle(h) : null,
          s(h)
      }
      , [])
  }
}
function al(e) {
  return e?.animationName || "none"
}
function SM(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
    , s = i && "isReactWarning"in i && i.isReactWarning;
  return s ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
  s = i && "isReactWarning"in i && i.isReactWarning,
  s ? e.props.ref : e.props.ref || e.ref)
}
var wM = Symbol("radix.slottable");
function TM(e) {
  const i = ({children: s}) => y.jsx(y.Fragment, {
      children: s
  });
  return i.displayName = `${e}.Slottable`,
  i.__radixId = wM,
  i
}
var EM = Object.freeze({
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
})
, CM = "VisuallyHidden"
, Eb = w.forwardRef( (e, i) => y.jsx(Ri.span, {
  ...e,
  ref: i,
  style: {
      ...EM,
      ...e.style
  }
}));
Eb.displayName = CM;
var AM = Eb
, [Pl] = Dl("Tooltip", [pb])
, Xd = pb()
, Cb = "TooltipProvider"
, NM = 700
, Ev = "tooltip.open"
, [MM,Ab] = Pl(Cb)
, Nb = e => {
  const {__scopeTooltip: i, delayDuration: s=NM, skipDelayDuration: o=300, disableHoverableContent: l=!1, children: f} = e
    , d = w.useRef(!0)
    , m = w.useRef(!1)
    , p = w.useRef(0);
  return w.useEffect( () => {
      const h = p.current;
      return () => window.clearTimeout(h)
  }
  , []),
  y.jsx(MM, {
      scope: i,
      isOpenDelayedRef: d,
      delayDuration: s,
      onOpen: w.useCallback( () => {
          window.clearTimeout(p.current),
          d.current = !1
      }
      , []),
      onClose: w.useCallback( () => {
          window.clearTimeout(p.current),
          p.current = window.setTimeout( () => d.current = !0, o)
      }
      , [o]),
      isPointerInTransitRef: m,
      onPointerInTransitChange: w.useCallback(h => {
          m.current = h
      }
      , []),
      disableHoverableContent: l,
      children: f
  })
}
;
Nb.displayName = Cb;
var Mb = "Tooltip"
, [x5,jr] = Pl(Mb)
, id = "TooltipTrigger"
, jM = w.forwardRef( (e, i) => {
  const {__scopeTooltip: s, ...o} = e
    , l = jr(id, s)
    , f = Ab(id, s)
    , d = Xd(s)
    , m = w.useRef(null)
    , p = Ae(i, m, l.onTriggerChange)
    , h = w.useRef(!1)
    , g = w.useRef(!1)
    , x = w.useCallback( () => h.current = !1, []);
  return w.useEffect( () => () => document.removeEventListener("pointerup", x), [x]),
  y.jsx(pM, {
      asChild: !0,
      ...d,
      children: y.jsx(Ri.button, {
          "aria-describedby": l.open ? l.contentId : void 0,
          "data-state": l.stateAttribute,
          ...o,
          ref: p,
          onPointerMove: Ka(e.onPointerMove, b => {
              b.pointerType !== "touch" && !g.current && !f.isPointerInTransitRef.current && (l.onTriggerEnter(),
              g.current = !0)
          }
          ),
          onPointerLeave: Ka(e.onPointerLeave, () => {
              l.onTriggerLeave(),
              g.current = !1
          }
          ),
          onPointerDown: Ka(e.onPointerDown, () => {
              l.open && l.onClose(),
              h.current = !0,
              document.addEventListener("pointerup", x, {
                  once: !0
              })
          }
          ),
          onFocus: Ka(e.onFocus, () => {
              h.current || l.onOpen()
          }
          ),
          onBlur: Ka(e.onBlur, l.onClose),
          onClick: Ka(e.onClick, l.onClose)
      })
  })
}
);
jM.displayName = id;
var Fd = "TooltipPortal"
, [RM,OM] = Pl(Fd, {
  forceMount: void 0
})
, jb = e => {
  const {__scopeTooltip: i, forceMount: s, children: o, container: l} = e
    , f = jr(Fd, i);
  return y.jsx(RM, {
      scope: i,
      forceMount: s,
      children: y.jsx(Yd, {
          present: s || f.open,
          children: y.jsx(Tb, {
              asChild: !0,
              container: l,
              children: o
          })
      })
  })
}
;
jb.displayName = Fd;
var is = "TooltipContent"
, Rb = w.forwardRef( (e, i) => {
  const s = OM(is, e.__scopeTooltip)
    , {forceMount: o=s.forceMount, side: l="top", ...f} = e
    , d = jr(is, e.__scopeTooltip);
  return y.jsx(Yd, {
      present: o || d.open,
      children: d.disableHoverableContent ? y.jsx(Ob, {
          side: l,
          ...f,
          ref: i
      }) : y.jsx(DM, {
          side: l,
          ...f,
          ref: i
      })
  })
}
)
, DM = w.forwardRef( (e, i) => {
  const s = jr(is, e.__scopeTooltip)
    , o = Ab(is, e.__scopeTooltip)
    , l = w.useRef(null)
    , f = Ae(i, l)
    , [d,m] = w.useState(null)
    , {trigger: p, onClose: h} = s
    , g = l.current
    , {onPointerInTransitChange: x} = o
    , b = w.useCallback( () => {
      m(null),
      x(!1)
  }
  , [x])
    , T = w.useCallback( (C, E) => {
      const N = C.currentTarget
        , O = {
          x: C.clientX,
          y: C.clientY
      }
        , z = BM(O, N.getBoundingClientRect())
        , D = UM(O, z)
        , q = kM(E.getBoundingClientRect())
        , G = HM([...D, ...q]);
      m(G),
      x(!0)
  }
  , [x]);
  return w.useEffect( () => () => b(), [b]),
  w.useEffect( () => {
      if (p && g) {
          const C = N => T(N, g)
            , E = N => T(N, p);
          return p.addEventListener("pointerleave", C),
          g.addEventListener("pointerleave", E),
          () => {
              p.removeEventListener("pointerleave", C),
              g.removeEventListener("pointerleave", E)
          }
      }
  }
  , [p, g, T, b]),
  w.useEffect( () => {
      if (d) {
          const C = E => {
              const N = E.target
                , O = {
                  x: E.clientX,
                  y: E.clientY
              }
                , z = p?.contains(N) || g?.contains(N)
                , D = !PM(O, d);
              z ? b() : D && (b(),
              h())
          }
          ;
          return document.addEventListener("pointermove", C),
          () => document.removeEventListener("pointermove", C)
      }
  }
  , [p, g, d, h, b]),
  y.jsx(Ob, {
      ...e,
      ref: f
  })
}
)
, [_M,zM] = Pl(Mb, {
  isInside: !1
})
, LM = TM("TooltipContent")
, Ob = w.forwardRef( (e, i) => {
  const {__scopeTooltip: s, children: o, "aria-label": l, onEscapeKeyDown: f, onPointerDownOutside: d, ...m} = e
    , p = jr(is, s)
    , h = Xd(s)
    , {onClose: g} = p;
  return w.useEffect( () => (document.addEventListener(Ev, g),
  () => document.removeEventListener(Ev, g)), [g]),
  w.useEffect( () => {
      if (p.trigger) {
          const x = b => {
              b.target?.contains(p.trigger) && g()
          }
          ;
          return window.addEventListener("scroll", x, {
              capture: !0
          }),
          () => window.removeEventListener("scroll", x, {
              capture: !0
          })
      }
  }
  , [p.trigger, g]),
  y.jsx(Ix, {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onEscapeKeyDown: f,
      onPointerDownOutside: d,
      onFocusOutside: x => x.preventDefault(),
      onDismiss: g,
      children: y.jsxs(yM, {
          "data-state": p.stateAttribute,
          ...h,
          ...m,
          ref: i,
          style: {
              ...m.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
          },
          children: [y.jsx(LM, {
              children: o
          }), y.jsx(_M, {
              scope: s,
              isInside: !0,
              children: y.jsx(AM, {
                  id: p.contentId,
                  role: "tooltip",
                  children: l || o
              })
          })]
      })
  })
}
);
Rb.displayName = is;
var Db = "TooltipArrow"
, VM = w.forwardRef( (e, i) => {
  const {__scopeTooltip: s, ...o} = e
    , l = Xd(s);
  return zM(Db, s).isInside ? null : y.jsx(gM, {
      ...l,
      ...o,
      ref: i
  })
}
);
VM.displayName = Db;
function BM(e, i) {
  const s = Math.abs(i.top - e.y)
    , o = Math.abs(i.bottom - e.y)
    , l = Math.abs(i.right - e.x)
    , f = Math.abs(i.left - e.x);
  switch (Math.min(s, o, l, f)) {
  case f:
      return "left";
  case l:
      return "right";
  case s:
      return "top";
  case o:
      return "bottom";
  default:
      throw new Error("unreachable")
  }
}
function UM(e, i, s=5) {
  const o = [];
  switch (i) {
  case "top":
      o.push({
          x: e.x - s,
          y: e.y + s
      }, {
          x: e.x + s,
          y: e.y + s
      });
      break;
  case "bottom":
      o.push({
          x: e.x - s,
          y: e.y - s
      }, {
          x: e.x + s,
          y: e.y - s
      });
      break;
  case "left":
      o.push({
          x: e.x + s,
          y: e.y - s
      }, {
          x: e.x + s,
          y: e.y + s
      });
      break;
  case "right":
      o.push({
          x: e.x - s,
          y: e.y - s
      }, {
          x: e.x - s,
          y: e.y + s
      });
      break
  }
  return o
}
function kM(e) {
  const {top: i, right: s, bottom: o, left: l} = e;
  return [{
      x: l,
      y: i
  }, {
      x: s,
      y: i
  }, {
      x: s,
      y: o
  }, {
      x: l,
      y: o
  }]
}
function PM(e, i) {
  const {x: s, y: o} = e;
  let l = !1;
  for (let f = 0, d = i.length - 1; f < i.length; d = f++) {
      const m = i[f]
        , p = i[d]
        , h = m.x
        , g = m.y
        , x = p.x
        , b = p.y;
      g > o != b > o && s < (x - h) * (o - g) / (b - g) + h && (l = !l)
  }
  return l
}
function HM(e) {
  const i = e.slice();
  return i.sort( (s, o) => s.x < o.x ? -1 : s.x > o.x ? 1 : s.y < o.y ? -1 : s.y > o.y ? 1 : 0),
  qM(i)
}
function qM(e) {
  if (e.length <= 1)
      return e.slice();
  const i = [];
  for (let o = 0; o < e.length; o++) {
      const l = e[o];
      for (; i.length >= 2; ) {
          const f = i[i.length - 1]
            , d = i[i.length - 2];
          if ((f.x - d.x) * (l.y - d.y) >= (f.y - d.y) * (l.x - d.x))
              i.pop();
          else
              break
      }
      i.push(l)
  }
  i.pop();
  const s = [];
  for (let o = e.length - 1; o >= 0; o--) {
      const l = e[o];
      for (; s.length >= 2; ) {
          const f = s[s.length - 1]
            , d = s[s.length - 2];
          if ((f.x - d.x) * (l.y - d.y) >= (f.y - d.y) * (l.x - d.x))
              s.pop();
          else
              break
      }
      s.push(l)
  }
  return s.pop(),
  i.length === 1 && s.length === 1 && i[0].x === s[0].x && i[0].y === s[0].y ? i : i.concat(s)
}
var GM = Nb
, YM = jb
, _b = Rb;
const XM = GM
, FM = w.forwardRef( ({className: e, sideOffset: i=4, ...s}, o) => y.jsx(YM, {
  children: y.jsx(_b, {
      ref: o,
      sideOffset: i,
      className: ee("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
      ...s
  })
}));
FM.displayName = _b.displayName;
const Cv = {
  companyName: "Lawn Care OS",
  logoUrl: null,
  primaryColor: "#064e3b",
  accentColor: "#22c55e",
  backgroundColor: "#ffffff",
  customWelcomeMessage: "Welcome to Lawn Care OS",
  supportEmail: "support@lawncareOS.com",
  removeBranding: !1
}
, zb = w.createContext(void 0);
function QM({children: e}) {
  const [i,s] = w.useState( () => {
      const f = localStorage.getItem("lawncare-branding");
      return f ? JSON.parse(f) : Cv
  }
  )
    , o = w.useCallback(f => {
      s(d => {
          const m = {
              ...d,
              ...f
          };
          return localStorage.setItem("lawncare-branding", JSON.stringify(m)),
          m
      }
      )
  }
  , [])
    , l = w.useCallback( () => {
      s(Cv),
      localStorage.removeItem("lawncare-branding")
  }
  , []);
  return y.jsx(zb.Provider, {
      value: {
          branding: i,
          updateBranding: o,
          resetBranding: l
      },
      children: e
  })
}
function Hl() {
  const e = w.useContext(zb);
  if (!e)
      throw new Error("useBranding must be used within BrandingProvider");
  return e
}
const ke = w.forwardRef( ({className: e, ...i}, s) => y.jsx("div", {
  ref: s,
  className: ee("rounded-xl border bg-card text-card-foreground shadow", e),
  ...i
}));
ke.displayName = "Card";
const en = w.forwardRef( ({className: e, ...i}, s) => y.jsx("div", {
  ref: s,
  className: ee("flex flex-col space-y-1.5 p-6", e),
  ...i
}));
en.displayName = "CardHeader";
const fn = w.forwardRef( ({className: e, ...i}, s) => y.jsx("div", {
  ref: s,
  className: ee("font-semibold leading-none tracking-tight", e),
  ...i
}));
fn.displayName = "CardTitle";
const la = w.forwardRef( ({className: e, ...i}, s) => y.jsx("div", {
  ref: s,
  className: ee("text-sm text-muted-foreground", e),
  ...i
}));
la.displayName = "CardDescription";
const Pe = w.forwardRef( ({className: e, ...i}, s) => y.jsx("div", {
  ref: s,
  className: ee("p-6 pt-0", e),
  ...i
}));
Pe.displayName = "CardContent";
const Qd = w.forwardRef( ({className: e, ...i}, s) => y.jsx("div", {
  ref: s,
  className: ee("flex items-center p-6 pt-0", e),
  ...i
}));
Qd.displayName = "CardFooter";
function KM() {
  return y.jsx("div", {
      className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
      children: y.jsx(ke, {
          className: "w-full max-w-md mx-4",
          children: y.jsxs(Pe, {
              className: "pt-6",
              children: [y.jsxs("div", {
                  className: "flex mb-4 gap-2",
                  children: [y.jsx(sC, {
                      className: "h-8 w-8 text-red-500"
                  }), y.jsx("h1", {
                      className: "text-2xl font-bold text-gray-900",
                      children: "404 Page Not Found"
                  })]
              }), y.jsx("p", {
                  className: "mt-4 text-sm text-gray-600",
                  children: "Did you forget to add the page to the router?"
              })]
          })
      })
  })
}
var ZM = Symbol.for("react.lazy")
, Sl = H0[" use ".trim().toString()];
function $M(e) {
  return typeof e == "object" && e !== null && "then"in e
}
function Lb(e) {
  return e != null && typeof e == "object" && "$$typeof"in e && e.$$typeof === ZM && "_payload"in e && $M(e._payload)
}
function Vb(e) {
  const i = JM(e)
    , s = w.forwardRef( (o, l) => {
      let {children: f, ...d} = o;
      Lb(f) && typeof Sl == "function" && (f = Sl(f._payload));
      const m = w.Children.toArray(f)
        , p = m.find(tj);
      if (p) {
          const h = p.props.children
            , g = m.map(x => x === p ? w.Children.count(h) > 1 ? w.Children.only(null) : w.isValidElement(h) ? h.props.children : null : x);
          return y.jsx(i, {
              ...d,
              ref: l,
              children: w.isValidElement(h) ? w.cloneElement(h, void 0, g) : null
          })
      }
      return y.jsx(i, {
          ...d,
          ref: l,
          children: f
      })
  }
  );
  return s.displayName = `${e}.Slot`,
  s
}
var WM = Vb("Slot");
function JM(e) {
  const i = w.forwardRef( (s, o) => {
      let {children: l, ...f} = s;
      if (Lb(l) && typeof Sl == "function" && (l = Sl(l._payload)),
      w.isValidElement(l)) {
          const d = nj(l)
            , m = ej(f, l.props);
          return l.type !== w.Fragment && (m.ref = o ? Ol(o, d) : d),
          w.cloneElement(l, m)
      }
      return w.Children.count(l) > 1 ? w.Children.only(null) : null
  }
  );
  return i.displayName = `${e}.SlotClone`,
  i
}
var IM = Symbol("radix.slottable");
function tj(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === IM
}
function ej(e, i) {
  const s = {
      ...i
  };
  for (const o in i) {
      const l = e[o]
        , f = i[o];
      /^on[A-Z]/.test(o) ? l && f ? s[o] = (...m) => {
          const p = f(...m);
          return l(...m),
          p
      }
      : l && (s[o] = l) : o === "style" ? s[o] = {
          ...l,
          ...f
      } : o === "className" && (s[o] = [l, f].filter(Boolean).join(" "))
  }
  return {
      ...e,
      ...s
  }
}
function nj(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
    , s = i && "isReactWarning"in i && i.isReactWarning;
  return s ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
  s = i && "isReactWarning"in i && i.isReactWarning,
  s ? e.props.ref : e.props.ref || e.ref)
}
const ij = Ll("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
  variants: {
      variant: {
          default: "bg-primary text-primary-foreground border border-primary-border",
          destructive: "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
          outline: " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
          secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
          link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9"
      }
  },
  defaultVariants: {
      variant: "default",
      size: "default"
  }
})
, Ee = w.forwardRef( ({className: e, variant: i, size: s, asChild: o=!1, ...l}, f) => {
  const d = o ? WM : "button";
  return y.jsx(d, {
      className: ee(ij({
          variant: i,
          size: s,
          className: e
      })),
      ref: f,
      ...l
  })
}
);
Ee.displayName = "Button";
const Kd = w.createContext({});
function Zd(e) {
  const i = w.useRef(null);
  return i.current === null && (i.current = e()),
  i.current
}
const $d = typeof window < "u"
, Bb = $d ? w.useLayoutEffect : w.useEffect
, ql = w.createContext(null);
function Wd(e, i) {
  e.indexOf(i) === -1 && e.push(i)
}
function Jd(e, i) {
  const s = e.indexOf(i);
  s > -1 && e.splice(s, 1)
}
const Zn = (e, i, s) => s > i ? i : s < e ? e : s;
let Id = () => {}
;
const $n = {}
, Ub = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function kb(e) {
  return typeof e == "object" && e !== null
}
const Pb = e => /^0[^.\s]+$/u.test(e);
function th(e) {
  let i;
  return () => (i === void 0 && (i = e()),
  i)
}
const an = e => e
, aj = (e, i) => s => i(e(s))
, Rr = (...e) => e.reduce(aj)
, Sr = (e, i, s) => {
  const o = i - e;
  return o === 0 ? 1 : (s - e) / o
}
;
class eh {
  constructor() {
      this.subscriptions = []
  }
  add(i) {
      return Wd(this.subscriptions, i),
      () => Jd(this.subscriptions, i)
  }
  notify(i, s, o) {
      const l = this.subscriptions.length;
      if (l)
          if (l === 1)
              this.subscriptions[0](i, s, o);
          else
              for (let f = 0; f < l; f++) {
                  const d = this.subscriptions[f];
                  d && d(i, s, o)
              }
  }
  getSize() {
      return this.subscriptions.length
  }
  clear() {
      this.subscriptions.length = 0
  }
}
const wn = e => e * 1e3
, nn = e => e / 1e3;
function Hb(e, i) {
  return i ? e * (1e3 / i) : 0
}
const qb = (e, i, s) => (((1 - 3 * s + 3 * i) * e + (3 * s - 6 * i)) * e + 3 * i) * e
, sj = 1e-7
, rj = 12;
function oj(e, i, s, o, l) {
  let f, d, m = 0;
  do
      d = i + (s - i) / 2,
      f = qb(d, o, l) - e,
      f > 0 ? s = d : i = d;
  while (Math.abs(f) > sj && ++m < rj);
  return d
}
function Or(e, i, s, o) {
  if (e === i && s === o)
      return an;
  const l = f => oj(f, 0, 1, e, s);
  return f => f === 0 || f === 1 ? f : qb(l(f), i, o)
}
const Gb = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2
, Yb = e => i => 1 - e(1 - i)
, Xb = Or(.33, 1.53, .69, .99)
, nh = Yb(Xb)
, Fb = Gb(nh)
, Qb = e => (e *= 2) < 1 ? .5 * nh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
, ih = e => 1 - Math.sin(Math.acos(e))
, Kb = Yb(ih)
, Zb = Gb(ih)
, lj = Or(.42, 0, 1, 1)
, cj = Or(0, 0, .58, 1)
, $b = Or(.42, 0, .58, 1)
, uj = e => Array.isArray(e) && typeof e[0] != "number"
, Wb = e => Array.isArray(e) && typeof e[0] == "number"
, fj = {
  linear: an,
  easeIn: lj,
  easeInOut: $b,
  easeOut: cj,
  circIn: ih,
  circInOut: Zb,
  circOut: Kb,
  backIn: nh,
  backInOut: Fb,
  backOut: Xb,
  anticipate: Qb
}
, dj = e => typeof e == "string"
, Av = e => {
  if (Wb(e)) {
      Id(e.length === 4);
      const [i,s,o,l] = e;
      return Or(i, s, o, l)
  } else if (dj(e))
      return fj[e];
  return e
}
, sl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function hj(e, i) {
  let s = new Set
    , o = new Set
    , l = !1
    , f = !1;
  const d = new WeakSet;
  let m = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
  };
  function p(g) {
      d.has(g) && (h.schedule(g),
      e()),
      g(m)
  }
  const h = {
      schedule: (g, x=!1, b=!1) => {
          const C = b && l ? s : o;
          return x && d.add(g),
          C.has(g) || C.add(g),
          g
      }
      ,
      cancel: g => {
          o.delete(g),
          d.delete(g)
      }
      ,
      process: g => {
          if (m = g,
          l) {
              f = !0;
              return
          }
          l = !0,
          [s,o] = [o, s],
          s.forEach(p),
          s.clear(),
          l = !1,
          f && (f = !1,
          h.process(g))
      }
  };
  return h
}
const mj = 40;
function Jb(e, i) {
  let s = !1
    , o = !0;
  const l = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
  }
    , f = () => s = !0
    , d = sl.reduce( (D, q) => (D[q] = hj(f),
  D), {})
    , {setup: m, read: p, resolveKeyframes: h, preUpdate: g, update: x, preRender: b, render: T, postRender: C} = d
    , E = () => {
      const D = $n.useManualTiming ? l.timestamp : performance.now();
      s = !1,
      $n.useManualTiming || (l.delta = o ? 1e3 / 60 : Math.max(Math.min(D - l.timestamp, mj), 1)),
      l.timestamp = D,
      l.isProcessing = !0,
      m.process(l),
      p.process(l),
      h.process(l),
      g.process(l),
      x.process(l),
      b.process(l),
      T.process(l),
      C.process(l),
      l.isProcessing = !1,
      s && i && (o = !1,
      e(E))
  }
    , N = () => {
      s = !0,
      o = !0,
      l.isProcessing || e(E)
  }
  ;
  return {
      schedule: sl.reduce( (D, q) => {
          const G = d[q];
          return D[q] = (Z, k=!1, H=!1) => (s || N(),
          G.schedule(Z, k, H)),
          D
      }
      , {}),
      cancel: D => {
          for (let q = 0; q < sl.length; q++)
              d[sl[q]].cancel(D)
      }
      ,
      state: l,
      steps: d
  }
}
const {schedule: Ht, cancel: Ni, state: fe, steps: jf} = Jb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : an, !0);
let dl;
function pj() {
  dl = void 0
}
const Ce = {
  now: () => (dl === void 0 && Ce.set(fe.isProcessing || $n.useManualTiming ? fe.timestamp : performance.now()),
  dl),
  set: e => {
      dl = e,
      queueMicrotask(pj)
  }
}
, Ib = e => i => typeof i == "string" && i.startsWith(e)
, ah = Ib("--")
, yj = Ib("var(--")
, sh = e => yj(e) ? gj.test(e.split("/*")[0].trim()) : !1
, gj = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
, us = {
  test: e => typeof e == "number",
  parse: parseFloat,
  transform: e => e
}
, wr = {
  ...us,
  transform: e => Zn(0, 1, e)
}
, rl = {
  ...us,
  default: 1
}
, fr = e => Math.round(e * 1e5) / 1e5
, rh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vj(e) {
  return e == null
}
const xj = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
, oh = (e, i) => s => !!(typeof s == "string" && xj.test(s) && s.startsWith(e) || i && !vj(s) && Object.prototype.hasOwnProperty.call(s, i))
, t1 = (e, i, s) => o => {
  if (typeof o != "string")
      return o;
  const [l,f,d,m] = o.match(rh);
  return {
      [e]: parseFloat(l),
      [i]: parseFloat(f),
      [s]: parseFloat(d),
      alpha: m !== void 0 ? parseFloat(m) : 1
  }
}
, bj = e => Zn(0, 255, e)
, Rf = {
  ...us,
  transform: e => Math.round(bj(e))
}
, ia = {
  test: oh("rgb", "red"),
  parse: t1("red", "green", "blue"),
  transform: ({red: e, green: i, blue: s, alpha: o=1}) => "rgba(" + Rf.transform(e) + ", " + Rf.transform(i) + ", " + Rf.transform(s) + ", " + fr(wr.transform(o)) + ")"
};
function Sj(e) {
  let i = ""
    , s = ""
    , o = ""
    , l = "";
  return e.length > 5 ? (i = e.substring(1, 3),
  s = e.substring(3, 5),
  o = e.substring(5, 7),
  l = e.substring(7, 9)) : (i = e.substring(1, 2),
  s = e.substring(2, 3),
  o = e.substring(3, 4),
  l = e.substring(4, 5),
  i += i,
  s += s,
  o += o,
  l += l),
  {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(o, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1
  }
}
const ad = {
  test: oh("#"),
  parse: Sj,
  transform: ia.transform
}
, Dr = e => ({
  test: i => typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: i => `${i}${e}`
})
, Ei = Dr("deg")
, Tn = Dr("%")
, ft = Dr("px")
, wj = Dr("vh")
, Tj = Dr("vw")
, Nv = {
  ...Tn,
  parse: e => Tn.parse(e) / 100,
  transform: e => Tn.transform(e * 100)
}
, Za = {
  test: oh("hsl", "hue"),
  parse: t1("hue", "saturation", "lightness"),
  transform: ({hue: e, saturation: i, lightness: s, alpha: o=1}) => "hsla(" + Math.round(e) + ", " + Tn.transform(fr(i)) + ", " + Tn.transform(fr(s)) + ", " + fr(wr.transform(o)) + ")"
}
, te = {
  test: e => ia.test(e) || ad.test(e) || Za.test(e),
  parse: e => ia.test(e) ? ia.parse(e) : Za.test(e) ? Za.parse(e) : ad.parse(e),
  transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? ia.transform(e) : Za.transform(e),
  getAnimatableNone: e => {
      const i = te.parse(e);
      return i.alpha = 0,
      te.transform(i)
  }
}
, Ej = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Cj(e) {
  return isNaN(e) && typeof e == "string" && (e.match(rh)?.length || 0) + (e.match(Ej)?.length || 0) > 0
}
const e1 = "number"
, n1 = "color"
, Aj = "var"
, Nj = "var("
, Mv = "${}"
, Mj = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Tr(e) {
  const i = e.toString()
    , s = []
    , o = {
      color: [],
      number: [],
      var: []
  }
    , l = [];
  let f = 0;
  const m = i.replace(Mj, p => (te.test(p) ? (o.color.push(f),
  l.push(n1),
  s.push(te.parse(p))) : p.startsWith(Nj) ? (o.var.push(f),
  l.push(Aj),
  s.push(p)) : (o.number.push(f),
  l.push(e1),
  s.push(parseFloat(p))),
  ++f,
  Mv)).split(Mv);
  return {
      values: s,
      split: m,
      indexes: o,
      types: l
  }
}
function i1(e) {
  return Tr(e).values
}
function a1(e) {
  const {split: i, types: s} = Tr(e)
    , o = i.length;
  return l => {
      let f = "";
      for (let d = 0; d < o; d++)
          if (f += i[d],
          l[d] !== void 0) {
              const m = s[d];
              m === e1 ? f += fr(l[d]) : m === n1 ? f += te.transform(l[d]) : f += l[d]
          }
      return f
  }
}
const jj = e => typeof e == "number" ? 0 : te.test(e) ? te.getAnimatableNone(e) : e;
function Rj(e) {
  const i = i1(e);
  return a1(e)(i.map(jj))
}
const Mi = {
  test: Cj,
  parse: i1,
  createTransformer: a1,
  getAnimatableNone: Rj
};
function Of(e, i, s) {
  return s < 0 && (s += 1),
  s > 1 && (s -= 1),
  s < 1 / 6 ? e + (i - e) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? e + (i - e) * (2 / 3 - s) * 6 : e
}
function Oj({hue: e, saturation: i, lightness: s, alpha: o}) {
  e /= 360,
  i /= 100,
  s /= 100;
  let l = 0
    , f = 0
    , d = 0;
  if (!i)
      l = f = d = s;
  else {
      const m = s < .5 ? s * (1 + i) : s + i - s * i
        , p = 2 * s - m;
      l = Of(p, m, e + 1 / 3),
      f = Of(p, m, e),
      d = Of(p, m, e - 1 / 3)
  }
  return {
      red: Math.round(l * 255),
      green: Math.round(f * 255),
      blue: Math.round(d * 255),
      alpha: o
  }
}
function wl(e, i) {
  return s => s > 0 ? i : e
}
const qt = (e, i, s) => e + (i - e) * s
, Df = (e, i, s) => {
  const o = e * e
    , l = s * (i * i - o) + o;
  return l < 0 ? 0 : Math.sqrt(l)
}
, Dj = [ad, ia, Za]
, _j = e => Dj.find(i => i.test(e));
function jv(e) {
  const i = _j(e);
  if (!i)
      return !1;
  let s = i.parse(e);
  return i === Za && (s = Oj(s)),
  s
}
const Rv = (e, i) => {
  const s = jv(e)
    , o = jv(i);
  if (!s || !o)
      return wl(e, i);
  const l = {
      ...s
  };
  return f => (l.red = Df(s.red, o.red, f),
  l.green = Df(s.green, o.green, f),
  l.blue = Df(s.blue, o.blue, f),
  l.alpha = qt(s.alpha, o.alpha, f),
  ia.transform(l))
}
, sd = new Set(["none", "hidden"]);
function zj(e, i) {
  return sd.has(e) ? s => s <= 0 ? e : i : s => s >= 1 ? i : e
}
function Lj(e, i) {
  return s => qt(e, i, s)
}
function lh(e) {
  return typeof e == "number" ? Lj : typeof e == "string" ? sh(e) ? wl : te.test(e) ? Rv : Uj : Array.isArray(e) ? s1 : typeof e == "object" ? te.test(e) ? Rv : Vj : wl
}
function s1(e, i) {
  const s = [...e]
    , o = s.length
    , l = e.map( (f, d) => lh(f)(f, i[d]));
  return f => {
      for (let d = 0; d < o; d++)
          s[d] = l[d](f);
      return s
  }
}
function Vj(e, i) {
  const s = {
      ...e,
      ...i
  }
    , o = {};
  for (const l in s)
      e[l] !== void 0 && i[l] !== void 0 && (o[l] = lh(e[l])(e[l], i[l]));
  return l => {
      for (const f in o)
          s[f] = o[f](l);
      return s
  }
}
function Bj(e, i) {
  const s = []
    , o = {
      color: 0,
      var: 0,
      number: 0
  };
  for (let l = 0; l < i.values.length; l++) {
      const f = i.types[l]
        , d = e.indexes[f][o[f]]
        , m = e.values[d] ?? 0;
      s[l] = m,
      o[f]++
  }
  return s
}
const Uj = (e, i) => {
  const s = Mi.createTransformer(i)
    , o = Tr(e)
    , l = Tr(i);
  return o.indexes.var.length === l.indexes.var.length && o.indexes.color.length === l.indexes.color.length && o.indexes.number.length >= l.indexes.number.length ? sd.has(e) && !l.values.length || sd.has(i) && !o.values.length ? zj(e, i) : Rr(s1(Bj(o, l), l.values), s) : wl(e, i)
}
;
function r1(e, i, s) {
  return typeof e == "number" && typeof i == "number" && typeof s == "number" ? qt(e, i, s) : lh(e)(e, i)
}
const kj = e => {
  const i = ({timestamp: s}) => e(s);
  return {
      start: (s=!0) => Ht.update(i, s),
      stop: () => Ni(i),
      now: () => fe.isProcessing ? fe.timestamp : Ce.now()
  }
}
, o1 = (e, i, s=10) => {
  let o = "";
  const l = Math.max(Math.round(i / s), 2);
  for (let f = 0; f < l; f++)
      o += Math.round(e(f / (l - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`
}
, Tl = 2e4;
function ch(e) {
  let i = 0;
  const s = 50;
  let o = e.next(i);
  for (; !o.done && i < Tl; )
      i += s,
      o = e.next(i);
  return i >= Tl ? 1 / 0 : i
}
function Pj(e, i=100, s) {
  const o = s({
      ...e,
      keyframes: [0, i]
  })
    , l = Math.min(ch(o), Tl);
  return {
      type: "keyframes",
      ease: f => o.next(l * f).value / i,
      duration: nn(l)
  }
}
const Hj = 5;
function l1(e, i, s) {
  const o = Math.max(i - Hj, 0);
  return Hb(s - e(o), i - o)
}
const Xt = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed: {
      granular: .01,
      default: 2
  },
  restDelta: {
      granular: .005,
      default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
}
, _f = .001;
function qj({duration: e=Xt.duration, bounce: i=Xt.bounce, velocity: s=Xt.velocity, mass: o=Xt.mass}) {
  let l, f, d = 1 - i;
  d = Zn(Xt.minDamping, Xt.maxDamping, d),
  e = Zn(Xt.minDuration, Xt.maxDuration, nn(e)),
  d < 1 ? (l = h => {
      const g = h * d
        , x = g * e
        , b = g - s
        , T = rd(h, d)
        , C = Math.exp(-x);
      return _f - b / T * C
  }
  ,
  f = h => {
      const x = h * d * e
        , b = x * s + s
        , T = Math.pow(d, 2) * Math.pow(h, 2) * e
        , C = Math.exp(-x)
        , E = rd(Math.pow(h, 2), d);
      return (-l(h) + _f > 0 ? -1 : 1) * ((b - T) * C) / E
  }
  ) : (l = h => {
      const g = Math.exp(-h * e)
        , x = (h - s) * e + 1;
      return -_f + g * x
  }
  ,
  f = h => {
      const g = Math.exp(-h * e)
        , x = (s - h) * (e * e);
      return g * x
  }
  );
  const m = 5 / e
    , p = Yj(l, f, m);
  if (e = wn(e),
  isNaN(p))
      return {
          stiffness: Xt.stiffness,
          damping: Xt.damping,
          duration: e
      };
  {
      const h = Math.pow(p, 2) * o;
      return {
          stiffness: h,
          damping: d * 2 * Math.sqrt(o * h),
          duration: e
      }
  }
}
const Gj = 12;
function Yj(e, i, s) {
  let o = s;
  for (let l = 1; l < Gj; l++)
      o = o - e(o) / i(o);
  return o
}
function rd(e, i) {
  return e * Math.sqrt(1 - i * i)
}
const Xj = ["duration", "bounce"]
, Fj = ["stiffness", "damping", "mass"];
function Ov(e, i) {
  return i.some(s => e[s] !== void 0)
}
function Qj(e) {
  let i = {
      velocity: Xt.velocity,
      stiffness: Xt.stiffness,
      damping: Xt.damping,
      mass: Xt.mass,
      isResolvedFromDuration: !1,
      ...e
  };
  if (!Ov(e, Fj) && Ov(e, Xj))
      if (e.visualDuration) {
          const s = e.visualDuration
            , o = 2 * Math.PI / (s * 1.2)
            , l = o * o
            , f = 2 * Zn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
          i = {
              ...i,
              mass: Xt.mass,
              stiffness: l,
              damping: f
          }
      } else {
          const s = qj(e);
          i = {
              ...i,
              ...s,
              mass: Xt.mass
          },
          i.isResolvedFromDuration = !0
      }
  return i
}
function El(e=Xt.visualDuration, i=Xt.bounce) {
  const s = typeof e != "object" ? {
      visualDuration: e,
      keyframes: [0, 1],
      bounce: i
  } : e;
  let {restSpeed: o, restDelta: l} = s;
  const f = s.keyframes[0]
    , d = s.keyframes[s.keyframes.length - 1]
    , m = {
      done: !1,
      value: f
  }
    , {stiffness: p, damping: h, mass: g, duration: x, velocity: b, isResolvedFromDuration: T} = Qj({
      ...s,
      velocity: -nn(s.velocity || 0)
  })
    , C = b || 0
    , E = h / (2 * Math.sqrt(p * g))
    , N = d - f
    , O = nn(Math.sqrt(p / g))
    , z = Math.abs(N) < 5;
  o || (o = z ? Xt.restSpeed.granular : Xt.restSpeed.default),
  l || (l = z ? Xt.restDelta.granular : Xt.restDelta.default);
  let D;
  if (E < 1) {
      const G = rd(O, E);
      D = Z => {
          const k = Math.exp(-E * O * Z);
          return d - k * ((C + E * O * N) / G * Math.sin(G * Z) + N * Math.cos(G * Z))
      }
  } else if (E === 1)
      D = G => d - Math.exp(-O * G) * (N + (C + O * N) * G);
  else {
      const G = O * Math.sqrt(E * E - 1);
      D = Z => {
          const k = Math.exp(-E * O * Z)
            , H = Math.min(G * Z, 300);
          return d - k * ((C + E * O * N) * Math.sinh(H) + G * N * Math.cosh(H)) / G
      }
  }
  const q = {
      calculatedDuration: T && x || null,
      next: G => {
          const Z = D(G);
          if (T)
              m.done = G >= x;
          else {
              let k = G === 0 ? C : 0;
              E < 1 && (k = G === 0 ? wn(C) : l1(D, G, Z));
              const H = Math.abs(k) <= o
                , I = Math.abs(d - Z) <= l;
              m.done = H && I
          }
          return m.value = m.done ? d : Z,
          m
      }
      ,
      toString: () => {
          const G = Math.min(ch(q), Tl)
            , Z = o1(k => q.next(G * k).value, G, 30);
          return G + "ms " + Z
      }
      ,
      toTransition: () => {}
  };
  return q
}
El.applyToOptions = e => {
  const i = Pj(e, 100, El);
  return e.ease = i.ease,
  e.duration = wn(i.duration),
  e.type = "keyframes",
  e
}
;
function od({keyframes: e, velocity: i=0, power: s=.8, timeConstant: o=325, bounceDamping: l=10, bounceStiffness: f=500, modifyTarget: d, min: m, max: p, restDelta: h=.5, restSpeed: g}) {
  const x = e[0]
    , b = {
      done: !1,
      value: x
  }
    , T = H => m !== void 0 && H < m || p !== void 0 && H > p
    , C = H => m === void 0 ? p : p === void 0 || Math.abs(m - H) < Math.abs(p - H) ? m : p;
  let E = s * i;
  const N = x + E
    , O = d === void 0 ? N : d(N);
  O !== N && (E = O - x);
  const z = H => -E * Math.exp(-H / o)
    , D = H => O + z(H)
    , q = H => {
      const I = z(H)
        , st = D(H);
      b.done = Math.abs(I) <= h,
      b.value = b.done ? O : st
  }
  ;
  let G, Z;
  const k = H => {
      T(b.value) && (G = H,
      Z = El({
          keyframes: [b.value, C(b.value)],
          velocity: l1(D, H, b.value),
          damping: l,
          stiffness: f,
          restDelta: h,
          restSpeed: g
      }))
  }
  ;
  return k(0),
  {
      calculatedDuration: null,
      next: H => {
          let I = !1;
          return !Z && G === void 0 && (I = !0,
          q(H),
          k(H)),
          G !== void 0 && H >= G ? Z.next(H - G) : (!I && q(H),
          b)
      }
  }
}
function Kj(e, i, s) {
  const o = []
    , l = s || $n.mix || r1
    , f = e.length - 1;
  for (let d = 0; d < f; d++) {
      let m = l(e[d], e[d + 1]);
      if (i) {
          const p = Array.isArray(i) ? i[d] || an : i;
          m = Rr(p, m)
      }
      o.push(m)
  }
  return o
}
function Zj(e, i, {clamp: s=!0, ease: o, mixer: l}={}) {
  const f = e.length;
  if (Id(f === i.length),
  f === 1)
      return () => i[0];
  if (f === 2 && i[0] === i[1])
      return () => i[1];
  const d = e[0] === e[1];
  e[0] > e[f - 1] && (e = [...e].reverse(),
  i = [...i].reverse());
  const m = Kj(i, o, l)
    , p = m.length
    , h = g => {
      if (d && g < e[0])
          return i[0];
      let x = 0;
      if (p > 1)
          for (; x < e.length - 2 && !(g < e[x + 1]); x++)
              ;
      const b = Sr(e[x], e[x + 1], g);
      return m[x](b)
  }
  ;
  return s ? g => h(Zn(e[0], e[f - 1], g)) : h
}
function $j(e, i) {
  const s = e[e.length - 1];
  for (let o = 1; o <= i; o++) {
      const l = Sr(0, i, o);
      e.push(qt(s, 1, l))
  }
}
function Wj(e) {
  const i = [0];
  return $j(i, e.length - 1),
  i
}
function Jj(e, i) {
  return e.map(s => s * i)
}
function Ij(e, i) {
  return e.map( () => i || $b).splice(0, e.length - 1)
}
function dr({duration: e=300, keyframes: i, times: s, ease: o="easeInOut"}) {
  const l = uj(o) ? o.map(Av) : Av(o)
    , f = {
      done: !1,
      value: i[0]
  }
    , d = Jj(s && s.length === i.length ? s : Wj(i), e)
    , m = Zj(d, i, {
      ease: Array.isArray(l) ? l : Ij(i, l)
  });
  return {
      calculatedDuration: e,
      next: p => (f.value = m(p),
      f.done = p >= e,
      f)
  }
}
const tR = e => e !== null;
function uh(e, {repeat: i, repeatType: s="loop"}, o, l=1) {
  const f = e.filter(tR)
    , m = l < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : f.length - 1;
  return !m || o === void 0 ? f[m] : o
}
const eR = {
  decay: od,
  inertia: od,
  tween: dr,
  keyframes: dr,
  spring: El
};
function c1(e) {
  typeof e.type == "string" && (e.type = eR[e.type])
}
class fh {
  constructor() {
      this.updateFinished()
  }
  get finished() {
      return this._finished
  }
  updateFinished() {
      this._finished = new Promise(i => {
          this.resolve = i
      }
      )
  }
  notifyFinished() {
      this.resolve()
  }
  then(i, s) {
      return this.finished.then(i, s)
  }
}
const nR = e => e / 100;
class dh extends fh {
  constructor(i) {
      super(),
      this.state = "idle",
      this.startTime = null,
      this.isStopped = !1,
      this.currentTime = 0,
      this.holdTime = null,
      this.playbackSpeed = 1,
      this.stop = () => {
          const {motionValue: s} = this.options;
          s && s.updatedAt !== Ce.now() && this.tick(Ce.now()),
          this.isStopped = !0,
          this.state !== "idle" && (this.teardown(),
          this.options.onStop?.())
      }
      ,
      this.options = i,
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause()
  }
  initAnimation() {
      const {options: i} = this;
      c1(i);
      const {type: s=dr, repeat: o=0, repeatDelay: l=0, repeatType: f, velocity: d=0} = i;
      let {keyframes: m} = i;
      const p = s || dr;
      p !== dr && typeof m[0] != "number" && (this.mixKeyframes = Rr(nR, r1(m[0], m[1])),
      m = [0, 100]);
      const h = p({
          ...i,
          keyframes: m
      });
      f === "mirror" && (this.mirroredGenerator = p({
          ...i,
          keyframes: [...m].reverse(),
          velocity: -d
      })),
      h.calculatedDuration === null && (h.calculatedDuration = ch(h));
      const {calculatedDuration: g} = h;
      this.calculatedDuration = g,
      this.resolvedDuration = g + l,
      this.totalDuration = this.resolvedDuration * (o + 1) - l,
      this.generator = h
  }
  updateTime(i) {
      const s = Math.round(i - this.startTime) * this.playbackSpeed;
      this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
  }
  tick(i, s=!1) {
      const {generator: o, totalDuration: l, mixKeyframes: f, mirroredGenerator: d, resolvedDuration: m, calculatedDuration: p} = this;
      if (this.startTime === null)
          return o.next(0);
      const {delay: h=0, keyframes: g, repeat: x, repeatType: b, repeatDelay: T, type: C, onUpdate: E, finalKeyframe: N} = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - l / this.speed, this.startTime)),
      s ? this.currentTime = i : this.updateTime(i);
      const O = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1)
        , z = this.playbackSpeed >= 0 ? O < 0 : O > l;
      this.currentTime = Math.max(O, 0),
      this.state === "finished" && this.holdTime === null && (this.currentTime = l);
      let D = this.currentTime
        , q = o;
      if (x) {
          const H = Math.min(this.currentTime, l) / m;
          let I = Math.floor(H)
            , st = H % 1;
          !st && H >= 1 && (st = 1),
          st === 1 && I--,
          I = Math.min(I, x + 1),
          !!(I % 2) && (b === "reverse" ? (st = 1 - st,
          T && (st -= T / m)) : b === "mirror" && (q = d)),
          D = Zn(0, 1, st) * m
      }
      const G = z ? {
          done: !1,
          value: g[0]
      } : q.next(D);
      f && (G.value = f(G.value));
      let {done: Z} = G;
      !z && p !== null && (Z = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && Z);
      return k && C !== od && (G.value = uh(g, this.options, N, this.speed)),
      E && E(G.value),
      k && this.finish(),
      G
  }
  then(i, s) {
      return this.finished.then(i, s)
  }
  get duration() {
      return nn(this.calculatedDuration)
  }
  get iterationDuration() {
      const {delay: i=0} = this.options || {};
      return this.duration + nn(i)
  }
  get time() {
      return nn(this.currentTime)
  }
  set time(i) {
      i = wn(i),
      this.currentTime = i,
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1)
  }
  get speed() {
      return this.playbackSpeed
  }
  set speed(i) {
      this.updateTime(Ce.now());
      const s = this.playbackSpeed !== i;
      this.playbackSpeed = i,
      s && (this.time = nn(this.currentTime))
  }
  play() {
      if (this.isStopped)
          return;
      const {driver: i=kj, startTime: s} = this.options;
      this.driver || (this.driver = i(l => this.tick(l))),
      this.options.onPlay?.();
      const o = this.driver.now();
      this.state === "finished" ? (this.updateFinished(),
      this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = s ?? o),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      this.holdTime = null,
      this.state = "running",
      this.driver.start()
  }
  pause() {
      this.state = "paused",
      this.updateTime(Ce.now()),
      this.holdTime = this.currentTime
  }
  complete() {
      this.state !== "running" && this.play(),
      this.state = "finished",
      this.holdTime = null
  }
  finish() {
      this.notifyFinished(),
      this.teardown(),
      this.state = "finished",
      this.options.onComplete?.()
  }
  cancel() {
      this.holdTime = null,
      this.startTime = 0,
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.()
  }
  teardown() {
      this.state = "idle",
      this.stopDriver(),
      this.startTime = this.holdTime = null
  }
  stopDriver() {
      this.driver && (this.driver.stop(),
      this.driver = void 0)
  }
  sample(i) {
      return this.startTime = 0,
      this.tick(i, !0)
  }
  attachTimeline(i) {
      return this.options.allowFlatten && (this.options.type = "keyframes",
      this.options.ease = "linear",
      this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
  }
}
function iR(e) {
  for (let i = 1; i < e.length; i++)
      e[i] ?? (e[i] = e[i - 1])
}
const aa = e => e * 180 / Math.PI
, ld = e => {
  const i = aa(Math.atan2(e[1], e[0]));
  return cd(i)
}
, aR = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: ld,
  rotateZ: ld,
  skewX: e => aa(Math.atan(e[1])),
  skewY: e => aa(Math.atan(e[2])),
  skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
, cd = e => (e = e % 360,
e < 0 && (e += 360),
e)
, Dv = ld
, _v = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
, zv = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
, sR = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: _v,
  scaleY: zv,
  scale: e => (_v(e) + zv(e)) / 2,
  rotateX: e => cd(aa(Math.atan2(e[6], e[5]))),
  rotateY: e => cd(aa(Math.atan2(-e[2], e[0]))),
  rotateZ: Dv,
  rotate: Dv,
  skewX: e => aa(Math.atan(e[4])),
  skewY: e => aa(Math.atan(e[1])),
  skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ud(e) {
  return e.includes("scale") ? 1 : 0
}
function fd(e, i) {
  if (!e || e === "none")
      return ud(i);
  const s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, l;
  if (s)
      o = sR,
      l = s;
  else {
      const m = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      o = aR,
      l = m
  }
  if (!l)
      return ud(i);
  const f = o[i]
    , d = l[1].split(",").map(oR);
  return typeof f == "function" ? f(d) : d[f]
}
const rR = (e, i) => {
  const {transform: s="none"} = getComputedStyle(e);
  return fd(s, i)
}
;
function oR(e) {
  return parseFloat(e.trim())
}
const fs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
, ds = new Set(fs)
, Lv = e => e === us || e === ft
, lR = new Set(["x", "y", "z"])
, cR = fs.filter(e => !lR.has(e));
function uR(e) {
  const i = [];
  return cR.forEach(s => {
      const o = e.getValue(s);
      o !== void 0 && (i.push([s, o.get()]),
      o.set(s.startsWith("scale") ? 1 : 0))
  }
  ),
  i
}
const sa = {
  width: ({x: e}, {paddingLeft: i="0", paddingRight: s="0"}) => e.max - e.min - parseFloat(i) - parseFloat(s),
  height: ({y: e}, {paddingTop: i="0", paddingBottom: s="0"}) => e.max - e.min - parseFloat(i) - parseFloat(s),
  top: (e, {top: i}) => parseFloat(i),
  left: (e, {left: i}) => parseFloat(i),
  bottom: ({y: e}, {top: i}) => parseFloat(i) + (e.max - e.min),
  right: ({x: e}, {left: i}) => parseFloat(i) + (e.max - e.min),
  x: (e, {transform: i}) => fd(i, "x"),
  y: (e, {transform: i}) => fd(i, "y")
};
sa.translateX = sa.x;
sa.translateY = sa.y;
const ra = new Set;
let dd = !1
, hd = !1
, md = !1;
function u1() {
  if (hd) {
      const e = Array.from(ra).filter(o => o.needsMeasurement)
        , i = new Set(e.map(o => o.element))
        , s = new Map;
      i.forEach(o => {
          const l = uR(o);
          l.length && (s.set(o, l),
          o.render())
      }
      ),
      e.forEach(o => o.measureInitialState()),
      i.forEach(o => {
          o.render();
          const l = s.get(o);
          l && l.forEach( ([f,d]) => {
              o.getValue(f)?.set(d)
          }
          )
      }
      ),
      e.forEach(o => o.measureEndState()),
      e.forEach(o => {
          o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
      }
      )
  }
  hd = !1,
  dd = !1,
  ra.forEach(e => e.complete(md)),
  ra.clear()
}
function f1() {
  ra.forEach(e => {
      e.readKeyframes(),
      e.needsMeasurement && (hd = !0)
  }
  )
}
function fR() {
  md = !0,
  f1(),
  u1(),
  md = !1
}
class hh {
  constructor(i, s, o, l, f, d=!1) {
      this.state = "pending",
      this.isAsync = !1,
      this.needsMeasurement = !1,
      this.unresolvedKeyframes = [...i],
      this.onComplete = s,
      this.name = o,
      this.motionValue = l,
      this.element = f,
      this.isAsync = d
  }
  scheduleResolve() {
      this.state = "scheduled",
      this.isAsync ? (ra.add(this),
      dd || (dd = !0,
      Ht.read(f1),
      Ht.resolveKeyframes(u1))) : (this.readKeyframes(),
      this.complete())
  }
  readKeyframes() {
      const {unresolvedKeyframes: i, name: s, element: o, motionValue: l} = this;
      if (i[0] === null) {
          const f = l?.get()
            , d = i[i.length - 1];
          if (f !== void 0)
              i[0] = f;
          else if (o && s) {
              const m = o.readValue(s, d);
              m != null && (i[0] = m)
          }
          i[0] === void 0 && (i[0] = d),
          l && f === void 0 && l.set(i[0])
      }
      iR(i)
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i=!1) {
      this.state = "complete",
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      ra.delete(this)
  }
  cancel() {
      this.state === "scheduled" && (ra.delete(this),
      this.state = "pending")
  }
  resume() {
      this.state === "pending" && this.scheduleResolve()
  }
}
const dR = e => e.startsWith("--");
function hR(e, i, s) {
  dR(i) ? e.style.setProperty(i, s) : e.style[i] = s
}
const mR = th( () => window.ScrollTimeline !== void 0)
, pR = {};
function yR(e, i) {
  const s = th(e);
  return () => pR[i] ?? s()
}
const d1 = yR( () => {
  try {
      document.createElement("div").animate({
          opacity: 0
      }, {
          easing: "linear(0, 1)"
      })
  } catch {
      return !1
  }
  return !0
}
, "linearEasing")
, cr = ([e,i,s,o]) => `cubic-bezier(${e}, ${i}, ${s}, ${o})`
, Vv = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cr([0, .65, .55, 1]),
  circOut: cr([.55, 0, 1, .45]),
  backIn: cr([.31, .01, .66, -.59]),
  backOut: cr([.33, 1.53, .69, .99])
};
function h1(e, i) {
  if (e)
      return typeof e == "function" ? d1() ? o1(e, i) : "ease-out" : Wb(e) ? cr(e) : Array.isArray(e) ? e.map(s => h1(s, i) || Vv.easeOut) : Vv[e]
}
function gR(e, i, s, {delay: o=0, duration: l=300, repeat: f=0, repeatType: d="loop", ease: m="easeOut", times: p}={}, h=void 0) {
  const g = {
      [i]: s
  };
  p && (g.offset = p);
  const x = h1(m, l);
  Array.isArray(x) && (g.easing = x);
  const b = {
      delay: o,
      duration: l,
      easing: Array.isArray(x) ? "linear" : x,
      fill: "both",
      iterations: f + 1,
      direction: d === "reverse" ? "alternate" : "normal"
  };
  return h && (b.pseudoElement = h),
  e.animate(g, b)
}
function m1(e) {
  return typeof e == "function" && "applyToOptions"in e
}
function vR({type: e, ...i}) {
  return m1(e) && d1() ? e.applyToOptions(i) : (i.duration ?? (i.duration = 300),
  i.ease ?? (i.ease = "easeOut"),
  i)
}
class xR extends fh {
  constructor(i) {
      if (super(),
      this.finishedTime = null,
      this.isStopped = !1,
      !i)
          return;
      const {element: s, name: o, keyframes: l, pseudoElement: f, allowFlatten: d=!1, finalKeyframe: m, onComplete: p} = i;
      this.isPseudoElement = !!f,
      this.allowFlatten = d,
      this.options = i,
      Id(typeof i.type != "string");
      const h = vR(i);
      this.animation = gR(s, o, l, h, f),
      h.autoplay === !1 && this.animation.pause(),
      this.animation.onfinish = () => {
          if (this.finishedTime = this.time,
          !f) {
              const g = uh(l, this.options, m, this.speed);
              this.updateMotionValue ? this.updateMotionValue(g) : hR(s, o, g),
              this.animation.cancel()
          }
          p?.(),
          this.notifyFinished()
      }
  }
  play() {
      this.isStopped || (this.animation.play(),
      this.state === "finished" && this.updateFinished())
  }
  pause() {
      this.animation.pause()
  }
  complete() {
      this.animation.finish?.()
  }
  cancel() {
      try {
          this.animation.cancel()
      } catch {}
  }
  stop() {
      if (this.isStopped)
          return;
      this.isStopped = !0;
      const {state: i} = this;
      i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel())
  }
  commitStyles() {
      this.isPseudoElement || this.animation.commitStyles?.()
  }
  get duration() {
      const i = this.animation.effect?.getComputedTiming?.().duration || 0;
      return nn(Number(i))
  }
  get iterationDuration() {
      const {delay: i=0} = this.options || {};
      return this.duration + nn(i)
  }
  get time() {
      return nn(Number(this.animation.currentTime) || 0)
  }
  set time(i) {
      this.finishedTime = null,
      this.animation.currentTime = wn(i)
  }
  get speed() {
      return this.animation.playbackRate
  }
  set speed(i) {
      i < 0 && (this.finishedTime = null),
      this.animation.playbackRate = i
  }
  get state() {
      return this.finishedTime !== null ? "finished" : this.animation.playState
  }
  get startTime() {
      return Number(this.animation.startTime)
  }
  set startTime(i) {
      this.animation.startTime = i
  }
  attachTimeline({timeline: i, observe: s}) {
      return this.allowFlatten && this.animation.effect?.updateTiming({
          easing: "linear"
      }),
      this.animation.onfinish = null,
      i && mR() ? (this.animation.timeline = i,
      an) : s(this)
  }
}
const p1 = {
  anticipate: Qb,
  backInOut: Fb,
  circInOut: Zb
};
function bR(e) {
  return e in p1
}
function SR(e) {
  typeof e.ease == "string" && bR(e.ease) && (e.ease = p1[e.ease])
}
const Bv = 10;
class wR extends xR {
  constructor(i) {
      SR(i),
      c1(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      this.options = i
  }
  updateMotionValue(i) {
      const {motionValue: s, onUpdate: o, onComplete: l, element: f, ...d} = this.options;
      if (!s)
          return;
      if (i !== void 0) {
          s.set(i);
          return
      }
      const m = new dh({
          ...d,
          autoplay: !1
      })
        , p = wn(this.finishedTime ?? this.time);
      s.setWithVelocity(m.sample(p - Bv).value, m.sample(p).value, Bv),
      m.stop()
  }
}
const Uv = (e, i) => i === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Mi.test(e) || e === "0") && !e.startsWith("url("));
function TR(e) {
  const i = e[0];
  if (e.length === 1)
      return !0;
  for (let s = 0; s < e.length; s++)
      if (e[s] !== i)
          return !0
}
function ER(e, i, s, o) {
  const l = e[0];
  if (l === null)
      return !1;
  if (i === "display" || i === "visibility")
      return !0;
  const f = e[e.length - 1]
    , d = Uv(l, i)
    , m = Uv(f, i);
  return !d || !m ? !1 : TR(e) || (s === "spring" || m1(s)) && o
}
function pd(e) {
  e.duration = 0,
  e.type = "keyframes"
}
const CR = new Set(["opacity", "clipPath", "filter", "transform"])
, AR = th( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function NR(e) {
  const {motionValue: i, name: s, repeatDelay: o, repeatType: l, damping: f, type: d} = e;
  if (!(i?.owner?.current instanceof HTMLElement))
      return !1;
  const {onUpdate: p, transformTemplate: h} = i.owner.getProps();
  return AR() && s && CR.has(s) && (s !== "transform" || !h) && !p && !o && l !== "mirror" && f !== 0 && d !== "inertia"
}
const MR = 40;
class jR extends fh {
  constructor({autoplay: i=!0, delay: s=0, type: o="keyframes", repeat: l=0, repeatDelay: f=0, repeatType: d="loop", keyframes: m, name: p, motionValue: h, element: g, ...x}) {
      super(),
      this.stop = () => {
          this._animation && (this._animation.stop(),
          this.stopTimeline?.()),
          this.keyframeResolver?.cancel()
      }
      ,
      this.createdAt = Ce.now();
      const b = {
          autoplay: i,
          delay: s,
          type: o,
          repeat: l,
          repeatDelay: f,
          repeatType: d,
          name: p,
          motionValue: h,
          element: g,
          ...x
      }
        , T = g?.KeyframeResolver || hh;
      this.keyframeResolver = new T(m, (C, E, N) => this.onKeyframesResolved(C, E, b, !N),p,h,g),
      this.keyframeResolver?.scheduleResolve()
  }
  onKeyframesResolved(i, s, o, l) {
      this.keyframeResolver = void 0;
      const {name: f, type: d, velocity: m, delay: p, isHandoff: h, onUpdate: g} = o;
      this.resolvedAt = Ce.now(),
      ER(i, f, d, m) || (($n.instantAnimations || !p) && g?.(uh(i, o, s)),
      i[0] = i[i.length - 1],
      pd(o),
      o.repeat = 0);
      const b = {
          startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > MR ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
          finalKeyframe: s,
          ...o,
          keyframes: i
      }
        , T = !h && NR(b) ? new wR({
          ...b,
          element: b.motionValue.owner.current
      }) : new dh(b);
      T.finished.then( () => this.notifyFinished()).catch(an),
      this.pendingTimeline && (this.stopTimeline = T.attachTimeline(this.pendingTimeline),
      this.pendingTimeline = void 0),
      this._animation = T
  }
  get finished() {
      return this._animation ? this.animation.finished : this._finished
  }
  then(i, s) {
      return this.finished.finally(i).then( () => {}
      )
  }
  get animation() {
      return this._animation || (this.keyframeResolver?.resume(),
      fR()),
      this._animation
  }
  get duration() {
      return this.animation.duration
  }
  get iterationDuration() {
      return this.animation.iterationDuration
  }
  get time() {
      return this.animation.time
  }
  set time(i) {
      this.animation.time = i
  }
  get speed() {
      return this.animation.speed
  }
  get state() {
      return this.animation.state
  }
  set speed(i) {
      this.animation.speed = i
  }
  get startTime() {
      return this.animation.startTime
  }
  attachTimeline(i) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i,
      () => this.stop()
  }
  play() {
      this.animation.play()
  }
  pause() {
      this.animation.pause()
  }
  complete() {
      this.animation.complete()
  }
  cancel() {
      this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel()
  }
}
const RR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function OR(e) {
  const i = RR.exec(e);
  if (!i)
      return [, ];
  const [,s,o,l] = i;
  return [`--${s ?? o}`, l]
}
function y1(e, i, s=1) {
  const [o,l] = OR(e);
  if (!o)
      return;
  const f = window.getComputedStyle(i).getPropertyValue(o);
  if (f) {
      const d = f.trim();
      return Ub(d) ? parseFloat(d) : d
  }
  return sh(l) ? y1(l, i, s + 1) : l
}
function mh(e, i) {
  return e?.[i] ?? e?.default ?? e
}
const g1 = new Set(["width", "height", "top", "left", "right", "bottom", ...fs])
, DR = {
  test: e => e === "auto",
  parse: e => e
}
, v1 = e => i => i.test(e)
, x1 = [us, ft, Tn, Ei, Tj, wj, DR]
, kv = e => x1.find(v1(e));
function _R(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Pb(e) : !0
}
const zR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function LR(e) {
  const [i,s] = e.slice(0, -1).split("(");
  if (i === "drop-shadow")
      return e;
  const [o] = s.match(rh) || [];
  if (!o)
      return e;
  const l = s.replace(o, "");
  let f = zR.has(i) ? 1 : 0;
  return o !== s && (f *= 100),
  i + "(" + f + l + ")"
}
const VR = /\b([a-z-]*)\(.*?\)/gu
, yd = {
  ...Mi,
  getAnimatableNone: e => {
      const i = e.match(VR);
      return i ? i.map(LR).join(" ") : e
  }
}
, Pv = {
  ...us,
  transform: Math.round
}
, BR = {
  rotate: Ei,
  rotateX: Ei,
  rotateY: Ei,
  rotateZ: Ei,
  scale: rl,
  scaleX: rl,
  scaleY: rl,
  scaleZ: rl,
  skew: Ei,
  skewX: Ei,
  skewY: Ei,
  distance: ft,
  translateX: ft,
  translateY: ft,
  translateZ: ft,
  x: ft,
  y: ft,
  z: ft,
  perspective: ft,
  transformPerspective: ft,
  opacity: wr,
  originX: Nv,
  originY: Nv,
  originZ: ft
}
, ph = {
  borderWidth: ft,
  borderTopWidth: ft,
  borderRightWidth: ft,
  borderBottomWidth: ft,
  borderLeftWidth: ft,
  borderRadius: ft,
  radius: ft,
  borderTopLeftRadius: ft,
  borderTopRightRadius: ft,
  borderBottomRightRadius: ft,
  borderBottomLeftRadius: ft,
  width: ft,
  maxWidth: ft,
  height: ft,
  maxHeight: ft,
  top: ft,
  right: ft,
  bottom: ft,
  left: ft,
  padding: ft,
  paddingTop: ft,
  paddingRight: ft,
  paddingBottom: ft,
  paddingLeft: ft,
  margin: ft,
  marginTop: ft,
  marginRight: ft,
  marginBottom: ft,
  marginLeft: ft,
  backgroundPositionX: ft,
  backgroundPositionY: ft,
  ...BR,
  zIndex: Pv,
  fillOpacity: wr,
  strokeOpacity: wr,
  numOctaves: Pv
}
, UR = {
  ...ph,
  color: te,
  backgroundColor: te,
  outlineColor: te,
  fill: te,
  stroke: te,
  borderColor: te,
  borderTopColor: te,
  borderRightColor: te,
  borderBottomColor: te,
  borderLeftColor: te,
  filter: yd,
  WebkitFilter: yd
}
, b1 = e => UR[e];
function S1(e, i) {
  let s = b1(e);
  return s !== yd && (s = Mi),
  s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
}
const kR = new Set(["auto", "none", "0"]);
function PR(e, i, s) {
  let o = 0, l;
  for (; o < e.length && !l; ) {
      const f = e[o];
      typeof f == "string" && !kR.has(f) && Tr(f).values.length && (l = e[o]),
      o++
  }
  if (l && s)
      for (const f of i)
          e[f] = S1(s, l)
}
class HR extends hh {
  constructor(i, s, o, l, f) {
      super(i, s, o, l, f, !0)
  }
  readKeyframes() {
      const {unresolvedKeyframes: i, element: s, name: o} = this;
      if (!s || !s.current)
          return;
      super.readKeyframes();
      for (let p = 0; p < i.length; p++) {
          let h = i[p];
          if (typeof h == "string" && (h = h.trim(),
          sh(h))) {
              const g = y1(h, s.current);
              g !== void 0 && (i[p] = g),
              p === i.length - 1 && (this.finalKeyframe = h)
          }
      }
      if (this.resolveNoneKeyframes(),
      !g1.has(o) || i.length !== 2)
          return;
      const [l,f] = i
        , d = kv(l)
        , m = kv(f);
      if (d !== m)
          if (Lv(d) && Lv(m))
              for (let p = 0; p < i.length; p++) {
                  const h = i[p];
                  typeof h == "string" && (i[p] = parseFloat(h))
              }
          else
              sa[o] && (this.needsMeasurement = !0)
  }
  resolveNoneKeyframes() {
      const {unresolvedKeyframes: i, name: s} = this
        , o = [];
      for (let l = 0; l < i.length; l++)
          (i[l] === null || _R(i[l])) && o.push(l);
      o.length && PR(i, o, s)
  }
  measureInitialState() {
      const {element: i, unresolvedKeyframes: s, name: o} = this;
      if (!i || !i.current)
          return;
      o === "height" && (this.suspendedScrollY = window.pageYOffset),
      this.measuredOrigin = sa[o](i.measureViewportBox(), window.getComputedStyle(i.current)),
      s[0] = this.measuredOrigin;
      const l = s[s.length - 1];
      l !== void 0 && i.getValue(o, l).jump(l, !1)
  }
  measureEndState() {
      const {element: i, name: s, unresolvedKeyframes: o} = this;
      if (!i || !i.current)
          return;
      const l = i.getValue(s);
      l && l.jump(this.measuredOrigin, !1);
      const f = o.length - 1
        , d = o[f];
      o[f] = sa[s](i.measureViewportBox(), window.getComputedStyle(i.current)),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      this.removedTransforms?.length && this.removedTransforms.forEach( ([m,p]) => {
          i.getValue(m).set(p)
      }
      ),
      this.resolveNoneKeyframes()
  }
}
function qR(e, i, s) {
  if (e instanceof EventTarget)
      return [e];
  if (typeof e == "string") {
      let o = document;
      const l = s?.[e] ?? o.querySelectorAll(e);
      return l ? Array.from(l) : []
  }
  return Array.from(e)
}
const w1 = (e, i) => i && typeof e == "number" ? i.transform(e) : e;
function T1(e) {
  return kb(e) && "offsetHeight"in e
}
const Hv = 30
, GR = e => !isNaN(parseFloat(e));
class YR {
  constructor(i, s={}) {
      this.canTrackVelocity = null,
      this.events = {},
      this.updateAndNotify = o => {
          const l = Ce.now();
          if (this.updatedAt !== l && this.setPrevFrameValue(),
          this.prev = this.current,
          this.setCurrent(o),
          this.current !== this.prev && (this.events.change?.notify(this.current),
          this.dependents))
              for (const f of this.dependents)
                  f.dirty()
      }
      ,
      this.hasAnimated = !1,
      this.setCurrent(i),
      this.owner = s.owner
  }
  setCurrent(i) {
      this.current = i,
      this.updatedAt = Ce.now(),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = GR(this.current))
  }
  setPrevFrameValue(i=this.current) {
      this.prevFrameValue = i,
      this.prevUpdatedAt = this.updatedAt
  }
  onChange(i) {
      return this.on("change", i)
  }
  on(i, s) {
      this.events[i] || (this.events[i] = new eh);
      const o = this.events[i].add(s);
      return i === "change" ? () => {
          o(),
          Ht.read( () => {
              this.events.change.getSize() || this.stop()
          }
          )
      }
      : o
  }
  clearListeners() {
      for (const i in this.events)
          this.events[i].clear()
  }
  attach(i, s) {
      this.passiveEffect = i,
      this.stopPassiveEffect = s
  }
  set(i) {
      this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
  }
  setWithVelocity(i, s, o) {
      this.set(s),
      this.prev = void 0,
      this.prevFrameValue = i,
      this.prevUpdatedAt = this.updatedAt - o
  }
  jump(i, s=!0) {
      this.updateAndNotify(i),
      this.prev = i,
      this.prevUpdatedAt = this.prevFrameValue = void 0,
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  dirty() {
      this.events.change?.notify(this.current)
  }
  addDependent(i) {
      this.dependents || (this.dependents = new Set),
      this.dependents.add(i)
  }
  removeDependent(i) {
      this.dependents && this.dependents.delete(i)
  }
  get() {
      return this.current
  }
  getPrevious() {
      return this.prev
  }
  getVelocity() {
      const i = Ce.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Hv)
          return 0;
      const s = Math.min(this.updatedAt - this.prevUpdatedAt, Hv);
      return Hb(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
  }
  start(i) {
      return this.stop(),
      new Promise(s => {
          this.hasAnimated = !0,
          this.animation = i(s),
          this.events.animationStart && this.events.animationStart.notify()
      }
      ).then( () => {
          this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      }
      )
  }
  stop() {
      this.animation && (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
      return !!this.animation
  }
  clearAnimation() {
      delete this.animation
  }
  destroy() {
      this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function as(e, i) {
  return new YR(e,i)
}
const {schedule: yh} = Jb(queueMicrotask, !1)
, cn = {
  x: !1,
  y: !1
};
function E1() {
  return cn.x || cn.y
}
function XR(e) {
  return e === "x" || e === "y" ? cn[e] ? null : (cn[e] = !0,
  () => {
      cn[e] = !1
  }
  ) : cn.x || cn.y ? null : (cn.x = cn.y = !0,
  () => {
      cn.x = cn.y = !1
  }
  )
}
function C1(e, i) {
  const s = qR(e)
    , o = new AbortController
    , l = {
      passive: !0,
      ...i,
      signal: o.signal
  };
  return [s, l, () => o.abort()]
}
function qv(e) {
  return !(e.pointerType === "touch" || E1())
}
function FR(e, i, s={}) {
  const [o,l,f] = C1(e, s)
    , d = m => {
      if (!qv(m))
          return;
      const {target: p} = m
        , h = i(p, m);
      if (typeof h != "function" || !p)
          return;
      const g = x => {
          qv(x) && (h(x),
          p.removeEventListener("pointerleave", g))
      }
      ;
      p.addEventListener("pointerleave", g, l)
  }
  ;
  return o.forEach(m => {
      m.addEventListener("pointerenter", d, l)
  }
  ),
  f
}
const A1 = (e, i) => i ? e === i ? !0 : A1(e, i.parentElement) : !1
, gh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
, QR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function KR(e) {
  return QR.has(e.tagName) || e.tabIndex !== -1
}
const hl = new WeakSet;
function Gv(e) {
  return i => {
      i.key === "Enter" && e(i)
  }
}
function zf(e, i) {
  e.dispatchEvent(new PointerEvent("pointer" + i,{
      isPrimary: !0,
      bubbles: !0
  }))
}
const ZR = (e, i) => {
  const s = e.currentTarget;
  if (!s)
      return;
  const o = Gv( () => {
      if (hl.has(s))
          return;
      zf(s, "down");
      const l = Gv( () => {
          zf(s, "up")
      }
      )
        , f = () => zf(s, "cancel");
      s.addEventListener("keyup", l, i),
      s.addEventListener("blur", f, i)
  }
  );
  s.addEventListener("keydown", o, i),
  s.addEventListener("blur", () => s.removeEventListener("keydown", o), i)
}
;
function Yv(e) {
  return gh(e) && !E1()
}
function $R(e, i, s={}) {
  const [o,l,f] = C1(e, s)
    , d = m => {
      const p = m.currentTarget;
      if (!Yv(m))
          return;
      hl.add(p);
      const h = i(p, m)
        , g = (T, C) => {
          window.removeEventListener("pointerup", x),
          window.removeEventListener("pointercancel", b),
          hl.has(p) && hl.delete(p),
          Yv(T) && typeof h == "function" && h(T, {
              success: C
          })
      }
        , x = T => {
          g(T, p === window || p === document || s.useGlobalTarget || A1(p, T.target))
      }
        , b = T => {
          g(T, !1)
      }
      ;
      window.addEventListener("pointerup", x, l),
      window.addEventListener("pointercancel", b, l)
  }
  ;
  return o.forEach(m => {
      (s.useGlobalTarget ? window : m).addEventListener("pointerdown", d, l),
      T1(m) && (m.addEventListener("focus", h => ZR(h, l)),
      !KR(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0))
  }
  ),
  f
}
function N1(e) {
  return kb(e) && "ownerSVGElement"in e
}
function WR(e) {
  return N1(e) && e.tagName === "svg"
}
const he = e => !!(e && e.getVelocity)
, JR = [...x1, te, Mi]
, IR = e => JR.find(v1(e))
, vh = w.createContext({
  transformPagePoint: e => e,
  isStatic: !1,
  reducedMotion: "never"
});
function Xv(e, i) {
  if (typeof e == "function")
      return e(i);
  e != null && (e.current = i)
}
function tO(...e) {
  return i => {
      let s = !1;
      const o = e.map(l => {
          const f = Xv(l, i);
          return !s && typeof f == "function" && (s = !0),
          f
      }
      );
      if (s)
          return () => {
              for (let l = 0; l < o.length; l++) {
                  const f = o[l];
                  typeof f == "function" ? f() : Xv(e[l], null)
              }
          }
  }
}
function eO(...e) {
  return w.useCallback(tO(...e), e)
}
class nO extends w.Component {
  getSnapshotBeforeUpdate(i) {
      const s = this.props.childRef.current;
      if (s && i.isPresent && !this.props.isPresent) {
          const o = s.offsetParent
            , l = T1(o) && o.offsetWidth || 0
            , f = this.props.sizeRef.current;
          f.height = s.offsetHeight || 0,
          f.width = s.offsetWidth || 0,
          f.top = s.offsetTop,
          f.left = s.offsetLeft,
          f.right = l - f.width - f.left
      }
      return null
  }
  componentDidUpdate() {}
  render() {
      return this.props.children
  }
}
function iO({children: e, isPresent: i, anchorX: s, root: o}) {
  const l = w.useId()
    , f = w.useRef(null)
    , d = w.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0
  })
    , {nonce: m} = w.useContext(vh)
    , p = eO(f, e?.ref);
  return w.useInsertionEffect( () => {
      const {width: h, height: g, top: x, left: b, right: T} = d.current;
      if (i || !f.current || !h || !g)
          return;
      const C = s === "left" ? `left: ${b}` : `right: ${T}`;
      f.current.dataset.motionPopId = l;
      const E = document.createElement("style");
      m && (E.nonce = m);
      const N = o ?? document.head;
      return N.appendChild(E),
      E.sheet && E.sheet.insertRule(`
        [data-motion-pop-id="${l}"] {
          position: absolute !important;
          width: ${h}px !important;
          height: ${g}px !important;
          ${C}px !important;
          top: ${x}px !important;
        }
      `),
      () => {
          N.contains(E) && N.removeChild(E)
      }
  }
  , [i]),
  y.jsx(nO, {
      isPresent: i,
      childRef: f,
      sizeRef: d,
      children: w.cloneElement(e, {
          ref: p
      })
  })
}
const aO = ({children: e, initial: i, isPresent: s, onExitComplete: o, custom: l, presenceAffectsLayout: f, mode: d, anchorX: m, root: p}) => {
  const h = Zd(sO)
    , g = w.useId();
  let x = !0
    , b = w.useMemo( () => (x = !1,
  {
      id: g,
      initial: i,
      isPresent: s,
      custom: l,
      onExitComplete: T => {
          h.set(T, !0);
          for (const C of h.values())
              if (!C)
                  return;
          o && o()
      }
      ,
      register: T => (h.set(T, !1),
      () => h.delete(T))
  }), [s, h, o]);
  return f && x && (b = {
      ...b
  }),
  w.useMemo( () => {
      h.forEach( (T, C) => h.set(C, !1))
  }
  , [s]),
  w.useEffect( () => {
      !s && !h.size && o && o()
  }
  , [s]),
  d === "popLayout" && (e = y.jsx(iO, {
      isPresent: s,
      anchorX: m,
      root: p,
      children: e
  })),
  y.jsx(ql.Provider, {
      value: b,
      children: e
  })
}
;
function sO() {
  return new Map
}
function M1(e=!0) {
  const i = w.useContext(ql);
  if (i === null)
      return [!0, null];
  const {isPresent: s, onExitComplete: o, register: l} = i
    , f = w.useId();
  w.useEffect( () => {
      if (e)
          return l(f)
  }
  , [e]);
  const d = w.useCallback( () => e && o && o(f), [f, o, e]);
  return !s && o ? [!1, d] : [!0]
}
const ol = e => e.key || "";
function Fv(e) {
  const i = [];
  return w.Children.forEach(e, s => {
      w.isValidElement(s) && i.push(s)
  }
  ),
  i
}
const j1 = ({children: e, custom: i, initial: s=!0, onExitComplete: o, presenceAffectsLayout: l=!0, mode: f="sync", propagate: d=!1, anchorX: m="left", root: p}) => {
  const [h,g] = M1(d)
    , x = w.useMemo( () => Fv(e), [e])
    , b = d && !h ? [] : x.map(ol)
    , T = w.useRef(!0)
    , C = w.useRef(x)
    , E = Zd( () => new Map)
    , [N,O] = w.useState(x)
    , [z,D] = w.useState(x);
  Bb( () => {
      T.current = !1,
      C.current = x;
      for (let Z = 0; Z < z.length; Z++) {
          const k = ol(z[Z]);
          b.includes(k) ? E.delete(k) : E.get(k) !== !0 && E.set(k, !1)
      }
  }
  , [z, b.length, b.join("-")]);
  const q = [];
  if (x !== N) {
      let Z = [...x];
      for (let k = 0; k < z.length; k++) {
          const H = z[k]
            , I = ol(H);
          b.includes(I) || (Z.splice(k, 0, H),
          q.push(H))
      }
      return f === "wait" && q.length && (Z = q),
      D(Fv(Z)),
      O(x),
      null
  }
  const {forceRender: G} = w.useContext(Kd);
  return y.jsx(y.Fragment, {
      children: z.map(Z => {
          const k = ol(Z)
            , H = d && !h ? !1 : x === z || b.includes(k)
            , I = () => {
              if (E.has(k))
                  E.set(k, !0);
              else
                  return;
              let st = !0;
              E.forEach(dt => {
                  dt || (st = !1)
              }
              ),
              st && (G?.(),
              D(C.current),
              d && g?.(),
              o && o())
          }
          ;
          return y.jsx(aO, {
              isPresent: H,
              initial: !T.current || s ? void 0 : !1,
              custom: i,
              presenceAffectsLayout: l,
              mode: f,
              root: p,
              onExitComplete: H ? void 0 : I,
              anchorX: m,
              children: Z
          }, k)
      }
      )
  })
}
, R1 = w.createContext({
  strict: !1
})
, Qv = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}
, ss = {};
for (const e in Qv)
  ss[e] = {
      isEnabled: i => Qv[e].some(s => !!i[s])
  };
function rO(e) {
  for (const i in e)
      ss[i] = {
          ...ss[i],
          ...e[i]
      }
}
const oO = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Cl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || oO.has(e)
}
let O1 = e => !Cl(e);
function lO(e) {
  typeof e == "function" && (O1 = i => i.startsWith("on") ? !Cl(i) : e(i))
}
try {
  lO(require("@emotion/is-prop-valid").default)
} catch {}
function cO(e, i, s) {
  const o = {};
  for (const l in e)
      l === "values" && typeof e.values == "object" || (O1(l) || s === !0 && Cl(l) || !i && !Cl(l) || e.draggable && l.startsWith("onDrag")) && (o[l] = e[l]);
  return o
}
const Gl = w.createContext({});
function Yl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Er(e) {
  return typeof e == "string" || Array.isArray(e)
}
const xh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
, bh = ["initial", ...xh];
function Xl(e) {
  return Yl(e.animate) || bh.some(i => Er(e[i]))
}
function D1(e) {
  return !!(Xl(e) || e.variants)
}
function uO(e, i) {
  if (Xl(e)) {
      const {initial: s, animate: o} = e;
      return {
          initial: s === !1 || Er(s) ? s : void 0,
          animate: Er(o) ? o : void 0
      }
  }
  return e.inherit !== !1 ? i : {}
}
function fO(e) {
  const {initial: i, animate: s} = uO(e, w.useContext(Gl));
  return w.useMemo( () => ({
      initial: i,
      animate: s
  }), [Kv(i), Kv(s)])
}
function Kv(e) {
  return Array.isArray(e) ? e.join(" ") : e
}
const Cr = {};
function dO(e) {
  for (const i in e)
      Cr[i] = e[i],
      ah(i) && (Cr[i].isCSSVariable = !0)
}
function _1(e, {layout: i, layoutId: s}) {
  return ds.has(e) || e.startsWith("origin") || (i || s !== void 0) && (!!Cr[e] || e === "opacity")
}
const hO = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}
, mO = fs.length;
function pO(e, i, s) {
  let o = ""
    , l = !0;
  for (let f = 0; f < mO; f++) {
      const d = fs[f]
        , m = e[d];
      if (m === void 0)
          continue;
      let p = !0;
      if (typeof m == "number" ? p = m === (d.startsWith("scale") ? 1 : 0) : p = parseFloat(m) === 0,
      !p || s) {
          const h = w1(m, ph[d]);
          if (!p) {
              l = !1;
              const g = hO[d] || d;
              o += `${g}(${h}) `
          }
          s && (i[d] = h)
      }
  }
  return o = o.trim(),
  s ? o = s(i, l ? "" : o) : l && (o = "none"),
  o
}
function Sh(e, i, s) {
  const {style: o, vars: l, transformOrigin: f} = e;
  let d = !1
    , m = !1;
  for (const p in i) {
      const h = i[p];
      if (ds.has(p)) {
          d = !0;
          continue
      } else if (ah(p)) {
          l[p] = h;
          continue
      } else {
          const g = w1(h, ph[p]);
          p.startsWith("origin") ? (m = !0,
          f[p] = g) : o[p] = g
      }
  }
  if (i.transform || (d || s ? o.transform = pO(i, e.transform, s) : o.transform && (o.transform = "none")),
  m) {
      const {originX: p="50%", originY: h="50%", originZ: g=0} = f;
      o.transformOrigin = `${p} ${h} ${g}`
  }
}
const wh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function z1(e, i, s) {
  for (const o in i)
      !he(i[o]) && !_1(o, s) && (e[o] = i[o])
}
function yO({transformTemplate: e}, i) {
  return w.useMemo( () => {
      const s = wh();
      return Sh(s, i, e),
      Object.assign({}, s.vars, s.style)
  }
  , [i])
}
function gO(e, i) {
  const s = e.style || {}
    , o = {};
  return z1(o, s, e),
  Object.assign(o, yO(e, i)),
  o
}
function vO(e, i) {
  const s = {}
    , o = gO(e, i);
  return e.drag && e.dragListener !== !1 && (s.draggable = !1,
  o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
  o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
  e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (s.tabIndex = 0),
  s.style = o,
  s
}
const xO = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}
, bO = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function SO(e, i, s=1, o=0, l=!0) {
  e.pathLength = 1;
  const f = l ? xO : bO;
  e[f.offset] = ft.transform(-o);
  const d = ft.transform(i)
    , m = ft.transform(s);
  e[f.array] = `${d} ${m}`
}
function L1(e, {attrX: i, attrY: s, attrScale: o, pathLength: l, pathSpacing: f=1, pathOffset: d=0, ...m}, p, h, g) {
  if (Sh(e, m, h),
  p) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return
  }
  e.attrs = e.style,
  e.style = {};
  const {attrs: x, style: b} = e;
  x.transform && (b.transform = x.transform,
  delete x.transform),
  (b.transform || x.transformOrigin) && (b.transformOrigin = x.transformOrigin ?? "50% 50%",
  delete x.transformOrigin),
  b.transform && (b.transformBox = g?.transformBox ?? "fill-box",
  delete x.transformBox),
  i !== void 0 && (x.x = i),
  s !== void 0 && (x.y = s),
  o !== void 0 && (x.scale = o),
  l !== void 0 && SO(x, l, f, d, !1)
}
const V1 = () => ({
  ...wh(),
  attrs: {}
})
, B1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function wO(e, i, s, o) {
  const l = w.useMemo( () => {
      const f = V1();
      return L1(f, i, B1(o), e.transformTemplate, e.style),
      {
          ...f.attrs,
          style: {
              ...f.style
          }
      }
  }
  , [i]);
  if (e.style) {
      const f = {};
      z1(f, e.style, e),
      l.style = {
          ...f,
          ...l.style
      }
  }
  return l
}
const TO = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Th(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(TO.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function EO(e, i, s, {latestValues: o}, l, f=!1) {
  const m = (Th(e) ? wO : vO)(i, o, l, e)
    , p = cO(i, typeof e == "string", f)
    , h = e !== w.Fragment ? {
      ...p,
      ...m,
      ref: s
  } : {}
    , {children: g} = i
    , x = w.useMemo( () => he(g) ? g.get() : g, [g]);
  return w.createElement(e, {
      ...h,
      children: x
  })
}
function Zv(e) {
  const i = [{}, {}];
  return e?.values.forEach( (s, o) => {
      i[0][o] = s.get(),
      i[1][o] = s.getVelocity()
  }
  ),
  i
}
function Eh(e, i, s, o) {
  if (typeof i == "function") {
      const [l,f] = Zv(o);
      i = i(s !== void 0 ? s : e.custom, l, f)
  }
  if (typeof i == "string" && (i = e.variants && e.variants[i]),
  typeof i == "function") {
      const [l,f] = Zv(o);
      i = i(s !== void 0 ? s : e.custom, l, f)
  }
  return i
}
function ml(e) {
  return he(e) ? e.get() : e
}
function CO({scrapeMotionValuesFromProps: e, createRenderState: i}, s, o, l) {
  return {
      latestValues: AO(s, o, l, e),
      renderState: i()
  }
}
function AO(e, i, s, o) {
  const l = {}
    , f = o(e, {});
  for (const b in f)
      l[b] = ml(f[b]);
  let {initial: d, animate: m} = e;
  const p = Xl(e)
    , h = D1(e);
  i && h && !p && e.inherit !== !1 && (d === void 0 && (d = i.initial),
  m === void 0 && (m = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || d === !1;
  const x = g ? m : d;
  if (x && typeof x != "boolean" && !Yl(x)) {
      const b = Array.isArray(x) ? x : [x];
      for (let T = 0; T < b.length; T++) {
          const C = Eh(e, b[T]);
          if (C) {
              const {transitionEnd: E, transition: N, ...O} = C;
              for (const z in O) {
                  let D = O[z];
                  if (Array.isArray(D)) {
                      const q = g ? D.length - 1 : 0;
                      D = D[q]
                  }
                  D !== null && (l[z] = D)
              }
              for (const z in E)
                  l[z] = E[z]
          }
      }
  }
  return l
}
const U1 = e => (i, s) => {
  const o = w.useContext(Gl)
    , l = w.useContext(ql)
    , f = () => CO(e, i, o, l);
  return s ? f() : Zd(f)
}
;
function Ch(e, i, s) {
  const {style: o} = e
    , l = {};
  for (const f in o)
      (he(o[f]) || i.style && he(i.style[f]) || _1(f, e) || s?.getValue(f)?.liveStyle !== void 0) && (l[f] = o[f]);
  return l
}
const NO = U1({
  scrapeMotionValuesFromProps: Ch,
  createRenderState: wh
});
function k1(e, i, s) {
  const o = Ch(e, i, s);
  for (const l in e)
      if (he(e[l]) || he(i[l])) {
          const f = fs.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
          o[f] = e[l]
      }
  return o
}
const MO = U1({
  scrapeMotionValuesFromProps: k1,
  createRenderState: V1
})
, jO = Symbol.for("motionComponentSymbol");
function $a(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function RO(e, i, s) {
  return w.useCallback(o => {
      o && e.onMount && e.onMount(o),
      i && (o ? i.mount(o) : i.unmount()),
      s && (typeof s == "function" ? s(o) : $a(s) && (s.current = o))
  }
  , [i])
}
const Ah = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
, OO = "framerAppearId"
, P1 = "data-" + Ah(OO)
, H1 = w.createContext({});
function DO(e, i, s, o, l) {
  const {visualElement: f} = w.useContext(Gl)
    , d = w.useContext(R1)
    , m = w.useContext(ql)
    , p = w.useContext(vh).reducedMotion
    , h = w.useRef(null);
  o = o || d.renderer,
  !h.current && o && (h.current = o(e, {
      visualState: i,
      parent: f,
      props: s,
      presenceContext: m,
      blockInitialAnimation: m ? m.initial === !1 : !1,
      reducedMotionConfig: p
  }));
  const g = h.current
    , x = w.useContext(H1);
  g && !g.projection && l && (g.type === "html" || g.type === "svg") && _O(h.current, s, l, x);
  const b = w.useRef(!1);
  w.useInsertionEffect( () => {
      g && b.current && g.update(s, m)
  }
  );
  const T = s[P1]
    , C = w.useRef(!!T && !window.MotionHandoffIsComplete?.(T) && window.MotionHasOptimisedAnimation?.(T));
  return Bb( () => {
      g && (b.current = !0,
      window.MotionIsMounted = !0,
      g.updateFeatures(),
      g.scheduleRenderMicrotask(),
      C.current && g.animationState && g.animationState.animateChanges())
  }
  ),
  w.useEffect( () => {
      g && (!C.current && g.animationState && g.animationState.animateChanges(),
      C.current && (queueMicrotask( () => {
          window.MotionHandoffMarkAsComplete?.(T)
      }
      ),
      C.current = !1),
      g.enteringChildren = void 0)
  }
  ),
  g
}
function _O(e, i, s, o) {
  const {layoutId: l, layout: f, drag: d, dragConstraints: m, layoutScroll: p, layoutRoot: h, layoutCrossfade: g} = i;
  e.projection = new s(e.latestValues,i["data-framer-portal-id"] ? void 0 : q1(e.parent)),
  e.projection.setOptions({
      layoutId: l,
      layout: f,
      alwaysMeasureLayout: !!d || m && $a(m),
      visualElement: e,
      animationType: typeof f == "string" ? f : "both",
      initialPromotionConfig: o,
      crossfade: g,
      layoutScroll: p,
      layoutRoot: h
  })
}
function q1(e) {
  if (e)
      return e.options.allowProjection !== !1 ? e.projection : q1(e.parent)
}
function Lf(e, {forwardMotionProps: i=!1}={}, s, o) {
  s && rO(s);
  const l = Th(e) ? MO : NO;
  function f(m, p) {
      let h;
      const g = {
          ...w.useContext(vh),
          ...m,
          layoutId: zO(m)
      }
        , {isStatic: x} = g
        , b = fO(m)
        , T = l(m, x);
      if (!x && $d) {
          LO();
          const C = VO(g);
          h = C.MeasureLayout,
          b.visualElement = DO(e, T, g, o, C.ProjectionNode)
      }
      return y.jsxs(Gl.Provider, {
          value: b,
          children: [h && b.visualElement ? y.jsx(h, {
              visualElement: b.visualElement,
              ...g
          }) : null, EO(e, m, RO(T, b.visualElement, p), T, x, i)]
      })
  }
  f.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const d = w.forwardRef(f);
  return d[jO] = e,
  d
}
function zO({layoutId: e}) {
  const i = w.useContext(Kd).id;
  return i && e !== void 0 ? i + "-" + e : e
}
function LO(e, i) {
  w.useContext(R1).strict
}
function VO(e) {
  const {drag: i, layout: s} = ss;
  if (!i && !s)
      return {};
  const o = {
      ...i,
      ...s
  };
  return {
      MeasureLayout: i?.isEnabled(e) || s?.isEnabled(e) ? o.MeasureLayout : void 0,
      ProjectionNode: o.ProjectionNode
  }
}
function BO(e, i) {
  if (typeof Proxy > "u")
      return Lf;
  const s = new Map
    , o = (f, d) => Lf(f, d, e, i)
    , l = (f, d) => o(f, d);
  return new Proxy(l,{
      get: (f, d) => d === "create" ? o : (s.has(d) || s.set(d, Lf(d, void 0, e, i)),
      s.get(d))
  })
}
function G1({top: e, left: i, right: s, bottom: o}) {
  return {
      x: {
          min: i,
          max: s
      },
      y: {
          min: e,
          max: o
      }
  }
}
function UO({x: e, y: i}) {
  return {
      top: i.min,
      right: e.max,
      bottom: i.max,
      left: e.min
  }
}
function kO(e, i) {
  if (!i)
      return e;
  const s = i({
      x: e.left,
      y: e.top
  })
    , o = i({
      x: e.right,
      y: e.bottom
  });
  return {
      top: s.y,
      left: s.x,
      bottom: o.y,
      right: o.x
  }
}
function Vf(e) {
  return e === void 0 || e === 1
}
function gd({scale: e, scaleX: i, scaleY: s}) {
  return !Vf(e) || !Vf(i) || !Vf(s)
}
function ta(e) {
  return gd(e) || Y1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Y1(e) {
  return $v(e.x) || $v(e.y)
}
function $v(e) {
  return e && e !== "0%"
}
function Al(e, i, s) {
  const o = e - s
    , l = i * o;
  return s + l
}
function Wv(e, i, s, o, l) {
  return l !== void 0 && (e = Al(e, l, o)),
  Al(e, s, o) + i
}
function vd(e, i=0, s=1, o, l) {
  e.min = Wv(e.min, i, s, o, l),
  e.max = Wv(e.max, i, s, o, l)
}
function X1(e, {x: i, y: s}) {
  vd(e.x, i.translate, i.scale, i.originPoint),
  vd(e.y, s.translate, s.scale, s.originPoint)
}
const Jv = .999999999999
, Iv = 1.0000000000001;
function PO(e, i, s, o=!1) {
  const l = s.length;
  if (!l)
      return;
  i.x = i.y = 1;
  let f, d;
  for (let m = 0; m < l; m++) {
      f = s[m],
      d = f.projectionDelta;
      const {visualElement: p} = f.options;
      p && p.props.style && p.props.style.display === "contents" || (o && f.options.layoutScroll && f.scroll && f !== f.root && Ja(e, {
          x: -f.scroll.offset.x,
          y: -f.scroll.offset.y
      }),
      d && (i.x *= d.x.scale,
      i.y *= d.y.scale,
      X1(e, d)),
      o && ta(f.latestValues) && Ja(e, f.latestValues))
  }
  i.x < Iv && i.x > Jv && (i.x = 1),
  i.y < Iv && i.y > Jv && (i.y = 1)
}
function Wa(e, i) {
  e.min = e.min + i,
  e.max = e.max + i
}
function t0(e, i, s, o, l=.5) {
  const f = qt(e.min, e.max, l);
  vd(e, i, s, f, o)
}
function Ja(e, i) {
  t0(e.x, i.x, i.scaleX, i.scale, i.originX),
  t0(e.y, i.y, i.scaleY, i.scale, i.originY)
}
function F1(e, i) {
  return G1(kO(e.getBoundingClientRect(), i))
}
function HO(e, i, s) {
  const o = F1(e, s)
    , {scroll: l} = i;
  return l && (Wa(o.x, l.offset.x),
  Wa(o.y, l.offset.y)),
  o
}
const e0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
})
, Ia = () => ({
  x: e0(),
  y: e0()
})
, n0 = () => ({
  min: 0,
  max: 0
})
, Zt = () => ({
  x: n0(),
  y: n0()
})
, xd = {
  current: null
}
, Q1 = {
  current: !1
};
function qO() {
  if (Q1.current = !0,
  !!$d)
      if (window.matchMedia) {
          const e = window.matchMedia("(prefers-reduced-motion)")
            , i = () => xd.current = e.matches;
          e.addEventListener("change", i),
          i()
      } else
          xd.current = !1
}
const GO = new WeakMap;
function YO(e, i, s) {
  for (const o in i) {
      const l = i[o]
        , f = s[o];
      if (he(l))
          e.addValue(o, l);
      else if (he(f))
          e.addValue(o, as(l, {
              owner: e
          }));
      else if (f !== l)
          if (e.hasValue(o)) {
              const d = e.getValue(o);
              d.liveStyle === !0 ? d.jump(l) : d.hasAnimated || d.set(l)
          } else {
              const d = e.getStaticValue(o);
              e.addValue(o, as(d !== void 0 ? d : l, {
                  owner: e
              }))
          }
  }
  for (const o in s)
      i[o] === void 0 && e.removeValue(o);
  return i
}
const i0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class XO {
  scrapeMotionValuesFromProps(i, s, o) {
      return {}
  }
  constructor({parent: i, props: s, presenceContext: o, reducedMotionConfig: l, blockInitialAnimation: f, visualState: d}, m={}) {
      this.current = null,
      this.children = new Set,
      this.isVariantNode = !1,
      this.isControllingVariants = !1,
      this.shouldReduceMotion = null,
      this.values = new Map,
      this.KeyframeResolver = hh,
      this.features = {},
      this.valueSubscriptions = new Map,
      this.prevMotionValues = {},
      this.events = {},
      this.propEventSubscriptions = {},
      this.notifyUpdate = () => this.notify("Update", this.latestValues),
      this.render = () => {
          this.current && (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }
      ,
      this.renderScheduledAt = 0,
      this.scheduleRender = () => {
          const b = Ce.now();
          this.renderScheduledAt < b && (this.renderScheduledAt = b,
          Ht.render(this.render, !1, !0))
      }
      ;
      const {latestValues: p, renderState: h} = d;
      this.latestValues = p,
      this.baseTarget = {
          ...p
      },
      this.initialValues = s.initial ? {
          ...p
      } : {},
      this.renderState = h,
      this.parent = i,
      this.props = s,
      this.presenceContext = o,
      this.depth = i ? i.depth + 1 : 0,
      this.reducedMotionConfig = l,
      this.options = m,
      this.blockInitialAnimation = !!f,
      this.isControllingVariants = Xl(s),
      this.isVariantNode = D1(s),
      this.isVariantNode && (this.variantChildren = new Set),
      this.manuallyAnimateOnMount = !!(i && i.current);
      const {willChange: g, ...x} = this.scrapeMotionValuesFromProps(s, {}, this);
      for (const b in x) {
          const T = x[b];
          p[b] !== void 0 && he(T) && T.set(p[b])
      }
  }
  mount(i) {
      this.current = i,
      GO.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach( (s, o) => this.bindToMotionValue(o, s)),
      Q1.current || qO(),
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : xd.current,
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
      this.projection && this.projection.unmount(),
      Ni(this.notifyUpdate),
      Ni(this.render),
      this.valueSubscriptions.forEach(i => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
      for (const i in this.events)
          this.events[i].clear();
      for (const i in this.features) {
          const s = this.features[i];
          s && (s.unmount(),
          s.isMounted = !1)
      }
      this.current = null
  }
  addChild(i) {
      this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set),
      this.enteringChildren.add(i)
  }
  removeChild(i) {
      this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i)
  }
  bindToMotionValue(i, s) {
      this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
      const o = ds.has(i);
      o && this.onBindTransform && this.onBindTransform();
      const l = s.on("change", d => {
          this.latestValues[i] = d,
          this.props.onUpdate && Ht.preRender(this.notifyUpdate),
          o && this.projection && (this.projection.isTransformDirty = !0),
          this.scheduleRender()
      }
      );
      let f;
      window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
          l(),
          f && f(),
          s.owner && s.stop()
      }
      )
  }
  sortNodePosition(i) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
  }
  updateFeatures() {
      let i = "animation";
      for (i in ss) {
          const s = ss[i];
          if (!s)
              continue;
          const {isEnabled: o, Feature: l} = s;
          if (!this.features[i] && l && o(this.props) && (this.features[i] = new l(this)),
          this.features[i]) {
              const f = this.features[i];
              f.isMounted ? f.update() : (f.mount(),
              f.isMounted = !0)
          }
      }
  }
  triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Zt()
  }
  getStaticValue(i) {
      return this.latestValues[i]
  }
  setStaticValue(i, s) {
      this.latestValues[i] = s
  }
  update(i, s) {
      (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      this.prevProps = this.props,
      this.props = i,
      this.prevPresenceContext = this.presenceContext,
      this.presenceContext = s;
      for (let o = 0; o < i0.length; o++) {
          const l = i0[o];
          this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](),
          delete this.propEventSubscriptions[l]);
          const f = "on" + l
            , d = i[f];
          d && (this.propEventSubscriptions[l] = this.on(l, d))
      }
      this.prevMotionValues = YO(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
      return this.props
  }
  getVariant(i) {
      return this.props.variants ? this.props.variants[i] : void 0
  }
  getDefaultTransition() {
      return this.props.transition
  }
  getTransformPagePoint() {
      return this.props.transformPagePoint
  }
  getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(i) {
      const s = this.getClosestVariantNode();
      if (s)
          return s.variantChildren && s.variantChildren.add(i),
          () => s.variantChildren.delete(i)
  }
  addValue(i, s) {
      const o = this.values.get(i);
      s !== o && (o && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      this.latestValues[i] = s.get())
  }
  removeValue(i) {
      this.values.delete(i);
      const s = this.valueSubscriptions.get(i);
      s && (s(),
      this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState)
  }
  hasValue(i) {
      return this.values.has(i)
  }
  getValue(i, s) {
      if (this.props.values && this.props.values[i])
          return this.props.values[i];
      let o = this.values.get(i);
      return o === void 0 && s !== void 0 && (o = as(s === null ? void 0 : s, {
          owner: this
      }),
      this.addValue(i, o)),
      o
  }
  readValue(i, s) {
      let o = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
      return o != null && (typeof o == "string" && (Ub(o) || Pb(o)) ? o = parseFloat(o) : !IR(o) && Mi.test(s) && (o = S1(i, s)),
      this.setBaseTarget(i, he(o) ? o.get() : o)),
      he(o) ? o.get() : o
  }
  setBaseTarget(i, s) {
      this.baseTarget[i] = s
  }
  getBaseTarget(i) {
      const {initial: s} = this.props;
      let o;
      if (typeof s == "string" || typeof s == "object") {
          const f = Eh(this.props, s, this.presenceContext?.custom);
          f && (o = f[i])
      }
      if (s && o !== void 0)
          return o;
      const l = this.getBaseTargetFromProps(this.props, i);
      return l !== void 0 && !he(l) ? l : this.initialValues[i] !== void 0 && o === void 0 ? void 0 : this.baseTarget[i]
  }
  on(i, s) {
      return this.events[i] || (this.events[i] = new eh),
      this.events[i].add(s)
  }
  notify(i, ...s) {
      this.events[i] && this.events[i].notify(...s)
  }
  scheduleRenderMicrotask() {
      yh.render(this.render)
  }
}
class K1 extends XO {
  constructor() {
      super(...arguments),
      this.KeyframeResolver = HR
  }
  sortInstanceNodePosition(i, s) {
      return i.compareDocumentPosition(s) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(i, s) {
      return i.style ? i.style[s] : void 0
  }
  removeValueFromRenderState(i, {vars: s, style: o}) {
      delete s[i],
      delete o[i]
  }
  handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(),
      delete this.childSubscription);
      const {children: i} = this.props;
      he(i) && (this.childSubscription = i.on("change", s => {
          this.current && (this.current.textContent = `${s}`)
      }
      ))
  }
}
function Z1(e, {style: i, vars: s}, o, l) {
  const f = e.style;
  let d;
  for (d in i)
      f[d] = i[d];
  l?.applyProjectionStyles(f, o);
  for (d in s)
      f.setProperty(d, s[d])
}
function FO(e) {
  return window.getComputedStyle(e)
}
class QO extends K1 {
  constructor() {
      super(...arguments),
      this.type = "html",
      this.renderInstance = Z1
  }
  readValueFromInstance(i, s) {
      if (ds.has(s))
          return this.projection?.isProjecting ? ud(s) : rR(i, s);
      {
          const o = FO(i)
            , l = (ah(s) ? o.getPropertyValue(s) : o[s]) || 0;
          return typeof l == "string" ? l.trim() : l
      }
  }
  measureInstanceViewportBox(i, {transformPagePoint: s}) {
      return F1(i, s)
  }
  build(i, s, o) {
      Sh(i, s, o.transformTemplate)
  }
  scrapeMotionValuesFromProps(i, s, o) {
      return Ch(i, s, o)
  }
}
const $1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function KO(e, i, s, o) {
  Z1(e, i, void 0, o);
  for (const l in i.attrs)
      e.setAttribute($1.has(l) ? l : Ah(l), i.attrs[l])
}
class ZO extends K1 {
  constructor() {
      super(...arguments),
      this.type = "svg",
      this.isSVGTag = !1,
      this.measureInstanceViewportBox = Zt
  }
  getBaseTargetFromProps(i, s) {
      return i[s]
  }
  readValueFromInstance(i, s) {
      if (ds.has(s)) {
          const o = b1(s);
          return o && o.default || 0
      }
      return s = $1.has(s) ? s : Ah(s),
      i.getAttribute(s)
  }
  scrapeMotionValuesFromProps(i, s, o) {
      return k1(i, s, o)
  }
  build(i, s, o) {
      L1(i, s, this.isSVGTag, o.transformTemplate, o.style)
  }
  renderInstance(i, s, o, l) {
      KO(i, s, o, l)
  }
  mount(i) {
      this.isSVGTag = B1(i.tagName),
      super.mount(i)
  }
}
const $O = (e, i) => Th(e) ? new ZO(i) : new QO(i,{
  allowProjection: e !== w.Fragment
});
function es(e, i, s) {
  const o = e.getProps();
  return Eh(o, i, s !== void 0 ? s : o.custom, e)
}
const bd = e => Array.isArray(e);
function WO(e, i, s) {
  e.hasValue(i) ? e.getValue(i).set(s) : e.addValue(i, as(s))
}
function JO(e) {
  return bd(e) ? e[e.length - 1] || 0 : e
}
function IO(e, i) {
  const s = es(e, i);
  let {transitionEnd: o={}, transition: l={}, ...f} = s || {};
  f = {
      ...f,
      ...o
  };
  for (const d in f) {
      const m = JO(f[d]);
      WO(e, d, m)
  }
}
function tD(e) {
  return !!(he(e) && e.add)
}
function Sd(e, i) {
  const s = e.getValue("willChange");
  if (tD(s))
      return s.add(i);
  if (!s && $n.WillChange) {
      const o = new $n.WillChange("auto");
      e.addValue("willChange", o),
      o.add(i)
  }
}
function W1(e) {
  return e.props[P1]
}
const eD = e => e !== null;
function nD(e, {repeat: i, repeatType: s="loop"}, o) {
  const l = e.filter(eD)
    , f = i && s !== "loop" && i % 2 === 1 ? 0 : l.length - 1;
  return l[f]
}
const iD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}
, aD = e => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
})
, sD = {
  type: "keyframes",
  duration: .8
}
, rD = {
  type: "keyframes",
  ease: [.25, .1, .35, 1],
  duration: .3
}
, oD = (e, {keyframes: i}) => i.length > 2 ? sD : ds.has(e) ? e.startsWith("scale") ? aD(i[1]) : iD : rD;
function lD({when: e, delay: i, delayChildren: s, staggerChildren: o, staggerDirection: l, repeat: f, repeatType: d, repeatDelay: m, from: p, elapsed: h, ...g}) {
  return !!Object.keys(g).length
}
const Nh = (e, i, s, o={}, l, f) => d => {
  const m = mh(o, e) || {}
    , p = m.delay || o.delay || 0;
  let {elapsed: h=0} = o;
  h = h - wn(p);
  const g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...m,
      delay: -h,
      onUpdate: b => {
          i.set(b),
          m.onUpdate && m.onUpdate(b)
      }
      ,
      onComplete: () => {
          d(),
          m.onComplete && m.onComplete()
      }
      ,
      name: e,
      motionValue: i,
      element: f ? void 0 : l
  };
  lD(m) || Object.assign(g, oD(e, g)),
  g.duration && (g.duration = wn(g.duration)),
  g.repeatDelay && (g.repeatDelay = wn(g.repeatDelay)),
  g.from !== void 0 && (g.keyframes[0] = g.from);
  let x = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (pd(g),
  g.delay === 0 && (x = !0)),
  ($n.instantAnimations || $n.skipAnimations) && (x = !0,
  pd(g),
  g.delay = 0),
  g.allowFlatten = !m.type && !m.ease,
  x && !f && i.get() !== void 0) {
      const b = nD(g.keyframes, m);
      if (b !== void 0) {
          Ht.update( () => {
              g.onUpdate(b),
              g.onComplete()
          }
          );
          return
      }
  }
  return m.isSync ? new dh(g) : new jR(g)
}
;
function cD({protectedKeys: e, needsAnimating: i}, s) {
  const o = e.hasOwnProperty(s) && i[s] !== !0;
  return i[s] = !1,
  o
}
function J1(e, i, {delay: s=0, transitionOverride: o, type: l}={}) {
  let {transition: f=e.getDefaultTransition(), transitionEnd: d, ...m} = i;
  o && (f = o);
  const p = []
    , h = l && e.animationState && e.animationState.getState()[l];
  for (const g in m) {
      const x = e.getValue(g, e.latestValues[g] ?? null)
        , b = m[g];
      if (b === void 0 || h && cD(h, g))
          continue;
      const T = {
          delay: s,
          ...mh(f || {}, g)
      }
        , C = x.get();
      if (C !== void 0 && !x.isAnimating && !Array.isArray(b) && b === C && !T.velocity)
          continue;
      let E = !1;
      if (window.MotionHandoffAnimation) {
          const O = W1(e);
          if (O) {
              const z = window.MotionHandoffAnimation(O, g, Ht);
              z !== null && (T.startTime = z,
              E = !0)
          }
      }
      Sd(e, g),
      x.start(Nh(g, x, b, e.shouldReduceMotion && g1.has(g) ? {
          type: !1
      } : T, e, E));
      const N = x.animation;
      N && p.push(N)
  }
  return d && Promise.all(p).then( () => {
      Ht.update( () => {
          d && IO(e, d)
      }
      )
  }
  ),
  p
}
function I1(e, i, s, o=0, l=1) {
  const f = Array.from(e).sort( (h, g) => h.sortNodePosition(g)).indexOf(i)
    , d = e.size
    , m = (d - 1) * o;
  return typeof s == "function" ? s(f, d) : l === 1 ? f * o : m - f * o
}
function wd(e, i, s={}) {
  const o = es(e, i, s.type === "exit" ? e.presenceContext?.custom : void 0);
  let {transition: l=e.getDefaultTransition() || {}} = o || {};
  s.transitionOverride && (l = s.transitionOverride);
  const f = o ? () => Promise.all(J1(e, o, s)) : () => Promise.resolve()
    , d = e.variantChildren && e.variantChildren.size ? (p=0) => {
      const {delayChildren: h=0, staggerChildren: g, staggerDirection: x} = l;
      return uD(e, i, p, h, g, x, s)
  }
  : () => Promise.resolve()
    , {when: m} = l;
  if (m) {
      const [p,h] = m === "beforeChildren" ? [f, d] : [d, f];
      return p().then( () => h())
  } else
      return Promise.all([f(), d(s.delay)])
}
function uD(e, i, s=0, o=0, l=0, f=1, d) {
  const m = [];
  for (const p of e.variantChildren)
      p.notify("AnimationStart", i),
      m.push(wd(p, i, {
          ...d,
          delay: s + (typeof o == "function" ? 0 : o) + I1(e.variantChildren, p, o, l, f)
      }).then( () => p.notify("AnimationComplete", i)));
  return Promise.all(m)
}
function fD(e, i, s={}) {
  e.notify("AnimationStart", i);
  let o;
  if (Array.isArray(i)) {
      const l = i.map(f => wd(e, f, s));
      o = Promise.all(l)
  } else if (typeof i == "string")
      o = wd(e, i, s);
  else {
      const l = typeof i == "function" ? es(e, i, s.custom) : i;
      o = Promise.all(J1(e, l, s))
  }
  return o.then( () => {
      e.notify("AnimationComplete", i)
  }
  )
}
function tS(e, i) {
  if (!Array.isArray(i))
      return !1;
  const s = i.length;
  if (s !== e.length)
      return !1;
  for (let o = 0; o < s; o++)
      if (i[o] !== e[o])
          return !1;
  return !0
}
const dD = bh.length;
function eS(e) {
  if (!e)
      return;
  if (!e.isControllingVariants) {
      const s = e.parent ? eS(e.parent) || {} : {};
      return e.props.initial !== void 0 && (s.initial = e.props.initial),
      s
  }
  const i = {};
  for (let s = 0; s < dD; s++) {
      const o = bh[s]
        , l = e.props[o];
      (Er(l) || l === !1) && (i[o] = l)
  }
  return i
}
const hD = [...xh].reverse()
, mD = xh.length;
function pD(e) {
  return i => Promise.all(i.map( ({animation: s, options: o}) => fD(e, s, o)))
}
function yD(e) {
  let i = pD(e)
    , s = a0()
    , o = !0;
  const l = p => (h, g) => {
      const x = es(e, g, p === "exit" ? e.presenceContext?.custom : void 0);
      if (x) {
          const {transition: b, transitionEnd: T, ...C} = x;
          h = {
              ...h,
              ...C,
              ...T
          }
      }
      return h
  }
  ;
  function f(p) {
      i = p(e)
  }
  function d(p) {
      const {props: h} = e
        , g = eS(e.parent) || {}
        , x = []
        , b = new Set;
      let T = {}
        , C = 1 / 0;
      for (let N = 0; N < mD; N++) {
          const O = hD[N]
            , z = s[O]
            , D = h[O] !== void 0 ? h[O] : g[O]
            , q = Er(D)
            , G = O === p ? z.isActive : null;
          G === !1 && (C = N);
          let Z = D === g[O] && D !== h[O] && q;
          if (Z && o && e.manuallyAnimateOnMount && (Z = !1),
          z.protectedKeys = {
              ...T
          },
          !z.isActive && G === null || !D && !z.prevProp || Yl(D) || typeof D == "boolean")
              continue;
          const k = gD(z.prevProp, D);
          let H = k || O === p && z.isActive && !Z && q || N > C && q
            , I = !1;
          const st = Array.isArray(D) ? D : [D];
          let dt = st.reduce(l(O), {});
          G === !1 && (dt = {});
          const {prevResolvedValues: pt={}} = z
            , Et = {
              ...pt,
              ...dt
          }
            , J = Y => {
              H = !0,
              b.has(Y) && (I = !0,
              b.delete(Y)),
              z.needsAnimating[Y] = !0;
              const U = e.getValue(Y);
              U && (U.liveStyle = !1)
          }
          ;
          for (const Y in Et) {
              const U = dt[Y]
                , it = pt[Y];
              if (T.hasOwnProperty(Y))
                  continue;
              let ct = !1;
              bd(U) && bd(it) ? ct = !tS(U, it) : ct = U !== it,
              ct ? U != null ? J(Y) : b.add(Y) : U !== void 0 && b.has(Y) ? J(Y) : z.protectedKeys[Y] = !0
          }
          z.prevProp = D,
          z.prevResolvedValues = dt,
          z.isActive && (T = {
              ...T,
              ...dt
          }),
          o && e.blockInitialAnimation && (H = !1);
          const ht = Z && k;
          H && (!ht || I) && x.push(...st.map(Y => {
              const U = {
                  type: O
              };
              if (typeof Y == "string" && o && !ht && e.manuallyAnimateOnMount && e.parent) {
                  const {parent: it} = e
                    , ct = es(it, Y);
                  if (it.enteringChildren && ct) {
                      const {delayChildren: M} = ct.transition || {};
                      U.delay = I1(it.enteringChildren, e, M)
                  }
              }
              return {
                  animation: Y,
                  options: U
              }
          }
          ))
      }
      if (b.size) {
          const N = {};
          if (typeof h.initial != "boolean") {
              const O = es(e, Array.isArray(h.initial) ? h.initial[0] : h.initial);
              O && O.transition && (N.transition = O.transition)
          }
          b.forEach(O => {
              const z = e.getBaseTarget(O)
                , D = e.getValue(O);
              D && (D.liveStyle = !0),
              N[O] = z ?? null
          }
          ),
          x.push({
              animation: N
          })
      }
      let E = !!x.length;
      return o && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (E = !1),
      o = !1,
      E ? i(x) : Promise.resolve()
  }
  function m(p, h) {
      if (s[p].isActive === h)
          return Promise.resolve();
      e.variantChildren?.forEach(x => x.animationState?.setActive(p, h)),
      s[p].isActive = h;
      const g = d(p);
      for (const x in s)
          s[x].protectedKeys = {};
      return g
  }
  return {
      animateChanges: d,
      setActive: m,
      setAnimateFunction: f,
      getState: () => s,
      reset: () => {
          s = a0()
      }
  }
}
function gD(e, i) {
  return typeof i == "string" ? i !== e : Array.isArray(i) ? !tS(i, e) : !1
}
function Ii(e=!1) {
  return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
  }
}
function a0() {
  return {
      animate: Ii(!0),
      whileInView: Ii(),
      whileHover: Ii(),
      whileTap: Ii(),
      whileDrag: Ii(),
      whileFocus: Ii(),
      exit: Ii()
  }
}
class Oi {
  constructor(i) {
      this.isMounted = !1,
      this.node = i
  }
  update() {}
}
class vD extends Oi {
  constructor(i) {
      super(i),
      i.animationState || (i.animationState = yD(i))
  }
  updateAnimationControlsSubscription() {
      const {animate: i} = this.node.getProps();
      Yl(i) && (this.unmountControls = i.subscribe(this.node))
  }
  mount() {
      this.updateAnimationControlsSubscription()
  }
  update() {
      const {animate: i} = this.node.getProps()
        , {animate: s} = this.node.prevProps || {};
      i !== s && this.updateAnimationControlsSubscription()
  }
  unmount() {
      this.node.animationState.reset(),
      this.unmountControls?.()
  }
}
let xD = 0;
class bD extends Oi {
  constructor() {
      super(...arguments),
      this.id = xD++
  }
  update() {
      if (!this.node.presenceContext)
          return;
      const {isPresent: i, onExitComplete: s} = this.node.presenceContext
        , {isPresent: o} = this.node.prevPresenceContext || {};
      if (!this.node.animationState || i === o)
          return;
      const l = this.node.animationState.setActive("exit", !i);
      s && !i && l.then( () => {
          s(this.id)
      }
      )
  }
  mount() {
      const {register: i, onExitComplete: s} = this.node.presenceContext || {};
      s && s(this.id),
      i && (this.unmount = i(this.id))
  }
  unmount() {}
}
const SD = {
  animation: {
      Feature: vD
  },
  exit: {
      Feature: bD
  }
};
function Ar(e, i, s, o={
  passive: !0
}) {
  return e.addEventListener(i, s, o),
  () => e.removeEventListener(i, s)
}
function _r(e) {
  return {
      point: {
          x: e.pageX,
          y: e.pageY
      }
  }
}
const wD = e => i => gh(i) && e(i, _r(i));
function hr(e, i, s, o) {
  return Ar(e, i, wD(s), o)
}
const nS = 1e-4
, TD = 1 - nS
, ED = 1 + nS
, iS = .01
, CD = 0 - iS
, AD = 0 + iS;
function ye(e) {
  return e.max - e.min
}
function ND(e, i, s) {
  return Math.abs(e - i) <= s
}
function s0(e, i, s, o=.5) {
  e.origin = o,
  e.originPoint = qt(i.min, i.max, e.origin),
  e.scale = ye(s) / ye(i),
  e.translate = qt(s.min, s.max, e.origin) - e.originPoint,
  (e.scale >= TD && e.scale <= ED || isNaN(e.scale)) && (e.scale = 1),
  (e.translate >= CD && e.translate <= AD || isNaN(e.translate)) && (e.translate = 0)
}
function mr(e, i, s, o) {
  s0(e.x, i.x, s.x, o ? o.originX : void 0),
  s0(e.y, i.y, s.y, o ? o.originY : void 0)
}
function r0(e, i, s) {
  e.min = s.min + i.min,
  e.max = e.min + ye(i)
}
function MD(e, i, s) {
  r0(e.x, i.x, s.x),
  r0(e.y, i.y, s.y)
}
function o0(e, i, s) {
  e.min = i.min - s.min,
  e.max = e.min + ye(i)
}
function pr(e, i, s) {
  o0(e.x, i.x, s.x),
  o0(e.y, i.y, s.y)
}
function tn(e) {
  return [e("x"), e("y")]
}
const aS = ({current: e}) => e ? e.ownerDocument.defaultView : null
, l0 = (e, i) => Math.abs(e - i);
function jD(e, i) {
  const s = l0(e.x, i.x)
    , o = l0(e.y, i.y);
  return Math.sqrt(s ** 2 + o ** 2)
}
class sS {
  constructor(i, s, {transformPagePoint: o, contextWindow: l=window, dragSnapToOrigin: f=!1, distanceThreshold: d=3}={}) {
      if (this.startEvent = null,
      this.lastMoveEvent = null,
      this.lastMoveEventInfo = null,
      this.handlers = {},
      this.contextWindow = window,
      this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo))
              return;
          const b = Uf(this.lastMoveEventInfo, this.history)
            , T = this.startEvent !== null
            , C = jD(b.offset, {
              x: 0,
              y: 0
          }) >= this.distanceThreshold;
          if (!T && !C)
              return;
          const {point: E} = b
            , {timestamp: N} = fe;
          this.history.push({
              ...E,
              timestamp: N
          });
          const {onStart: O, onMove: z} = this.handlers;
          T || (O && O(this.lastMoveEvent, b),
          this.startEvent = this.lastMoveEvent),
          z && z(this.lastMoveEvent, b)
      }
      ,
      this.handlePointerMove = (b, T) => {
          this.lastMoveEvent = b,
          this.lastMoveEventInfo = Bf(T, this.transformPagePoint),
          Ht.update(this.updatePoint, !0)
      }
      ,
      this.handlePointerUp = (b, T) => {
          this.end();
          const {onEnd: C, onSessionEnd: E, resumeAnimation: N} = this.handlers;
          if (this.dragSnapToOrigin && N && N(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
              return;
          const O = Uf(b.type === "pointercancel" ? this.lastMoveEventInfo : Bf(T, this.transformPagePoint), this.history);
          this.startEvent && C && C(b, O),
          E && E(b, O)
      }
      ,
      !gh(i))
          return;
      this.dragSnapToOrigin = f,
      this.handlers = s,
      this.transformPagePoint = o,
      this.distanceThreshold = d,
      this.contextWindow = l || window;
      const m = _r(i)
        , p = Bf(m, this.transformPagePoint)
        , {point: h} = p
        , {timestamp: g} = fe;
      this.history = [{
          ...h,
          timestamp: g
      }];
      const {onSessionStart: x} = s;
      x && x(i, Uf(p, this.history)),
      this.removeListeners = Rr(hr(this.contextWindow, "pointermove", this.handlePointerMove), hr(this.contextWindow, "pointerup", this.handlePointerUp), hr(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(i) {
      this.handlers = i
  }
  end() {
      this.removeListeners && this.removeListeners(),
      Ni(this.updatePoint)
  }
}
function Bf(e, i) {
  return i ? {
      point: i(e.point)
  } : e
}
function c0(e, i) {
  return {
      x: e.x - i.x,
      y: e.y - i.y
  }
}
function Uf({point: e}, i) {
  return {
      point: e,
      delta: c0(e, rS(i)),
      offset: c0(e, RD(i)),
      velocity: OD(i, .1)
  }
}
function RD(e) {
  return e[0]
}
function rS(e) {
  return e[e.length - 1]
}
function OD(e, i) {
  if (e.length < 2)
      return {
          x: 0,
          y: 0
      };
  let s = e.length - 1
    , o = null;
  const l = rS(e);
  for (; s >= 0 && (o = e[s],
  !(l.timestamp - o.timestamp > wn(i))); )
      s--;
  if (!o)
      return {
          x: 0,
          y: 0
      };
  const f = nn(l.timestamp - o.timestamp);
  if (f === 0)
      return {
          x: 0,
          y: 0
      };
  const d = {
      x: (l.x - o.x) / f,
      y: (l.y - o.y) / f
  };
  return d.x === 1 / 0 && (d.x = 0),
  d.y === 1 / 0 && (d.y = 0),
  d
}
function DD(e, {min: i, max: s}, o) {
  return i !== void 0 && e < i ? e = o ? qt(i, e, o.min) : Math.max(e, i) : s !== void 0 && e > s && (e = o ? qt(s, e, o.max) : Math.min(e, s)),
  e
}
function u0(e, i, s) {
  return {
      min: i !== void 0 ? e.min + i : void 0,
      max: s !== void 0 ? e.max + s - (e.max - e.min) : void 0
  }
}
function _D(e, {top: i, left: s, bottom: o, right: l}) {
  return {
      x: u0(e.x, s, l),
      y: u0(e.y, i, o)
  }
}
function f0(e, i) {
  let s = i.min - e.min
    , o = i.max - e.max;
  return i.max - i.min < e.max - e.min && ([s,o] = [o, s]),
  {
      min: s,
      max: o
  }
}
function zD(e, i) {
  return {
      x: f0(e.x, i.x),
      y: f0(e.y, i.y)
  }
}
function LD(e, i) {
  let s = .5;
  const o = ye(e)
    , l = ye(i);
  return l > o ? s = Sr(i.min, i.max - o, e.min) : o > l && (s = Sr(e.min, e.max - l, i.min)),
  Zn(0, 1, s)
}
function VD(e, i) {
  const s = {};
  return i.min !== void 0 && (s.min = i.min - e.min),
  i.max !== void 0 && (s.max = i.max - e.min),
  s
}
const Td = .35;
function BD(e=Td) {
  return e === !1 ? e = 0 : e === !0 && (e = Td),
  {
      x: d0(e, "left", "right"),
      y: d0(e, "top", "bottom")
  }
}
function d0(e, i, s) {
  return {
      min: h0(e, i),
      max: h0(e, s)
  }
}
function h0(e, i) {
  return typeof e == "number" ? e : e[i] || 0
}
const UD = new WeakMap;
class kD {
  constructor(i) {
      this.openDragLock = null,
      this.isDragging = !1,
      this.currentDirection = null,
      this.originPoint = {
          x: 0,
          y: 0
      },
      this.constraints = !1,
      this.hasMutatedConstraints = !1,
      this.elastic = Zt(),
      this.latestPointerEvent = null,
      this.latestPanInfo = null,
      this.visualElement = i
  }
  start(i, {snapToCursor: s=!1, distanceThreshold: o}={}) {
      const {presenceContext: l} = this.visualElement;
      if (l && l.isPresent === !1)
          return;
      const f = x => {
          const {dragSnapToOrigin: b} = this.getProps();
          b ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(_r(x).point)
      }
        , d = (x, b) => {
          const {drag: T, dragPropagation: C, onDragStart: E} = this.getProps();
          if (T && !C && (this.openDragLock && this.openDragLock(),
          this.openDragLock = XR(T),
          !this.openDragLock))
              return;
          this.latestPointerEvent = x,
          this.latestPanInfo = b,
          this.isDragging = !0,
          this.currentDirection = null,
          this.resolveConstraints(),
          this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
          this.visualElement.projection.target = void 0),
          tn(O => {
              let z = this.getAxisMotionValue(O).get() || 0;
              if (Tn.test(z)) {
                  const {projection: D} = this.visualElement;
                  if (D && D.layout) {
                      const q = D.layout.layoutBox[O];
                      q && (z = ye(q) * (parseFloat(z) / 100))
                  }
              }
              this.originPoint[O] = z
          }
          ),
          E && Ht.postRender( () => E(x, b)),
          Sd(this.visualElement, "transform");
          const {animationState: N} = this.visualElement;
          N && N.setActive("whileDrag", !0)
      }
        , m = (x, b) => {
          this.latestPointerEvent = x,
          this.latestPanInfo = b;
          const {dragPropagation: T, dragDirectionLock: C, onDirectionLock: E, onDrag: N} = this.getProps();
          if (!T && !this.openDragLock)
              return;
          const {offset: O} = b;
          if (C && this.currentDirection === null) {
              this.currentDirection = PD(O),
              this.currentDirection !== null && E && E(this.currentDirection);
              return
          }
          this.updateAxis("x", b.point, O),
          this.updateAxis("y", b.point, O),
          this.visualElement.render(),
          N && N(x, b)
      }
        , p = (x, b) => {
          this.latestPointerEvent = x,
          this.latestPanInfo = b,
          this.stop(x, b),
          this.latestPointerEvent = null,
          this.latestPanInfo = null
      }
        , h = () => tn(x => this.getAnimationState(x) === "paused" && this.getAxisMotionValue(x).animation?.play())
        , {dragSnapToOrigin: g} = this.getProps();
      this.panSession = new sS(i,{
          onSessionStart: f,
          onStart: d,
          onMove: m,
          onSessionEnd: p,
          resumeAnimation: h
      },{
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: g,
          distanceThreshold: o,
          contextWindow: aS(this.visualElement)
      })
  }
  stop(i, s) {
      const o = i || this.latestPointerEvent
        , l = s || this.latestPanInfo
        , f = this.isDragging;
      if (this.cancel(),
      !f || !l || !o)
          return;
      const {velocity: d} = l;
      this.startAnimation(d);
      const {onDragEnd: m} = this.getProps();
      m && Ht.postRender( () => m(o, l))
  }
  cancel() {
      this.isDragging = !1;
      const {projection: i, animationState: s} = this.visualElement;
      i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      this.panSession = void 0;
      const {dragPropagation: o} = this.getProps();
      !o && this.openDragLock && (this.openDragLock(),
      this.openDragLock = null),
      s && s.setActive("whileDrag", !1)
  }
  updateAxis(i, s, o) {
      const {drag: l} = this.getProps();
      if (!o || !ll(i, l, this.currentDirection))
          return;
      const f = this.getAxisMotionValue(i);
      let d = this.originPoint[i] + o[i];
      this.constraints && this.constraints[i] && (d = DD(d, this.constraints[i], this.elastic[i])),
      f.set(d)
  }
  resolveConstraints() {
      const {dragConstraints: i, dragElastic: s} = this.getProps()
        , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
        , l = this.constraints;
      i && $a(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && o ? this.constraints = _D(o.layoutBox, i) : this.constraints = !1,
      this.elastic = BD(s),
      l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && tn(f => {
          this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = VD(o.layoutBox[f], this.constraints[f]))
      }
      )
  }
  resolveRefConstraints() {
      const {dragConstraints: i, onMeasureDragConstraints: s} = this.getProps();
      if (!i || !$a(i))
          return !1;
      const o = i.current
        , {projection: l} = this.visualElement;
      if (!l || !l.layout)
          return !1;
      const f = HO(o, l.root, this.visualElement.getTransformPagePoint());
      let d = zD(l.layout.layoutBox, f);
      if (s) {
          const m = s(UO(d));
          this.hasMutatedConstraints = !!m,
          m && (d = G1(m))
      }
      return d
  }
  startAnimation(i) {
      const {drag: s, dragMomentum: o, dragElastic: l, dragTransition: f, dragSnapToOrigin: d, onDragTransitionEnd: m} = this.getProps()
        , p = this.constraints || {}
        , h = tn(g => {
          if (!ll(g, s, this.currentDirection))
              return;
          let x = p && p[g] || {};
          d && (x = {
              min: 0,
              max: 0
          });
          const b = l ? 200 : 1e6
            , T = l ? 40 : 1e7
            , C = {
              type: "inertia",
              velocity: o ? i[g] : 0,
              bounceStiffness: b,
              bounceDamping: T,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...f,
              ...x
          };
          return this.startAxisValueAnimation(g, C)
      }
      );
      return Promise.all(h).then(m)
  }
  startAxisValueAnimation(i, s) {
      const o = this.getAxisMotionValue(i);
      return Sd(this.visualElement, i),
      o.start(Nh(i, o, 0, s, this.visualElement, !1))
  }
  stopAnimation() {
      tn(i => this.getAxisMotionValue(i).stop())
  }
  pauseAnimation() {
      tn(i => this.getAxisMotionValue(i).animation?.pause())
  }
  getAnimationState(i) {
      return this.getAxisMotionValue(i).animation?.state
  }
  getAxisMotionValue(i) {
      const s = `_drag${i.toUpperCase()}`
        , o = this.visualElement.getProps()
        , l = o[s];
      return l || this.visualElement.getValue(i, (o.initial ? o.initial[i] : void 0) || 0)
  }
  snapToCursor(i) {
      tn(s => {
          const {drag: o} = this.getProps();
          if (!ll(s, o, this.currentDirection))
              return;
          const {projection: l} = this.visualElement
            , f = this.getAxisMotionValue(s);
          if (l && l.layout) {
              const {min: d, max: m} = l.layout.layoutBox[s];
              f.set(i[s] - qt(d, m, .5))
          }
      }
      )
  }
  scalePositionWithinConstraints() {
      if (!this.visualElement.current)
          return;
      const {drag: i, dragConstraints: s} = this.getProps()
        , {projection: o} = this.visualElement;
      if (!$a(s) || !o || !this.constraints)
          return;
      this.stopAnimation();
      const l = {
          x: 0,
          y: 0
      };
      tn(d => {
          const m = this.getAxisMotionValue(d);
          if (m && this.constraints !== !1) {
              const p = m.get();
              l[d] = LD({
                  min: p,
                  max: p
              }, this.constraints[d])
          }
      }
      );
      const {transformTemplate: f} = this.visualElement.getProps();
      this.visualElement.current.style.transform = f ? f({}, "") : "none",
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      tn(d => {
          if (!ll(d, i, null))
              return;
          const m = this.getAxisMotionValue(d)
            , {min: p, max: h} = this.constraints[d];
          m.set(qt(p, h, l[d]))
      }
      )
  }
  addListeners() {
      if (!this.visualElement.current)
          return;
      UD.set(this.visualElement, this);
      const i = this.visualElement.current
        , s = hr(i, "pointerdown", p => {
          const {drag: h, dragListener: g=!0} = this.getProps();
          h && g && this.start(p)
      }
      )
        , o = () => {
          const {dragConstraints: p} = this.getProps();
          $a(p) && p.current && (this.constraints = this.resolveRefConstraints())
      }
        , {projection: l} = this.visualElement
        , f = l.addEventListener("measure", o);
      l && !l.layout && (l.root && l.root.updateScroll(),
      l.updateLayout()),
      Ht.read(o);
      const d = Ar(window, "resize", () => this.scalePositionWithinConstraints())
        , m = l.addEventListener("didUpdate", ( ({delta: p, hasLayoutChanged: h}) => {
          this.isDragging && h && (tn(g => {
              const x = this.getAxisMotionValue(g);
              x && (this.originPoint[g] += p[g].translate,
              x.set(x.get() + p[g].translate))
          }
          ),
          this.visualElement.render())
      }
      ));
      return () => {
          d(),
          s(),
          f(),
          m && m()
      }
  }
  getProps() {
      const i = this.visualElement.getProps()
        , {drag: s=!1, dragDirectionLock: o=!1, dragPropagation: l=!1, dragConstraints: f=!1, dragElastic: d=Td, dragMomentum: m=!0} = i;
      return {
          ...i,
          drag: s,
          dragDirectionLock: o,
          dragPropagation: l,
          dragConstraints: f,
          dragElastic: d,
          dragMomentum: m
      }
  }
}
function ll(e, i, s) {
  return (i === !0 || i === e) && (s === null || s === e)
}
function PD(e, i=10) {
  let s = null;
  return Math.abs(e.y) > i ? s = "y" : Math.abs(e.x) > i && (s = "x"),
  s
}
class HD extends Oi {
  constructor(i) {
      super(i),
      this.removeGroupControls = an,
      this.removeListeners = an,
      this.controls = new kD(i)
  }
  mount() {
      const {dragControls: i} = this.node.getProps();
      i && (this.removeGroupControls = i.subscribe(this.controls)),
      this.removeListeners = this.controls.addListeners() || an
  }
  unmount() {
      this.removeGroupControls(),
      this.removeListeners()
  }
}
const m0 = e => (i, s) => {
  e && Ht.postRender( () => e(i, s))
}
;
class qD extends Oi {
  constructor() {
      super(...arguments),
      this.removePointerDownListener = an
  }
  onPointerDown(i) {
      this.session = new sS(i,this.createPanHandlers(),{
          transformPagePoint: this.node.getTransformPagePoint(),
          contextWindow: aS(this.node)
      })
  }
  createPanHandlers() {
      const {onPanSessionStart: i, onPanStart: s, onPan: o, onPanEnd: l} = this.node.getProps();
      return {
          onSessionStart: m0(i),
          onStart: m0(s),
          onMove: o,
          onEnd: (f, d) => {
              delete this.session,
              l && Ht.postRender( () => l(f, d))
          }
      }
  }
  mount() {
      this.removePointerDownListener = hr(this.node.current, "pointerdown", i => this.onPointerDown(i))
  }
  update() {
      this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
      this.removePointerDownListener(),
      this.session && this.session.end()
  }
}
const pl = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};
function p0(e, i) {
  return i.max === i.min ? 0 : e / (i.max - i.min) * 100
}
const lr = {
  correct: (e, i) => {
      if (!i.target)
          return e;
      if (typeof e == "string")
          if (ft.test(e))
              e = parseFloat(e);
          else
              return e;
      const s = p0(e, i.target.x)
        , o = p0(e, i.target.y);
      return `${s}% ${o}%`
  }
}
, GD = {
  correct: (e, {treeScale: i, projectionDelta: s}) => {
      const o = e
        , l = Mi.parse(e);
      if (l.length > 5)
          return o;
      const f = Mi.createTransformer(e)
        , d = typeof l[0] != "number" ? 1 : 0
        , m = s.x.scale * i.x
        , p = s.y.scale * i.y;
      l[0 + d] /= m,
      l[1 + d] /= p;
      const h = qt(m, p, .5);
      return typeof l[2 + d] == "number" && (l[2 + d] /= h),
      typeof l[3 + d] == "number" && (l[3 + d] /= h),
      f(l)
  }
};
let kf = !1;
class YD extends w.Component {
  componentDidMount() {
      const {visualElement: i, layoutGroup: s, switchLayoutGroup: o, layoutId: l} = this.props
        , {projection: f} = i;
      dO(XD),
      f && (s.group && s.group.add(f),
      o && o.register && l && o.register(f),
      kf && f.root.didUpdate(),
      f.addEventListener("animationComplete", () => {
          this.safeToRemove()
      }
      ),
      f.setOptions({
          ...f.options,
          onExitComplete: () => this.safeToRemove()
      })),
      pl.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(i) {
      const {layoutDependency: s, visualElement: o, drag: l, isPresent: f} = this.props
        , {projection: d} = o;
      return d && (d.isPresent = f,
      kf = !0,
      l || i.layoutDependency !== s || s === void 0 || i.isPresent !== f ? d.willUpdate() : this.safeToRemove(),
      i.isPresent !== f && (f ? d.promote() : d.relegate() || Ht.postRender( () => {
          const m = d.getStack();
          (!m || !m.members.length) && this.safeToRemove()
      }
      ))),
      null
  }
  componentDidUpdate() {
      const {projection: i} = this.props.visualElement;
      i && (i.root.didUpdate(),
      yh.postRender( () => {
          !i.currentAnimation && i.isLead() && this.safeToRemove()
      }
      ))
  }
  componentWillUnmount() {
      const {visualElement: i, layoutGroup: s, switchLayoutGroup: o} = this.props
        , {projection: l} = i;
      kf = !0,
      l && (l.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(l),
      o && o.deregister && o.deregister(l))
  }
  safeToRemove() {
      const {safeToRemove: i} = this.props;
      i && i()
  }
  render() {
      return null
  }
}
function oS(e) {
  const [i,s] = M1()
    , o = w.useContext(Kd);
  return y.jsx(YD, {
      ...e,
      layoutGroup: o,
      switchLayoutGroup: w.useContext(H1),
      isPresent: i,
      safeToRemove: s
  })
}
const XD = {
  borderRadius: {
      ...lr,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: lr,
  borderTopRightRadius: lr,
  borderBottomLeftRadius: lr,
  borderBottomRightRadius: lr,
  boxShadow: GD
};
function FD(e, i, s) {
  const o = he(e) ? e : as(e);
  return o.start(Nh("", o, i, s)),
  o.animation
}
const QD = (e, i) => e.depth - i.depth;
class KD {
  constructor() {
      this.children = [],
      this.isDirty = !1
  }
  add(i) {
      Wd(this.children, i),
      this.isDirty = !0
  }
  remove(i) {
      Jd(this.children, i),
      this.isDirty = !0
  }
  forEach(i) {
      this.isDirty && this.children.sort(QD),
      this.isDirty = !1,
      this.children.forEach(i)
  }
}
function ZD(e, i) {
  const s = Ce.now()
    , o = ({timestamp: l}) => {
      const f = l - s;
      f >= i && (Ni(o),
      e(f - i))
  }
  ;
  return Ht.setup(o, !0),
  () => Ni(o)
}
const lS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
, $D = lS.length
, y0 = e => typeof e == "string" ? parseFloat(e) : e
, g0 = e => typeof e == "number" || ft.test(e);
function WD(e, i, s, o, l, f) {
  l ? (e.opacity = qt(0, s.opacity ?? 1, JD(o)),
  e.opacityExit = qt(i.opacity ?? 1, 0, ID(o))) : f && (e.opacity = qt(i.opacity ?? 1, s.opacity ?? 1, o));
  for (let d = 0; d < $D; d++) {
      const m = `border${lS[d]}Radius`;
      let p = v0(i, m)
        , h = v0(s, m);
      if (p === void 0 && h === void 0)
          continue;
      p || (p = 0),
      h || (h = 0),
      p === 0 || h === 0 || g0(p) === g0(h) ? (e[m] = Math.max(qt(y0(p), y0(h), o), 0),
      (Tn.test(h) || Tn.test(p)) && (e[m] += "%")) : e[m] = h
  }
  (i.rotate || s.rotate) && (e.rotate = qt(i.rotate || 0, s.rotate || 0, o))
}
function v0(e, i) {
  return e[i] !== void 0 ? e[i] : e.borderRadius
}
const JD = cS(0, .5, Kb)
, ID = cS(.5, .95, an);
function cS(e, i, s) {
  return o => o < e ? 0 : o > i ? 1 : s(Sr(e, i, o))
}
function x0(e, i) {
  e.min = i.min,
  e.max = i.max
}
function Ie(e, i) {
  x0(e.x, i.x),
  x0(e.y, i.y)
}
function b0(e, i) {
  e.translate = i.translate,
  e.scale = i.scale,
  e.originPoint = i.originPoint,
  e.origin = i.origin
}
function S0(e, i, s, o, l) {
  return e -= i,
  e = Al(e, 1 / s, o),
  l !== void 0 && (e = Al(e, 1 / l, o)),
  e
}
function t3(e, i=0, s=1, o=.5, l, f=e, d=e) {
  if (Tn.test(i) && (i = parseFloat(i),
  i = qt(d.min, d.max, i / 100) - d.min),
  typeof i != "number")
      return;
  let m = qt(f.min, f.max, o);
  e === f && (m -= i),
  e.min = S0(e.min, i, s, m, l),
  e.max = S0(e.max, i, s, m, l)
}
function w0(e, i, [s,o,l], f, d) {
  t3(e, i[s], i[o], i[l], i.scale, f, d)
}
const e3 = ["x", "scaleX", "originX"]
, n3 = ["y", "scaleY", "originY"];
function T0(e, i, s, o) {
  w0(e.x, i, e3, s ? s.x : void 0, o ? o.x : void 0),
  w0(e.y, i, n3, s ? s.y : void 0, o ? o.y : void 0)
}
function E0(e) {
  return e.translate === 0 && e.scale === 1
}
function uS(e) {
  return E0(e.x) && E0(e.y)
}
function C0(e, i) {
  return e.min === i.min && e.max === i.max
}
function i3(e, i) {
  return C0(e.x, i.x) && C0(e.y, i.y)
}
function A0(e, i) {
  return Math.round(e.min) === Math.round(i.min) && Math.round(e.max) === Math.round(i.max)
}
function fS(e, i) {
  return A0(e.x, i.x) && A0(e.y, i.y)
}
function N0(e) {
  return ye(e.x) / ye(e.y)
}
function M0(e, i) {
  return e.translate === i.translate && e.scale === i.scale && e.originPoint === i.originPoint
}
class a3 {
  constructor() {
      this.members = []
  }
  add(i) {
      Wd(this.members, i),
      i.scheduleRender()
  }
  remove(i) {
      if (Jd(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead) {
          const s = this.members[this.members.length - 1];
          s && this.promote(s)
      }
  }
  relegate(i) {
      const s = this.members.findIndex(l => i === l);
      if (s === 0)
          return !1;
      let o;
      for (let l = s; l >= 0; l--) {
          const f = this.members[l];
          if (f.isPresent !== !1) {
              o = f;
              break
          }
      }
      return o ? (this.promote(o),
      !0) : !1
  }
  promote(i, s) {
      const o = this.lead;
      if (i !== o && (this.prevLead = o,
      this.lead = i,
      i.show(),
      o)) {
          o.instance && o.scheduleRender(),
          i.scheduleRender(),
          i.resumeFrom = o,
          s && (i.resumeFrom.preserveOpacity = !0),
          o.snapshot && (i.snapshot = o.snapshot,
          i.snapshot.latestValues = o.animationValues || o.latestValues),
          i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
          const {crossfade: l} = i.options;
          l === !1 && o.hide()
      }
  }
  exitAnimationComplete() {
      this.members.forEach(i => {
          const {options: s, resumingFrom: o} = i;
          s.onExitComplete && s.onExitComplete(),
          o && o.options.onExitComplete && o.options.onExitComplete()
      }
      )
  }
  scheduleRender() {
      this.members.forEach(i => {
          i.instance && i.scheduleRender(!1)
      }
      )
  }
  removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function s3(e, i, s) {
  let o = "";
  const l = e.x.translate / i.x
    , f = e.y.translate / i.y
    , d = s?.z || 0;
  if ((l || f || d) && (o = `translate3d(${l}px, ${f}px, ${d}px) `),
  (i.x !== 1 || i.y !== 1) && (o += `scale(${1 / i.x}, ${1 / i.y}) `),
  s) {
      const {transformPerspective: h, rotate: g, rotateX: x, rotateY: b, skewX: T, skewY: C} = s;
      h && (o = `perspective(${h}px) ${o}`),
      g && (o += `rotate(${g}deg) `),
      x && (o += `rotateX(${x}deg) `),
      b && (o += `rotateY(${b}deg) `),
      T && (o += `skewX(${T}deg) `),
      C && (o += `skewY(${C}deg) `)
  }
  const m = e.x.scale * i.x
    , p = e.y.scale * i.y;
  return (m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`),
  o || "none"
}
const Pf = ["", "X", "Y", "Z"]
, r3 = 1e3;
let o3 = 0;
function Hf(e, i, s, o) {
  const {latestValues: l} = i;
  l[e] && (s[e] = l[e],
  i.setStaticValue(e, 0),
  o && (o[e] = 0))
}
function dS(e) {
  if (e.hasCheckedOptimisedAppear = !0,
  e.root === e)
      return;
  const {visualElement: i} = e.options;
  if (!i)
      return;
  const s = W1(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
      const {layout: l, layoutId: f} = e.options;
      window.MotionCancelOptimisedAnimation(s, "transform", Ht, !(l || f))
  }
  const {parent: o} = e;
  o && !o.hasCheckedOptimisedAppear && dS(o)
}
function hS({attachResizeListener: e, defaultParent: i, measureScroll: s, checkIsScrollRoot: o, resetTransform: l}) {
  return class {
      constructor(d={}, m=i?.()) {
          this.id = o3++,
          this.animationId = 0,
          this.animationCommitId = 0,
          this.children = new Set,
          this.options = {},
          this.isTreeAnimating = !1,
          this.isAnimationBlocked = !1,
          this.isLayoutDirty = !1,
          this.isProjectionDirty = !1,
          this.isSharedProjectionDirty = !1,
          this.isTransformDirty = !1,
          this.updateManuallyBlocked = !1,
          this.updateBlockedByResize = !1,
          this.isUpdating = !1,
          this.isSVG = !1,
          this.needsReset = !1,
          this.shouldResetTransform = !1,
          this.hasCheckedOptimisedAppear = !1,
          this.treeScale = {
              x: 1,
              y: 1
          },
          this.eventHandlers = new Map,
          this.hasTreeAnimated = !1,
          this.updateScheduled = !1,
          this.scheduleUpdate = () => this.update(),
          this.projectionUpdateScheduled = !1,
          this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1,
              this.clearAllSnapshots())
          }
          ,
          this.updateProjection = () => {
              this.projectionUpdateScheduled = !1,
              this.nodes.forEach(u3),
              this.nodes.forEach(m3),
              this.nodes.forEach(p3),
              this.nodes.forEach(f3)
          }
          ,
          this.resolvedRelativeTargetAt = 0,
          this.hasProjected = !1,
          this.isVisible = !0,
          this.animationProgress = 0,
          this.sharedNodes = new Map,
          this.latestValues = d,
          this.root = m ? m.root || m : this,
          this.path = m ? [...m.path, m] : [],
          this.parent = m,
          this.depth = m ? m.depth + 1 : 0;
          for (let p = 0; p < this.path.length; p++)
              this.path[p].shouldResetTransform = !0;
          this.root === this && (this.nodes = new KD)
      }
      addEventListener(d, m) {
          return this.eventHandlers.has(d) || this.eventHandlers.set(d, new eh),
          this.eventHandlers.get(d).add(m)
      }
      notifyListeners(d, ...m) {
          const p = this.eventHandlers.get(d);
          p && p.notify(...m)
      }
      hasListeners(d) {
          return this.eventHandlers.has(d)
      }
      mount(d) {
          if (this.instance)
              return;
          this.isSVG = N1(d) && !WR(d),
          this.instance = d;
          const {layoutId: m, layout: p, visualElement: h} = this.options;
          if (h && !h.current && h.mount(d),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0),
          e) {
              let g, x = 0;
              const b = () => this.root.updateBlockedByResize = !1;
              Ht.read( () => {
                  x = window.innerWidth
              }
              ),
              e(d, () => {
                  const T = window.innerWidth;
                  T !== x && (x = T,
                  this.root.updateBlockedByResize = !0,
                  g && g(),
                  g = ZD(b, 250),
                  pl.hasAnimatedSinceResize && (pl.hasAnimatedSinceResize = !1,
                  this.nodes.forEach(O0)))
              }
              )
          }
          m && this.root.registerSharedNode(m, this),
          this.options.animate !== !1 && h && (m || p) && this.addEventListener("didUpdate", ({delta: g, hasLayoutChanged: x, hasRelativeLayoutChanged: b, layout: T}) => {
              if (this.isTreeAnimationBlocked()) {
                  this.target = void 0,
                  this.relativeTarget = void 0;
                  return
              }
              const C = this.options.transition || h.getDefaultTransition() || b3
                , {onLayoutAnimationStart: E, onLayoutAnimationComplete: N} = h.getProps()
                , O = !this.targetLayout || !fS(this.targetLayout, T)
                , z = !x && b;
              if (this.options.layoutRoot || this.resumeFrom || z || x && (O || !this.currentAnimation)) {
                  this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                  this.resumingFrom.resumingFrom = void 0);
                  const D = {
                      ...mh(C, "layout"),
                      onPlay: E,
                      onComplete: N
                  };
                  (h.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0,
                  D.type = !1),
                  this.startAnimation(D),
                  this.setAnimationOrigin(g, z)
              } else
                  x || O0(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = T
          }
          )
      }
      unmount() {
          this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
          const d = this.getStack();
          d && d.remove(this),
          this.parent && this.parent.children.delete(this),
          this.instance = void 0,
          this.eventHandlers.clear(),
          Ni(this.updateProjection)
      }
      blockUpdate() {
          this.updateManuallyBlocked = !0
      }
      unblockUpdate() {
          this.updateManuallyBlocked = !1
      }
      isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize
      }
      isTreeAnimationBlocked() {
          return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
      }
      startUpdate() {
          this.isUpdateBlocked() || (this.isUpdating = !0,
          this.nodes && this.nodes.forEach(y3),
          this.animationId++)
      }
      getTransformTemplate() {
          const {visualElement: d} = this.options;
          return d && d.getProps().transformTemplate
      }
      willUpdate(d=!0) {
          if (this.root.hasTreeAnimated = !0,
          this.root.isUpdateBlocked()) {
              this.options.onExitComplete && this.options.onExitComplete();
              return
          }
          if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && dS(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
              return;
          this.isLayoutDirty = !0;
          for (let g = 0; g < this.path.length; g++) {
              const x = this.path[g];
              x.shouldResetTransform = !0,
              x.updateScroll("snapshot"),
              x.options.layoutRoot && x.willUpdate(!1)
          }
          const {layoutId: m, layout: p} = this.options;
          if (m === void 0 && !p)
              return;
          const h = this.getTransformTemplate();
          this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0,
          this.updateSnapshot(),
          d && this.notifyListeners("willUpdate")
      }
      update() {
          if (this.updateScheduled = !1,
          this.isUpdateBlocked()) {
              this.unblockUpdate(),
              this.clearAllSnapshots(),
              this.nodes.forEach(j0);
              return
          }
          if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(R0);
              return
          }
          this.animationCommitId = this.animationId,
          this.isUpdating ? (this.isUpdating = !1,
          this.nodes.forEach(h3),
          this.nodes.forEach(l3),
          this.nodes.forEach(c3)) : this.nodes.forEach(R0),
          this.clearAllSnapshots();
          const m = Ce.now();
          fe.delta = Zn(0, 1e3 / 60, m - fe.timestamp),
          fe.timestamp = m,
          fe.isProcessing = !0,
          jf.update.process(fe),
          jf.preRender.process(fe),
          jf.render.process(fe),
          fe.isProcessing = !1
      }
      didUpdate() {
          this.updateScheduled || (this.updateScheduled = !0,
          yh.read(this.scheduleUpdate))
      }
      clearAllSnapshots() {
          this.nodes.forEach(d3),
          this.sharedNodes.forEach(g3)
      }
      scheduleUpdateProjection() {
          this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
          Ht.preRender(this.updateProjection, !1, !0))
      }
      scheduleCheckAfterUnmount() {
          Ht.postRender( () => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
          }
          )
      }
      updateSnapshot() {
          this.snapshot || !this.instance || (this.snapshot = this.measure(),
          this.snapshot && !ye(this.snapshot.measuredBox.x) && !ye(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
      }
      updateLayout() {
          if (!this.instance || (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
              return;
          if (this.resumeFrom && !this.resumeFrom.instance)
              for (let p = 0; p < this.path.length; p++)
                  this.path[p].updateScroll();
          const d = this.layout;
          this.layout = this.measure(!1),
          this.layoutCorrected = Zt(),
          this.isLayoutDirty = !1,
          this.projectionDelta = void 0,
          this.notifyListeners("measure", this.layout.layoutBox);
          const {visualElement: m} = this.options;
          m && m.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
      }
      updateScroll(d="measure") {
          let m = !!(this.options.layoutScroll && this.instance);
          if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (m = !1),
          m && this.instance) {
              const p = o(this.instance);
              this.scroll = {
                  animationId: this.root.animationId,
                  phase: d,
                  isRoot: p,
                  offset: s(this.instance),
                  wasRoot: this.scroll ? this.scroll.isRoot : p
              }
          }
      }
      resetTransform() {
          if (!l)
              return;
          const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
            , m = this.projectionDelta && !uS(this.projectionDelta)
            , p = this.getTransformTemplate()
            , h = p ? p(this.latestValues, "") : void 0
            , g = h !== this.prevTransformTemplateValue;
          d && this.instance && (m || ta(this.latestValues) || g) && (l(this.instance, h),
          this.shouldResetTransform = !1,
          this.scheduleRender())
      }
      measure(d=!0) {
          const m = this.measurePageBox();
          let p = this.removeElementScroll(m);
          return d && (p = this.removeTransform(p)),
          S3(p),
          {
              animationId: this.root.animationId,
              measuredBox: m,
              layoutBox: p,
              latestValues: {},
              source: this.id
          }
      }
      measurePageBox() {
          const {visualElement: d} = this.options;
          if (!d)
              return Zt();
          const m = d.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(w3))) {
              const {scroll: h} = this.root;
              h && (Wa(m.x, h.offset.x),
              Wa(m.y, h.offset.y))
          }
          return m
      }
      removeElementScroll(d) {
          const m = Zt();
          if (Ie(m, d),
          this.scroll?.wasRoot)
              return m;
          for (let p = 0; p < this.path.length; p++) {
              const h = this.path[p]
                , {scroll: g, options: x} = h;
              h !== this.root && g && x.layoutScroll && (g.wasRoot && Ie(m, d),
              Wa(m.x, g.offset.x),
              Wa(m.y, g.offset.y))
          }
          return m
      }
      applyTransform(d, m=!1) {
          const p = Zt();
          Ie(p, d);
          for (let h = 0; h < this.path.length; h++) {
              const g = this.path[h];
              !m && g.options.layoutScroll && g.scroll && g !== g.root && Ja(p, {
                  x: -g.scroll.offset.x,
                  y: -g.scroll.offset.y
              }),
              ta(g.latestValues) && Ja(p, g.latestValues)
          }
          return ta(this.latestValues) && Ja(p, this.latestValues),
          p
      }
      removeTransform(d) {
          const m = Zt();
          Ie(m, d);
          for (let p = 0; p < this.path.length; p++) {
              const h = this.path[p];
              if (!h.instance || !ta(h.latestValues))
                  continue;
              gd(h.latestValues) && h.updateSnapshot();
              const g = Zt()
                , x = h.measurePageBox();
              Ie(g, x),
              T0(m, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, g)
          }
          return ta(this.latestValues) && T0(m, this.latestValues),
          m
      }
      setTargetDelta(d) {
          this.targetDelta = d,
          this.root.scheduleUpdateProjection(),
          this.isProjectionDirty = !0
      }
      setOptions(d) {
          this.options = {
              ...this.options,
              ...d,
              crossfade: d.crossfade !== void 0 ? d.crossfade : !0
          }
      }
      clearMeasurements() {
          this.scroll = void 0,
          this.layout = void 0,
          this.snapshot = void 0,
          this.prevTransformTemplateValue = void 0,
          this.targetDelta = void 0,
          this.target = void 0,
          this.isLayoutDirty = !1
      }
      forceRelativeParentToResolveTarget() {
          this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
      }
      resolveTargetDelta(d=!1) {
          const m = this.getLead();
          this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
          this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
          const p = !!this.resumingFrom || this !== m;
          if (!(d || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
              return;
          const {layout: g, layoutId: x} = this.options;
          if (!(!this.layout || !(g || x))) {
              if (this.resolvedRelativeTargetAt = fe.timestamp,
              !this.targetDelta && !this.relativeTarget) {
                  const b = this.getClosestProjectingParent();
                  b && b.layout && this.animationProgress !== 1 ? (this.relativeParent = b,
                  this.forceRelativeParentToResolveTarget(),
                  this.relativeTarget = Zt(),
                  this.relativeTargetOrigin = Zt(),
                  pr(this.relativeTargetOrigin, this.layout.layoutBox, b.layout.layoutBox),
                  Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Zt(),
              this.targetWithTransforms = Zt()),
              this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
              MD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ie(this.target, this.layout.layoutBox),
              X1(this.target, this.targetDelta)) : Ie(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)) {
                  this.attemptToResolveRelativeTarget = !1;
                  const b = this.getClosestProjectingParent();
                  b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? (this.relativeParent = b,
                  this.forceRelativeParentToResolveTarget(),
                  this.relativeTarget = Zt(),
                  this.relativeTargetOrigin = Zt(),
                  pr(this.relativeTargetOrigin, this.target, b.target),
                  Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
          }
      }
      getClosestProjectingParent() {
          if (!(!this.parent || gd(this.parent.latestValues) || Y1(this.parent.latestValues)))
              return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
      }
      isProjecting() {
          return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
      }
      calcProjection() {
          const d = this.getLead()
            , m = !!this.resumingFrom || this !== d;
          let p = !0;
          if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
          m && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
          this.resolvedRelativeTargetAt === fe.timestamp && (p = !1),
          p)
              return;
          const {layout: h, layoutId: g} = this.options;
          if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
          this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(h || g))
              return;
          Ie(this.layoutCorrected, this.layout.layoutBox);
          const x = this.treeScale.x
            , b = this.treeScale.y;
          PO(this.layoutCorrected, this.treeScale, this.path, m),
          d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
          d.targetWithTransforms = Zt());
          const {target: T} = d;
          if (!T) {
              this.prevProjectionDelta && (this.createProjectionDeltas(),
              this.scheduleRender());
              return
          }
          !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (b0(this.prevProjectionDelta.x, this.projectionDelta.x),
          b0(this.prevProjectionDelta.y, this.projectionDelta.y)),
          mr(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
          (this.treeScale.x !== x || this.treeScale.y !== b || !M0(this.projectionDelta.x, this.prevProjectionDelta.x) || !M0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", T))
      }
      hide() {
          this.isVisible = !1
      }
      show() {
          this.isVisible = !0
      }
      scheduleRender(d=!0) {
          if (this.options.visualElement?.scheduleRender(),
          d) {
              const m = this.getStack();
              m && m.scheduleRender()
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
      }
      createProjectionDeltas() {
          this.prevProjectionDelta = Ia(),
          this.projectionDelta = Ia(),
          this.projectionDeltaWithTransform = Ia()
      }
      setAnimationOrigin(d, m=!1) {
          const p = this.snapshot
            , h = p ? p.latestValues : {}
            , g = {
              ...this.latestValues
          }
            , x = Ia();
          (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
          this.attemptToResolveRelativeTarget = !m;
          const b = Zt()
            , T = p ? p.source : void 0
            , C = this.layout ? this.layout.source : void 0
            , E = T !== C
            , N = this.getStack()
            , O = !N || N.members.length <= 1
            , z = !!(E && !O && this.options.crossfade === !0 && !this.path.some(x3));
          this.animationProgress = 0;
          let D;
          this.mixTargetDelta = q => {
              const G = q / 1e3;
              D0(x.x, d.x, G),
              D0(x.y, d.y, G),
              this.setTargetDelta(x),
              this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (pr(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
              v3(this.relativeTarget, this.relativeTargetOrigin, b, G),
              D && i3(this.relativeTarget, D) && (this.isProjectionDirty = !1),
              D || (D = Zt()),
              Ie(D, this.relativeTarget)),
              E && (this.animationValues = g,
              WD(g, h, this.latestValues, G, z, O)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              this.animationProgress = G
          }
          ,
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
      }
      startAnimation(d) {
          this.notifyListeners("animationStart"),
          this.currentAnimation?.stop(),
          this.resumingFrom?.currentAnimation?.stop(),
          this.pendingAnimation && (Ni(this.pendingAnimation),
          this.pendingAnimation = void 0),
          this.pendingAnimation = Ht.update( () => {
              pl.hasAnimatedSinceResize = !0,
              this.motionValue || (this.motionValue = as(0)),
              this.currentAnimation = FD(this.motionValue, [0, 1e3], {
                  ...d,
                  velocity: 0,
                  isSync: !0,
                  onUpdate: m => {
                      this.mixTargetDelta(m),
                      d.onUpdate && d.onUpdate(m)
                  }
                  ,
                  onStop: () => {}
                  ,
                  onComplete: () => {
                      d.onComplete && d.onComplete(),
                      this.completeAnimation()
                  }
              }),
              this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
              this.pendingAnimation = void 0
          }
          )
      }
      completeAnimation() {
          this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
          this.resumingFrom.preserveOpacity = void 0);
          const d = this.getStack();
          d && d.exitAnimationComplete(),
          this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
          this.notifyListeners("animationComplete")
      }
      finishAnimation() {
          this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(r3),
          this.currentAnimation.stop()),
          this.completeAnimation()
      }
      applyTransformsToTarget() {
          const d = this.getLead();
          let {targetWithTransforms: m, target: p, layout: h, latestValues: g} = d;
          if (!(!m || !p || !h)) {
              if (this !== d && this.layout && h && mS(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
                  p = this.target || Zt();
                  const x = ye(this.layout.layoutBox.x);
                  p.x.min = d.target.x.min,
                  p.x.max = p.x.min + x;
                  const b = ye(this.layout.layoutBox.y);
                  p.y.min = d.target.y.min,
                  p.y.max = p.y.min + b
              }
              Ie(m, p),
              Ja(m, g),
              mr(this.projectionDeltaWithTransform, this.layoutCorrected, m, g)
          }
      }
      registerSharedNode(d, m) {
          this.sharedNodes.has(d) || this.sharedNodes.set(d, new a3),
          this.sharedNodes.get(d).add(m);
          const h = m.options.initialPromotionConfig;
          m.promote({
              transition: h ? h.transition : void 0,
              preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(m) : void 0
          })
      }
      isLead() {
          const d = this.getStack();
          return d ? d.lead === this : !0
      }
      getLead() {
          const {layoutId: d} = this.options;
          return d ? this.getStack()?.lead || this : this
      }
      getPrevLead() {
          const {layoutId: d} = this.options;
          return d ? this.getStack()?.prevLead : void 0
      }
      getStack() {
          const {layoutId: d} = this.options;
          if (d)
              return this.root.sharedNodes.get(d)
      }
      promote({needsReset: d, transition: m, preserveFollowOpacity: p}={}) {
          const h = this.getStack();
          h && h.promote(this, p),
          d && (this.projectionDelta = void 0,
          this.needsReset = !0),
          m && this.setOptions({
              transition: m
          })
      }
      relegate() {
          const d = this.getStack();
          return d ? d.relegate(this) : !1
      }
      resetSkewAndRotation() {
          const {visualElement: d} = this.options;
          if (!d)
              return;
          let m = !1;
          const {latestValues: p} = d;
          if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (m = !0),
          !m)
              return;
          const h = {};
          p.z && Hf("z", d, h, this.animationValues);
          for (let g = 0; g < Pf.length; g++)
              Hf(`rotate${Pf[g]}`, d, h, this.animationValues),
              Hf(`skew${Pf[g]}`, d, h, this.animationValues);
          d.render();
          for (const g in h)
              d.setStaticValue(g, h[g]),
              this.animationValues && (this.animationValues[g] = h[g]);
          d.scheduleRender()
      }
      applyProjectionStyles(d, m) {
          if (!this.instance || this.isSVG)
              return;
          if (!this.isVisible) {
              d.visibility = "hidden";
              return
          }
          const p = this.getTransformTemplate();
          if (this.needsReset) {
              this.needsReset = !1,
              d.visibility = "",
              d.opacity = "",
              d.pointerEvents = ml(m?.pointerEvents) || "",
              d.transform = p ? p(this.latestValues, "") : "none";
              return
          }
          const h = this.getLead();
          if (!this.projectionDelta || !this.layout || !h.target) {
              this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
              d.pointerEvents = ml(m?.pointerEvents) || ""),
              this.hasProjected && !ta(this.latestValues) && (d.transform = p ? p({}, "") : "none",
              this.hasProjected = !1);
              return
          }
          d.visibility = "";
          const g = h.animationValues || h.latestValues;
          this.applyTransformsToTarget();
          let x = s3(this.projectionDeltaWithTransform, this.treeScale, g);
          p && (x = p(g, x)),
          d.transform = x;
          const {x: b, y: T} = this.projectionDelta;
          d.transformOrigin = `${b.origin * 100}% ${T.origin * 100}% 0`,
          h.animationValues ? d.opacity = h === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : d.opacity = h === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
          for (const C in Cr) {
              if (g[C] === void 0)
                  continue;
              const {correct: E, applyTo: N, isCSSVariable: O} = Cr[C]
                , z = x === "none" ? g[C] : E(g[C], h);
              if (N) {
                  const D = N.length;
                  for (let q = 0; q < D; q++)
                      d[N[q]] = z
              } else
                  O ? this.options.visualElement.renderState.vars[C] = z : d[C] = z
          }
          this.options.layoutId && (d.pointerEvents = h === this ? ml(m?.pointerEvents) || "" : "none")
      }
      clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0
      }
      resetTree() {
          this.root.nodes.forEach(d => d.currentAnimation?.stop()),
          this.root.nodes.forEach(j0),
          this.root.sharedNodes.clear()
      }
  }
}
function l3(e) {
  e.updateLayout()
}
function c3(e) {
  const i = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
      const {layoutBox: s, measuredBox: o} = e.layout
        , {animationType: l} = e.options
        , f = i.source !== e.layout.source;
      l === "size" ? tn(g => {
          const x = f ? i.measuredBox[g] : i.layoutBox[g]
            , b = ye(x);
          x.min = s[g].min,
          x.max = x.min + b
      }
      ) : mS(l, i.layoutBox, s) && tn(g => {
          const x = f ? i.measuredBox[g] : i.layoutBox[g]
            , b = ye(s[g]);
          x.max = x.min + b,
          e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
          e.relativeTarget[g].max = e.relativeTarget[g].min + b)
      }
      );
      const d = Ia();
      mr(d, s, i.layoutBox);
      const m = Ia();
      f ? mr(m, e.applyTransform(o, !0), i.measuredBox) : mr(m, s, i.layoutBox);
      const p = !uS(d);
      let h = !1;
      if (!e.resumeFrom) {
          const g = e.getClosestProjectingParent();
          if (g && !g.resumeFrom) {
              const {snapshot: x, layout: b} = g;
              if (x && b) {
                  const T = Zt();
                  pr(T, i.layoutBox, x.layoutBox);
                  const C = Zt();
                  pr(C, s, b.layoutBox),
                  fS(T, C) || (h = !0),
                  g.options.layoutRoot && (e.relativeTarget = C,
                  e.relativeTargetOrigin = T,
                  e.relativeParent = g)
              }
          }
      }
      e.notifyListeners("didUpdate", {
          layout: s,
          snapshot: i,
          delta: m,
          layoutDelta: d,
          hasLayoutChanged: p,
          hasRelativeLayoutChanged: h
      })
  } else if (e.isLead()) {
      const {onExitComplete: s} = e.options;
      s && s()
  }
  e.options.transition = void 0
}
function u3(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
  e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
  e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function f3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function d3(e) {
  e.clearSnapshot()
}
function j0(e) {
  e.clearMeasurements()
}
function R0(e) {
  e.isLayoutDirty = !1
}
function h3(e) {
  const {visualElement: i} = e.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
  e.resetTransform()
}
function O0(e) {
  e.finishAnimation(),
  e.targetDelta = e.relativeTarget = e.target = void 0,
  e.isProjectionDirty = !0
}
function m3(e) {
  e.resolveTargetDelta()
}
function p3(e) {
  e.calcProjection()
}
function y3(e) {
  e.resetSkewAndRotation()
}
function g3(e) {
  e.removeLeadSnapshot()
}
function D0(e, i, s) {
  e.translate = qt(i.translate, 0, s),
  e.scale = qt(i.scale, 1, s),
  e.origin = i.origin,
  e.originPoint = i.originPoint
}
function _0(e, i, s, o) {
  e.min = qt(i.min, s.min, o),
  e.max = qt(i.max, s.max, o)
}
function v3(e, i, s, o) {
  _0(e.x, i.x, s.x, o),
  _0(e.y, i.y, s.y, o)
}
function x3(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const b3 = {
  duration: .45,
  ease: [.4, 0, .1, 1]
}
, z0 = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
, L0 = z0("applewebkit/") && !z0("chrome/") ? Math.round : an;
function V0(e) {
  e.min = L0(e.min),
  e.max = L0(e.max)
}
function S3(e) {
  V0(e.x),
  V0(e.y)
}
function mS(e, i, s) {
  return e === "position" || e === "preserve-aspect" && !ND(N0(i), N0(s), .2)
}
function w3(e) {
  return e !== e.root && e.scroll?.wasRoot
}
const T3 = hS({
  attachResizeListener: (e, i) => Ar(e, "resize", i),
  measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
})
, qf = {
  current: void 0
}
, pS = hS({
  measureScroll: e => ({
      x: e.scrollLeft,
      y: e.scrollTop
  }),
  defaultParent: () => {
      if (!qf.current) {
          const e = new T3({});
          e.mount(window),
          e.setOptions({
              layoutScroll: !0
          }),
          qf.current = e
      }
      return qf.current
  }
  ,
  resetTransform: (e, i) => {
      e.style.transform = i !== void 0 ? i : "none"
  }
  ,
  checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
, E3 = {
  pan: {
      Feature: qD
  },
  drag: {
      Feature: HD,
      ProjectionNode: pS,
      MeasureLayout: oS
  }
};
function B0(e, i, s) {
  const {props: o} = e;
  e.animationState && o.whileHover && e.animationState.setActive("whileHover", s === "Start");
  const l = "onHover" + s
    , f = o[l];
  f && Ht.postRender( () => f(i, _r(i)))
}
class C3 extends Oi {
  mount() {
      const {current: i} = this.node;
      i && (this.unmount = FR(i, (s, o) => (B0(this.node, o, "Start"),
      l => B0(this.node, l, "End"))))
  }
  unmount() {}
}
class A3 extends Oi {
  constructor() {
      super(...arguments),
      this.isActive = !1
  }
  onFocus() {
      let i = !1;
      try {
          i = this.node.current.matches(":focus-visible")
      } catch {
          i = !0
      }
      !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
      this.isActive = !0)
  }
  onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
      this.isActive = !1)
  }
  mount() {
      this.unmount = Rr(Ar(this.node.current, "focus", () => this.onFocus()), Ar(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() {}
}
function U0(e, i, s) {
  const {props: o} = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
      return;
  e.animationState && o.whileTap && e.animationState.setActive("whileTap", s === "Start");
  const l = "onTap" + (s === "End" ? "" : s)
    , f = o[l];
  f && Ht.postRender( () => f(i, _r(i)))
}
class N3 extends Oi {
  mount() {
      const {current: i} = this.node;
      i && (this.unmount = $R(i, (s, o) => (U0(this.node, o, "Start"),
      (l, {success: f}) => U0(this.node, l, f ? "End" : "Cancel")), {
          useGlobalTarget: this.node.props.globalTapTarget
      }))
  }
  unmount() {}
}
const Ed = new WeakMap
, Gf = new WeakMap
, M3 = e => {
  const i = Ed.get(e.target);
  i && i(e)
}
, j3 = e => {
  e.forEach(M3)
}
;
function R3({root: e, ...i}) {
  const s = e || document;
  Gf.has(s) || Gf.set(s, {});
  const o = Gf.get(s)
    , l = JSON.stringify(i);
  return o[l] || (o[l] = new IntersectionObserver(j3,{
      root: e,
      ...i
  })),
  o[l]
}
function O3(e, i, s) {
  const o = R3(i);
  return Ed.set(e, s),
  o.observe(e),
  () => {
      Ed.delete(e),
      o.unobserve(e)
  }
}
const D3 = {
  some: 0,
  all: 1
};
class _3 extends Oi {
  constructor() {
      super(...arguments),
      this.hasEnteredView = !1,
      this.isInView = !1
  }
  startObserver() {
      this.unmount();
      const {viewport: i={}} = this.node.getProps()
        , {root: s, margin: o, amount: l="some", once: f} = i
        , d = {
          root: s ? s.current : void 0,
          rootMargin: o,
          threshold: typeof l == "number" ? l : D3[l]
      }
        , m = p => {
          const {isIntersecting: h} = p;
          if (this.isInView === h || (this.isInView = h,
          f && !h && this.hasEnteredView))
              return;
          h && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", h);
          const {onViewportEnter: g, onViewportLeave: x} = this.node.getProps()
            , b = h ? g : x;
          b && b(p)
      }
      ;
      return O3(this.node.current, d, m)
  }
  mount() {
      this.startObserver()
  }
  update() {
      if (typeof IntersectionObserver > "u")
          return;
      const {props: i, prevProps: s} = this.node;
      ["amount", "margin", "root"].some(z3(i, s)) && this.startObserver()
  }
  unmount() {}
}
function z3({viewport: e={}}, {viewport: i={}}={}) {
  return s => e[s] !== i[s]
}
const L3 = {
  inView: {
      Feature: _3
  },
  tap: {
      Feature: N3
  },
  focus: {
      Feature: A3
  },
  hover: {
      Feature: C3
  }
}
, V3 = {
  layout: {
      ProjectionNode: pS,
      MeasureLayout: oS
  }
}
, B3 = {
  ...SD,
  ...L3,
  ...E3,
  ...V3
}
, At = BO(B3, $O);
function U3({size: e=24, animate: i=!1}) {
  return y.jsx(At.div, {
      animate: i ? {
          y: [0, -4, 0]
      } : {},
      transition: i ? {
          duration: 2,
          repeat: 1 / 0
      } : {},
      className: "inline-flex items-center justify-center",
      style: {
          width: e,
          height: e
      },
      children: y.jsx("span", {
          className: "block",
          style: {
              fontSize: e * .7
          },
          children: "🌿"
      })
  })
}
function yS() {
  const [e,i] = w.useState(!1)
    , [s,o] = w.useState(!1)
    , {branding: l} = Hl();
  return w.useEffect( () => {
      const f = () => {
          i(window.scrollY > 10)
      }
      ;
      return window.addEventListener("scroll", f),
      () => window.removeEventListener("scroll", f)
  }
  , []),
  y.jsxs("nav", {
      className: ee("fixed top-14 left-0 right-0 z-40 transition-smooth-lg", e ? "bg-background/70 backdrop-blur-2xl border-b border-border/30 py-3 glow-teal" : "bg-transparent py-6"),
      children: [y.jsxs("div", {
          className: "container mx-auto px-4 flex items-center justify-between",
          children: [y.jsxs(xf, {
              href: "/",
              className: "flex items-center gap-3 group",
              children: [y.jsx(At.div, {
                  whileHover: {
                      scale: 1.1,
                      rotate: 5
                  },
                  className: "text-background p-2 rounded-lg group-hover-lift",
                  style: {
                      backgroundColor: l.primaryColor,
                      boxShadow: `0 0 20px ${l.primaryColor}60`
                  },
                  children: y.jsx(U3, {
                      size: 24,
                      animate: !0
                  })
              }), y.jsx("span", {
                  className: ee("font-extrabold text-lg tracking-tight transition-smooth", "text-foreground"),
                  style: {
                      color: l.primaryColor
                  },
                  children: l.companyName
              })]
          }), y.jsx("div", {
              className: "hidden md:flex items-center gap-8",
              children: ["Features", "Pricing", "Resources", "Enterprise"].map(f => y.jsxs(At.a, {
                  href: `#${f.toLowerCase()}`,
                  whileHover: {
                      y: -2
                  },
                  className: ee("text-sm font-semibold transition-smooth relative group", e ? "text-foreground/80" : "text-foreground"),
                  style: {
                      color: l.primaryColor
                  },
                  children: [f, y.jsx(At.div, {
                      className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent",
                      initial: {
                          scaleX: 0
                      },
                      whileHover: {
                          scaleX: 1
                      },
                      transition: {
                          duration: .3
                      }
                  })]
              }, f))
          }), y.jsxs("div", {
              className: "hidden md:flex items-center gap-3",
              children: [y.jsx(xf, {
                  href: "/branding",
                  children: y.jsx(At.div, {
                      whileHover: {
                          scale: 1.05
                      },
                      whileTap: {
                          scale: .95
                      },
                      children: y.jsxs(Ee, {
                          variant: "ghost",
                          size: "sm",
                          className: "text-foreground hover:text-primary transition-smooth",
                          children: [y.jsx(vr, {
                              className: "h-4 w-4 mr-2"
                          }), "Customize"]
                      })
                  })
              }), y.jsx(At.div, {
                  whileHover: {
                      scale: 1.05
                  },
                  whileTap: {
                      scale: .95
                  },
                  children: y.jsx(Ee, {
                      variant: "ghost",
                      className: "text-foreground hover:text-primary transition-smooth",
                      children: "Log in"
                  })
              }), y.jsx(At.div, {
                  whileHover: {
                      scale: 1.05
                  },
                  whileTap: {
                      scale: .95
                  },
                  children: y.jsx(Ee, {
                      className: "text-background font-semibold glow-green",
                      style: {
                          backgroundColor: l.primaryColor,
                          boxShadow: `0 0 20px ${l.primaryColor}60`
                      },
                      children: "Start Free Trial"
                  })
              })]
          }), y.jsx("button", {
              className: "md:hidden text-foreground",
              onClick: () => o(!s),
              children: s ? y.jsx(Ld, {
                  className: e ? "text-foreground" : "text-white"
              }) : y.jsx(OC, {
                  className: e ? "text-foreground" : "text-white"
              })
          })]
      }), s && y.jsxs("div", {
          className: "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5",
          children: [["Features", "Pricing", "Resources", "Enterprise"].map(f => y.jsx("a", {
              href: `#${f.toLowerCase()}`,
              className: "text-sm font-medium text-muted-foreground hover:text-primary py-2",
              onClick: () => o(!1),
              children: f
          }, f)), y.jsxs("div", {
              className: "flex flex-col gap-2 mt-4",
              children: [y.jsx(xf, {
                  href: "/branding",
                  children: y.jsxs(Ee, {
                      variant: "outline",
                      className: "w-full justify-center",
                      children: [y.jsx(vr, {
                          className: "h-4 w-4 mr-2"
                      }), "Customize"]
                  })
              }), y.jsx(Ee, {
                  variant: "outline",
                  className: "w-full",
                  children: "Log in"
              }), y.jsx(Ee, {
                  className: "w-full",
                  style: {
                      backgroundColor: l.primaryColor
                  },
                  children: "Start Free Trial"
              })]
          })]
      })]
  })
}
function gS() {
  return y.jsx("footer", {
      className: "bg-slate-950 text-slate-300 py-16 border-t border-white/10",
      children: y.jsxs("div", {
          className: "container mx-auto px-4",
          children: [y.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-12",
              children: [y.jsxs("div", {
                  className: "space-y-4",
                  children: [y.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [y.jsx("div", {
                          className: "bg-primary text-primary-foreground p-2 rounded-lg",
                          children: y.jsx(TC, {
                              className: "h-5 w-5"
                          })
                      }), y.jsx("span", {
                          className: "font-bold text-xl text-white",
                          children: "Lawn Care OS"
                      })]
                  }), y.jsx("p", {
                      className: "text-sm leading-relaxed opacity-80",
                      children: "The complete operating system for modern landscaping businesses. From quote to cash, we handle the chaos so you can grow."
                  })]
              }), y.jsxs("div", {
                  children: [y.jsx("h4", {
                      className: "font-semibold text-white mb-4",
                      children: "Product"
                  }), y.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "LawnCRM Core"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "RouteIQ"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "LawnQuote AI"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "CrewHub"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "WeatherShield Pro"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "LawnPay"
                          })
                      })]
                  })]
              }), y.jsxs("div", {
                  children: [y.jsx("h4", {
                      className: "font-semibold text-white mb-4",
                      children: "Company"
                  }), y.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "About Us"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "Careers"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "Blog"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "Contact"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "Partners"
                          })
                      })]
                  })]
              }), y.jsxs("div", {
                  children: [y.jsx("h4", {
                      className: "font-semibold text-white mb-4",
                      children: "Legal"
                  }), y.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "Privacy Policy"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "Terms of Service"
                          })
                      }), y.jsx("li", {
                          children: y.jsx("a", {
                              href: "#",
                              className: "hover:text-primary transition-colors",
                              children: "Cookie Policy"
                          })
                      })]
                  }), y.jsxs("div", {
                      className: "flex gap-4 mt-6",
                      children: [y.jsx("a", {
                          href: "#",
                          className: "text-slate-400 hover:text-white transition-colors",
                          children: y.jsx(FC, {
                              className: "h-5 w-5"
                          })
                      }), y.jsx("a", {
                          href: "#",
                          className: "text-slate-400 hover:text-white transition-colors",
                          children: y.jsx(pC, {
                              className: "h-5 w-5"
                          })
                      }), y.jsx("a", {
                          href: "#",
                          className: "text-slate-400 hover:text-white transition-colors",
                          children: y.jsx(SC, {
                              className: "h-5 w-5"
                          })
                      }), y.jsx("a", {
                          href: "#",
                          className: "text-slate-400 hover:text-white transition-colors",
                          children: y.jsx(CC, {
                              className: "h-5 w-5"
                          })
                      })]
                  })]
              })]
          }), y.jsxs("div", {
              className: "pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60",
              children: [y.jsx("p", {
                  children: "© 2025 Lawn Care OS. All rights reserved."
              }), y.jsx("p", {
                  children: "Designed with precision for the green industry."
              })]
          })]
      })
  })
}
const k3 = "/lawn-care/assets/images/professional_landscaper.png";
function P3() {
  const {branding: e} = Hl();
  return y.jsxs("section", {
      className: "relative min-h-screen flex items-center overflow-hidden bg-background",
      children: [y.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [y.jsx("img", {
              src: k3,
              alt: "Lawn Care Professional",
              className: "w-full h-full object-cover opacity-30 scale-110"
          }), y.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"
          }), y.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
          }), y.jsx("div", {
              className: "absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60",
              style: {
                  animation: "float 6s ease-in-out infinite"
              }
          }), y.jsx("div", {
              className: "absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-40",
              style: {
                  animation: "float 8s ease-in-out infinite",
                  animationDelay: "2s"
              }
          })]
      }), y.jsx("div", {
          className: "container mx-auto px-4 z-10 relative pt-20",
          children: y.jsx("div", {
              className: "max-w-3xl",
              children: y.jsxs(At.div, {
                  initial: {
                      opacity: 0,
                      y: 20
                  },
                  animate: {
                      opacity: 1,
                      y: 0
                  },
                  transition: {
                      duration: .6
                  },
                  children: [y.jsxs(At.div, {
                      initial: {
                          opacity: 0,
                          y: -10
                      },
                      animate: {
                          opacity: 1,
                          y: 0
                      },
                      transition: {
                          duration: .6,
                          delay: .2
                      },
                      className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-xl text-sm font-medium mb-6 glow-green",
                      style: {
                          backgroundColor: `${e.primaryColor}15`,
                          borderColor: e.primaryColor,
                          boxShadow: `0 0 20px ${e.primaryColor}40`
                      },
                      children: [y.jsx(YC, {
                          className: "h-3.5 w-3.5 fill-primary text-primary"
                      }), y.jsx("span", {
                          className: "text-white",
                          children: "Rated #1 Software for Landscaping Businesses"
                      })]
                  }), y.jsx(At.h1, {
                      initial: {
                          opacity: 0,
                          y: 20
                      },
                      animate: {
                          opacity: 1,
                          y: 0
                      },
                      transition: {
                          duration: .8,
                          delay: .3
                      },
                      className: "text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 text-glow",
                      style: {
                          backgroundImage: `linear-gradient(135deg, ${e.primaryColor}, ${e.accentColor})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                      },
                      children: e.customWelcomeMessage
                  }), y.jsx(At.p, {
                      initial: {
                          opacity: 0,
                          y: 20
                      },
                      animate: {
                          opacity: 1,
                          y: 0
                      },
                      transition: {
                          duration: .8,
                          delay: .4
                      },
                      className: "text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed",
                      children: "Replace the chaos of texts, notebooks, and spreadsheets with one powerful platform. Optimized for scheduling, routing, quoting, and getting paid."
                  }), y.jsxs(At.div, {
                      initial: {
                          opacity: 0,
                          y: 20
                      },
                      animate: {
                          opacity: 1,
                          y: 0
                      },
                      transition: {
                          duration: .8,
                          delay: .5
                      },
                      className: "flex flex-col sm:flex-row gap-4",
                      children: [y.jsxs(Ee, {
                          size: "lg",
                          className: "text-background h-14 px-8 text-lg glow-green hover:glow-green hover:scale-105 transition-all font-semibold",
                          style: {
                              backgroundColor: e.primaryColor
                          },
                          children: ["Start Free Trial ", y.jsx(iC, {
                              className: "ml-2 h-5 w-5"
                          })]
                      }), y.jsxs(Ee, {
                          size: "lg",
                          className: "h-14 px-8 text-lg border-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl font-semibold transition-smooth",
                          style: {
                              borderColor: e.primaryColor
                          },
                          children: [y.jsx(oC, {
                              className: "mr-2 h-5 w-5"
                          }), " Watch Demo"]
                      })]
                  }), y.jsxs(At.div, {
                      initial: {
                          opacity: 0,
                          y: 20
                      },
                      animate: {
                          opacity: 1,
                          y: 0
                      },
                      transition: {
                          duration: .8,
                          delay: .6
                      },
                      className: "mt-16 pt-8 border-t border-border flex gap-12 text-foreground/60",
                      children: [y.jsxs("div", {
                          children: [y.jsx("p", {
                              className: "text-2xl font-bold text-primary",
                              children: "6-in-1"
                          }), y.jsx("p", {
                              className: "text-sm",
                              children: "Integrated Suite"
                          })]
                      }), y.jsxs("div", {
                          children: [y.jsx("p", {
                              className: "text-2xl font-bold text-primary",
                              children: "40%"
                          }), y.jsx("p", {
                              className: "text-sm",
                              children: "More Revenue"
                          })]
                      }), y.jsxs("div", {
                          children: [y.jsx("p", {
                              className: "text-2xl font-bold text-primary",
                              children: "20hrs"
                          }), y.jsx("p", {
                              className: "text-sm",
                              children: "Saved Weekly"
                          })]
                      })]
                  })]
              })
          })
      })]
  })
}
const H3 = Ll("whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ", {
  variants: {
      variant: {
          default: "border-transparent bg-primary text-primary-foreground shadow-xs",
          secondary: "border-transparent bg-secondary text-secondary-foreground",
          destructive: "border-transparent bg-destructive text-destructive-foreground shadow-xs",
          outline: "text-foreground border [border-color:var(--badge-outline)]"
      }
  },
  defaultVariants: {
      variant: "default"
  }
});
function ji({className: e, variant: i, ...s}) {
  return y.jsx("div", {
      className: ee(H3({
          variant: i
      }), e),
      ...s
  })
}
const q3 = "/lawn-care/assets/videos/lawn_care_cutting_demonstration.mp4"
, G3 = "/lawn-care/assets/videos/landscape_design_transformation.mp4"
, Y3 = "/lawn-care/assets/videos/completed_landscape_project_showcase.mp4"
, X3 = [{
  id: 1,
  title: "Professional Lawn Cutting",
  subtitle: "Zero-Turn Efficiency",
  description: "Precision mowing with perfect stripe patterns",
  video: q3,
  category: "Cutting Service"
}, {
  id: 2,
  title: "Landscape Design",
  subtitle: "Complete Transformation",
  description: "Beautiful before-and-after garden installation",
  video: G3,
  category: "Design & Build"
}, {
  id: 3,
  title: "Premium Project",
  subtitle: "Golden Hour Beauty",
  description: "Completed landscape with professional finishing",
  video: Y3,
  category: "Portfolio"
}];
function F3({item: e, index: i}) {
  return y.jsx(At.div, {
      initial: {
          opacity: 0,
          y: 20
      },
      whileInView: {
          opacity: 1,
          y: 0
      },
      transition: {
          duration: .6,
          delay: i * .15
      },
      viewport: {
          once: !0
      },
      className: "group h-full",
      children: y.jsxs("div", {
          className: "relative h-96 overflow-hidden rounded-xl hover-lift glow-green-sm",
          children: [y.jsx("video", {
              src: e.video,
              className: "absolute inset-0 w-full h-full object-cover",
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0
          }), y.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:from-black/40 group-hover:via-black/40 group-hover:to-black/80 transition-all duration-500"
          }), y.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          }), y.jsxs("div", {
              className: "absolute inset-0 flex flex-col justify-end p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-500",
              children: [y.jsx(ji, {
                  className: "w-fit mb-4 bg-primary text-background",
                  children: e.category
              }), y.jsx("h3", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: e.title
              }), y.jsx("p", {
                  className: "text-accent text-sm font-semibold",
                  children: e.subtitle
              }), y.jsx("p", {
                  className: "text-white/90 text-sm mt-2",
                  children: e.description
              })]
          })]
      })
  })
}
function Q3() {
  return y.jsxs("section", {
      id: "portfolio",
      className: "py-32 bg-background relative overflow-hidden",
      children: [y.jsxs("div", {
          className: "absolute inset-0 pointer-events-none",
          children: [y.jsx("div", {
              className: "absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          }), y.jsx("div", {
              className: "absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float",
              style: {
                  animationDelay: "2s"
              }
          })]
      }), y.jsxs("div", {
          className: "container mx-auto px-4 relative z-10",
          children: [y.jsxs(At.div, {
              initial: {
                  opacity: 0,
                  y: 20
              },
              whileInView: {
                  opacity: 1,
                  y: 0
              },
              transition: {
                  duration: .6
              },
              viewport: {
                  once: !0
              },
              className: "text-center max-w-3xl mx-auto mb-20",
              children: [y.jsx(ji, {
                  className: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 px-3 py-1",
                  variant: "outline",
                  children: "Featured Work"
              }), y.jsx("h2", {
                  className: "text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
                  children: "Premium Lawn Care Portfolio"
              }), y.jsx("p", {
                  className: "text-xl text-muted-foreground leading-relaxed",
                  children: "Watch our craftwork in motion. Each project showcases precision, attention to detail, and professional execution with continuous video backgrounds."
              })]
          }), y.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
              children: X3.map( (e, i) => y.jsx(F3, {
                  item: e,
                  index: i
              }, e.id))
          }), y.jsx(At.div, {
              initial: {
                  opacity: 0,
                  y: 20
              },
              whileInView: {
                  opacity: 1,
                  y: 0
              },
              transition: {
                  duration: .6,
                  delay: .6
              },
              viewport: {
                  once: !0
              },
              className: "text-center mt-20",
              children: y.jsxs("p", {
                  className: "text-muted-foreground mb-6",
                  children: ["Ready to see more? ", y.jsx("a", {
                      href: "#",
                      className: "text-primary font-semibold hover:text-accent transition-colors",
                      children: "View complete portfolio →"
                  })]
              })
          })]
      })]
  })
}
const K3 = "/lawn-care/assets/images/isometric_map_visualization.png"
, Z3 = "/lawn-care/assets/images/satellite_view.png"
, $3 = [{
  id: "crm",
  title: "LawnCRM Core",
  description: "Client Management + Scheduling + Messaging. The foundation of your business.",
  icon: zd,
  color: "text-emerald-600",
  bg: "bg-emerald-50",
  wedge: "Customer Profiles",
  image: null
}, {
  id: "route",
  title: "RouteIQ",
  description: "AI Route Optimization + Fuel Efficiency Engine. Turns crews into logistics machines.",
  icon: jC,
  color: "text-blue-600",
  bg: "bg-blue-50",
  wedge: "Smart Routing",
  image: K3
}, {
  id: "quote",
  title: "LawnQuote AI",
  description: "Instant Satellite-Based Quote Generator. Convert leads instantly with AI measurement.",
  icon: UC,
  color: "text-purple-600",
  bg: "bg-purple-50",
  wedge: "Instant Estimates",
  image: Z3
}, {
  id: "crew",
  title: "CrewHub",
  description: "Crew Management + Payroll + Timesheets. Manage labor like a franchise.",
  icon: xC,
  color: "text-orange-600",
  bg: "bg-orange-50",
  wedge: "Time Tracking",
  image: null
}, {
  id: "weather",
  title: "WeatherShield Pro",
  description: "Weather-Aware Scheduling. Auto-reschedule when rain or storms hit.",
  icon: fC,
  color: "text-cyan-600",
  bg: "bg-cyan-50",
  wedge: "Auto-Reschedule",
  image: null
}, {
  id: "pay",
  title: "LawnPay",
  description: "Billing + Invoicing + Tap-to-Pay. Solve cashflow with automated payments.",
  icon: hC,
  color: "text-green-600",
  bg: "bg-green-50",
  wedge: "Auto-Billing",
  image: null
}];
function W3() {
  return y.jsx("section", {
      id: "features",
      className: "py-24 bg-slate-50",
      "data-testid": "section-features",
      children: y.jsxs("div", {
          className: "container mx-auto px-4",
          children: [y.jsxs("div", {
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [y.jsx(ji, {
                  className: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1",
                  children: "The Full Stack"
              }), y.jsxs("h2", {
                  className: "text-4xl font-bold tracking-tight text-slate-900 mb-4",
                  children: ["Six powerful modules. ", y.jsx("br", {}), " One integrated platform."]
              }), y.jsx("p", {
                  className: "text-lg text-slate-600",
                  children: "Each module functions as a standalone powerhouse, but together they form the ultimate Lawn Care OS."
              })]
          }), y.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: $3.map( (e, i) => y.jsx(At.div, {
                  initial: {
                      opacity: 0,
                      y: 20
                  },
                  whileInView: {
                      opacity: 1,
                      y: 0
                  },
                  transition: {
                      duration: .5,
                      delay: i * .1
                  },
                  viewport: {
                      once: !0
                  },
                  children: y.jsxs(ke, {
                      className: "h-full overflow-hidden border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group",
                      children: [e.image && y.jsxs("div", {
                          className: "h-40 overflow-hidden relative",
                          children: [y.jsx("div", {
                              className: "absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"
                          }), y.jsx("img", {
                              src: e.image,
                              alt: e.title,
                              className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          })]
                      }), y.jsxs(en, {
                          children: [y.jsx("div", {
                              className: `w-12 h-12 rounded-xl ${e.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,
                              children: y.jsx(e.icon, {
                                  className: `h-6 w-6 ${e.color}`
                              })
                          }), y.jsx(fn, {
                              className: "text-xl font-bold",
                              children: e.title
                          }), y.jsxs(la, {
                              className: "text-sm font-medium text-primary/80 flex items-center gap-1",
                              children: [y.jsx(qC, {
                                  className: "h-3 w-3"
                              }), " ", e.wedge]
                          })]
                      }), y.jsx(Pe, {
                          children: y.jsx("p", {
                              className: "text-slate-600 leading-relaxed",
                              children: e.description
                          })
                      }), y.jsx(Qd, {
                          children: y.jsxs("a", {
                              href: "#",
                              className: "text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all group-hover:text-primary/80",
                              children: ["Learn more ", y.jsx(ZE, {
                                  className: "h-4 w-4"
                              })]
                          })
                      })]
                  })
              }, e.id))
          })]
      })
  })
}
const J3 = [{
  name: "Starter",
  price: "$49",
  description: "Essential tools for solo operators.",
  features: ["LawnCRM Core", "LawnPay", "Up to 50 active customers", "Basic Scheduling", "Client Portal"],
  cta: "Start Free Trial",
  popular: !1
}, {
  name: "Growth",
  price: "$99",
  description: "For growing teams needing efficiency.",
  features: ["Everything in Starter", "RouteIQ Optimization", "LawnQuote AI (50/mo)", "Advanced Reporting", "Crew App Access"],
  cta: "Get Started",
  popular: !0
}, {
  name: "Team Pro",
  price: "$149",
  description: "Complete management for multi-crew ops.",
  features: ["Everything in Growth", "CrewHub Management", "Unlimited Crew Members", "Payroll Exports", "Priority Support"],
  cta: "Contact Sales",
  popular: !1
}];
function I3() {
  return y.jsxs("section", {
      id: "pricing",
      className: "py-32 bg-background relative overflow-hidden",
      children: [y.jsxs("div", {
          className: "absolute inset-0 pointer-events-none",
          children: [y.jsx("div", {
              className: "absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          }), y.jsx("div", {
              className: "absolute bottom-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float",
              style: {
                  animationDelay: "2s"
              }
          })]
      }), y.jsxs("div", {
          className: "container mx-auto px-4 relative z-10",
          children: [y.jsxs(At.div, {
              initial: {
                  opacity: 0,
                  y: 20
              },
              whileInView: {
                  opacity: 1,
                  y: 0
              },
              transition: {
                  duration: .6
              },
              viewport: {
                  once: !0
              },
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [y.jsx(ji, {
                  className: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 px-3 py-1",
                  variant: "outline",
                  children: "Simple Pricing"
              }), y.jsx("h2", {
                  className: "text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
                  children: "Simple, transparent pricing"
              }), y.jsx("p", {
                  className: "text-lg text-foreground/70",
                  children: "Choose the plan that fits your business stage. Upgrade as you grow."
              })]
          }), y.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto",
              children: J3.map( (e, i) => y.jsx(At.div, {
                  initial: {
                      opacity: 0,
                      y: 20
                  },
                  whileInView: {
                      opacity: 1,
                      y: 0
                  },
                  transition: {
                      duration: .6,
                      delay: i * .1
                  },
                  viewport: {
                      once: !0
                  },
                  children: y.jsxs(ke, {
                      className: `relative flex flex-col h-full transition-smooth hover-lift ${e.popular ? "border-primary glow-green scale-105 z-10" : "border-border/50"}`,
                      children: [e.popular && y.jsx("div", {
                          className: "absolute -top-4 left-1/2 -translate-x-1/2",
                          children: y.jsx(ji, {
                              className: "bg-primary text-white px-4 py-1",
                              children: "Most Popular"
                          })
                      }), y.jsxs(en, {
                          children: [y.jsx(fn, {
                              className: "text-2xl text-primary",
                              children: e.name
                          }), y.jsx(la, {
                              className: "text-foreground/60",
                              children: e.description
                          })]
                      }), y.jsxs(Pe, {
                          className: "flex-1",
                          children: [y.jsxs("div", {
                              className: "mb-6",
                              children: [y.jsx("span", {
                                  className: "text-5xl font-extrabold text-primary",
                                  children: e.price
                              }), y.jsx("span", {
                                  className: "text-foreground/60 ml-2",
                                  children: "/mo"
                              })]
                          }), y.jsx("ul", {
                              className: "space-y-3",
                              children: e.features.map(s => y.jsxs("li", {
                                  className: "flex items-start gap-3 text-sm text-foreground/70",
                                  children: [y.jsx(Lx, {
                                      className: "h-5 w-5 text-accent shrink-0 mt-0.5"
                                  }), s]
                              }, s))
                          })]
                      }), y.jsx(Qd, {
                          children: y.jsx(Ee, {
                              className: `w-full font-semibold transition-smooth ${e.popular ? "bg-primary hover:bg-primary/90 glow-green text-background" : "bg-card border-2 border-primary/20 text-primary hover:border-primary/50"}`,
                              size: "lg",
                              children: e.cta
                          })
                      })]
                  })
              }, e.name))
          })]
      })]
  })
}
const t5 = [{
  icon: ZC,
  title: "Video Tutorials",
  description: "Step-by-step guides to get you up and running with each module.",
  color: "text-blue-600",
  bg: "bg-blue-50"
}, {
  icon: WE,
  title: "Documentation",
  description: "Complete API docs and integration guides for developers.",
  color: "text-purple-600",
  bg: "bg-purple-50"
}, {
  icon: zd,
  title: "Community Forum",
  description: "Connect with other landscape business owners and share best practices.",
  color: "text-green-600",
  bg: "bg-green-50"
}, {
  icon: IE,
  title: "Live Webinars",
  description: "Weekly training sessions with product experts and industry leaders.",
  color: "text-orange-600",
  bg: "bg-orange-50"
}, {
  icon: gC,
  title: "Case Studies",
  description: "Real-world success stories from landscapers using Lawn Care OS.",
  color: "text-red-600",
  bg: "bg-red-50"
}, {
  icon: cC,
  title: "Support Center",
  description: "24/7 customer support to answer all your questions.",
  color: "text-cyan-600",
  bg: "bg-cyan-50"
}];
function e5() {
  return y.jsx("section", {
      id: "resources",
      className: "py-24 bg-slate-50",
      children: y.jsxs("div", {
          className: "container mx-auto px-4",
          children: [y.jsxs("div", {
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [y.jsx(ji, {
                  className: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1",
                  children: "Learn & Support"
              }), y.jsx("h2", {
                  className: "text-4xl font-bold tracking-tight text-slate-900 mb-4",
                  children: "Resources to help you succeed"
              }), y.jsx("p", {
                  className: "text-lg text-slate-600",
                  children: "From training materials to customer support, we've got everything you need to master Lawn Care OS."
              })]
          }), y.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: t5.map( (e, i) => y.jsx(At.div, {
                  initial: {
                      opacity: 0,
                      y: 20
                  },
                  whileInView: {
                      opacity: 1,
                      y: 0
                  },
                  transition: {
                      duration: .5,
                      delay: i * .1
                  },
                  viewport: {
                      once: !0
                  },
                  children: y.jsxs(ke, {
                      className: "h-full border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group",
                      children: [y.jsxs(en, {
                          children: [y.jsx("div", {
                              className: `w-12 h-12 rounded-xl ${e.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,
                              children: y.jsx(e.icon, {
                                  className: `h-6 w-6 ${e.color}`
                              })
                          }), y.jsx(fn, {
                              className: "text-lg font-bold",
                              children: e.title
                          })]
                      }), y.jsx(Pe, {
                          children: y.jsx("p", {
                              className: "text-slate-600 text-sm leading-relaxed",
                              children: e.description
                          })
                      })]
                  })
              }, e.title))
          }), y.jsx(At.div, {
              initial: {
                  opacity: 0,
                  y: 20
              },
              whileInView: {
                  opacity: 1,
                  y: 0
              },
              transition: {
                  duration: .5,
                  delay: .6
              },
              viewport: {
                  once: !0
              },
              className: "mt-16 text-center",
              children: y.jsxs("p", {
                  className: "text-slate-600 mb-6",
                  children: ["Have more questions? ", y.jsx("a", {
                      href: "#",
                      className: "text-primary font-semibold hover:underline",
                      children: "Contact our sales team"
                  })]
              })
          })]
      })
  })
}
const n5 = [{
  icon: zd,
  title: "Unlimited Team Members",
  description: "Scale your team without worrying about seat limits or additional costs."
}, {
  icon: rv,
  title: "Advanced Analytics",
  description: "Deep insights into crew productivity, profitability, and business metrics."
}, {
  icon: NC,
  title: "SSO & Security",
  description: "Enterprise-grade security with Single Sign-On and custom permissions."
}, {
  icon: Vx,
  title: "Custom Integrations",
  description: "API access to build custom integrations with your existing tools."
}, {
  icon: PC,
  title: "Dedicated Support",
  description: "Priority support with a dedicated account manager and technical team."
}, {
  icon: rv,
  title: "Custom Onboarding",
  description: "Hands-on setup and training tailored to your business processes."
}];
function i5() {
  return y.jsx("section", {
      id: "enterprise",
      className: "py-24 bg-white",
      children: y.jsxs("div", {
          className: "container mx-auto px-4",
          children: [y.jsxs("div", {
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [y.jsx(ji, {
                  className: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1",
                  children: "For Large Teams"
              }), y.jsx("h2", {
                  className: "text-4xl font-bold tracking-tight text-slate-900 mb-4",
                  children: "Enterprise Solutions"
              }), y.jsx("p", {
                  className: "text-lg text-slate-600",
                  children: "Built for multi-location operations, large teams, and complex business requirements."
              })]
          }), y.jsx("div", {
              className: "max-w-4xl mx-auto mb-16",
              children: y.jsx(At.div, {
                  initial: {
                      opacity: 0,
                      y: 20
                  },
                  whileInView: {
                      opacity: 1,
                      y: 0
                  },
                  transition: {
                      duration: .6
                  },
                  viewport: {
                      once: !0
                  },
                  children: y.jsxs(ke, {
                      className: "border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5",
                      children: [y.jsxs(en, {
                          children: [y.jsxs("div", {
                              className: "flex items-center justify-between mb-4",
                              children: [y.jsx("h3", {
                                  className: "text-2xl font-bold",
                                  children: "Business Elite"
                              }), y.jsx(ji, {
                                  className: "bg-primary text-white",
                                  children: "Custom Pricing"
                              })]
                          }), y.jsx(la, {
                              className: "text-base",
                              children: "Unlimited everything with dedicated support and custom features"
                          })]
                      }), y.jsxs(Pe, {
                          className: "space-y-8",
                          children: [y.jsx("div", {
                              className: "grid md:grid-cols-2 gap-6",
                              children: n5.map( (e, i) => y.jsxs("div", {
                                  className: "flex gap-4",
                                  children: [y.jsx("div", {
                                      className: "flex-shrink-0",
                                      children: y.jsx("div", {
                                          className: "flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10",
                                          children: y.jsx(e.icon, {
                                              className: "h-6 w-6 text-primary"
                                          })
                                      })
                                  }), y.jsxs("div", {
                                      children: [y.jsx("h4", {
                                          className: "font-semibold text-slate-900",
                                          children: e.title
                                      }), y.jsx("p", {
                                          className: "text-sm text-slate-600 mt-1",
                                          children: e.description
                                      })]
                                  })]
                              }, e.title))
                          }), y.jsxs("div", {
                              className: "border-t border-border pt-8",
                              children: [y.jsxs("div", {
                                  className: "space-y-4 mb-8",
                                  children: [y.jsx("h4", {
                                      className: "font-bold text-lg",
                                      children: "Everything included:"
                                  }), y.jsx("ul", {
                                      className: "space-y-3",
                                      children: ["All features from Team Pro tier", "WeatherShield Pro for unlimited locations", "Advanced white-label customization", "Multi-tenant support with domain routing", "Custom API integrations", "Dedicated account manager", "24/7 priority phone support", "Annual contract with SLA guarantee"].map(e => y.jsxs("li", {
                                          className: "flex items-center gap-3 text-slate-700",
                                          children: [y.jsx(Lx, {
                                              className: "h-5 w-5 text-primary flex-shrink-0"
                                          }), e]
                                      }, e))
                                  })]
                              }), y.jsx(Ee, {
                                  size: "lg",
                                  className: "w-full md:w-auto bg-primary hover:bg-primary/90 text-white",
                                  children: "Schedule Demo"
                              })]
                          })]
                      })]
                  })
              })
          }), y.jsxs(At.div, {
              initial: {
                  opacity: 0,
                  y: 20
              },
              whileInView: {
                  opacity: 1,
                  y: 0
              },
              transition: {
                  duration: .6,
                  delay: .2
              },
              viewport: {
                  once: !0
              },
              className: "text-center space-y-8",
              children: [y.jsxs("div", {
                  children: [y.jsx("p", {
                      className: "text-slate-600 mb-4",
                      children: "Trusted by enterprise landscapers"
                  }), y.jsx("div", {
                      className: "flex flex-wrap items-center justify-center gap-8",
                      children: ["Fortune 500", "100+ Locations", "2M+ Customers", "$50M+ Revenue"].map(e => y.jsxs("div", {
                          children: [y.jsx("p", {
                              className: "font-bold text-xl text-slate-900",
                              children: e.split(" ")[0]
                          }), y.jsx("p", {
                              className: "text-sm text-slate-600",
                              children: e.split(" ").slice(1).join(" ")
                          })]
                      }, e))
                  })]
              }), y.jsxs("div", {
                  className: "bg-slate-50 rounded-lg p-8 border border-border",
                  children: [y.jsx("p", {
                      className: "text-slate-700 mb-6",
                      children: '"Lawn Care OS transformed how we manage 50+ crews across 3 states. The white-label solution let us rebrand it for our franchise partners."'
                  }), y.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [y.jsx("div", {
                          className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                          children: y.jsx("span", {
                              className: "font-bold text-primary text-lg",
                              children: "JD"
                          })
                      }), y.jsxs("div", {
                          className: "text-left",
                          children: [y.jsx("p", {
                              className: "font-semibold text-slate-900",
                              children: "John Davidson"
                          }), y.jsx("p", {
                              className: "text-sm text-slate-600",
                              children: "CEO, National Landscaping Group"
                          })]
                      })]
                  })]
              }), y.jsxs("p", {
                  className: "text-slate-600 pt-4",
                  children: ["Ready to scale? ", y.jsx("a", {
                      href: "#",
                      className: "text-primary font-semibold hover:underline",
                      children: "Contact our enterprise team"
                  })]
              })]
          })]
      })
  })
}
const a5 = "/lawn-care/assets/images/modern_saas_dashboard.png";
function s5() {
  return y.jsx("section", {
      className: "py-24 bg-slate-950 overflow-hidden",
      children: y.jsx("div", {
          className: "container mx-auto px-4",
          children: y.jsxs("div", {
              className: "flex flex-col lg:flex-row items-center gap-16",
              children: [y.jsxs("div", {
                  className: "lg:w-1/3 space-y-8",
                  children: [y.jsxs("h2", {
                      className: "text-3xl md:text-4xl font-bold text-white leading-tight",
                      children: ["Control your entire operation from ", y.jsx("span", {
                          className: "text-primary",
                          children: "one screen"
                      }), "."]
                  }), y.jsx("p", {
                      className: "text-slate-400 text-lg leading-relaxed",
                      children: "Real-time crew tracking, instant drag-and-drop scheduling, and financial health at a glance. The Dashboard is your command center."
                  }), y.jsx("div", {
                      className: "space-y-4",
                      children: ["Live GPS Crew Tracking", "Drag & Drop Dispatch Board", "Financial Health Pulse", "Pending Quote Approvals"].map( (e, i) => y.jsxs(At.div, {
                          initial: {
                              opacity: 0,
                              x: -20
                          },
                          whileInView: {
                              opacity: 1,
                              x: 0
                          },
                          transition: {
                              delay: i * .1
                          },
                          className: "flex items-center gap-3 text-slate-200",
                          children: [y.jsx("div", {
                              className: "h-2 w-2 rounded-full bg-primary"
                          }), e]
                      }, e))
                  })]
              }), y.jsxs("div", {
                  className: "lg:w-2/3 relative",
                  children: [y.jsx("div", {
                      className: "absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30"
                  }), y.jsxs(At.div, {
                      initial: {
                          opacity: 0,
                          y: 40,
                          rotateX: 10
                      },
                      whileInView: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0
                      },
                      transition: {
                          duration: .8,
                          ease: "easeOut"
                      },
                      className: "relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900",
                      children: [y.jsxs("div", {
                          className: "absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-white/5",
                          children: [y.jsx("div", {
                              className: "h-3 w-3 rounded-full bg-red-500/50"
                          }), y.jsx("div", {
                              className: "h-3 w-3 rounded-full bg-yellow-500/50"
                          }), y.jsx("div", {
                              className: "h-3 w-3 rounded-full bg-green-500/50"
                          })]
                      }), y.jsx("img", {
                          src: a5,
                          alt: "Lawn Care OS Dashboard",
                          className: "w-full h-auto pt-8"
                      }), y.jsxs("div", {
                          className: "absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-xl max-w-xs hidden md:block",
                          children: [y.jsxs("div", {
                              className: "flex items-center gap-3 mb-2",
                              children: [y.jsx("div", {
                                  className: "h-2 w-2 bg-green-500 rounded-full animate-pulse"
                              }), y.jsx("span", {
                                  className: "text-xs font-medium text-white",
                                  children: "New Quote Approved"
                              })]
                          }), y.jsxs("p", {
                              className: "text-sm text-slate-300",
                              children: ["Client ", y.jsx("span", {
                                  className: "text-white font-medium",
                                  children: "John Doe"
                              }), " approved the Weekly Maintenance Plan ($129/mo)."]
                          })]
                      })]
                  })]
              })]
          })
      })
  })
}
const r5 = {
  happy: "😊",
  excited: "🤩",
  thinking: "🤔",
  thumbsup: "👍",
  neutral: "🙂"
}
, o5 = {
  happy: "I'm here to help!",
  excited: "Let's get started!",
  thinking: "Analyzing your needs...",
  thumbsup: "Great choice!",
  neutral: "What's next?"
};
function l5({emotion: e="happy", size: i="md", showLabel: s=!0, label: o, onClick: l}) {
  const f = {
      sm: "h-12 w-12",
      md: "h-20 w-20",
      lg: "h-32 w-32"
  }
    , d = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
  };
  return y.jsxs(At.div, {
      className: "flex flex-col items-center gap-2 cursor-pointer",
      onClick: l,
      whileHover: {
          scale: 1.1
      },
      whileTap: {
          scale: .95
      },
      children: [y.jsxs(At.div, {
          className: `${f[i]} flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 via-green-300 to-emerald-400 shadow-lg border-4 border-emerald-200 relative overflow-hidden`,
          animate: {
              y: [0, -8, 0]
          },
          transition: {
              duration: 3,
              repeat: 1 / 0,
              ease: "easeInOut"
          },
          children: [y.jsx("div", {
              className: "absolute top-2 left-2 h-1/3 w-1/3 bg-white/30 rounded-full blur-md"
          }), y.jsxs(At.div, {
              className: "text-center",
              animate: {
                  rotateZ: e === "excited" ? [-2, 2, -2, 2, 0] : 0
              },
              transition: {
                  duration: e === "excited" ? .5 : 0
              },
              children: [y.jsx("span", {
                  className: `${i === "lg" ? "text-6xl" : i === "md" ? "text-4xl" : "text-2xl"} block leading-none`,
                  children: "🌿"
              }), y.jsx("span", {
                  className: `${i === "lg" ? "text-5xl" : i === "md" ? "text-3xl" : "text-xl"} block leading-none`,
                  children: r5[e]
              })]
          }), e === "excited" && y.jsx(At.div, {
              className: "absolute inset-0 border-2 border-emerald-300 rounded-full",
              animate: {
                  scale: [1, 1.2, 1],
                  opacity: [1, 0, 1]
              },
              transition: {
                  duration: 1,
                  repeat: 1 / 0
              }
          })]
      }), y.jsx(j1, {
          children: s && y.jsx(At.div, {
              initial: {
                  opacity: 0,
                  y: -10
              },
              animate: {
                  opacity: 1,
                  y: 0
              },
              exit: {
                  opacity: 0,
                  y: -10
              },
              className: `text-center whitespace-nowrap ${d[i]}`,
              children: y.jsx("p", {
                  className: "font-semibold text-emerald-700",
                  children: o || o5[e]
              })
          })
      })]
  })
}
function vS({initialEmotion: e="happy", triggerScrollChange: i=!0}) {
  const [s,o] = w.useState(e)
    , [l,f] = w.useState(0)
    , [d,m] = w.useState(!0);
  w.useEffect( () => {
      const h = () => {
          const g = window.scrollY;
          f(g),
          i && (g < 300 ? o("happy") : g < 800 ? o("thinking") : g < 1400 ? o("excited") : o("thumbsup"))
      }
      ;
      return window.addEventListener("scroll", h),
      () => window.removeEventListener("scroll", h)
  }
  , [i]);
  const p = () => {
      o(h => {
          const g = ["happy", "excited", "thinking", "thumbsup"]
            , x = g.indexOf(h);
          return g[(x + 1) % g.length]
      }
      )
  }
  ;
  return y.jsx(At.div, {
      initial: {
          opacity: 0,
          x: 100
      },
      animate: {
          opacity: d ? 1 : 0,
          x: d ? 0 : 100
      },
      transition: {
          duration: .5
      },
      className: "fixed bottom-8 right-8 z-40 pointer-events-auto",
      children: y.jsxs("div", {
          className: "relative",
          children: [y.jsx(At.div, {
              animate: {
                  y: [0, -20, 0]
              },
              transition: {
                  duration: 4,
                  repeat: 1 / 0,
                  ease: "easeInOut"
              },
              children: y.jsx(l5, {
                  emotion: s,
                  size: "md",
                  showLabel: !0,
                  onClick: p
              })
          }), y.jsx(At.div, {
              className: "absolute -top-12 left-1/2 -translate-x-1/2 text-xs text-emerald-600 font-medium opacity-0 pointer-events-none",
              animate: {
                  opacity: [0, 1, 0]
              },
              transition: {
                  duration: 3,
                  repeat: 1 / 0,
                  delay: 2
              },
              children: "Click me! 🖱️"
          })]
      })
  })
}
function c5() {
  return y.jsxs("div", {
      className: "min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary",
      children: [y.jsx(yS, {}), y.jsxs("main", {
          children: [y.jsx(P3, {}), y.jsx(Q3, {}), y.jsx(W3, {}), y.jsx(s5, {}), y.jsx(I3, {}), y.jsx(e5, {}), y.jsx(i5, {})]
      }), y.jsx(gS, {}), y.jsx(vS, {
          initialEmotion: "happy",
          triggerScrollChange: !0
      })]
  })
}
const ea = w.forwardRef( ({className: e, type: i, ...s}, o) => y.jsx("input", {
  type: i,
  className: ee("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
  ref: o,
  ...s
}));
ea.displayName = "Input";
var u5 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
, f5 = u5.reduce( (e, i) => {
  const s = Vb(`Primitive.${i}`)
    , o = w.forwardRef( (l, f) => {
      const {asChild: d, ...m} = l
        , p = d ? s : i;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
      y.jsx(p, {
          ...m,
          ref: f
      })
  }
  );
  return o.displayName = `Primitive.${i}`,
  {
      ...e,
      [i]: o
  }
}
, {})
, d5 = "Label"
, xS = w.forwardRef( (e, i) => y.jsx(f5.label, {
  ...e,
  ref: i,
  onMouseDown: s => {
      s.target.closest("button, input, select, textarea") || (e.onMouseDown?.(s),
      !s.defaultPrevented && s.detail > 1 && s.preventDefault())
  }
}));
xS.displayName = d5;
var bS = xS;
const h5 = Ll("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
, na = w.forwardRef( ({className: e, ...i}, s) => y.jsx(bS, {
  ref: s,
  className: ee(h5(), e),
  ...i
}));
na.displayName = bS.displayName;
function m5({isOpen: e, onClose: i}) {
  const {branding: s, updateBranding: o, resetBranding: l} = Hl()
    , [f,d] = w.useState(s)
    , [m,p] = w.useState(!1)
    , h = (b, T) => {
      d(C => ({
          ...C,
          [b]: T
      })),
      p(!0)
  }
    , g = () => {
      o(f),
      p(!1)
  }
    , x = () => {
      l(),
      d(s),
      p(!1)
  }
  ;
  return y.jsx(j1, {
      children: e && y.jsxs(y.Fragment, {
          children: [y.jsx(At.div, {
              initial: {
                  opacity: 0
              },
              animate: {
                  opacity: 1
              },
              exit: {
                  opacity: 0
              },
              onClick: i,
              className: "fixed inset-0 bg-black/50 z-40"
          }), y.jsxs(At.div, {
              initial: {
                  x: 400,
                  opacity: 0
              },
              animate: {
                  x: 0,
                  opacity: 1
              },
              exit: {
                  x: 400,
                  opacity: 0
              },
              transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300
              },
              className: "fixed right-0 top-0 h-screen w-full max-w-md bg-background border-l border-border z-50 overflow-y-auto shadow-2xl",
              children: [y.jsxs("div", {
                  className: "sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between",
                  children: [y.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [y.jsx(vr, {
                          className: "h-5 w-5 text-primary"
                      }), y.jsx("h2", {
                          className: "text-xl font-bold",
                          children: "Branding Settings"
                      })]
                  }), y.jsx("button", {
                      onClick: i,
                      className: "p-2 hover:bg-muted rounded-lg transition-colors",
                      children: y.jsx(Ld, {
                          className: "h-5 w-5"
                      })
                  })]
              }), y.jsxs("div", {
                  className: "p-6 space-y-8",
                  children: [y.jsxs(ke, {
                      children: [y.jsxs(en, {
                          children: [y.jsx(fn, {
                              className: "text-base",
                              children: "Company Information"
                          }), y.jsx(la, {
                              children: "Customize your company details"
                          })]
                      }), y.jsxs(Pe, {
                          className: "space-y-4",
                          children: [y.jsxs("div", {
                              children: [y.jsx(na, {
                                  htmlFor: "company-name",
                                  className: "text-xs font-semibold",
                                  children: "Company Name"
                              }), y.jsx(ea, {
                                  id: "company-name",
                                  value: f.companyName,
                                  onChange: b => h("companyName", b.target.value),
                                  className: "mt-2",
                                  placeholder: "Your Company"
                              })]
                          }), y.jsxs("div", {
                              children: [y.jsx(na, {
                                  htmlFor: "support-email",
                                  className: "text-xs font-semibold",
                                  children: "Support Email"
                              }), y.jsx(ea, {
                                  id: "support-email",
                                  type: "email",
                                  value: f.supportEmail,
                                  onChange: b => h("supportEmail", b.target.value),
                                  className: "mt-2",
                                  placeholder: "support@company.com"
                              })]
                          }), y.jsxs("div", {
                              children: [y.jsx(na, {
                                  htmlFor: "welcome-msg",
                                  className: "text-xs font-semibold",
                                  children: "Welcome Message"
                              }), y.jsx(ea, {
                                  id: "welcome-msg",
                                  value: f.customWelcomeMessage,
                                  onChange: b => h("customWelcomeMessage", b.target.value),
                                  className: "mt-2",
                                  placeholder: "Welcome message"
                              })]
                          })]
                      })]
                  }), y.jsxs(ke, {
                      children: [y.jsxs(en, {
                          children: [y.jsx(fn, {
                              className: "text-base",
                              children: "Colors"
                          }), y.jsx(la, {
                              children: "Define your brand colors"
                          })]
                      }), y.jsxs(Pe, {
                          className: "space-y-4",
                          children: [y.jsxs("div", {
                              children: [y.jsx(na, {
                                  htmlFor: "primary-color",
                                  className: "text-xs font-semibold",
                                  children: "Primary Color"
                              }), y.jsxs("div", {
                                  className: "flex gap-2 mt-2",
                                  children: [y.jsx("input", {
                                      id: "primary-color",
                                      type: "color",
                                      value: f.primaryColor,
                                      onChange: b => h("primaryColor", b.target.value),
                                      className: "h-10 w-14 rounded cursor-pointer border border-border"
                                  }), y.jsx(ea, {
                                      value: f.primaryColor,
                                      onChange: b => h("primaryColor", b.target.value),
                                      className: "flex-1",
                                      placeholder: "#064e3b"
                                  })]
                              })]
                          }), y.jsxs("div", {
                              children: [y.jsx(na, {
                                  htmlFor: "accent-color",
                                  className: "text-xs font-semibold",
                                  children: "Accent Color"
                              }), y.jsxs("div", {
                                  className: "flex gap-2 mt-2",
                                  children: [y.jsx("input", {
                                      id: "accent-color",
                                      type: "color",
                                      value: f.accentColor,
                                      onChange: b => h("accentColor", b.target.value),
                                      className: "h-10 w-14 rounded cursor-pointer border border-border"
                                  }), y.jsx(ea, {
                                      value: f.accentColor,
                                      onChange: b => h("accentColor", b.target.value),
                                      className: "flex-1",
                                      placeholder: "#22c55e"
                                  })]
                              })]
                          }), y.jsxs("div", {
                              children: [y.jsx(na, {
                                  htmlFor: "bg-color",
                                  className: "text-xs font-semibold",
                                  children: "Background Color"
                              }), y.jsxs("div", {
                                  className: "flex gap-2 mt-2",
                                  children: [y.jsx("input", {
                                      id: "bg-color",
                                      type: "color",
                                      value: f.backgroundColor,
                                      onChange: b => h("backgroundColor", b.target.value),
                                      className: "h-10 w-14 rounded cursor-pointer border border-border"
                                  }), y.jsx(ea, {
                                      value: f.backgroundColor,
                                      onChange: b => h("backgroundColor", b.target.value),
                                      className: "flex-1",
                                      placeholder: "#ffffff"
                                  })]
                              })]
                          })]
                      })]
                  }), y.jsxs(ke, {
                      children: [y.jsx(en, {
                          children: y.jsx(fn, {
                              className: "text-base",
                              children: "Preview"
                          })
                      }), y.jsx(Pe, {
                          children: y.jsxs("div", {
                              className: "p-4 rounded-lg border border-border space-y-3 transition-colors",
                              style: {
                                  backgroundColor: f.backgroundColor
                              },
                              children: [y.jsx("h3", {
                                  className: "font-bold text-lg",
                                  style: {
                                      color: f.primaryColor
                                  },
                                  children: f.companyName
                              }), y.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: f.customWelcomeMessage
                              }), y.jsx("div", {
                                  className: "inline-block px-3 py-1 rounded text-white text-xs font-medium",
                                  style: {
                                      backgroundColor: f.accentColor
                                  },
                                  children: "Sample Button"
                              })]
                          })
                      })]
                  }), y.jsxs(ke, {
                      children: [y.jsx(en, {
                          children: y.jsx(fn, {
                              className: "text-base",
                              children: "Options"
                          })
                      }), y.jsx(Pe, {
                          children: y.jsxs("label", {
                              className: "flex items-center gap-3 cursor-pointer",
                              children: [y.jsx("input", {
                                  type: "checkbox",
                                  checked: f.removeBranding,
                                  onChange: b => h("removeBranding", b.target.checked),
                                  className: "h-4 w-4"
                              }), y.jsx("span", {
                                  className: "text-sm",
                                  children: 'Hide "Powered by Lawn Care OS" branding'
                              })]
                          })
                      })]
                  }), y.jsxs("div", {
                      className: "space-y-2 sticky bottom-0 bg-background pt-4 border-t border-border",
                      children: [y.jsxs(Ee, {
                          onClick: g,
                          disabled: !m,
                          className: "w-full bg-primary hover:bg-primary/90 text-white",
                          children: [y.jsx(VC, {
                              className: "h-4 w-4 mr-2"
                          }), "Save Changes"]
                      }), y.jsxs(Ee, {
                          onClick: x,
                          variant: "outline",
                          className: "w-full",
                          children: [y.jsx(zC, {
                              className: "h-4 w-4 mr-2"
                          }), "Reset to Default"]
                      })]
                  })]
              })]
          })]
      })
  })
}
function p5() {
  const {branding: e} = Hl()
    , [i,s] = w.useState(!1);
  return y.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [y.jsx(yS, {}), y.jsx("main", {
          className: "pt-32 pb-20",
          children: y.jsx("div", {
              className: "container mx-auto px-4",
              children: y.jsxs("div", {
                  className: "max-w-4xl mx-auto space-y-12",
                  children: [y.jsxs("div", {
                      className: "space-y-4 text-center",
                      children: [y.jsx("h1", {
                          className: "text-4xl font-bold tracking-tight",
                          children: "White-Label Your Platform"
                      }), y.jsx("p", {
                          className: "text-lg text-muted-foreground",
                          children: "Customize the entire Lawn Care OS experience to match your brand identity"
                      })]
                  }), y.jsxs(ke, {
                      className: "overflow-hidden",
                      children: [y.jsxs(en, {
                          className: "bg-gradient-to-r from-primary/10 to-accent/10",
                          children: [y.jsxs(fn, {
                              className: "flex items-center gap-2",
                              children: [y.jsx(vr, {
                                  className: "h-5 w-5"
                              }), "Current Branding"]
                          }), y.jsx(la, {
                              children: "Live preview of your custom branding"
                          })]
                      }), y.jsx(Pe, {
                          className: "pt-8",
                          children: y.jsxs("div", {
                              className: "space-y-8",
                              children: [y.jsxs("div", {
                                  className: "space-y-2",
                                  children: [y.jsx("label", {
                                      className: "text-sm font-medium text-muted-foreground",
                                      children: "Company Name"
                                  }), y.jsx("p", {
                                      className: "text-3xl font-bold",
                                      style: {
                                          color: e.primaryColor
                                      },
                                      children: e.companyName
                                  })]
                              }), y.jsxs("div", {
                                  className: "space-y-2",
                                  children: [y.jsx("label", {
                                      className: "text-sm font-medium text-muted-foreground",
                                      children: "Welcome Message"
                                  }), y.jsx("p", {
                                      className: "text-xl text-foreground",
                                      children: e.customWelcomeMessage
                                  })]
                              }), y.jsxs("div", {
                                  className: "space-y-4",
                                  children: [y.jsx("label", {
                                      className: "text-sm font-medium text-muted-foreground",
                                      children: "Brand Colors"
                                  }), y.jsxs("div", {
                                      className: "grid grid-cols-3 gap-4",
                                      children: [y.jsxs("div", {
                                          className: "space-y-2",
                                          children: [y.jsx("div", {
                                              className: "h-24 rounded-lg border-2 border-border shadow-sm",
                                              style: {
                                                  backgroundColor: e.primaryColor
                                              }
                                          }), y.jsx("p", {
                                              className: "text-xs text-center font-mono text-muted-foreground",
                                              children: "Primary"
                                          }), y.jsx("p", {
                                              className: "text-xs text-center font-mono",
                                              children: e.primaryColor
                                          })]
                                      }), y.jsxs("div", {
                                          className: "space-y-2",
                                          children: [y.jsx("div", {
                                              className: "h-24 rounded-lg border-2 border-border shadow-sm",
                                              style: {
                                                  backgroundColor: e.accentColor
                                              }
                                          }), y.jsx("p", {
                                              className: "text-xs text-center font-mono text-muted-foreground",
                                              children: "Accent"
                                          }), y.jsx("p", {
                                              className: "text-xs text-center font-mono",
                                              children: e.accentColor
                                          })]
                                      }), y.jsxs("div", {
                                          className: "space-y-2",
                                          children: [y.jsx("div", {
                                              className: "h-24 rounded-lg border-2 border-border shadow-sm",
                                              style: {
                                                  backgroundColor: e.backgroundColor
                                              }
                                          }), y.jsx("p", {
                                              className: "text-xs text-center font-mono text-muted-foreground",
                                              children: "Background"
                                          }), y.jsx("p", {
                                              className: "text-xs text-center font-mono",
                                              children: e.backgroundColor
                                          })]
                                      })]
                                  })]
                              }), y.jsxs("div", {
                                  className: "space-y-4 pt-6 border-t",
                                  children: [y.jsx("label", {
                                      className: "text-sm font-medium text-muted-foreground",
                                      children: "Sample Components"
                                  }), y.jsxs("div", {
                                      className: "flex flex-col sm:flex-row gap-4",
                                      children: [y.jsx("button", {
                                          className: "px-6 py-2 rounded-lg text-white font-medium transition-all hover:scale-105",
                                          style: {
                                              backgroundColor: e.primaryColor
                                          },
                                          children: "Primary Button"
                                      }), y.jsx("button", {
                                          className: "px-6 py-2 rounded-lg text-white font-medium transition-all hover:scale-105",
                                          style: {
                                              backgroundColor: e.accentColor
                                          },
                                          children: "Accent Button"
                                      })]
                                  })]
                              })]
                          })
                      })]
                  }), y.jsxs("div", {
                      className: "grid md:grid-cols-2 gap-6",
                      children: [y.jsxs(ke, {
                          children: [y.jsx(en, {
                              children: y.jsx(fn, {
                                  className: "text-lg",
                                  children: "Instant Customization"
                              })
                          }), y.jsx(Pe, {
                              className: "text-sm text-muted-foreground",
                              children: "Change your company name, colors, and messaging in seconds. All changes apply instantly across the entire platform."
                          })]
                      }), y.jsxs(ke, {
                          children: [y.jsx(en, {
                              children: y.jsxs(fn, {
                                  className: "text-lg flex items-center gap-2",
                                  children: [y.jsx(Vx, {
                                      className: "h-4 w-4 text-yellow-500"
                                  }), "Local Storage"]
                              })
                          }), y.jsx(Pe, {
                              className: "text-sm text-muted-foreground",
                              children: "Your branding settings are saved locally in your browser. When connected to a backend, this will sync across all your devices."
                          })]
                      })]
                  }), y.jsx("div", {
                      className: "text-center pt-8",
                      children: y.jsxs(Ee, {
                          onClick: () => s(!0),
                          size: "lg",
                          className: "bg-primary hover:bg-primary/90 text-white",
                          children: [y.jsx(vr, {
                              className: "h-5 w-5 mr-2"
                          }), "Customize Branding"]
                      })
                  })]
              })
          })
      }), y.jsx(m5, {
          isOpen: i,
          onClose: () => s(!1)
      }), y.jsx(gS, {}), y.jsx(vS, {
          initialEmotion: "happy"
      })]
  })
}
function y5() {
  return y.jsxs(w2, {
      children: [y.jsx(vf, {
          path: "/",
          component: c5
      }), y.jsx(vf, {
          path: "/branding",
          component: p5
      }), y.jsx(vf, {
          component: KM
      })]
  })
}
function g5() {
  const routerBase = typeof window !== "undefined" && window.location.pathname.startsWith("/projects/lawn-care") ? "/projects/lawn-care" : "";
  return y.jsx(QM, {
      children: y.jsx(F2, {
          client: Z2,
          children: y.jsxs(XM, {
              children: [y.jsx(LA, {}), routerBase ? y.jsx(b2, { base: routerBase, children: y.jsx(y5, {}) }) : y.jsx(y5, {})]
          })
      })
  })
}
function mount() {
  if (typeof document !== "undefined") {
    const el = document.getElementById("root");
    if (el && !el.hasChildNodes()) IT.createRoot(el).render(y.jsx(g5, {}));
  }
}
export { g5 as default, mount };
