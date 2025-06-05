import 'lib-flexible/flexible';
import 'vant/lib/index.less';

import '@oinone/kunlun-vue-ui-mobile-vant/dist/oinone-kunlun-vue-ui-mobile-vant.css';

import 'reflect-metadata';
import { registerThemeItem, VueOioProvider } from '@oinone/kunlun-mobile-dependencies';

registerThemeItem('default', {
  'm-height': '40px'
});

VueOioProvider({
  browser: {
    title: 'Oinone - 构你想象!',
    favicon: 'https://pamirs.oss-cn-hangzhou.aliyuncs.com/pamirs/image/default_favicon.ico'
  }
});
