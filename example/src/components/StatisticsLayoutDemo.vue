<template>
  <div>
    <StatisticsLayout :title="title" :subhead="subhead" :isShowSubhead="true" :flexAreaSpan="3">
      <div class="statistics-item" v-for="(item, index) in companyList" :key="index">
        <div class="statistics-label">
          {{ item.companyTypeName }}
          <span class="ml-5">({{ item.unit }})</span>
        </div>
        <div class="statistics-content">{{ item.companyNum }}</div>
      </div>
    </StatisticsLayout>
    <StatisticsLayout :title="title" :subhead="subhead" :isShowSubhead="true">
      <div class="statistics-item" v-for="(item, index) in companyList" :key="index">
        <div class="statistics-label">
          {{ item.companyTypeName }}
          <span class="ml-5">({{ item.unit }})</span>
        </div>
        <div class="statistics-content">{{ item.companyNum }}</div>
      </div>
    </StatisticsLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '用户统计',
      subhead: '(每日更新2次)',
      companyList: [
        { companyTypeName: '供应商', companyNum: 1000, unit: '个' },
        { companyTypeName: '采购商', companyNum: 2000, unit: '个' },
        { companyTypeName: '经纪人', companyNum: 3000, unit: '个' },
        { companyTypeName: '用户总数', companyNum: 6000, unit: '个' }
      ]
    };
  }
};
</script>
<style></style>
