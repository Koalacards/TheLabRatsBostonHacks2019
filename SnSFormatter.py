import csv


path = 'C:\\Users\\hayde\\Documents\\GitHub\\TheLabRatsBostonHacks2019\\StopNShopData.csv'
with open(path) as csvfile:
    reader = csv.reader(csvfile)
    edit = False
    nums = []
    spreadsheet = []
    for row in reader:
        contents = []
        for column in row:
            if edit:
                num = column.partition('\n')[0]  
                if num != "":
                    nums.append(num)
                    contents.append(num)
                    spreadsheet.append(contents)
            else:
                contents.append(column)

            edit = not edit

    outpath = 'C:\\Users\\hayde\\Documents\\GitHub\\TheLabRatsBostonHacks2019\\SnSCleanData.csv'
    with open(outpath, 'w') as outfile:
        fieldnames = [spreadsheet[0][0], spreadsheet[0][1]]
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()
        for row in range(1, len(spreadsheet)):
            item = spreadsheet[row][0]
            price = spreadsheet[row][1]
            if item == "" or price == "":
                hi = True #Will this still error?
            else:
                writer.writerow({spreadsheet[0][0]: spreadsheet[row][0], spreadsheet[0][1]:spreadsheet[row][1]})
