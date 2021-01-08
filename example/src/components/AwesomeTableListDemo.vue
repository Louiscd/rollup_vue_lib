<template>
  <div class="layout-content-list">
    <awesome-table-list
      ref="awesomeTable"
      border
      :formRules="formRules"
      :isShowStatistics="isShowStatistics"
      :selection="isSelection"
      :columns="tableColumns"
      :tableData="tableData.list"
      :count="tableData.count"
      @selection-change="handleSelectionChange"
      :pageNo="pageNo"
      :pageSize="pageSize"
      @page-change="handlePageChange"
      @handle-search="onSearch"
      @reset-search="onResetSearch"
      layout="total, prev, pager, next, jumper"
    >
      <!-- 筛选操作 -->
      <template slot="filterHandle">
        <el-button @click="onExplort">导出</el-button>
        <el-button @click="onDisabledFormBtn">控制商户类型的禁用与否</el-button>
      </template>
      <!-- 统计汇总 -->
      <template slot="statistics">
        统计汇总
      </template>
      <!-- 表格slot -->
      <template slot="slotSelection">
        <el-table-column type="selection" :selectable="hasSelected" width="55" fixed="left">
        </el-table-column>
      </template>
      <template slot-scope="{ scope }" slot="companyCode">
        <span class="font-default">{{ scope.row.companyCode }}</span>
      </template>
      <template slot-scope="{ scope }" slot="status">
        <span v-if="scope.row.status === false" class="font-red">已停用</span>
        <span v-else>已启用</span>
      </template>
    </awesome-table-list>
  </div>
</template>
<script>
// import axios from '@/utils/axios';
// import api from '@/api/mall.api';
// import listMixin from '@/utils/listMixin';
// import AwesomeTableList from '@/components/AwesomeTableList';
// import utils from '@/utils/utils';
// import Validator from '@/utils/Validator';

