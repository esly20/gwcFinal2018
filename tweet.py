# import json
#
# f = open("tweets_small.json", "r")
# tweets = json.load(f)
# f.close()

'''
In this project, you will visualize the feelings and language used in a set of
Tweets. This starter code loads the appropriate libraries and the Twitter data you'll
need!
'''
import json
from textblob import TextBlob
import matplotlib.pyplot as plt
from wordcloud import WordCloud

#Get the JSON data
tweetFile = open("tweet.json", "r")
tweetData = json.load(tweetFile)
tweetFile.close()

# Continue your program below!
polaritylist = []
sublist = []

def average(numbers):
    sum = 0
    for num in numbers:
        sum += num
    return sum/len(numbers)

word = ""

for tweets in tweetData:
    text = tweets["text"]
    word += text
    tb = TextBlob(text)
    polaritylist.append(tb.polarity)
    sublist.append(tb.sentiment.subjectivity)

tb = TextBlob(word)

# print(average(polaritylist))
# print(average(sublist))
print(word)

dictionary = {}

for word in tb.words:
    if dictionary[word] += 1  
    else:
         dictionary[word] = 1
#create variable to hold frequency dictionary
#for each word in text blob's word
    #if word in frequency dictionary, update count
    #else, put it in dictionary with count of 1



plt.hist(polaritylist, bins=[-1, -0.5, 0.0, 0.5, 1])
plt.xlabel('polarity scores')
plt.ylabel('number of tweets')
plt.title('Histogram of polarity scores')
plt.axis([-1.1, 1.1, 0, 100])
plt.grid(True)
plt.show()

plt.hist(sublist, bins=[0.0, 0.5, 1])
plt.xlabel('subjectivity scores')
plt.ylabel('number of tweets')
plt.title('Histogram of subjectivity scores')
plt.axis([0, 1.1, 0, 100])
plt.grid(True)
plt.show()
