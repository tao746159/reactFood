import React, { ReactElement, useEffect, useState } from 'react'

import Swipe from './../../RFUI/Swipe/Swipe'
import axios from 'axios'
import './index.styl'
import RHeader from '../../components/RHeader/RHeader'
import HomeList from './HomeList/HomeList'
const swipe01 = require(`./../../image/swipe/hb_01.jpg`)
const swipe02 = require(`./../../image/swipe/hb_02.jpg`)
const swipe03 = require(`./../../image/swipe/hb_03.jpg`)
const homehb01 = require(`./../../image/hb/home-hb01.jpg`)
const list = [
  {
    src: "ms_01",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_02",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_03",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_04",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_05",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_06",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_07",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
  {
    src: "ms_08",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    synopsis:
      "羊肉串的做法很简单，也不需要用什么特殊的厨具。准备好肥瘦相间的羊腿肉、竹签、洋葱、孜然粉等调料。首先将羊腿肉切成体积大概2~5立方厘米的肉块，浇上两勺牛奶，适量的洋葱碎抓捏，腌制15分钟左右。然后加上适量的盐、糖、孜然颗粒、辣椒粉和白芝麻拌均。之后把竹签洗干净，泡入水中。作文https://Www.ZuoWEn8.Com/最后将腌制好的羊肉块均匀的串在竹签上，刷上芝麻油，再撒上适量的调料，烧箱预热200摄氏度，烧15分钟，烤到羊肉的表面“吱吱”的冒油就可以了。这个时候羊肉串会散发出浓郁的肉香味，让人“口水直流三千尺”啊！",
  },
];
interface Props {

}
const height = window.screen.height

export default function Home({ }: Props): ReactElement {
  let [list, setList] = useState([])
  useEffect(() => {
    handleGetHomelist()
  }, [])

  const handleGetHomelist = () => {
    axios.get('').then(res => {
      if (res.data.code === 200) {
        setList(list = res.data.list)
      }
    })
  }

  return (
    <div className="home">
      <RHeader title="首页" cart="cart"></RHeader>
      <Swipe imgs={[swipe01, swipe02, swipe03, swipe01]}></Swipe>
      <div className="home-hb">
        <h4>推荐</h4>
        <img src={homehb01} />
      </div>
      <div className="home-list" >
        <HomeList list={list}></HomeList>
      </div>
    </div>
  )
}
