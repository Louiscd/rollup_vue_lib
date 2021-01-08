<template>
  <div class="welcome-page">
    <edit-table border :tableData="table2" :columns="columns2">
      <template slot-scope="{ scope }" slot="num">
        <span class="font-default">{{ scope.row.num }}</span>
      </template>
    </edit-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table2: [
        {
          name: '张三',
          price: 100,
          num: 10,
          total: 1000,
        },
        {
          name: '李四',
          price: 500,
          num: 20,
          total: 10000,
        },
      ],
      columns2: [
        {
          label: '姓名',
          prop: 'name',
        },
        {
          label: '单价',
          prop: 'price',
        },
        {
          label: '数量',
          prop: 'num',
          slotName: true,
        },
        {
          label: '总价',
          prop: 'total',
        },
      ],
    };
  },
  created() {},
  methods: {
    /** 场景二 ：列表字段过滤处理（字典转换、数字千分位处理）、表格项编辑 */
    handleSelectionChange(val) {
      console.log('selectionArr => ', val);
    },
    handleEdit(index, row) {
      console.log('handleEdit => ', index, row);
    },
  },
};
</script>

<style lang="postcss" scoped>
.font-default {
  color: red;
}
.edit-table-input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 26px;
  line-height: 26px;
  outline: none;
  padding: 0 2px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 180px;
  cursor: pointer;
}
.validate-error-message {
  width: 100%;
  height: 14px;
  line-height: 14px;
  margin-top: 6px;
  color: red;
}
.broker-margin-info {
  padding: 15px 20px;
  margin-bottom: 15px;
  border: 1px solid #009e96;
}
</style>
