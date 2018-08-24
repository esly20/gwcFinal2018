from filters import *

# Define your obamicon() function here.
#       Parameters: The image object to apply the filter to.
#       Returns: A New Image object with the filter applied.
def obamicon(im):
    pixels = list(im.getdata())
    for i in range(len(pixels)):
        pixel = pixels[i] #3- tuple variable
        intensity = (pixels[0] + pixels[1] + pixels[2])
        #change the color
        if intensity < 182:
            pixels[i] = (0, 51, 76)
        elif intensity < 364:
            pixels[i] = (217, 26, 33)
        elif intensity < 546:
            pixels[i] = (112, 150, 158)
        elif intensity > 546:
            pixels[i] = (252, 227, 166)

    #return an image object

def main():
    inside == load_img("bookstore.jpg")
    obamicon

if _name_ == '_main_':
    main()
