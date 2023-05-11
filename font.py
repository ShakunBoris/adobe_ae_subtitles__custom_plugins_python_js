import time
import random 


'''
L = text.sourceText.length;
T = time*effect("Speed")("Slider");
F = Math.round(T % 1);

if(F==1 |(T <L & T>0)){Fl="_";}else{Fl=" ";}

substr(0,T) + Fl;
'''

# TEXT ALWAYS STARTS AND ENDS WITH SPACE!!!!!!!!!! " " !!!!!!
text = ' Georgia is the best place to live  '
skip = []
t = 20
for i in range(len(text)):
    if i not in skip:
        print(text[0:i+1] + ' '*5, end='\r')
    if text[i] == ' ' or i == 0:
        start = i
        if i< len(text):
            stop = text.find(' ', i+1)
            if stop == -1:
                stop = len(text) -1 
        for j in range(stop-start):
            # rnd = 
            print(text[0:i+1] + \
                ''.join(random.sample('我可以帮您翻译成中文或使用中文汉字书写', j)) + \
                    ' '*5, end='\r')
            time.sleep(0.2)
        skip.extend(list(range(start, stop+1)))
        # print(start, ' : ', stop)     
    if i not in skip:
        time.sleep(0.2)
        pass
