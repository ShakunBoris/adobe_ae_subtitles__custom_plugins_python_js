import time as tm
solid = '''Австралийский биотехнологический гигант «FRAME» лидирует на рынке когнитивных имплантов..&&&澳大利亚 生物技术 巨头 “FRAME” 在 认知植入物 市场领先 '''
# text_local = '''Австралийский биотехнологический гигант «FRAME» лидирует на рынке когнитивных имплантов.'''
# text_china = '''澳大利亚 生物技术 巨头 “FRAME” 在 认知植入物 市场领先'''
solid = solid.replace('\n', ' ')
text_local = solid.split('&&&')[0].split(' ')
text_china = solid.split('&&&')[1].split(' ')
if len(text_local) < len(text_china):
    text_china = text_china[:len(text_local)]
text_local = ' '.join(text_local)
text_china = ' '.join(text_china)
max_len = max(len(text_local.split(' ')), len(text_china.split(' ')))
text_sum = []
tmp = ''
for i in range(max_len):
    if i < len(text_china.split(' ')):
        text_sum.append(text_china.split(' ')[i])
    if i < len(text_local.split(' ')):
        text_sum.append(text_local.split(' ')[i])
text_sum_txt = ' '.join(text_sum)
# print(text_sum_txt)
result = ''
for time in range(len(text_sum_txt)):
    last_space = text_sum_txt[:round(time)].rfind(' ')
    if len(text_sum_txt[:last_space].split(' ')) <= min(len(text_local.split(' '))*2, len(text_china.split(' '))*2):
        if last_space != -1:
            tmp = ' '.join(text_sum_txt[:last_space].split(' ')[1::2])  + text_sum_txt[last_space:round(time)] 
            tmp = tmp.strip()
            # print(tmp)
    elif last_space == -1:
        tmp = text_sum_txt[0:round(time)]
        # print(tmp)
    elif last_space != -1:
        last_item = min(len(text_local.split(' '))*2, len(text_china.split(' '))*2)
        last_item_index = len(' '.join(text_sum[:last_item]))
        tmp = ' '.join(text_sum_txt.split(' ')[1:last_item:2])  + text_sum_txt[last_item_index:round(time)]
    print(tmp, end='\r')
    tm.sleep(0.1)
    
