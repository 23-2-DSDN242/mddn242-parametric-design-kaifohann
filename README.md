# MDDN 242 2023 Assignment 2: Parametric Design

##Spectrum by Hannah Kai Fong

Each letter form's base is composed of a yellow, cyan and magenta square with rounded corners and a slight offset from one another. The blendmode for the base is set to 'multiply', so the overlapping sections are black. Each form has a an overlayed white rectangle and overlayed arc to 'cut out' sections of the base rectangle and create the letters with positve space. 
The arc's X position, Y position, width, height, start angle and stop angle can be controlled through parameters. 
The overlayed rectangles size, X position, Y position and corner roundedness can be controlled through parameters as well.
The X position of all shapes in draw_letters.js is relative to the 'boxCenterX' parameter, which allows the letterforms to have consistent horizontal movement when interpolating. 

The 11 parameters for each letter are:

  * 'boxCenterX': the center of the bounding box (only used to base other shapes' X position on and have even horizontal movement when interpolating)
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

My Design Processs:


(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one
