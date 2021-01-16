<template>
  <div>
    <div class="toolbar-panel">
      <!-- 展示内容 -->
      <slot></slot>
      <!-- 收起内容 -->
      <el-collapse-transition>
        <div v-show="toolexpand">
          <slot name="toolMore"></slot>
        </div>
      </el-collapse-transition>
    </div>
    <div class="toolmore-control mb-10">
      <div v-if="toolexpand" class="toolmore-control-btn" @click="toolexpand = false">
        <i class="el-icon-arrow-up"></i>
        <span class>收起</span>
      </div>
      <div v-else class="toolmore-control-btn" @click="toolexpand = true">
        <i class="el-icon-arrow-down"></i>
        <span class>展开</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolPanelExpandLayout',
  data() {
    return {
      toolexpand: false
    };
  }
};
</script>

<style lang="scss">
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

.rowone-expand {
  cursor: pointer;
}

.rowone-expand:hover {
  cursor: pointer;
  color: #009e96;
}

.toolmore-control {
  border-top: 1px solid #ebeef5;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  margin-top: 10px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}

.toolmore-control-btn {
  border: 1px solid #ebeef5;
  border-top: none;
  width: 80px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  margin-top: -1px;
  background: #fff;
  color: #9ea7b4;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.toolmore-control-btn:hover {
  color: #009e96;
}

.toolbar-totaltip {
  min-height: 28px;
  line-height: 30px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 13px;
  background-color: #fff;
  border: 1px solid #009e96;
}
</style>
