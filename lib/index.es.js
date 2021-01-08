import { pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, createVNode, renderSlot, createCommentVNode, mergeProps, toHandlers, Fragment, renderList, toDisplayString, withScopeId, createTextVNode, withCtx } from 'vue';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var script = {
  name: 'AwesomeTableList',
  props: {
    /**
     * 列表筛选
     * 表单生成规则数组对象  生成规则：http://www.form-create.com/v2/guide/rule.html
     * 生成规则数组中一个对象就是一个表单项（是一个json对象），
     * 在里面可以对应的表单名称、类型、属性、值、样式、类名、是否必填、错误提示等。
     */
    formRules: {
      required: true,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    formOptions: {
      required: false,
      type: Object,
      "default": function _default() {
        return {
          form: {
            inline: true,
            labelPosition: 'left',
            labelWidth: '100px'
          },
          submitBtn: {
            show: false
          } // 默认隐藏form-create 自带的提交按钮

        };
      }
    },

    /** 是否显示列表统计 */
    isShowStatistics: {
      required: false,
      type: Boolean,
      "default": true
    },

    /** 表格相关 */
    selection: {
      required: false,
      type: Boolean,
      "default": false
    },
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

    /** 分页参数 */
    pageNo: {
      required: false,
      type: Number,
      "default": 1
    },
    pageSize: {
      required: false,
      type: Number,
      "default": 10
    },
    count: {
      required: true,
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      fApi: {}
    };
  },
  computed: {
    _pageNo: function _pageNo() {
      return this.pageNo;
    }
  },
  created: function created() {},
  methods: {
    // 查询
    _handleSearch: function _handleSearch() {
      this.$emit('handle-search', this.getCurrentFormData());
    },
    // 重置
    _handleReset: function _handleReset() {
      this.fApi.resetFields(); // 清空表单数据 ，实时数据清空，上一次数据依然保留

      this.$emit('reset-search', this.getCurrentFormData());
    },
    // 分页
    _handleCurrentChange: function _handleCurrentChange(pageNo) {
      this.$emit('page-change', {
        pageNo: pageNo,
        formData: this.getLastFormData()
      });
    },
    // 获取form 实时数据
    getCurrentFormData: function getCurrentFormData() {
      return this.fApi.form;
    },
    // 获取form 上一次数据
    getLastFormData: function getLastFormData() {
      return this.fApi.formData();
    },
    // 获取form-create 的实例对象
    getFApi: function getFApi() {
      return this.fApi;
    }
  }
};

var _withId = /*#__PURE__*/withScopeId("data-v-37332b8e");

pushScopeId("data-v-37332b8e");

var _hoisted_1 = {
  "class": "toolbar-panel"
};
var _hoisted_2 = {
  "class": "toolbar-item"
};

var _hoisted_3 = /*#__PURE__*/createTextVNode("查询");

var _hoisted_4 = /*#__PURE__*/createTextVNode("重置");

var _hoisted_5 = {
  key: 0,
  "class": "toolbar-totaltip mb-10"
};
var _hoisted_6 = {
  slot: "header",
  "slot-scope": "scope"
};
var _hoisted_7 = {
  "slot-scope": "scope"
};
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  key: 1
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  key: 1
};
var _hoisted_12 = {
  "class": "section-pagination"
};

popScopeId();

