# gem-timeline-data

邓紫棋(G.E.M.)的时间线数据，包含从1991年出生至今的关键人生事件，以及小说时间线数据。

## 安装

```bash
npm install gem-timeline-data
# 或
cnpm install gem-timeline-data
```

## 使用方法

```javascript
// 导入数据和类型
import { gemTimelineData, novelTimelineData } from 'gem-timeline-data';
import type { TimelineData, TimelineYear, Event } from 'gem-timeline-data';

// 使用数据
console.log(gemTimelineData);
// 输出邓紫棋的完整时间线数据

console.log(novelTimelineData);
// 输出小说的时间线数据

// 获取特定年份的数据
const year2022 = gemTimelineData.find(item => item.year === '2022');
console.log(year2022);

const novelYear2020 = novelTimelineData.find(item => item.year === '2020');
console.log(novelYear2020);
```

## 数据结构

- `gemTimelineData`: 包含邓紫棋所有年份的时间线数据数组
- `novelTimelineData`: 包含小说时间线数据的数组
- 每个年份对象包含：
  - `year`: 年份字符串
  - `events`: 事件数组
- 每个事件对象包含：
  - `date`: 日期字符串（可能为空）
  - `content`: 事件内容描述

## 数据内容

gemTimelineData 涵盖了邓紫棋的以下关键事件：
- 出生和早期生活
- 音乐事业起步
- 专辑发布
- 演唱会信息
- 获奖记录
- 重要演出和活动
- 事业转折点

novelTimelineData 包含小说中的时间线事件。

## 许可证

MIT