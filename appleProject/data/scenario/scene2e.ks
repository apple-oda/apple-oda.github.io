

[bg  time="1000"  method="crossfade"  storage="koutei.jpg"  ]
[tb_show_message_window  ]
[tb_start_text mode=1 ]
#先生
「では、生徒の皆さんからお伝えしたいことなどありますか？」[p]
[_tb_end_text]

[tb_start_text mode=2 ]
#
毎週月曜日の全校集会。[l][r]
ほとんど形骸化しているこの質問に、今日は珍しく手が上がった。[l][r]
[_tb_end_text]

[cm  ]
[tb_start_text mode=1 ]
#先生
「はい、どうぞ…えーと？」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#千石陽翔
「1年3組、千石陽翔です！」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
指されれば、駆け足で少年は壇上に上がる。[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#千石陽翔
「初めまして！そうでない人はおはようございます！」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
壇上のマイクを合わせ、良く響く声で少年は言う。[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#千石陽翔
「えーと、このたび、僕は！演劇部を！再興したいと思っています！なので！」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#生徒たち
(演劇部？去年潰れたとか聞いた気が…)(物好きだなぁ…)(本気？)[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
ざわざわとざわめきが広がる。[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#千石陽翔
「演劇に興味があったり！経験したことあるよーって人！来てくれると嬉しいです！」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
ぴょこんと勢いよく頭を下げると、少年は壇上から降りていく。[p]
[_tb_end_text]

[tb_start_text mode=2 ]
#
話し手が先生に戻れば、喧騒は徐々に収まり。[l][r]
すぐにいつも通りの様相に戻った集会の中、1人だけが拳を強く握りしめていた。[l][r]
[_tb_end_text]

[cm  ]
[mask  time="500"  effect="fadeIn"  color="0x000000"  ]
[bg  time="0"  method="crossfade"  storage="sora.jpg"  ]
[mask_off  time="500"  effect="fadeOut"  ]
[tb_start_text mode=1 ]
#？？？
「…………最悪だ」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
吐き捨てられた言葉は、誰に届くこともなく消えていった。[p]
[_tb_end_text]

[tb_start_tyrano_code]
[if exp="sf.flgS2e=='false'"]
[eval exp="sf.flgS2e='true'"]
[endif]
[_tb_end_tyrano_code]

[tb_start_tyrano_code]
[if exp=" sf.flgS2a=='true' && sf.flgS2b=='true' && sf.flgS2c=='true' && sf.flgS2d=='true' && sf.flgS2e=='true' "]
[jump  storage="scene3.ks"  target=""  ]
[endif]
[_tb_end_tyrano_code]

[jump  storage="scene1.ks"  target="*LB1001"  ]
