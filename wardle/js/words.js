// Copyright 2012 Google Inc. All rights reserved.
(function() {

  var data = {
    "resource": {
      "version": "1",

      "macros": [{
        "function": "__e"
      }, {
        "function": "__aev",
        "vtp_varType": "URL",
        "vtp_component": "IS_OUTBOUND",
        "vtp_affiliatedDomains": ["list"]
      }, {
        "function": "__v",
        "vtp_name": "gtm.triggers",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ""
      }, {
        "function": "__v",
        "vtp_name": "gtm.elementId",
        "vtp_dataLayerVersion": 1
      }, {
        "function": "__v",
        "vtp_name": "gtm.elementClasses",
        "vtp_dataLayerVersion": 1
      }, {
        "function": "__aev",
        "vtp_varType": "URL",
        "vtp_component": "URL_NO_FRAGMENT"
      }, {
        "function": "__aev",
        "vtp_varType": "URL",
        "vtp_component": "HOST",
        "vtp_stripWww": true
      }, {
        "function": "__u",
        "vtp_component": "QUERY",
        "vtp_queryKey": "q,s,search,query,keyword",
        "vtp_multiQueryKeys": true,
        "vtp_ignoreEmptyQueryParam": true,
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__v",
        "vtp_name": "gtm.historyChangeSource",
        "vtp_dataLayerVersion": 1
      }, {
        "function": "__v",
        "vtp_name": "gtm.oldUrl",
        "vtp_dataLayerVersion": 1
      }, {
        "function": "__v",
        "vtp_name": "gtm.newUrl",
        "vtp_dataLayerVersion": 1
      }, {
        "function": "__c",
        "vtp_value": ""
      }, {
        "function": "__c",
        "vtp_value": 0
      }, {
        "vtp_signal": 0,
        "function": "__c",
        "vtp_value": 0
      }],
      "tags": [{
        "function": "__gct",
        "vtp_trackingId": "G-2SSGMHY3NP",
        "vtp_sessionDuration": 0,
        "tag_id": 1
      }, {
        "function": "__get",
        "vtp_eventName": "click",
        "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]],
        "vtp_deferrable": false,
        "tag_id": 11
      }, {
        "function": "__get",
        "vtp_eventName": "view_search_results",
        "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "search_term", ["macro", 7]]],
        "vtp_deferrable": true,
        "tag_id": 16
      }, {
        "function": "__get",
        "vtp_eventName": "page_view",
        "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "page_referrer", ["macro", 9]]],
        "vtp_deferrable": false,
        "tag_id": 19
      }, {
        "function": "__dlm",
        "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-2SSGMHY3NP", "value", ["macro", 9]]],
        "tag_id": 20
      }, {
        "function": "__set_product_settings",
        "original_activity_id": 3001,
        "vtp_foreignTldMacroResult": ["macro", 11],
        "vtp_isChinaVipRegionMacroResult": ["macro", 12],
        "tag_id": 23
      }, {
        "function": "__ogt_event_settings",
        "original_activity_id": 3002,
        "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]],
        "tag_id": 24
      }, {
        "function": "__ogt_google_signals",
        "original_activity_id": 3003,
        "vtp_googleSignals": "DISABLED",
        "vtp_serverMacroResult": ["macro", 13],
        "tag_id": 25
      }, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": true,
        "vtp_uniqueTriggerId": "1_9",
        "tag_id": 26
      }, {
        "function": "__ehl",
        "vtp_groupEvents": true,
        "vtp_groupEventsInterval": 1000,
        "vtp_uniqueTriggerId": "1_17",
        "tag_id": 27
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }, {
        "function": "_eq",
        "arg0": ["macro", 1],
        "arg1": true
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.linkClick"
      }, {
        "function": "_re",
        "arg0": ["macro", 2],
        "arg1": "(^$|((^|,)1_9($|,)))"
      }, {
        "function": "_eq",
        "arg0": ["macro", 7],
        "arg1": "undefined"
      }, {
        "function": "_eq",
        "arg0": ["macro", 8],
        "arg1": ["list", "pushState", "popstate", "replaceState"],
        "any_of": true
      }, {
        "function": "_eq",
        "arg0": ["macro", 9],
        "arg1": ["macro", 10]
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.historyChange-v2"
      }, {
        "function": "_re",
        "arg0": ["macro", 2],
        "arg1": "(^$|((^|,)1_17($|,)))"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.init"
      }],
      "rules": [
        [
          ["if", 0],
          ["add", 0, 8, 9]
        ],
        [
          ["if", 1, 2, 3],
          ["add", 1]
        ],
        [
          ["if", 0],
          ["unless", 4],
          ["add", 2]
        ],
        [
          ["if", 5, 7, 8],
          ["unless", 6],
          ["add", 3, 4]
        ],
        [
          ["if", 9],
          ["add", 5, 6, 7]
        ]
      ]
    },
    "runtime": [
      [50, "__set_product_settings", [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [52, "d", [17, ["c"], "containerId"]],
        ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
        ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
        [2, [15, "a"], "gtmOnSuccess", [7]]
      ],
      [50, "__ogt_event_settings", [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [52, "d", [8]],
        [53, [41, "f"],
          [3, "f", 0],
          [63, [7, "f"],
            [23, [15, "f"],
              [17, [17, [15, "a"], "eventSettings"], "length"]
            ],
            [33, [15, "f"],
              [3, "f", [0, [15, "f"], 1]]
            ],
            [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"],
                [15, "f"]
              ], "name"]],
              [43, [15, "d"],
                [15, "g"],
                [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"],
                  [15, "f"]
                ], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"],
                  [15, "f"]
                ], "conversion"]]
              ]
            ]]
          ]
        ],
        [52, "e", [17, ["c"], "containerId"]],
        ["b", [15, "e"], "event_settings", [15, "d"]],
        [2, [15, "a"], "gtmOnSuccess", [7]]
      ],
      [50, "__ogt_google_signals", [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [52, "d", [13, [41, "$0"],
          [3, "$0", ["require", "internal.getFlags"]],
          ["$0"]
        ]],
        [52, "e", [17, ["c"], "containerId"]],
        ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
        [22, [17, [15, "d"], "enableGa4OnoRemarketing"],
          [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]]
      ]
    ],
    "permissions": {
      "__set_product_settings": {
        "read_container_data": {}
      },
      "__ogt_event_settings": {
        "read_container_data": {}
      },
      "__ogt_google_signals": {
        "read_container_data": {}
      }
    }

    ,
    "security_groups": {
      "google": ["__set_product_settings", "__ogt_event_settings", "__ogt_google_signals"]
    }

  };


  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var l, aa = function(a) {
      var b = 0;
      return function() {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      }
    },
    ba = function(a) {
      return a.raw = a
    },
    ca = function(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: aa(a)
      }
    },
    ea = "function" == typeof Object.create ? Object.create : function(a) {
      var b = function() {};
      b.prototype = a;
      return new b
    },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = {
          a: !0
        },
        ka = {};
      try {
        ka.__proto__ = ia;
        ha = ka.a;
        break a
      } catch (a) {}
      ha = !1
    }
    fa = ha ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var la = fa,
    ma = function(a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c];
      a.Ek = b.prototype
    },
    na = this || self,
    qa = function(a) {
      return a
    };
  var ra = function(a, b) {
    this.g = a;
    this.o = b
  };
  var sa = function(a) {
      return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    },
    ua = function() {
      this.B = {};
      this.s = !1;
      this.F = {}
    },
    va = function(a, b) {
      var c = [],
        d;
      for (d in a.B)
        if (a.B.hasOwnProperty(d)) switch (d = d.substr(5), b) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)])
        }
      return c
    };
  ua.prototype.get = function(a) {
    return this.B["dust." + a]
  };
  ua.prototype.set = function(a, b) {
    this.s || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.B[a] = b))
  };
  ua.prototype.has = function(a) {
    return this.B.hasOwnProperty("dust." + a)
  };
  var wa = function(a, b) {
    b = "dust." + b;
    a.s || a.F.hasOwnProperty(b) || delete a.B[b]
  };
  ua.prototype.Fb = function() {
    this.s = !0
  };
  var xa = function(a) {
    this.o = new ua;
    this.g = [];
    this.s = !1;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (sa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
  };
  l = xa.prototype;
  l.toString = function(a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.g.length; c++) {
      var d = this.g[c];
      null === d || void 0 === d ? b.push("") : d instanceof xa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
    }
    return b.join(",")
  };
  l.set = function(a, b) {
    if (!this.s)
      if ("length" === a) {
        if (!sa(b)) throw Error("RangeError: Length property must be a valid integer.");
        this.g.length = Number(b)
      } else sa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
  };
  l.get = function(a) {
    return "length" === a ? this.length() : sa(a) ? this.g[Number(a)] : this.o.get(a)
  };
  l.length = function() {
    return this.g.length
  };
  l.Eb = function() {
    for (var a = va(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
    return new xa(a)
  };
  var ya = function(a, b) {
    sa(b) ? delete a.g[Number(b)] : wa(a.o, b)
  };
  l = xa.prototype;
  l.pop = function() {
    return this.g.pop()
  };
  l.push = function(a) {
    return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
  };
  l.shift = function() {
    return this.g.shift()
  };
  l.splice = function(a, b, c) {
    return new xa(this.g.splice.apply(this.g, arguments))
  };
  l.unshift = function(a) {
    return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
  };
  l.has = function(a) {
    return sa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
  };
  l.Fb = function() {
    this.s = !0;
    Object.freeze(this.g);
    this.o.Fb()
  };
  var za = function() {
    function a(f, g) {
      if (b[f]) {
        if (b[f].Qd + g > b[f].max) throw Error("Quota exceeded");
        b[f].Qd += g
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Kj: function(f) {
          c = f
        },
        Tg: function() {
          c && a(c, 1)
        },
        Mj: function(f) {
          d = f
        },
        Hb: function(f) {
          d && a(d, f)
        },
        ik: function(f, g) {
          b[f] = b[f] || {
            Qd: 0
          };
          b[f].max = g
        },
        jj: function(f) {
          return b[f] && b[f].Qd || 0
        },
        reset: function() {
          b = {}
        },
        Wi: a
      };
    e.onFnConsume = e.Kj;
    e.consumeFn = e.Tg;
    e.onStorageConsume = e.Mj;
    e.consumeStorage = e.Hb;
    e.setMax = e.ik;
    e.getConsumed = e.jj;
    e.reset = e.reset;
    e.consume = e.Wi;
    return e
  };
  var Ba = function(a, b) {
    this.s = a;
    this.O = function(c, d, e) {
      return c.apply(d, e)
    };
    this.B = b;
    this.o = new ua;
    this.g = this.F = void 0
  };
  Ba.prototype.add = function(a, b) {
    Ca(this, a, b, !1)
  };
  var Ca = function(a, b, c, d) {
    if (!a.o.s)
      if (a.s.Hb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
        var e = a.o;
        e.set(b, c);
        e.F["dust." + b] = !0
      } else a.o.set(b, c)
  };
  Ba.prototype.set = function(a, b) {
    this.o.s || (!this.o.has(a) && this.B && this.B.has(a) ? this.B.set(a, b) : (this.s.Hb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
  };
  Ba.prototype.get = function(a) {
    return this.o.has(a) ? this.o.get(a) : this.B ? this.B.get(a) : void 0
  };
  Ba.prototype.has = function(a) {
    return !!this.o.has(a) || !(!this.B || !this.B.has(a))
  };
  var Da = function(a) {
    var b = new Ba(a.s, a);
    a.F && (b.F = a.F);
    b.O = a.O;
    b.g = a.g;
    return b
  };
  var Fa = function() {},
    Ga = function(a) {
      return "function" == typeof a
    },
    Ha = function(a) {
      return "string" == typeof a
    },
    Ja = function(a) {
      return "number" == typeof a && !isNaN(a)
    },
    Ka = Array.isArray,
    Ma = function(a, b) {
      if (a && Ka(a))
        for (var c = 0; c < a.length; c++)
          if (a[c] && b(a[c])) return a[c]
    },
    Na = function(a, b) {
      if (!Ja(a) || !Ja(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a)
    },
    Pa = function(a, b) {
      for (var c = new Oa, d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++)
        if (c.get(b[e])) return !0;
      return !1
    },
    Qa = function(a,
      b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    },
    Sa = function(a) {
      return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    },
    Ta = function(a) {
      return Math.round(Number(a)) || 0
    },
    Ua = function(a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a
    },
    Va = function(a) {
      var b = [];
      if (Ka(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b
    },
    Wa = function(a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : ""
    },
    Xa = function() {
      return new Date(Date.now())
    },
    Ya = function() {
      return Xa().getTime()
    },
    Oa = function() {
      this.prefix = "gtm.";
      this.values = {}
    };
  Oa.prototype.set = function(a, b) {
    this.values[this.prefix + a] = b
  };
  Oa.prototype.get = function(a) {
    return this.values[this.prefix + a]
  };
  var Za = function(a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c
    },
    $a = function(a) {
      var b = a;
      return function() {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c()
          } catch (d) {}
        }
      }
    },
    bb = function(a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    },
    cb = function(a) {
      for (var b in a)
        if (a.hasOwnProperty(b)) return !0;
      return !1
    },
    db = function(a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c
    },
    eb = function(a, b) {
      var c = m;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <=
          b.indexOf(d)) return
      }
      return d
    },
    fb = function(a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c
    },
    gb = /^\w{1,9}$/,
    hb = function(a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Qa(a, function(d, e) {
        gb.test(d) && e && c.push(d)
      });
      return c.join(b)
    },
    ib = function(a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0)
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c
    };
  var jb = function(a, b) {
    ua.call(this);
    this.O = a;
    this.Ra = b
  };
  ma(jb, ua);
  jb.prototype.toString = function() {
    return this.O
  };
  jb.prototype.Eb = function() {
    return new xa(va(this, 1))
  };
  jb.prototype.g = function(a, b) {
    a.s.Tg();
    return this.Ra.apply(new kb(this, a), Array.prototype.slice.call(arguments, 1))
  };
  jb.prototype.o = function(a, b) {
    try {
      return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
    } catch (c) {}
  };
  var mb = function(a, b) {
      for (var c, d = 0; d < b.length && !(c = lb(a, b[d]), c instanceof ra); d++);
      return c
    },
    lb = function(a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof jb)) throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.g.apply(c, [a].concat(b.slice(1)))
      } catch (e) {
        var d = a.F;
        d && d(e, b.context ? {
          id: b[0],
          line: b.context.line
        } : null);
        throw e;
      }
    },
    kb = function(a, b) {
      this.o = a;
      this.g = b
    },
    z = function(a, b) {
      return Ka(b) ? lb(a.g, b) : b
    },
    F = function(a) {
      return a.o.O
    };
  var nb = function() {
    ua.call(this)
  };
  ma(nb, ua);
  nb.prototype.Eb = function() {
    return new xa(va(this, 1))
  };
  var ob = {
    control: function(a, b) {
      return new ra(a, z(this, b))
    },
    fn: function(a, b, c) {
      var d = this.g,
        e = z(this, b);
      if (!(e instanceof xa)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.g.s.Hb(a.length + f.length);
      return new jb(a, function() {
        return function(g) {
          var h = Da(d);
          void 0 === h.g && (h.g = this.g.g);
          for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
            if (k[n] = z(this, k[n]), k[n] instanceof ra) return k[n];
          for (var p = e.get("length"), q =
              0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
          h.add("arguments", new xa(k));
          var t = mb(h, f);
          if (t instanceof ra) return "return" === t.g ? t.o : t
        }
      }())
    },
    list: function(a) {
      var b = this.g.s;
      b.Hb(arguments.length);
      for (var c = new xa, d = 0; d < arguments.length; d++) {
        var e = z(this, arguments[d]);
        "string" === typeof e && b.Hb(e.length ? e.length - 1 : 0);
        c.push(e)
      }
      return c
    },
    map: function(a) {
      for (var b = this.g.s, c = new nb, d = 0; d < arguments.length - 1; d += 2) {
        var e = z(this, arguments[d]) + "",
          f = z(this, arguments[d + 1]),
          g = e.length;
        g += "string" ===
          typeof f ? f.length : 1;
        b.Hb(g);
        c.set(e, f)
      }
      return c
    },
    undefined: function() {}
  };
  var pb = function() {
      this.s = za();
      this.g = new Ba(this.s)
    },
    qb = function(a, b, c) {
      var d = new jb(b, c);
      d.Fb();
      a.g.set(b, d)
    },
    rb = function(a, b, c) {
      ob.hasOwnProperty(b) && qb(a, c || b, ob[b])
    };
  pb.prototype.execute = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.o(c)
  };
  pb.prototype.o = function(a) {
    for (var b, c = 0; c < arguments.length; c++) b = lb(this.g, arguments[c]);
    return b
  };
  pb.prototype.B = function(a, b) {
    var c = Da(this.g);
    c.g = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = lb(c, arguments[e]);
    return d
  };
  var sb, tb = function() {
    if (void 0 === sb) {
      var a = null,
        b = na.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: qa,
            createScript: qa,
            createScriptURL: qa
          })
        } catch (c) {
          na.console && na.console.error(c.message)
        }
        sb = a
      } else sb = a
    }
    return sb
  };
  var vb = function(a, b) {
    this.s = b === ub ? a : ""
  };
  vb.prototype.o = !0;
  vb.prototype.g = function() {
    return this.s.toString()
  };
  vb.prototype.toString = function() {
    return this.s + ""
  };
  var wb = function(a) {
      return a instanceof vb && a.constructor === vb ? a.s : "type_error:TrustedResourceUrl"
    },
    ub = {},
    xb = function(a) {
      var b = tb(),
        c = b ? b.createScriptURL(a) : a;
      return new vb(c, ub)
    };
  var zb = function(a, b) {
    this.s = b === yb ? a : ""
  };
  zb.prototype.o = !0;
  zb.prototype.g = function() {
    return this.s.toString()
  };
  zb.prototype.toString = function() {
    return this.s.toString()
  };
  var Ab = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    yb = {};

  function Bb() {
    var a = na.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b
    }
    return ""
  }

  function Cb(a) {
    return -1 != Bb().indexOf(a)
  };
  var Db = {},
    Eb = function(a, b, c) {
      this.s = c === Db ? a : "";
      this.o = !0
    };
  Eb.prototype.g = function() {
    return this.s.toString()
  };
  Eb.prototype.toString = function() {
    return this.s.toString()
  };
  var Fb = function(a) {
      return a instanceof Eb && a.constructor === Eb ? a.s : "type_error:SafeHtml"
    },
    Gb = function(a) {
      var b = tb(),
        c = b ? b.createHTML(a) : a;
      return new Eb(c, null, Db)
    },
    Hb = new Eb(na.trustedTypes && na.trustedTypes.emptyHTML || "", 0, Db);
  /*

   SPDX-License-Identifier: Apache-2.0
  */
  var Ib = {};
  var Jb = function() {},
    Lb = function(a) {
      this.g = a
    };
  ma(Lb, Jb);
  Lb.prototype.toString = function() {
    return this.g
  };

  function Mb(a, b) {
    var c = [new Lb(Nb[0].toLowerCase(), Ib)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function(f) {
        var g;
        if (f instanceof Lb) g = f.g;
        else throw Error("");
        return g
      }),
      e = b.toLowerCase();
    if (d.every(function(f) {
        return 0 !== e.indexOf(f)
      })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true")
  };
  var Ob = function(a, b) {
      var c = function() {};
      c.prototype = a.prototype;
      var d = new c;
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d
    },
    Pb = function(a) {
      var b = a;
      return function() {
        if (b) {
          var c = b;
          b = null;
          c()
        }
      }
    };
  var Qb = function(a) {
    var b = !1,
      c;
    return function() {
      b || (c = a(), b = !0);
      return c
    }
  }(function() {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    var c = a.firstChild.firstChild;
    a.innerHTML = Fb(Hb);
    return !c.parentElement
  });
  var m = window,
    H = document,
    Rb = navigator,
    Sb = H.currentScript && H.currentScript.src,
    Tb = function(a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a]
    },
    Ub = function(a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b())
      })
    },
    Vb = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Wb = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };

  function Xb(a, b, c) {
    b && Qa(b, function(d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e)
    })
  }
  var Yb = function(a, b, c, d) {
      var e = H.createElement("script");
      Xb(e, d, Vb);
      e.type = "text/javascript";
      e.async = !0;
      var f = xb(a);
      e.src = wb(f);
      var g, h, k = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
        n = null === (h = k.querySelector) || void 0 === h ? void 0 : h.call(k, "script[nonce]");
      (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
      Ub(e, b);
      c && (e.onerror = c);
      var p = H.getElementsByTagName("script")[0] || H.body || H.head;
      p.parentNode.insertBefore(e, p);
      return e
    },
    Zb = function() {
      if (Sb) {
        var a = Sb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3
      }
      return 1
    },
    bc = function(a, b, c, d, e) {
      var f = e,
        g = !1;
      f || (f = H.createElement("iframe"), g = !0);
      Xb(f, c, Wb);
      d && Qa(d, function(k, n) {
        f.dataset[k] = n
      });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var h = H.body && H.body.lastChild || H.body || H.head;
        h.parentNode.insertBefore(f, h)
      }
      Ub(f, b);
      void 0 !== a && (f.src = a);
      return f
    },
    cc = function(a, b, c) {
      var d = new Image(1, 1);
      d.onload = function() {
        d.onload = null;
        b && b()
      };
      d.onerror =
        function() {
          d.onerror = null;
          c && c()
        };
      d.src = a;
      return d
    },
    dc = function(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    ec = function(a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    I = function(a) {
      m.setTimeout(a, 0)
    },
    fc = function(a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    },
    gc = function(a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b &&
        (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b
    },
    hc = function(a) {
      var b = H.createElement("div"),
        c = Gb("A<div>" + a + "</div>"),
        d = b;
      if (Qb())
        for (; d.lastChild;) d.removeChild(d.lastChild);
      d.innerHTML = Fb(c);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e
    },
    ic = function(a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement
      }
      return null
    },
    jc = function(a) {
      var b;
      try {
        b = Rb.sendBeacon &&
          Rb.sendBeacon(a)
      } catch (c) {}
      b || cc(a)
    },
    kc = function(a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c
    },
    lc = function(a) {
      var b = H.featurePolicy;
      return b && Ga(b.allowsFeature) ? b.allowsFeature(a) : !1
    };
  var mc = function(a, b) {
      return z(this, a) && z(this, b)
    },
    nc = function(a, b) {
      return z(this, a) === z(this, b)
    },
    oc = function(a, b) {
      return z(this, a) || z(this, b)
    },
    pc = function(a, b) {
      a = z(this, a);
      b = z(this, b);
      return -1 < String(a).indexOf(String(b))
    },
    qc = function(a, b) {
      a = String(z(this, a));
      b = String(z(this, b));
      return a.substring(0, b.length) === b
    },
    rc = function(a, b) {
      a = z(this, a);
      b = z(this, b);
      switch (a) {
        case "pageLocation":
          var c = m.location.href;
          b instanceof nb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c
      }
    };
  var tc = function() {
    this.g = new pb;
    sc(this)
  };
  tc.prototype.execute = function(a) {
    return this.g.o(a)
  };
  var sc = function(a) {
    rb(a.g, "map");
    var b = function(c, d) {
      qb(a.g, c, d)
    };
    b("and", mc);
    b("contains", pc);
    b("equals", nc);
    b("or", oc);
    b("startsWith", qc);
    b("variable", rc)
  };
  var uc = function(a) {
    if (a instanceof uc) return a;
    this.Wa = a
  };
  uc.prototype.toString = function() {
    return String(this.Wa)
  };
  var wc = function(a) {
    ua.call(this);
    this.g = a;
    this.set("then", vc(this));
    this.set("catch", vc(this, !0));
    this.set("finally", vc(this, !1, !0))
  };
  ma(wc, nb);
  var vc = function(a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new jb("", function(d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof jb || (d = void 0);
      e instanceof jb || (e = void 0);
      var f = Da(this.g),
        g = function(k) {
          return function(n) {
            return c ? (k.g(f), a.g) : k.g(f, n)
          }
        },
        h = a.g.then(d && g(d), e && g(e));
      return new wc(h)
    })
  };
  /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var xc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    yc = function(a) {
      if (null == a) return String(a);
      var b = xc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object"
    },
    zc = function(a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Ac = function(a) {
      if (!a || "object" != yc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !zc(a, "constructor") && !zc(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return void 0 ===
        b || zc(a, b)
    },
    Bc = function(a, b) {
      var c = b || ("array" == yc(a) ? [] : {}),
        d;
      for (d in a)
        if (zc(a, d)) {
          var e = a[d];
          "array" == yc(e) ? ("array" != yc(c[d]) && (c[d] = []), c[d] = Bc(e, c[d])) : Ac(e) ? (Ac(c[d]) || (c[d] = {}), c[d] = Bc(e, c[d])) : c[d] = e
        } return c
    };
  var Dc = function(a, b, c) {
      var d = [],
        e = [],
        f = function(h, k) {
          for (var n = va(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
        },
        g = function(h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (h instanceof xa) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Eb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
            return n
          }
          if (h instanceof wc) return h.g;
          if (h instanceof nb) {
            var t = {};
            d.push(h);
            e.push(t);
            f(h, t);
            return t
          }
          if (h instanceof jb) {
            var u = function() {
              for (var r = Array.prototype.slice.call(arguments, 0), v = 0; v < r.length; v++) r[v] = Cc(r[v],
                b, !!c);
              var w = b ? b.s : za(),
                y = new Ba(w);
              b && (y.g = b.g);
              return g(h.g.apply(h, [y].concat(r)))
            };
            d.push(h);
            e.push(u);
            f(h, u);
            return u
          }
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null
          }
        };
      return g(a)
    },
    Cc = function(a, b, c) {
      var d = [],
        e = [],
        f = function(h, k) {
          for (var n in h) h.hasOwnProperty(n) && k.set(n,
            g(h[n]))
        },
        g = function(h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (Ka(h) || Sa(h)) {
            var n = new xa([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n
          }
          if (Ac(h)) {
            var q = new nb;
            d.push(h);
            e.push(q);
            f(h, q);
            return q
          }
          if ("function" === typeof h) {
            var t = new jb("", function(y) {
              for (var x = Array.prototype.slice.call(arguments, 0), A = 0; A < x.length; A++) x[A] = Dc(z(this, x[A]), b, !!c);
              return g((0, this.g.O)(h, h, x))
            });
            d.push(h);
            e.push(t);
            f(h, t);
            return t
          }
          var w = typeof h;
          if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
        };
      return g(a)
    };
  var Ec = function(a) {
      for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
      return b
    },
    Fc = function(a) {
      if (void 0 === a || Ka(a) || Ac(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0
      }
      return !1
    };
  var Gc = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function(a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof xa)
          for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
        else c.push(arguments[e]);
      return new xa(c)
    },
    every: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() &&
        d < c; d++)
        if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
      return !0
    },
    filter: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
      return new xa(d)
    },
    forEach: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
    },
    hasOwnProperty: function(a, b) {
      return this.has(b)
    },
    indexOf: function(a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) &&
          this.get(f) === b) return f;
      return -1
    },
    join: function(a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b)
    },
    lastIndexOf: function(a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1
    },
    map: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
      return new xa(d)
    },
    pop: function() {
      return this.pop()
    },
    push: function(a, b) {
      return this.push.apply(this,
        Array.prototype.slice.call(arguments, 1))
    },
    reduce: function(a, b, c) {
      var d = this.length(),
        e, f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break
          } if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e
    },
    reduceRight: function(a, b, c) {
      var d = this.length(),
        e, f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break
          } if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e
    },
    reverse: function() {
      for (var a = Ec(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c);
      return this
    },
    shift: function() {
      return this.shift()
    },
    slice: function(a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ?
        Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new xa(e)
    },
    some: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
      return !1
    },
    sort: function(a, b) {
      var c = Ec(this);
      void 0 === b ? c.sort() : c.sort(function(e, f) {
        return Number(b.g(a, e, f))
      });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
      return this
    },
    splice: function(a, b, c, d) {
      return this.splice.apply(this, Array.prototype.splice.call(arguments,
        1, arguments.length - 1))
    },
    toString: function() {
      return this.toString()
    },
    unshift: function(a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
    }
  };
  var Hc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
    Ic = new ra("break"),
    Jc = new ra("continue"),
    Kc = function(a, b) {
      return z(this, a) + z(this, b)
    },
    Lc = function(a, b) {
      return z(this, a) && z(this, b)
    },
    Mc = function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (!(c instanceof xa)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
        b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = Dc(c.get(0));
            try {
              return a.toString(e)
            } catch (q) {}
          }
          return a.toString()
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= Hc.indexOf(b)) {
          var f = Dc(c);
          return Cc(a[b].apply(a, f), this.g)
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof xa) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof jb) {
            var h = Ec(c);
            h.unshift(this.g);
            return g.g.apply(g, h)
          }
          throw Error("TypeError: " +
            b + " is not a function");
        }
        if (0 <= Gc.supportedMethods.indexOf(b)) {
          var k = Ec(c);
          k.unshift(this.g);
          return Gc[b].apply(a, k)
        }
      }
      if (a instanceof jb || a instanceof nb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof jb) {
            var p = Ec(c);
            p.unshift(this.g);
            return n.g.apply(n, p)
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof jb ? a.O : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Ec(c))
      }
      if (a instanceof uc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" +
        b + "' property.");
    },
    Nc = function(a, b) {
      a = z(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.g;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = z(this, b);
      c.set(a, d);
      return d
    },
    Oc = function(a) {
      var b = Da(this.g),
        c = mb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof ra) return c
    },
    Pc = function() {
      return Ic
    },
    Qc = function(a) {
      for (var b = z(this, a), c = 0; c < b.length; c++) {
        var d = z(this, b[c]);
        if (d instanceof ra) return d
      }
    },
    Rc = function(a) {
      for (var b =
          this.g, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = z(this, arguments[c + 1]);
          Ca(b, d, e, !0)
        }
      }
    },
    Sc = function() {
      return Jc
    },
    Tc = function(a, b, c) {
      var d = new xa;
      b = z(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.g.add(a, z(this, f))
    },
    Uc = function(a, b) {
      return z(this, a) / z(this, b)
    },
    Vc = function(a, b) {
      a = z(this, a);
      b = z(this, b);
      var c = a instanceof uc,
        d = b instanceof uc;
      return c || d ? c && d ? a.Wa == b.Wa : !1 : a ==
        b
    },
    Wc = function(a) {
      for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]);
      return b
    };

  function Xc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = mb(f, d);
      if (g instanceof ra) {
        if ("break" === g.g) break;
        if ("return" === g.g) return g
      }
    }
  }

  function Yc(a, b, c) {
    if ("string" === typeof b) return Xc(a, function() {
      return b.length
    }, function(f) {
      return f
    }, c);
    if (b instanceof nb || b instanceof xa || b instanceof jb) {
      var d = b.Eb(),
        e = d.length();
      return Xc(a, function() {
        return e
      }, function(f) {
        return d.get(f)
      }, c)
    }
  }
  var Zc = function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.g;
      return Yc(function(e) {
        d.set(a, e);
        return d
      }, b, c)
    },
    $c = function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.g;
      return Yc(function(e) {
        var f = Da(d);
        Ca(f, a, e, !0);
        return f
      }, b, c)
    },
    ad = function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.g;
      return Yc(function(e) {
        var f = Da(d);
        f.add(a, e);
        return f
      }, b, c)
    },
    gd = function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.g;
      return fd(function(e) {
        d.set(a, e);
        return d
      }, b, c)
    },
    hd =
    function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.g;
      return fd(function(e) {
        var f = Da(d);
        Ca(f, a, e, !0);
        return f
      }, b, c)
    },
    id = function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.g;
      return fd(function(e) {
        var f = Da(d);
        f.add(a, e);
        return f
      }, b, c)
    };

  function fd(a, b, c) {
    if ("string" === typeof b) return Xc(a, function() {
      return b.length
    }, function(d) {
      return b[d]
    }, c);
    if (b instanceof xa) return Xc(a, function() {
      return b.length()
    }, function(d) {
      return b.get(d)
    }, c);
    throw new TypeError("The value is not iterable.");
  }
  var jd = function(a, b, c, d) {
      function e(p, q) {
        for (var t = 0; t < f.length(); t++) {
          var u = f.get(t);
          q.add(u, p.get(u))
        }
      }
      var f = z(this, a);
      if (!(f instanceof xa)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
      var g = this.g;
      d = z(this, d);
      var h = Da(g);
      for (e(g, h); lb(h, b);) {
        var k = mb(h, d);
        if (k instanceof ra) {
          if ("break" === k.g) break;
          if ("return" === k.g) return k
        }
        var n = Da(g);
        e(h, n);
        lb(n, c);
        h = n
      }
    },
    kd = function(a) {
      a = z(this, a);
      var b = this.g,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a)
    },
    ld = function(a, b) {
      var c;
      a = z(this, a);
      b = z(this, b);
      if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof nb || a instanceof xa || a instanceof jb) c = a.get(b);
      else if ("string" === typeof a) "length" === b ? c = a.length : sa(b) && (c = a[b]);
      else if (a instanceof uc) return;
      return c
    },
    md = function(a, b) {
      return z(this, a) > z(this,
        b)
    },
    nd = function(a, b) {
      return z(this, a) >= z(this, b)
    },
    od = function(a, b) {
      a = z(this, a);
      b = z(this, b);
      a instanceof uc && (a = a.Wa);
      b instanceof uc && (b = b.Wa);
      return a === b
    },
    pd = function(a, b) {
      return !od.call(this, a, b)
    },
    qd = function(a, b, c) {
      var d = [];
      z(this, a) ? d = z(this, b) : c && (d = z(this, c));
      var e = mb(this.g, d);
      if (e instanceof ra) return e
    },
    rd = function(a, b) {
      return z(this, a) < z(this, b)
    },
    sd = function(a, b) {
      return z(this, a) <= z(this, b)
    },
    td = function(a, b) {
      return z(this, a) % z(this, b)
    },
    ud = function(a, b) {
      return z(this, a) * z(this, b)
    },
    vd = function(a) {
      return -z(this,
        a)
    },
    wd = function(a) {
      return !z(this, a)
    },
    xd = function(a, b) {
      return !Vc.call(this, a, b)
    },
    yd = function() {
      return null
    },
    zd = function(a, b) {
      return z(this, a) || z(this, b)
    },
    Ad = function(a, b) {
      var c = z(this, a);
      z(this, b);
      return c
    },
    Bd = function(a) {
      return z(this, a)
    },
    Fd = function(a) {
      return Array.prototype.slice.apply(arguments)
    },
    Gd = function(a) {
      return new ra("return", z(this, a))
    },
    Hd = function(a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof jb || a instanceof xa || a instanceof nb) && a.set(b, c);
      return c
    },
    Id = function(a, b) {
      return z(this, a) - z(this, b)
    },
    Jd = function(a, b, c) {
      a = z(this, a);
      var d = z(this, b),
        e = z(this, c);
      if (!Ka(d) || !Ka(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === z(this, d[h]))
          if (f = z(this, e[h]), f instanceof ra) {
            var k = f.g;
            if ("break" === k) return;
            if ("return" === k || "continue" === k) return f
          } else g = !0;
      if (e.length === d.length + 1 && (f = z(this, e[e.length - 1]), f instanceof ra && ("return" === f.g || "continue" ===
          f.g))) return f
    },
    Kd = function(a, b, c) {
      return z(this, a) ? z(this, b) : z(this, c)
    },
    Ld = function(a) {
      a = z(this, a);
      return a instanceof jb ? "function" : typeof a
    },
    Md = function(a) {
      for (var b = this.g, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0)
      }
    },
    Nd = function(a, b, c, d) {
      var e = z(this, d);
      if (z(this, c)) {
        var f = mb(this.g, e);
        if (f instanceof ra) {
          if ("break" === f.g) return;
          if ("return" === f.g) return f
        }
      }
      for (; z(this, a);) {
        var g = mb(this.g, e);
        if (g instanceof ra) {
          if ("break" === g.g) break;
          if ("return" === g.g) return g
        }
        z(this,
          b)
      }
    },
    Od = function(a) {
      return ~Number(z(this, a))
    },
    Pd = function(a, b) {
      return Number(z(this, a)) << Number(z(this, b))
    },
    Qd = function(a, b) {
      return Number(z(this, a)) >> Number(z(this, b))
    },
    Rd = function(a, b) {
      return Number(z(this, a)) >>> Number(z(this, b))
    },
    Sd = function(a, b) {
      return Number(z(this, a)) & Number(z(this, b))
    },
    Td = function(a, b) {
      return Number(z(this, a)) ^ Number(z(this, b))
    },
    Ud = function(a, b) {
      return Number(z(this, a)) | Number(z(this, b))
    };
  var Wd = function() {
    this.g = new pb;
    Vd(this)
  };
  Wd.prototype.execute = function(a) {
    return Xd(this.g.o(a))
  };
  var Yd = function(a, b, c) {
      return Xd(a.g.B(b, c))
    },
    Vd = function(a) {
      var b = function(d, e) {
        rb(a.g, d, String(e))
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function(d, e) {
        qb(a.g, String(d), e)
      };
      c(0, Kc);
      c(1, Lc);
      c(2, Mc);
      c(3, Nc);
      c(53, Oc);
      c(4, Pc);
      c(5, Qc);
      c(52, Rc);
      c(6, Sc);
      c(9, Qc);
      c(50, Tc);
      c(10, Uc);
      c(12, Vc);
      c(13, Wc);
      c(47, Zc);
      c(54, $c);
      c(55, ad);
      c(63, jd);
      c(64, gd);
      c(65, hd);
      c(66, id);
      c(15, kd);
      c(16, ld);
      c(17, ld);
      c(18, md);
      c(19, nd);
      c(20, od);
      c(21, pd);
      c(22, qd);
      c(23, rd);
      c(24, sd);
      c(25, td);
      c(26, ud);
      c(27,
        vd);
      c(28, wd);
      c(29, xd);
      c(45, yd);
      c(30, zd);
      c(32, Ad);
      c(33, Ad);
      c(34, Bd);
      c(35, Bd);
      c(46, Fd);
      c(36, Gd);
      c(43, Hd);
      c(37, Id);
      c(38, Jd);
      c(39, Kd);
      c(40, Ld);
      c(41, Md);
      c(42, Nd);
      c(58, Od);
      c(57, Pd);
      c(60, Qd);
      c(61, Rd);
      c(56, Sd);
      c(62, Td);
      c(59, Ud)
    };

  function Xd(a) {
    if (a instanceof ra || a instanceof jb || a instanceof xa || a instanceof nb || a instanceof uc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
  };
  var Zd = function() {
    var a = function(b) {
      return {
        toString: function() {
          return b
        }
      }
    };
    return {
      Nh: a("consent"),
      me: a("consent_always_fire"),
      Qf: a("convert_case_to"),
      Rf: a("convert_false_to"),
      Sf: a("convert_null_to"),
      Tf: a("convert_true_to"),
      Uf: a("convert_undefined_to"),
      sk: a("debug_mode_metadata"),
      Db: a("function"),
      xi: a("instance_name"),
      Bi: a("live_only"),
      Ci: a("malware_disabled"),
      Di: a("metadata"),
      uk: a("original_activity_id"),
      vk: a("original_vendor_template_id"),
      Hi: a("once_per_event"),
      yg: a("once_per_load"),
      xk: a("priority_override"),
      yk: a("respected_consent_types"),
      Eg: a("setup_tags"),
      Gg: a("tag_id"),
      Hg: a("teardown_tags")
    }
  }();
  var xe;
  var ye = [],
    ze = [],
    Ae = [],
    Be = [],
    Ce = [],
    De = {},
    Ee, Fe, Ge, He = function(a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c
    },
    Ie = function(a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = De[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_")) e && d && d.Sg && d.Sg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
          else if (g === Zd.me.toString() && a[g]) {}
      e && d && d.Rg && (f.vtp_gtmCachedValues = d.Rg);
      return void 0 !== e ? e(f) : xe(c, f, b)
    },
    Ke = function(a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Je(a[e], b, c));
      return d
    },
    Je = function(a, b, c) {
      if (Ka(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Je(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ye[f];
            if (!g || b.vf(g)) return;
            c[f] = !0;
            try {
              var h = Ke(g, b, c);
              h.vtp_gtmEventId =
                b.id;
              d = Ie(h, {
                event: b,
                index: f,
                type: 2
              });
              Ge && (d = Ge.Xi(d, h))
            } catch (y) {
              b.lh && b.lh(y, Number(f)), d = !1
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var k = 1; k < a.length; k += 2) d[Je(a[k], b, c)] = Je(a[k + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = Je(a[p], b, c);
              Fe && (n = n || q === Fe.Fd);
              d.push(q)
            }
            return Fe && n ? Fe.aj(d) : d.join("");
          case "escape":
            d = Je(a[1], b, c);
            if (Fe && Ka(a[1]) && "macro" === a[1][0] && Fe.xj(a)) return Fe.Qj(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) $d[a[t]] && (d = $d[a[t]](d));
            return d;
          case "tag":
            var u =
              a[1];
            if (!Be[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              Yg: a[2],
              index: u
            };
          case "zb":
            var r = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            r["function"] = a[1];
            var v = Le(r, b, c),
              w = !!a[4];
            return w || 2 !== v ? w !== (1 === v) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a
    },
    Le = function(a, b, c) {
      try {
        return Ee(Ke(a, b, c))
      } catch (d) {
        JSON.stringify(a)
      }
      return 2
    };
  var Me = function(a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.o = a;
    this.g = c
  };
  ma(Me, Error);

  function Ne(a, b) {
    if (Ka(a)) {
      Object.defineProperty(a, "context", {
        value: {
          line: b[0]
        }
      });
      for (var c = 1; c < a.length; c++) Ne(a[c], b[c])
    }
  };
  var Oe = function(a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.s = a;
    this.o = b;
    this.g = []
  };
  ma(Oe, Error);
  var Qe = function() {
    return function(a, b) {
      a instanceof Oe || (a = new Oe(a, Pe));
      b && a.g.push(b);
      throw a;
    }
  };

  function Pe(a) {
    if (!a.length) return a;
    a.push({
      id: "main",
      line: 0
    });
    for (var b = a.length - 1; 0 < b; b--) Ja(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a
  };
  var Te = function(a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0
      }
      for (var c = [], d = [], e = Re(a), f = 0; f < ze.length; f++) {
        var g = ze[f],
          h = Se(g, e);
        if (h) {
          for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
          b(g.block || [])
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < Be.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p
    },
    Se = function(a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null
      }
      for (var f =
          a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1
      }
      return !0
    },
    Re = function(a) {
      var b = [];
      return function(c) {
        void 0 === b[c] && (b[c] = Le(Ae[c], a));
        return b[c]
      }
    };
  var Ue = {
    Xi: function(a, b) {
      b[Zd.Qf] && "string" === typeof a && (a = 1 == b[Zd.Qf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Zd.Sf) && null === a && (a = b[Zd.Sf]);
      b.hasOwnProperty(Zd.Uf) && void 0 === a && (a = b[Zd.Uf]);
      b.hasOwnProperty(Zd.Tf) && !0 === a && (a = b[Zd.Tf]);
      b.hasOwnProperty(Zd.Rf) && !1 === a && (a = b[Zd.Rf]);
      return a
    }
  };
  var Ve = function() {
    this.g = {}
  };

  function We(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          f = a[e].call(void 0, b, c, d), g += "."
        } catch (h) {
          g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
        }
        if (!f) throw new Me(c, d, g);
      }
  }

  function Xe(a, b, c) {
    return function() {
      var d = arguments[0];
      if (d) {
        var e = a.g[d],
          f = a.g.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          We(e, b, d, g);
          We(f, b, d, g)
        }
      }
    }
  };
  var $e = function() {
      var a = data.permissions || {},
        b = J.I,
        c = this;
      this.o = new Ve;
      this.g = {};
      var d = {},
        e = Xe(this.o, b, function() {
          var f = arguments[0];
          return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
      Qa(a, function(f, g) {
        var h = {};
        Qa(g, function(k, n) {
          var p = Ye(k, n);
          h[k] = p.assert;
          d[k] || (d[k] = p.R)
        });
        c.g[f] = function(k, n) {
          var p = h[k];
          if (!p) throw Ze(k, {}, "The requested permission " + k + " is not configured.");
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q)
        }
      })
    },
    bf =
    function(a) {
      return af.g[a] || function() {}
    };

  function Ye(a, b) {
    var c = He(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ze;
    try {
      return Ie(c)
    } catch (d) {
      return {
        assert: function(e) {
          throw new Me(e, {}, "Permission " + e + " is unknown.");
        },
        R: function() {
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e
        }
      }
    }
  }

  function Ze(a, b, c) {
    return new Me(a, b, c)
  };
  var cf = !1;
  var df = {};
  df.rk = Ua('');
  df.dj = Ua('');
  var ef = cf,
    ff = df.dj,
    gf = df.rk;
  var hf = function(a, b) {
    var c = String(a);
    return c
  };
  var nf = function(a) {
      var b = {},
        c = 0;
      Qa(a, function(e, f) {
        if (void 0 !== f)
          if (f = hf(f, 100), jf.hasOwnProperty(e)) b[jf[e]] = kf(f);
          else if (lf.hasOwnProperty(e)) {
          var g = lf[e],
            h = kf(f);
          b.hasOwnProperty(g) || (b[g] = h)
        } else if ("category" === e)
          for (var k = kf(f).split("/", 5), n = 0; n < k.length; n++) {
            var p = mf[n],
              q = k[n];
            b.hasOwnProperty(p) || (b[p] = q)
          } else 10 > c && (b["k" + c] = kf(hf(e, 40)), b["v" + c] = kf(f), c++)
      });
      var d = [];
      Qa(b, function(e, f) {
        d.push("" + e + f)
      });
      return d.join("~")
    },
    kf = function(a) {
      return ("" + a).replace(/~/g, function() {
        return "~~"
      })
    },
    jf = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo"
    },
    lf = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn"
    },
    mf = ["ca",
      "c2", "c3", "c4", "c5"
    ];
  var of = function(a) {
    var b = [];
    Qa(a, function(c, d) {
      null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
    });
    return b.join("&")
  }, sf = function(a, b, c, d) {
    this.Fa = a.Fa;
    this.Ob = a.Ob;
    this.K = a.K;
    this.o = b;
    this.B = c;
    this.s = of (a.Fa);
    this.g = of (a.K);
    this.F = this.g.length;
    if (d && 16384 < this.F) throw Error("EVENT_TOO_LARGE");
  };
  var tf = function() {
    this.events = [];
    this.g = this.Fa = "";
    this.s = 0;
    this.o = !1
  };
  tf.prototype.add = function(a) {
    return this.B(a) ? (this.events.push(a), this.Fa = a.s, this.g = a.o, this.s += a.F, this.o = a.B, !0) : !1
  };
  tf.prototype.B = function(a) {
    var b = 20 > this.events.length && 16384 > a.F + this.s,
      c = this.Fa === a.s && this.g === a.o && this.o === a.B;
    return 0 == this.events.length || b && c
  };
  var uf = function(a, b) {
      Qa(a, function(c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
      })
    },
    vf = function(a, b) {
      var c = [];
      a.s && c.push(a.s);
      b && c.push("_s=" + b);
      uf(a.Ob, c);
      var d = !1;
      a.g && (c.push(a.g), d = !0);
      var e = c.join("&"),
        f = "",
        g = e.length + a.o.length + 1;
      d && 2048 < g && (f = c.pop(), e = c.join("&"));
      return {
        Ef: e,
        body: f
      }
    },
    wf = function(a, b) {
      var c = a.events;
      if (1 == c.length) return vf(c[0], b);
      var d = [];
      a.Fa && d.push(a.Fa);
      for (var e = {}, f = 0; f < c.length; f++) Qa(c[f].Ob, function(u, r) {
        null != r && (e[u] = e[u] || {}, e[u][String(r)] =
          e[u][String(r)] + 1 || 1)
      });
      var g = {};
      Qa(e, function(u, r) {
        var v, w = -1,
          y = 0;
        Qa(r, function(x, A) {
          y += A;
          var B = (x.length + u.length + 2) * (A - 1);
          B > w && (v = x, w = B)
        });
        y == c.length && (g[u] = v)
      });
      uf(g, d);
      b && d.push("_s=" + b);
      for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = {
          pd: n.pd
        }, p++) {
        var q = [];
        n.pd = {};
        Qa(c[p].Ob, function(u) {
          return function(r, v) {
            g[r] != "" + v && (u.pd[r] = v)
          }
        }(n));
        c[p].g && q.push(c[p].g);
        uf(n.pd, q);
        k.push(q.join("&"))
      }
      var t = k.join("\r\n");
      return {
        Ef: h,
        body: t
      }
    };
  var Gf = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    Hf = {
      Fn: "function",
      DustMap: "Object",
      List: "Array"
    },
    L = function(a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Gf.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          k = c[d];
        if (null == k) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== h) {
          var n = typeof k;
          k instanceof jb ? n = "Fn" : k instanceof xa ? n = "List" : k instanceof nb ? n = "DustMap" : k instanceof uc && (n = "OpaqueValue");
          if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Hf[n] || n) + ", which does not match required type " + (Hf[h] || h) + ".");
        }
      }
    };

  function If(a) {
    return "" + a
  }

  function Jf(a, b) {
    var c = [];
    return c
  };
  var Kf = function(a, b) {
      var c = new jb(a, function() {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = z(this, d[e]);
        return b.apply(this, d)
      });
      c.Fb();
      return c
    },
    Lf = function(a, b) {
      var c = new nb,
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ga(e) ? c.set(d, Kf(a + "_" + d, e)) : (Ja(e) || Ha(e) || "boolean" == typeof e) && c.set(d, e)
        } c.Fb();
      return c
    };
  var Mf = function(a, b) {
    L(F(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new nb;
    return d = Lf("AssertApiSubject", c)
  };
  var Nf = function(a, b) {
    L(F(this), ["actual:?*", "message:?string"], arguments);
    var c = {},
      d = new nb;
    return d = Lf("AssertThatSubject", c)
  };

  function Of(a) {
    return function() {
      for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Dc(arguments[d], c));
      return Cc(a.apply(null, b))
    }
  }
  var Qf = function() {
    for (var a = Math, b = Pf, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Of(a[e].bind(a)))
    }
    return c
  };
  var Rf = function(a) {
    var b;
    return b
  };
  var Sf = function(a) {
    var b;
    return b
  };
  var Tf = function(a) {
    return encodeURI(a)
  };
  var Uf = function(a) {
    return encodeURIComponent(a)
  };
  var Vf = function(a) {
    L(F(this), ["message:?string"], arguments);
  };
  var Wf = function(a, b) {
    L(F(this), ["min:!number", "max:!number"], arguments);
    return Na(a, b)
  };
  var M = function(a, b, c) {
    var d = a.g.g;
    if (!d) throw Error("Missing program state.");
    d.Ri.apply(null, Array.prototype.slice.call(arguments, 1))
  };
  var Xf = function() {
    M(this, "read_container_data");
    var a = new nb;
    a.set("containerId", 'G-2SSGMHY3NP');
    a.set("version", '1');
    a.set("environmentName", '');
    a.set("debugMode", ef);
    a.set("previewMode", gf);
    a.set("environmentMode", ff);
    a.Fb();
    return a
  };
  var Yf = {};
  Yf.sstECEnableData = !0;
  Yf.enableAdsEc = !0;
  Yf.sstFFConversionEnabled = !0;
  Yf.sstEnableAuid = !0;
  Yf.enableGbraidUpdate = !0;
  Yf.enable1pScripts = !0;
  Yf.enableGlobalEventDeveloperIds = !1;
  Yf.enableGa4OnoRemarketing = !1;
  Yf.omitAuidIfWbraidPresent = !1;
  Yf.sstEnableDclid = !0;
  Yf.reconcileCampaignFields = !1;
  Yf.enableEmFormCcd = !1;
  Yf.enableEmFormCcdPart2 = !1;
  Yf.requireGtagUserDataTos = !0;

  function Zf() {
    return Cc(Yf)
  };
  var $f = function() {
    return (new Date).getTime()
  };
  var ag = function(a) {
    if (null === a) return "null";
    if (a instanceof xa) return "array";
    if (a instanceof jb) return "function";
    if (a instanceof uc) {
      a = a.Wa;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1)
      }
      return String(a.constructor.name)
    }
    return typeof a
  };
  var bg = function(a) {
    function b(c) {
      return function(d) {
        try {
          return c(d)
        } catch (e) {
          (ef || gf) && a.call(this, e.message)
        }
      }
    }
    return {
      parse: b(function(c) {
        return Cc(JSON.parse(c))
      }),
      stringify: b(function(c) {
        return JSON.stringify(Dc(c))
      })
    }
  };
  var cg = function(a) {
    return Ta(Dc(a, this.g))
  };
  var dg = function(a) {
    return Number(Dc(a, this.g))
  };
  var eg = function(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
  };
  var fg = function(a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null
  };
  var Pf = "floor ceil round max min abs pow sqrt".split(" ");
  var gg = function() {
      var a = {};
      return {
        lj: function(b) {
          return a.hasOwnProperty(b) ? a[b] : void 0
        },
        jk: function(b, c) {
          a[b] = c
        },
        reset: function() {
          a = {}
        }
      }
    },
    hg = function(a, b) {
      return function() {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return jb.prototype.g.apply(a, c)
      }
    },
    ig = function(a, b) {
      L(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var jg = {};
  jg.keys = function(a) {
    return new xa
  };
  jg.values = function(a) {
    return new xa
  };
  jg.entries = function(a) {
    return new xa
  };
  jg.freeze = function(a) {
    return a
  };
  jg.delete = function(a, b) {
    return !1
  };
  var lg = function() {
    this.g = {};
    this.o = {};
  };
  lg.prototype.get = function(a, b) {
    var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
    return c
  };
  lg.prototype.add = function(a, b, c) {
    if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.g[a] = c ? void 0 : Ga(b) ? Kf(a, b) : Lf(a, b)
  };
  var ng = function(a, b, c) {
    if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
    if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
    a.o[b] = Ga(c) ? Kf(b, c) : Lf(b, c)
  };

  function mg(a, b) {
    var c = void 0;
    return c
  };

  function og() {
    var a = {};
    return a
  };
  var S = {
    cc: "_ee",
    Ic: "_syn_or_mod",
    zk: "_uei",
    Se: "_eu",
    wk: "_pci",
    $b: "event_callback",
    wd: "event_timeout",
    Ba: "gtag.config",
    Sa: "gtag.get",
    za: "purchase",
    Wb: "refund",
    yb: "begin_checkout",
    Tb: "add_to_cart",
    Ub: "remove_from_cart",
    Wh: "view_cart",
    Wf: "add_to_wishlist",
    Aa: "view_item",
    Vb: "view_promotion",
    te: "select_promotion",
    se: "select_item",
    zb: "view_item_list",
    Vf: "add_payment_info",
    Vh: "add_shipping_info",
    Ua: "value_key",
    hb: "value_callback",
    X: "allow_ad_personalization_signals",
    Dc: "restricted_data_processing",
    xc: "allow_google_signals",
    va: "cookie_expires",
    Yb: "cookie_update",
    Ec: "session_duration",
    Ad: "session_engaged_time",
    Ka: "user_properties",
    wa: "transport_url",
    W: "ads_data_redaction",
    Da: "user_data",
    Ac: "first_party_collection",
    D: "ad_storage",
    M: "analytics_storage",
    ne: "region",
    Pf: "wait_for_update",
    sa: "conversion_linker",
    Ia: "conversion_cookie_prefix",
    ka: "value",
    ja: "currency",
    ug: "trip_type",
    da: "items",
    kg: "passengers",
    we: "allow_custom_scripts",
    Fc: "session_id",
    pg: "quantity",
    lb: "transaction_id",
    jb: "language",
    ud: "country",
    td: "allow_enhanced_conversions",
    Be: "aw_merchant_id",
    ze: "aw_feed_country",
    Ae: "aw_feed_language",
    ye: "discount",
    aa: "developer_id",
    Bd: "delivery_postal_code",
    He: "estimated_delivery_date",
    Fe: "shipping",
    Oe: "new_customer",
    Ce: "customer_lifetime_value",
    Ge: "enhanced_conversions",
    wc: "page_view",
    na: "linker",
    P: "domains",
    bc: "decorate_forms",
    gg: "enhanced_conversions_automatic_settings",
    ci: "auto_detection_enabled",
    hg: "ga_temp_client_id",
    ue: "user_engagement",
    Qh: "app_remove",
    Rh: "app_store_refund",
    Sh: "app_store_subscription_cancel",
    Th: "app_store_subscription_convert",
    Uh: "app_store_subscription_renew",
    Xh: "first_open",
    Yh: "first_visit",
    Zh: "in_app_purchase",
    $h: "session_start",
    ai: "allow_display_features",
    yc: "campaign",
    Xf: "campaign_content",
    Yf: "campaign_id",
    Zf: "campaign_medium",
    $f: "campaign_name",
    ag: "campaign_source",
    bg: "campaign_term",
    Ab: "client_id",
    ma: "cookie_domain",
    Xb: "cookie_name",
    fb: "cookie_path",
    Ja: "cookie_flags",
    zc: "custom_map",
    Ke: "groups",
    jg: "non_interaction",
    kb: "page_location",
    Pe: "page_path",
    Va: "page_referrer",
    Cc: "page_title",
    oa: "send_page_view",
    Cb: "send_to",
    Qe: "session_engaged",
    Ne: "_logged_in_state",
    Re: "session_number",
    si: "tracking_id",
    nb: "url_passthrough",
    ac: "accept_incoming",
    Bc: "url_position",
    ng: "phone_conversion_number",
    lg: "phone_conversion_callback",
    mg: "phone_conversion_css_class",
    og: "phone_conversion_options",
    ni: "phone_conversion_ids",
    mi: "phone_conversion_country_code",
    Ta: "aw_remarketing",
    xe: "aw_remarketing_only",
    ve: "gclid",
    bi: "auid",
    hi: "affiliation",
    fg: "tax",
    Ee: "list_name",
    eg: "checkout_step",
    dg: "checkout_option",
    ii: "coupon",
    ji: "promotions",
    ob: "user_id",
    oi: "retoken",
    Ca: "cookie_prefix",
    cg: "disable_merchant_reported_purchases",
    gi: "dc_natural_search",
    fi: "dc_custom_params",
    ig: "method",
    ri: "search_term",
    ei: "content_type",
    li: "optimize_id",
    ki: "experiments",
    ib: "google_signals"
  };
  S.yd = "google_tld";
  S.Cd = "update";
  S.Ie = "firebase_id";
  S.Je = "ga_restrict_domain";
  S.vd = "event_settings";
  S.De = "dynamic_event_settings";
  S.Gc = "user_data_settings";
  S.qg = "screen_name";
  S.rg = "screen_resolution";
  S.Bb = "_x_19";
  S.Zb = "_ecid";
  S.xd = "_x_20";
  S.Me = "internal_traffic_results";
  S.sg = "traffic_type";
  S.zd = "referral_exclusion_definition";
  S.Le = "ignore_referrer";
  S.di = "content_group";
  S.ia = "allow_interest_groups";
  var pg = {};
  S.ui = Object.freeze((pg[S.X] = 1, pg[S.td] = 1, pg[S.xc] = 1, pg[S.da] = 1, pg[S.ma] = 1, pg[S.va] = 1, pg[S.Ja] = 1, pg[S.Xb] = 1, pg[S.fb] = 1, pg[S.Ca] = 1, pg[S.Yb] = 1, pg[S.zc] = 1, pg[S.aa] = 1, pg[S.De] = 1, pg[S.$b] = 1, pg[S.vd] = 1, pg[S.wd] = 1, pg[S.Ac] = 1, pg[S.Je] = 1, pg[S.ib] = 1, pg[S.yd] = 1, pg[S.Ke] = 1, pg[S.Me] = 1, pg[S.na] = 1, pg[S.zd] = 1, pg[S.Dc] = 1, pg[S.oa] = 1, pg[S.Cb] = 1, pg[S.Ec] = 1, pg[S.Ad] = 1, pg[S.Bd] = 1, pg[S.wa] = 1, pg[S.Cd] = 1, pg[S.Gc] = 1, pg[S.Ka] = 1, pg[S.Se] = 1, pg));
  S.vg = Object.freeze([S.kb, S.Va, S.Cc, S.jb, S.qg, S.ob, S.Ie, S.di]);
  var qg = {};
  S.wi = Object.freeze((qg[S.Qh] = 1, qg[S.Rh] = 1, qg[S.Sh] = 1, qg[S.Th] = 1, qg[S.Uh] = 1, qg[S.Xh] = 1, qg[S.Yh] = 1, qg[S.Zh] = 1, qg[S.$h] = 1, qg[S.ue] = 1, qg));
  var rg = {};
  S.wg = Object.freeze((rg[S.Vf] = 1, rg[S.Vh] = 1, rg[S.Tb] = 1, rg[S.Ub] = 1, rg[S.Wh] = 1, rg[S.yb] = 1, rg[S.se] = 1, rg[S.zb] = 1, rg[S.te] = 1, rg[S.Vb] = 1, rg[S.za] = 1, rg[S.Wb] = 1, rg[S.Aa] = 1, rg[S.Wf] = 1, rg));
  S.Ue = Object.freeze([S.X, S.xc, S.Yb]);
  S.Fi = Object.freeze([].concat(S.Ue));
  S.Ve = Object.freeze([S.va, S.wd, S.Ec, S.Ad]);
  S.Gi = Object.freeze([].concat(S.Ve));
  var sg = {};
  S.oe = (sg[S.D] = "1", sg[S.M] = "2", sg);
  var ug = {},
    vg = function(a, b) {
      ug[a] = ug[a] || [];
      ug[a][b] = !0
    },
    wg = function(a) {
      for (var b = [], c = ug[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
      return b.join("")
    };
  var xg = function(a) {
    vg("GTM", a)
  };
  var J = {},
    yg = m.google_tag_manager = m.google_tag_manager || {},
    zg = Math.random();
  J.I = "G-2SSGMHY3NP";
  J.Jd = "1v0";
  J.Z = "dataLayer";
  J.Ph = "ChEIgPTojwYQ+ZzDrNjCzubbARIlAHUayDCvRJpqORNFU/SichCFBsqeRrBe1XGc9OP1LfHPHSw+zhoCjpg\x3d";
  var Ag = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0
    },
    Bg = {
      __ogt_consent_defaults: !0,
      __ogt_cookie_settings: !0,
      __ogt_cross_domain: !0,
      __ogt_em_form: !0,
      __ogt_em_download: !0,
      __ccd_em_form: !0,
      __ogt_em_outbound_click: !0,
      __ogt_em_page_view: !0,
      __ogt_em_scroll: !0,
      __ogt_em_site_search: !0,
      __ogt_em_video: !0,
      __ogt_event_create: !0,
      __ogt_event_edit: !0,
      __ogt_ga_gam_link: !0,
      __ogt_ga_send: !0,
      __ogt_ip_mark: !0,
      __ogt_ads_datatos: !0,
      __ogt_conv_def: !0,
      __ogt_event_settings: !0,
      __ogt_ga_datatos: !0,
      __ogt_google_signals: !0,
      __set_product_settings: !0,
      __ogt_referral_exclusion: !0,
      __ogt_session_timeout: !0,
      __ogt_1p_data: !0
    },
    Cg = {
      __paused: !0,
      __tg: !0
    },
    Dg;
  for (Dg in Ag) Ag.hasOwnProperty(Dg) && (Cg[Dg] = !0);
  J.pe = "www.googletagmanager.com";
  var Eg, Fg = J.pe + "/gtm.js";
  Fg = J.pe + "/gtag/js";
  Eg = Fg;
  var Gg = Ua(""),
    Hg = null,
    Ig = null,
    Jg = "https://www.googletagmanager.com/a?id=" + J.I + "&cv=1",
    Kg = {},
    Lg = {},
    Mg = function() {
      var a = yg.sequence || 1;
      yg.sequence = a + 1;
      return a
    };
  J.Oh = "";
  var Ng = "";
  J.Kd = Ng;
  var Og = new Oa,
    Pg = {},
    Qg = {},
    Tg = {
      name: J.Z,
      set: function(a, b) {
        Bc(fb(a, b), Pg);
        Rg()
      },
      get: function(a) {
        return Sg(a, 2)
      },
      reset: function() {
        Og = new Oa;
        Pg = {};
        Rg()
      }
    },
    Sg = function(a, b) {
      return 2 != b ? Og.get(a) : Ug(a)
    },
    Ug = function(a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Pg, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return
      }
      return d
    },
    Vg = function(a, b) {
      Qg.hasOwnProperty(a) || (Og.set(a, b), Bc(fb(a, b), Pg), Rg())
    },
    Wg = function() {
      for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
          "gtm.blacklist", "tagTypeBlacklist"
        ], b = 0; b < a.length; b++) {
        var c = a[b],
          d = Sg(c, 1);
        if (Ka(d) || Ac(d)) d = Bc(d);
        Qg[c] = d
      }
    },
    Rg = function(a) {
      Qa(Qg, function(b, c) {
        Og.set(b, c);
        Bc(fb(b, void 0), Pg);
        Bc(fb(b, c), Pg);
        a && delete Qg[b]
      })
    },
    Xg = function(a, b) {
      var c, d = 1 !== (void 0 === b ? 2 : b) ? Ug(a) : Og.get(a);
      "array" === yc(d) || "object" === yc(d) ? c = Bc(d) : c = d;
      return c
    };
  var Yg = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Zg = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    $g = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    ah = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  var bh = function() {
      var a = !1;
      a = !0;
      return a
    },
    dh = function(a) {
      var b = Sg("gtm.allowlist") || Sg("gtm.whitelist");
      b && xg(9);
      bh() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && db(Va(b), Zg),
        d = Sg("gtm.blocklist") ||
        Sg("gtm.blacklist");
      d || (d = Sg("tagTypeBlacklist")) && xg(3);
      d ? xg(8) : d = [];
      ch() && (d = Va(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Va(d).indexOf("google") && xg(2);
      var e = d && db(Va(d), $g),
        f = {};
      return function(g) {
        var h = g && g[Zd.Db];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var k = Lg[h] || [],
          n = a(h, k);
        if (b) {
          var p;
          if (p = n) a: {
            if (0 > c.indexOf(h))
              if (k && 0 < k.length)
                for (var q = 0; q < k.length; q++) {
                  if (0 > c.indexOf(k[q])) {
                    xg(11);
                    p = !1;
                    break a
                  }
                } else {
                  p = !1;
                  break a
                }
            p = !0
          }
          n = p
        }
        var t = !1;
        if (d) {
          var u = 0 <= e.indexOf(h);
          if (u) t = u;
          else {
            var r = Pa(e, k || []);
            r && xg(10);
            t = r
          }
        }
        var v = !n || t;
        v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Pa(e, ah));
        return f[h] = v
      }
    },
    ch = function() {
      return Yg.test(m.location && m.location.hostname)
    };
  var eh = {
      active: !0,
      isAllowed: function() {
        return !0
      }
    },
    fh = function(a) {
      var b = yg.zones;
      return b ? b.checkState(J.I, a) : eh
    },
    gh = function(a) {
      var b = yg.zones;
      !b && a && (b = yg.zones = a());
      return b
    };
  var hh = new function(a, b) {
    this.g = a;
    this.defaultValue = void 0 === b ? !1 : b
  }(1933);
  var jh = function() {
    var a = ih,
      b = "tf";
    if (a.tf && a.hasOwnProperty(b)) return a.tf;
    var c = new a;
    a.tf = c;
    a.hasOwnProperty(b);
    return c
  };
  var ih = function() {
    var a = {};
    this.g = function() {
      var b = hh.g,
        c = hh.defaultValue;
      return null != a[b] ? a[b] : c
    };
    this.o = function() {
      a[hh.g] = !0
    }
  };
  var kh = [];

  function lh() {
    var a = Tb("google_tag_data", {});
    a.ics || (a.ics = {
      entries: {},
      set: mh,
      update: nh,
      addListener: oh,
      notifyListeners: th,
      active: !1,
      usedDefault: !1,
      usedUpdate: !1,
      accessedDefault: !1,
      accessedAny: !1,
      wasSetLate: !1
    });
    return a.ics
  }

  function mh(a, b, c, d, e, f) {
    var g = lh();
    !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
    g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        k = h[a] || {},
        n = k.region,
        p = c && Ha(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === k.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: k.update,
            quiet: q
          };
        if ("" !== d || !1 !== k.initial) h[a] = t;
        q && m.setTimeout(function() {
          h[a] ===
            t && t.quiet && (t.quiet = !1, uh(a), th(), vg("TAGGING", 2))
        }, f)
      }
    }
  }

  function nh(a, b) {
    var c = lh();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = vh(a),
        e = c.entries,
        f = e[a] = e[a] || {};
      f.update = "granted" === b;
      var g = vh(a);
      f.quiet ? (f.quiet = !1, uh(a)) : g !== d && uh(a)
    }
  }

  function oh(a, b) {
    kh.push({
      jf: a,
      fj: b
    })
  }

  function uh(a) {
    for (var b = 0; b < kh.length; ++b) {
      var c = kh[b];
      Ka(c.jf) && -1 !== c.jf.indexOf(a) && (c.qh = !0)
    }
  }

  function th(a) {
    for (var b = 0; b < kh.length; ++b) {
      var c = kh[b];
      if (c.qh) {
        c.qh = !1;
        try {
          c.fj({
            consentEventId: a
          })
        } catch (d) {}
      }
    }
  }
  var vh = function(a) {
      var b = lh();
      b.accessedAny = !0;
      var c = b.entries[a] || {};
      return void 0 !== c.update ? c.update : c.initial
    },
    wh = function(a) {
      var b = lh();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial
    },
    xh = function(a) {
      var b = lh();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet
    },
    yh = function() {
      if (!jh().g()) return !1;
      var a = lh();
      a.accessedAny = !0;
      return a.active
    },
    zh = function() {
      var a = lh();
      a.accessedDefault = !0;
      return a.usedDefault
    },
    Ah = function(a, b) {
      lh().addListener(a, b)
    },
    Bh = function(a) {
      lh().notifyListeners(a)
    },
    Ch = function(a, b) {
      function c() {
        for (var e = 0; e < b.length; e++)
          if (!xh(b[e])) return !0;
        return !1
      }
      if (c()) {
        var d = !1;
        Ah(b, function(e) {
          d || c() || (d = !0, a(e))
        })
      } else a({})
    },
    Dh = function(a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === vh(h) || e[h] || (f.push(h), e[h] = !0)
        }
        return f
      }
      var d = Ha(b) ? [b] : b,
        e = {};
      c().length !== d.length && Ah(d, function(f) {
        var g = c();
        0 < g.length && (f.jf = g, a(f))
      })
    };

  function Eh() {}

  function Fh() {};

  function Gh(a) {
    for (var b = [], c = 0; c < Hh.length; c++) {
      var d = a(Hh[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
    }
    return b.join("")
  }
  var Hh = [S.D, S.M],
    Ih = function(a) {
      var b = a[S.ne];
      b && xg(40);
      var c = a[S.Pf];
      c && xg(41);
      for (var d = Ka(b) ? b : [b], e = {
          qc: 0
        }; e.qc < d.length; e = {
          qc: e.qc
        }, ++e.qc) Qa(a, function(f) {
        return function(g, h) {
          if (g !== S.ne && g !== S.Pf) {
            var k = d[f.qc];
            lh().set(g, h, k, "US", "US-VT", c)
          }
        }
      }(e))
    },
    Jh = 0,
    Kh = function(a, b) {
      Qa(a, function(e, f) {
        lh().update(e, f)
      });
      Bh(b);
      var c = Ya(),
        d = c - Jh;
      Jh && 0 <= d && 1E3 > d && xg(66);
      Jh = c
    },
    Lh = function(a) {
      var b = vh(a);
      return void 0 != b ? b : !0
    },
    Mh = function() {
      return "G1" + Gh(vh)
    },
    Nh = function() {
      return "G1" +
        Gh(wh)
    },
    Oh = function(a, b) {
      Ah(a, b)
    },
    Ph = function(a, b) {
      Dh(a, b)
    },
    Qh = function(a, b) {
      Ch(a, b)
    };
  var Sh = function(a) {
      return Rh ? H.querySelectorAll(a) : null
    },
    Th = function(a, b) {
      if (!Rh) return null;
      if (Element.prototype.closest) try {
        return a.closest(b)
      } catch (e) {
        return null
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d
        } catch (e) {
          break
        }
        d = d.parentElement || d.parentNode
      } while (null !== d && 1 === d.nodeType);
      return null
    },
    Uh = !1;
  if (H.querySelectorAll) try {
    var Vh = H.querySelectorAll(":root");
    Vh && 1 == Vh.length && Vh[0] == H.documentElement && (Uh = !0)
  } catch (a) {}
  var Rh = Uh;
  var Wh = function(a) {
      return null == a ? "" : Ha(a) ? Wa(String(a)) : "e0"
    },
    Yh = function(a) {
      return a.replace(Xh, "")
    },
    $h = function(a) {
      return Zh(a.replace(/\s/g, ""))
    },
    Zh = function(a) {
      return Wa(a.replace(ai, "").toLowerCase())
    },
    ci = function(a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return bi.test(a) ? a : "e0"
    },
    ei = function(a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (di.test(c)) return c
      }
      return "e0"
    },
    hi = function(a,
      b) {
      window.Promise || b([]);
      Promise.all(a.map(function(c) {
        return c.value && -1 !== fi.indexOf(c.name) ? gi(c.value).then(function(d) {
          c.value = d
        }) : Promise.resolve()
      })).then(function() {
        b(a)
      }).catch(function() {
        b([])
      })
    },
    gi = function(a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle) try {
        var b = ii(a);
        return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
          var d = Array.from(new Uint8Array(c)).map(function(e) {
            return String.fromCharCode(e)
          }).join("");
          return m.btoa(d).replace(/\+/g, "-").replace(/\//g,
            "_").replace(/=+$/, "")
        }).catch(function() {
          return "e2"
        })
      } catch (c) {
        return Promise.resolve("e2")
      } else return Promise.resolve("e1")
    },
    ii = function(a) {
      var b;
      if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
        }
        b = new Uint8Array(c)
      }
      return b
    },
    ai = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    di = /^\S+@\S+\.\S+$/,
    bi = /^\+\d{11,15}$/,
    Xh = /[.~]/g,
    ji = {},
    ki = (ji.email = "em", ji.phone_number = "pn", ji.first_name = "fn", ji.last_name = "ln", ji.street = "sa", ji.city = "ct", ji.region = "rg", ji.country = "co", ji.postal_code = "pc", ji.error_code = "ec", ji),
    li = function(a, b) {
      function c(n, p, q) {
        var t = n[p];
        Ka(t) || (t = [t]);
        for (var u = 0; u < t.length; ++u) {
          var r = Wh(t[u]);
          "" !== r && f.push({
            name: p,
            value: q(r),
            index: void 0
          })
        }
      }

      function d(n, p, q, t) {
        var u = Wh(n[p]);
        "" !== u && f.push({
          name: p,
          value: q(u),
          index: t
        })
      }

      function e(n) {
        return function(p) {
          xg(64);
          return n(p)
        }
      }
      var f = [];
      if ("https:" === m.location.protocol) {
        c(a, "email", ei);
        c(a, "phone_number", ci);
        c(a, "first_name", e($h));
        c(a, "last_name", e($h));
        var g = a.home_address || {};
        c(g, "street", e(Zh));
        c(g, "city", e(Zh));
        c(g, "postal_code", e(Yh));
        c(g, "region", e(Zh));
        c(g, "country", e(Yh));
        var h = a.address || {};
        Ka(h) || (h = [h]);
        for (var k = 0; k < h.length; k++) d(h[k], "first_name", $h, k), d(h[k], "last_name", $h, k), d(h[k], "street", Zh, k), d(h[k], "city", Zh, k), d(h[k], "postal_code", Yh, k), d(h[k],
          "region", Zh, k), d(h[k], "country", Yh, k);
        hi(f, b)
      } else f.push({
        name: "error_code",
        value: "e3",
        index: void 0
      }), b(f)
    },
    mi = function(a, b) {
      li(a, function(c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            k = c[f].index,
            n = ki[g];
          n && h && (-1 === fi.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e)
      })
    },
    ni = function(a) {
      if (m.Promise) try {
        return new Promise(function(b) {
          mi(a,
            function(c, d) {
              b({
                dd: c,
                Dk: d
              })
            })
        })
      } catch (b) {}
    },
    fi = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var oi = function() {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.remoteConfig = {};
      this.onSuccess = function() {};
      this.onFailure = function() {};
      this.setContainerTypeLoaded = function() {};
      this.getContainerTypeLoaded = function() {};
      this.eventId = void 0;
      this.isGtmEvent = !1
    },
    pi = function(a) {
      var b = new oi;
      b.eventModel = a;
      return b
    },
    qi = function(a, b) {
      a.targetConfig = b;
      return a
    },
    ri = function(a, b) {
      a.containerConfig = b;
      return a
    },
    si = function(a, b) {
      a.globalConfig = b;
      return a
    },
    ti = function(a,
      b) {
      a.remoteConfig = b;
      return a
    },
    ui = function(a, b) {
      a.onSuccess = b;
      return a
    },
    vi = function(a, b) {
      a.setContainerTypeLoaded = b;
      return a
    },
    wi = function(a, b) {
      a.getContainerTypeLoaded = b;
      return a
    },
    xi = function(a, b) {
      a.onFailure = b;
      return a
    };
  oi.prototype.getWithConfig = function(a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
  };
  var yi = function(a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c)
    },
    zi = function(a, b, c) {
      function d(g) {
        Ac(g) && Qa(g, function(h, k) {
          f = !0;
          e[h] = k
        })
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
      c && 2 !== c || d(a.eventModel[b]);
      return f ? e : void 0
    },
    Ai = function(a) {
      var b = [S.yc, S.Xf, S.Yf, S.Zf, S.$f, S.ag, S.bg],
        c = {},
        d = !1,
        e = function(f) {
          for (var g =
              0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
          return d
        };
      if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
      e(a.remoteConfig);
      return c
    },
    Bi = function(a) {
      var b = [],
        c;
      for (c in a.eventModel) c !== S.cc && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
      return b
    };
  var Ci, Di = !1;

  function Ei() {
    Di = !0;
    Ci = Ci || {}
  }
  var Fi = function(a) {
    Di || Ei();
    return Ci[a]
  };
  var Gi = function(a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
    var c = m.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d;) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = m.getComputedStyle(d,
        null))
    }
    return !1
  };
  var Pi = /:[0-9]+$/,
    Qi = function(a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var k = h.slice(1).join("=");
          if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
          e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
        }
      }
      return c ? e : void 0
    },
    Ti = function(a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = Ri(a.protocol) || Ri(m.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port :
        m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(Pi, "").toLowerCase());
      return Si(a, b, c, d, e)
    },
    Si = function(a, b, c, d, e) {
      var f, g = Ri(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ui(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Pi, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length))
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" ==
            g ? 80 : "https" == g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || vg("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var k = f.split("/");
          0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
          f = k.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Qi(f, e, !1, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href
      }
      return f
    },
    Ri = function(a) {
      return a ?
        a.replace(":", "").toLowerCase() : ""
    },
    Ui = function(a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c)
      }
      return b
    },
    Vi = function(a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || vg("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(Pi, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      }
    },
    Wi = function(a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0"
      }

      function c(n) {
        return n.split("&").map(b).filter(function(p) {
          return void 0 !=
            p
        }).join("&")
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = Vi(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var k = "" + f + g + h;
      "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
      return k
    };
  var Xi = {};
  var $i = function(a) {
      if (0 == a.length) return null;
      var b;
      b = Yi(a, function(c) {
        return !Zi.test(c.Pa)
      });
      b = Yi(b, function(c) {
        return "INPUT" === c.element.tagName.toUpperCase()
      });
      b = Yi(b, function(c) {
        return !Gi(c.element)
      });
      return b[0]
    },
    Yi = function(a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c
    },
    aj = function(a) {
      var b;
      if (a === H.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e =
                      g + 1;
                    break a
                  } e = -1
              } else e = 1
            }
            d = aj(a.parentElement) + ">:nth-child(" + e + ")"
          } else d = "";
          c = d
        }
        b = c
      }
      return b
    },
    bj = !0,
    cj = !1;
  Xi.Lh = "true";
  var dj = function(a) {
      if ("false" === Xi.Lh || !bj) return !1;
      if (cj) return !0;
      var b = Fi("AW-" +
        a);
      return !!b && !!b.preAutoPii
    },
    ej = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    fj = new RegExp(/@(gmail|googlemail)\./i),
    Zi = new RegExp(/support|noreply/i),
    gj = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
    hj = ["BR"],
    ij = {},
    jj = function(a) {
      a = a || {
        ce: !0,
        de: !0
      };
      a.qb = a.qb || {
        email: !0,
        phone: !0,
        Ng: !0
      };
      var b, c = a,
        d = !!c.ce + "." + !!c.de;
      c && c.Tc && c.Tc.length && (d += "." + c.Tc.join("."));
      c && c.qb && (d += "." + c.qb.email + "." + c.qb.phone + "." + c.qb.Ng);
      b = d;
      var e = ij[b];
      if (e && 200 > Ya() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = H.body;
      if (h) {
        for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
          var p = k[n];
          if (!(0 <= gj.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
            for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
              if (!(0 <= hj.indexOf(p.children[t].tagName.toUpperCase()))) {
                q = !0;
                break
              } q || g.push(p)
          }
        }
        f = {
          elements: g,
          status: 1E4 < k.length ? "2" : "1"
        }
      } else f = {
        elements: g,
        status: "4"
      };
      var u = f,
        r = u.status,
        v;
      if (a.qb && a.qb.email) {
        for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
          var A = w[x],
            B = A.textContent;
          "INPUT" === A.tagName.toUpperCase() &&
            A.value && (B = A.value);
          if (B) {
            var C = B.match(ej);
            if (C) {
              var D = C[0],
                E;
              if (m.location) {
                var G = Si(m.location, "host", !0);
                E = 0 <= D.toLowerCase().indexOf(G)
              } else E = !1;
              E || y.push({
                element: A,
                Pa: D
              })
            }
          }
        }
        var T;
        var N = a && a.Tc;
        if (N && 0 !== N.length) {
          for (var K = [], P = 0; P < y.length; P++) {
            for (var R = !0, O = 0; O < N.length; O++) {
              var W = N[O];
              if (W && Th(y[P].element, W)) {
                R = !1;
                break
              }
            }
            R && K.push(y[P])
          }
          T = K
        } else T = y;
        v = $i(T);
        10 < y.length && (r = "3")
      }
      var ja = [];
      if (v) {
        var U = v.element,
          Aa = {
            Pa: v.Pa,
            tagName: U.tagName,
            type: 1
          };
        a.ce && (Aa.querySelector = aj(U));
        a.de &&
          (Aa.isVisible = !Gi(U));
        ja.push(Aa)
      }
      var Ia = {
        elements: ja,
        status: r
      };
      ij[b] = {
        timestamp: Ya(),
        result: Ia
      };
      return Ia
    },
    kj = function(a) {
      return a.tagName + ":" + a.isVisible + ":" + a.Pa.length + ":" + fj.test(a.Pa)
    };
  var lj = function(a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), h = 0; h < g.length; h++) {
            var k = g[h].trim();
            if (k) {
              if (0 === k.indexOf("dataLayer.")) f = Sg(k.substring(10));
              else {
                var n = k.split(".");
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
              }
              if (void 0 !== f) break
            }
          }
        } else if ("css_selector" === d && Rh) {
          var q = Sh(e);
          q && 0 < q.length && (f = gc(q[0]) || Wa(q[0].value))
        }
        f && (a[b] = f)
      }
    },
    mj = function(a) {
      if (a) {
        var b = {};
        lj(b, "email",
          a.email);
        lj(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          lj(e, "first_name", c[d].first_name);
          lj(e, "last_name", c[d].last_name);
          lj(e, "street", c[d].street);
          lj(e, "city", c[d].city);
          lj(e, "region", c[d].region);
          lj(e, "country", c[d].country);
          lj(e, "postal_code", c[d].postal_code);
          b.address.push(e)
        }
        return b
      }
    },
    nj = function(a) {
      if (a) switch (a.mode) {
        case "selectors":
          return mj(a.selectors);
        case "auto_detect":
          var b;
          var c = a.auto_detect;
          if (c) {
            var d = jj({
                ce: !1,
                de: !1,
                Tc: c.exclude_element_selectors,
                qb: {
                  email: !!c.email,
                  phone: !!c.phone,
                  Ng: !!c.address
                }
              }).elements,
              e = {};
            if (0 < d.length)
              for (var f = 0; f < d.length; f++) {
                var g = d[f];
                if (1 === g.type) {
                  e.email = g.Pa;
                  break
                }
              }
            b = e
          } else b = void 0;
          return b
      }
    },
    oj = function(a) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : m.enhanced_conversion_data;
        case "automatic":
          return mj(a[S.gg])
      }
    };
  var pj = {},
    qj = function(a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
      void 0 === pj[a] && (pj[a] = Math.floor(Math.random() * b));
      return pj[a]
    };
  var rj = function(a) {
    var b = 1,
      c, d, e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
    return b
  };
  var sj = function(a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        k && c && (k = decodeURIComponent(k));
        d.push(k)
      }
    }
    return d
  };

  function tj(a) {
    return "null" !== a.origin
  };
  var wj = function(a, b, c, d) {
      return uj(d) ? sj(a, String(b || vj()), c) : []
    },
    zj = function(a, b, c, d, e) {
      if (uj(e)) {
        var f = xj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = yj(f, function(g) {
            return g.Td
          }, b);
          if (1 === f.length) return f[0].id;
          f = yj(f, function(g) {
            return g.ed
          }, c);
          return f[0] ? f[0].id : void 0
        }
      }
    };

  function Aj(a, b, c, d) {
    var e = vj(),
      f = window;
    tj(f) && (f.document.cookie = a);
    var g = vj();
    return e != g || void 0 != c && 0 <= wj(b, g, !1, d).indexOf(c)
  }
  var Ej = function(a, b, c, d) {
      function e(w, y, x) {
        if (null == x) return delete h[y], w;
        h[y] = x;
        return w + "; " + y + "=" + x
      }

      function f(w, y) {
        if (null == y) return delete h[y], w;
        h[y] = !0;
        return w + "; " + y
      }
      if (!uj(c.ab)) return 2;
      var g;
      void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Bj(b), g = a + "=" + b);
      var h = {};
      g = e(g, "path", c.path);
      var k;
      c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
      g = e(g, "expires", k);
      g = e(g, "max-age", c.Hj);
      g = e(g, "samesite",
        c.$j);
      c.ck && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Cj(), q = void 0, t = !1, u = 0; u < p.length; ++u) {
          var r = "none" !== p[u] ? p[u] : void 0,
            v = e(g, "domain", r);
          v = f(v, c.flags);
          try {
            d && d(a, h)
          } catch (w) {
            q = w;
            continue
          }
          t = !0;
          if (!Dj(r, c.path) && Aj(v, a, b, c.ab)) return 0
        }
        if (q && !t) throw q;
        return 1
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Dj(n, c.path) ? 1 : Aj(g, a, b, c.ab) ? 0 : 1
    },
    Fj = function(a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Ej(a,
        b, c)
    };

  function yj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        k = b(h);
      k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
    }
    return 0 < d.length ? d : e
  }

  function xj(a, b, c) {
    for (var d = [], e = wj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k && (k = k.split("-"), d.push({
          id: g.join("."),
          Td: 1 * k[0] || 1,
          ed: 1 * k[1] || 1
        }))
      }
    }
    return d
  }
  var Bj = function(a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a
    },
    Gj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Hj = /(^|\.)doubleclick\.net$/i,
    Dj = function(a, b) {
      return Hj.test(window.document.location.hostname) || "/" === b && Gj.test(a)
    },
    vj = function() {
      return tj(window) ? window.document.cookie : ""
    },
    Cj = function() {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"]
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Hj.test(e) || Gj.test(e) || a.push("none");
      return a
    },
    uj = function(a) {
      if (!jh().g() || !a || !yh()) return !0;
      if (!xh(a)) return !1;
      var b = vh(a);
      return null == b ? !0 : !!b
    };
  var Ij = function(a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ rj(a) & 2147483647) : String(b)
    },
    Jj = function(a) {
      return [Ij(a), Math.round(Ya() / 1E3)].join(".")
    },
    Mj = function(a, b, c, d, e) {
      var f = Kj(b);
      return zj(a, f, Lj(c), d, e)
    },
    Nj = function(a, b, c, d) {
      var e = "" + Kj(c),
        f = Lj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".")
    },
    Kj = function(a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length
    },
    Lj = function(a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length -
        1
    };

  function Oj(a, b, c) {
    var d, e = Number(null != a.Mb ? a.Mb : void 0);
    0 !== e && (d = new Date((b || Ya()) + 1E3 * (e || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d
    }
  };
  var Pj = ["1"],
    Qj = {},
    Rj = {},
    Vj = function(a, b) {
      b = void 0 === b ? !0 : b;
      var c = Sj(a.prefix);
      if (!Qj[c] && !Tj(c, a.path, a.domain) && b) {
        var d = Sj(a.prefix),
          e = Jj();
        if (0 === Uj(d, e, a)) {
          var f = Tb("google_tag_data", {});
          f._gcl_au ? vg("GTM", 57) : f._gcl_au = e
        }
        Tj(c, a.path, a.domain)
      }
    };

  function Uj(a, b, c, d) {
    var e = Nj(b, "1", c.domain, c.path),
      f = Oj(c, d);
    f.ab = "ad_storage";
    return Fj(a, e, f)
  }

  function Tj(a, b, c) {
    var d = Mj(a, b, c, Pj, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length ? (Qj[a] = e.slice(0, 2).join("."), Rj[a] = {
      id: e.slice(2, 4).join("."),
      ih: Number(e[4]) || 0
    }) : 3 === e.length ? Rj[a] = {
      id: e.slice(0, 2).join("."),
      ih: Number(e[2]) || 0
    } : Qj[a] = d;
    return !0
  }

  function Sj(a) {
    return (a || "_gcl") + "_au"
  };
  var Wj = function(a) {
    for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        Lf: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      })
    }
    b.sort(function(g, h) {
      return h.timestamp - g.timestamp
    });
    return b
  };

  function Xj(a, b) {
    var c = Wj(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].Lf] || (d[c[e].Lf] = []);
        var g = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          xa: f[2]
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Lf].push(g)
      }
    }
    return d
  };

  function Yj() {
    for (var a = Zj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b
  }

  function ak() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + "."
  }
  var Zj, bk;

  function ck(a) {
    function b(k) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = bk[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return k
    }
    Zj = Zj || ak();
    bk = bk || Yj();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
    }
  };
  var dk;
  var hk = function() {
      var a = ek,
        b = fk,
        c = gk(),
        d = function(g) {
          a(g.target || g.srcElement || {})
        },
        e = function(g) {
          b(g.target || g.srcElement || {})
        };
      if (!c.init) {
        dc(H, "mousedown", d);
        dc(H, "keyup", d);
        dc(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function() {
          b(this);
          f.call(this)
        };
        c.init = !0
      }
    },
    ik = function(a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      gk().decorators.push(f)
    },
    jk = function(a, b, c) {
      for (var d = gk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g =
          d[f],
          h;
        if (h = !c || g.forms) a: {
          var k = g.domains,
            n = a,
            p = !!g.sameHost;
          if (k && (p || n !== H.location.hostname))
            for (var q = 0; q < k.length; q++)
              if (k[q] instanceof RegExp) {
                if (k[q].test(n)) {
                  h = !0;
                  break a
                }
              } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
            h = !0;
            break a
          }
          h = !1
        }
        if (h) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && bb(e, g.callback())
        }
      }
      return e
    };

  function gk() {
    var a = Tb("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b
  };
  var kk = /(.*?)\*(.*?)\*(.*)/,
    lk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    mk = /^(?:www\.|m\.|amp\.)+/,
    nk = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function ok(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
  }
  var qk = function(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
          b.push(c);
          var e = b,
            f = e.push,
            g, h = String(d);
          Zj = Zj || ak();
          bk = bk || Yj();
          for (var k = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              t = h.charCodeAt(n),
              u = p ? h.charCodeAt(n + 1) : 0,
              r = q ? h.charCodeAt(n + 2) : 0,
              v = t >> 2,
              w = (t & 3) << 4 | u >> 4,
              y = (u & 15) << 2 | r >> 6,
              x = r & 63;
            q || (x = 64, p || (y = 64));
            k.push(Zj[v], Zj[w], Zj[y], Zj[x])
          }
          g = k.join("");
          f.call(e, g)
        }
      } var A = b.join("*");
    return ["1", pk(A),
      A
    ].join("*")
  };

  function pk(a, b) {
    var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Rb.userLanguage || Rb.language, Math.floor(Ya() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = dk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g
      }
      d = e
    }
    dk = d;
    for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ dk[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36)
  }

  function rk() {
    return function(a) {
      var b = Vi(m.location.href),
        c = b.search.replace("?", ""),
        d = Qi(c, "_gl", !1, !0) || "";
      a.query = sk(d) || {};
      var e = Ti(b, "fragment").match(ok("_gl"));
      a.fragment = sk(e && e[3] || "") || {}
    }
  }
  var tk = function(a) {
      var b = rk(),
        c = gk();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (bb(d, e.query), a && bb(d, e.fragment));
      return d
    },
    sk = function(a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = kk.exec(d);
              if (f) {
                c = f;
                break a
              }
              d = decodeURIComponent(d)
            }
            c = void 0
          }
          var g = c;
          if (g && "1" === g[1]) {
            var h = g[3],
              k;
            a: {
              for (var n = g[2], p = 0; p < b; ++p)
                if (n === pk(h, p)) {
                  k = !0;
                  break a
                } k = !1
            }
            if (k) {
              for (var q = {}, t = h ? h.split("*") : [], u = 0; u + 1 < t.length; u += 2) {
                var r = t[u],
                  v = ck(t[u + 1]);
                q[r] = v
              }
              vg("TAGGING",
                6);
              return q
            }
            vg("TAGGING", 7)
          }
        }
      } catch (w) {
        vg("TAGGING", 8)
      }
    };

  function uk(a, b, c, d) {
    function e(p) {
      var q = p,
        t = ok(a).exec(q),
        u = q;
      if (t) {
        var r = t[2],
          v = t[4];
        u = t[1];
        v && (u = u + r + v)
      }
      p = u;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n
    }
    d = void 0 === d ? !1 : d;
    var f = nk.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      k = f[3] || "",
      n = a + "=" + b;
    d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
    return "" + g + h + k
  }

  function vk(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = jk(b, 1, c),
      e = jk(b, 2, c),
      f = jk(b, 3, c);
    if (cb(d)) {
      var g = qk(d);
      c ? wk("_gl", g, a) : xk("_gl", g, a, !1)
    }
    if (!c && cb(e)) {
      var h = qk(e);
      xk("_gl", h, a, !0)
    }
    for (var k in f)
      if (f.hasOwnProperty(k)) a: {
        var n = k,
          p = f[k],
          q = a;
        if (q.tagName) {
          if ("a" === q.tagName.toLowerCase()) {
            xk(n, p, q, void 0);
            break a
          }
          if ("form" === q.tagName.toLowerCase()) {
            wk(n, p, q);
            break a
          }
        }
        "string" == typeof q && uk(n, p, q, void 0)
      }
  }

  function xk(a, b, c, d) {
    if (c.href) {
      var e = uk(a, b, c.href, void 0 === d ? !1 : d);
      Ab.test(e) && (c.href = e)
    }
  }

  function wk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break
          }
        }
        if (!f) {
          var k = H.createElement("input");
          k.setAttribute("type", "hidden");
          k.setAttribute("name", a);
          k.setAttribute("value", b);
          c.appendChild(k)
        }
      } else if ("post" === d) {
        var n = uk(a, b, c.action);
        Ab.test(n) && (c.action = n)
      }
    }
  }

  function ek(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a
          }
          c = c.parentNode;
          d--
        }
        b = null
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        "http:" !== f && "https:" !== f || vk(e, e.hostname)
      }
    } catch (g) {}
  }

  function fk(a) {
    try {
      if (a.action) {
        var b = Ti(Vi(a.action), "host");
        vk(a, b)
      }
    } catch (c) {}
  }
  var yk = function(a, b, c, d) {
      hk();
      ik(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    },
    zk = function(a, b) {
      hk();
      ik(a, [Si(m.location, "host", !0)], b, !0, !0)
    },
    Ak = function() {
      var a = H.location.hostname,
        b = lk.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-")
      }
      var h = a.replace(mk, ""),
        k = e.replace(mk, ""),
        n;
      if (!(n = h === k)) {
        var p = "." + k;
        n = h.substring(h.length - p.length,
          h.length) === p
      }
      return n
    },
    Bk = function(a, b) {
      return !1 === a ? !1 : a || b || Ak()
    };
  var Ck = {};
  var Dk = /^\w+$/,
    Ek = /^[\w-]+$/,
    Fk = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    },
    Gk = function() {
      if (!jh().g() || !yh()) return !0;
      var a = vh("ad_storage");
      return null == a ? !0 : !!a
    },
    Hk = function(a, b) {
      xh("ad_storage") ? Gk() ? a() : Dh(a, "ad_storage") : b ? vg("TAGGING", 3) : Ch(function() {
        Hk(a, !0)
      }, ["ad_storage"])
    },
    Jk = function(a) {
      return Ik(a).map(function(b) {
        return b.xa
      })
    },
    Ik = function(a) {
      var b = [];
      if (!tj(m) || !H.cookie) return b;
      var c = wj(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
          od: d.od
        }, e++) {
        var f = Kk(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.od = g.xa;
          var k = g.timestamp,
            n = g.labels,
            p = Ma(b, function(q) {
              return function(t) {
                return t.xa === q.od
              }
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = Lk(p.labels, n || [])) : b.push({
            version: h,
            xa: d.od,
            timestamp: k,
            labels: n
          })
        }
      }
      b.sort(function(q, t) {
        return t.timestamp - q.timestamp
      });
      return Mk(b)
    };

  function Lk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d
  }

  function Uk(a) {
    return a && "string" == typeof a && a.match(Dk) ? a : "_gcl"
  }
  var Wk = function() {
      var a = Vi(m.location.href),
        b = Ti(a, "query", !1, void 0, "gclid"),
        c = Ti(a, "query", !1, void 0, "gclsrc"),
        d = Ti(a, "query", !1, void 0, "wbraid"),
        e = Ti(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Qi(f, "gclid", !1, void 0);
        c = c || Qi(f, "gclsrc", !1, void 0);
        d = d || Qi(f, "wbraid", !1, void 0)
      }
      return Vk(b, c, e, d)
    },
    Vk = function(a, b, c, d) {
      var e = {},
        f = function(g, h) {
          e[h] || (e[h] = []);
          e[h].push(g)
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ek.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !==
        a && a.match(Ek)) switch (b) {
        case void 0:
          f(a, "aw");
          break;
        case "aw.ds":
          f(a, "aw");
          f(a, "dc");
          break;
        case "ds":
          f(a, "dc");
          break;
        case "3p.ds":
          f(a, "dc");
          break;
        case "gf":
          f(a, "gf");
          break;
        case "ha":
          f(a, "ha")
      }
      c && f(c, "dc");
      return e
    },
    Yk = function(a) {
      var b = Wk();
      Hk(function() {
        Xk(b, !1, a)
      })
    };

  function Xk(a, b, c, d, e) {
    function f(w, y) {
      var x = Zk(w, g);
      x && (Fj(x, y, h), k = !0)
    }
    c = c || {};
    e = e || [];
    var g = Uk(c.prefix);
    d = d || Ya();
    var h = Oj(c, d, !0);
    h.ab = "ad_storage";
    var k = !1,
      n = Math.round(d / 1E3),
      p = function(w) {
        var y = ["GCL", n, w];
        0 < e.length && y.push(e.join("."));
        return y.join(".")
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if ((void 0 == Ck.enable_gbraid_cookie_write ? 0 : Ck.enable_gbraid_cookie_write) && !k && a.gb) {
      var q = a.gb[0],
        t = Zk("gb",
          g),
        u = !1;
      if (!b)
        for (var r = Ik(t), v = 0; v < r.length; v++) r[v].xa === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q))
    }
  }
  var al = function(a, b) {
      var c = tk(!0);
      Hk(function() {
        for (var d = Uk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Fk[f]) {
            var g = Zk(f, d),
              h = c[g];
            if (h) {
              var k = Math.min($k(h), Ya()),
                n;
              b: {
                var p = k;
                if (tj(m))
                  for (var q = wj(g, H.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                    if ($k(q[t]) > p) {
                      n = !0;
                      break b
                    } n = !1
              }
              if (!n) {
                var u = Oj(b, k, !0);
                u.ab = "ad_storage";
                Fj(g, h, u)
              }
            }
          }
        }
        Xk(Vk(c.gclid, c.gclsrc), !1, b)
      })
    },
    Zk = function(a, b) {
      var c = Fk[a];
      if (void 0 !== c) return b + c
    },
    $k = function(a) {
      return 0 !== bl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
        0) : 0
    };

  function Kk(a) {
    var b = bl(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      xa: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    }
  }

  function bl(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ek.test(a[2]) ? [] : a
  }
  var cl = function(a, b, c, d, e) {
      if (Ka(b) && tj(m)) {
        var f = Uk(e),
          g = function() {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var n = Zk(a[k], f);
              if (n) {
                var p = wj(n, H.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1])
              }
            }
            return h
          };
        Hk(function() {
          yk(g, b, c, d)
        })
      }
    },
    Mk = function(a) {
      return a.filter(function(b) {
        return Ek.test(b.xa)
      })
    },
    dl = function(a, b) {
      if (tj(m)) {
        for (var c = Uk(b.prefix), d = {}, e = 0; e < a.length; e++) Fk[a[e]] && (d[a[e]] = Fk[a[e]]);
        Hk(function() {
          Qa(d, function(f, g) {
            var h = wj(c + g, H.cookie, void 0, "ad_storage");
            h.sort(function(u,
              r) {
              return $k(r) - $k(u)
            });
            if (h.length) {
              var k = h[0],
                n = $k(k),
                p = 0 !== bl(k.split(".")).length ? k.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== bl(k.split(".")).length ? k.split(".")[2] : void 0;
              q[f] = [t];
              Xk(q, !0, b, n, p)
            }
          })
        })
      }
    };

  function el(a, b) {
    for (var c = 0; c < b.length; ++c)
      if (a[b[c]]) return !0;
    return !1
  }
  var fl = function(a) {
    function b(e, f, g) {
      g && (e[f] = g)
    }
    if (yh()) {
      var c = Wk();
      if (el(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        zk(function() {
          return d
        }, 3);
        zk(function() {
          var e = {};
          return e._up = "1", e
        }, 1)
      }
    }
  };

  function gl(a, b) {
    var c = Uk(b),
      d = Zk(a, c);
    if (!d) return 0;
    for (var e = Ik(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f
  }

  function hl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b
  };
  var Dl = !1,
    El = 0,
    Fl = [];

  function Gl(a) {
    if (!Dl) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Dl = !0;
        for (var e = 0; e < Fl.length; e++) I(Fl[e])
      }
      Fl.push = function() {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0
      }
    }
  }

  function Hl() {
    if (!Dl && 140 > El) {
      El++;
      try {
        H.documentElement.doScroll("left"), Gl()
      } catch (a) {
        m.setTimeout(Hl, 50)
      }
    }
  }
  var Il = function(a) {
    Dl ? a() : Fl.push(a)
  };
  var Ll = function(a, b) {
      this.g = !1;
      this.B = [];
      this.F = {
        tags: []
      };
      this.O = !1;
      this.o = this.s = 0;
      Kl(this, a, b)
    },
    Ml = function(a, b, c, d) {
      if (Cg.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ac(d) && (e = Bc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.F.tags.push(e) - 1
    },
    Nl = function(a, b, c, d) {
      var e = a.F.tags[b];
      e && (e.status = c, e.executionTime = d)
    },
    Ol = function(a) {
      if (!a.g) {
        for (var b = a.B, c = 0; c < b.length; c++) b[c]();
        a.g = !0;
        a.B.length = 0
      }
    },
    Kl = function(a, b, c) {
      Ga(b) && a.Nd(b);
      c && m.setTimeout(function() {
        return Ol(a)
      }, Number(c))
    };
  Ll.prototype.Nd = function(a) {
    var b = this,
      c = $a(function() {
        return I(function() {
          a(J.I, b.F)
        })
      });
    this.g ? c() : this.B.push(c)
  };
  var Pl = function(a) {
    a.s++;
    return $a(function() {
      a.o++;
      a.O && a.o >= a.s && Ol(a)
    })
  };
  var Ql = function() {
      function a(d) {
        return !Ja(d) || 0 > d ? 0 : d
      }
      if (!yg._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = Ja(Tg.get("gtm.start")) ? Tg.get("gtm.start") : 0;
        yg._li = {
          cst: a(c - b),
          cbt: a(Ig - b)
        }
      }
    },
    Rl = function(a) {
      m.performance && m.performance.mark(J.I + "_" + a + "_start")
    },
    Sl = function(a) {
      if (m.performance) {
        var b = J.I + "_" + a + "_start",
          c = J.I + "_" + a + "_duration";
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = yg._p || {};
        void 0 === e[a] && (e[a] = d.duration, yg._p = e);
        return d.duration
      }
    },
    Tl = function() {
      if (m.performance && m.performance.now) {
        var a = yg._p || {};
        a.PAGEVIEW = m.performance.now();
        yg._p = a
      }
    };
  var Ul = {},
    Vl = function() {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
    },
    Wl = !1;

  function Zl() {
    return m.GoogleAnalyticsObject || "ga"
  }
  var $l = function(a) {},
    am = function(a, b) {
      return function() {
        var c = Vl(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function(f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              k = 0 > g.indexOf("&tid=" + b);
            k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            k && (f.set("hitPayload",
              g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
          })
        }
      }
    };
  var hm = function(a) {},
    lm = function(a) {},
    mm =
    function() {
      return "&tc=" + Be.filter(function(a) {
        return a
      }).length
    },
    pm = function() {
      2022 <= nm().length && om()
    },
    qm = function(a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
    },
    sm = function() {
      rm || (rm = m.setTimeout(om, 500))
    },
    om = function() {
      rm && (m.clearTimeout(rm), rm = void 0);
      void 0 === tm || um[tm] && !vm && !wm || (xm[tm] || ym.yj() || 0 >= zm-- ? (xg(1), xm[tm] = !0) : (ym.Vj(), cc(nm(!0)), um[tm] = !0, Am = Bm = Cm = wm = vm = ""))
    },
    nm = function(a) {
      var b = tm;
      if (void 0 === b) return "";
      var c = wg("GTM"),
        d = wg("TAGGING");
      return [Dm, um[b] ? "" : "&es=1",
        Em[b], hm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", mm(), vm, wm, Cm, Bm, lm(a), Am, "&z=0"
      ].join("")
    },
    Gm = function() {
      Dm = Fm()
    },
    Fm = function() {
      return [Jg, "&v=3&t=t", "&pid=" + Na(), "&rv=" + J.Jd].join("")
    },
    km = ["L", "S", "Y"],
    gm = ["S", "E"],
    Hm = {
      sampleRate: "0.005000",
      Ih: "",
      Hh: Number("5")
    },
    Im = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="),
    Jm;
  if (!(Jm = Im)) {
    var Km = Math.random(),
      Lm = Hm.sampleRate;
    Jm = Km < Lm
  }
  var Mm = Jm,
    Nm = {
      label: J.I + " Container",
      children: [{
        label: "Initialization",
        children: []
      }]
    },
    Dm = Fm(),
    um = {},
    vm = "",
    wm = "",
    Am = "",
    Bm = "",
    jm = {},
    im = !1,
    fm = {},
    Om = {},
    Cm = "",
    tm = void 0,
    Em = {},
    xm = {},
    rm = void 0,
    Pm = 5;
  0 < Hm.Hh && (Pm = Hm.Hh);
  var ym = function(a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        yj: function() {
          return c < a ? !1 : Ya() - d[c % a] < b
        },
        Vj: function() {
          var f = c++ % a;
          d[f] = Ya()
        }
      }
    }(Pm, 1E3),
    zm = 1E3,
    Rm = function(a, b) {
      if (Mm && !xm[a] && tm !==
        a) {
        om();
        tm = a;
        Am = vm = "";
        Em[a] = "&e=" + qm(b) + "&eid=" + a;
        sm();
      }
    },
    Sm = function(a, b, c, d) {
      if (Mm && b) {
        var e, f = String(b[Zd.Db] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!xm[a]) {
          a !== tm && (om(), tm = a);
          vm = vm ? vm + "." + g : "&tr=" + g;
          var h = b["function"];
          if (!h) throw Error("Error: No function name given for function call.");
          var k = (De[h] ? "1" : "2") + e;
          Am = Am ? Am + "." + k : "&ti=" + k;
          sm();
          pm()
        }
      }
    };
  var Zm = function(a, b, c) {
      if (Mm && !xm[a]) {
        a !== tm && (om(), tm = a);
        var d = c + b;
        wm = wm ? wm + "." + d : "&epr=" + d;
        sm();
        pm()
      }
    },
    $m = function(a, b, c) {};

  function an(a, b, c, d) {
    var e = Be[a],
      f = bn(a, b, c, d);
    if (!f) return null;
    var g = Je(e[Zd.Eg], c, []);
    if (g && g.length) {
      var h = g[0];
      f = an(h.index, {
        onSuccess: f,
        onFailure: 1 === h.Yg ? b.terminate : f,
        terminate: b.terminate
      }, c, d)
    }
    return f
  }

  function bn(a, b, c, d) {
    function e() {
      if (f[Zd.Ci]) h();
      else {
        var w = Ke(f, c, []);
        var y = w[Zd.Nh];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!Lh(y[x])) {
              h();
              return
            } var A = Ml(c.Gb, String(f[Zd.Db]), Number(f[Zd.Gg]), w[Zd.Di]),
          B = !1;
        w.vtp_gtmOnSuccess = function() {
          if (!B) {
            B = !0;
            var E = Ya() - D;
            Sm(c.id, Be[a], "5", E);
            Nl(c.Gb, A, "success",
              E);
            g()
          }
        };
        w.vtp_gtmOnFailure = function() {
          if (!B) {
            B = !0;
            var E = Ya() - D;
            Sm(c.id, Be[a], "6", E);
            Nl(c.Gb, A, "failure", E);
            h()
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        Sm(c.id, f, "1");
        var C = function() {
          var E = Ya() - D;
          Sm(c.id, f, "7", E);
          Nl(c.Gb, A, "exception", E);
          B || (B = !0, h())
        };
        var D = Ya();
        try {
          Ie(w, {
            event: c,
            index: a,
            type: 1
          })
        } catch (E) {
          C(E)
        }
      }
    }
    var f = Be[a],
      g = b.onSuccess,
      h = b.onFailure,
      k = b.terminate;
    if (c.vf(f)) return null;
    var n = Je(f[Zd.Hg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = an(p.index, {
          onSuccess: g,
          onFailure: h,
          terminate: k
        }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Yg ? k : q
    }
    if (f[Zd.yg] || f[Zd.Hi]) {
      var t =
        f[Zd.yg] ? Ce : c.kk,
        u = g,
        r = h;
      if (!t[a]) {
        e = $a(e);
        var v = cn(a, t, e);
        g = v.onSuccess;
        h = v.onFailure
      }
      return function() {
        t[a](u, r)
      }
    }
    return e
  }

  function cn(a, b, c) {
    var d = [],
      e = [];
    b[a] = dn(d, e, c);
    return {
      onSuccess: function() {
        b[a] = en;
        for (var f = 0; f < d.length; f++) d[f]()
      },
      onFailure: function() {
        b[a] = fn;
        for (var f = 0; f < e.length; f++) e[f]()
      }
    }
  }

  function dn(a, b, c) {
    return function(d, e) {
      a.push(d);
      b.push(e);
      c()
    }
  }

  function en(a) {
    a()
  }

  function fn(a, b) {
    b()
  };
  var gn = function(a) {
      return arguments
    },
    kn = function(a, b) {
      for (var c = [], d = 0; d < Be.length; d++)
        if (a[d]) {
          var e = Be[d];
          var f = Pl(b.Gb);
          try {
            var g = an(d, {
              onSuccess: f,
              onFailure: f,
              terminate: f
            }, b, d);
            if (g) {
              var h = c,
                k = h.push,
                n = d,
                p = e["function"];
              if (!p) throw "Error: No function name given for function call.";
              var q = De[p];
              k.call(h, {
                zh: n,
                rh: q ? q.priorityOverride || 0 : 0,
                execute: g
              })
            } else hn(d, b), f()
          } catch (r) {
            f()
          }
        } var t = b.Gb;
      t.O = !0;
      t.o >= t.s &&
        Ol(t);
      c.sort(jn);
      for (var u = 0; u < c.length; u++) c[u].execute();
      return 0 < c.length
    };

  function jn(a, b) {
    var c, d = b.rh,
      e = a.rh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.zh,
        h = b.zh;
      f = g > h ? 1 : g < h ? -1 : 0
    }
    return f
  }

  function hn(a, b) {
    if (!Mm) return;
    var c = function(d) {
      var e = b.vf(Be[d]) ? "3" : "4",
        f = Je(Be[d][Zd.Eg], b, []);
      f && f.length && c(f[0].index);
      Sm(b.id, Be[d], e);
      var g = Je(Be[d][Zd.Hg], b, []);
      g && g.length && c(g[0].index)
    };
    c(a);
  }
  var ln = !1,
    mn;
  var sn = function(a) {
    var b = Ya(),
      c = a["gtm.uniqueEventId"],
      d = a.event;
    if ("gtm.js" === d) {
      if (ln) return !1;
      ln = !0;
    }
    var g = fh(c),
      h = !1;
    if (!g.active) {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      h = !0;
      g = fh(Number.MAX_SAFE_INTEGER)
    }
    Rm(c, d);
    var k = a.eventCallback,
      n = a.eventTimeout,
      p = k;
    var q = {
        id: c,
        name: d,
        vf: dh(g.isAllowed),
        kk: [],
        lh: function() {
          xg(6)
        },
        Rg: on(),
        Sg: pn(c),
        Gb: new Ll(p, n)
      },
      t = Te(q);
    h && (t = qn(t));
    var u = kn(t, q);
    "gtm.js" !==
    d && "gtm.sync" !== d || $l(J.I);
    return rn(t, u)
  };

  function pn(a) {
    return function(b) {
      Mm && (Fc(b) || $m(a, "input", b))
    }
  }

  function on() {
    var a = {};
    a.event = Xg("event", 1);
    a.ecommerce = Xg("ecommerce", 1);
    a.gtm = Xg("gtm");
    a.eventModel = Xg("eventModel");
    return a
  }

  function qn(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Be[c][Zd.Db]);
        Ag[d] && (b[c] = !0);
        Bg[d] && (b[c] = !0);
      } return b
  }

  function rn(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Be[c] && !Cg[String(Be[c][Zd.Db])]) return !0;
    return !1
  }

  function tn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Vi("" + c + b).href
    }
  }

  function un(a, b) {
    return vn() ? tn(a, b) : void 0
  }

  function vn() {
    var a = !1;
    return a
  }

  function wn() {
    return !!J.Kd && "SGTM_TOKEN" !== J.Kd.replaceAll("@@", "")
  };
  var xn = function() {
    var a = !1;
    return a
  };
  var yn;
  if (3 === J.Jd.length) yn = "g";
  else {
    var zn = "G";
    zn = "g";
    yn = zn
  }
  var An = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: yn,
      OPT: "o"
    },
    Bn = function(a) {
      var b = J.I.split("-"),
        c = b[0].toUpperCase(),
        d = An[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === J.Jd.length) {
        var g = "w";
        g = xn() ? "s" : "o";
        f = "2" + g
      } else f = "";
      return f + d + J.Jd + e
    };

  function Cn(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c
  };
  var Dn = function(a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1)
  };

  function En() {
    return Cb("iPhone") && !Cb("iPod") && !Cb("iPad")
  };
  Cb("Opera");
  Cb("Trident") || Cb("MSIE");
  Cb("Edge");
  !Cb("Gecko") || -1 != Bb().toLowerCase().indexOf("webkit") && !Cb("Edge") || Cb("Trident") || Cb("MSIE") || Cb("Edge"); - 1 != Bb().toLowerCase().indexOf("webkit") && !Cb("Edge") && Cb("Mobile");
  Cb("Macintosh");
  Cb("Windows");
  Cb("Linux") || Cb("CrOS");
  var Fn = na.navigator || null;
  Fn && (Fn.appVersion || "").indexOf("X11");
  Cb("Android");
  En();
  Cb("iPad");
  Cb("iPod");
  En() || Cb("iPad") || Cb("iPod");
  Bb().toLowerCase().indexOf("kaios");
  var Gn = function(a) {
    if (!a || !H.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b
  };
  var Hn = function() {};
  var In = function(a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    },
    Jn = function(a, b) {
      this.o = a;
      this.g = null;
      this.B = {};
      this.O = 0;
      this.F = void 0 === b ? 500 : b;
      this.s = null
    };
  ma(Jn, Hn);
  Jn.prototype.addEventListener = function(a) {
    var b = {},
      c = Pb(function() {
        return a(b)
      }),
      d = 0; - 1 !== this.F && (d = setTimeout(function() {
      b.tcString = "tcunavailable";
      b.internalErrorState = 1;
      c()
    }, this.F));
    var e = function(f, g) {
      clearTimeout(d);
      f ? (b = f, b.internalErrorState = In(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
      a(b)
    };
    try {
      Kn(this, "addEventListener", e)
    } catch (f) {
      b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
        d = 0), c()
    }
  };
  Jn.prototype.removeEventListener = function(a) {
    a && a.listenerId && Kn(this, "removeEventListener", null, a.listenerId)
  };
  var Mn = function(a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a
          }
        }
        e = void 0
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
      var k;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Ln(a.vendor.consents, void 0 === d ? "755" : d);
          k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ln(a.purpose.consents, b)
        } else k = !0;
      else k = 1 === h ? a.purpose && a.vendor ? Ln(a.purpose.legitimateInterests,
        b) && Ln(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return k
    },
    Ln = function(a, b) {
      return !(!a || !a[b])
    },
    Kn = function(a, b, c, d) {
      c || (c = function() {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d)
      } else if (Nn(a)) {
        On(a);
        var f = ++a.O;
        a.B[f] = c;
        if (a.g) {
          var g = {};
          a.g.postMessage((g.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, g), "*")
        }
      } else c({}, !1)
    },
    Nn = function(a) {
      if (a.g) return a.g;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator)
          } catch (h) {
            e = !1
          }
          if (e) {
            b = c;
            break a
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b
              }
            } catch (h) {}
            f = null
          }
          if (!(c = f)) break
        }
        b = null
      }
      a.g = b;
      return a.g
    },
    On = function(a) {
      a.s || (a.s = function(b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.B[c.callId](c.returnValue, c.success)
        } catch (d) {}
      }, Dn(a.o, a.s))
    };
  var Pn = !0;
  Pn = !1;
  var Qn = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Rn = Cn("", 550),
    Sn = Cn("", 500);

  function Tn() {
    var a = yg.tcf || {};
    return yg.tcf = a
  }
  var Yn = function() {
    var a = Tn(),
      b = new Jn(m, Pn ? 3E3 : -1);
    if (!0 === m.gtag_enable_tcf_support && !a.active && ("function" === typeof m.__tcfapi || "function" === typeof b.o.__tcfapi || null != Nn(b))) {
      a.active = !0;
      a.jd = {};
      Un();
      var c = null;
      Pn ? c = m.setTimeout(function() {
        Vn(a);
        Wn(a);
        c = null
      }, Sn) : a.tcString = "tcunavailable";
      try {
        b.addEventListener(function(d) {
          c && (clearTimeout(c), c = null);
          if (0 !== d.internalErrorState) Vn(a), Wn(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) e = Xn(), b.removeEventListener(d);
            else if ("tcloaded" ===
              d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
              var f = {},
                g;
              for (g in Qn)
                if (Qn.hasOwnProperty(g))
                  if ("1" === g) {
                    var h = d,
                      k = !0;
                    k = void 0 === k ? !1 : k;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = In(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                    f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                      !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : Mn(h, "1", 0) : !1
                  } else f[g] = Mn(d, g, Qn[g]);
              e = f
            }
            e && (a.tcString = d.tcString || "tcempty", a.jd = e, Wn(a))
          }
        })
      } catch (d) {
        c && (clearTimeout(c), c = null), Vn(a), Wn(a)
      }
    }
  };

  function Vn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Pn && (a.jd = Xn())
  }

  function Un() {
    var a = {},
      b = (a.ad_storage = "denied", a.wait_for_update = Rn, a);
    Ih(b)
  }

  function Xn() {
    var a = {},
      b;
    for (b in Qn) Qn.hasOwnProperty(b) && (a[b] = !0);
    return a
  }

  function Wn(a) {
    var b = {},
      c = (b.ad_storage = a.jd["1"] ? "granted" : "denied", b);
    Kh(c, 0, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: Zn()
    })
  }
  var Zn = function() {
      var a = Tn();
      return a.active ? a.tcString || "" : ""
    },
    $n = function() {
      var a = Tn();
      return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    },
    ao = function(a) {
      if (!Qn.hasOwnProperty(String(a))) return !0;
      var b = Tn();
      return b.active && b.jd ? !!b.jd[String(a)] : !0
    };
  var io = !1;
  var jo = function() {
      this.g = {}
    },
    ko = function(a, b, c) {
      null != c && (a.g[b] = c)
    },
    lo = function(a) {
      return Object.keys(a.g).map(function(b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
      }).join("&")
    },
    no = function(a, b, c, d, e) {};
  var po = /[A-Z]+/,
    qo = /\s/,
    ro = function(a) {
      if (Ha(a)) {
        a = Wa(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (po.test(c)) {
            for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
              if (!d[e] || qo.test(d[e]) && ("AW" !== c || 1 !== e)) return;
            return {
              id: a,
              prefix: c,
              containerId: c + "-" + d[0],
              N: d
            }
          }
        }
      }
    },
    to = function(a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = ro(a[c]);
        d && (b[d.id] = d)
      }
      so(b);
      var e = [];
      Qa(b, function(f, g) {
        e.push(g)
      });
      return e
    };

  function so(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.containerId)
      } for (var e = 0; e < b.length; ++e) delete a[b[e]]
  };
  var vo = function(a, b, c, d) {
      return (2 === uo() || d || "http:" != m.location.protocol ? a : b) + c
    },
    uo = function() {
      var a = Zb(),
        b;
      if (1 === a) a: {
        var c = Eg;c = c.toLowerCase();
        for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
          var k = g[h].src;
          if (k) {
            k = k.toLowerCase();
            if (0 === k.indexOf(e)) {
              b = 3;
              break a
            }
            1 === f && 0 === k.indexOf(d) && (f = 2)
          }
        }
        b = f
      }
      else b = a;
      return b
    };
  var Oo = !1;

  function Po() {
    if (Ga(Rb.joinAdInterestGroup)) return !0;
    Oo || (Gn(''), Oo = !0);
    return Ga(Rb.joinAdInterestGroup)
  }

  function Qo(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ya() - d) {
        vg("TAGGING", 9);
        return
      }
    } else try {
      if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        vg("TAGGING", 10);
        return
      }
    } catch (e) {}
    bc(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ya()
    }, c)
  };
  var Mp = function() {
      var a = !0;
      ao(7) && ao(9) && ao(10) || (a = !1);
      return a
    },
    Np = function() {
      var a = !0;
      ao(3) && ao(4) || (a = !1);
      return a
    };

  function Gq() {
    return yg.gcq = yg.gcq || new Hq
  }
  var Iq = function(a, b, c) {
      Gq().register(a, b, c)
    },
    Jq = function(a, b, c, d) {
      Gq().push("event", [b, a], c, d)
    },
    Kq = function(a, b, c) {
      Gq().insert("event", [b, a], c)
    },
    Lq = function(a, b) {
      Gq().push("config", [a], b)
    },
    Mq = function(a, b, c, d) {
      Gq().push("get", [a, b], c, d)
    },
    Nq = function(a) {
      return Gq().getRemoteConfig(a)
    },
    Oq = {},
    Pq = function() {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.s = null;
      this.g = !1
    },
    Qq = function(a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.V = c || "";
      this.g = d;
      this.o = e
    },
    Hq = function() {
      this.o = {};
      this.s = {};
      this.g = [];
      this.B = {
        AW: !1,
        UA: !1
      }
    },
    Rq = function(a, b) {
      var c = ro(b);
      return a.o[c.containerId] = a.o[c.containerId] || new Pq
    },
    Sq = function(a, b, c) {
      if (b) {
        var d = ro(b);
        if (d && 1 === Rq(a, b).status) {
          Rq(a, b).status = 2;
          var e = {};
          Mm && (e.timeoutId = m.setTimeout(function() {
            xg(38);
            sm()
          }, 3E3));
          a.push("require", [e], d.containerId);
          Oq[d.containerId] = Ya();
          if (xn()) {} else {
            var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + J.Z + "&cx=c";
            wn() && (g += "&sign=" + J.Kd);
            var h = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
              k = un(c, g) || h;
            Yb(k)
          }
        }
      }
    },
    Tq = function(a, b, c, d) {
      if (d.V) {
        var e = Rq(a, d.V),
          f = e.s;
        if (f) {
          var g = Bc(c),
            h = Bc(e.targetConfig[d.V]),
            k = Bc(e.containerConfig),
            n = Bc(e.remoteConfig),
            p = Bc(a.s),
            q = Sg("gtm.uniqueEventId"),
            t = ro(d.V).prefix,
            u = $a(function() {
              var v =
                g[S.$b];
              v && I(v)
            }),
            r = wi(vi(xi(ui(si(ti(ri(qi(pi(g), h), k), n), p), function() {
              Zm(q, t, "2");
              u()
            }), function() {
              Zm(q, t, "3");
              u()
            }), function(v, w) {
              a.B[v] = w
            }), function(v) {
              return a.B[v]
            });
          try {
            Zm(q, t, "1");
            f(d.V, b, d.s, r)
          } catch (v) {
            Zm(q, t, "4");
          }
        }
      }
    };
  Hq.prototype.register = function(a, b, c) {
    var d = Rq(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (Bc(d.remoteConfig, c), d.remoteConfig = c);
      var e = ro(a),
        f = Oq[e.containerId];
      if (void 0 !== f) {
        var g = yg[e.containerId].bootstrap,
          h = e.prefix.toUpperCase();
        yg[e.containerId]._spx && (h = h.toLowerCase());
        var k = Sg("gtm.uniqueEventId"),
          n = h,
          p = Ya() - g;
        if (Mm && !xm[k]) {
          k !== tm && (om(), tm = k);
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Bm = Bm ? Bm + "," + q : "&cl=" + q
        }
        delete Oq[e.containerId]
      }
      this.flush()
    }
  };
  Hq.prototype.push = function(a, b, c, d) {
    var e = Math.floor(Ya() / 1E3);
    Sq(this, c, b[0][S.wa] || this.s[S.wa]);
    c && Rq(this, c).g && (d = !1);
    this.g.push(new Qq(a, e, c, b, d));
    d || this.flush()
  };
  Hq.prototype.insert = function(a, b, c) {
    var d = Math.floor(Ya() / 1E3);
    0 < this.g.length ? this.g.splice(1, 0, new Qq(a, d, c, b, !1)) : this.g.push(new Qq(a, d, c, b, !1))
  };
  Hq.prototype.flush = function(a) {
    for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
      var f = this.g[0];
      if (f.o) !f.V || Rq(this, f.V).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Rq(this, f.V).status && !a) {
              this.g.push.apply(this.g, c);
              return
            }
            Mm && m.clearTimeout(f.g[0].timeoutId);
            break;
          case "set":
            Qa(f.g[0], function(t, u) {
              Bc(fb(t, u), b.s)
            });
            break;
          case "config":
            e.Qa = {};
            Qa(f.g[0], function(t) {
              return function(u, r) {
                Bc(fb(u, r), t.Qa)
              }
            }(e));
            var g = !!e.Qa[S.Cd];
            delete e.Qa[S.Cd];
            var h =
              Rq(this, f.V),
              k = ro(f.V),
              n = k.containerId === k.id;
            g || (n ? h.containerConfig = {} : h.targetConfig[f.V] = {});
            h.g && g || Tq(this, S.Ba, e.Qa, f);
            h.g = !0;
            delete e.Qa[S.cc];
            n ? Bc(e.Qa, h.containerConfig) : Bc(e.Qa, h.targetConfig[f.V]);
            d = !0;
            break;
          case "event":
            e.nd = {};
            Qa(f.g[0], function(t) {
              return function(u, r) {
                Bc(fb(u, r), t.nd)
              }
            }(e));
            Tq(this, f.g[1], e.nd, f);
            break;
          case "get":
            var p = {},
              q = (p[S.Ua] = f.g[0], p[S.hb] = f.g[1], p);
            Tq(this, S.Sa, q, f)
        }
        this.g.shift();
        Zq(this, f)
      }
      e = {
        Qa: e.Qa,
        nd: e.nd
      }
    }
    this.g.push.apply(this.g, c);
    d && this.flush()
  };
  var Zq = function(a, b) {
    if ("require" !== b.type)
      if (b.V)
        for (var c = a.getCommandListeners(b.V)[b.type] || [], d = 0; d < c.length; d++) c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o)
              for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
          }
  };
  Hq.prototype.getRemoteConfig = function(a) {
    return Rq(this, a).remoteConfig
  };
  Hq.prototype.getCommandListeners = function(a) {
    return Rq(this, a).o
  };
  var af;
  var $q = {},
    ar = function(a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = $q[b[c]] || [];
        $q[b[c]] = d;
        0 > d.indexOf(a) && d.push(a)
      }
    },
    br = function(a) {
      Qa($q, function(b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1)
      })
    };
  var cr = "HA GF G UA AW DC".split(" "),
    dr = !1,
    er = !1,
    fr = 0;

  function gr(a, b) {
    var c = {
      event: a
    };
    b && (c.eventModel = Bc(b), b[S.$b] && (c.eventCallback = b[S.$b]), b[S.wd] && (c.eventTimeout = b[S.wd]));
    return c
  }

  function hr(a) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Mg()
    });
    return a["gtm.uniqueEventId"]
  }

  function ir() {
    if (!dr && !yg.gtagRegistered) {
      dr = yg.gtagRegistered = !0;
      yg.addTargetToGroup = function(c) {
        ar(c, "default")
      };
      var a = yg.pendingDefaultTargets;
      delete yg.pendingDefaultTargets;
      if (Ka(a))
        for (var b = 0; b < a.length; ++b) ar(a[b], "default")
    }
    return dr
  }
  var jr = {
      config: function(a) {
        var b, c = hr(a);
        if (2 > a.length || !Ha(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if (void 0 != a[2] && !Ac(a[2]) || 3 < a.length) return;
          d = a[2]
        }
        var e = ro(a[1]);
        if (!e) return;
        br(e.id);
        ar(e.id, d[S.Ke] || "default");
        delete d[S.Ke];
        er || xg(43);
        if (ir() && -1 !== cr.indexOf(e.prefix)) {
          "G" === e.prefix && (d[S.cc] = !0);
          delete d[S.$b];
          e.id === e.containerId && (yg.configCount = ++fr);
          Lq(d, e.id);
          return
        }
        Vg("gtag.targets." + e.id, void 0);
        Vg("gtag.targets." + e.id, Bc(d));
        var f = {};
        f[S.Cb] = e.id;
        b =
          gr(S.Ba, f);
        b["gtm.uniqueEventId"] = c;
        return b
      },
      consent: function(a) {
        if (3 === a.length) {
          xg(39);
          var b = Mg(),
            c = a[1];
          "default" === c ? Ih(a[2]) : "update" === c && Kh(a[2], b)
        }
      },
      event: function(a) {
        var b = a[1];
        if (!(2 > a.length) && Ha(b)) {
          var c;
          if (2 < a.length) {
            if (!Ac(a[2]) && void 0 != a[2] || 3 < a.length) return;
            c = a[2]
          }
          var d = gr(b, c),
            e = hr(a);
          d["gtm.uniqueEventId"] = e;
          if ("optimize.callback" === b) return d.eventModel = d.eventModel || {}, d;
          var f;
          var g = c && c[S.Cb];
          void 0 === g && (g = Sg(S.Cb,
            2), void 0 === g && (g = "default"));
          if (Ha(g) || Ka(g)) {
            for (var h = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < h.length; n++)
              if (0 <= h[n].indexOf("-")) k.push(h[n]);
              else {
                var p = $q[h[n]];
                p && p.length && (k = k.concat(p))
              } f = to(k)
          } else f = void 0;
          var q = f;
          if (!q) return;
          for (var t = ir(), u = [], r = 0; t && r < q.length; r++) {
            var v = q[r];
            if (-1 !== cr.indexOf(v.prefix)) {
              var w = Bc(c);
              "G" === v.prefix && (w[S.cc] = !0);
              delete w[S.$b];
              Jq(b, w, v.id)
            }
            u.push(v.id)
          }
          d.eventModel = d.eventModel || {};
          0 < q.length ? d.eventModel[S.Cb] = u.join() : delete d.eventModel[S.Cb];
          er || xg(43);
          return d
        }
      },
      get: function(a) {
        xg(53);
        if (4 !== a.length || !Ha(a[1]) || !Ha(a[2]) || !Ga(a[3])) return;
        var b = ro(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        er || xg(43);
        if (!ir() || -1 === cr.indexOf(b.prefix)) return;
        Mg();
        var e = {};
        Eh(Bc((e[S.Ua] = c, e[S.hb] = d, e)));
        Mq(c, function(f) {
          I(function() {
            return d(f)
          })
        }, b.id);
      },
      js: function(a) {
        if (2 == a.length && a[1].getTime) {
          er = !0;
          ir();
          var b = {};
          return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
            b["gtm.uniqueEventId"] = hr(a), b
        }
      },
      policy: function(a) {
        if (3 === a.length) {
          var b = a[1],
            c = a[2],
            d = af.o;
          d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
        }
      },
      set: function(a) {
        var b;
        2 == a.length && Ac(a[1]) ? b = Bc(a[1]) : 3 == a.length && Ha(a[1]) && (b = {}, Ac(a[2]) || Ka(a[2]) ? b[a[1]] = Bc(a[2]) : b[a[1]] = a[2]);
        if (b) {
          if (Mg(), Bc(b), ir()) {
            var c = Bc(b);
            Gq().push("set", [c])
          }
          b._clear = !0;
          return b
        }
      }
    },
    kr = {
      policy: !0
    };
  var lr = function() {
    this.g = [];
    this.o = []
  };
  lr.prototype.push = function(a, b, c) {
    var d = {
      debugContext: c,
      message: a,
      notBeforeEventId: b,
      priorityId: this.g.length + 1
    };
    this.g.push(d);
    for (var e = 0; e < this.o.length; e++) try {
      this.o[e](d)
    } catch (f) {}
  };
  lr.prototype.kh = function(a) {
    this.o.push(a)
  };
  lr.prototype.get = function() {
    for (var a = {}, b = 0; b < this.g.length; b++) {
      var c = this.g[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c)
    }
    return a
  };
  lr.prototype.get = lr.prototype.get;
  lr.prototype.listen = lr.prototype.kh;
  lr.prototype.push = lr.prototype.push;

  function mr(a, b) {
    return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
  };
  var nr = function(a) {
      var b = m[J.Z].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break
          } c && (b.end(), b.end = null)
      }
    },
    or = function(a) {
      var b = m[J.Z],
        c = b && b.hide;
      c && c.end && (c[a] = !0)
    };
  var pr = !1,
    qr = [];

  function rr() {
    if (!pr) {
      pr = !0;
      for (var a = 0; a < qr.length; a++) I(qr[a])
    }
  }
  var sr = function(a) {
    pr ? I(a) : qr.push(a)
  };
  var Jr = function(a) {
    if (Ir(a)) return a;
    this.g = a
  };
  Jr.prototype.rj = function() {
    return this.g
  };
  Jr.prototype.qj = function() {
    return this.g
  };
  var Ir = function(a) {
    return !a || "object" !== yc(a) || Ac(a) ? !1 : "getUntrustedMessageValue" in a || "getUntrustedUpdateValue" in a
  };
  Jr.prototype.getUntrustedMessageValue = Jr.prototype.qj;
  Jr.prototype.getUntrustedUpdateValue = Jr.prototype.rj;
  var Kr = 0,
    Lr, Mr = {},
    Nr = [],
    Or = [],
    Pr = !1,
    Qr = !1,
    Rr = function(a) {
      return m[J.Z].push(a)
    },
    Sr = function(a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Rr(a)
    },
    Tr = function(a, b) {
      var c = yg[J.Z],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b && (g = m.setTimeout(function() {
        f || (f = !0, a());
        g = void 0
      }, b));
      return function() {
        ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0))
      }
    };

  function Ur(a) {
    var b = a._clear;
    Qa(a, function(d, e) {
      "_clear" !== d && (b && Vg(d, void 0), Vg(d, e))
    });
    Hg || (Hg = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || (c = Mg(), a["gtm.uniqueEventId"] = c, Vg("gtm.uniqueEventId", c));
    return sn(a)
  }

  function Vr(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Sa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0
    }
    return !1
  }

  function Wr() {
    for (var a = !1; !Qr && (0 < Nr.length || 0 < Or.length);) {
      if (!Pr && Vr(Nr[0])) {
        var b = {},
          c = (b.event = "gtm.init_consent", b),
          d = {},
          e = (d.event = "gtm.init", d),
          f = Nr[0]["gtm.uniqueEventId"];
        f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
        Nr.unshift(c, e);
        Pr = !0
      }
      Qr = !0;
      delete Pg.eventModel;
      Rg();
      var g = null,
        h = void 0;
      null == g && (g = Nr.shift());
      if (null != g) {
        var n = Ir(g);
        if (n) {
          var p = g;
          g = Ir(p) ? "getUntrustedMessageValue" in p ? p.getUntrustedMessageValue() : p.getUntrustedUpdateValue() : void 0;
          Wg()
        }
        try {
          if (Ga(g)) try {
            g.call(Tg)
          } catch (B) {} else if (Ka(g)) {
            var q = g;
            if (Ha(q[0])) {
              var t = q[0].split("."),
                u = t.pop(),
                r = q.slice(1),
                v = Sg(t.join("."), 2);
              if (null != v) try {
                v[u].apply(v, r)
              } catch (B) {}
            }
          } else {
            if (Sa(g)) {
              a: {
                var w = g,
                  y = h;
                if (w.length && Ha(w[0])) {
                  var x =
                    jr[w[0]];
                  if (x && (!n || !kr[w[0]])) {
                    g = x(w, y);
                    break a
                  }
                }
                g = void 0
              }
              if (!g) {
                Qr = !1;
                continue
              }
            }
            a = Ur(g) || a;
          }
        } finally {
          n && Rg(!0)
        }
      }
      Qr = !1
    }
    return !a
  }

  function Yr() {
    var b = Wr();
    try {
      nr(J.I)
    } catch (c) {}
    return b
  }
  var as = function() {
    var a = Tb(J.Z, []),
      b = Tb("google_tag_manager", {});
    b = b[J.Z] = b[J.Z] || {};
    Il(function() {
      b.gtmDom || (b.gtmDom = !0, a.push({
        event: "gtm.dom"
      }))
    });
    sr(function() {
      b.gtmLoad || (b.gtmLoad = !0, a.push({
        event: "gtm.load"
      }))
    });
    b.subscribers = (b.subscribers || 0) + 1;
    var c = a.push;
    a.push = function() {
      var e;
      if (0 < yg.SANDBOXED_JS_SEMAPHORE) {
        e = [];
        for (var f =
            0; f < arguments.length; f++) e[f] = new Jr(arguments[f])
      } else e = [].slice.call(arguments, 0);
      Nr.push.apply(Nr, e);
      var g = c.apply(a, e);
      if (300 < this.length)
        for (xg(4); 300 < this.length;) this.shift();
      var h = "boolean" !== typeof g || g;
      return Wr() && h
    };
    var d = a.slice(0);
    Nr.push.apply(Nr, d);
    if (Zr()) {
      I(Yr)
    }
  };
  var Zr = function() {
    var a = !0;
    return a
  };

  function cs(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ya();
    return b < c + 3E5 && b > c - 9E5
  };
  var ds = function(a) {
    yg.addTargetToGroup ? yg.addTargetToGroup(a) : (yg.pendingDefaultTargets = yg.pendingDefaultTargets || [], yg.pendingDefaultTargets.push(a))
  };
  var es = {
      ph: "G-2SSGMHY3NP"
    },
    fs = function() {
      var a = [];
      return a
    };
  var gs = {};
  gs.Fd = new String("undefined");
  var js = function(a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": kc(a, "className"),
        "gtm.elementId": a["for"] || fc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || kc(a, "target") || ""
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || kc(a, "href") || a.src || a.code || a.codebase || "";
      return d
    },
    ks = function(a) {
      yg.hasOwnProperty("autoEventsSettings") || (yg.autoEventsSettings = {});
      var b = yg.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a]
    },
    ls = function(a, b, c) {
      ks(a)[b] = c
    },
    ms = function(a, b, c, d) {
      var e = ks(a),
        f = Za(e, b, d);
      e[b] = c(f)
    },
    ns = function(a, b, c) {
      var d = ks(a);
      return Za(d, b, c)
    },
    os = function(a) {
      return "string" === typeof a ? a : String(Mg())
    };
  var Is = m.clearTimeout,
    Js = m.setTimeout,
    V = function(a, b, c, d) {
      if (xn()) {
        b && I(b)
      } else return Yb(a, b, c, d)
    },
    Ks = function() {
      return new Date
    },
    Ls = function() {
      return m.location.href
    },
    Ms = function(a) {
      return Ti(Vi(a), "fragment")
    },
    Ns = function(a) {
      return Ui(Vi(a))
    },
    Os = function(a, b) {
      return Sg(a, b || 2)
    },
    Ps = function(a, b, c) {
      return b ? Sr(a, b, c) : Rr(a)
    },
    Qs = function(a, b) {
      m[a] = b
    },
    X = function(a, b, c) {
      b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
      return m[a]
    },
    Rs = function(a, b, c) {
      return wj(a, b, void 0 === c ? !0 : !!c)
    },
    Ss = function(a, b, c) {
      return 0 === Fj(a, b, c)
    },
    Ts = function(a, b) {
      if (xn()) {
        b && I(b)
      } else bc(a, b)
    },
    Us = function(a) {
      return !!ns(a, "init", !1)
    },
    Vs = function(a) {
      ls(a, "init", !0)
    },
    Ws = function(a) {
      var b = Eg,
        c = "?id=" + encodeURIComponent(a) + "&l=" + J.Z;
      wn() && (c += "&sign=" + J.Kd, Sb && (b = Sb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
      var d = vo("https://", "http://", b + c);
      V(d)
    },
    Xs = function(a,
      b, c) {
      Mm && (Fc(a) || $m(c, b, a))
    };
  var ut = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

  function vt(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c
  }
  var wt = new Oa;

  function xt(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = wt.get(e);
      f || (f = new RegExp(b, d), wt.set(e, f));
      return f.test(a)
    } catch (g) {
      return !1
    }
  }

  function yt(a, b) {
    function c(g) {
      var h = Vi(g),
        k = Ti(h, "protocol"),
        n = Ti(h, "host", !0),
        p = Ti(h, "port"),
        q = Ti(h, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default";
      return [k, n, p, q]
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0
  }

  function zt(a) {
    return At(a) ? 1 : 0
  }

  function At(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Bc(a, {});
        Bc({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (zt(e)) return !0
      }
      return !1
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < ut.length; g++) {
              var h = ut[g];
              if (b[h]) {
                f = b[h](c);
                break a
              }
            }
          } catch (k) {}
          f = !1
        }
        return f;
      case "_ew":
        return vt(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return xt(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return yt(b, c)
    }
    return !1
  };

  function Bt(a, b) {
    var c = this;
  };

  function Ct(a, b, c) {
    var d;
    return d
  };

  function Dt(a, b, c) {};

  function Et(a, b, c, d) {};

  function Ft(a) {};

  function Jt(a) {};
  var Kt = {},
    Lt = [],
    Mt = {},
    Nt = 0,
    Ot = 0;

  function Vt(a, b) {}

  function bu(a, b) {};

  function gu(a) {};
  var hu = {},
    iu = [];
  var pu = function(a, b) {};

  function wu(a, b) {};
  var xu = /^\s*$/,
    yu, zu = !1;

  function Ku(a, b) {}

  function Lu(a, b, c) {};
  var Mu = ["www.youtube.com", "www.youtube-nocookie.com"],
    Nu, Ou = !1,
    Pu = 0;

  function Zu(a, b) {}

  function $u(a, b) {
    return !0
  };

  function av(a, b, c) {};

  function bv(a, b) {
    var c;
    return c
  };

  function cv(a) {};

  function dv(a) {};

  function ev(a) {
    L(F(this), ["listener:!Fn"], arguments);
    M(this, "process_dom_events", "window", "load");
    sr(Dc(a))
  };

  function fv(a) {
    var b;
    return b
  };

  function gv(a, b) {
    var c;
    var d = !1;
    var e = Cc(c, this.g, d);
    void 0 === e && void 0 !== c && xg(45);
    return e
  };

  function hv(a) {
    var b;
    return b
  };

  function iv(a, b) {
    var c = null,
      d = !1;
    return Cc(c, this.g, d)
  };

  function jv(a) {
    var b;
    var g = !1;
    return Cc(b, this.g, g)
  };
  var kv = {},
    lv = [],
    mv = {},
    nv = 0,
    ov = 0;
  var uv = function(a, b) {
    return b
  };

  function zv(a, b) {
    return b
  };

  function Ev() {};
  var Fv = {},
    Gv = [];

  function Nv(a, b) {
    return b
  }

  function Rv(a, b) {
    return b
  };
  var Sv, Tv;
  var bw = function(a, b) {
    return b
  };
  var Nb = ba(["data-gtm-yt-inspected-"]),
    cw = ["www.youtube.com", "www.youtube-nocookie.com"],
    dw, ew = !1;

  function ow(a, b) {
    return b
  }

  function pw(a) {
    return !1
  }
  var qw;

  function rw(a) {
    var b = !1;
    return b
  };
  var tw = function(a, b, c) {
      if (c) switch (c.type) {
        case "event_name":
          return a;
        case "const":
          return c.const_value;
        case "event_param":
          var d = c.event_param.param_name;
          return b[d]
      }
    },
    ww = function(a, b, c, d) {
      if (c && !uw(a, b, c)) return !1;
      if (!d || 0 === d.length) return !0;
      for (var e = 0; e < d.length; e++)
        if (vw(a, b, d[e].predicates || [])) return !0;
      return !1
    },
    vw = function(a, b, c) {
      for (var d = 0; d < c.length; d++)
        if (!uw(a,
            b, c[d])) return !1;
      return !0
    },
    uw = function(a, b, c) {
      var d = c.values || [],
        e = tw(a, b, d[0]),
        f = tw(a, b, d[1]),
        g = c.type;
      if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g) Ha(e) && (e = e.toLowerCase()), Ha(f) && (f = f.toLowerCase());
      var h = !1;
      switch (g) {
        case "eq":
        case "eqi":
          h = String(e) === String(f);
          break;
        case "sw":
        case "swi":
          h = 0 === String(e).indexOf(String(f));
          break;
        case "ew":
        case "ewi":
          h = vt(e, f);
          break;
        case "cn":
        case "cni":
          h = 0 <= String(e).indexOf(String(f));
          break;
        case "lt":
          h = Number(e) < Number(f);
          break;
        case "le":
          h = Number(e) <= Number(f);
          break;
        case "gt":
          h = Number(e) > Number(f);
          break;
        case "ge":
          h = Number(e) >= Number(f);
          break;
        case "re":
        case "rei":
          h = xt(e, f, "rei" === g)
      }
      return !!c.negate !== h
    };

  function xw(a, b) {
    var c = !1;
    return c
  };
  var yw = function(a) {
    var b;
    return b
  };

  function zw(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c
  };

  function Aw() {
    var a = [];
    return Cc(a)
  };

  function Bw(a) {
    var b = null;
    return b
  };

  function Cw(a, b) {
    var c;
    return c
  };

  function Dw(a, b) {
    var c;
    return c
  };

  function Ew(a, b) {
    var c;
    return c
  };

  function Fw(a) {
    var b = "";
    return b
  };

  function Gw(a, b) {
    var c;
    return c
  };

  function Hw(a) {
    var b = "";
    return b
  };

  function Iw() {
    M(this, "get_user_agent");
    return m.navigator.userAgent
  };

  function Jw(a) {
    return a ? {
      entityType: a.Xg.type,
      indexInOriginContainer: a.Xg.index,
      nameInOriginContainer: void 0,
      originContainerId: J.I
    } : {}
  };

  function Lw(a, b) {};

  function Mw(a, b) {};
  var Nw = {};

  function Ow(a, b, c, d, e, f) {
    f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
      [c],
      [d]
    ], Yb(a, function() {
      for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
      g.push = function(k) {
        I(k);
        return 0
      }
    }, function() {
      for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
      e[f] = null
    }, b)) : Yb(a, c, d, b)
  }

  function Pw(a, b, c, d) {}
  var Qw = Object.freeze({
      dl: 1,
      id: 1
    }),
    Rw = {};

  function Sw(a, b, c, d) {};

  function Tw(a) {
    var b = !0;
    return b
  };
  var Uw = function() {
      return !1
    },
    Vw = {
      getItem: function(a) {
        var b = null;
        return b
      },
      setItem: function(a,
        b) {
        return !1
      },
      removeItem: function(a) {}
    };
  var Ww = ["textContent", "value", "tagName", "children", "childElementCount"];

  function Xw(a) {
    var b;
    return b
  };

  function Yw() {};

  function Zw(a, b) {
    var c;
    return c
  };

  function $w(a) {
    var b = void 0;
    return b
  };

  function ax(a) {};

  function bx(a, b) {
    var c = !1;
    return c
  };

  function cx() {
    var a = "";
    return a
  };

  function dx() {
    var a = "";
    return a
  };
  var ex = function(a, b, c) {
      this.Ya = a;
      this.eventName = b;
      this.g = c;
      this.tb = {};
      this.metadata = {}
    },
    fx = function(a, b, c) {
      var d = a.g.getWithConfig(b);
      void 0 !== d ? a.tb[b] = d : void 0 !== c && (a.tb[b] = c)
    };

  function ix(a, b) {
    var c = this;
  };
  var jx = Object.freeze(["config", "event", "get", "set"]);

  function kx(a, b, c) {};

  function lx(a, b) {
    var c = !1;
    return c
  };

  function mx() {};

  function nx(a, b, c, d) {
    d = void 0 === d ? !1 : d;
  };

  function ox(a, b, c) {};

  function px(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f
  };
  var qx = !1;

  function rx(a) {
    L(F(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Eb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== S.ne && M(this, "access_consent", e, "write")
    }
    var f = this.g.g,
      g = Jw(f);
    if (qx) {
      var h = gn("consent", "default", Dc(a));
      bs(h, f.eventId, g)
    } else Ih(Dc(a))
  }

  function sx(a, b, c) {
    return !1
  };

  function tx(a, b, c) {
    L(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = Fi(a) || {};
    d[b] = Dc(c, this.g);
    var e = a;
    Di || Ei();
    Ci[e] = d;
  };

  function ux(a, b, c) {};
  var vx = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
    }
    return b
  };

  function wx(a, b, c, d) {
    var e = this;
  };

  function xx(a, b, c) {};
  var yx = {},
    zx = {};
  yx.getItem = function(a) {
    var b = null;
    return b
  };
  yx.setItem = function(a, b) {};
  yx.removeItem = function(a) {};
  yx.clear = function() {};
  var Ax = function(a) {
    var b;
    return b
  };
  var Bx = !1;

  function Cx(a) {
    L(F(this), ["consentSettings:!DustMap"], arguments);
    var b = Dc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
    var d = this.g.g,
      e = Jw(d);
    Bx ? bs(gn("consent", "update", b), d.eventId, e) : Kh(b, d.eventId)
  }
  var Dx = function() {
    var a = new lg;
    xn() ? (a.add("injectHiddenIframe", Fa), a.add("injectScript", Fa)) : (a.add("injectHiddenIframe", Mw), a.add("injectScript", Pw));
    var b = ox;
    a.add("Math", Qf());
    a.add("Object", jg);
    a.add("TestHelper", og());
    a.add("addConsentListener", Bt);
    a.add("addEventCallback", Ft);
    a.add("aliasInWindow", $u);
    a.add("assertApi",
      Mf);
    a.add("assertThat", Nf);
    a.add("callInWindow", bv);
    a.add("callLater", cv);
    a.add("copyFromDataLayer", gv);
    a.add("copyFromWindow", hv);
    a.add("createArgumentsQueue", iv);
    a.add("createQueue", jv);
    a.add("decodeUri", Rf);
    a.add("decodeUriComponent", Sf);
    a.add("encodeUri", Tf);
    a.add("encodeUriComponent", Uf);
    a.add("fail", Vf);
    a.add("fromBase64", yw, !("atob" in m));
    a.add("generateRandom", Wf);
    a.add("getContainerVersion", Xf);
    a.add("getCookieValues", zw);
    a.add("getQueryParameters", Dw);
    a.add("getReferrerQueryParameters",
      Ew);
    a.add("getReferrerUrl", Fw);
    a.add("getTimestamp", $f);
    a.add("getTimestampMillis", $f);
    a.add("getType", ag);
    a.add("getUrl", Hw);
    a.add("isConsentGranted", Tw);
    a.add("localStorage", Vw, !Uw());
    a.add("logToConsole", Yw);
    a.add("makeInteger", cg);
    a.add("makeNumber", dg);
    a.add("makeString", eg);
    a.add("makeTableMap", fg);
    a.add("mock", ig);
    a.add("parseUrl", $w);
    a.add("queryPermission", bx);
    a.add("readCharacterSet", cx);
    a.add("readTitle", dx);
    a.add("sendPixel", b);
    a.add("setCookie", px);
    a.add("setDefaultConsentState", rx);
    a.add("setInWindow", sx);
    a.add("sha256", wx);
    a.add("templateStorage", yx);
    a.add("toBase64", Ax, !("btoa" in m));
    a.add("updateConsentState", Cx);
    ng(a, "callOnWindowLoad", ev);
    ng(a, "internal.addFormInteractionListener", Vt);
    ng(a, "internal.addFormSubmitListener", bu);
    ng(a, "internal.addGaSendListener", gu);
    ng(a, "internal.addHistoryChangeListener", pu);
    ng(a, "internal.evaluateFilteringRules", pw);
    ng(a, "internal.evaluateMatchingRules", rw);
    ng(a, "internal.getFlags", Zf);
    ng(a, "internal.locateUserData", Xw);
    ng(a, "internal.registerGtagCommandListener",
      kx);
    ng(a, "internal.sendGtagEvent", nx);
    a.add("JSON", bg(function(c) {
      var d = this.g.g;
      d && d.log.call(this, "error", c)
    }));
    ng(a, "internal.appendRemoteConfigParameter", av), ng(a, "internal.getRemoteConfigParameter", Gw), ng(a, "internal.setRemoteConfigParameter", ux), ng(a, "internal.sortRemoteConfigParameters", xx), ng(a, "internal.getProductSettingsParameter", Cw), ng(a, "internal.setProductSettingsParameter",
      tx);
    xn() ? ng(a, "internal.injectScript", Fa) : ng(a, "internal.injectScript", Sw);
    return function(c) {
      var d;
      if (a.g.hasOwnProperty(c)) d = a.get(c, this);
      else {
        var e;
        if (e = a.o.hasOwnProperty(c)) {
          var f = !1,
            g = this.g.g;
          if (g) {
            var h = g.Wc();
            if (h) {
              0 !== h.indexOf("__cvt_") && (f = !0);
            }
          }
          e = f
        }
        if (e) {
          var k = a.o.hasOwnProperty(c) ?
            a.o[c] : void 0;
          d = k
        } else throw Error(c + " is not a valid API name.");
      }
      return d
    }
  };
  var Ex = function() {
      return !1
    },
    Fx = function() {
      var a = {};
      return function(b, c, d) {}
    };
  var Gx;

  function Hx() {
    var a = Gx;
    return function(b, c, d) {
      var e = d && d.event;
      Ix(c);
      var f = new nb;
      Qa(c, function(q, t) {
        var u = Cc(t);
        void 0 === u && void 0 !== t && xg(44);
        f.set(q, u)
      });
      a.g.g.F = Qe();
      var g = {
        Ri: bf(b),
        eventId: void 0 !== e ? e.id : void 0,
        Nd: void 0 !== e ? function(q) {
          return e.Gb.Nd(q)
        } : void 0,
        Wc: function() {
          return b
        },
        log: function() {},
        Xg: {
          index: d && d.index,
          type: d && d.type
        }
      };
      if (Ex()) {
        var h =
          Fx(),
          k = void 0,
          n = void 0;
        g.Ha = {
          Ah: [],
          Lc: {},
          sb: function(q, t, u) {
            1 === t && (k = q);
            7 === t && (n = u);
            h(q, t, u)
          },
          Af: gg()
        };
        g.log = function(q, t) {
          if (k) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(k, 4, {
              level: q,
              source: n,
              message: u
            })
          }
        }
      }
      var p = Yd(a, g, [b, f]);
      a.g.g.F = void 0;
      p instanceof ra && "return" === p.g && (p = p.o);
      return Dc(p)
    }
  }

  function Ix(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ga(b) && (a.gtmOnSuccess = function() {
      I(b)
    });
    Ga(c) && (a.gtmOnFailure = function() {
      I(c)
    })
  }

  function Jx() {
    Gx.g.g.O = function(a, b, c) {
      yg.SANDBOXED_JS_SEMAPHORE = yg.SANDBOXED_JS_SEMAPHORE || 0;
      yg.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c)
      } finally {
        yg.SANDBOXED_JS_SEMAPHORE--
      }
    }
  }

  function Kx(a) {
    void 0 !== a && Qa(a, function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Lg[e] = Lg[e] || [];
        Lg[e].push(b)
      }
    })
  };
  var Lx = encodeURI,
    Y = encodeURIComponent,
    Mx = cc;
  var Nx = function(a, b) {
    if (!a) return !1;
    var c = Ti(Vi(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, e = "." + e);
        if (0 <= f && c.indexOf(e, f) == f) return !0
      }
    }
    return !1
  };
  var Ox = function(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
    return e ? d : null
  };
  var Yy = {};
  Yy[S.Xb] = "";
  Yy[S.Ca] = "";
  Yy[S.Ja] = "";
  Yy[S.ma] = "auto";
  Yy[S.fb] = "/";
  Yy[S.va] = 63072E3;
  Yy[S.Ec] = 30;
  Yy[S.Ad] = 1E4;
  Yy[S.oa] = !0;
  var Zy = function(a, b, c, d, e, f) {
    f = void 0 === f ? !1 : f;
    ex.call(this, a, b, d);
    this.s = c;
    this.K = d.eventModel;
    this.Ki = d.containerConfig;
    this.O = d.getWithConfig(S.Ab) ? 1 : 8;
    this.Ye = d.getWithConfig(S.Zb) ? 1 : 8;
    this.F = e;
    this.Ra = this.We = this.Lg = this.B = this.Fg = this.Ig = this.Ed = !1;
    this.Lb = 0;
    this.af = this.Dd = !1;
    this.bf = void 0;
    this.Sb = 0;
    this.zg = this.$e = this.Jg = this.o = this.Bg = this.Ze = void 0;
    this.Li =
      f
  };
  ma(Zy, ex);
  l = Zy.prototype;
  l.La = function(a, b) {
    void 0 === this.C(a) && (this.K[a] = b)
  };
  l.xh = function(a, b) {
    b <= this.O && (this.K[S.Ab] = a, this.O = b)
  };
  l.hk = function(a, b) {
    b <= this.Ye && (this.K[S.Zb] = a, this.Ye = b)
  };
  l.C = function(a) {
    return void 0 !== this.K[a] ? this.K[a] : void 0 !== this.g.getWithConfig(a) ? this.g.getWithConfig(a) : void 0 !== this.F[a] ? this.F[a] : Yy[a]
  };
  l.getRemoteConfig = function(a) {
    return void 0 !== this.g.remoteConfig[a] ? this.g.remoteConfig[a] : this.F[a]
  };
  l.$d = function(a) {
    var b = this.Kb(S.vd, this.F[S.vd]);
    if (b &&
      void 0 !== b[a || this.eventName]) return b[a || this.eventName]
  };
  l.Kb = function(a, b) {
    var c = Fi(this.Ya);
    return c && c.hasOwnProperty(a) ? c[a] : b
  };
  l.bh = function() {
    var a = this.C(S.Da);
    if ("object" === typeof a) return a
  };
  l.eh = function() {
    return !!this.bh()
  };
  l.abort = function() {
    throw "ABORT";
  };
  l.Za = function() {
    return !(!0 !== this.C(S.Ac) && "true" !== this.C(S.Ac) || !this.C(S.wa))
  };
  l.Jj = function() {
    return this.B || !!this.C(S.hg)
  };
  l.wf = function() {
    var a = !1;
    return a
  };
  l.ad = function() {
    return this.Kb(S.Je, !1)
  };
  l.Kc = function() {
    return !1 !== this.C(S.ia)
  };
  l.ef = function() {
    return !1 !== this.C(S.X)
  };
  var $y = !1,
    az = function(a) {
      var b = !1;
      b = a.eventName === S.wc && yh() && a.Za();
      return !(!Rb.sendBeacon || a.Dd || a.o && a.eh() || a.B || a.We || a.Ra || b || $y)
    };
  var bz = function(a) {
    vg("GA4_EVENT", a)
  };
  var dz = function(a) {
      return !a || cz.test(a) || S.wi.hasOwnProperty(a)
    },
    ez = function(a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var g = f.edit_param.param_name,
            h = tw(a, b, f.edit_param.param_value),
            k;
          if (h) {
            var n = Number(h);
            k = isNaN(n) ? h : n
          } else k = h;
          b[g] = k
        } else f.delete_param && delete b[f.delete_param.param_name]
      }
    },
    cz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var fz = function(a) {
      var b = 0,
        c = 0;
      return {
        start: function() {
          b = Ya()
        },
        stop: function() {
          c = this.get()
        },
        get: function() {
          var d = 0;
          a.xf() && (d = Ya() - b);
          return d + c
        }
      }
    },
    gz = function() {
      this.g = void 0;
      this.o = 0;
      this.isActive = this.isVisible = this.s = !1;
      this.F = this.B = void 0
    };
  l = gz.prototype;
  l.zi = function(a) {
    var b = this;
    if (!this.g) {
      this.s = H.hasFocus();
      this.isVisible = !H.hidden;
      this.isActive = !0;
      var c = function(d, e, f) {
        dc(d, e, function(g) {
          b.g.stop();
          f(g);
          b.xf() && b.g.start()
        })
      };
      c(m, "focus", function() {
        b.s = !0
      });
      c(m, "blur", function() {
        b.s = !1
      });
      c(m, "pageshow", function(d) {
        b.isActive = !0;
        d.persisted && xg(56);
        b.F && b.F()
      });
      c(m, "pagehide", function() {
        b.isActive = !1;
        b.B && b.B()
      });
      c(H, "visibilitychange", function() {
        b.isVisible = !H.hidden
      });
      a.Za() && -1 === (Rb.userAgent || "").indexOf("Firefox") && -1 === (Rb.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function() {
        $y = !0
      });
      this.Gf();
      this.o = 0
    }
  };
  l.Gf = function() {
    this.o +=
      this.Zd();
    this.g = fz(this);
    this.xf() && this.g.start()
  };
  l.mk = function(a) {
    a.Sb = this.Zd()
  };
  l.uj = function(a) {
    a.Sb = 0;
    this.Gf();
    this.o = 0
  };
  l.xf = function() {
    return this.s && this.isVisible && this.isActive
  };
  l.oj = function() {
    return this.o + this.Zd()
  };
  l.Zd = function() {
    return this.g && this.g.get() || 0
  };
  l.Xj = function(a) {
    this.B = a
  };
  l.uh = function(a) {
    this.F = a
  };

  function hz() {
    return m.gaGlobal = m.gaGlobal || {}
  }
  var iz = function() {
      var a = hz();
      a.hid = a.hid || Na();
      return a.hid
    },
    jz = function(a, b) {
      var c = hz();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
  var nz = function(a, b) {
      var c;
      var d = kz(b),
        e = String(b.C(S.ma)),
        f = String(b.C(S.fb)),
        g = Number(b.C(S.va)),
        h = b.C(S.Yb),
        k = {
          ab: S.M,
          domain: e,
          path: f,
          expires: g ? new Date(Ya() + 1E3 * g) : void 0,
          flags: "" + b.C(S.Ja)
        };
      if (!1 === h && lz(b) === a) c = !0;
      else {
        var n = Nj(a, mz[0], e, f);
        c = 1 !== Fj(d, n, k)
      }
      return c
    },
    lz = function(a) {
      var b = kz(a),
        c = "" + a.C(S.ma),
        d = "" + a.C(S.fb),
        e = Mj(b, c, d, mz, S.M);
      if (!e) {
        var f = String(a.C(S.Xb));
        f && f != b && (e = Mj(f, c, d, mz, S.M))
      }
      return e
    },
    kz = function(a) {
      return String(a.C(S.Ca)) + "_ga"
    },
    mz = ["GA1"];
  var qz = function(a, b) {
      var c = oz(b),
        d = String(b.C(S.ma)),
        e = String(b.C(S.fb)),
        f = Number(b.C(S.va)),
        g = Nj(a, pz[0], d, e),
        h = {
          ab: S.M,
          domain: d,
          path: e,
          expires: f ? new Date(Ya() + 1E3 * f) : void 0,
          flags: String(b.C(S.Ja))
        };
      return 1 !== Fj(c, g, h)
    },
    rz = function(a) {
      var b = oz(a),
        c = String(a.C(S.ma)),
        d = String(a.C(S.fb));
      return Mj(b, c, d, pz, S.M)
    },
    pz = ["GS1"],
    oz = function(a) {
      return String(a.C(S.Ca)) + "_ga_" + a.Ya.substr(2)
    },
    sz = function(a) {
      var b;
      var c = a.K[S.Fc],
        d = a.K[S.Re],
        e = !!a.K[S.Ne],
        f = a.K[S.Zb];
      if (c && d) {
        var g = [c, d, Ta(a.K[S.Qe]), a.s,
          a.Lb
        ];
        b = g.join(".")
      } else b = void 0;
      return b
    };
  var tz = function(a) {
      var b = a.C(S.na),
        c = a.getRemoteConfig(S.na);
      if (c === b) return c;
      var d = Bc(b);
      c && c[S.P] && (d[S.P] = (d[S.P] || []).concat(c[S.P]));
      return d
    },
    uz = function(a, b) {
      var c = tk(!0);
      return "1" !== c._up ? {} : {
        clientId: c[a],
        wh: c[b]
      }
    },
    vz = function(a, b, c) {
      var d = tk(!0),
        e = d[b];
      e && (a.xh(e, 2), nz(e, a));
      var f = d[c];
      f && qz(f, a);
      return !(!e || !f)
    },
    wz = !1,
    xz = function(a) {
      var b = tz(a) || {},
        c = kz(a),
        d = oz(a);
      Bk(b[S.ac], !!b[S.P]) && vz(a, c, d) && (wz = !0);
      b[S.P] && yk(function() {
        var e = {},
          f = lz(a);
        f && (e[c] = f);
        var g = rz(a);
        g && (e[d] = g);
        var h =
          wj("FPLC", void 0, void 0, S.M);
        h.length && (e._fplc = h[0]);
        return e
      }, b[S.P], b[S.Bc], !!b[S.bc])
    },
    zz = function(a) {
      if (!a.C(S.nb)) return {};
      var b = kz(a),
        c = oz(a);
      zk(function() {
        var d;
        if (Lh("analytics_storage")) d = {};
        else {
          var e = {};
          d = (e._up = "1", e[b] = a.K[S.Ab], e[c] = sz(a), e)
        }
        return d
      }, 1);
      return !Lh("analytics_storage") && yz() ? uz(b, c) : {}
    },
    yz = function() {
      var a = Si(m.location, "host"),
        b = Si(Vi(H.referrer), "host");
      return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
    };
  var Az = function() {
    var a = Ya(),
      b = a + 864E5,
      c = 20,
      d = 5E3;
    return function() {
      var e = Ya();
      e >= b && (b = e + 864E5, d = 5E3);
      if (1 > d) return !1;
      c = Math.min(c + (e - a) / 1E3 * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0
    }
  };
  var Cz = function(a) {
      var b;
      b = Bz ? a.tb[S.Va] : a.C(S.Va);
      return Ti(Vi(b), "host", !0)
    },
    Bz = !1;
  var Dz = !1;
  Dz = !0;
  var Ez = "" + Na(),
    Fz = !1,
    Gz = void 0;
  var Hz = function() {
    if (Ga(m.__uspapi)) {
      var a = "";
      try {
        m.__uspapi("getUSPData", 1, function(b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
          }
        })
      } catch (b) {}
      return a
    }
  };
  var Iz = function(a, b) {
      if (b.Za()) {
        var c = Hz();
        c && (a.us_privacy = c);
        var d = $n();
        d && (a.gdpr = d);
        var e = Zn();
        e && (a.gdpr_consent = e)
      }
    },
    Jz = function(a, b) {
      if (yh() && (a.gcs = Mh(), b.$e && (a.gcu = "1"), b.Za())) {
        zh() && (a.gcd = Nh());
        var c = b.C(S.W);
        a.adr = void 0 !== c && !1 !== c ? "1" : "0";
        b.$e && (a.gcut = S.oe[b.zg || ""]);
      }
    },
    Kz = function(a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b)
        for (var d in b) Kz(a + "." + d, b[d], c);
      else c[a] = b;
      return c
    },
    Lz = function(a) {
      var b = "https://www.google-analytics.com/g/collect",
        c = tn(a.C(S.wa), "/g/collect");
      if (c) return c;
      var d = !0;
      Lh(S.D) && Lh(S.M) || (d = !1);
      var e = a.Kb(S.ib, a.C(S.ib));
      e && !a.ad() && !1 !== a.C(S.xc) && Mp() && d && (b = "https://analytics.google.com/g/collect");
      return b
    },
    Mz = {};
  Mz[S.si] = "tid";
  Mz[S.Ab] = "cid";
  Mz[S.jb] = "ul";
  Mz[S.Ie] = "_fid";
  Mz[S.sg] = "tt";
  Mz[S.Le] = "ir";
  Mz[S.rg] = "sr";
  var Nz = {};
  Nz[S.Fc] = "sid";
  Nz[S.Re] = "sct";
  Nz[S.Qe] = "seg";
  Nz[S.kb] = "dl";
  Nz[S.Va] = "dr";
  Nz[S.Cc] = "dt";
  Nz[S.ja] = "cu";
  Nz[S.ob] = "uid";
  var Oz = {};
  Oz[S.Xf] = "cc";
  Oz[S.Yf] = "ci";
  Oz[S.Zf] = "cm";
  Oz[S.$f] = "cn";
  Oz[S.ag] = "cs";
  Oz[S.bg] = "ck";
  var Pz = function(a, b, c) {
    function d(A, B) {
      if (void 0 !== B && !S.ui.hasOwnProperty(A)) {
        null === B && (B = "");
        var C;
        if ("_" === A.charAt(0)) {
          e[A] = hf(B, 300)
        } else if (Mz[A]) C = Mz[A], e[C] = hf(B, 300);
        else if (Nz[A]) C = Nz[A], g[C] = hf(B, 300);
        else if (!t(A, B)) {
          var E;
          Oz[A] ? E = !0 : A !== S.yc ? E = !1 : ("object" !== typeof B && q(A, B), E = !0);
          if (E) return;
          q(A, B)
        }
      }
    }
    var e = {},
      f = {},
      g = {};
    e.v = "2";
    e.tid = a.Ya;
    e.gtm = Bn();
    e._p = iz();
    a.bf && (e.sr = a.bf);
    a.Bg && (e._z = a.Bg);
    c && (e.em = c);
    a.Ra && (e._gaz = 1);
    Jz(e, a);
    Iz(e, a);
    a.Jg && (e.gtm_up = "1");
    var h = hb(zi(a.g, S.aa, 1), ".");
    h && (e.gdid = h);
    f.en = hf(a.eventName, 40);
    a.Ed && (f._fv = a.Ig ? 2 : 1);
    a.Fg && (f._nsi = 1);
    a.B && (f._ss = a.Lg ? 2 : 1);
    a.Dd && (f._c = 1);
    0 < a.Sb && (f._et = a.Sb);
    if (a.af) {
      var k = a.C(S.da);
      if (Ka(k))
        for (var n = 0; n < k.length && 200 > n; n++) f["pr" + (n + 1)] = nf(k[n])
    }
    a.Ze && (f._eu = a.Ze);
    var p = hb(zi(a.g, S.aa, 2), ".");
    p && (f.edid = p);
    for (var q = function(A, B) {
        A = hf(A, 40);
        var C = "ep." + A,
          D = "epn." + A;
        A = Ja(B) ? D : C;
        var E = Ja(B) ? C : D;
        f.hasOwnProperty(E) && delete f[E];
        f[A] = hf(B, 100)
      }, t = function(A, B) {
        var C = A.split(".");
        if (A === S.Da && "object" !== typeof B) return q(A, B), !0;
        if (C[0] === S.Da) {
          if ((1 < C.length || "object" === typeof B) && a.Za()) {
            var D = Kz(A, B);
            Qa(D, function(E, G) {
              return void q(E, G)
            })
          }
          return !0
        }
        return !1
      }, u = 0; u < S.vg.length; ++u) {
      var r =
        S.vg[u];
      d(r, a.C(r))
    }
    a.af && d(S.ja, a.C(S.ja));
    Qa(a.Ki, d);
    Qa(a.K, d);
    var v = Ai(a.g),
      w = function(A, B) {
        if (void 0 !== B) {
          null === B && (B = "");
          var C = Oz[A];
          C && (g[C] = hf(B, 300))
        }
      };
    "object" === typeof v[S.yc] ? Qa(v[S.yc], function(A, B) {
      w((S.yc + "_" + A).toLowerCase(), B)
    }) : Qa(v, w);
    var y;
    y = y || a.C(S.Ka) || {};
    !1 !== a.C(S.X) && Np() || (y._npa = "1");
    Qa(y, function(A, B) {
      if (void 0 !== B && (null === B && (B = ""), b[A] !== B)) {
        if (A !== S.ob || g.uid) {
          var C = (Ja(B) ? "upn." : "up.") + hf(A, 24);
          f[C] = hf(B, 36)
        } else g.uid = hf(B, 36);
        b[A] = B
      }
    });
    var x = !1;
    return sf.call(this, {
      Fa: e,
      Ob: g,
      K: f
    }, Lz(a), a.Za(), x) || this
  };
  ma(Pz, sf);
  var Qz = function(a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
        return b[d] || c
      })
    },
    Rz = function(a) {
      var b = a.search;
      return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    },
    Sz = function(a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b
    },
    Tz = function(a, b) {
      var c = new m.XMLHttpRequest;
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = Vi(a),
        h = Sz(g),
        k = Rz(g);
      c.onprogress = function(n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = Qz(e, h), q = p.indexOf("\n\n"); - 1 !== q;) {
            var t;
            a: {
              var u = ca(p.substring(0, q).split("\n")),
                r = u.next().value,
                v = u.next().value;
              if (r.startsWith("event: message") && v.startsWith("data: ")) try {
                t = JSON.parse(v.substring(v.indexOf(":") + 1));
                break a
              } catch (T) {}
              t = void 0
            }
            if (t) {
              var w = t.send_pixel || [];
              if (Array.isArray(w))
                for (var y = 0; y < w.length; y++) {
                  var x = w[y],
                    A = Cn('',
                      0);
                  if (1 === A) {
                    var B = Math.floor(2 * Math.random()) + 1,
                      C, D = x,
                      E = B,
                      G = 0 < D.indexOf("?") ? "&" : "?";
                    C = "" + D + G + "gtmexpsb=" + E;
                    2 === B ? jc(C) : cc(C)
                  } else 2 === A ? jc(x) : cc(x)
                }
            }
            p = p.substring(q + 2);
            q = p.indexOf("\n\n")
          }
          e = p
        }
      };
      c.open(d, k);
      c.send(b);
    };
  var Xz = function(a, b, c, d) {
      var e = a + "?" + b;
      Uz && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
      Vz && d && !$y ? Tz(e, c) : Wz(a, b, c)
    },
    Vz = !1;
  Vz = !0;
  var Uz = !1;
  var Yz = function() {
    this.B = 1;
    this.F = {};
    this.g = new tf;
    this.o = -1
  };
  Yz.prototype.s = function(a, b) {
    var c = this,
      d;
    try {
      d = new Pz(a, this.F, b)
    } catch (n) {
      a.abort()
    }
    var e = az(a);
    e && this.g.B(d) || this.flush();
    if (e && this.g.add(d)) {
      if (0 > this.o) {
        var f = m,
          g = f.setTimeout,
          h;
        a.Za() ? Zz ? (Zz = !1, h = $z) : h = aA : h = 5E3;
        this.o = g.call(f, function() {
          return c.flush()
        }, h)
      }
    } else {
      var k = vf(d, this.B++);
      Xz(d.o, k.Ef, k.body, d.B);
      bA(d, {
        ek: a.We,
        fk: a.Ra,
        sj: String(a.Kb(S.yd, a.C(S.yd))),
        Kc: a.Kc(),
        ef: a.ef(),
        ad: a.ad()
      })
    }
  };
  Yz.prototype.add = function(a) {
    a.o && !$y ? this.O(a) : this.s(a)
  };
  Yz.prototype.flush =
    function() {
      if (this.g.events.length) {
        var a = wf(this.g, this.B++);
        Xz(this.g.g, a.Ef, a.body, this.g.o);
        this.g = new tf;
        0 <= this.o && (m.clearTimeout(this.o), this.o = -1)
      }
    };
  Yz.prototype.O = function(a) {
    var b = this,
      c = a.bh();
    c ? mi(c, function(d) {
      b.s(a, d)
    }) : this.s(a)
  };
  var bA = function(a, b) {
      function c(q) {
        n.push(q + "=" + encodeURIComponent("" + a.Fa[q]))
      }
      var d = b.ek,
        e = b.fk,
        f = b.sj,
        g = b.Kc,
        h = b.ef,
        k = b.ad;
      if (d || e) {
        var n = [];
        c("tid");
        c("cid");
        c("gtm");
        n.push("aip=1");
        a.Ob.uid && n.push("uid=" + encodeURIComponent("" + a.Ob.uid));
        d && (Wz("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")), Fh("https://stats.g.doubleclick.net/g/collect?v=2&" + n.join("&")));
        if (e) {
          n.push("z=" + Na());
          if (!k) {
            var p = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
            p && cc(p + n.join("&"))
          }
        }
      }
    },
    Wz = function(a, b, c) {
      var d = a + "?" + b;
      c ? Rb.sendBeacon && Rb.sendBeacon(d, c) : jc(d)
    },
    $z = Cn('', 500),
    aA = Cn('', 5E3),
    Zz = !0;
  var cA = window,
    dA = document,
    eA = function(a) {
      var b = cA._gaUserPrefs;
      if (b && b.ioo && b.ioo() || a && !0 === cA["ga-disable-" + a]) return !0;
      try {
        var c = cA.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
      } catch (f) {}
      for (var d = sj("AMP_TOKEN", String(dA.cookie), !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e]) return !0;
      return dA.getElementById("__gaOptOutExtension") ? !0 : !1
    };
  var fA = {};
  var gA = function() {
      var a = m.screen;
      return (a ? a.width : 0) + "x" + (a ? a.height : 0)
    },
    hA = function(a) {
      var b = wj("_opt_expid", void 0, void 0, S.M)[0];
      if (b) {
        var c = decodeURIComponent(b).split("$");
        if (3 === c.length) return c[2]
      }
      if (void 0 !== yg.ga4_referrer_override) return yg.ga4_referrer_override;
      var d = Sg("gtm.gtagReferrer." + a.Ya);
      return d ? "" + d : H.referrer
    },
    iA = function() {
      var a = "",
        b = H.location;
      if (b) {
        var c = b.pathname || "";
        "/" != c.charAt(0) && (c = "/" + c);
        a = b.protocol + "//" + b.hostname + c + b.search
      }
      return a
    },
    jA = function(a, b) {
      var c = S.D;
      Lh(c) || Ph(function() {
        b.$e = !0;
        b.zg = c;
        a.Mg(b)
      }, c)
    },
    kA = {};
  fA.vi = "";
  var lA = function(a, b) {
    this.Ra = a;
    this.Sb = b;
    this.O = new Yz;
    this.g = void 0;
    this.B = new gz;
    this.o = this.s = void 0;
    this.F = !1
  };
  l = lA.prototype;
  l.Rj = function(a, b, c) {
    var d = this,
      e = !1;
    if (c.eventModel[S.cc]) {
      e = !0;
      if ("_" === a.charAt(0)) return;
      a !== S.Ba && a !== S.Sa && dz(a) && xg(58);
      mA(c)
    }
    var f = new Zy(this.Ra, a, b, c, this.Sb, e),
      g = [S.M],
      h = !1;
    h = f.Za();
    (f.Kb(S.ib, f.C(S.ib)) || h) && g.push(S.D);
    Qh(function() {
      d.Sj(f)
    }, g)
  };
  l.Sj = function(a) {
    this.o = a;
    try {
      eA(a.Ya) && (xg(28), a.abort());
      0 <= fA.vi.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (xg(33), a.abort());
      var b = a.$d();
      b && b.blacklisted && (xg(34), a.abort());
      var c = H.location.protocol;
      "http:" != c && "https:" != c && (xg(29), a.abort());
      Rb && "preview" == Rb.loadPurpose && (xg(30), a.abort());
      var d =
        yg.grl;
      d || (d = Az(), yg.grl = d);
      d() || (xg(35), a.abort());
      this.Ai(a);
      this.B.mk(a);
      var g = this.th,
        h;
      a.C(S.nb) && !Lh(S.M) && 1 !== a.O && (a.Jg = !0);
      a.eventName === S.Ba ? (a.C(S.nb) && fl(["aw", "dc"]), xz(a), h = zz(a)) : h = {};
      g.call(this, h);
      a.eventName ==
        S.Ba && (a.Li && 0 < Bi(a.g).length && (xg(68), 1 < yg.configCount && xg(69)), a.C(S.oa) || a.abort(), a.g.eventModel[S.aa] && (a.g.containerConfig[S.aa] = a.g.eventModel[S.aa], a.g.eventModel[S.aa] = void 0), a.eventName = S.wc);
      var k = this.g,
        n = this.s,
        p = this.B,
        q = rz(a);
      q || (q = n);
      var t = Ta(a.C(S.Ec)),
        u;
      u = Ta(a.C(S.Ad));
      var r;
      a: {
        if (q) {
          var v = q.split(".");
          if (!(5 > v.length || 7 < v.length)) {
            r = {
              sessionId: v[0],
              Kf: Number(v[1]),
              he: !!Number(v[2]),
              yf: Number(v[3]),
              Lb: Number(v[4] || 0),
              mc: "1" === v[5],
              Wd: "0" !== v[6] ? v[6] : void 0
            };
            break a
          }
        }
        r = void 0
      }
      r && r.Lb && (a.Lb = Math.max(0, r.Lb - Math.max(0, a.s - r.yf)));
      var w = !1;
      r || (w = a.Ed = !0, r = {
        sessionId: String(a.s),
        Kf: 1,
        he: !1,
        yf: a.s,
        mc: !1,
        Wd: void 0
      });
      a.s > r.yf + 60 * t && (w = !0, r.sessionId = String(a.s), r.Kf++, r.he = !1, r.Wd = void 0);
      if (w) a.B = !0, p.uj(a);
      else if (p.oj() > u || a.eventName == S.wc) r.he = !0;
      a.La(S.Fc, r.sessionId);
      a.La(S.Re, r.Kf);
      a.La(S.Qe, r.he ? 1 : 0);
      var B = a.C(S.Ab),
        C = a.O;
      B || (B = lz(a), C = 3);
      B || (B = k, C = 5);
      if (!B) {
        var D = Lh(S.M),
          E = hz();
        B = !E.from_cookie ||
          D ? E.vid : void 0;
        C = 6
      }
      B ? B = "" + B : (a.Ed = a.Fg = !0, B = Jj(), C = 7);
      a.xh(B, C);
      a: {
        a.La(S.kb, iA());
        var G = hA(a);G && a.La(S.Va, G);a.La(S.Cc, H.title);a.La(S.jb, (Rb.language || "").toLowerCase());a.bf = gA()
      }
      if (!1 !== a.C(S.xc) && Mp() && Lh(S.D)) {
        var T = a.Kb(S.ib, a.C(S.ib));
        a.Jj() && (a.We = !!T);
        T && 0 === a.Lb && (a.Lb = 60, a.Ra = !0)
      }
      nA(a);
      a.af = S.wg.hasOwnProperty(a.eventName);
      for (var N = a.C(S.Me) || [], K = 0; K < N.length; K++) {
        var P = N[K];
        if (P.rule_result) {
          a.La(S.sg, P.traffic_type);
          bz(3);
          break
        }
      }
      if (a.C(S.wa)) {
        var R = tz(a) || {},
          O = Bk(R[S.ac], !!R[S.P]) ? tk(!0)._fplc : void 0;
        a.K._fplc = O || (0 < wj("FPLC", void 0, void 0, S.M).length ? void 0 : "0")
      }
      if (void 0 === a.C(S.Le)) {
        var W = a.C(S.zd),
          ja, U;
        a: {
          if (wz) {
            var Aa = tz(a) || {};
            if (Aa && Aa[S.P])
              for (var Ia =
                  Cz(a), Ea = Aa[S.P], oa = 0; oa < Ea.length; oa++)
                if (Ea[oa] instanceof RegExp) {
                  if (Ea[oa].test(Ia)) {
                    U = !0;
                    break a
                  }
                } else if (0 <= Ia.indexOf(Ea[oa])) {
              U = !0;
              break a
            }
          }
          U = !1
        }
        var Q;
        if (!(Q = U))
          if (Dz) Q = !1;
          else {
            var ta = Cz(a),
              La;
            var da = String(a.C(S.ma));
            if ("none" !== da)
              if ("auto" !== da) La = da;
              else {
                if (!Fz) {
                  for (var Ra = String(a.C(S.fb)), pa = Cj(), ab = 0; ab < pa.length; ab++)
                    if ("none" !== pa[ab]) {
                      var $b = String(a.C(S.Ca)) + "_ga_autodomain";
                      if (0 === Fj($b, Ez, {
                          ab: S.M,
                          domain: pa[ab],
                          path: Ra
                        })) {
                        Fj($b, void 0, {
                          ab: S.M,
                          domain: pa[ab],
                          path: Ra
                        });
                        Gz = pa[ab];
                        break
                      }
                    } Fz = !0
                }
                La = Gz
              }
            else La = void 0;
            var ac = La;
            Q = ac ? 0 <= ta.indexOf(ac) : !1
          } if (!(ja = Q)) {
          var Cd;
          if (Cd = W) a: {
            for (var je = W.include_conditions || [], ph = Cz(a), bd = 0; bd < je.length; bd++)
              if (je[bd].test(ph)) {
                Cd = !0;
                break a
              } Cd = !1
          }
          ja = Cd
        }
        ja && (a.La(S.Le, 1), bz(4))
      }
      if (a.eventName == S.Sa) {
        var ke = a.C(S.Ua),
          pf = a.C(S.hb),
          qf = void 0;
        pf(qf || a.C(ke));
        a.abort()
      }
      if (a.K[S.Ic]) delete a.K[S.Ic];
      else {
        var le = a.C(S.De);
        if (le) {
          for (var cd = le.edit_rules || [], dd = !1, Dd = 0; Dd < cd.length; Dd++) {
            var qh;
            a: {
              var Kb = a,
                Ed = cd[Dd];
              if (ww(Kb.eventName, Kb.K, Ed.event_name_predicate, Ed.conditions || [])) {
                if (Ed.new_event_name) {
                  var Uq = Ha(Ed.new_event_name) ? String(Ed.new_event_name) : tw(Kb.eventName, Kb.K, Ed.new_event_name);
                  if (dz(Uq)) {
                    qh = !1;
                    break a
                  }
                  Kb.eventName = String(Uq)
                }
                ez(Kb.eventName, Kb.K, Ed);
                var Vq = Kb.K[S.Ic] = !0;
                bz(2);
                Vq && (Kq(Kb.eventName,
                  Kb.K, Kb.Ya), Kb.abort());
                qh = !0
              } else qh = !1
            }
            qh && (dd = !0)
          }
          for (var Wq = le.synthesis_rules || [], Nk = 0; Nk < Wq.length; Nk++) {
            var rh = a,
              rf = Wq[Nk];
            if (ww(rh.eventName, rh.K, rf.event_name_predicate, rf.conditions || [])) {
              var Ok = rf.new_event_name;
              if (!dz(Ok)) {
                var Pk = rf.merge_source_event_params ? Bc(rh.K) : {};
                Pk[S.Ic] = !0;
                ez(Ok, Pk, rf);
                Kq(Ok, Pk, rh.Ya);
                bz(1)
              }
            }
          }
        }
      }
      var Qk =
        a.K[S.Se];
      if (Ka(Qk))
        for (var Rk = 0; Rk < Qk.length; Rk++) bz(Qk[Rk]);
      var Xq = wg("GA4_EVENT");
      Xq && (a.Ze = Xq);
      var sA = this.th,
        Yq = this.g,
        Sk;
      var Tk = sz(a);
      Tk ? (qz(Tk, a) || (xg(25), a.abort()), Sk = Tk) : Sk = void 0;
      var tA = Sk,
        sh;
      var ed = a.K[S.Ab];
      Yq && ed === Yq ? sh = ed : ed ? (ed = "" + ed, nz(ed, a) || (xg(31), a.abort()), jz(ed, Lh(S.M)), sh = ed) : (xg(32), a.abort(), sh = "");
      sA.call(this, {
        clientId: sh,
        wh: tA
      });
      this.lk();
      a.Za() && ("page_view" === a.eventName || a.Dd) && jA(this, a);
      this.B.Gf();
      this.Mg(a);
      a.g.onSuccess()
    } catch (yA) {
      a.g.onFailure()
    }
    delete ug.GA4_EVENT
  };
  l.Mg = function(a) {
    this.O.add(a)
  };
  l.th = function(a) {
    var b = a.clientId,
      c = a.wh;
    b && c && (this.g = b, this.s = c)
  };
  l.flush = function() {
    this.O.flush()
  };
  l.lk = function() {
    var a = this;
    if (!this.F) {
      var b = Lh(S.M);
      Oh([S.M], function() {
        var c = Lh(S.M);
        if (b ^ c && a.o && a.s && a.g) {
          var d = a.g;
          if (c) {
            var e = lz(a.o);
            e ? (a.g = e, a.s = rz(a.o)) : (nz(a.g, a.o), qz(a.s, a.o), jz(a.g, !0));
          } else {
            a.s = void 0;
            a.g = void 0;
          }
          b = c
        }
      });
      this.F = !0
    }
  };
  l.Ai = function(a) {
    a.eventName !== S.Sa && this.B.zi(a)
  };
  var nA = function(a) {
    var b = function(c) {
      return !!c && c.conversion
    };
    a.Dd = b(a.$d());
    a.Ed && (a.Ig = b(a.$d("first_visit")));
    a.B && (a.Lg = b(a.$d("session_start")))
  };

  function mA(a) {
    delete a.eventModel[S.cc];
    oA(a.eventModel)
  }
  var oA = function(a) {
    Qa(a, function(c) {
      "_" === c.charAt(0) && delete a[c]
    });
    var b = a[S.Ka] || {};
    Qa(b, function(c) {
      "_" === c.charAt(0) && delete b[c]
    })
  };
  var pA = function(a) {
      if ("prerender" == H.visibilityState) return !1;
      a();
      return !0
    },
    qA = function(a) {
      if (!pA(a)) {
        var b = !1,
          c = function() {
            !b && pA(a) && (b = !0, ec(H, "visibilitychange", c), xg(55))
          };
        dc(H, "visibilitychange", c);
        xg(54)
      }
    };
  var rA = function(a, b, c) {
      Jq(b, c, a)
    },
    uA = function(a, b, c) {
      Jq(b, c, a, !0)
    },
    wA = function(a, b) {
      var c = new lA(a, b);
      qA(function() {
        vA(a, c)
      });
    };

  function vA(a, b) {
    var c = b.B;
    Iq(a, function(d, e, f, g) {
      b.Rj(e, f, g)
    });
    c.Xj(function() {
      Gq().flush();
      1E3 <= c.Zd() && Rb.sendBeacon && rA(a, S.ue, {});
      $y = !0;
      b.flush();
      c.uh(function() {
        $y = !1;
        c.uh(void 0)
      })
    });
  }
  var Z = {
    h: {}
  };


  Z.h.ehl = ["google"],
    function() {
      function a(k) {
        return k.target && k.target.location && k.target.location.href ? k.target.location.href : Ls()
      }

      function b(k, n) {
        dc(k, "hashchange", function(p) {
          var q = a(p);
          n({
            source: "hashchange",
            state: null,
            url: Ns(q),
            J: Ms(q)
          })
        })
      }

      function c(k, n) {
        dc(k, "popstate", function(p) {
          var q = a(p);
          n({
            source: "popstate",
            state: p.state,
            url: Ns(q),
            J: Ms(q)
          })
        })
      }

      function d(k, n, p) {
        var q = n.history,
          t = q[k];
        if (Ga(t)) try {
          q[k] = function(u, r, v) {
            t.apply(q, [].slice.call(arguments, 0));
            p({
              source: k,
              state: u,
              url: Ns(Ls()),
              J: Ms(Ls())
            })
          }
        } catch (u) {}
      }

      function e() {
        var k = {
          source: null,
          state: X("history").state || null,
          url: Ns(Ls()),
          J: Ms(Ls())
        };
        return function(n, p) {
          var q = k,
            t = {};
          t[q.source] = !0;
          t[n.source] = !0;
          if (!t.popstate || !t.hashchange || q.J != n.J) {
            var u = {
              event: "gtm.historyChange-v2",
              "gtm.historyChangeSource": n.source,
              "gtm.oldUrlFragment": k.J,
              "gtm.newUrlFragment": n.J,
              "gtm.oldHistoryState": k.state,
              "gtm.newHistoryState": n.state,
              "gtm.oldUrl": k.url,
              "gtm.newUrl": n.url,
              "gtm.triggers": p.join(",")
            };
            k = n;
            Ps(u)
          }
        }
      }

      function f(k, n) {
        var p = "" +
          n;
        if (g[p]) g[p].push(k);
        else {
          var q = [k];
          g[p] = q;
          var t = e(),
            u = -1;
          h.push(function(r) {
            0 <= u && Is(u);
            n ? u = Js(function() {
              t(r, q);
              u = -1
            }, n) : t(r, q)
          })
        }
      }
      var g = {},
        h = [];
      (function(k) {
        Z.__ehl = k;
        Z.__ehl.m = "ehl";
        Z.__ehl.isVendorTemplate = !0;
        Z.__ehl.priorityOverride = 0
      })(function(k) {
        var n = X("self"),
          p = k.vtp_uniqueTriggerId || "0",
          q = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
        0 > q ? q = 0 : isNaN(q) && (q = 1E3);
        if (Us("ehl")) {
          var t = ns("ehl", "reg");
          t ? (t(p, q),
            I(k.vtp_gtmOnSuccess)) : I(k.vtp_gtmOnFailure)
        } else {
          var u = function(r) {
            for (var v = 0; v < h.length; v++) h[v](r)
          };
          b(n, u);
          c(n, u);
          d("pushState", n, u);
          d("replaceState", n, u);
          f(p, q);
          ls("ehl", "reg", f);
          Vs("ehl");
          I(k.vtp_gtmOnSuccess)
        }
      })
    }();



  Z.h.read_container_data = ["google"],
    function() {
      (function(a) {
        Z.__read_container_data = a;
        Z.__read_container_data.m = "read_container_data";
        Z.__read_container_data.isVendorTemplate = !0;
        Z.__read_container_data.priorityOverride = 0
      })(function() {
        return {
          assert: function() {},
          R: function() {
            return {}
          }
        }
      })
    }();
  Z.h.c = ["google"],
    function() {
      (function(a) {
        Z.__c = a;
        Z.__c.m = "c";
        Z.__c.isVendorTemplate = !0;
        Z.__c.priorityOverride = 0
      })(function(a) {
        Xs(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value
      })
    }();
  Z.h.e = ["google"],
    function() {
      (function(a) {
        Z.__e = a;
        Z.__e.m = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0
      })(function(a) {
        return String(a.vtp_gtmCachedValues.event)
      })
    }();

  Z.h.u = ["google"],
    function() {
      var a = function(b) {
        return {
          toString: function() {
            return b
          }
        }
      };
      (function(b) {
        Z.__u = b;
        Z.__u.m = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0
      })(function(b) {
        var c;
        c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Os("gtm.url", 1)) || Ls();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Ns(String(c));
        var e = Vi(String(c)),
          f;
        if ("QUERY" === d) a: {
          var g = b[a("vtp_multiQueryKeys").toString()],
            h = b[a("vtp_queryKey").toString()] || "",
            k = b[a("vtp_ignoreEmptyQueryParam").toString()],
            n;g ? Ka(h) ?
          n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
          for (var p = 0; p < n.length; p++) {
            var q = Ti(e, "QUERY", void 0, void 0, n[p]);
            if (void 0 != q && (!k || "" !== q)) {
              f = q;
              break a
            }
          }
          f = void 0
        }
        else f = Ti(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
        return f
      })
    }();
  Z.h.v = ["google"],
    function() {
      (function(a) {
        Z.__v = a;
        Z.__v.m = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Os(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Xs(d, "v", a.vtp_gtmEventId);
        return d
      })
    }();



  Z.h.aev = ["google"],
    function() {
      function a(t, u, r, v, w) {
        w || (w = "element");
        var y = u + "." + r,
          x;
        if (n.hasOwnProperty(y)) x = n[y];
        else {
          var A = t[w];
          if (A && (x = v(A), n[y] = x, p.push(y), 35 < p.length)) {
            var B = p.shift();
            delete n[B]
          }
        }
        return x
      }

      function b(t, u, r) {
        var v = t[q[u]];
        return void 0 !== v ? v : r
      }

      function c(t, u) {
        if (!t) return !1;
        var r = d(Ls());
        Ka(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
        for (var v = [r], w = 0; w < u.length; w++) {
          var y = u[w];
          if (y.hasOwnProperty("is_regex"))
            if (y.is_regex) try {
              y = new RegExp(y.domain)
            } catch (B) {
              continue
            } else y =
              y.domain;
          var x = d(t);
          if (y instanceof RegExp) {
            if (y.test(x)) return !1
          } else {
            var A = y;
            if (0 != A.length) {
              if (0 <= x.indexOf(A)) return !1;
              v.push(d(A))
            }
          }
        }
        return !Nx(t, v)
      }

      function d(t) {
        k.test(t) || (t = "http://" + t);
        return Ti(Vi(t), "HOST", !0)
      }

      function e(t, u, r, v) {
        switch (t) {
          case "SUBMIT_TEXT":
            return a(u, r, "FORM." + t, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(u, r, "FORM." + t, g);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return h(u, "id", v);
          case "INTERACTED_FIELD_NAME":
            return h(u, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return h(u,
              "type", v);
          case "INTERACTED_FIELD_POSITION":
            var y = u.interactedFormFieldPosition;
            return void 0 === y ? v : y;
          case "INTERACT_SEQUENCE_NUMBER":
            var x = u.interactSequenceNumber;
            return void 0 === x ? v : x;
          default:
            return v
        }
      }

      function f(t) {
        switch (t.tagName.toLowerCase()) {
          case "input":
            return fc(t, "value");
          case "button":
            return gc(t);
          default:
            return null
        }
      }

      function g(t) {
        if ("form" === t.tagName.toLowerCase() && t.elements) {
          for (var u = 0, r = 0; r < t.elements.length; r++) rs(t.elements[r]) && u++;
          return u
        }
      }

      function h(t, u, r) {
        var v = t.interactedFormField;
        return v && fc(v, u) || r
      }
      var k = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget"
        };
      (function(t) {
        Z.__aev = t;
        Z.__aev.m = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0
      })(function(t) {
        var u = t.vtp_gtmEventId,
          r = t.vtp_defaultValue,
          v = t.vtp_varType,
          w = t.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var y = w.element;
            return y && y.tagName || r;
          case "TEXT":
            return a(w, u, v, gc) || r;
          case "URL":
            var x;
            a: {
              var A = String(w.elementUrl || r || ""),
                B = Vi(A),
                C = String(t.vtp_component || "URL");
              switch (C) {
                case "URL":
                  x = A;
                  break a;
                case "IS_OUTBOUND":
                  x = c(A, t.vtp_affiliatedDomains);
                  break a;
                default:
                  x = Ti(B, C, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
              }
            }
            return x;
          case "ATTRIBUTE":
            var D;
            if (void 0 === t.vtp_attribute) D = b(w, v, r);
            else {
              var E = w.element;
              D = E && fc(E, t.vtp_attribute) ||
                r || ""
            }
            return D;
          case "MD":
            var G = t.vtp_mdValue,
              T = a(w, u, "MD", Ds);
            return G && T ? Gs(T, G) || r : T || r;
          case "FORM":
            return e(String(t.vtp_component || "SUBMIT_TEXT"), w, u, r);
          default:
            var N = b(w, v, r);
            Xs(N, "aev", t.vtp_gtmEventId);
            return N
        }
      })
    }();
  Z.h.dlm = ["google"],
    function() {
      (function(a) {
        Z.__dlm = a;
        Z.__dlm.m = "dlm";
        Z.__dlm.isVendorTemplate = !0;
        Z.__dlm.priorityOverride = 0
      })(function(a) {
        var b = Ox(a.vtp_userInput || [], "key", "value") || {};
        a.vtp_synchronousWrite ? Qa(b, function(c, d) {
          Vg(c, d)
        }) : Ps(b);
        I(a.vtp_gtmOnSuccess)
      })
    }();

  Z.h.gct = ["google"],
    function() {
      function a(d) {
        for (var e = [], f = 0; f < d.length; f++) try {
          e.push(new RegExp(d[f]))
        } catch (g) {}
        return e
      }

      function b(d) {
        return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
      }

      function c(d) {
        for (var e = [], f = 0; f < d.length; f++) {
          var g = d[f].matchValue,
            h;
          switch (d[f].matchType) {
            case "BEGINS_WITH":
              h = "^" + b(g);
              break;
            case "ENDS_WITH":
              h = b(g) + "$";
              break;
            case "EQUALS":
              h = "^" + b(g) + "$";
              break;
            case "REGEX":
              h = g;
              break;
            default:
              h = b(g)
          }
          e.push(h)
        }
        return e
      }(function(d) {
        Z.__gct = d;
        Z.__gct.m = "gct";
        Z.__gct.isVendorTemplate = !0;
        Z.__gct.priorityOverride = 0
      })(function(d) {
        var e = {};
        0 < d.vtp_sessionDuration && (e[S.Ec] = d.vtp_sessionDuration);
        e[S.vd] = d.vtp_eventSettings;
        e[S.De] = d.vtp_dynamicEventSettings;
        e[S.ib] = 1 === d.vtp_googleSignals;
        e[S.yd] = d.vtp_foreignTld;
        e[S.Je] = 1 === d.vtp_restrictDomain;
        e[S.Me] = d.vtp_internalTrafficResults;
        var f = S.na,
          g = d.vtp_linker;
        g && g[S.P] && (g[S.P] = a(g[S.P]));
        e[f] = g;
        var h = S.zd,
          k = d.vtp_referralExclusionDefinition;
        k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
        e[h] = k;
        var n = Nq(d.vtp_trackingId),
          p = n.referral_exclusion_conditions;
        p && (p.length && "object" === typeof p[0] && (p = c(p)), e[S.zd] = {
          include_conditions: a(p)
        });
        var q = n.cross_domain_conditions;
        if (q) {
          q.length && "object" === typeof q[0] && (q = c(q));
          var t = {};
          e[S.na] = (t[S.P] = a(q), t[S.bc] = !0, t[S.ac] = !0, t[S.Bc] = "query", t)
        }
        wA(d.vtp_trackingId, e);
        I(d.vtp_gtmOnSuccess)
      })
    }();



  Z.h.get = ["google"],
    function() {
      (function(a) {
        Z.__get = a;
        Z.__get.m = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable ? uA : rA)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess()
      })
    }();








  Z.h.lcl = [],
    function() {
      function a() {
        var c = X("document"),
          d = 0,
          e = function(f) {
            var g = f.target;
            if (g && 3 !== f.which && !(f.bd || f.timeStamp && f.timeStamp === d)) {
              d = f.timeStamp;
              g = ic(g, ["a", "area"], 100);
              if (!g) return f.returnValue;
              var h = f.defaultPrevented || !1 === f.returnValue,
                k = ns("lcl", h ? "nv.mwt" : "mwt", 0),
                n;
              n = h ? ns("lcl", "nv.ids", []) : ns("lcl", "ids", []);
              if (n.length) {
                var p = js(g, "gtm.linkClick", n);
                if (b(f, g, c) && !h && k && g.href) {
                  var q = !!Ma(String(kc(g, "rel") || "").split(" "), function(v) {
                    return "noreferrer" === v.toLowerCase()
                  });
                  q && xg(36);
                  var t = X((kc(g, "target") || "_self").substring(1)),
                    u = !0,
                    r = Tr(function() {
                      var v;
                      if (v = u && t) {
                        var w;
                        a: if (q) {
                          var y;
                          try {
                            y = new MouseEvent(f.type, {
                              bubbles: !0
                            })
                          } catch (x) {
                            if (!c.createEvent) {
                              w = !1;
                              break a
                            }
                            y = c.createEvent("MouseEvents");
                            y.initEvent(f.type, !0, !0)
                          }
                          y.bd = !0;
                          f.target.dispatchEvent(y);
                          w = !0
                        } else w = !1;
                        v = !w
                      }
                      v && (t.location.href = kc(g, "href"))
                    }, k);
                  if (Ps(p, r, k)) u = !1;
                  else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                } else Ps(p, function() {}, k || 2E3);
                return !0
              }
            }
          };
        dc(c, "click", e, !1);
        dc(c, "auxclick",
          e, !1)
      }

      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
        var f = kc(d, "href"),
          g = f.indexOf("#"),
          h = kc(d, "target");
        if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
        if (0 < g) {
          var k = Ns(f),
            n = Ns(e.location);
          return k !== n
        }
        return !0
      }(function(c) {
        Z.__lcl = c;
        Z.__lcl.m = "lcl";
        Z.__lcl.isVendorTemplate = !0;
        Z.__lcl.priorityOverride = 0
      })(function(c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2E3;
        var g = c.vtp_uniqueTriggerId || "0";
        if (d) {
          var h = function(n) {
            return Math.max(f, n)
          };
          ms("lcl", "mwt", h, 0);
          e || ms("lcl", "nv.mwt", h, 0)
        }
        var k = function(n) {
          n.push(g);
          return n
        };
        ms("lcl", "ids", k, []);
        e || ms("lcl", "nv.ids", k, []);
        Us("lcl") || (a(), Vs("lcl"));
        I(c.vtp_gtmOnSuccess)
      })
    }();
  var xA = {};
  xA.dataLayer = Tg;
  xA.callback = function(a) {
    Kg.hasOwnProperty(a) && Ga(Kg[a]) && Kg[a]();
    delete Kg[a]
  };
  xA.bootstrap = 0;
  xA._spx = !1;
  (function(a) {
    if (!m["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (H.referrer) {
        var c = Vi(H.referrer);
        b = "cct.google" === Si(c, "host")
      }
      if (!b) {
        var d = wj("googTaggyReferrer");
        b = d.length && d[0].length
      }
      b && (m["__TAGGY_INSTALLED"] = !0, Yb("https://cct.google/taggy/agent.js"))
    }
    var f = function(q) {
        var t = "GTM",
          u = "GTM";
        t = "OGT", u = "GTAG";
        var r = m["google.tagmanager.debugui2.queue"];
        r || (r = [], m["google.tagmanager.debugui2.queue"] = r, Yb("https://" + J.pe + "/debug/bootstrap?id=" + J.I + "&src=" + u + "&cond=" + q + "&gtm=" + Bn()));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: Sb,
            containerProduct: t,
            debug: !1,
            id: J.I
          }
        };
        v.data.resume = function() {
          a()
        };
        J.Oh && (v.data.initialPublish = !0);
        r.push(v)
      },
      g = void 0,
      h = Ti(m.location, "query", !1, void 0, "gtm_debug");
    cs(h) && (g = 2);
    if (!g && H.referrer) {
      var k = Vi(H.referrer);
      "tagassistant.google.com" === Si(k, "host") && (g = 3)
    }
    if (!g) {
      var n = wj("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4)
    }
    if (!g) {
      var p = H.documentElement.getAttribute("data-tag-assistant-present");
      cs(p) && (g = 5)
    }
    g && Sb ? f(g) : a()
  })(function() {
    var a = !1;
    a && Rl("INIT");
    jh().o();
    Yn();
    Ck.enable_gbraid_cookie_write = !0;
    var b = !!yg[J.I];
    if (b) {
      var c = yg.zones;
      c && c.unregisterChild(J.I);
    } else {
      for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) ye.push(g[h]);
      for (var k = f.tags || [], n = 0; n < k.length; n++) Be.push(k[n]);
      for (var p = f.predicates || [], q = 0; q < p.length; q++) Ae.push(p[q]);
      for (var t = f.rules || [], u = 0; u < t.length; u++) {
        for (var r = t[u], v = {},
            w = 0; w < r.length; w++) v[r[w][0]] = Array.prototype.slice.call(r[w], 1);
        ze.push(v)
      }
      De = Z;
      Ee = zt;
      af = new $e;
      var y = data.sandboxed_scripts,
        x = data.security_groups,
        A = data.runtime || [],
        B = data.runtime_lines;
      Gx = new Wd;
      Jx();
      xe = Hx();
      var C = Gx,
        D = Dx();
      qb(C.g, "require", D);
      for (var E = 0; E < A.length; E++) {
        var G = A[E];
        if (!Ka(G) || 3 > G.length) {
          if (0 === G.length) continue;
          break
        }
        B && B[E] && B[E].length && Ne(G, B[E]);
        Gx.execute(G)
      }
      if (void 0 !== y)
        for (var T = ["sandboxedScripts"], N = 0; N < y.length; N++) {
          var K = y[N].replace(/^_*/, "");
          Lg[K] = T
        }
      Kx(x);
      yg[J.I] =
        xA;
      bb(Lg, Z.h);
      Ge = Ue;
      as();
      Dl = !1;
      El = 0;
      if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) Gl();
      else {
        dc(H, "DOMContentLoaded", Gl);
        dc(H, "readystatechange", Gl);
        if (H.createEventObject && H.documentElement.doScroll) {
          var P = !0;
          try {
            P = !m.frameElement
          } catch (U) {}
          P && Hl()
        }
        dc(m, "load", Gl)
      }
      pr = !1;
      "complete" === H.readyState ? rr() : dc(m, "load", rr);
      Mm && m.setInterval(Gm, 864E5);
      Ig = Ya();
      xA.bootstrap = Ig;
      if (a) {
        var ja = Sl("INIT");
      }
    }
  });

})()
