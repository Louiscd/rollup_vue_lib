<template>
  <div class="segment">
    <div class="segment-header">
      <span>
        {{ title }}
      </span>
      <span @click="isExpend = !isExpend">
        <i
          :class="['segment-header-cursor', isExpend ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
        ></i>
      </span>
    </div>
    <el-collapse-transition>
      <div v-show="isExpend">
        <div class="segment-area flex-area" :span="flexAreaSpan">
          <slot></slot>
        </div>
        <slot name="segmentFoot"></slot>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'SegmentLayout',
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
    flexAreaSpan: {
      required: false,
      type: Number,
      default: 3
    }
  }
};
</script>

<style lang="scss">
/* ------------------segment------------------- */
.segment {
  background: #ffffff;
  border: 1px solid #ebeef5;
  margin-bottom: 16px;
}
.segment.noborder {
  border: none;
}
.segment.segment-panels {
  border: none;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

.segment-green {
  background: #fbfff8;
  border: 1px solid #b3d99c;
  margin-bottom: 15px;
}

.segment:last-child,
.segment-green:last-child {
  margin-bottom: 0;
}

.segment .segment-line {
  width: 97%;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  background: #e2e7ed;
}

.segment .segment-fullline {
  width: 100%;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  background: #e2e7ed;
}

.segment .segment-header {
  height: 37px;
  line-height: 37px;
  text-indent: 15px;
  font-weight: 700;
  /* border-bottom: 1px solid #ebeef5; */
  background: #f7f9fb;
}

.segment .segment-header-sub {
  font-size: 14px;
  color: #99a9bf;
  font-weight: normal;
  padding-left: 15px;
}
.segment-header-cursor {
  display: inline-block;
  width: 40px;
  text-align: left;
  cursor: pointer;
}

.segment .segment-area {
  padding: 15px;
}

.segment .el-row {
  height: 36px;
  line-height: 36px;
  padding: 0 28px;
  clear: both;
}

.segment .segment-label {
  display: inline-block;
  width: 120px;
  color: #606266;
}
.el-form-item__label {
  color: #606266;
}
.font-label {
  color: #606266 !important;
}
.segment .segment-content {
  display: inline-block;
  color: #333333;
}
.segment .segment-foot {
  background: #fcfdff;
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  border-top: 1px solid #ebeef5;
}

.segment-brline {
  /* segment内 col右边框 */
  border-right: 1px solid #ebeef5;
}
/* segment-content超长  多行换行、缩进对齐指定父级class */
.segment-item-warp {
  position: relative;
  line-height: 36px;
  .segment-label {
    position: absolute;
    top: 0;
    left: 0;
  }
  .segment-content {
    display: block;
    padding-left: 120px;
  }
}
/* segment-conten图片凭证 指定父级class */
/* el-row 需要自动行高  class="h-auto" */
.segment-item-warp.imgwarp {
  .segment-content {
    min-height: 36px;
    .preview-grid {
      margin-top: 10px;
    }
  }
}
/* segment-conten备注文案 指定父级class*/
/* el-row 需要自动行高  class="h-auto" */
.segment-item-warp.memowarp {
  .segment-content {
    min-height: 24px;
    line-height: 22px;
    padding-top: 7px;
    padding-bottom: 6px;
  }
}

/* segment-content超长 单行省略号 指定父级class 自行绑定title */
.segment-item-ellipsis {
  position: relative;
  .segment-label {
    position: absolute;
    top: 0;
    left: 0;
  }
  .segment-content {
    display: block;
    min-height: 36px;
    padding-left: 120px;
    padding-right: 10px;
    /* margin-left: 5px; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.segment-item-haslink {
  display: flex;
  .segment-label {
    flex: 0 0 auto;
  }
  .segment-content {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .the-linker {
    flex: 1 1 auto;
    /* margin-left: 10px; */
    min-width: 80px;
    color: #009e96;
    cursor: pointer;
  }
  .the-linker:hover {
    opacity: 0.9;
  }
}

/* 新版本segment 旧代码保留 */
.segment .segment-area.flex-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* 默认单行 超长省略(自行绑定title) */
  .segment-item {
    width: 50%;
    flex: 0 0 auto;
    height: 36px;
    line-height: 36px;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    .segment-label {
      flex: 0 0 auto;
    }
    .segment-content {
      flex: 1 1 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  /* 查看证件 */
  .segment-item.haslink {
    .segment-content {
      flex: 0 1 auto;
    }
    .the-linker {
      flex: 0 0 auto;
      /* margin-left: 10px; */
      color: #009e96;
      cursor: pointer;
    }
    .the-linker:hover {
      opacity: 0.8;
    }
  }
  /* 超长处理 换行显示 */
  .segment-item.warp {
    display: flex;
    height: auto;
    .segment-content {
      line-height: 20px;
      padding-top: 8px;
      overflow: auto;
      text-overflow: inherit;
      white-space: inherit;
    }
  }
  /* conteng内容为图片时  label垂直居中 */
  .segment-label.imglabel {
    position: relative;
    top: 40px;
    height: 40px;
  }
  .segment-content.imgcontent {
    min-height: 100px;
  }
  /* 独占一行 */
  .segment-item.row-width {
    width: 100% !important;
  }
}
/* 使用row-width和colspan可自由填充宽度 */
.segment .segment-area.flex-area[span='1'] .segment-item {
  width: 100%;
}
.segment .segment-area.flex-area[span='2'] .segment-item {
  width: 50%;
}
.segment .segment-area.flex-area[span='3'] .segment-item {
  width: 33.33%;
}
.segment .segment-area.flex-area[span='3'] .segment-item[colspan='2'] {
  width: 66.66%;
}
.segment .segment-area.flex-area[span='4'] .segment-item {
  width: 25%;
}
.segment .segment-area.flex-area[span='4'] .segment-item[colspan='2'] {
  width: 50%;
}
.segment .segment-area.flex-area[span='4'] .segment-item[colspan='3'] {
  width: 75%;
}
</style>
