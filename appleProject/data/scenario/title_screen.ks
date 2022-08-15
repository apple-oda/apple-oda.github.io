

[hidemenubutton]

[tb_clear_images]

[tb_keyconfig  flag="0"  ]
[tb_hide_message_window  ]
[bg  storage="home-day.jpg"  method="fadeIn"  ]
*title

[glink  color="black"  text="はじめから"  x="947"  y="393"  size="20"  target="*start"  width=""  height=""  _clickable_img=""  ]
[glink  color="black"  text="つづきから"  x="949"  y="473"  size="20"  target="*load"  width=""  height=""  _clickable_img=""  ]
[s  ]
*start

[showmenubutton]

[cm  ]
[tb_keyconfig  flag="1"  ]
[tb_start_tyrano_code]
[eval exp="sf.flgS2a='false'"]
[eval exp="sf.flgS2b='false'"]
[eval exp="sf.flgS2c='false'"]
[eval exp="sf.flgS2d='false'"]
[eval exp="sf.flgS2e='false'"]
[_tb_end_tyrano_code]

[jump  storage="scene1.ks"  target=""  ]
[s  ]
*load

[cm  ]
[showload]

[jump  target="*title"  storage=""  ]
[s  ]
