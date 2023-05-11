import random
import time as tm
import tkinter as tk

root = tk.Tk()

# Создаем текстовую область
font = ('Verdana', 18)
textb = tk.Text(root, font=font)
textb.pack()

text = '''"What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
'''
# time = random.choice(range(len(text)))
result  = ''
# print('current position: ', text[:round(time)])
# text.replace('\\n', ' ')
for time in range(len(text)+1):
    last_space = text[:round(time)].rfind(' ')
    if last_space == -1:
        last_space = 0
    # print('last_space position: ', last_space)
    if round(time) >= len(text):
        result = text
    else:
        if round(time)-last_space-1 >= 0:
            result = text[:last_space] + ' '+ ''.join(random.sample('ɑ ɒ æ ɔ ɕ ð ə ɛ ɜ ɡ ɥ ɪ ɨ ʊ ʌ ɯ ɲ ŋ ɹ ʃ ʊ ʏ ʒ ʔ ʕ ʘ ʙ ʜ ʢ ʡ ʀ ʜ ʟ ɬ ɮアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン', round(time)-last_space-1))
        else:
            pass
    print('current result: ', result, end='\r')
        # Получаем текущий текст в текстовой области
    current_text = textb.get('1.0', 'end-1c')
    # Заменяем текст на новый
    new_text = result
    textb.delete('1.0', 'end')
    textb.insert('1.0', new_text)
    # Обновляем окно
    root.update()
    tm.sleep(0.2)
input()