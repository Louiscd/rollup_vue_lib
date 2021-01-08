<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'EditTable',
  props: {
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
    selection: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
