<template>
  <div class="contract-detail-statistics">
    <div class="statistics-panel cl flex-area" :span="flexAreaSpan">
      <div class="statistics-header dot-default">
        <span>
          <span>{{ title }}</span>
          <span class="statistics-header-tips" v-if="isShowSubhead">{{ subhead }}</span>
        </span>

        <span @click="isExpend = !isExpend">
          <i
            :class="['segment-header-cursor', isExpend ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
          >
          </i>
        </span>
      </div>

      <el-collapse-transition>
        <div v-show="isExpend" :span="flexAreaSpan">
          <slot></slot>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsLayout',
  data() {
    return {
      isExpend: true
    };
  },
  props: {
    title: {
      required: true,
      type: String,
      default: '标题'
    },
    subhead: {
      required: true,
      type: String,
      default: '副标题'
    },
    flexAreaSpan: {
      required: false,
      type: Number,
      default: 4
    },
    isShowSubhead: {
      required: false,
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
/* 统计 */
.contract-detail-statistics {
  margin-bottom: 16px;
  .statistics-panel {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ebeef5;
  }

  .statistics-panel.panel-centen {
    margin-left: 2%;
  }
  .statistics-header {
    color: #000;
    height: 30px;
    line-height: 30px;
    margin: 5px 0 25px;
    font-size: 16px;
  }
  .statistics-header::before {
    content: ' ';
    display: inline;
    background: #1890ff;
    padding-left: 4px;
    margin-right: 15px;
  }
  .statistics-header.dot-blue::before {
    background: #409eff;
  }
  .statistics-header.dot-orange::before {
    background: #ff9900;
  }
  .statistics-header.dot-green::before {
    background: #00b300;
  }
  .statistics-header.dot-default::before {
    background: #009e96;
  }

  .statistics-header .statistics-header-tips {
    font-size: 12px;
    color: #909399;
  }

  .statistics-item {
    float: left;
    /* width: 33.33%; */
    padding: 0 20px 30px 50px;
    box-sizing: border-box;
  }
  .statistics-label {
    color: #909399;
  }
  .statistics-content {
    font-size: 30px;
    height: 40px;
    line-height: 40px;
  }

  .statistics-panel.flex-area[span='3'] .statistics-item {
    width: 33.33%;
  }
  .statistics-panel.flex-area[span='4'] .statistics-item {
    width: 25%;
  }
  .segment-header-cursor {
    display: inline-block;
    width: 20px;
    text-align: left;
    cursor: pointer;
    padding-left: 20px;
  }

  /*
	Name:			style_clearfix
	Example:		class="clearfix|cl"
	Explain:		Clearfix（简写cl）避免因子元素浮动而导致的父元素高度缺失能问题
*/

  .cl:after,
  .clearfix:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .cl,
  .clearfix {
    zoom: 1;
  }
}
</style>
