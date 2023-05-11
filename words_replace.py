import time as tm

text_local = '''Австралийский биотехнологический гигант «FRAME» лидирует на рынке когнитивных имплантов.'''
text_china = '''澳大利亚 生物技术 巨头 “FRAME” 在 认知植入物 市场领先'''
result = ''

for time in range(len(text_china)+1):
    last_space = text_china[:round(time)].rfind(' ')
    if last_space == -1:
        last_space = 0
    if round(time) >= len(text_china):
        result = text_local
    else:
        if round(time)-last_space-1 >= 0:
            n_words = len(text_china[:last_space].split())
            result = ' '.join(text_local.split(' ')[:n_words]) + text_china[last_space:time]          
        else:
            pass
    print('current result: ', result, end='\r')
    tm.sleep(0.1)