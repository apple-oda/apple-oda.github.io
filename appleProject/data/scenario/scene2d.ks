

[bg  time="0"  method="fadeIn"  storage="schoolgate-day.jpg"  ]
[tb_show_message_window  ]
[tb_start_text mode=1 ]
#千石陽翔
「演劇に興味のある方いませんかー！」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
校門前、下校しようとする生徒たちをターゲットに勧誘してみる。[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
興味を持ってくれたのか、1人の留学生が近づいてきてくれた。[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#留学生
「————、——————？」[p]
[_tb_end_text]

[tb_start_text mode=2 ]
#
いきなりのネイティブ英語に驚く。[l][r]
とりあえず『何してるんだ？』みたいなニュアンスが聞き取れた気がした。[l][r]
[_tb_end_text]

[cm  ]
[tb_start_text mode=1 ]
#千石陽翔
「え、えーと、演劇部……えーと、ショウ！ショウクラブ、ドゥーユー……えー……」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#留学生
「———？—————、————？」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
少し苛立たし気に首を傾げた後、留学生が友人に質問の口調で話している。[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#留学生の友人
「えーとだな。ヒー、インバイツ、ユー、トゥー、えー…ドラマクラブ。かな」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#留学生
「———？————、————」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
何となく『そんなクラブ聞いたことないぜ』的なことをいわれた気がする。[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#千石陽翔
「えー、えーっと……」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#留学生
「————。——、————」[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#
頑張れよ、みたいに笑って肩を叩きながら、彼は去っていった。[p]
[_tb_end_text]

[bg  time="0"  method="fadeIn"  storage="sora.jpg"  ]
[tb_start_text mode=1 ]
#
……もうちょっと英語勉強しとくんだった…と後悔した陽翔であった。[p]
[_tb_end_text]

[tb_start_tyrano_code]
[if exp="sf.flgS2d=='false'"]
[eval exp="sf.flgS2d='true'"]
[endif]
[_tb_end_tyrano_code]

[tb_start_tyrano_code]
[if exp=" sf.flgS2a=='true' && sf.flgS2b=='true' && sf.flgS2c=='true' && sf.flgS2d=='true' && sf.flgS2e=='true' "]
[jump  storage="scene3.ks"  target=""  ]
[endif]
[_tb_end_tyrano_code]

[jump  storage="scene1.ks"  target="*LB1001"  cond=""  ]
