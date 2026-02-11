a = "abc"
b = "cba"

list = a.split()
list2 = b.split()

list2 = list2[::-1]




test = 1


for x in len(list):
    if list[x] != list2:
        test = 0



if test == 1:
    print("yes")
    
elif test == 0:
    print("no")

