import { resolveComponent, openBlock, createBlock, createVNode, mergeProps, toHandlers, withCtx, renderSlot, createCommentVNode, Fragment, renderList, toDisplayString } from 'vue';

var script = {
  name: 'EditTable',
  props: {
    tableData: {
      required: true,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    columns: {
      required: true,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    selection: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  }
};

var _hoisted_1 = {
  slot: "header",
  "slot-scope": "scope"
};
var _hoisted_2 = {
  "slot-scope": "scope"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_input = resolveComponent("el-input");

  var _component_el_table_column = resolveComponent("el-table-column");

  var _component_el_table = resolveComponent("el-table");

  return openBlock(), createBlock("div", null, [createVNode(_component_el_table, mergeProps({
    data: $props.tableData
  }, _ctx.$attrs, toHandlers(_ctx.$listeners), {
    style: {
      "width": "100%"
    }
  }), {
    "default": withCtx(function () {
      return [$props.selection ? renderSlot(_ctx.$slots, "slotSelection", {
        key: 0
      }) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList($props.columns, function (item, index) {
        return openBlock(), createBlock(_component_el_table_column, mergeProps({
          key: index
        }, item || {}), {
          "default": withCtx(function () {
            return [createVNode("template", _hoisted_1, [createVNode("span", {
              "class": item["class"]
            }, toDisplayString(_ctx.scope.column.label), 3)]), createVNode("template", _hoisted_2, [item && item.slotName ? (openBlock(), createBlock("section", _hoisted_3, [renderSlot(_ctx.$slots, item.prop, {
              scope: _ctx.scope
            })])) : (openBlock(), createBlock("section", _hoisted_4, [item && item.edit ? (openBlock(), createBlock("div", _hoisted_5, [createVNode(_component_el_input, {
              modelValue: _ctx.scope.row[item.prop],
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return _ctx.scope.row[item.prop] = $event;
              },
              placeholder: "请输入"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : (openBlock(), createBlock("div", _hoisted_6, toDisplayString(_ctx.scope.row[item.prop]), 1))]))])];
          }),
          _: 2
        }, 1040);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
  }, 16, ["data"])]);
}

script.render = render;

// 导入组件，组件必须声明 name

script.install = function (Vue) {
  Vue.component(script.name, script);
}; // 默认导出组件

export default script;
