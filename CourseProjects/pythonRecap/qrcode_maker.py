import qrcode

code1 = qrcode.make("https://github.com/pietracz")

code1.save("qrcode.png")