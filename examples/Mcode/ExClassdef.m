## Copyright (C) 2024 Andrew Janke
##
## This program is free software; you can redistribute it and/or modify
## it under the terms of the GNU General Public License.

classdef ExClassdef
  # An example classdef class.

  properties
    foo
  endproperties
  properties (Dependent)
    dep_prop_a
  endproperties

  methods (Static = true)

    function out = staticFoo ()
      out = 42;
    endfunction

  endmethods

  methods

    function out = smurf (this, x, y)
      my_varbl = x + y + 7;
      bar = muffin (my_varble, x);
      out = [bar my_varbl x./y];
      if (x > y)
        z = x - y;
      else
        z = x + y;
      endif
      for i = 1:5
        bar = bar * this.foo(i);
      endfor
    endfunction

    function out = get.dep_prop_a (this)
      out = string (this.foo);
    endfunction

    function this = set.dep_prop_a (this, val)
      this.foo = str2double (val);
    endfunction

    function out = with_nested_fcn (this, x, y)
      function out2 = nested (q)
        out2 = q + (x / 2);
      endfunction
      out = x + nested (y - 4);
    endfunction

  endmethods

endclassdef

function out = a_local_fcn (x, y)
  out = x .* y;
endfunction