var render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_form_create = resolveComponent("form-create");

  var _component_el_button = resolveComponent("el-button");

  var _component_el_input = resolveComponent("el-input");

  var _component_el_table_column = resolveComponent("el-table-column");

  var _component_el_table = resolveComponent("el-table");

  var _component_el_pagination = resolveComponent("el-pagination");

  return openBlock(), createBlock("div", null, [createVNode("section", _hoisted_1, [createVNode(_component_form_create, {
    modelValue: $data.fApi,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.fApi = $event;
    }),
    rule: $props.formRules,
    option: $props.formOptions
  }, null, 8, ["modelValue", "rule", "option"]), createVNode("div", _hoisted_2, [createVNode(_component_el_button, {
    type: "primary",
    onClick: $options._handleSearch
  }, {
    "default": _withId(function () {
      return [_hoisted_3];
    }),
    _: 1
  }, 8, ["onClick"]), createVNode(_component_el_button, {
    onClick: $options._handleReset
  }, {
    "default": _withId(function () {
      return [_hoisted_4];
    }),
    _: 1
  }, 8, ["onClick"]), renderSlot(_ctx.$slots, "filterHandle")])]), $props.isShowStatistics ? (openBlock(), createBlock("section", _hoisted_5, [renderSlot(_ctx.$slots, "statistics")])) : createCommentVNode("", true), createVNode("section", null, [createVNode(_component_el_table, mergeProps({
    data: $props.tableData
  }, _ctx.$attrs, toHandlers(_ctx.$listeners), {
    style: {
      "width": "100%"
    }
  }), {
    "default": _withId(function () {
      return [$props.selection ? renderSlot(_ctx.$slots, "slotSelection", {
        key: 0
      }) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList($props.columns, function (item, index) {
        return openBlock(), createBlock(_component_el_table_column, mergeProps({
          key: index
        }, item || {}), {
          "default": _withId(function () {
            return [createVNode("template", _hoisted_6, [createVNode("span", {
              "class": item["class"]
            }, toDisplayString(_ctx.scope.column.label), 3)]), createVNode("template", _hoisted_7, [item && item.slotName ? (openBlock(), createBlock("section", _hoisted_8, [renderSlot(_ctx.$slots, item.prop, {
              scope: _ctx.scope
            })])) : (openBlock(), createBlock("section", _hoisted_9, [item && item.edit ? (openBlock(), createBlock("div", _hoisted_10, [createVNode(_component_el_input, {
              modelValue: _ctx.scope.row[item.prop],
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return _ctx.scope.row[item.prop] = $event;
              },
              placeholder: "请输入"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : (openBlock(), createBlock("div", _hoisted_11, toDisplayString(_ctx.scope.row[item.prop]), 1))]))])];
          }),
          _: 2
        }, 1040);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
  }, 16, ["data"])]), createVNode("section", _hoisted_12, [createVNode(_component_el_pagination, mergeProps(_ctx.$attrs, {
    "page-size": $props.pageSize,
    "current-page": $options._pageNo,
    total: $props.count,
    onCurrentChange: $options._handleCurrentChange
  }), null, 16, ["page-size", "current-page", "total", "onCurrentChange"])])]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@charset \"UTF-8\";\n/* ------------------工具栏toolbar------------------- */\n.toolbar-panel .toolbar-item[data-v-37332b8e] {\n  display: inline-block;\n  padding-right: 10px;\n  margin-bottom: 12px;\n  vertical-align: middle;\n}\n\n.toolbar-panel .toolbar-item.toolbar-prefix-item[data-v-37332b8e] {\n  padding-right: 0;\n}\n\n.toolbar-panel .el-input__inner[data-v-37332b8e] {\n  height: 33px;\n}\n\n.toolbar-panel .toolbar-item .el-input[data-v-37332b8e] {\n  vertical-align: middle;\n}\n\n.toolbar-panel .toolbar-item .el-input[data-v-37332b8e] {\n  width: 220px;\n  vertical-align: middle;\n}\n\n.toolbar-panel .toolbar-item .el-select[data-v-37332b8e] {\n  width: 120px;\n}\n.toolbar-panel .toolbar-item .el-select[data-v-37332b8e] .el-input {\n  width: 100%;\n}\n\n.toolbar-panel .toolbar-item .item-label[data-v-37332b8e],\n.toolbar-panel .toolbar-item .item-label[data-v-37332b8e],\n.toolbar-panel .toolbar-item .el-select[data-v-37332b8e] {\n  vertical-align: middle;\n  padding-right: 5px;\n}\n\n/* ------------------工具栏toolbar------------------- */\n.toolbar-totaltip[data-v-37332b8e] {\n  height: 28px;\n  line-height: 30px;\n  padding-left: 10px;\n  margin-top: 8px;\n  font-size: 13px;\n  background: #fff;\n  border: 1px solid #009e96;\n}\n\n.section-pagination[data-v-37332b8e] {\n  margin-top: 20px;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-37332b8e";

// 导入组件，组件必须声明 name

script.install = function (Vue) {
  Vue.component(script.name, script);
}; // 默认导出组件

var script$1 = {
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

var _hoisted_1$1 = {
  slot: "header",
  "slot-scope": "scope"
};
var _hoisted_2$1 = {
  "slot-scope": "scope"
};
var _hoisted_3$1 = {
  key: 0
};
var _hoisted_4$1 = {
  key: 1
};
var _hoisted_5$1 = {
  key: 0
};
var _hoisted_6$1 = {
  key: 1
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
            return [createVNode("template", _hoisted_1$1, [createVNode("span", {
              "class": item["class"]
            }, toDisplayString(_ctx.scope.column.label), 3)]), createVNode("template", _hoisted_2$1, [item && item.slotName ? (openBlock(), createBlock("section", _hoisted_3$1, [renderSlot(_ctx.$slots, item.prop, {
              scope: _ctx.scope
            })])) : (openBlock(), createBlock("section", _hoisted_4$1, [item && item.edit ? (openBlock(), createBlock("div", _hoisted_5$1, [createVNode(_component_el_input, {
              modelValue: _ctx.scope.row[item.prop],
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return _ctx.scope.row[item.prop] = $event;
              },
              placeholder: "请输入"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : (openBlock(), createBlock("div", _hoisted_6$1, toDisplayString(_ctx.scope.row[item.prop]), 1))]))])];
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

script$1.render = render$1;

// 导入组件，组件必须声明 name

script$1.install = function (Vue) {
  Vue.component(script$1.name, script$1);
}; // 默认导出组件

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var components = [script, script$1]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

var install = function install(Vue) {
  // 遍历注册全局组件
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = _objectSpread({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install
}, components);

export default index;
