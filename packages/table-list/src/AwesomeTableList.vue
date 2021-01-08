<template>
  <div>
    <!-- 列表筛选&操作 -->
    <section class="toolbar-panel">
      <!-- 列表筛选 -->
      <form-create v-model="fApi" :rule="formRules" :option="formOptions"></form-create>
      <!-- 筛选操作 -->
      <div class="toolbar-item">
        <el-button type="primary" @click="_handleSearch">查询</el-button>
        <el-button @click="_handleReset">重置</el-button>
        <!-- 操作solt -->
        <slot name="filterHandle"></slot>
      </div>
    </section>

    <!-- 列表统计汇总solt -->
    <section v-if="isShowStatistics" class="toolbar-totaltip mb-10">
      <slot name="statistics"></slot>
    </section>

    <!-- 表格 -->
    <section>
      <el-table :data="tableData" v-bind="$attrs" v-on="$listeners" style="width: 100%">
        <slot v-if="selection" name="slotSelection"></slot>
        <el-table-column v-for="(item, index) in columns" :key="index" v-bind="item || {}">
          <template slot="header" slot-scope="scope">
            <span :class="item.class">{{ scope.column.label }}</span>
          </template>
          <template slot-scope="scope">
            <!-- slot插槽处理自定义样式、edit处理单元格编辑与显示 -->
            <section v-if="item && item.slotName">
              <slot :name="item.prop" :scope="scope"></slot>
            </section>
            <section v-else>
              <!-- 编辑or展示 -->
              <div v-if="item && item.edit">
                <el-input v-model="scope.row[item.prop]" placeholder="请输入" />
              </div>

              <div v-else>
                {{ scope.row[item.prop] }}
              </div>
            </section>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <!-- 分页 -->
    <section class="section-pagination">
      <el-pagination
        v-bind="$attrs"
        :page-size="pageSize"
        :current-page="_pageNo"
        :total="count"
        @current-change="_handleCurrentChange"
      >
      </el-pagination>
    </section>
  </div>
</template>
<script>
export default {
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
      default: () => [],
    },
    formOptions: {
      required: false,
      type: Object,
      default: () => {
        return {
          form: {
            inline: true,
            labelPosition: 'left',
            labelWidth: '100px',
          },
          submitBtn: {
            show: false,
          }, // 默认隐藏form-create 自带的提交按钮
        }
      },
    },

    /** 是否显示列表统计 */
    isShowStatistics: {
      required: false,
      type: Boolean,
      default: true,
    },

    /** 表格相关 */
    selection: {
      required: false,
      type: Boolean,
      default: false,
    },
    tableData: {
      required: true,
      type: Array,
      default: () => [],
    },
    columns: {
      required: true,
      type: Array,
      default: () => [],
    },

    /** 分页参数 */
    pageNo: {
      required: false,
      type: Number,
      default: 1,
    },
    pageSize: {
      required: false,
      type: Number,
      default: 10,
    },
    count: {
      required: true,
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      fApi: {},
    }
  },
  computed: {
    _pageNo() {
      return this.pageNo
    },
  },
  created() {},
  methods: {
    // 查询
    _handleSearch() {
      this.$emit('handle-search', this.getCurrentFormData())
    },
    // 重置
    _handleReset() {
      this.fApi.resetFields() // 清空表单数据 ，实时数据清空，上一次数据依然保留
      this.$emit('reset-search', this.getCurrentFormData())
    },
    // 分页
    _handleCurrentChange(pageNo) {
      this.$emit('page-change', {
        pageNo,
        formData: this.getLastFormData(),
      })
    },
    // 获取form 实时数据
    getCurrentFormData() {
      return this.fApi.form
    },
    // 获取form 上一次数据
    getLastFormData() {
      return this.fApi.formData()
    },
    // 获取form-create 的实例对象
    getFApi() {
      return this.fApi
    },
  },
}
</script>

<style lang="scss" scoped>
/* ------------------工具栏toolbar------------------- */
.toolbar-panel .toolbar-item {
  display: inline-block;
  padding-right: 10px;
  margin-bottom: 12px;
  vertical-align: middle;
}

.toolbar-panel .toolbar-item.toolbar-prefix-item {
  padding-right: 0;
}
.toolbar-panel .el-input__inner {
  height: 33px;
}

.toolbar-panel .toolbar-item .el-input {
  vertical-align: middle;
}

.toolbar-panel .toolbar-item .el-input {
  width: 220px;
  vertical-align: middle;
}

.toolbar-panel .toolbar-item .el-select {
  width: 120px;
  .el-input {
    width: 100%;
  }
}

.toolbar-panel .toolbar-item .item-label,
.toolbar-panel .toolbar-item .item-label,
.toolbar-panel .toolbar-item .el-select {
  vertical-align: middle;
  padding-right: 5px;
}
/* ------------------工具栏toolbar------------------- */
.toolbar-totaltip {
  height: 28px;
  line-height: 30px;
  padding-left: 10px;
  margin-top: 8px;
  font-size: 13px;
  background: #fff;
  border: 1px solid #009e96;
}
.section-pagination {
  margin-top: 20px;
}
</style>
