import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'
const mock = new MockAdapter(axios);


mock.onGet('/api/list').reply(200, {
    code: 10000, datas: [
        { id: 1, type: 0, typeName: '化妆品', name: '女士香水', price: 290.00 },
        { id: 2, type: 1, typeName: '服饰', name: '个性女装', price: 120.00 },
        { id: 3, type: 2, typeName: '手办', name: '帅气金闪闪手办', price: 130.00 },
        { id: 4, type: 3, typeName: '门票', name: '音乐节门票 20230610 周六 688元VIP区（正价票）', price: 688.00 }
    ]
});

mock.onGet('/api/detail?id=1').reply(200, { code: 10000, infos: { title: '女士香水 50ml 果香', images: [ 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/3a580e2bb18a480aa776cf532a827469.jpeg', 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/41ea76f7921b40ad96568dc1ce6458c7.jpeg' ], desc: '女士香水', isSC: false, haveNum: 44, select: 0, select1: 0 }});

mock.onGet('/api/detail?id=2').reply(200, { code: 10000, infos: { title: '个性女装 格子', images: [ 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/3a580e2bb18a480aa776cf532a827469.jpeg', 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/41ea76f7921b40ad96568dc1ce6458c7.jpeg' ], desc: '好吃不上火', isSC: true, haveNum: 20, select: 0, select1: 0 }});


mock.onGet('/api/detail?id=3').reply(200, { code: 10000, infos: { title: '帅气金闪闪手办', images: [ 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/b1403653b8734643a746c3583ae883a3.png', 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/41ea76f7921b40ad96568dc1ce6458c7.jpeg' ], desc: '1：1还原了吉尔伽美什八七的价格实惠', isSC: true, haveNum: 0, select: 0, select1: 0 }});

mock.onGet('/api/detail?id=4').reply(200, { code: 10000, infos: { title: '门门票门票票', images: [ 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/b1403653b8734643a746c3583ae883a3.png', 'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/41ea76f7921b40ad96568dc1ce6458c7.jpeg' ], desc: '门票门票门票', isSC: true, haveNum: 12, select: 0, select1: 0 }});

export default mock