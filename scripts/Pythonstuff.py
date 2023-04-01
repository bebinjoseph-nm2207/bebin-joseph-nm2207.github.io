#I used Chat-GPT to write the skeletal code to convert csv file into an array. Then I modified the values and iterated the output variables to give me individual arrays which I then copied over to main.js
#I would also like to thank U-Mich for teaching me how to do this
#I don't know how Python sets the directory in github but, I can't change the directory on my machine so I had to run this file in the specified directory
import csv
import ast
#data processing for India
outputIndia = [] #declaration of accum pattern
newlinIndia =[] #declaration of accum pattern
with open('../resources/IndiaSEAarmsexports.csv',newline='') as fileref:
    reader = csv.reader(fileref, delimiter=',', quotechar='"') 
    for row in reader:
        output_row = []
        for i in range(len(row)):
             output_row.append(row[i])
        outputIndia.append(output_row)
for line in outputIndia:
    if line != outputIndia[0]:
        if line != outputIndia[-1]:
            newlinIndia.append(line[0])
print("This is India ")
print(newlinIndia)
outputChina = [] #declaration of accum pattern
#data processing for China
with open('../resources/ChinaSEAarmsexports.csv',newline='') as fileref:
    reader = csv.reader(fileref, delimiter=',', quotechar='"')
    for row in reader:
        output_row = []
        for i in range(len(row)):
             output_row.append(row[i])
        outputChina.append(output_row)
#print(outputChina)
newlinChina=[] #declaration of accum pattern
for line in outputChina:
    #print(line[0])
    if line != outputChina[0]:
        if line != outputChina[-1]:
            newlinChina.append(line[0])
print("This is China ")
print(newlinChina)

print("Python is a valuable tool:)")
