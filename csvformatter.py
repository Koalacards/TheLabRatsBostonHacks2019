import csv


path = 'C:\\Users\\jaron\\OneDrive\\Documents\\ACTUAL DOCS\\Work\\BostonHacks\\TheLabRatsBostonHacks2019\\Data.csv'
with open(path) as csvfile:
    reader = csv.reader(csvfile)
    edit = False
    headers = True
    nums = []
    spreadsheet = []
    for row in reader:
        contents = []
        for column in row:
            if edit:
                if headers:
                    num = column.partition('\n')[0]
                    headers = False
                else:
                    num = column.partition('\n')[0][1:]
                if num != "":
                    nums.append(num)
                    contents.append(num)
                    spreadsheet.append(contents)
            else:                    
                contents.append(column)
                
            edit = not edit
    
    outpath = 'C:\\Users\\jaron\\OneDrive\\Documents\\ACTUAL DOCS\\Work\\BostonHacks\\TheLabRatsBostonHacks2019\\Cleandata.csv'
    with open(outpath, 'w') as outfile:
        fieldnames = [spreadsheet[0][0], spreadsheet[0][1]]
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()
        for row in range(1, len(spreadsheet)):
            writer.writerow({spreadsheet[0][0]: spreadsheet[row][0], spreadsheet[0][1]:spreadsheet[row][1]})
