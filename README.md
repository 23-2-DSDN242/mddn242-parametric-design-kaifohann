# MDDN 242 2023 Assignment 2: Parametric Design

##SPECTRUM by Hannah Kai Fong

Each letter form's base is composed of a yellow, cyan, and magenta square with rounded corners and a slight offset from one another. The blend mode for the base is set to 'multiply', so the overlapping sections are black. Each form has an overlayed white rectangle and overlayed arc to 'cut out' sections of the base rectangle and create the letterforms with positive space. 
The arc's X position, Y position, width, height, start angle, and stop angle can be controlled through parameters. 
The overlayed rectangle size, X position, Y position, and corner roundedness can be controlled through parameters as well.
The X position of all shapes in draw_letters.js is relative to the 'boxCenterX' parameter, which allows the letterforms to have consistent horizontal movement when interpolating. 

The 11 parameters for each letter are:

  * 'boxCenterX': the center of the bounding box (only used to base other shapes' X position on and for even horizontal movement when interpolating)
  * 'rectSize' : size of overlayed rect (width and height are equal)
  * 'offsetx' : overlayed rect X position 
  * 'offsety' : overlayed rect Y position
  * 'CornerRounds' : roundedness (radius) of corners on overlayed rect
  * 'arcX' : overlayed arc X position
  * 'arcY' : overlayed arc Y position
  * 'arcW' : overlayed arc width
  * 'arcH' : overlayed arc height
  * 'arcStart' : overlayed arc start angle
  * 'arcStop' : overlayed arc stop angle

My Design Process:

I started this design process with a series of sketches that were quite different. I experimented with only using arcs to create the letterforms and only using rectangles before I started attempting to layer different shapes. I found that I quite liked the effect of layering shapes which were the same colour as the background on top of a base shape to 'take chunks' out of the central form. This started as quite geometric, however, I started playing with rounding corners on rectangles and ended up with the forms I created for my sketch page. These were made of a rounded rectangle/square base and an overlayed arc and set-sized ellipse that were the same colour as the background. I enjoyed how fun and soft these forms were compared to using sharp vertexes. This technique I was using (taking chunks out of a base form) reminded me of taking bites from an apple, so the initial colour palette was chosen to mimic green apples. 

I recreated this green apple effect in my draw_letters.js file before starting work on the other letters. 
My initial parameters were the ellipse X position, ellipse Y position, arc X position, arc Y position, arc height, arc width, arc start, and arc stop. 

I started running into some major problems when I got to 'H' and 'I'. I realised having a set ellipse size stopped me from taking bigger chunks out of the letters and stopped me from creating forms with a symmetry line (vertical or horizontal). To fix this, I added the ellipse size as a parameter. 

I then came across another issue when I got to 'J'. Initially, the J had a large ellipse overlaying its base shape, however when checking the exhibition page, I realised that because the ellipse exceeded the bounding box, it would take chunks out of neighbouring letters. I attempted to shrink the ellipse down, however, I wasn't able to make a recognisable letter form without it exceeding the bounding box. I chose to change the ellipse to a square and create a corner rounding parameter that let me turn the square into a circle when it was needed. This looked much better, but it still had a slight overlap with neighbouring letters. To fix this I ended up scaling all of the shapes down. I thought this might create too much room between the exhibition letter forms, but surprisingly I think it gave them more space to breathe. I also realised that for the letters with verticle symmetry, I could place the arc on the left and the rounded rectangle on the right. Because the arc start/stop degree was a parameter, I was able to use semi circles to avoid overlapping the previous letter in exhibition mode. I liked the flexibility of this and proceeded with the rest of the letterforms. 

At this point the letterforms were looking a bit flat, so I wanted to find a way to create some more contrast. I tried some higher contrast colour palettes, different stroke weights, and multiple colours but I didn't like the aesthetic outcomes. I had a look through the P5js website to see if there were some effects to play with and came across blendMode(). I experimented with using these modes and altering the base shape. It started to remind me of the CMYK display (the 3 overlapping CMY circles). It also reminded me of Felipe Pantone's work, which I find interesting so I decided to run with this. I switched to a CMYK colour palette, which I applied to 3 slightly offset squares. Setting the blend mode to 'multiply' made the colours react similarly to CMYK printing and formed sections of black that added good contrast to the design. 
I played around with the opacity of the CMYK colours to get an effect that showed off each colour well. Oddly, I ended up leaving the 0.5 green stroke around the letters as it reminded me of double layering cellophane - It's a very minor detail but I think it adds a tiny bit more depth when up-close to the letters. Making these changes lifted the design and made it a lot more visually intriguing. 

To set the numbers apart (particularly the '2' from 'Z'), I allowed myself to use the center of the arc as a sharp vertex. I had avoided doing this for the letter forms as I liked how soft the forms looked without it, but I wanted to ensure the typeface was as legible as possible. This had a particularly successful effect on the 3, 4, and 6 as I think they're easily readable while also having a super fun, distinct style. 

I then moved on to the animation section of the brief. Because the arcs didn't have a set direction of movement, by default they would interpolate unpredictably. To fix this, I played around with them and found that essentially making the arc disappear (width = 0, height = 0, start/stop = 0 or 360), was the best effect. At the 50% mark of the interpolation, the arc would disappear entirely and then smoothly spring back into the new shape's position by 100%. This reflected the font's smooth style well and stopped obvious sharp vertices appearing on the letterforms during interpolation. 

Even though I was happy with this, I still felt the movement was boring overall. The overlapping CMYK shapes gave me the idea of overlapping the letterforms. As all my shapes' X and Y positions were relative to the center of the bounding box (variables I had defined in my drawLetter function), I decided that it would be fun to play with moving the 'center' around. I made boxCenterX and boxCenterY into parameters and tested what effect changing these could create. I found that the movement of the letters was more interesting, but changing both the X and Y positions wasn't a satisfying transition as it didn't look purposeful. 
The X position movement was more satisfying - especially because the base colours weren't at full opacity, which allowed for some subtle layering effects to happen when the letters crossed over each other. I got rid of the boxCenterY parameter and stuck with the boxCenterX parameter. I settled on having this horizontal movement happen at the same rate as the arc shrunk/resized as it felt more cohesive.

Retrospectively, there was likely a better way to do this. Currently, boxCenterX is the same value for every letter, it just gets edited in the interpolate_letter function. This seems like a waste of a parameter, however, I wasn't able to figure out a way to do this another way. Since I wanted the overlayed shapes to move with the base shape, this seemed like the best option, but if I had had more time I would have tried to find a different way of doing this.
Overall though, I think the transitions are interesting and effective and show off the typefaces' style and colour ideas well. 

For a final touch, I decided to add a bit more interest to the exhibition page. I liked the 'cleanness' of having an entirely white background, but I loved the multiply colour effect so much that I wanted to highlight this in my final. I created a separate function in exhibition.js (exhibitionBackground()) to do this. I started with some rectangles in the 4 corners to frame the central word but decided I wanted to reflect the roundedness of the font. I changed the rectangles to ellipses and layered them slightly differently in each corner to show off the shades that the multiply effect could produce. I think the final outcome adds a lot of interest and dimension to the exhibition page, without interfering too much with the central word. 

Overall I'm quite happy with the final design. I think that it has a unique look to it and explores some fun colour concepts and movement. I would have liked to fix the X movement parameter issue. I would have also liked to make the letterforms more cohesive - potentially creating a 'grid' on the base shape so that the overlaying shapes had a more consistent placement between the letters. By doing this I could have made the thickness of the letter 'strokes' more uniform, which potentially would have made the words look more balanced. 