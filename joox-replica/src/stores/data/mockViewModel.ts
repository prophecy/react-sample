import viewModel from "./viewModel";
import * as _ from "./viewModel";

export const initMockData = () => {
  console.log("initMockData");
  // Setup section
  viewModel.mainPage.content.sectionList.push(
    new _.SectionBanner([
      "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/e/49c2b1376addaf403cdc74766153801e.jpg",
      "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/6/e05fc40c2f8135c64fd11e948d20a016.jpg",
      "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/9/1/a82673bd46cef523f8dc793340239f91.jpg",
    ])
  );
  viewModel.mainPage.content.sectionList.push(new _.HitChart("ชาร์ตเพลงฮิต"));
  viewModel.mainPage.content.sectionList.push(
    new _.MusicPack(
      "JOOX for Artists",
      [
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/9/8/aff2a28324293c8565457364fbd7b798.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/d/c/0d7621c4ff9998270c6e6ab6037cc5dc.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/b/4/01a30137aa9955561bb15f6ddc3895b4.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/3/5/e4dbf19e97dc4fc2d41e6490df210a35.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/0/c/c6a473974b94a2fdcd7246473b72c30c.jpg",
      ],
      [
        "JOOX for Artist: Gavin D",
        "JOOX for Artist: Maiyarap",
        "JOOX for Artist: Fiixd",
        "JOOK for Artist: MINDSET",
        "JOOK for Artist: Southside",
      ],
      ["gavin_d", "maiyarap", "fiixd", "mindset", "southside"]
    )
  );
  viewModel.mainPage.content.sectionList.push(
    new _.MusicPack(
      "#togetherwecan",
      [
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/e/4/1472b5a2c184c4158fb21b514db647e4.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/c/d/cc9f01bd38bfad7042bf1757da353ccd.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/e/4/54ca690c8cb587b815911a11739801e4.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/0/7/958200052f4d8856dd3dabaebb0c1807.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/4/1/6faf93a38aaf0c11ca55dcc48cd4c841.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/a/0/060941dd92d29feffbc5f4bdc10a66a0.jpg",
      ],
      [
        "ฟังไปด้วยกัน #togetherwecan",
        "ข่าวร้อน ON JOOX",
        "ร็อคกันมันส์ดี",
        "เพราะมาก อยากแชร์",
        "เพลงเพราะขอแนะนำ",
        "สโลว์ไลฟ์ไปกับเสียงเพลง",
      ],
      [
        "fung_pai_duay_gun",
        "ron_on_joox",
        "rock_gun_mun_dee",
        "yak_share",
        "proa_nae_num",
        "slow_life_pai",
      ]
    )
  );
  viewModel.mainPage.content.sectionList.push(
    new _.MusicPack(
      "เพลงใหม่",
      [
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/5/e/d3a273e7dcccd8e066f65df0130e3d5e.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/d/c/894d4e9b995ba12627d9777353ed49dc.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/9/b/0178443bf92c00b798c90b7740592c9b.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/a/c/752179503ac7a9911151c07c3bb3c7ac.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/5/0/70abf00c9b0bde422d518b68a8a75650.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/b/3/a8d55d85d90d78b0307e8540789516b3.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/0/1/38045d6c86f7eca517fdd4e677bae701.jpg",
      ],
      [
        "New Music [Thai]",
        "New Music [K-POP]",
        "New Music [ลูกทุ่ง]",
        "New Music [Inter]",
        "New Music [Indie - Inter]",
        "Hot Songs of The Month [May]",
        "New Podcast",
      ],
      [
        "thai",
        "kpop",
        "looktung",
        "inter",
        "indie_inter",
        "hot_of_month",
        "new_podcast",
      ]
    )
  );
  viewModel.mainPage.content.sectionList.push(
    new _.SongColumn(
      "คอลัมน์เพลง",
      [
        "https://s.isanook.com/jo/0/rp/rc/w282h160/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wL2RjMjFmM2M2ZTY1NDVmNzEvMzAwLmpwZw==.jpg",
        "https://s.isanook.com/jo/0/rp/rc/w282h160/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzY5ZjIxNDI4MTMxNjEyMDQvMzAwLmpwZw==.jpg",
        "https://s.isanook.com/jo/0/rp/rc/w282h160/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzI2MDUwYTVmYmZmNzQxNjUvMzAwLmpwZw==.jpg",
      ],
      [
        "ชวนมาดู Online Festival กับ Singha Lift It Up by JOOX Homeroom",
        "JOOX เตรียมส่งความสุขถึงบ้านตลอด 5 วันกับเฟสติวัลการกุศล HOMEROOM",
        "JOOX VIP Double ซื้อเท่าไหร่ ได้เพิ่มเท่านั้น! 26 – 31 มีนาคมนี้!",
      ],
      ["#c1970c", "#0e2a33", "#bf4a53"]
    )
  );
  viewModel.mainPage.content.sectionList.push(
    new _.Genre("แนวเพลง", [
      new _.GenreItem(
        "Podcast",
        "podcast",
        "https://s.isanook.com/jooxweb-api/media/uploads/genre/76/1577163863-0738.jpg"
      ),
      new _.GenreItem(
        "K-POP",
        "kpop",
        "https://s.isanook.com/jooxweb-api/media/uploads/genre/None/1577163141-0419.jpg"
      ),
      new _.GenreItem(
        "ลูกทุ่ง",
        "looktoong",
        "https://s.isanook.com/jooxweb-api/media/uploads/genre/33/1577164641-0999.jpg"
      ),
    ])
  );
  viewModel.mainPage.content.sectionList.push(
    new _.MusicList("ลิสต์เพลง", [
      new _.MusicListItem(
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/a/6/b1a6abe1e6fb6f89cccdf2fdd88399a6.jpg",
        "What's Hot Today",
        "what_hot_today"
      ),
      new _.MusicListItem(
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/b/6/6eaf9e47ed44ff7833019b205b9f3fb6.jpg",
        "เพลงใหม่",
        "new_song"
      ),
      new _.MusicListItem(
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/f/b/dbbf39caa6b9dcd4bbc90192f3dd55fb.jpg",
        "อังกฤษ",
        "england"
      ),
      new _.MusicListItem(
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/d/2/a209eeba4f21092c513cd2d82ec42cd2.jpg",
        "เกาหลี",
        "korea"
      ),
      new _.MusicListItem(
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_1000/3/d/abad4a741efeff39bec51c0b11c9493d.jpg",
        "พอดแคสต์",
        "podcast"
      ),
      new _.MusicListItem(
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/3/2/01329554250c8c10c17fb0cf2ea59032.jpg",
        "ลูกทุ่ง",
        "looktung"
      ),
    ])
  );
  viewModel.mainPage.content.sectionList.push(
    new _.Sitemap([
      new _.SitemapItem(
        "ฟังเพลง",
        "วาฬเกยตื้น|คั่นกู (เพลงประกอบซีรีส์ เพราะเราคู่กัน)|คิด(แต่ไม่)ถึง (Same Page?)|นิโคติน|ลงใจ|ถ้าฉันเป็นเขา (Special Version)|Goodnight - Single|ไม่ควรคิดถึงเธอ (feat. ตู่ ภพธร)|เบื่อ เบื่อ เบื่อ|ไม่ได้เจอกันมาตั้งนาน - Single|เหมือนจะดี|ลืมว่าต้องลืม (Forgot to forget) - Single"
      ),
      new _.SitemapItem(
        "ลิสต์เพลงเพราะๆ",
        "ร็อคกันมันส์ดี|เพราะมาก อยากแชร์|เพลงเพราะขอแนะนำ|สโลว์ไลฟ์ไปกับเสียงเพลง|ฟังไปด้วยกัน #togetherwecan|ออกกำลัง เปิดฟังไปด้วย|ฟังแล้วฟินอินตามเพลง|เพลงดี 10 ปีก่อน|จะทำงานให้ดี ต้องมีเพลงฟัง|เพลงน่าฟังจังหวะสนุก|ร้องตาม อาบน้ำเพลิน|เพลงดังยังฟังอยู่"
      ),
      new _.SitemapItem(
        "เพลงใหม่ 2020",
        "Goodnight - Single|ไม่ควรคิดถึงเธอ (feat. ตู่ ภพธร)|เบื่อ เบื่อ เบื่อ|ไม่ได้เจอกันมาตั้งนาน - Single|เหมือนจะดี|ลืมว่าต้องลืม (Forgot to forget) - Single|ไม่ได้ไปต่อ - Single|จะตายแล้ว|ความรู้สึกที่เปลี่ยน"
      ),
      new _.SitemapItem(
        "ศิลปินยอดฮิต",
        "BTS|GUNGUN|Indigo|NUM KALA|Scrubb|มนต์แคน แก่นคูน|ส้ม มารี|BOWKYLION|Bodyslam|GOT7|ต่าย อรทัย|Tilly Birds"
      ),
      new _.SitemapItem(
        "เพลงฮิต",
        "Thailand Top 100|Top 50 International|Top Karaoke Hits|Top 50 Indie|Top 100 เพลงลูกทุ่ง|Top 50 K-Pop|Top 50 Asian|THTOP100 2019|All Time Hits Chart|TOP 50 PODCAST"
      ),
      new _.SitemapItem(
        "ฟังวิทยุออนไลน์",
        "ยิ่งฟังยิ่งเพราะ สถานีเพลง - ฟังวิทยุออนไลน์ฟรีบน JOOX เรดิโอ|เพลงเพราะ 2563 Station - Listen Online Free on JOOX Radio|2020 Hits [International]|2019 Hits [International]|Pop|Hip-Hop"
      ),
    ])
  );
};
