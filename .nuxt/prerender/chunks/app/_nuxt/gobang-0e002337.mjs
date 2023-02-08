import __nuxt_component_0 from './index-0ad9cbe7.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@vue/reactivity/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ofetch/dist/node.mjs';
import './app.config-d99d58fe.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/h3/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/destr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unenv/runtime/npm/cross-fetch.mjs';
import 'events';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unenv/runtime/npm/debug.mjs';
import 'util';
import 'crypto';
import 'url';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/bufferutil/index.js';
import 'buffer';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/utf-8-validate/index.js';
import 'http';
import 'https';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/typedarray-to-buffer/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/yaeti/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import '../../nitro/config.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/scule/dist/index.mjs';

const mapWidth = 15;
let cleanTable = [];
for (let i = 0; i < mapWidth; i++) {
  cleanTable.push(new Array(mapWidth).fill(""));
}
const _sfc_main = {
  data() {
    return {
      cells: cleanTable,
      historyCells: [],
      player1: "\u26AB",
      player2: "\u{1F7E2}",
      turn: "",
      winner: "",
      isDraw: false
    };
  },
  mounted() {
    this.turn = this.player1;
  },
  computed: {
    isEmptyHistory() {
      return this.historyCells.length === 0;
    },
    isWin() {
      return this.winner.length !== 0;
    }
  },
  methods: {
    checkChess(rIdx, cIdx) {
      if (!this.isOccupied(rIdx, cIdx)) {
        const value = this.turn;
        this.switchTurn();
        const currentCells = this.cells.map((row) => row.slice());
        this.historyCells.push(currentCells);
        this.cells[rIdx][cIdx] = value;
        this.checkWin(value);
      } else {
        console.log("\u8BE5\u4F4D\u7F6E\u5DF2\u88AB\u5360\u7528");
      }
    },
    isOccupied(rIdx, cIdx) {
      return this.cells[rIdx][cIdx] !== "";
    },
    switchTurn() {
      if (this.turn === this.player1) {
        this.turn = this.player2;
      } else {
        this.turn = this.player1;
      }
    },
    checkWin(lastChess) {
      for (let row of this.cells) {
        for (let c = 0; c < row.length - 4; c++) {
          if (row.slice(c, c + 5).every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
      for (let r = 0; r < this.cells.length - 4; r++) {
        for (let c = 0; c < this.cells.length; c++) {
          const column = this.cells.map((row, idx) => row[c]);
          if (column.slice(r, r + 5).every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
      for (let r = 0; r < this.cells.length - 4; r++) {
        for (let c = 0; c < this.cells.length - 4; c++) {
          let scanZone = [];
          for (let i = 0; i < 5; i++) {
            scanZone.push(this.cells[r + i][c + i]);
          }
          if (scanZone.every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
      for (let r = 4; r < this.cells.length; r++) {
        for (let c = 0; c < this.cells.length - 4; c++) {
          let scanZone = [];
          for (let i = 0; i < 5; i++) {
            scanZone.push(this.cells[r - i][c + i]);
          }
          if (scanZone.every((i) => i === lastChess)) {
            this.winner = lastChess;
          }
        }
      }
    },
    refreshMap() {
      console.log("refresh");
      let newTable = new Array();
      for (let i = 0; i < 15; i++) {
        newTable.push(new Array(15).fill(""));
      }
      this.cells = newTable;
      this.historyCells = [];
      this.winner = "";
      this.turn = this.player1;
      this.isDraw = false;
    },
    lastTurn() {
      this.cells = this.historyCells.pop();
      this.switchTurn();
      this.winner = "";
      this.isDraw = false;
    },
    draw() {
      this.isDraw = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Text = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0c7a00e9><div class="title" data-v-0c7a00e9>`);
  _push(ssrRenderComponent(_component_Text, { h1: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gobang Game`);
      } else {
        return [
          createTextVNode("Gobang Game")
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($data.isDraw) {
    _push(`<span data-v-0c7a00e9><h3 data-v-0c7a00e9>\u{1F91C}\u{1F91B} Draw. Let&#39;s have another round!</h3></span>`);
  } else if (!$options.isWin) {
    _push(`<span data-v-0c7a00e9><h3 data-v-0c7a00e9> It&#39;s ${ssrInterpolate($data.turn)} &#39;s turn, \u23F3 Round ${ssrInterpolate(parseInt($data.historyCells.length / 2) + 1)}</h3></span>`);
  } else {
    _push(`<span data-v-0c7a00e9><h3 data-v-0c7a00e9>\u{1F389} The winner is ${ssrInterpolate($data.winner)}, Let&#39;s have another round!</h3></span>`);
  }
  _push(`</div><div class="buttonPanel" data-v-0c7a00e9><button class="btn green" data-v-0c7a00e9>Restart</button><button class="btn blue"${ssrIncludeBooleanAttr($options.isWin) ? " disabled" : ""} data-v-0c7a00e9>Draw</button><button class="btn orange"${ssrIncludeBooleanAttr($options.isEmptyHistory) ? " disabled" : ""} data-v-0c7a00e9> Undo </button></div><div class="mapContainer" data-v-0c7a00e9><div class="chessMap" data-v-0c7a00e9><!--[-->`);
  ssrRenderList($data.cells, (row, rIdx) => {
    _push(`<div class="row" data-v-0c7a00e9><!--[-->`);
    ssrRenderList(row, (num, cIdx) => {
      _push(`<div class="${ssrRenderClass([{ disabled: $options.isWin, red: $data.turn === $data.player2 }, "cell"])}" data-v-0c7a00e9>${ssrInterpolate(num)}</div>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game/gobang.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gobang = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0c7a00e9"]]);

export { gobang as default };
//# sourceMappingURL=gobang-0e002337.mjs.map
