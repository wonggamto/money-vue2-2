<template>
  <div class="date">
    <Icon name="calendar"/>
    <div class="timeBlock">
      <el-date-picker
          v-model="value"
          type="datetime"
          @change="onClick"
          size="mini"
          placeholder="选择日期时间">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'GetDate',
  components: {Icon},
  data() {
    return {
      value:''
    }
  },
  methods:{
      onClick() {
        this.$emit('update:value', this.value);

    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.date {
  background: #FFF;
  font-size: 18px;
  display: flex;
  padding-left: 18px;
  align-items: center;
  padding-bottom: 24px;
  > .timeBlock {
    padding-left: 14px;
  }
}
</style>
