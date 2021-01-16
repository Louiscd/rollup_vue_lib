<template>
  <div>
    <SegmentLayout :title="title">
      <div class="segment-item">
        <div class="segment-label">报号码</div>
        <div class="segment-content">
          <span>
            {{ detail.enrollCode }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">报号码状态</div>
        <div class="segment-content">
          <span>
            {{ detail.arriveStatusText }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">报名时间</div>
        <div class="segment-content">
          <span>
            {{ detail.createTime }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">预计到场时间</div>
        <div class="segment-content">
          <span>
            {{ detail.expectDate }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">实际到场时间</div>
        <div class="segment-content">
          <span>
            {{ detail.arriveTime }}
          </span>
        </div>
      </div>
    </SegmentLayout>

    <SegmentLayout :title="title" :flexAreaSpan="4">
      <div class="segment-item">
        <div class="segment-label">报号码</div>
        <div class="segment-content">
          <span>
            {{ detail.enrollCode }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">报号码状态</div>
        <div class="segment-content">
          <span>
            {{ detail.arriveStatusText }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">报名时间</div>
        <div class="segment-content">
          <span>
            {{ detail.createTime }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">预计到场时间</div>
        <div class="segment-content">
          <span>
            {{ detail.expectDate }}
          </span>
        </div>
      </div>
      <div class="segment-item">
        <div class="segment-label">实际到场时间</div>
        <div class="segment-content">
          <span>
            {{ detail.arriveTime }}
          </span>
        </div>
      </div>
    </SegmentLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '报号信息',
      detail: {
        enrollCode: '12345',
        arriveStatusText: '已报',
        createTime: '2020-12-30',
        expectDate: '2020-01-05',
        arriveTime: '2020-01-10'
      }
    };
  }
};
</script>
<style></style>
