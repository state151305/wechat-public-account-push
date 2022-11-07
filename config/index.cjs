/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6e4e07ec10778fbc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3dfa12038f5086f7d6f89d9322f8a057',

  PROVINCE: '广西',
  CITY: '河池',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyQfI6AIBjxFR_sxoFWA8ACcVcrI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'bX_scehOjXa_R7xYk-7US2ibVYGDApHf_3HOETkKcLY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-03',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2001', date: '09-03',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2022', date: '04-30',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-30' },

      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '43WI7pz11ra_z_2KZ7GlAl4EWf4VXy7yqtX0LiogDR4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyQfI6CRwmo764zp2qSZA5W4YtqY',
    }
  ],

}

module.exports = USER_CONFIG