export default {
  // mixins: [listMixin],
  // components: {
  //   AwesomeTableList,
  // },
  data: function() {
    // // 验证手机号
    // var validatePhone = (rule, value, callback) => {
    //   if (!Validator.phone(value)) {
    //     callback(new Error(rule.message));
    //   }
    //   callback();
    // };
    // var validateMax = (rule, value, callback) => {
    //   if (value > 100) {
    //     callback(new Error(rule.message));
    //   }
    //   callback();
    // };
    return {
      /**
       * 筛选form
       * 表单生成规则数组对象  生成规则：http://www.form-create.com/v2/guide/rule.html
       * 生成规则数组中一个对象就是一个表单项（是一个json对象），在里面可以对应的表单名称、类型、属性、值、样式、类名、是否必填、错误提示等。
       *  {
          type: 'input', // 生成组件的名称(就是表单的名称：如input，radio，checkbox，select，slider等)
          field: 'userName', // 表单组件的字段名称(就是表单的name属性，注：该必须唯一),自定义组件可以不配置
          title: '用户名称：', // 组件的名称, 选填
          value:'默认值',
          props: {
            placeholder: '请输入用户名称！',
            clearable: true, // 是否显示清空按钮
          },
          validate: [],
        },
       *
       */
      formRules: [
        {
          type: 'input',
          title: '企业编号',
          field: 'companyCode',
          props: {
            placeholder: '请输入企业编号',
            clearable: true,
            maxlength: 20,
          },
          validate: [
            // { required: true, message: '请输入', trigger: 'blur' },
            // {
            //   validator: validateMax,
            //   message: '输入值不能大于100',
            //   trigger: 'blur',
            //   hasMax: true,
            // },
          ],
          nativeOn: {
            keyup: (event) => {
              // 如果按下去的不是 enter 键 ,则返回
              if (event.keyCode !== 13) return;

              this.onInit();
            },
          },
        },
        {
          type: 'input',
          title: '商户名称',
          field: 'fullName',
          props: {
            placeholder: '请输入商户名称',
            clearable: true,
            maxlength: 20,
          },
          validate: [],
        },
        {
          type: 'input',
          title: '登录手机号',
          field: 'loginAdminName',
          props: {
            placeholder: '请输入手机号',
            clearable: true,
            maxlength: 11,
          },
          validate: [
            // { required: true, message: '请输入手机号', trigger: 'blur' },
            // { validator: validatePhone, message: '请输入有效的手机号', trigger: 'blur' },
          ],
          nativeOn: {
            keyup: (event) => {
              // 如果按下去的不是 enter 键 ,则返回
              if (event.keyCode !== 13) return;

              this.onInit();
            },
          },
        },
        {
          type: 'DatePicker',
          title: '创建日期',
          field: 'timeRange',
          props: {
            type: 'daterange',
            format: 'yyyy-MM-dd',
            placeholder: '请选择活动日期',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            'picker-options': {
              disabledDate(time) {
                return time.getTime() > Date.now();
              },
            },
          },
        },
        {
          type: 'select',
          title: '商户类型',
          field: 'companyType',
          options: [],
        },
        {
          type: 'select',
          title: '商户状态',
          field: 'status',
          options: [
            { label: '已启用', value: true },
            { label: '已停用', value: false },
          ],
          // on: {
          //   change: e => {
          //     console.log(e);
          //     this.onInit();
          //   },
          // },
        },
        {
          type: 'select',
          title: '控制其他组件',
          field: 'a',
          value: '',
          options: [
            { label: '显示', value: true },
            { label: '隐藏', value: false },
          ],
          control: [
            {
              value: true, // 当组件的值和value全等时显示rule中的组件
              rule: [
                {
                  type: 'input',
                  title: '被控制组件',
                  field: 'b',
                  props: {
                    placeholder: '请输入',
                    clearable: true,
                    maxlength: 20,
                  },
                  validate: [],
                },
              ],
            },
          ],
        },
      ],

      /** 汇总区域设置 **/
      isShowStatistics: true,
      isSelection: true,

      /** 表格数据 **/
      tableData: {
        count: 0,
        list: [],
      },
      tableColumns: [
        {
          label: '企业编号',
          prop: 'companyCode',
          'min-width': '140',
          'show-overflow-tooltip': true,
          slotName: true,
        },
        {
          label: '商户名称',
          prop: 'fullName',
          'min-width': '140',
          'show-overflow-tooltip': true,
          edit: true,
        },
        {
          label: '商户状态',
          prop: 'status',
          'min-width': '140',
          'show-overflow-tooltip': true,
          slotName: true,
          edit: true,
          class: ['custom-before', 'custom-weight'],
        },
      ],

      /** 分页数据 **/
      pageNo: 1,
      pageSize: 2,

      /** 分页入参 **/
      formData: {},
      tableOptions: {},
      sendOptions: {},

      /** 字典相关 **/
      companyTypeArr: [],

      flag: false,
    };
  },
  async created() {
    // const dict = await utils.getSysdict();
    // this.companyTypeArr = dict.companyType; //商户类型
    // this.formRules.forEach((item) => {
    //   if (item.type === 'select' && item.field === 'companyType') {
    //     item.options = this.companyTypeArr;
    //   }
    // });
    // console.log(this.formRules);
  },
  mounted() {
    // this.onInit();
  },
  methods: {
    onInit() {
      let initialFormData = this.$refs.awesomeTable.getCurrentFormData();
      this.onSearch(initialFormData);
    },
    // 是否禁用勾选
    hasSelected(row, index) {
      return true; // return true 为可选，false禁用
    },
    // 列表勾选钩子
    handleSelectionChange(val) {
      console.log('selectionArr => ', val);
    },
    // 查询
    onSearch(formData) {
      this.onFormatFormData(formData);
      this.handleSearch();
    },
    // 重置
    onResetSearch(formData) {
      this.onSearch(formData);
    },
    // 分页
    handlePageChange(opts) {
      console.log(opts);
      // formData 转换 sendOptions
      this.pageNo = opts.pageNo;
      this.onFormatFormData(opts.formData);
      this.handleCurrentChange(opts.pageNo);
    },
    async fetchData(opts) {
      const options = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        ...this.sendOptions,
        ...opts,
      };
      let result = await axios.post(api.companyList, options);
      this.tableData = result.data || { count: 0, list: [] };
    },
    // formData 转换 sendOptions
    onFormatFormData(formData) {
      this.formData = formData;
      console.log('form-create 返回原始数据 ==>', formData);
      this.tableOptions = {
        companyCode: formData.companyCode,
        fullName: formData.fullName,
        loginAdminName: formData.loginAdminName,
        companyType: formData.companyType,
        status: formData.status,
        startTime: formData.timeRange ? formData.timeRange[0] : '',
        endTime: formData.timeRange ? formData.timeRange[1] : '',
      };
    },
    // 导出
    onExplort() {
      console.log(
        this.tableOptions,
        this.sendOptions,
        'this.tableOptions-this.sendOptions-onExplort'
      );
    },
    // 调用 form-create 的api能力
    onDisabledFormBtn() {
      // 1. 获取form-create 的实例对象
      const fApi = this.$refs.awesomeTable.getFApi();
      // 2. 调用 form-create 的api原生能力，更新特定组件
      // fApi.disabled(true, 'companyType');
      // fApi.disabled(true, ['companyType', 'status']);

      this.flag = !this.flag;
      fApi.updateRule('companyType', {
        props: {
          disabled: this.flag,
        },
      });
    },
  },
};
</script>

<style lang="postcss">
.custom-before {
  &::before {
    content: '*';
    color: red;
    padding-right: 4px;
  }
}
.custom-weight {
  font-weight: 700;
}
</style>
