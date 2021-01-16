<template>
  <div>
    <!-- 搜索操作区 -->
    <ToolPanelExpandLayout>
      <!-- 默认展示 -->
      <template>
        <div class="toolbar-item">
          <span class="item-label">订单编号</span>
          <el-input
            v-model.trim="tableOptions.protocolOrderSn"
            :maxlength="50"
            clearable
            placeholder="请输入订单编号"
          ></el-input>
        </div>
        <div class="toolbar-item">
          <span class="item-label">运费结算状态</span>
          <el-select
            v-model="tableOptions.freightSettleStatus"
            clearable
            placeholder="请选择运费结算状态"
            style="width: 200px"
          >
            <el-option
              v-for="item in freightSettleStatusArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="toolbar-item">
          <span class="item-label">订单编号</span>
          <el-input
            v-model.trim="tableOptions.protocolOrderSn"
            :maxlength="50"
            clearable
            placeholder="请输入订单编号"
          ></el-input>
        </div>
        <div class="toolbar-item">
          <span class="item-label">运费结算状态</span>
          <el-select
            v-model="tableOptions.freightSettleStatus"
            clearable
            placeholder="请选择运费结算状态"
            style="width: 200px"
          >
            <el-option
              v-for="item in freightSettleStatusArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="toolbar-item">
          <el-button class="ml-10" type="primary" @click="handleSearch">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
        </div>
      </template>
      <!-- 折叠收起 -->
      <template v-slot:toolMore>
        <div class="toolbar-item">
          <span class="item-label">平台贸易商</span>
          <el-input
            v-model.trim="tableOptions.finCompanyName"
            :maxlength="50"
            clearable
            placeholder="请输入平台贸易商"
          ></el-input>
        </div>
        <div class="toolbar-item">
          <span class="item-label">上游经纪人</span>
          <el-input
            v-model.trim="tableOptions.brokerCompanyName"
            :maxlength="50"
            clearable
            placeholder="请输入上游经纪人"
          ></el-input>
        </div>
        <div class="toolbar-item">
          <span class="item-label">上游收款类型</span>
          <el-select
            v-model="tableOptions.paymentPath"
            clearable
            placeholder="请选择上游收款类型"
            style="width: 200px"
          >
            <el-option
              v-for="item in paymentPathArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </template>
    </ToolPanelExpandLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableOptions: {
        protocolOrderSn: '',
        freightSettleStatus: '',
        freightPaidStatus: '',
        goodsPaidStatus: '',
        monthAccountStatus: '',
        orderCompanyName: '',
        finCompanyName: '',
        brokerCompanyName: '',
        paymentPath: '',
        downBusinessType: ''
      },
      freightSettleStatusArr: [],
      paymentPathArr: []
    };
  },
  created() {},
  methods: {
    handleSearch() {
      console.log('Search List');
    },
    handleReset() {
      console.log('ReSearch List');
    }
  }
};
</script>
<style>
.ml-10 {
  margin-left: 10px;
}
</style>
