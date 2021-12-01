// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/mnt/d/mywork/front-guidebook/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/mnt/d/mywork/front-guidebook/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/mnt/d/mywork/front-guidebook/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('/mnt/d/mywork/front-guidebook/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1638355212299,
          "title": "📚 前端指南",
          "order": 10,
          "hero": {
            "title": "前端指南",
            "desc": "<div class=\"markdown\"><p>📚 一份前端指南和私人技术笔记</p></div>",
            "actions": [
              {
                "text": "开始阅读",
                "link": "/"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "完整体系",
              "desc": "<div class=\"markdown\"><p>根据官方文档及社区建设构建尽可能实用的知识体系，宏观掌握技术体系</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "深度分析",
              "desc": "<div class=\"markdown\"><p>尽览社区精品技术文章，将最受业界欢迎的使用方法收录其中</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "开发指南",
              "desc": "<div class=\"markdown\"><p>体系化整理，随时查阅具体技术细节，方便前端开发者日常开发</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by tsejx &#x26;&#x26; zhuziyi</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "目录",
              "heading": "目录"
            },
            {
              "depth": 3,
              "value": "面试题库",
              "heading": "面试题库"
            },
            {
              "depth": 3,
              "value": "优秀面试分享",
              "heading": "优秀面试分享"
            },
            {
              "depth": 3,
              "value": "学习资料",
              "heading": "学习资料"
            },
            {
              "depth": 3,
              "value": "相关推荐",
              "heading": "相关推荐"
            },
            {
              "depth": 4,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 4,
              "value": "Vue",
              "heading": "vue"
            },
            {
              "depth": 4,
              "value": "TypeScript",
              "heading": "typescript"
            },
            {
              "depth": 4,
              "value": "NodeJS",
              "heading": "nodejs"
            }
          ]
        },
        "title": "📚 前端指南 - 前端指南"
      },
      {
        "path": "/self-test-list",
        "component": require('/mnt/d/mywork/front-guidebook/docs/self-test-list/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/self-test-list/index.md",
          "updatedTime": 1635230573446,
          "slugs": [
            {
              "depth": 1,
              "value": "自测清单",
              "heading": "自测清单"
            },
            {
              "depth": 3,
              "value": "第一步修改简历",
              "heading": "第一步修改简历"
            },
            {
              "depth": 3,
              "value": "html/css 基础",
              "heading": "htmlcss-基础"
            },
            {
              "depth": 3,
              "value": "js 基础",
              "heading": "js-基础"
            },
            {
              "depth": 3,
              "value": "工具",
              "heading": "工具"
            },
            {
              "depth": 3,
              "value": "客户端",
              "heading": "客户端"
            },
            {
              "depth": 3,
              "value": "设计模式",
              "heading": "设计模式"
            },
            {
              "depth": 3,
              "value": "算法",
              "heading": "算法"
            },
            {
              "depth": 3,
              "value": "操作系统",
              "heading": "操作系统"
            },
            {
              "depth": 3,
              "value": "网络",
              "heading": "网络"
            },
            {
              "depth": 3,
              "value": "vue 不做重点发展",
              "heading": "vue-不做重点发展"
            },
            {
              "depth": 3,
              "value": "react",
              "heading": "react"
            },
            {
              "depth": 3,
              "value": "Node.js",
              "heading": "nodejs"
            },
            {
              "depth": 3,
              "value": "性能优化",
              "heading": "性能优化"
            },
            {
              "depth": 3,
              "value": "面试总结分享",
              "heading": "面试总结分享"
            }
          ],
          "title": "自测清单",
          "nav": {
            "path": "/self-test-list",
            "title": "Self-test-list"
          }
        },
        "title": "自测清单 - 前端指南"
      },
      {
        "path": "/words/cn",
        "component": require('/mnt/d/mywork/front-guidebook/docs/words/cn.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/words/cn.md",
          "updatedTime": 1638354634687,
          "slugs": [
            {
              "depth": 1,
              "value": "汉语",
              "heading": "汉语"
            }
          ],
          "title": "汉语",
          "nav": {
            "path": "/words",
            "title": "Words"
          }
        },
        "title": "汉语 - 前端指南"
      },
      {
        "path": "/words/en",
        "component": require('/mnt/d/mywork/front-guidebook/docs/words/en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/words/en.md",
          "updatedTime": 1638354652478,
          "slugs": [
            {
              "depth": 1,
              "value": "英文",
              "heading": "英文"
            },
            {
              "depth": 2,
              "value": "计算机专业单词本",
              "heading": "计算机专业单词本"
            },
            {
              "depth": 2,
              "value": "前端中常用词汇",
              "heading": "前端中常用词汇"
            }
          ],
          "title": "英文",
          "nav": {
            "path": "/words",
            "title": "Words"
          }
        },
        "title": "英文 - 前端指南"
      },
      {
        "path": "/words",
        "meta": {},
        "exact": true,
        "redirect": "/words/cn"
      }
    ],
    "title": "前端指南",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
