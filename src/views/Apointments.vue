<template>
<a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span> Citas</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span> Encuestas</span>
        </a-menu-item>
       
      </a-menu>
    </a-layout-sider>
    <a-layout>
        <a-layout-header style="background: #000; padding: 0" >
        </a-layout-header  >
      <a-layout-content style="margin: 0 16px">
       
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <!-- Content -->
          <h4>Citas Agendadas</h4>
            <a-table :columns="columns" :data-source="data">
                <a slot="name" slot-scope="text">{{ text }}</a>
                <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
                <span slot="tags" slot-scope="tags">
                <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                >
                    {{ tag.toUpperCase() }}
                </a-tag>
                </span>
                <span slot="action" slot-scope="text, record">
                <a>Invite 一 {{ record.name }}</a>
                <a-divider type="vertical" />
                <a>Delete</a>
                <a-divider type="vertical" />
                <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
                </span>
            </a-table>
            
          <!-- End Content -->
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Spa Fantastic ©2020
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
    name:'Apointments',
    data() {
        return {
            collapsed: false,
            data,
            columns,
            citas:[]
        };
    },
    methods:{
        getCitas(){
            
        }
    }

}
</script>