<template>
  <div class="hello">
    <as-button @click="buttonClick">按钮</as-button>
    <as-button type="text" @click="buttonClick">按钮</as-button>
    <as-button :broad="true" @click="buttonClick">按钮</as-button>
    <as-button type="text"  @click="buttonClick">按钮</as-button>
    <cw-transition @before-enter="qqq">
      <div v-if="display">
        <span>45645656</span>
        <div>45645656</div>
        <div>45645656</div>
        <div>45645656</div>
      </div>
    </cw-transition>
    <layer-list v-for="(item,index) in radioGroup"
                :key="index" @change="sss(index)"
                layerUrl="http://154.3254.25/ddd/d/w/"
                layerType="Feature Layer"
                checkBox
                v-model="item.state"
                :label="'排水户'">
    </layer-list>
    <layer-list v-for="(item,index) in radioGroup"
                :key="index"
                layerUrl="http://154.3254.25/ddd/d/w/"
                layerType="Feature Layer"

                :label="'排水户'">
    </layer-list>
    <div class="hello-form-item">
      <form-item label="姓名">
        <cw-input :error="true" v-model="name" placeholder="请填写"></cw-input>
      </form-item>
    </div>
    <div class="hello-form-item">
      <form-item  label="姓名">
        <cw-input :disabled='true' v-model="name" placeholder="请填写"></cw-input>
      </form-item>
    </div>
    <div class="hello-form-item">
      <form-item label="姓名1124121212">
        <cw-input v-model="name" placeholder="请填写"></cw-input>
      </form-item>
    </div>
    <div class="hello-form-item">
      <form-item label="选择">
        <cw-radio name="type" label="2D" v-model="radio1"></cw-radio>
        <cw-radio name="type" label="3D" v-model="radio1"></cw-radio>
        <cw-radio name="type" label="2D/3D" v-model="radio1"></cw-radio>
      </form-item>
    </div>
    <div class="hello-form-item">
      <form-item label="姓名1124121212">
        <cw-textarea v-model="textarea"></cw-textarea>
      </form-item>
    </div>
    <div>
      <as-menu :defaultActive="1" @menuChange="menuChange">
        <as-menu-tab  :index="1"  title="Admin" >
          <img slot="image" src="../../static/img/icon_user.png" alt="">
        </as-menu-tab>
        <as-menu-tab :index="2" title="应用管理" >
          <img slot="image" src="../../static/img/icon_user.png" alt="">
        </as-menu-tab>
        <as-menu-tab  :index="3" title="地图管理" >
          <img slot="image" src="../../static/img/icon_user.png" alt="">
        </as-menu-tab>
      </as-menu>
    </div>
    <cw-edit-title v-model="textarea"></cw-edit-title>
    <div class="cw-select-ct">
      <cw-select :hideList.sync="hideList" :list="list"></cw-select>
    </div>

    <app-card hasPublished="1" mapType="3d" title="福州时空平台">
      <img class="" slot="img" src="../../static/img/icon_user.png" alt="">
      <img class="mapType-img" slot="mapType" src="../../static/img/map3d.png" alt="">
      <div slot="footerbutton">

      </div>
    </app-card>
    <cw-textarea v-model="textarea"></cw-textarea>
  </div>
</template>

<script>
  import formItem from './formItem/formItem.vue'
  import asButton from './button/button.vue'
  import asMenu from './menu/menu.vue'
  import asMenuTab from './menuItem/menuTab.vue'
  import cwTransition from './cwTransition.vue'
  import cwInput from './input/input.vue'
  import cwRadio from './radio/radio.vue'
  import appCard from './card/appCard.vue'
  import cwSelect from './select/select.vue'
  import cwTextarea from './textarea/textarea.vue'
  import cwEditTitle from './editTitle/editTitle.vue'
  import layerList from './layerList/layerList.vue'

  export default {
    name: 'uicomponentsExample',
    data() {
      return {
        name: '234',
        menuIndex: 1,
        display: false,
        radio1: 1,
        radio2: false,
        radioGroup: [
          {
            state: false
          },{
            state: false
          },
          {
            state: false
          },
        ],
        hideList: false,
        list: [
          {
            id: 1,
            value: 'a'
          },
          {
            id: 2,
            value: 'b'
          }
        ],
        textarea: '54242121'
      }
    },
    methods: {
      buttonClick() {
        this.display = !this.display
        console.log(this.textarea)
      },
      menuChange(index,route,vm){
        console.log(index,route)
      },
      qqq(){
        console.log(55555)
      },
      sss(index){
        console.log(index)
        //this.radioGroup.splice(index,1,!this.radioGroup[index])
        console.log(this.radioGroup)
      }
    },
    components: {
      formItem,
      asButton,
      asMenu,
      asMenuTab,
      cwTransition,
      cwInput,
      cwRadio,
      appCard,
      cwSelect,
      cwTextarea,
      cwEditTitle,
      layerList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 8.00rem;
    background: rgba(237, 240, 245, 1);
    margin-top: 1em;
    padding: 1em;
  }

  .hello-form-item {
    margin-top: 1em;
    padding: 1em;
  }
  .radio-item{
    margin-left: 2em;
    display: inline-block;
  }
  .mapType-img{
    height: 20px;
  }
  .cw-select-ct{
    width: 200px;
  }
</style>
