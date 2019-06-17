<template>
    <div class="counts">
        <div class="count" v-for="(item,ind) in count" :key="ind" @click="todetali(item.list_type,item.applicationNumber)">
        <div class="list_header">
            <span>{{item.applicationNumber}}</span>
            <span>待确认</span>
        </div>
        <div class="count_items">
            <p>
            <span class="biaoti">申请人</span>
            <span>{{item.nickname}}</span>
            </p>
            <p>
            <span class="biaoti">加班类型</span>
            <span>{{item.describes}}</span>
            </p>
            <p>
            <span class="biaoti">加班日期</span>
            <span>{{item.create_at.substr(0,10)}}</span>
            </p>
            <p>
            <span class="biaoti">加班时数</span>
            <span>{{item.type}}</span>
            </p>
        </div>
        </div>

        <!-- <div>{{data}}</div> -->
    </div>
</template>
<script>
export default {
  props: ['count'],
  components: {},
  data() {
    return {};
  },
  computed: {

  },
  methods: {
    todetali(type,id){
      this.$router.push({
        name:'detali',
        params:{
          type,id
        }
      })
    }
    
  },
  created() {

  },
  mounted() {

  }
};
</script>
<style scoped lang="scss">
@import "./../static/scss/common.scss";
.count {
  width: 100%;
  height: pxTorem(100px);
  padding: pxTorem(10px) 3% 0 3%;
  box-sizing: border-box;
  margin-bottom: pxTorem(10px);
  background: #fff;

  .list_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: pxTorem(15px);
  }
  .count_items {
    display: flex;
    flex-wrap: wrap;
    p {
      width: 50%;
      margin-bottom: pxTorem(10px);
      .biaoti {
        display: inline-block;
        width: pxTorem(60px);
        color: #ccc;
      }
    }
  }
}
</style>