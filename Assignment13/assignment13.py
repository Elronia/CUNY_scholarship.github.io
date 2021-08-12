# Part A:
#  Create a list called myList with 8 values
#  Assign the values (from position 1 to the end) of myList to a new list myList2
#  append a new item to myList2 , remove the 3rd item then assign the list to myList3
print("Part A:")

myList = [3, 5, 7, 8, 17, 33, 55, 77]
print(myList)

myList2 = myList[1:]
print(myList2)

myList2.append(88)
print(myList2)

del myList2[2]
print(myList2)

myList3 = myList2
print(myList3)

# Part B:
# Explain what each of the methods does, then print out the result of each method using your own data.
print("Part B: 'String Methods'")

# 1) count(sub,[start,[end]])  
    # Returns the number of times a specified value occurs in a string
    # where sub is a string, it's required. The string to sub to search for;
    # start is an Integer, it's optional. The position to start the search. Default is 0;
    # end is an Integer, it's optional. The position to end the search. Default is the end of the string
txt = "Creeps in this petty pace from day to day, To the last syllable of recorded time;"

x = txt.count("day")
print(x)

x = txt.count("day", 5, 24)
print(x)

# 2) endswith(suffix,[start,[end]]) Returns true if the string ends with the specified value
    # where suffix is required. The value to check if the string ends with;
    # start is optional. An Integer specifying at which position to start the search;
    # end is optional. An Integer specifying at which position to end the search
txt = "To be, or not to be, that is the question:"

x = txt.endswith("the question:")
print(x)

x = txt.endswith("the question:", 18, 19)
print(x)

# 3) find/index(sub,[start,[end]]) Searches the string for a specified value and returns the position of where it was found
    # where sub is required. The value to search for;
    # start is optional. Where to start the search. Default is 0;
    # end optional. Where to end the search. Default is to the end of the string
txt = "You are welcome!"

x = txt.find("welcome")
print(x)

x = txt.index("e", 3, 10)
print(x)
# 4) isalnum() Returns True if all characters in the string are alphanumeric
txt = "Grade100"

x = txt.isalnum()
print(x)

# 5) isalpha() Returns True if all characters in the string are in the alphabet(can be both lowercase and uppercase).
    # False if at least one character is not alphabet.
name = "sunny"
print(name.isalpha())

# 6) contains whitespace
name = "Sunny weather"
print(name.isalpha())

# 7) isdigit() Returns True if all characters in the string are digits, otherwise False.
txt = "577"

x = txt.isdigit()
print(x)

# 8) islower() Returns True if all characters in the string are lower case
a = "Hello world!"
b = "hello 123"
c = "My name is Kate"

print(a.islower())
print(b.islower())
print(c.islower())

# 9) isspace() Returns True if all characters in the string are whitespaces, otherwise False.
txt = "To be, or not to be"

x = txt.isspace()
print(x)

# 10) istitle() Returns True if the string follows the rules of a title, 
    # returns True if all words in a text start with a upper case letter, AND the rest of the word are lower case letters, otherwise False.
txt = "Science & Technology"

x = txt.istitle()
print(x)

# 11) isupper() Returns True if all characters in the string are upper case, otherwise False.
txt = "GREAT WEATHER!"

x = txt.isupper()
print(x)

# 12) join()  method takes all items in an iterable and joins them into one string.
    # A string must be specified as the separator.
myDict = {"name": "John", "country": "Smith"}
mySeparator = "#"

x = mySeparator.join(myDict)

print(x)

# 13) lower() Converts a string into lower case, it returns a string where all characters are lower case.
    # Symbols and Numbers are ignored.
txt = "GREAT WEATHER!"

x = txt.lower()
print(x)

# 14) replace(old,new[,count]) method replaces a specified phrase with another specified phrase. Returns a string where a specified value is replaced with a specified value.
txt = "I like cherries"

x = txt.replace("cherries", "strawberries")
print(x)

# 15) split([sep[,maxsplit]]) Splits the string at the specified separator, and returns a list
    # where sep is optional. Specifies the separator to use when splitting the string. By default any whitespace is a separator
    # maxsplit is optional. Specifies how many splits to do. Default value is -1, which is "all occurrences" 
txt1 = "Hello, my name is John, I am 21 years old"
x = txt1.split(", ")
print(x)

txt2 = "blueberry#blackberry#cherry#strawberry"
x = txt2.split("#")
print(x)

txt3 = "apple#banana#peach#orange"
# setting the maxsplit parameter to 1, will return a list with 2 elements!
x = txt3.split("#", 1)
print(x)

# 16) splitlines([keepends]) Splits the string at line breaks and returns a list
    # where keepends is optional. Specifies if the line breaks should be included (True), or not (False). Default value is False
txt = "To be, or not to be, that is the question:\nWhether 'tis nobler in the mind to suffer"

x = txt.splitlines()
print(x)

# 17) startswith(prefix[,start[,end]]) Returns True if the string starts with the specified value, otherwise False
    # where prefix is required, the value to check if the string starts with;
    # start	is optional, an Integer specifying at which position to start the search;
    # end is optional, an Integer specifying at which position to end the search.
txt = "To be, or not to be, that is the question"

x = txt.startswith("To")
print(x)

# 18) strip([chars]) method removes any leading (spaces at the beginning) and trailing (spaces at the end) characters (space is the default leading character to remove)
    # Returns a trimmed version of the string, 
    # where chars is optional, a set of characters to remove as leading/trailing characters
txt = "     strawberry     "

x = txt.strip()
print("of all berries", x, "is my favorite")

# 19) upper() method returns a string where all characters are in upper case. Converts a string into upper case
    # Symbols and Numbers are ignored.
txt = "Great weather!"

x = txt.upper()
print(x)

