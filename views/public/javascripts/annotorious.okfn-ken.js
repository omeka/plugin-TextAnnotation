var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1, $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$57$$, $opt_object$$) {
  var $parts$$ = $name$$57$$.split("."), $cur$$ = $goog$global$$;
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $opt_object$$ !== $JSCompiler_alias_VOID$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
function $goog$addSingletonGetter$$($ctor$$) {
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ ? $ctor$$.$instance_$ : $ctor$$.$instance_$ = new $ctor$$
  }
}
function $goog$typeOf$$($value$$39$$) {
  var $s$$2$$ = typeof $value$$39$$;
  if("object" == $s$$2$$) {
    if($value$$39$$) {
      if($value$$39$$ instanceof Array) {
        return"array"
      }
      if($value$$39$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$39$$);
      if("[object Window]" == $className$$1$$) {
        return"object"
      }
      if("[object Array]" == $className$$1$$ || "number" == typeof $value$$39$$.length && "undefined" != typeof $value$$39$$.splice && "undefined" != typeof $value$$39$$.propertyIsEnumerable && !$value$$39$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$39$$.call && "undefined" != typeof $value$$39$$.propertyIsEnumerable && !$value$$39$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$39$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isFunction$$($val$$9$$) {
  return"function" == $goog$typeOf$$($val$$9$$)
}
function $goog$isObject$$($val$$10$$) {
  var $type$$53$$ = typeof $val$$10$$;
  return"object" == $type$$53$$ && $val$$10$$ != $JSCompiler_alias_NULL$$ || "function" == $type$$53$$
}
function $goog$getUid$$($obj$$17$$) {
  return $obj$$17$$[$goog$UID_PROPERTY_$$] || ($obj$$17$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), $goog$uidCounter_$$ = 0;
function $goog$partial$$($fn$$3$$, $var_args$$27$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = Array.prototype.slice.call(arguments);
    $newArgs$$1$$.unshift.apply($newArgs$$1$$, $args$$);
    return $fn$$3$$.apply(this, $newArgs$$1$$)
  }
}
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$
}
;function $annotorious$shape$geom$Point$$($x$$55$$, $y$$36$$) {
  this.x = $x$$55$$;
  this.y = $y$$36$$
}
;function $annotorious$shape$geom$Polygon$$($points$$) {
  this.points = $points$$
}
;function $annotorious$shape$geom$Rectangle$$($x$$57$$, $y$$38$$, $width$$12$$, $height$$11$$) {
  0 < $width$$12$$ ? (this.x = $x$$57$$, this.width = $width$$12$$) : (this.x = $x$$57$$ + $width$$12$$, this.width = -$width$$12$$);
  0 < $height$$11$$ ? (this.y = $y$$38$$, this.height = $height$$11$$) : (this.y = $y$$38$$ + $height$$11$$, this.height = -$height$$11$$)
}
;function $annotorious$shape$Shape$$($type$$55$$, $geometry$$, $units$$1$$, $style$$) {
  this.type = $type$$55$$;
  this.geometry = $geometry$$;
  $units$$1$$ && (this.units = $units$$1$$);
  this.style = $style$$ ? $style$$ : {}
}
function $annotorious$shape$getSize$$($JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$) {
  if("rect" == $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$.type) {
    $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$ = $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$.geometry.width * $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$.geometry.height
  }else {
    if("polygon" == $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$.type) {
      for(var $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$ = $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$.geometry.points, $area$$inline_47$$ = 0, $j$$inline_48$$ = $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$.length - 1, $i$$inline_49$$ = 0;$i$$inline_49$$ < $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$.length;$i$$inline_49$$++) {
        $area$$inline_47$$ += ($JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$[$j$$inline_48$$].x + $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$[$i$$inline_49$$].x) * ($JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$[$j$$inline_48$$].y - $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$[$i$$inline_49$$].y), $j$$inline_48$$ = $i$$inline_49$$
      }
      $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$ = Math.abs($area$$inline_47$$ / 2)
    }else {
      $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$ = 0
    }
  }
  return $JSCompiler_temp$$42_JSCompiler_temp$$43_points$$inline_46_shape$$1$$
}
function $annotorious$shape$hashCode$$($shape$$6$$) {
  return JSON.stringify($shape$$6$$.geometry)
}
;function $goog$string$trim$$($str$$25$$) {
  return $str$$25$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function $goog$string$htmlEscape$$($str$$31$$) {
  if(!$goog$string$allRe_$$.test($str$$31$$)) {
    return $str$$31$$
  }
  -1 != $str$$31$$.indexOf("&") && ($str$$31$$ = $str$$31$$.replace($goog$string$amperRe_$$, "&amp;"));
  -1 != $str$$31$$.indexOf("<") && ($str$$31$$ = $str$$31$$.replace($goog$string$ltRe_$$, "&lt;"));
  -1 != $str$$31$$.indexOf(">") && ($str$$31$$ = $str$$31$$.replace($goog$string$gtRe_$$, "&gt;"));
  -1 != $str$$31$$.indexOf('"') && ($str$$31$$ = $str$$31$$.replace($goog$string$quotRe_$$, "&quot;"));
  return $str$$31$$
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$10$$, $obj$$21$$, $opt_fromIndex$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$10$$, $obj$$21$$, $opt_fromIndex$$6$$)
} : function($arr$$11$$, $obj$$22$$, $fromIndex_i$$17_opt_fromIndex$$7$$) {
  $fromIndex_i$$17_opt_fromIndex$$7$$ = $fromIndex_i$$17_opt_fromIndex$$7$$ == $JSCompiler_alias_NULL$$ ? 0 : 0 > $fromIndex_i$$17_opt_fromIndex$$7$$ ? Math.max(0, $arr$$11$$.length + $fromIndex_i$$17_opt_fromIndex$$7$$) : $fromIndex_i$$17_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$11$$)) {
    return!$goog$isString$$($obj$$22$$) || 1 != $obj$$22$$.length ? -1 : $arr$$11$$.indexOf($obj$$22$$, $fromIndex_i$$17_opt_fromIndex$$7$$)
  }
  for(;$fromIndex_i$$17_opt_fromIndex$$7$$ < $arr$$11$$.length;$fromIndex_i$$17_opt_fromIndex$$7$$++) {
    if($fromIndex_i$$17_opt_fromIndex$$7$$ in $arr$$11$$ && $arr$$11$$[$fromIndex_i$$17_opt_fromIndex$$7$$] === $obj$$22$$) {
      return $fromIndex_i$$17_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$14$$, $f$$1$$, $opt_obj$$1$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$14$$, $f$$1$$, $opt_obj$$1$$)
} : function($arr$$15$$, $f$$2$$, $opt_obj$$2$$) {
  for(var $l$$2$$ = $arr$$15$$.length, $arr2$$ = $goog$isString$$($arr$$15$$) ? $arr$$15$$.split("") : $arr$$15$$, $i$$19$$ = 0;$i$$19$$ < $l$$2$$;$i$$19$$++) {
    $i$$19$$ in $arr2$$ && $f$$2$$.call($opt_obj$$2$$, $arr2$$[$i$$19$$], $i$$19$$, $arr$$15$$)
  }
}, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$17$$, $f$$4$$, $opt_obj$$4$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$17$$, $f$$4$$, $opt_obj$$4$$)
} : function($arr$$18$$, $f$$5$$, $opt_obj$$5$$) {
  for(var $l$$4$$ = $arr$$18$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$18$$) ? $arr$$18$$.split("") : $arr$$18$$, $i$$21$$ = 0;$i$$21$$ < $l$$4$$;$i$$21$$++) {
    if($i$$21$$ in $arr2$$2$$) {
      var $val$$11$$ = $arr2$$2$$[$i$$21$$];
      $f$$5$$.call($opt_obj$$5$$, $val$$11$$, $i$$21$$, $arr$$18$$) && ($res$$[$resLength$$++] = $val$$11$$)
    }
  }
  return $res$$
};
function $goog$array$remove$$($arr$$38$$, $obj$$29$$) {
  var $i$$31$$ = $goog$array$indexOf$$($arr$$38$$, $obj$$29$$);
  0 <= $i$$31$$ && $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$38$$, $i$$31$$, 1)
}
function $goog$array$slice$$($arr$$42$$, $start$$5$$, $opt_end$$13$$) {
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$42$$, $start$$5$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$42$$, $start$$5$$, $opt_end$$13$$)
}
function $goog$array$defaultCompare$$($a$$3$$, $b$$2$$) {
  return $a$$3$$ > $b$$2$$ ? 1 : $a$$3$$ < $b$$2$$ ? -1 : 0
}
;var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$, $goog$userAgent$detectedMac_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$
}
function $goog$userAgent$getNavigator$$() {
  return $goog$global$$.navigator
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_54$$;
if($ua$$inline_54$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_55$$ = $goog$userAgent$getNavigator$$();
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_54$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_54$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_54$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_55$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $navigator$$inline_57$$ = $goog$userAgent$getNavigator$$();
$goog$userAgent$detectedMac_$$ = -1 != ($navigator$$inline_57$$ && $navigator$$inline_57$$.platform || "").indexOf("Mac");
var $goog$userAgent$X11$$ = !!$goog$userAgent$getNavigator$$() && -1 != ($goog$userAgent$getNavigator$$().appVersion || "").indexOf("X11"), $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_60$$ = "", $re$$inline_61$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_62$$ = $goog$global$$.opera.version, $version$$inline_60$$ = "function" == typeof $operaVersion$$inline_62$$ ? $operaVersion$$inline_62$$() : $operaVersion$$inline_62$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_61$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_61$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_61$$ = /WebKit\/(\S+)/), $re$$inline_61$$) {
      var $arr$$inline_63$$ = $re$$inline_61$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_60$$ = $arr$$inline_63$$ ? $arr$$inline_63$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_64$$, $doc$$inline_647$$ = $goog$global$$.document;
    $docMode$$inline_64$$ = $doc$$inline_647$$ ? $doc$$inline_647$$.documentMode : $JSCompiler_alias_VOID$$;
    if($docMode$$inline_64$$ > parseFloat($version$$inline_60$$)) {
      $goog$userAgent$VERSION$$ = String($docMode$$inline_64$$);
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_60$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$37_order$$inline_68$$;
  if(!($JSCompiler_temp$$37_order$$inline_68$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$37_order$$inline_68$$ = 0;
    for(var $v1Subs$$inline_69$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_70$$ = $goog$string$trim$$(String($version$$8$$)).split("."), $subCount$$inline_71$$ = Math.max($v1Subs$$inline_69$$.length, $v2Subs$$inline_70$$.length), $subIdx$$inline_72$$ = 0;0 == $JSCompiler_temp$$37_order$$inline_68$$ && $subIdx$$inline_72$$ < $subCount$$inline_71$$;$subIdx$$inline_72$$++) {
      var $v1Sub$$inline_73$$ = $v1Subs$$inline_69$$[$subIdx$$inline_72$$] || "", $v2Sub$$inline_74$$ = $v2Subs$$inline_70$$[$subIdx$$inline_72$$] || "", $v1CompParser$$inline_75$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_76$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_77$$ = $v1CompParser$$inline_75$$.exec($v1Sub$$inline_73$$) || ["", "", ""], $v2Comp$$inline_78$$ = $v2CompParser$$inline_76$$.exec($v2Sub$$inline_74$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_77$$[0].length && 0 == $v2Comp$$inline_78$$[0].length) {
          break
        }
        $JSCompiler_temp$$37_order$$inline_68$$ = ((0 == $v1Comp$$inline_77$$[1].length ? 0 : parseInt($v1Comp$$inline_77$$[1], 10)) < (0 == $v2Comp$$inline_78$$[1].length ? 0 : parseInt($v2Comp$$inline_78$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_77$$[1].length ? 0 : parseInt($v1Comp$$inline_77$$[1], 10)) > (0 == $v2Comp$$inline_78$$[1].length ? 0 : parseInt($v2Comp$$inline_78$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_77$$[2].length) < (0 == $v2Comp$$inline_78$$[2].length) ? -1 : (0 == $v1Comp$$inline_77$$[2].length) > 
        (0 == $v2Comp$$inline_78$$[2].length) ? 1 : 0) || ($v1Comp$$inline_77$$[2] < $v2Comp$$inline_78$$[2] ? -1 : $v1Comp$$inline_77$$[2] > $v2Comp$$inline_78$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$37_order$$inline_68$$)
    }
    $JSCompiler_temp$$37_order$$inline_68$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$37_order$$inline_68$$
  }
  return $JSCompiler_temp$$37_order$$inline_68$$
}
var $goog$userAgent$isDocumentModeCache_$$ = {};
function $goog$userAgent$isDocumentMode$$() {
  return $goog$userAgent$isDocumentModeCache_$$[9] || ($goog$userAgent$isDocumentModeCache_$$[9] = $goog$userAgent$IE$$ && !!document.documentMode && 9 <= document.documentMode)
}
;var $goog$dom$defaultDomHelper_$$, $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$();
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$() || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
function $goog$dom$classes$get$$($className$$4_element$$7$$) {
  $className$$4_element$$7$$ = $className$$4_element$$7$$.className;
  return $goog$isString$$($className$$4_element$$7$$) && $className$$4_element$$7$$.match(/\S+/g) || []
}
function $goog$dom$classes$add$$($element$$8$$, $var_args$$45$$) {
  for(var $classes$$ = $goog$dom$classes$get$$($element$$8$$), $args$$3_args$$inline_81$$ = $goog$array$slice$$(arguments, 1), $expectedCount$$ = $classes$$.length + $args$$3_args$$inline_81$$.length, $classes$$inline_80$$ = $classes$$, $i$$inline_82$$ = 0;$i$$inline_82$$ < $args$$3_args$$inline_81$$.length;$i$$inline_82$$++) {
    0 <= $goog$array$indexOf$$($classes$$inline_80$$, $args$$3_args$$inline_81$$[$i$$inline_82$$]) || $classes$$inline_80$$.push($args$$3_args$$inline_81$$[$i$$inline_82$$])
  }
  $element$$8$$.className = $classes$$.join(" ");
  return $classes$$.length == $expectedCount$$
}
function $goog$dom$classes$remove$$($element$$9$$, $var_args$$46$$) {
  var $classes$$1_newClasses$$ = $goog$dom$classes$get$$($element$$9$$), $arr2$$inline_85$$ = $goog$array$slice$$(arguments, 1), $classes$$1_newClasses$$ = $goog$array$filter$$($classes$$1_newClasses$$, function($item$$inline_86$$) {
    return!(0 <= $goog$array$indexOf$$($arr2$$inline_85$$, $item$$inline_86$$))
  });
  $element$$9$$.className = $classes$$1_newClasses$$.join(" ")
}
;function $goog$object$forEach$$($obj$$30$$, $f$$19$$) {
  for(var $key$$18$$ in $obj$$30$$) {
    $f$$19$$.call($JSCompiler_alias_VOID$$, $obj$$30$$[$key$$18$$], $key$$18$$, $obj$$30$$)
  }
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$42$$, $var_args$$51$$) {
  for(var $key$$41$$, $source$$2$$, $i$$52$$ = 1;$i$$52$$ < arguments.length;$i$$52$$++) {
    $source$$2$$ = arguments[$i$$52$$];
    for($key$$41$$ in $source$$2$$) {
      $target$$42$$[$key$$41$$] = $source$$2$$[$key$$41$$]
    }
    for(var $j$$8$$ = 0;$j$$8$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$8$$++) {
      $key$$41$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$8$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$41$$) && ($target$$42$$[$key$$41$$] = $source$$2$$[$key$$41$$])
    }
  }
}
;function $goog$dom$getDomHelper$$($opt_element$$10$$) {
  return $opt_element$$10$$ ? new $goog$dom$DomHelper$$(9 == $opt_element$$10$$.nodeType ? $opt_element$$10$$ : $opt_element$$10$$.ownerDocument || $opt_element$$10$$.document) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $goog$dom$createDom$$($tagName$$2$$, $opt_attributes$$, $var_args$$54$$) {
  var $args$$inline_656_args$$inline_92$$ = arguments, $childHandler$$inline_658_doc$$inline_93$$ = document, $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$ = $args$$inline_656_args$$inline_92$$[0], $attributes$$inline_95_i$$inline_659$$ = $args$$inline_656_args$$inline_92$$[1];
  if(!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$inline_95_i$$inline_659$$ && ($attributes$$inline_95_i$$inline_659$$.name || $attributes$$inline_95_i$$inline_659$$.type)) {
    $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$ = ["<", $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$];
    $attributes$$inline_95_i$$inline_659$$.name && $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$.push(' name="', $goog$string$htmlEscape$$($attributes$$inline_95_i$$inline_659$$.name), '"');
    if($attributes$$inline_95_i$$inline_659$$.type) {
      $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$.push(' type="', $goog$string$htmlEscape$$($attributes$$inline_95_i$$inline_659$$.type), '"');
      var $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$ = {};
      $goog$object$extend$$($JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$, $attributes$$inline_95_i$$inline_659$$);
      delete $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$.type;
      $attributes$$inline_95_i$$inline_659$$ = $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$
    }
    $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$.push(">");
    $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$ = $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$.join("")
  }
  $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$ = $childHandler$$inline_658_doc$$inline_93$$.createElement($element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$);
  if($attributes$$inline_95_i$$inline_659$$) {
    if($goog$isString$$($attributes$$inline_95_i$$inline_659$$)) {
      $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$.className = $attributes$$inline_95_i$$inline_659$$
    }else {
      if("array" == $goog$typeOf$$($attributes$$inline_95_i$$inline_659$$)) {
        $goog$dom$classes$add$$.apply($JSCompiler_alias_NULL$$, [$element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$].concat($attributes$$inline_95_i$$inline_659$$))
      }else {
        var $element$$inline_649$$ = $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$;
        $goog$object$forEach$$($attributes$$inline_95_i$$inline_659$$, function($val$$inline_651$$, $key$$inline_652$$) {
          "style" == $key$$inline_652$$ ? $element$$inline_649$$.style.cssText = $val$$inline_651$$ : "class" == $key$$inline_652$$ ? $element$$inline_649$$.className = $val$$inline_651$$ : "for" == $key$$inline_652$$ ? $element$$inline_649$$.htmlFor = $val$$inline_651$$ : $key$$inline_652$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$inline_649$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$inline_652$$], $val$$inline_651$$) : 0 == $key$$inline_652$$.lastIndexOf("aria-", 0) || 0 == 
          $key$$inline_652$$.lastIndexOf("data-", 0) ? $element$$inline_649$$.setAttribute($key$$inline_652$$, $val$$inline_651$$) : $element$$inline_649$$[$key$$inline_652$$] = $val$$inline_651$$
        })
      }
    }
  }
  if(2 < $args$$inline_656_args$$inline_92$$.length) {
    for(var $doc$$inline_654$$ = $childHandler$$inline_658_doc$$inline_93$$, $parent$$inline_655$$ = $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$, $childHandler$$inline_658_doc$$inline_93$$ = function $$childHandler$$inline_658_doc$$inline_93$$$($child$$inline_662$$) {
      $child$$inline_662$$ && $parent$$inline_655$$.appendChild($goog$isString$$($child$$inline_662$$) ? $doc$$inline_654$$.createTextNode($child$$inline_662$$) : $child$$inline_662$$)
    }, $attributes$$inline_95_i$$inline_659$$ = 2;$attributes$$inline_95_i$$inline_659$$ < $args$$inline_656_args$$inline_92$$.length;$attributes$$inline_95_i$$inline_659$$++) {
      var $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$ = $args$$inline_656_args$$inline_92$$[$attributes$$inline_95_i$$inline_659$$], $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$ = $goog$typeOf$$($JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$);
      if(("array" == $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$ || "object" == $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$ && "number" == typeof $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$.length) && !($goog$isObject$$($JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$) && 0 < $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$.nodeType)) {
        var $JSCompiler_inline_result$$inline_661_length$$inline_735$$;
        a: {
          if($JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$ && "number" == typeof $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$.length) {
            if($goog$isObject$$($JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$)) {
              $JSCompiler_inline_result$$inline_661_length$$inline_735$$ = "function" == typeof $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$.item || "string" == typeof $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$.item;
              break a
            }
            if($goog$isFunction$$($JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$)) {
              $JSCompiler_inline_result$$inline_661_length$$inline_735$$ = "function" == typeof $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$.item;
              break a
            }
          }
          $JSCompiler_inline_result$$inline_661_length$$inline_735$$ = $JSCompiler_alias_FALSE$$
        }
        $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$ = $goog$array$forEach$$;
        if($JSCompiler_inline_result$$inline_661_length$$inline_735$$) {
          if($JSCompiler_inline_result$$inline_661_length$$inline_735$$ = $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$.length, 0 < $JSCompiler_inline_result$$inline_661_length$$inline_735$$) {
            for(var $rv$$inline_736$$ = Array($JSCompiler_inline_result$$inline_661_length$$inline_735$$), $i$$inline_737$$ = 0;$i$$inline_737$$ < $JSCompiler_inline_result$$inline_661_length$$inline_735$$;$i$$inline_737$$++) {
              $rv$$inline_736$$[$i$$inline_737$$] = $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$[$i$$inline_737$$]
            }
            $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$ = $rv$$inline_736$$
          }else {
            $JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$ = []
          }
        }
        $JSCompiler_temp_const$$729_clone$$inline_97_type$$inline_732$$($JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$, $childHandler$$inline_658_doc$$inline_93$$)
      }else {
        $childHandler$$inline_658_doc$$inline_93$$($JSCompiler_temp$$730_arg$$inline_660_object$$inline_734$$)
      }
    }
  }
  return $element$$inline_98_tagName$$inline_94_tagNameArr$$inline_96$$
}
function $goog$dom$contains$$($parent$$13$$, $descendant$$) {
  if($parent$$13$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$13$$ == $descendant$$ || $parent$$13$$.contains($descendant$$)
  }
  if("undefined" != typeof $parent$$13$$.compareDocumentPosition) {
    return $parent$$13$$ == $descendant$$ || Boolean($parent$$13$$.compareDocumentPosition($descendant$$) & 16)
  }
  for(;$descendant$$ && $parent$$13$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode
  }
  return $descendant$$ == $parent$$13$$
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$28$$) {
  return $goog$isString$$($element$$28$$) ? this.$document_$.getElementById($element$$28$$) : $element$$28$$
};
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$61$$) {
  return this.$document_$.createElement($name$$61$$)
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$1$$) {
  return this.$document_$.createTextNode($content$$1$$)
};
$JSCompiler_prototypeAlias$$.appendChild = function $$JSCompiler_prototypeAlias$$$appendChild$($parent$$7$$, $child$$2$$) {
  $parent$$7$$.appendChild($child$$2$$)
};
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
var $goog$functions$TRUE$$;
$goog$functions$TRUE$$ = function $$goog$functions$TRUE$$$() {
  return $JSCompiler_alias_TRUE$$
};
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function $getArr$$inline_108$$($i$$inline_146$$, $opt_arr$$inline_147$$) {
  var $r$$inline_148$$ = $opt_arr$$inline_147$$ || [];
  $i$$inline_146$$ && $r$$inline_148$$.push($i$$inline_146$$);
  return $r$$inline_148$$
}
var $cssCaseBug$$inline_109$$ = $goog$userAgent$WEBKIT$$ && "BackCompat" == document.compatMode, $childNodesName$$inline_110$$ = document.firstChild.children ? "children" : "childNodes", $caseSensitive$$inline_111$$ = $JSCompiler_alias_FALSE$$;
function $getQueryParts$$inline_112$$($query$$inline_149$$) {
  function $endAll$$inline_169$$() {
    0 <= $inId$$inline_157$$ && ($currentPart$$inline_164$$.id = $ts$$inline_150$$($inId$$inline_157$$, $x$$inline_162$$).replace(/\\/g, ""), $inId$$inline_157$$ = -1);
    if(0 <= $inTag$$inline_158$$) {
      var $tv$$inline_666$$ = $inTag$$inline_158$$ == $x$$inline_162$$ ? $JSCompiler_alias_NULL$$ : $ts$$inline_150$$($inTag$$inline_158$$, $x$$inline_162$$);
      0 > ">~+".indexOf($tv$$inline_666$$) ? $currentPart$$inline_164$$.$tag$ = $tv$$inline_666$$ : $currentPart$$inline_164$$.$oper$ = $tv$$inline_666$$;
      $inTag$$inline_158$$ = -1
    }
    0 <= $inClass$$inline_156$$ && ($currentPart$$inline_164$$.$classes$.push($ts$$inline_150$$($inClass$$inline_156$$ + 1, $x$$inline_162$$).replace(/\\/g, "")), $inClass$$inline_156$$ = -1)
  }
  function $ts$$inline_150$$($s$$inline_173$$, $e$$inline_174$$) {
    return $goog$string$trim$$($query$$inline_149$$.slice($s$$inline_173$$, $e$$inline_174$$))
  }
  for(var $query$$inline_149$$ = 0 <= ">~+".indexOf($query$$inline_149$$.slice(-1)) ? $query$$inline_149$$ + " * " : $query$$inline_149$$ + " ", $queryParts$$inline_151$$ = [], $cmf$$inline_171_inBrackets$$inline_152$$ = -1, $inParens$$inline_153$$ = -1, $addToCc$$inline_172_inMatchFor$$inline_154$$ = -1, $inPseudo$$inline_155$$ = -1, $inClass$$inline_156$$ = -1, $inId$$inline_157$$ = -1, $inTag$$inline_158$$ = -1, $lc$$inline_159$$ = "", $cc$$inline_160$$ = "", $pStart$$inline_161$$, $x$$inline_162$$ = 
  0, $ql$$inline_163$$ = $query$$inline_149$$.length, $currentPart$$inline_164$$ = $JSCompiler_alias_NULL$$, $cp$$inline_165$$ = $JSCompiler_alias_NULL$$;$lc$$inline_159$$ = $cc$$inline_160$$, $cc$$inline_160$$ = $query$$inline_149$$.charAt($x$$inline_162$$), $x$$inline_162$$ < $ql$$inline_163$$;$x$$inline_162$$++) {
    if("\\" != $lc$$inline_159$$) {
      if($currentPart$$inline_164$$ || ($pStart$$inline_161$$ = $x$$inline_162$$, $currentPart$$inline_164$$ = {$query$:$JSCompiler_alias_NULL$$, $pseudos$:[], $attrs$:[], $classes$:[], $tag$:$JSCompiler_alias_NULL$$, $oper$:$JSCompiler_alias_NULL$$, id:$JSCompiler_alias_NULL$$, $getTag$:function $$currentPart$$inline_164$$$$getTag$$() {
        return $caseSensitive$$inline_111$$ ? this.$otag$ : this.$tag$
      }}, $inTag$$inline_158$$ = $x$$inline_162$$), 0 <= $cmf$$inline_171_inBrackets$$inline_152$$) {
        if("]" == $cc$$inline_160$$) {
          $cp$$inline_165$$.$attr$ ? $cp$$inline_165$$.$matchFor$ = $ts$$inline_150$$($addToCc$$inline_172_inMatchFor$$inline_154$$ || $cmf$$inline_171_inBrackets$$inline_152$$ + 1, $x$$inline_162$$) : $cp$$inline_165$$.$attr$ = $ts$$inline_150$$($cmf$$inline_171_inBrackets$$inline_152$$ + 1, $x$$inline_162$$);
          if(($cmf$$inline_171_inBrackets$$inline_152$$ = $cp$$inline_165$$.$matchFor$) && ('"' == $cmf$$inline_171_inBrackets$$inline_152$$.charAt(0) || "'" == $cmf$$inline_171_inBrackets$$inline_152$$.charAt(0))) {
            $cp$$inline_165$$.$matchFor$ = $cmf$$inline_171_inBrackets$$inline_152$$.slice(1, -1)
          }
          $currentPart$$inline_164$$.$attrs$.push($cp$$inline_165$$);
          $cp$$inline_165$$ = $JSCompiler_alias_NULL$$;
          $cmf$$inline_171_inBrackets$$inline_152$$ = $addToCc$$inline_172_inMatchFor$$inline_154$$ = -1
        }else {
          "=" == $cc$$inline_160$$ && ($addToCc$$inline_172_inMatchFor$$inline_154$$ = 0 <= "|~^$*".indexOf($lc$$inline_159$$) ? $lc$$inline_159$$ : "", $cp$$inline_165$$.type = $addToCc$$inline_172_inMatchFor$$inline_154$$ + $cc$$inline_160$$, $cp$$inline_165$$.$attr$ = $ts$$inline_150$$($cmf$$inline_171_inBrackets$$inline_152$$ + 1, $x$$inline_162$$ - $addToCc$$inline_172_inMatchFor$$inline_154$$.length), $addToCc$$inline_172_inMatchFor$$inline_154$$ = $x$$inline_162$$ + 1)
        }
      }else {
        0 <= $inParens$$inline_153$$ ? ")" == $cc$$inline_160$$ && (0 <= $inPseudo$$inline_155$$ && ($cp$$inline_165$$.value = $ts$$inline_150$$($inParens$$inline_153$$ + 1, $x$$inline_162$$)), $inPseudo$$inline_155$$ = $inParens$$inline_153$$ = -1) : "#" == $cc$$inline_160$$ ? ($endAll$$inline_169$$(), $inId$$inline_157$$ = $x$$inline_162$$ + 1) : "." == $cc$$inline_160$$ ? ($endAll$$inline_169$$(), $inClass$$inline_156$$ = $x$$inline_162$$) : ":" == $cc$$inline_160$$ ? ($endAll$$inline_169$$(), 
        $inPseudo$$inline_155$$ = $x$$inline_162$$) : "[" == $cc$$inline_160$$ ? ($endAll$$inline_169$$(), $cmf$$inline_171_inBrackets$$inline_152$$ = $x$$inline_162$$, $cp$$inline_165$$ = {}) : "(" == $cc$$inline_160$$ ? (0 <= $inPseudo$$inline_155$$ && ($cp$$inline_165$$ = {name:$ts$$inline_150$$($inPseudo$$inline_155$$ + 1, $x$$inline_162$$), value:$JSCompiler_alias_NULL$$}, $currentPart$$inline_164$$.$pseudos$.push($cp$$inline_165$$)), $inParens$$inline_153$$ = $x$$inline_162$$) : " " == $cc$$inline_160$$ && 
        $lc$$inline_159$$ != $cc$$inline_160$$ && ($endAll$$inline_169$$(), 0 <= $inPseudo$$inline_155$$ && $currentPart$$inline_164$$.$pseudos$.push({name:$ts$$inline_150$$($inPseudo$$inline_155$$ + 1, $x$$inline_162$$)}), $currentPart$$inline_164$$.$loops$ = $currentPart$$inline_164$$.$pseudos$.length || $currentPart$$inline_164$$.$attrs$.length || $currentPart$$inline_164$$.$classes$.length, $currentPart$$inline_164$$.$oquery$ = $currentPart$$inline_164$$.$query$ = $ts$$inline_150$$($pStart$$inline_161$$, 
        $x$$inline_162$$), $currentPart$$inline_164$$.$otag$ = $currentPart$$inline_164$$.$tag$ = $currentPart$$inline_164$$.$oper$ ? $JSCompiler_alias_NULL$$ : $currentPart$$inline_164$$.$tag$ || "*", $currentPart$$inline_164$$.$tag$ && ($currentPart$$inline_164$$.$tag$ = $currentPart$$inline_164$$.$tag$.toUpperCase()), $queryParts$$inline_151$$.length && $queryParts$$inline_151$$[$queryParts$$inline_151$$.length - 1].$oper$ && ($currentPart$$inline_164$$.$infixOper$ = $queryParts$$inline_151$$.pop(), 
        $currentPart$$inline_164$$.$query$ = $currentPart$$inline_164$$.$infixOper$.$query$ + " " + $currentPart$$inline_164$$.$query$), $queryParts$$inline_151$$.push($currentPart$$inline_164$$), $currentPart$$inline_164$$ = $JSCompiler_alias_NULL$$)
      }
    }
  }
  return $queryParts$$inline_151$$
}
function $agree$$inline_113$$($first$$inline_176$$, $second$$inline_177$$) {
  return!$first$$inline_176$$ ? $second$$inline_177$$ : !$second$$inline_177$$ ? $first$$inline_176$$ : function() {
    return $first$$inline_176$$.apply(window, arguments) && $second$$inline_177$$.apply(window, arguments)
  }
}
function $isElement$$inline_114$$($n$$inline_178$$) {
  return 1 == $n$$inline_178$$.nodeType
}
function $getAttr$$inline_115$$($elem$$inline_179$$, $attr$$inline_180$$) {
  return!$elem$$inline_179$$ ? "" : "class" == $attr$$inline_180$$ ? $elem$$inline_179$$.className || "" : "for" == $attr$$inline_180$$ ? $elem$$inline_179$$.htmlFor || "" : "style" == $attr$$inline_180$$ ? $elem$$inline_179$$.style.cssText || "" : ($caseSensitive$$inline_111$$ ? $elem$$inline_179$$.getAttribute($attr$$inline_180$$) : $elem$$inline_179$$.getAttribute($attr$$inline_180$$, 2)) || ""
}
var $attrs$$inline_116$$ = {"*=":function($attr$$inline_181$$, $value$$inline_182$$) {
  return function($elem$$inline_183$$) {
    return 0 <= $getAttr$$inline_115$$($elem$$inline_183$$, $attr$$inline_181$$).indexOf($value$$inline_182$$)
  }
}, "^=":function($attr$$inline_184$$, $value$$inline_185$$) {
  return function($elem$$inline_186$$) {
    return 0 == $getAttr$$inline_115$$($elem$$inline_186$$, $attr$$inline_184$$).indexOf($value$$inline_185$$)
  }
}, "$=":function($attr$$inline_187$$, $value$$inline_188$$) {
  return function($ea$$inline_190_elem$$inline_189$$) {
    $ea$$inline_190_elem$$inline_189$$ = " " + $getAttr$$inline_115$$($ea$$inline_190_elem$$inline_189$$, $attr$$inline_187$$);
    return $ea$$inline_190_elem$$inline_189$$.lastIndexOf($value$$inline_188$$) == $ea$$inline_190_elem$$inline_189$$.length - $value$$inline_188$$.length
  }
}, "~=":function($attr$$inline_191$$, $value$$inline_192$$) {
  var $tval$$inline_193$$ = " " + $value$$inline_192$$ + " ";
  return function($elem$$inline_194$$) {
    return 0 <= (" " + $getAttr$$inline_115$$($elem$$inline_194$$, $attr$$inline_191$$) + " ").indexOf($tval$$inline_193$$)
  }
}, "|=":function($attr$$inline_195$$, $value$$inline_196$$) {
  $value$$inline_196$$ = " " + $value$$inline_196$$;
  return function($ea$$inline_198_elem$$inline_197$$) {
    $ea$$inline_198_elem$$inline_197$$ = " " + $getAttr$$inline_115$$($ea$$inline_198_elem$$inline_197$$, $attr$$inline_195$$);
    return $ea$$inline_198_elem$$inline_197$$ == $value$$inline_196$$ || 0 == $ea$$inline_198_elem$$inline_197$$.indexOf($value$$inline_196$$ + "-")
  }
}, "=":function($attr$$inline_199$$, $value$$inline_200$$) {
  return function($elem$$inline_201$$) {
    return $getAttr$$inline_115$$($elem$$inline_201$$, $attr$$inline_199$$) == $value$$inline_200$$
  }
}}, $noNextElementSibling$$inline_117$$ = "undefined" == typeof document.firstChild.nextElementSibling, $nSibling$$inline_118$$ = !$noNextElementSibling$$inline_117$$ ? "nextElementSibling" : "nextSibling", $pSibling$$inline_119$$ = !$noNextElementSibling$$inline_117$$ ? "previousElementSibling" : "previousSibling", $simpleNodeTest$$inline_120$$ = $noNextElementSibling$$inline_117$$ ? $isElement$$inline_114$$ : $goog$functions$TRUE$$;
function $_lookLeft$$inline_121$$($node$$inline_202$$) {
  for(;$node$$inline_202$$ = $node$$inline_202$$[$pSibling$$inline_119$$];) {
    if($simpleNodeTest$$inline_120$$($node$$inline_202$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
function $_lookRight$$inline_122$$($node$$inline_203$$) {
  for(;$node$$inline_203$$ = $node$$inline_203$$[$nSibling$$inline_118$$];) {
    if($simpleNodeTest$$inline_120$$($node$$inline_203$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
function $getNodeIndex$$inline_123$$($node$$inline_204$$) {
  var $root$$inline_205_te$$inline_211$$ = $node$$inline_204$$.parentNode, $i$$inline_206$$ = 0, $l$$inline_210_tret$$inline_207$$ = $root$$inline_205_te$$inline_211$$[$childNodesName$$inline_110$$], $ci$$inline_208$$ = $node$$inline_204$$._i || -1, $cl$$inline_209$$ = $root$$inline_205_te$$inline_211$$._l || -1;
  if(!$l$$inline_210_tret$$inline_207$$) {
    return-1
  }
  $l$$inline_210_tret$$inline_207$$ = $l$$inline_210_tret$$inline_207$$.length;
  if($cl$$inline_209$$ == $l$$inline_210_tret$$inline_207$$ && 0 <= $ci$$inline_208$$ && 0 <= $cl$$inline_209$$) {
    return $ci$$inline_208$$
  }
  $root$$inline_205_te$$inline_211$$._l = $l$$inline_210_tret$$inline_207$$;
  $ci$$inline_208$$ = -1;
  for($root$$inline_205_te$$inline_211$$ = $root$$inline_205_te$$inline_211$$.firstElementChild || $root$$inline_205_te$$inline_211$$.firstChild;$root$$inline_205_te$$inline_211$$;$root$$inline_205_te$$inline_211$$ = $root$$inline_205_te$$inline_211$$[$nSibling$$inline_118$$]) {
    $simpleNodeTest$$inline_120$$($root$$inline_205_te$$inline_211$$) && ($root$$inline_205_te$$inline_211$$._i = ++$i$$inline_206$$, $node$$inline_204$$ === $root$$inline_205_te$$inline_211$$ && ($ci$$inline_208$$ = $i$$inline_206$$))
  }
  return $ci$$inline_208$$
}
function $isEven$$inline_124$$($elem$$inline_212$$) {
  return!($getNodeIndex$$inline_123$$($elem$$inline_212$$) % 2)
}
function $isOdd$$inline_125$$($elem$$inline_213$$) {
  return $getNodeIndex$$inline_123$$($elem$$inline_213$$) % 2
}
var $pseudos$$inline_126$$ = {checked:function() {
  return function($elem$$inline_214$$) {
    return $elem$$inline_214$$.checked || $elem$$inline_214$$.attributes.checked
  }
}, "first-child":function() {
  return $_lookLeft$$inline_121$$
}, "last-child":function() {
  return $_lookRight$$inline_122$$
}, "only-child":function() {
  return function($node$$inline_215$$) {
    return!$_lookLeft$$inline_121$$($node$$inline_215$$) || !$_lookRight$$inline_122$$($node$$inline_215$$) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  }
}, empty:function() {
  return function($elem$$inline_216_x$$inline_218$$) {
    for(var $cn$$inline_217$$ = $elem$$inline_216_x$$inline_218$$.childNodes, $elem$$inline_216_x$$inline_218$$ = $elem$$inline_216_x$$inline_218$$.childNodes.length - 1;0 <= $elem$$inline_216_x$$inline_218$$;$elem$$inline_216_x$$inline_218$$--) {
      var $nt$$inline_219$$ = $cn$$inline_217$$[$elem$$inline_216_x$$inline_218$$].nodeType;
      if(1 === $nt$$inline_219$$ || 3 == $nt$$inline_219$$) {
        return $JSCompiler_alias_FALSE$$
      }
    }
    return $JSCompiler_alias_TRUE$$
  }
}, contains:function($name$$inline_220$$, $condition$$inline_221$$) {
  var $cz$$inline_222$$ = $condition$$inline_221$$.charAt(0);
  if('"' == $cz$$inline_222$$ || "'" == $cz$$inline_222$$) {
    $condition$$inline_221$$ = $condition$$inline_221$$.slice(1, -1)
  }
  return function($elem$$inline_223$$) {
    return 0 <= $elem$$inline_223$$.innerHTML.indexOf($condition$$inline_221$$)
  }
}, not:function($name$$inline_224$$, $condition$$inline_225$$) {
  var $p$$inline_226$$ = $getQueryParts$$inline_112$$($condition$$inline_225$$)[0], $ignores$$inline_227$$ = {$el$:1};
  "*" != $p$$inline_226$$.$tag$ && ($ignores$$inline_227$$.$tag$ = 1);
  $p$$inline_226$$.$classes$.length || ($ignores$$inline_227$$.$classes$ = 1);
  var $ntf$$inline_228$$ = $getSimpleFilterFunc$$inline_128$$($p$$inline_226$$, $ignores$$inline_227$$);
  return function($elem$$inline_229$$) {
    return!$ntf$$inline_228$$($elem$$inline_229$$)
  }
}, "nth-child":function($name$$inline_230$$, $condition$$inline_231$$) {
  if("odd" == $condition$$inline_231$$) {
    return $isOdd$$inline_125$$
  }
  if("even" == $condition$$inline_231$$) {
    return $isEven$$inline_124$$
  }
  if(-1 != $condition$$inline_231$$.indexOf("n")) {
    var $tparts$$inline_233$$ = $condition$$inline_231$$.split("n", 2), $pred$$inline_234$$ = $tparts$$inline_233$$[0] ? "-" == $tparts$$inline_233$$[0] ? -1 : parseInt($tparts$$inline_233$$[0], 10) : 1, $idx$$inline_235$$ = $tparts$$inline_233$$[1] ? parseInt($tparts$$inline_233$$[1], 10) : 0, $lb$$inline_236$$ = 0, $ub$$inline_237$$ = -1;
    0 < $pred$$inline_234$$ ? 0 > $idx$$inline_235$$ ? $idx$$inline_235$$ = $idx$$inline_235$$ % $pred$$inline_234$$ && $pred$$inline_234$$ + $idx$$inline_235$$ % $pred$$inline_234$$ : 0 < $idx$$inline_235$$ && ($idx$$inline_235$$ >= $pred$$inline_234$$ && ($lb$$inline_236$$ = $idx$$inline_235$$ - $idx$$inline_235$$ % $pred$$inline_234$$), $idx$$inline_235$$ %= $pred$$inline_234$$) : 0 > $pred$$inline_234$$ && ($pred$$inline_234$$ *= -1, 0 < $idx$$inline_235$$ && ($ub$$inline_237$$ = $idx$$inline_235$$, 
    $idx$$inline_235$$ %= $pred$$inline_234$$));
    if(0 < $pred$$inline_234$$) {
      return function($elem$$inline_240_i$$inline_241$$) {
        $elem$$inline_240_i$$inline_241$$ = $getNodeIndex$$inline_123$$($elem$$inline_240_i$$inline_241$$);
        return $elem$$inline_240_i$$inline_241$$ >= $lb$$inline_236$$ && (0 > $ub$$inline_237$$ || $elem$$inline_240_i$$inline_241$$ <= $ub$$inline_237$$) && $elem$$inline_240_i$$inline_241$$ % $pred$$inline_234$$ == $idx$$inline_235$$
      }
    }
    $condition$$inline_231$$ = $idx$$inline_235$$
  }
  var $ncount$$inline_238$$ = parseInt($condition$$inline_231$$, 10);
  return function($elem$$inline_242$$) {
    return $getNodeIndex$$inline_123$$($elem$$inline_242$$) == $ncount$$inline_238$$
  }
}}, $defaultGetter$$inline_127$$ = $goog$userAgent$IE$$ ? function($cond$$inline_243$$) {
  var $clc$$inline_244$$ = $cond$$inline_243$$.toLowerCase();
  "class" == $clc$$inline_244$$ && ($cond$$inline_243$$ = "className");
  return function($elem$$inline_245$$) {
    return $caseSensitive$$inline_111$$ ? $elem$$inline_245$$.getAttribute($cond$$inline_243$$) : $elem$$inline_245$$[$cond$$inline_243$$] || $elem$$inline_245$$[$clc$$inline_244$$]
  }
} : function($cond$$inline_246$$) {
  return function($elem$$inline_247$$) {
    return $elem$$inline_247$$ && $elem$$inline_247$$.getAttribute && $elem$$inline_247$$.hasAttribute($cond$$inline_246$$)
  }
};
function $getSimpleFilterFunc$$inline_128$$($query$$inline_248$$, $ignores$$inline_249$$) {
  if(!$query$$inline_248$$) {
    return $goog$functions$TRUE$$
  }
  var $ignores$$inline_249$$ = $ignores$$inline_249$$ || {}, $ff$$inline_250$$ = $JSCompiler_alias_NULL$$;
  $ignores$$inline_249$$.$el$ || ($ff$$inline_250$$ = $agree$$inline_113$$($ff$$inline_250$$, $isElement$$inline_114$$));
  $ignores$$inline_249$$.$tag$ || "*" != $query$$inline_248$$.$tag$ && ($ff$$inline_250$$ = $agree$$inline_113$$($ff$$inline_250$$, function($elem$$inline_251$$) {
    return $elem$$inline_251$$ && $elem$$inline_251$$.tagName == $query$$inline_248$$.$getTag$()
  }));
  $ignores$$inline_249$$.$classes$ || $goog$array$forEach$$($query$$inline_248$$.$classes$, function($cname$$inline_252$$, $idx$$inline_253$$) {
    var $re$$inline_254$$ = RegExp("(?:^|\\s)" + $cname$$inline_252$$ + "(?:\\s|$)");
    $ff$$inline_250$$ = $agree$$inline_113$$($ff$$inline_250$$, function($elem$$inline_255$$) {
      return $re$$inline_254$$.test($elem$$inline_255$$.className)
    });
    $ff$$inline_250$$.count = $idx$$inline_253$$
  });
  $ignores$$inline_249$$.$pseudos$ || $goog$array$forEach$$($query$$inline_248$$.$pseudos$, function($pseudo$$inline_256$$) {
    var $pn$$inline_257$$ = $pseudo$$inline_256$$.name;
    $pseudos$$inline_126$$[$pn$$inline_257$$] && ($ff$$inline_250$$ = $agree$$inline_113$$($ff$$inline_250$$, $pseudos$$inline_126$$[$pn$$inline_257$$]($pn$$inline_257$$, $pseudo$$inline_256$$.value)))
  });
  $ignores$$inline_249$$.$attrs$ || $goog$array$forEach$$($query$$inline_248$$.$attrs$, function($attr$$inline_258$$) {
    var $matcher$$inline_259$$, $a$$inline_260$$ = $attr$$inline_258$$.$attr$;
    $attr$$inline_258$$.type && $attrs$$inline_116$$[$attr$$inline_258$$.type] ? $matcher$$inline_259$$ = $attrs$$inline_116$$[$attr$$inline_258$$.type]($a$$inline_260$$, $attr$$inline_258$$.$matchFor$) : $a$$inline_260$$.length && ($matcher$$inline_259$$ = $defaultGetter$$inline_127$$($a$$inline_260$$));
    $matcher$$inline_259$$ && ($ff$$inline_250$$ = $agree$$inline_113$$($ff$$inline_250$$, $matcher$$inline_259$$))
  });
  $ignores$$inline_249$$.id || $query$$inline_248$$.id && ($ff$$inline_250$$ = $agree$$inline_113$$($ff$$inline_250$$, function($elem$$inline_261$$) {
    return!!$elem$$inline_261$$ && $elem$$inline_261$$.id == $query$$inline_248$$.id
  }));
  $ff$$inline_250$$ || "default" in $ignores$$inline_249$$ || ($ff$$inline_250$$ = $goog$functions$TRUE$$);
  return $ff$$inline_250$$
}
var $_getElementsFuncCache$$inline_133$$ = {};
function $getElementsFunc$$inline_134$$($query$$inline_281$$) {
  var $retFunc$$inline_282$$ = $_getElementsFuncCache$$inline_133$$[$query$$inline_281$$.$query$];
  if($retFunc$$inline_282$$) {
    return $retFunc$$inline_282$$
  }
  var $io$$inline_283_oper$$inline_284$$ = $query$$inline_281$$.$infixOper$, $io$$inline_283_oper$$inline_284$$ = $io$$inline_283_oper$$inline_284$$ ? $io$$inline_283_oper$$inline_284$$.$oper$ : "", $filterFunc$$inline_285$$ = $getSimpleFilterFunc$$inline_128$$($query$$inline_281$$, {$el$:1}), $wildcardTag$$inline_286$$ = "*" == $query$$inline_281$$.$tag$, $ecs$$inline_287_skipFilters$$inline_288$$ = document.getElementsByClassName;
  if($io$$inline_283_oper$$inline_284$$) {
    if($ecs$$inline_287_skipFilters$$inline_288$$ = {$el$:1}, $wildcardTag$$inline_286$$ && ($ecs$$inline_287_skipFilters$$inline_288$$.$tag$ = 1), $filterFunc$$inline_285$$ = $getSimpleFilterFunc$$inline_128$$($query$$inline_281$$, $ecs$$inline_287_skipFilters$$inline_288$$), "+" == $io$$inline_283_oper$$inline_284$$) {
      var $filterFunc$$inline_670$$ = $filterFunc$$inline_285$$, $retFunc$$inline_282$$ = function $$retFunc$$inline_282$$$($node$$inline_671$$, $ret$$inline_672$$, $bag$$inline_673$$) {
        for(;$node$$inline_671$$ = $node$$inline_671$$[$nSibling$$inline_118$$];) {
          if(!$noNextElementSibling$$inline_117$$ || $isElement$$inline_114$$($node$$inline_671$$)) {
            (!$bag$$inline_673$$ || $_isUnique$$inline_143$$($node$$inline_671$$, $bag$$inline_673$$)) && $filterFunc$$inline_670$$($node$$inline_671$$) && $ret$$inline_672$$.push($node$$inline_671$$);
            break
          }
        }
        return $ret$$inline_672$$
      }
    }else {
      if("~" == $io$$inline_283_oper$$inline_284$$) {
        var $filterFunc$$inline_675$$ = $filterFunc$$inline_285$$, $retFunc$$inline_282$$ = function $$retFunc$$inline_282$$$($root$$inline_676_te$$inline_679$$, $ret$$inline_677$$, $bag$$inline_678$$) {
          for($root$$inline_676_te$$inline_679$$ = $root$$inline_676_te$$inline_679$$[$nSibling$$inline_118$$];$root$$inline_676_te$$inline_679$$;) {
            if($simpleNodeTest$$inline_120$$($root$$inline_676_te$$inline_679$$)) {
              if($bag$$inline_678$$ && !$_isUnique$$inline_143$$($root$$inline_676_te$$inline_679$$, $bag$$inline_678$$)) {
                break
              }
              $filterFunc$$inline_675$$($root$$inline_676_te$$inline_679$$) && $ret$$inline_677$$.push($root$$inline_676_te$$inline_679$$)
            }
            $root$$inline_676_te$$inline_679$$ = $root$$inline_676_te$$inline_679$$[$nSibling$$inline_118$$]
          }
          return $ret$$inline_677$$
        }
      }else {
        if(">" == $io$$inline_283_oper$$inline_284$$) {
          var $filterFunc$$inline_681$$ = $filterFunc$$inline_285$$, $filterFunc$$inline_681$$ = $filterFunc$$inline_681$$ || $goog$functions$TRUE$$, $retFunc$$inline_282$$ = function $$retFunc$$inline_282$$$($root$$inline_682_te$$inline_685$$, $ret$$inline_683$$, $bag$$inline_684$$) {
            for(var $x$$inline_686$$ = 0, $tret$$inline_687$$ = $root$$inline_682_te$$inline_685$$[$childNodesName$$inline_110$$];$root$$inline_682_te$$inline_685$$ = $tret$$inline_687$$[$x$$inline_686$$++];) {
              $simpleNodeTest$$inline_120$$($root$$inline_682_te$$inline_685$$) && ((!$bag$$inline_684$$ || $_isUnique$$inline_143$$($root$$inline_682_te$$inline_685$$, $bag$$inline_684$$)) && $filterFunc$$inline_681$$($root$$inline_682_te$$inline_685$$, $x$$inline_686$$)) && $ret$$inline_683$$.push($root$$inline_682_te$$inline_685$$)
            }
            return $ret$$inline_683$$
          }
        }
      }
    }
  }else {
    if($query$$inline_281$$.id) {
      $filterFunc$$inline_285$$ = !$query$$inline_281$$.$loops$ && $wildcardTag$$inline_286$$ ? $goog$functions$TRUE$$ : $getSimpleFilterFunc$$inline_128$$($query$$inline_281$$, {$el$:1, id:1}), $retFunc$$inline_282$$ = function $$retFunc$$inline_282$$$($root$$inline_290$$, $arr$$inline_291$$) {
        var $te$$inline_292$$ = $goog$dom$getDomHelper$$($root$$inline_290$$).$getElement$($query$$inline_281$$.id), $JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$;
        if($JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$ = $te$$inline_292$$ && $filterFunc$$inline_285$$($te$$inline_292$$)) {
          if(!($JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$ = 9 == $root$$inline_290$$.nodeType)) {
            for($JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$ = $te$$inline_292$$.parentNode;$JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$ && $JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$ != $root$$inline_290$$;) {
              $JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$ = $JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$.parentNode
            }
            $JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$ = !!$JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$
          }
        }
        if($JSCompiler_temp$$640_JSCompiler_temp$$641_pn$$inline_691$$) {
          return $getArr$$inline_108$$($te$$inline_292$$, $arr$$inline_291$$)
        }
      }
    }else {
      if($ecs$$inline_287_skipFilters$$inline_288$$ && /\{\s*\[native code\]\s*\}/.test(String($ecs$$inline_287_skipFilters$$inline_288$$)) && $query$$inline_281$$.$classes$.length && !$cssCaseBug$$inline_109$$) {
        var $filterFunc$$inline_285$$ = $getSimpleFilterFunc$$inline_128$$($query$$inline_281$$, {$el$:1, $classes$:1, id:1}), $classesString$$inline_289$$ = $query$$inline_281$$.$classes$.join(" "), $retFunc$$inline_282$$ = function $$retFunc$$inline_282$$$($root$$inline_293$$, $arr$$inline_294$$) {
          for(var $ret$$inline_295$$ = $getArr$$inline_108$$(0, $arr$$inline_294$$), $te$$inline_296$$, $x$$inline_297$$ = 0, $tret$$inline_298$$ = $root$$inline_293$$.getElementsByClassName($classesString$$inline_289$$);$te$$inline_296$$ = $tret$$inline_298$$[$x$$inline_297$$++];) {
            $filterFunc$$inline_285$$($te$$inline_296$$, $root$$inline_293$$) && $ret$$inline_295$$.push($te$$inline_296$$)
          }
          return $ret$$inline_295$$
        }
      }else {
        !$wildcardTag$$inline_286$$ && !$query$$inline_281$$.$loops$ ? $retFunc$$inline_282$$ = function $$retFunc$$inline_282$$$($root$$inline_299$$, $arr$$inline_300$$) {
          for(var $ret$$inline_301$$ = $getArr$$inline_108$$(0, $arr$$inline_300$$), $te$$inline_302$$, $x$$inline_303$$ = 0, $tret$$inline_304$$ = $root$$inline_299$$.getElementsByTagName($query$$inline_281$$.$getTag$());$te$$inline_302$$ = $tret$$inline_304$$[$x$$inline_303$$++];) {
            $ret$$inline_301$$.push($te$$inline_302$$)
          }
          return $ret$$inline_301$$
        } : ($filterFunc$$inline_285$$ = $getSimpleFilterFunc$$inline_128$$($query$$inline_281$$, {$el$:1, $tag$:1, id:1}), $retFunc$$inline_282$$ = function $$retFunc$$inline_282$$$($root$$inline_305$$, $arr$$inline_306$$) {
          for(var $ret$$inline_307$$ = $getArr$$inline_108$$(0, $arr$$inline_306$$), $te$$inline_308$$, $x$$inline_309$$ = 0, $tret$$inline_310$$ = $root$$inline_305$$.getElementsByTagName($query$$inline_281$$.$getTag$());$te$$inline_308$$ = $tret$$inline_310$$[$x$$inline_309$$++];) {
            $filterFunc$$inline_285$$($te$$inline_308$$, $root$$inline_305$$) && $ret$$inline_307$$.push($te$$inline_308$$)
          }
          return $ret$$inline_307$$
        })
      }
    }
  }
  return $_getElementsFuncCache$$inline_133$$[$query$$inline_281$$.$query$] = $retFunc$$inline_282$$
}
var $_queryFuncCacheDOM$$inline_136$$ = {}, $_queryFuncCacheQSA$$inline_137$$ = {};
function $getStepQueryFunc$$inline_138$$($query$$inline_323$$) {
  var $qparts$$inline_324$$ = $getQueryParts$$inline_112$$($goog$string$trim$$($query$$inline_323$$));
  if(1 == $qparts$$inline_324$$.length) {
    var $tef$$inline_325$$ = $getElementsFunc$$inline_134$$($qparts$$inline_324$$[0]);
    return function($r$$inline_327_root$$inline_326$$) {
      if($r$$inline_327_root$$inline_326$$ = $tef$$inline_325$$($r$$inline_327_root$$inline_326$$, [])) {
        $r$$inline_327_root$$inline_326$$.$nozip$ = $JSCompiler_alias_TRUE$$
      }
      return $r$$inline_327_root$$inline_326$$
    }
  }
  return function($candidates$$inline_695_root$$inline_328$$) {
    for(var $candidates$$inline_695_root$$inline_328$$ = $getArr$$inline_108$$($candidates$$inline_695_root$$inline_328$$), $qp$$inline_696_te$$inline_698$$, $gef$$inline_703_x$$inline_697$$, $qpl$$inline_699$$ = $qparts$$inline_324$$.length, $bag$$inline_700$$, $ret$$inline_701$$, $i$$inline_702$$ = 0;$i$$inline_702$$ < $qpl$$inline_699$$;$i$$inline_702$$++) {
      $ret$$inline_701$$ = [];
      $qp$$inline_696_te$$inline_698$$ = $qparts$$inline_324$$[$i$$inline_702$$];
      $gef$$inline_703_x$$inline_697$$ = $candidates$$inline_695_root$$inline_328$$.length - 1;
      0 < $gef$$inline_703_x$$inline_697$$ && ($bag$$inline_700$$ = {}, $ret$$inline_701$$.$nozip$ = $JSCompiler_alias_TRUE$$);
      $gef$$inline_703_x$$inline_697$$ = $getElementsFunc$$inline_134$$($qp$$inline_696_te$$inline_698$$);
      for(var $j$$inline_704$$ = 0;$qp$$inline_696_te$$inline_698$$ = $candidates$$inline_695_root$$inline_328$$[$j$$inline_704$$];$j$$inline_704$$++) {
        $gef$$inline_703_x$$inline_697$$($qp$$inline_696_te$$inline_698$$, $ret$$inline_701$$, $bag$$inline_700$$)
      }
      if(!$ret$$inline_701$$.length) {
        break
      }
      $candidates$$inline_695_root$$inline_328$$ = $ret$$inline_701$$
    }
    return $ret$$inline_701$$
  }
}
var $qsaAvail$$inline_139$$ = !!document.querySelectorAll && (!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("526"));
function $getQueryFunc$$inline_140$$($query$$inline_329$$, $opt_forceDOM$$inline_330$$) {
  if($qsaAvail$$inline_139$$) {
    var $domCached$$inline_332_qcz$$inline_333_qsaCached$$inline_331$$ = $_queryFuncCacheQSA$$inline_137$$[$query$$inline_329$$];
    if($domCached$$inline_332_qcz$$inline_333_qsaCached$$inline_331$$ && !$opt_forceDOM$$inline_330$$) {
      return $domCached$$inline_332_qcz$$inline_333_qsaCached$$inline_331$$
    }
  }
  if($domCached$$inline_332_qcz$$inline_333_qsaCached$$inline_331$$ = $_queryFuncCacheDOM$$inline_136$$[$query$$inline_329$$]) {
    return $domCached$$inline_332_qcz$$inline_333_qsaCached$$inline_331$$
  }
  var $domCached$$inline_332_qcz$$inline_333_qsaCached$$inline_331$$ = $query$$inline_329$$.charAt(0), $nospace$$inline_334$$ = -1 == $query$$inline_329$$.indexOf(" ");
  0 <= $query$$inline_329$$.indexOf("#") && $nospace$$inline_334$$ && ($opt_forceDOM$$inline_330$$ = $JSCompiler_alias_TRUE$$);
  if($qsaAvail$$inline_139$$ && !$opt_forceDOM$$inline_330$$ && -1 == ">~+".indexOf($domCached$$inline_332_qcz$$inline_333_qsaCached$$inline_331$$) && (!$goog$userAgent$IE$$ || -1 == $query$$inline_329$$.indexOf(":")) && !($cssCaseBug$$inline_109$$ && 0 <= $query$$inline_329$$.indexOf(".")) && -1 == $query$$inline_329$$.indexOf(":contains") && -1 == $query$$inline_329$$.indexOf("|=")) {
    var $tq$$inline_335$$ = 0 <= ">~+".indexOf($query$$inline_329$$.charAt($query$$inline_329$$.length - 1)) ? $query$$inline_329$$ + " *" : $query$$inline_329$$;
    return $_queryFuncCacheQSA$$inline_137$$[$query$$inline_329$$] = function $$_queryFuncCacheQSA$$inline_137$$$$query$$inline_329$$$($root$$inline_337$$) {
      try {
        if(!(9 == $root$$inline_337$$.nodeType || $nospace$$inline_334$$)) {
          throw"";
        }
        var $r$$inline_338$$ = $root$$inline_337$$.querySelectorAll($tq$$inline_335$$);
        $goog$userAgent$IE$$ ? $r$$inline_338$$.$commentStrip$ = $JSCompiler_alias_TRUE$$ : $r$$inline_338$$.$nozip$ = $JSCompiler_alias_TRUE$$;
        return $r$$inline_338$$
      }catch($e$$inline_339$$) {
        return $getQueryFunc$$inline_140$$($query$$inline_329$$, $JSCompiler_alias_TRUE$$)($root$$inline_337$$)
      }
    }
  }
  var $parts$$inline_336$$ = $query$$inline_329$$.split(/\s*,\s*/);
  return $_queryFuncCacheDOM$$inline_136$$[$query$$inline_329$$] = 2 > $parts$$inline_336$$.length ? $getStepQueryFunc$$inline_138$$($query$$inline_329$$) : function($root$$inline_340$$) {
    for(var $pindex$$inline_341$$ = 0, $ret$$inline_342$$ = [], $tp$$inline_343$$;$tp$$inline_343$$ = $parts$$inline_336$$[$pindex$$inline_341$$++];) {
      $ret$$inline_342$$ = $ret$$inline_342$$.concat($getStepQueryFunc$$inline_138$$($tp$$inline_343$$)($root$$inline_340$$))
    }
    return $ret$$inline_342$$
  }
}
var $_zipIdx$$inline_141$$ = 0, $_nodeUID$$inline_142$$ = $goog$userAgent$IE$$ ? function($node$$inline_344$$) {
  return $caseSensitive$$inline_111$$ ? $node$$inline_344$$.getAttribute("_uid") || $node$$inline_344$$.setAttribute("_uid", ++$_zipIdx$$inline_141$$) || $_zipIdx$$inline_141$$ : $node$$inline_344$$.uniqueID
} : function($node$$inline_345$$) {
  return $node$$inline_345$$._uid || ($node$$inline_345$$._uid = ++$_zipIdx$$inline_141$$)
};
function $_isUnique$$inline_143$$($node$$inline_346$$, $bag$$inline_347$$) {
  if(!$bag$$inline_347$$) {
    return 1
  }
  var $id$$inline_348$$ = $_nodeUID$$inline_142$$($node$$inline_346$$);
  return!$bag$$inline_347$$[$id$$inline_348$$] ? $bag$$inline_347$$[$id$$inline_348$$] = 1 : 0
}
function $_zip$$inline_144$$($arr$$inline_349$$) {
  if($arr$$inline_349$$ && $arr$$inline_349$$.$nozip$) {
    return $arr$$inline_349$$
  }
  var $ret$$inline_350$$ = [];
  if(!$arr$$inline_349$$ || !$arr$$inline_349$$.length) {
    return $ret$$inline_350$$
  }
  $arr$$inline_349$$[0] && $ret$$inline_350$$.push($arr$$inline_349$$[0]);
  if(2 > $arr$$inline_349$$.length) {
    return $ret$$inline_350$$
  }
  $_zipIdx$$inline_141$$++;
  if($goog$userAgent$IE$$ && $caseSensitive$$inline_111$$) {
    var $szidx$$inline_351$$ = $_zipIdx$$inline_141$$ + "";
    $arr$$inline_349$$[0].setAttribute("_zipIdx", $szidx$$inline_351$$);
    for(var $x$$inline_352$$ = 1, $te$$inline_353$$;$te$$inline_353$$ = $arr$$inline_349$$[$x$$inline_352$$];$x$$inline_352$$++) {
      $arr$$inline_349$$[$x$$inline_352$$].getAttribute("_zipIdx") != $szidx$$inline_351$$ && $ret$$inline_350$$.push($te$$inline_353$$), $te$$inline_353$$.setAttribute("_zipIdx", $szidx$$inline_351$$)
    }
  }else {
    if($goog$userAgent$IE$$ && $arr$$inline_349$$.$commentStrip$) {
      try {
        for($x$$inline_352$$ = 1;$te$$inline_353$$ = $arr$$inline_349$$[$x$$inline_352$$];$x$$inline_352$$++) {
          $isElement$$inline_114$$($te$$inline_353$$) && $ret$$inline_350$$.push($te$$inline_353$$)
        }
      }catch($e$$inline_354$$) {
      }
    }else {
      $arr$$inline_349$$[0] && ($arr$$inline_349$$[0]._zipIdx = $_zipIdx$$inline_141$$);
      for($x$$inline_352$$ = 1;$te$$inline_353$$ = $arr$$inline_349$$[$x$$inline_352$$];$x$$inline_352$$++) {
        $arr$$inline_349$$[$x$$inline_352$$]._zipIdx != $_zipIdx$$inline_141$$ && $ret$$inline_350$$.push($te$$inline_353$$), $te$$inline_353$$._zipIdx = $_zipIdx$$inline_141$$
      }
    }
  }
  return $ret$$inline_350$$
}
function $query$$inline_145$$($query$$inline_355$$, $root$$inline_356$$) {
  if(!$query$$inline_355$$) {
    return[]
  }
  if($query$$inline_355$$.constructor == Array) {
    return $query$$inline_355$$
  }
  if(!$goog$isString$$($query$$inline_355$$)) {
    return[$query$$inline_355$$]
  }
  if($goog$isString$$($root$$inline_356$$) && ($root$$inline_356$$ = $goog$isString$$($root$$inline_356$$) ? document.getElementById($root$$inline_356$$) : $root$$inline_356$$, !$root$$inline_356$$)) {
    return[]
  }
  var $root$$inline_356$$ = $root$$inline_356$$ || document, $od$$inline_357_r$$inline_358$$ = $root$$inline_356$$.ownerDocument || $root$$inline_356$$.documentElement;
  $caseSensitive$$inline_111$$ = $root$$inline_356$$.contentType && "application/xml" == $root$$inline_356$$.contentType || $goog$userAgent$OPERA$$ && ($root$$inline_356$$.doctype || "[object XMLDocument]" == $od$$inline_357_r$$inline_358$$.toString()) || !!$od$$inline_357_r$$inline_358$$ && ($goog$userAgent$IE$$ ? $od$$inline_357_r$$inline_358$$.xml : $root$$inline_356$$.xmlVersion || $od$$inline_357_r$$inline_358$$.xmlVersion);
  return($od$$inline_357_r$$inline_358$$ = $getQueryFunc$$inline_140$$($query$$inline_355$$)($root$$inline_356$$)) && $od$$inline_357_r$$inline_358$$.$nozip$ ? $od$$inline_357_r$$inline_358$$ : $_zip$$inline_144$$($od$$inline_357_r$$inline_358$$)
}
$query$$inline_145$$.$pseudos$ = $pseudos$$inline_126$$;
$goog$exportPath_$$("goog.dom.query", $query$$inline_145$$);
$goog$exportPath_$$("goog.dom.query.pseudos", $query$$inline_145$$.$pseudos$);
!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$();
var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
function $goog$Disposable$$() {
  0 != $goog$Disposable$MonitoringMode$OFF$$ && (this.$creationStack$ = Error().stack, $goog$getUid$$(this))
}
var $goog$Disposable$MonitoringMode$OFF$$ = 0;
function $goog$events$Event$$($type$$58$$, $opt_target$$1$$) {
  this.type = $type$$58$$;
  this.currentTarget = this.target = $opt_target$$1$$
}
$goog$events$Event$$.prototype.$propagationStopped_$ = $JSCompiler_alias_FALSE$$;
$goog$events$Event$$.prototype.defaultPrevented = $JSCompiler_alias_FALSE$$;
$goog$events$Event$$.prototype.$returnValue_$ = $JSCompiler_alias_TRUE$$;
$goog$events$Event$$.prototype.preventDefault = function $$goog$events$Event$$$$preventDefault$() {
  this.defaultPrevented = $JSCompiler_alias_TRUE$$;
  this.$returnValue_$ = $JSCompiler_alias_FALSE$$
};
function $goog$reflect$sinkValue$$($x$$69$$) {
  $goog$reflect$sinkValue$$[" "]($x$$69$$);
  return $x$$69$$
}
$goog$reflect$sinkValue$$[" "] = function $$goog$reflect$sinkValue$$$__0$() {
};
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $opt_e$$ && this.init($opt_e$$, $opt_currentTarget$$)
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
$JSCompiler_prototypeAlias$$ = $goog$events$BrowserEvent$$.prototype;
$JSCompiler_prototypeAlias$$.target = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.relatedTarget = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.offsetX = 0;
$JSCompiler_prototypeAlias$$.offsetY = 0;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.button = 0;
$JSCompiler_prototypeAlias$$.keyCode = 0;
$JSCompiler_prototypeAlias$$.charCode = 0;
$JSCompiler_prototypeAlias$$.ctrlKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.altKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.shiftKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.metaKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$platformModifierKey$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$event_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($e$$17$$, $opt_currentTarget$$1$$) {
  var $type$$60$$ = this.type = $e$$17$$.type;
  $goog$events$Event$$.call(this, $type$$60$$);
  this.target = $e$$17$$.target || $e$$17$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$17$$.relatedTarget;
  if($relatedTarget$$) {
    if($goog$userAgent$GECKO$$) {
      var $JSCompiler_inline_result$$32$$;
      a: {
        try {
          $goog$reflect$sinkValue$$($relatedTarget$$.nodeName);
          $JSCompiler_inline_result$$32$$ = $JSCompiler_alias_TRUE$$;
          break a
        }catch($e$$inline_370$$) {
        }
        $JSCompiler_inline_result$$32$$ = $JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$32$$ || ($relatedTarget$$ = $JSCompiler_alias_NULL$$)
    }
  }else {
    "mouseover" == $type$$60$$ ? $relatedTarget$$ = $e$$17$$.fromElement : "mouseout" == $type$$60$$ && ($relatedTarget$$ = $e$$17$$.toElement)
  }
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetX : $e$$17$$.layerX;
  this.offsetY = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetY : $e$$17$$.layerY;
  this.clientX = $e$$17$$.clientX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientX : $e$$17$$.pageX;
  this.clientY = $e$$17$$.clientY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientY : $e$$17$$.pageY;
  this.screenX = $e$$17$$.screenX || 0;
  this.screenY = $e$$17$$.screenY || 0;
  this.button = $e$$17$$.button;
  this.keyCode = $e$$17$$.keyCode || 0;
  this.charCode = $e$$17$$.charCode || ("keypress" == $type$$60$$ ? $e$$17$$.keyCode : 0);
  this.ctrlKey = $e$$17$$.ctrlKey;
  this.altKey = $e$$17$$.altKey;
  this.shiftKey = $e$$17$$.shiftKey;
  this.metaKey = $e$$17$$.metaKey;
  this.$platformModifierKey$ = $goog$userAgent$detectedMac_$$ ? $e$$17$$.metaKey : $e$$17$$.ctrlKey;
  this.state = $e$$17$$.state;
  this.$event_$ = $e$$17$$;
  $e$$17$$.defaultPrevented && this.preventDefault();
  delete this.$propagationStopped_$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$event_$;
  if($be$$.preventDefault) {
    $be$$.preventDefault()
  }else {
    if($be$$.returnValue = $JSCompiler_alias_FALSE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1
        }
      }catch($ex$$1$$) {
      }
    }
  }
};
function $goog$events$Listener$$() {
}
var $goog$events$Listener$counter_$$ = 0;
$JSCompiler_prototypeAlias$$ = $goog$events$Listener$$.prototype;
$JSCompiler_prototypeAlias$$.key = 0;
$JSCompiler_prototypeAlias$$.$removed$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$callOnce$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($listener$$32$$, $proxy$$, $src$$6$$, $type$$61$$, $capture$$, $opt_handler$$) {
  if($goog$isFunction$$($listener$$32$$)) {
    this.$isFunctionListener_$ = $JSCompiler_alias_TRUE$$
  }else {
    if($listener$$32$$ && $listener$$32$$.handleEvent && $goog$isFunction$$($listener$$32$$.handleEvent)) {
      this.$isFunctionListener_$ = $JSCompiler_alias_FALSE$$
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.$listener$ = $listener$$32$$;
  this.$proxy$ = $proxy$$;
  this.src = $src$$6$$;
  this.type = $type$$61$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$callOnce$ = $JSCompiler_alias_FALSE$$;
  this.key = ++$goog$events$Listener$counter_$$;
  this.$removed$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($eventObject$$) {
  return this.$isFunctionListener_$ ? this.$listener$.call(this.$handler$ || this.src, $eventObject$$) : this.$listener$.handleEvent.call(this.$listener$, $eventObject$$)
};
var $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};
function $goog$events$listen$$($src$$7$$, $type$$62$$, $key$$43_listener$$33$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$) {
  if($type$$62$$) {
    if("array" == $goog$typeOf$$($type$$62$$)) {
      for(var $i$$72_proxy$$1$$ = 0;$i$$72_proxy$$1$$ < $type$$62$$.length;$i$$72_proxy$$1$$++) {
        $goog$events$listen$$($src$$7$$, $type$$62$$[$i$$72_proxy$$1$$], $key$$43_listener$$33$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$)
      }
      return $JSCompiler_alias_NULL$$
    }
    var $capture$$1_opt_capt$$2$$ = !!$capture$$1_opt_capt$$2$$, $listenerObj_map$$ = $goog$events$listenerTree_$$;
    $type$$62$$ in $listenerObj_map$$ || ($listenerObj_map$$[$type$$62$$] = {$count_$:0, $remaining_$:0});
    $listenerObj_map$$ = $listenerObj_map$$[$type$$62$$];
    $capture$$1_opt_capt$$2$$ in $listenerObj_map$$ || ($listenerObj_map$$[$capture$$1_opt_capt$$2$$] = {$count_$:0, $remaining_$:0}, $listenerObj_map$$.$count_$++);
    var $listenerObj_map$$ = $listenerObj_map$$[$capture$$1_opt_capt$$2$$], $srcUid$$ = $goog$getUid$$($src$$7$$), $listenerArray$$;
    $listenerObj_map$$.$remaining_$++;
    if($listenerObj_map$$[$srcUid$$]) {
      $listenerArray$$ = $listenerObj_map$$[$srcUid$$];
      for($i$$72_proxy$$1$$ = 0;$i$$72_proxy$$1$$ < $listenerArray$$.length;$i$$72_proxy$$1$$++) {
        if($listenerObj_map$$ = $listenerArray$$[$i$$72_proxy$$1$$], $listenerObj_map$$.$listener$ == $key$$43_listener$$33$$ && $listenerObj_map$$.$handler$ == $opt_handler$$1$$) {
          if($listenerObj_map$$.$removed$) {
            break
          }
          return $listenerArray$$[$i$$72_proxy$$1$$].key
        }
      }
    }else {
      $listenerArray$$ = $listenerObj_map$$[$srcUid$$] = [], $listenerObj_map$$.$count_$++
    }
    var $proxyCallbackFunction$$inline_372$$ = $goog$events$handleBrowserEvent_$$, $f$$inline_373$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$inline_374$$) {
      return $proxyCallbackFunction$$inline_372$$.call($f$$inline_373$$.src, $f$$inline_373$$.key, $eventObject$$inline_374$$)
    } : function($eventObject$$inline_375_v$$inline_376$$) {
      $eventObject$$inline_375_v$$inline_376$$ = $proxyCallbackFunction$$inline_372$$.call($f$$inline_373$$.src, $f$$inline_373$$.key, $eventObject$$inline_375_v$$inline_376$$);
      if(!$eventObject$$inline_375_v$$inline_376$$) {
        return $eventObject$$inline_375_v$$inline_376$$
      }
    }, $i$$72_proxy$$1$$ = $f$$inline_373$$;
    $i$$72_proxy$$1$$.src = $src$$7$$;
    $listenerObj_map$$ = new $goog$events$Listener$$;
    $listenerObj_map$$.init($key$$43_listener$$33$$, $i$$72_proxy$$1$$, $src$$7$$, $type$$62$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$);
    $key$$43_listener$$33$$ = $listenerObj_map$$.key;
    $i$$72_proxy$$1$$.key = $key$$43_listener$$33$$;
    $listenerArray$$.push($listenerObj_map$$);
    $goog$events$listeners_$$[$key$$43_listener$$33$$] = $listenerObj_map$$;
    $goog$events$sources_$$[$srcUid$$] || ($goog$events$sources_$$[$srcUid$$] = []);
    $goog$events$sources_$$[$srcUid$$].push($listenerObj_map$$);
    $src$$7$$.addEventListener ? ($src$$7$$ == $goog$global$$ || !$src$$7$$.$customEvent_$) && $src$$7$$.addEventListener($type$$62$$, $i$$72_proxy$$1$$, $capture$$1_opt_capt$$2$$) : $src$$7$$.attachEvent($type$$62$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$62$$] : $goog$events$onStringMap_$$[$type$$62$$] = "on" + $type$$62$$, $i$$72_proxy$$1$$);
    return $key$$43_listener$$33$$
  }
  throw Error("Invalid event type");
}
function $goog$events$unlisten$$($listenerArray$$1_objUid$$inline_710_src$$10$$, $type$$64$$, $listener$$36$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$) {
  if("array" == $goog$typeOf$$($type$$64$$)) {
    for(var $i$$74_map$$inline_709$$ = 0;$i$$74_map$$inline_709$$ < $type$$64$$.length;$i$$74_map$$inline_709$$++) {
      $goog$events$unlisten$$($listenerArray$$1_objUid$$inline_710_src$$10$$, $type$$64$$[$i$$74_map$$inline_709$$], $listener$$36$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$)
    }
  }else {
    $capture$$2_opt_capt$$5$$ = !!$capture$$2_opt_capt$$5$$;
    a: {
      $i$$74_map$$inline_709$$ = $goog$events$listenerTree_$$;
      if($type$$64$$ in $i$$74_map$$inline_709$$ && ($i$$74_map$$inline_709$$ = $i$$74_map$$inline_709$$[$type$$64$$], $capture$$2_opt_capt$$5$$ in $i$$74_map$$inline_709$$ && ($i$$74_map$$inline_709$$ = $i$$74_map$$inline_709$$[$capture$$2_opt_capt$$5$$], $listenerArray$$1_objUid$$inline_710_src$$10$$ = $goog$getUid$$($listenerArray$$1_objUid$$inline_710_src$$10$$), $i$$74_map$$inline_709$$[$listenerArray$$1_objUid$$inline_710_src$$10$$]))) {
        $listenerArray$$1_objUid$$inline_710_src$$10$$ = $i$$74_map$$inline_709$$[$listenerArray$$1_objUid$$inline_710_src$$10$$];
        break a
      }
      $listenerArray$$1_objUid$$inline_710_src$$10$$ = $JSCompiler_alias_NULL$$
    }
    if($listenerArray$$1_objUid$$inline_710_src$$10$$) {
      for($i$$74_map$$inline_709$$ = 0;$i$$74_map$$inline_709$$ < $listenerArray$$1_objUid$$inline_710_src$$10$$.length;$i$$74_map$$inline_709$$++) {
        if($listenerArray$$1_objUid$$inline_710_src$$10$$[$i$$74_map$$inline_709$$].$listener$ == $listener$$36$$ && $listenerArray$$1_objUid$$inline_710_src$$10$$[$i$$74_map$$inline_709$$].capture == $capture$$2_opt_capt$$5$$ && $listenerArray$$1_objUid$$inline_710_src$$10$$[$i$$74_map$$inline_709$$].$handler$ == $opt_handler$$4$$) {
          $goog$events$unlistenByKey$$($listenerArray$$1_objUid$$inline_710_src$$10$$[$i$$74_map$$inline_709$$].key);
          break
        }
      }
    }
  }
}
function $goog$events$unlistenByKey$$($key$$45$$) {
  if($goog$events$listeners_$$[$key$$45$$]) {
    var $listener$$37_listenerArray$$2$$ = $goog$events$listeners_$$[$key$$45$$];
    if(!$listener$$37_listenerArray$$2$$.$removed$) {
      var $src$$11_srcUid$$1$$ = $listener$$37_listenerArray$$2$$.src, $type$$65$$ = $listener$$37_listenerArray$$2$$.type, $proxy$$2_sourcesArray$$ = $listener$$37_listenerArray$$2$$.$proxy$, $capture$$3$$ = $listener$$37_listenerArray$$2$$.capture;
      $src$$11_srcUid$$1$$.removeEventListener ? ($src$$11_srcUid$$1$$ == $goog$global$$ || !$src$$11_srcUid$$1$$.$customEvent_$) && $src$$11_srcUid$$1$$.removeEventListener($type$$65$$, $proxy$$2_sourcesArray$$, $capture$$3$$) : $src$$11_srcUid$$1$$.detachEvent && $src$$11_srcUid$$1$$.detachEvent($type$$65$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$65$$] : $goog$events$onStringMap_$$[$type$$65$$] = "on" + $type$$65$$, $proxy$$2_sourcesArray$$);
      $src$$11_srcUid$$1$$ = $goog$getUid$$($src$$11_srcUid$$1$$);
      $goog$events$sources_$$[$src$$11_srcUid$$1$$] && ($proxy$$2_sourcesArray$$ = $goog$events$sources_$$[$src$$11_srcUid$$1$$], $goog$array$remove$$($proxy$$2_sourcesArray$$, $listener$$37_listenerArray$$2$$), 0 == $proxy$$2_sourcesArray$$.length && delete $goog$events$sources_$$[$src$$11_srcUid$$1$$]);
      $listener$$37_listenerArray$$2$$.$removed$ = $JSCompiler_alias_TRUE$$;
      if($listener$$37_listenerArray$$2$$ = $goog$events$listenerTree_$$[$type$$65$$][$capture$$3$$][$src$$11_srcUid$$1$$]) {
        $listener$$37_listenerArray$$2$$.$needsCleanup_$ = $JSCompiler_alias_TRUE$$, $goog$events$cleanUp_$$($type$$65$$, $capture$$3$$, $src$$11_srcUid$$1$$, $listener$$37_listenerArray$$2$$)
      }
      delete $goog$events$listeners_$$[$key$$45$$]
    }
  }
}
function $goog$events$cleanUp_$$($type$$66$$, $capture$$4$$, $srcUid$$2$$, $listenerArray$$3$$) {
  if(!$listenerArray$$3$$.$locked_$ && $listenerArray$$3$$.$needsCleanup_$) {
    for(var $oldIndex$$ = 0, $newIndex$$ = 0;$oldIndex$$ < $listenerArray$$3$$.length;$oldIndex$$++) {
      $listenerArray$$3$$[$oldIndex$$].$removed$ ? $listenerArray$$3$$[$oldIndex$$].$proxy$.src = $JSCompiler_alias_NULL$$ : ($oldIndex$$ != $newIndex$$ && ($listenerArray$$3$$[$newIndex$$] = $listenerArray$$3$$[$oldIndex$$]), $newIndex$$++)
    }
    $listenerArray$$3$$.length = $newIndex$$;
    $listenerArray$$3$$.$needsCleanup_$ = $JSCompiler_alias_FALSE$$;
    0 == $newIndex$$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$][$srcUid$$2$$], $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$--, 0 == $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$], $goog$events$listenerTree_$$[$type$$66$$].$count_$--), 0 == $goog$events$listenerTree_$$[$type$$66$$].$count_$ && delete $goog$events$listenerTree_$$[$type$$66$$])
  }
}
function $goog$events$fireListeners_$$($listenerArray$$5_map$$4$$, $obj$$69_objUid$$2$$, $type$$72$$, $capture$$9$$, $eventObject$$4$$) {
  var $retval$$ = 1, $obj$$69_objUid$$2$$ = $goog$getUid$$($obj$$69_objUid$$2$$);
  if($listenerArray$$5_map$$4$$[$obj$$69_objUid$$2$$]) {
    $listenerArray$$5_map$$4$$.$remaining_$--;
    $listenerArray$$5_map$$4$$ = $listenerArray$$5_map$$4$$[$obj$$69_objUid$$2$$];
    $listenerArray$$5_map$$4$$.$locked_$ ? $listenerArray$$5_map$$4$$.$locked_$++ : $listenerArray$$5_map$$4$$.$locked_$ = 1;
    try {
      for(var $length$$20$$ = $listenerArray$$5_map$$4$$.length, $i$$78$$ = 0;$i$$78$$ < $length$$20$$;$i$$78$$++) {
        var $listener$$43$$ = $listenerArray$$5_map$$4$$[$i$$78$$];
        $listener$$43$$ && !$listener$$43$$.$removed$ && ($retval$$ &= $goog$events$fireListener$$($listener$$43$$, $eventObject$$4$$) !== $JSCompiler_alias_FALSE$$)
      }
    }finally {
      $listenerArray$$5_map$$4$$.$locked_$--, $goog$events$cleanUp_$$($type$$72$$, $capture$$9$$, $obj$$69_objUid$$2$$, $listenerArray$$5_map$$4$$)
    }
  }
  return Boolean($retval$$)
}
function $goog$events$fireListener$$($listener$$44$$, $eventObject$$5$$) {
  $listener$$44$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$44$$.key);
  return $listener$$44$$.handleEvent($eventObject$$5$$)
}
function $goog$events$handleBrowserEvent_$$($key$$47$$, $opt_evt$$) {
  if(!$goog$events$listeners_$$[$key$$47$$]) {
    return $JSCompiler_alias_TRUE$$
  }
  var $listener$$45$$ = $goog$events$listeners_$$[$key$$47$$], $be$$1_type$$74$$ = $listener$$45$$.type, $map$$6$$ = $goog$events$listenerTree_$$;
  if(!($be$$1_type$$74$$ in $map$$6$$)) {
    return $JSCompiler_alias_TRUE$$
  }
  var $map$$6$$ = $map$$6$$[$be$$1_type$$74$$], $ieEvent_part$$inline_382_retval$$1$$, $targetsMap$$1$$;
  if(!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    var $JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$;
    if(!($JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$ = $opt_evt$$)) {
      a: {
        $JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$ = ["window", "event"];
        for(var $cur$$inline_381_hasBubble$$1$$ = $goog$global$$;$ieEvent_part$$inline_382_retval$$1$$ = $JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$.shift();) {
          if($cur$$inline_381_hasBubble$$1$$[$ieEvent_part$$inline_382_retval$$1$$] != $JSCompiler_alias_NULL$$) {
            $cur$$inline_381_hasBubble$$1$$ = $cur$$inline_381_hasBubble$$1$$[$ieEvent_part$$inline_382_retval$$1$$]
          }else {
            $JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$ = $JSCompiler_alias_NULL$$;
            break a
          }
        }
        $JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$ = $cur$$inline_381_hasBubble$$1$$
      }
    }
    $ieEvent_part$$inline_382_retval$$1$$ = $JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$;
    $JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$ = $JSCompiler_alias_TRUE$$ in $map$$6$$;
    $cur$$inline_381_hasBubble$$1$$ = $JSCompiler_alias_FALSE$$ in $map$$6$$;
    if($JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$) {
      if(0 > $ieEvent_part$$inline_382_retval$$1$$.keyCode || $ieEvent_part$$inline_382_retval$$1$$.returnValue != $JSCompiler_alias_VOID$$) {
        return $JSCompiler_alias_TRUE$$
      }
      a: {
        var $evt$$15_useReturnValue$$inline_385$$ = $JSCompiler_alias_FALSE$$;
        if(0 == $ieEvent_part$$inline_382_retval$$1$$.keyCode) {
          try {
            $ieEvent_part$$inline_382_retval$$1$$.keyCode = -1;
            break a
          }catch($ex$$inline_386$$) {
            $evt$$15_useReturnValue$$inline_385$$ = $JSCompiler_alias_TRUE$$
          }
        }
        if($evt$$15_useReturnValue$$inline_385$$ || $ieEvent_part$$inline_382_retval$$1$$.returnValue == $JSCompiler_alias_VOID$$) {
          $ieEvent_part$$inline_382_retval$$1$$.returnValue = $JSCompiler_alias_TRUE$$
        }
      }
    }
    $evt$$15_useReturnValue$$inline_385$$ = new $goog$events$BrowserEvent$$;
    $evt$$15_useReturnValue$$inline_385$$.init($ieEvent_part$$inline_382_retval$$1$$, this);
    $ieEvent_part$$inline_382_retval$$1$$ = $JSCompiler_alias_TRUE$$;
    try {
      if($JSCompiler_temp$$17_hasCapture$$2_parts$$inline_380$$) {
        for(var $ancestors$$2$$ = [], $parent$$17$$ = $evt$$15_useReturnValue$$inline_385$$.currentTarget;$parent$$17$$;$parent$$17$$ = $parent$$17$$.parentNode) {
          $ancestors$$2$$.push($parent$$17$$)
        }
        $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_TRUE$$];
        $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
        for(var $i$$80$$ = $ancestors$$2$$.length - 1;!$evt$$15_useReturnValue$$inline_385$$.$propagationStopped_$ && 0 <= $i$$80$$ && $targetsMap$$1$$.$remaining_$;$i$$80$$--) {
          $evt$$15_useReturnValue$$inline_385$$.currentTarget = $ancestors$$2$$[$i$$80$$], $ieEvent_part$$inline_382_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$80$$], $be$$1_type$$74$$, $JSCompiler_alias_TRUE$$, $evt$$15_useReturnValue$$inline_385$$)
        }
        if($cur$$inline_381_hasBubble$$1$$) {
          $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_FALSE$$];
          $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
          for($i$$80$$ = 0;!$evt$$15_useReturnValue$$inline_385$$.$propagationStopped_$ && $i$$80$$ < $ancestors$$2$$.length && $targetsMap$$1$$.$remaining_$;$i$$80$$++) {
            $evt$$15_useReturnValue$$inline_385$$.currentTarget = $ancestors$$2$$[$i$$80$$], $ieEvent_part$$inline_382_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$80$$], $be$$1_type$$74$$, $JSCompiler_alias_FALSE$$, $evt$$15_useReturnValue$$inline_385$$)
          }
        }
      }else {
        $ieEvent_part$$inline_382_retval$$1$$ = $goog$events$fireListener$$($listener$$45$$, $evt$$15_useReturnValue$$inline_385$$)
      }
    }finally {
      $ancestors$$2$$ && ($ancestors$$2$$.length = 0)
    }
    return $ieEvent_part$$inline_382_retval$$1$$
  }
  $be$$1_type$$74$$ = new $goog$events$BrowserEvent$$($opt_evt$$, this);
  return $ieEvent_part$$inline_382_retval$$1$$ = $goog$events$fireListener$$($listener$$45$$, $be$$1_type$$74$$)
}
;function $goog$soy$renderAsElement$$($template$$2$$, $opt_templateData$$2$$) {
  var $wrapper$$2$$ = $goog$dom$getDomHelper$$().createElement("DIV");
  $wrapper$$2$$.innerHTML = $template$$2$$($opt_templateData$$2$$ || $goog$soy$defaultTemplateData_$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$);
  if(1 == $wrapper$$2$$.childNodes.length) {
    var $firstChild$$ = $wrapper$$2$$.firstChild;
    if(1 == $firstChild$$.nodeType) {
      return $firstChild$$
    }
  }
  return $wrapper$$2$$
}
var $goog$soy$defaultTemplateData_$$ = {};
function $goog$style$setStyle$$($element$$30$$, $style$$1$$, $opt_value$$5$$) {
  $goog$isString$$($style$$1$$) ? $goog$style$setStyle_$$($element$$30$$, $opt_value$$5$$, $style$$1$$) : $goog$object$forEach$$($style$$1$$, $goog$partial$$($goog$style$setStyle_$$, $element$$30$$))
}
function $goog$style$setStyle_$$($element$$31$$, $value$$65$$, $style$$2$$) {
  $element$$31$$.style[String($style$$2$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase()
  })] = $value$$65$$
}
function $goog$style$setPosition$$($el$$4$$, $arg1_y$$41$$, $opt_arg2$$) {
  var $x$$72$$, $buggyGeckoSubPixelPos$$ = $goog$userAgent$GECKO$$ && ($goog$userAgent$detectedMac_$$ || $goog$userAgent$X11$$) && $goog$userAgent$isVersion$$("1.9");
  $JSCompiler_alias_FALSE$$ ? ($x$$72$$ = $arg1_y$$41$$.x, $arg1_y$$41$$ = $arg1_y$$41$$.y) : ($x$$72$$ = $arg1_y$$41$$, $arg1_y$$41$$ = $opt_arg2$$);
  $el$$4$$.style.left = $goog$style$getPixelStyleValue_$$($x$$72$$, $buggyGeckoSubPixelPos$$);
  $el$$4$$.style.top = $goog$style$getPixelStyleValue_$$($arg1_y$$41$$, $buggyGeckoSubPixelPos$$)
}
function $goog$style$getPixelStyleValue_$$($value$$66$$, $round$$) {
  "number" == typeof $value$$66$$ && ($value$$66$$ = ($round$$ ? Math.round($value$$66$$) : $value$$66$$) + "px");
  return $value$$66$$
}
function $goog$style$setOpacity$$($el$$15$$, $alpha$$3$$) {
  var $style$$7$$ = $el$$15$$.style;
  "opacity" in $style$$7$$ ? $style$$7$$.opacity = $alpha$$3$$ : "MozOpacity" in $style$$7$$ ? $style$$7$$.MozOpacity = $alpha$$3$$ : "filter" in $style$$7$$ && ($style$$7$$.filter = "" === $alpha$$3$$ ? "" : "alpha(opacity=" + 100 * $alpha$$3$$ + ")")
}
function $goog$style$showElement$$($el$$18$$, $display$$) {
  $el$$18$$.style.display = $display$$ ? "" : "none"
}
;/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
/*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/
function $goog$events$EventTarget$$() {
  $goog$Disposable$$.call(this)
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$goog$events$EventTarget$$.prototype.$customEvent_$ = $JSCompiler_alias_TRUE$$;
$goog$events$EventTarget$$.prototype.addEventListener = function $$goog$events$EventTarget$$$$addEventListener$($type$$75$$, $handler$$6$$, $opt_capture$$1$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$75$$, $handler$$6$$, $opt_capture$$1$$, $opt_handlerScope$$)
};
$goog$events$EventTarget$$.prototype.removeEventListener = function $$goog$events$EventTarget$$$$removeEventListener$($type$$76$$, $handler$$7$$, $opt_capture$$2$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$76$$, $handler$$7$$, $opt_capture$$2$$, $opt_handlerScope$$1$$)
};
$goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525");
function $goog$ui$IdGenerator$$() {
}
$goog$addSingletonGetter$$($goog$ui$IdGenerator$$);
$goog$ui$IdGenerator$$.$getInstance$();
function $goog$ui$Component$$($opt_domHelper$$2$$) {
  $goog$Disposable$$.call(this);
  this.$dom_$ = $opt_domHelper$$2$$ || $goog$dom$getDomHelper$$();
  this.$rightToLeft_$ = $goog$ui$Component$defaultRightToLeft_$$
}
$goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$);
var $goog$ui$Component$defaultRightToLeft_$$ = $JSCompiler_alias_NULL$$;
$goog$ui$Component$$.prototype.$element_$ = $JSCompiler_alias_NULL$$;
$goog$ui$Component$$.prototype.$rightToLeft_$ = $JSCompiler_alias_NULL$$;
$goog$ui$Component$$.prototype.$getElement$ = function $$goog$ui$Component$$$$$getElement$$() {
  return this.$element_$
};
function $goog$ui$ControlRenderer$$() {
}
$goog$addSingletonGetter$$($goog$ui$ControlRenderer$$);
var $goog$ui$registry$defaultRenderers_$$ = {};
function $goog$ui$Control$$($content$$3$$, $JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$, $opt_domHelper$$3$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$3$$);
  if(!$JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$) {
    for(var $JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$ = this.constructor, $key$$inline_487_rendererCtor$$inline_488$$;$JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$;) {
      $key$$inline_487_rendererCtor$$inline_488$$ = $goog$getUid$$($JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$);
      if($key$$inline_487_rendererCtor$$inline_488$$ = $goog$ui$registry$defaultRenderers_$$[$key$$inline_487_rendererCtor$$inline_488$$]) {
        break
      }
      $JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$ = $JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$.$superClass_$ ? $JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$.$superClass_$.constructor : $JSCompiler_alias_NULL$$
    }
    $JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$ = $key$$inline_487_rendererCtor$$inline_488$$ ? $goog$isFunction$$($key$$inline_487_rendererCtor$$inline_488$$.$getInstance$) ? $key$$inline_487_rendererCtor$$inline_488$$.$getInstance$() : new $key$$inline_487_rendererCtor$$inline_488$$ : $JSCompiler_alias_NULL$$
  }
  this.$renderer_$ = $JSCompiler_temp$$18_componentCtor$$inline_486_opt_renderer$$;
  this.$content_$ = $content$$3$$
}
$goog$inherits$$($goog$ui$Control$$, $goog$ui$Component$$);
$goog$ui$Control$$.prototype.$content_$ = $JSCompiler_alias_NULL$$;
if(!$goog$isFunction$$($goog$ui$Control$$)) {
  throw Error("Invalid component class " + $goog$ui$Control$$);
}
if(!$goog$isFunction$$($goog$ui$ControlRenderer$$)) {
  throw Error("Invalid renderer class " + $goog$ui$ControlRenderer$$);
}
var $key$$inline_539$$ = $goog$getUid$$($goog$ui$Control$$);
$goog$ui$registry$defaultRenderers_$$[$key$$inline_539$$] = $goog$ui$ControlRenderer$$;
function $decoratorFn$$inline_541$$() {
  return new $goog$ui$Control$$($JSCompiler_alias_NULL$$)
}
if(!$goog$isFunction$$($decoratorFn$$inline_541$$)) {
  throw Error("Invalid decorator function " + $decoratorFn$$inline_541$$);
}
;$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$(8);
function $soy$$0$0escapeHtml$$($value$$78$$) {
  return"object" === typeof $value$$78$$ && $value$$78$$ && 0 === $value$$78$$.$contentKind$ ? $value$$78$$.content : String($value$$78$$).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$)
}
var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$($ch$$7$$) {
  return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[$ch$$7$$]
}
var $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;
function $annotorious$Hint$$($annotator$$2$$, $parent$$24$$, $opt_msg$$1$$) {
  var $self$$2$$ = this;
  $opt_msg$$1$$ || ($opt_msg$$1$$ = "Click and Drag to Annotate");
  this.element = $goog$soy$renderAsElement$$($annotorious$templates$image$hint$$, {$msg$:$opt_msg$$1$$});
  this.$_annotator$ = $annotator$$2$$;
  this.$_message$ = $query$$inline_145$$(".annotorious-hint-msg", this.element)[0];
  this.$_icon$ = $query$$inline_145$$(".annotorious-hint-icon", this.element)[0];
  this.$_overItemHandler$ = function $this$$_overItemHandler$$() {
    $self$$2$$.show()
  };
  this.$_outOfItemHandler$ = function $this$$_outOfItemHandler$$() {
    $JSCompiler_StaticMethods_hide$$($self$$2$$)
  };
  this.$_attachListeners$();
  $JSCompiler_StaticMethods_hide$$(this);
  $parent$$24$$.appendChild(this.element)
}
$annotorious$Hint$$.prototype.$_attachListeners$ = function $$annotorious$Hint$$$$$_attachListeners$$() {
  var $self$$3$$ = this;
  this.$_mouseOverListener$ = $goog$events$listen$$(this.$_icon$, "mouseover", function() {
    $self$$3$$.show();
    window.clearTimeout($self$$3$$.$_hideTimer$)
  });
  this.$_mouseOutListener$ = $goog$events$listen$$(this.$_icon$, "mouseout", function() {
    $JSCompiler_StaticMethods_hide$$($self$$3$$)
  });
  $JSCompiler_StaticMethods_addHandler$$(this.$_annotator$, $annotorious$events$EventType$MOUSE_OVER_ANNOTATABLE_ITEM$$, this.$_overItemHandler$);
  $JSCompiler_StaticMethods_addHandler$$(this.$_annotator$, $annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATABLE_ITEM$$, this.$_outOfItemHandler$)
};
$annotorious$Hint$$.prototype.$_detachListeners$ = function $$annotorious$Hint$$$$$_detachListeners$$() {
  $goog$events$unlistenByKey$$(this.$_mouseOverListener$);
  $goog$events$unlistenByKey$$(this.$_mouseOutListener$);
  var $handlers$$inline_554_handlers$$inline_559$$ = this.$_annotator$.$_handlers$[$annotorious$events$EventType$MOUSE_OVER_ANNOTATABLE_ITEM$$];
  $handlers$$inline_554_handlers$$inline_559$$ && $goog$array$remove$$($handlers$$inline_554_handlers$$inline_559$$, this.$_overItemHandler$);
  ($handlers$$inline_554_handlers$$inline_559$$ = this.$_annotator$.$_handlers$[$annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATABLE_ITEM$$]) && $goog$array$remove$$($handlers$$inline_554_handlers$$inline_559$$, this.$_outOfItemHandler$)
};
$annotorious$Hint$$.prototype.show = function $$annotorious$Hint$$$$show$() {
  window.clearTimeout(this.$_hideTimer$);
  $goog$style$setOpacity$$(this.$_message$, 0.8);
  var $self$$4$$ = this;
  this.$_hideTimer$ = window.setTimeout(function() {
    $JSCompiler_StaticMethods_hide$$($self$$4$$)
  }, 3E3)
};
function $JSCompiler_StaticMethods_hide$$($JSCompiler_StaticMethods_hide$self$$) {
  window.clearTimeout($JSCompiler_StaticMethods_hide$self$$.$_hideTimer$);
  $goog$style$setOpacity$$($JSCompiler_StaticMethods_hide$self$$.$_message$, 0)
}
;function $annotorious$mediatypes$image$Viewer$$($canvas$$, $annotator$$4$$) {
  this.$_canvas$ = $canvas$$;
  this.$_annotator$ = $annotator$$4$$;
  this.$_annotations$ = [];
  this.$_shapes$ = [];
  this.$_g2d$ = this.$_canvas$.getContext("2d");
  this.$_eventsEnabled$ = $JSCompiler_alias_TRUE$$;
  this.$_keepHighlighted$ = $JSCompiler_alias_FALSE$$;
  var $self$$9$$ = this;
  $goog$events$listen$$(this.$_canvas$, $annotorious$events$ui$EventType$MOVE$$, function($event$$18$$) {
    if($self$$9$$.$_eventsEnabled$) {
      var $topAnnotation$$inline_563$$ = $JSCompiler_StaticMethods_topAnnotationAt$$($self$$9$$, $event$$18$$.offsetX, $event$$18$$.offsetY);
      $topAnnotation$$inline_563$$ ? ($self$$9$$.$_keepHighlighted$ = $self$$9$$.$_keepHighlighted$ && $topAnnotation$$inline_563$$ == $self$$9$$.$_currentAnnotation$, $self$$9$$.$_currentAnnotation$ ? $self$$9$$.$_currentAnnotation$ != $topAnnotation$$inline_563$$ && ($self$$9$$.$_eventsEnabled$ = $JSCompiler_alias_FALSE$$, $self$$9$$.$_annotator$.popup.startHideTimer()) : ($self$$9$$.$_currentAnnotation$ = $topAnnotation$$inline_563$$, $JSCompiler_StaticMethods_redraw$$($self$$9$$), $self$$9$$.$_annotator$.fireEvent($annotorious$events$EventType$MOUSE_OVER_ANNOTATION$$, 
      {annotation:$self$$9$$.$_currentAnnotation$, mouseEvent:$event$$18$$}))) : !$self$$9$$.$_keepHighlighted$ && $self$$9$$.$_currentAnnotation$ && ($self$$9$$.$_eventsEnabled$ = $JSCompiler_alias_FALSE$$, $self$$9$$.$_annotator$.popup.startHideTimer())
    }else {
      $self$$9$$.$_cachedMouseEvent$ = $event$$18$$
    }
  });
  $goog$events$listen$$(this.$_canvas$, $annotorious$events$ui$EventType$DOWN$$, function() {
    $self$$9$$.$_currentAnnotation$ !== $JSCompiler_alias_VOID$$ && $self$$9$$.$_currentAnnotation$ != $JSCompiler_alias_FALSE$$ && $self$$9$$.$_annotator$.fireEvent($annotorious$events$EventType$ANNOTATION_CLICKED$$, $self$$9$$.$_currentAnnotation$)
  });
  $JSCompiler_StaticMethods_addHandler$$($annotator$$4$$, $annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATABLE_ITEM$$, function() {
    delete $self$$9$$.$_currentAnnotation$;
    $self$$9$$.$_eventsEnabled$ = $JSCompiler_alias_TRUE$$
  });
  $JSCompiler_StaticMethods_addHandler$$($annotator$$4$$, $annotorious$events$EventType$BEFORE_POPUP_HIDE$$, function() {
    if(!$self$$9$$.$_eventsEnabled$ && $self$$9$$.$_cachedMouseEvent$) {
      var $previousAnnotation$$ = $self$$9$$.$_currentAnnotation$;
      $self$$9$$.$_currentAnnotation$ = $JSCompiler_StaticMethods_topAnnotationAt$$($self$$9$$, $self$$9$$.$_cachedMouseEvent$.offsetX, $self$$9$$.$_cachedMouseEvent$.offsetY);
      $self$$9$$.$_eventsEnabled$ = $JSCompiler_alias_TRUE$$;
      $previousAnnotation$$ != $self$$9$$.$_currentAnnotation$ ? ($JSCompiler_StaticMethods_redraw$$($self$$9$$), $self$$9$$.$_annotator$.fireEvent($annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATION$$, {annotation:$previousAnnotation$$, mouseEvent:$self$$9$$.$_cachedMouseEvent$}), $self$$9$$.$_annotator$.fireEvent($annotorious$events$EventType$MOUSE_OVER_ANNOTATION$$, {annotation:$self$$9$$.$_currentAnnotation$, mouseEvent:$self$$9$$.$_cachedMouseEvent$})) : $self$$9$$.$_currentAnnotation$ && 
      $self$$9$$.$_annotator$.popup.clearHideTimer()
    }else {
      $JSCompiler_StaticMethods_redraw$$($self$$9$$)
    }
  })
}
function $JSCompiler_StaticMethods_addAnnotation$$($JSCompiler_StaticMethods_addAnnotation$self$$, $annotation$$8$$) {
  $JSCompiler_StaticMethods_addAnnotation$self$$.$_annotations$.push($annotation$$8$$);
  var $shape$$7_viewportShape$$ = $annotation$$8$$.shapes[0];
  if("pixel" != $shape$$7_viewportShape$$.units) {
    if("rect" == $shape$$7_viewportShape$$.type) {
      var $transformed$$inline_567$$ = $JSCompiler_StaticMethods_addAnnotation$self$$.$_annotator$.$fromItemCoordinates$($shape$$7_viewportShape$$.geometry), $shape$$7_viewportShape$$ = new $annotorious$shape$Shape$$("rect", $transformed$$inline_567$$, $JSCompiler_alias_FALSE$$, $shape$$7_viewportShape$$.style)
    }else {
      if("polygon" == $shape$$7_viewportShape$$.type) {
        var $transformedPoints$$inline_568$$ = [];
        $goog$array$forEach$$($shape$$7_viewportShape$$.geometry.points, function($pt$$inline_569$$) {
          $transformedPoints$$inline_568$$.push($JSCompiler_StaticMethods_addAnnotation$self$$.$_annotator$.$fromItemCoordinates$($pt$$inline_569$$))
        });
        $shape$$7_viewportShape$$ = new $annotorious$shape$Shape$$("polygon", new $annotorious$shape$geom$Polygon$$($transformedPoints$$inline_568$$), $JSCompiler_alias_FALSE$$, $shape$$7_viewportShape$$.style)
      }else {
        $shape$$7_viewportShape$$ = $JSCompiler_alias_VOID$$
      }
    }
  }
  $JSCompiler_StaticMethods_addAnnotation$self$$.$_shapes$[$annotorious$shape$hashCode$$($annotation$$8$$.shapes[0])] = $shape$$7_viewportShape$$;
  $JSCompiler_StaticMethods_redraw$$($JSCompiler_StaticMethods_addAnnotation$self$$)
}
$annotorious$mediatypes$image$Viewer$$.prototype.$highlightAnnotation$ = function $$annotorious$mediatypes$image$Viewer$$$$$highlightAnnotation$$($opt_annotation$$1$$) {
  (this.$_currentAnnotation$ = $opt_annotation$$1$$) ? this.$_keepHighlighted$ = $JSCompiler_alias_TRUE$$ : this.$_annotator$.popup.startHideTimer();
  $JSCompiler_StaticMethods_redraw$$(this);
  this.$_eventsEnabled$ = $JSCompiler_alias_TRUE$$
};
function $JSCompiler_StaticMethods_topAnnotationAt$$($JSCompiler_StaticMethods_topAnnotationAt$self_annotations$$2$$, $px$$2$$, $py$$1$$) {
  $JSCompiler_StaticMethods_topAnnotationAt$self_annotations$$2$$ = $JSCompiler_StaticMethods_topAnnotationAt$self_annotations$$2$$.$getAnnotationsAt$($px$$2$$, $py$$1$$);
  if(0 < $JSCompiler_StaticMethods_topAnnotationAt$self_annotations$$2$$.length) {
    return $JSCompiler_StaticMethods_topAnnotationAt$self_annotations$$2$$[0]
  }
}
$annotorious$mediatypes$image$Viewer$$.prototype.$getAnnotationsAt$ = function $$annotorious$mediatypes$image$Viewer$$$$$getAnnotationsAt$$($px$$3$$, $py$$2$$) {
  var $intersectedAnnotations$$ = [], $self$$11$$ = this;
  $goog$array$forEach$$(this.$_annotations$, function($annotation$$10$$) {
    var $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$;
    $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$ = $self$$11$$.$_shapes$[$annotorious$shape$hashCode$$($annotation$$10$$.shapes[0])];
    if("rect" == $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.type) {
      $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$ = $px$$3$$ < $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.geometry.x || $py$$2$$ < $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.geometry.y || $px$$3$$ > $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.geometry.x + $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.geometry.width || $py$$2$$ > $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.geometry.y + 
      $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.geometry.height ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
    }else {
      if("polygon" == $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.type) {
        $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$ = $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.geometry.points;
        for(var $inside$$inline_575$$ = $JSCompiler_alias_FALSE$$, $j$$inline_576$$ = $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.length - 1, $i$$inline_577$$ = 0;$i$$inline_577$$ < $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$.length;$i$$inline_577$$++) {
          $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$i$$inline_577$$].y > $py$$2$$ != $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$j$$inline_576$$].y > $py$$2$$ && $px$$3$$ < ($JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$j$$inline_576$$].x - $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$i$$inline_577$$].x) * ($py$$2$$ - $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$i$$inline_577$$].y) / 
          ($JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$j$$inline_576$$].y - $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$i$$inline_577$$].y) + $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$[$i$$inline_577$$].x && ($inside$$inline_575$$ = !$inside$$inline_575$$), $j$$inline_576$$ = $i$$inline_577$$
        }
        $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$ = $inside$$inline_575$$
      }else {
        $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$ = $JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_inline_result$$3_points$$inline_574_shape$$inline_571$$ && $intersectedAnnotations$$.push($annotation$$10$$)
  });
  $goog$array$ARRAY_PROTOTYPE_$$.sort.call($intersectedAnnotations$$, function($a$$30$$, $b$$25$$) {
    var $shape_a$$ = $self$$11$$.$_shapes$[$annotorious$shape$hashCode$$($a$$30$$.shapes[0])], $shape_b$$ = $self$$11$$.$_shapes$[$annotorious$shape$hashCode$$($b$$25$$.shapes[0])];
    return $annotorious$shape$getSize$$($shape_a$$) - $annotorious$shape$getSize$$($shape_b$$)
  } || $goog$array$defaultCompare$$);
  return $intersectedAnnotations$$
};
function $JSCompiler_StaticMethods__draw$$($JSCompiler_StaticMethods__draw$self$$, $shape$$8$$, $highlight$$1$$) {
  var $arr$$inline_582_selector$$2$$;
  $arr$$inline_582_selector$$2$$ = $JSCompiler_StaticMethods__draw$self$$.$_annotator$.$getAvailableSelectors$();
  var $f$$inline_713_i$$inline_585$$;
  a: {
    $f$$inline_713_i$$inline_585$$ = function $$f$$inline_713_i$$inline_585$$$($selector$$3$$) {
      return $selector$$3$$.getSupportedShapeType() == $shape$$8$$.type
    };
    for(var $l$$inline_715$$ = $arr$$inline_582_selector$$2$$.length, $arr2$$inline_716$$ = $goog$isString$$($arr$$inline_582_selector$$2$$) ? $arr$$inline_582_selector$$2$$.split("") : $arr$$inline_582_selector$$2$$, $i$$inline_717$$ = 0;$i$$inline_717$$ < $l$$inline_715$$;$i$$inline_717$$++) {
      if($i$$inline_717$$ in $arr2$$inline_716$$ && $f$$inline_713_i$$inline_585$$.call($JSCompiler_alias_VOID$$, $arr2$$inline_716$$[$i$$inline_717$$])) {
        $f$$inline_713_i$$inline_585$$ = $i$$inline_717$$;
        break a
      }
    }
    $f$$inline_713_i$$inline_585$$ = -1
  }
  ($arr$$inline_582_selector$$2$$ = 0 > $f$$inline_713_i$$inline_585$$ ? $JSCompiler_alias_NULL$$ : $goog$isString$$($arr$$inline_582_selector$$2$$) ? $arr$$inline_582_selector$$2$$.charAt($f$$inline_713_i$$inline_585$$) : $arr$$inline_582_selector$$2$$[$f$$inline_713_i$$inline_585$$]) ? $arr$$inline_582_selector$$2$$.drawShape($JSCompiler_StaticMethods__draw$self$$.$_g2d$, $shape$$8$$, $highlight$$1$$) : console.log("WARNING unsupported shape type: " + $shape$$8$$.type)
}
function $JSCompiler_StaticMethods_redraw$$($JSCompiler_StaticMethods_redraw$self$$) {
  $JSCompiler_StaticMethods_redraw$self$$.$_g2d$.clearRect(0, 0, $JSCompiler_StaticMethods_redraw$self$$.$_canvas$.width, $JSCompiler_StaticMethods_redraw$self$$.$_canvas$.height);
  $goog$array$forEach$$($JSCompiler_StaticMethods_redraw$self$$.$_annotations$, function($annotation$$11$$) {
    $annotation$$11$$ != $JSCompiler_StaticMethods_redraw$self$$.$_currentAnnotation$ && $JSCompiler_StaticMethods__draw$$($JSCompiler_StaticMethods_redraw$self$$, $JSCompiler_StaticMethods_redraw$self$$.$_shapes$[$annotorious$shape$hashCode$$($annotation$$11$$.shapes[0])])
  });
  if($JSCompiler_StaticMethods_redraw$self$$.$_currentAnnotation$) {
    var $JSCompiler_inline_result$$28_bbox_shape$$9$$ = $JSCompiler_StaticMethods_redraw$self$$.$_shapes$[$annotorious$shape$hashCode$$($JSCompiler_StaticMethods_redraw$self$$.$_currentAnnotation$.shapes[0])];
    $JSCompiler_StaticMethods__draw$$($JSCompiler_StaticMethods_redraw$self$$, $JSCompiler_inline_result$$28_bbox_shape$$9$$, $JSCompiler_alias_TRUE$$);
    if("rect" != $JSCompiler_inline_result$$28_bbox_shape$$9$$.type) {
      if("polygon" == $JSCompiler_inline_result$$28_bbox_shape$$9$$.type) {
        for(var $points$$inline_588$$ = $JSCompiler_inline_result$$28_bbox_shape$$9$$.geometry.points, $left$$inline_589$$ = $points$$inline_588$$[0].x, $right$$inline_590$$ = $points$$inline_588$$[0].x, $top$$inline_591$$ = $points$$inline_588$$[0].y, $bottom$$inline_592$$ = $points$$inline_588$$[0].y, $i$$inline_593$$ = 1;$i$$inline_593$$ < $points$$inline_588$$.length;$i$$inline_593$$++) {
          $points$$inline_588$$[$i$$inline_593$$].x > $right$$inline_590$$ && ($right$$inline_590$$ = $points$$inline_588$$[$i$$inline_593$$].x), $points$$inline_588$$[$i$$inline_593$$].x < $left$$inline_589$$ && ($left$$inline_589$$ = $points$$inline_588$$[$i$$inline_593$$].x), $points$$inline_588$$[$i$$inline_593$$].y > $bottom$$inline_592$$ && ($bottom$$inline_592$$ = $points$$inline_588$$[$i$$inline_593$$].y), $points$$inline_588$$[$i$$inline_593$$].y < $top$$inline_591$$ && ($top$$inline_591$$ = 
          $points$$inline_588$$[$i$$inline_593$$].y)
        }
        $JSCompiler_inline_result$$28_bbox_shape$$9$$ = new $annotorious$shape$Shape$$("rect", new $annotorious$shape$geom$Rectangle$$($left$$inline_589$$, $top$$inline_591$$, $right$$inline_590$$ - $left$$inline_589$$, $bottom$$inline_592$$ - $top$$inline_591$$), $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$28_bbox_shape$$9$$.style)
      }else {
        $JSCompiler_inline_result$$28_bbox_shape$$9$$ = $JSCompiler_alias_VOID$$
      }
    }
    $JSCompiler_inline_result$$28_bbox_shape$$9$$ = $JSCompiler_inline_result$$28_bbox_shape$$9$$.geometry;
    $JSCompiler_StaticMethods_redraw$self$$.$_annotator$.popup.show($JSCompiler_StaticMethods_redraw$self$$.$_currentAnnotation$, new $annotorious$shape$geom$Point$$($JSCompiler_inline_result$$28_bbox_shape$$9$$.x, $JSCompiler_inline_result$$28_bbox_shape$$9$$.y + $JSCompiler_inline_result$$28_bbox_shape$$9$$.height + 5))
  }
}
;var $annotorious$events$ui$hasTouch$$ = "ontouchstart" in window, $annotorious$events$ui$EventType$DOWN$$ = $annotorious$events$ui$hasTouch$$ ? "touchstart" : "mousedown", $annotorious$events$ui$EventType$MOVE$$ = $annotorious$events$ui$hasTouch$$ ? "touchmove" : "mousemove", $annotorious$events$ui$EventType$UP$$ = $annotorious$events$ui$hasTouch$$ ? "touchend" : "mouseup", $annotorious$events$ui$EventType$$ = {$DOWN$:$annotorious$events$ui$EventType$DOWN$$, $OVER$:$annotorious$events$ui$hasTouch$$ ? 
"touchenter" : "mouseover", $MOVE$:$annotorious$events$ui$EventType$MOVE$$, $UP$:$annotorious$events$ui$EventType$UP$$, $OUT$:$annotorious$events$ui$hasTouch$$ ? "touchleave" : "mouseout", $CLICK$:$annotorious$events$ui$hasTouch$$ ? "touchend" : "click"};
function $annotorious$events$ui$sanitizeCoordinates$$($event$$22$$, $parent$$25$$) {
  var $points$$8$$ = $JSCompiler_alias_FALSE$$;
  $event$$22$$.offsetX = $event$$22$$.offsetX ? $event$$22$$.offsetX : $JSCompiler_alias_FALSE$$;
  $event$$22$$.offsetY = $event$$22$$.offsetY ? $event$$22$$.offsetY : $JSCompiler_alias_FALSE$$;
  return $points$$8$$ = (!$event$$22$$.offsetX || !$event$$22$$.offsetY) && $event$$22$$.$event_$.changedTouches ? {x:$event$$22$$.$event_$.changedTouches[0].clientX - $annotorious$dom$getOffset$$($parent$$25$$).left, y:$event$$22$$.$event_$.changedTouches[0].clientY - $annotorious$dom$getOffset$$($parent$$25$$).top} : {x:$event$$22$$.offsetX, y:$event$$22$$.offsetY}
}
;function $annotorious$plugins$selection$RectDragSelector$$() {
}
$JSCompiler_prototypeAlias$$ = $annotorious$plugins$selection$RectDragSelector$$.prototype;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($annotator$$5$$, $canvas$$1$$) {
  this.$_OUTLINE$ = "#000000";
  this.$_STROKE$ = "#ffffff";
  this.$_FILL$ = $JSCompiler_alias_FALSE$$;
  this.$_HI_OUTLINE$ = "#000000";
  this.$_HI_STROKE$ = "#fff000";
  this.$_HI_FILL$ = $JSCompiler_alias_FALSE$$;
  this.$_HI_OUTLINE_WIDTH$ = this.$_STROKE_WIDTH$ = this.$_OUTLINE_WIDTH$ = 1;
  this.$_HI_STROKE_WIDTH$ = 1.2;
  this.$_canvas$ = $canvas$$1$$;
  this.$_annotator$ = $annotator$$5$$;
  this.$_g2d$ = $canvas$$1$$.getContext("2d");
  this.$_g2d$.lineWidth = 1;
  this.$_enabled$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$_attachListeners$ = function $$JSCompiler_prototypeAlias$$$$_attachListeners$$() {
  var $self$$14$$ = this, $canvas$$2$$ = this.$_canvas$;
  this.$_mouseMoveListener$ = $goog$events$listen$$(this.$_canvas$, $annotorious$events$ui$EventType$MOVE$$, function($event$$23_points$$9_width$$18$$) {
    console.log($event$$23_points$$9_width$$18$$);
    $event$$23_points$$9_width$$18$$ = $annotorious$events$ui$sanitizeCoordinates$$($event$$23_points$$9_width$$18$$, $canvas$$2$$);
    if($self$$14$$.$_enabled$) {
      $self$$14$$.$_opposite$ = {x:$event$$23_points$$9_width$$18$$.x, y:$event$$23_points$$9_width$$18$$.y};
      $self$$14$$.$_g2d$.clearRect(0, 0, $canvas$$2$$.width, $canvas$$2$$.height);
      var $event$$23_points$$9_width$$18$$ = $self$$14$$.$_opposite$.x - $self$$14$$.$_anchor$.x, $height$$23$$ = $self$$14$$.$_opposite$.y - $self$$14$$.$_anchor$.y;
      $self$$14$$.drawShape($self$$14$$.$_g2d$, {type:"rect", geometry:{x:0 < $event$$23_points$$9_width$$18$$ ? $self$$14$$.$_anchor$.x : $self$$14$$.$_opposite$.x, y:0 < $height$$23$$ ? $self$$14$$.$_anchor$.y : $self$$14$$.$_opposite$.y, width:Math.abs($event$$23_points$$9_width$$18$$), height:Math.abs($height$$23$$)}, style:{}})
    }
  });
  this.$_mouseUpListener$ = $goog$events$listen$$($canvas$$2$$, $annotorious$events$ui$EventType$UP$$, function($annotations$$3_event$$24$$) {
    var $points$$10$$ = $annotorious$events$ui$sanitizeCoordinates$$($annotations$$3_event$$24$$, $canvas$$2$$), $shape$$10$$ = $self$$14$$.getShape(), $annotations$$3_event$$24$$ = $annotations$$3_event$$24$$.$event_$ ? $annotations$$3_event$$24$$.$event_$ : $annotations$$3_event$$24$$;
    $self$$14$$.$_enabled$ = $JSCompiler_alias_FALSE$$;
    $shape$$10$$ ? ($self$$14$$.$_detachListeners$(), $self$$14$$.$_annotator$.fireEvent($annotorious$events$EventType$SELECTION_COMPLETED$$, {mouseEvent:$annotations$$3_event$$24$$, shape:$shape$$10$$, viewportBounds:$self$$14$$.getViewportBounds()})) : ($self$$14$$.$_annotator$.fireEvent($annotorious$events$EventType$SELECTION_CANCELED$$), $annotations$$3_event$$24$$ = $self$$14$$.$_annotator$.$getAnnotationsAt$($points$$10$$.x, $points$$10$$.y), 0 < $annotations$$3_event$$24$$.length && $self$$14$$.$_annotator$.$highlightAnnotation$($annotations$$3_event$$24$$[0]))
  })
};
$JSCompiler_prototypeAlias$$.$_detachListeners$ = function $$JSCompiler_prototypeAlias$$$$_detachListeners$$() {
  this.$_mouseMoveListener$ && ($goog$events$unlistenByKey$$(this.$_mouseMoveListener$), delete this.$_mouseMoveListener$);
  this.$_mouseUpListener$ && ($goog$events$unlistenByKey$$(this.$_mouseUpListener$), delete this.$_mouseUpListener$)
};
$JSCompiler_prototypeAlias$$.getSupportedShapeType = function $$JSCompiler_prototypeAlias$$$getSupportedShapeType$() {
  return"rect"
};
$JSCompiler_prototypeAlias$$.startSelection = function $$JSCompiler_prototypeAlias$$$startSelection$($x$$74$$, $y$$42$$) {
  var $startPoint$$2$$ = {x:$x$$74$$, y:$y$$42$$};
  this.$_enabled$ = $JSCompiler_alias_TRUE$$;
  this.$_attachListeners$($startPoint$$2$$);
  this.$_anchor$ = new $annotorious$shape$geom$Point$$($x$$74$$, $y$$42$$);
  this.$_annotator$.fireEvent($annotorious$events$EventType$SELECTION_STARTED$$, {offsetX:$x$$74$$, offsetY:$y$$42$$});
  $goog$style$setStyle$$(document.body, "-webkit-user-select", "none")
};
$JSCompiler_prototypeAlias$$.stopSelection = function $$JSCompiler_prototypeAlias$$$stopSelection$() {
  this.$_detachListeners$();
  this.$_g2d$.clearRect(0, 0, this.$_canvas$.width, this.$_canvas$.height);
  $goog$style$setStyle$$(document.body, "-webkit-user-select", "auto");
  delete this.$_opposite$
};
$JSCompiler_prototypeAlias$$.getShape = function $$JSCompiler_prototypeAlias$$$getShape$() {
  if(this.$_opposite$ && 3 < Math.abs(this.$_opposite$.x - this.$_anchor$.x) && 3 < Math.abs(this.$_opposite$.y - this.$_anchor$.y)) {
    var $rect$$7_viewportBounds$$ = this.getViewportBounds(), $rect$$7_viewportBounds$$ = this.$_annotator$.$toItemCoordinates$({x:$rect$$7_viewportBounds$$.left, y:$rect$$7_viewportBounds$$.top, width:$rect$$7_viewportBounds$$.right - $rect$$7_viewportBounds$$.left, height:$rect$$7_viewportBounds$$.bottom - $rect$$7_viewportBounds$$.top});
    return new $annotorious$shape$Shape$$("rect", $rect$$7_viewportBounds$$)
  }
};
$JSCompiler_prototypeAlias$$.getViewportBounds = function $$JSCompiler_prototypeAlias$$$getViewportBounds$() {
  var $right$$11$$, $left$$10$$;
  this.$_opposite$.x > this.$_anchor$.x ? ($right$$11$$ = this.$_opposite$.x, $left$$10$$ = this.$_anchor$.x) : ($right$$11$$ = this.$_anchor$.x, $left$$10$$ = this.$_opposite$.x);
  var $top$$8$$, $bottom$$7$$;
  this.$_opposite$.y > this.$_anchor$.y ? ($top$$8$$ = this.$_anchor$.y, $bottom$$7$$ = this.$_opposite$.y) : ($top$$8$$ = this.$_opposite$.y, $bottom$$7$$ = this.$_anchor$.y);
  return{top:$top$$8$$, right:$right$$11$$, bottom:$bottom$$7$$, left:$left$$10$$}
};
$JSCompiler_prototypeAlias$$.drawShape = function $$JSCompiler_prototypeAlias$$$drawShape$($g2d$$, $geom$$1_shape$$11$$, $highlight$$2_stroke$$) {
  var $fill$$, $outline$$, $outline_width$$, $stroke_width$$;
  $geom$$1_shape$$11$$.style || ($geom$$1_shape$$11$$.style = {});
  "rect" == $geom$$1_shape$$11$$.type && ($highlight$$2_stroke$$ ? ($fill$$ = $geom$$1_shape$$11$$.style.hi_fill || this.$_HI_FILL$, $highlight$$2_stroke$$ = $geom$$1_shape$$11$$.style.hi_stroke || this.$_HI_STROKE$, $outline$$ = $geom$$1_shape$$11$$.style.hi_outline || this.$_HI_OUTLINE$, $outline_width$$ = $geom$$1_shape$$11$$.style.hi_outline_width || this.$_HI_OUTLINE_WIDTH$, $stroke_width$$ = $geom$$1_shape$$11$$.style.hi_stroke_width || this.$_HI_STROKE_WIDTH$) : ($fill$$ = $geom$$1_shape$$11$$.style.fill || 
  this.$_FILL$, $highlight$$2_stroke$$ = $geom$$1_shape$$11$$.style.stroke || this.$_STROKE$, $outline$$ = $geom$$1_shape$$11$$.style.outline || this.$_OUTLINE$, $outline_width$$ = $geom$$1_shape$$11$$.style.outline_width || this.$_OUTLINE_WIDTH$, $stroke_width$$ = $geom$$1_shape$$11$$.style.stroke_width || this.$_STROKE_WIDTH$), $geom$$1_shape$$11$$ = $geom$$1_shape$$11$$.geometry, $outline$$ && ($g2d$$.lineJoin = "round", $g2d$$.lineWidth = $outline_width$$, $g2d$$.strokeStyle = $outline$$, $g2d$$.strokeRect($geom$$1_shape$$11$$.x + 
  $outline_width$$ / 2, $geom$$1_shape$$11$$.y + $outline_width$$ / 2, $geom$$1_shape$$11$$.width - $outline_width$$, $geom$$1_shape$$11$$.height - $outline_width$$)), $highlight$$2_stroke$$ && ($g2d$$.lineJoin = "miter", $g2d$$.lineWidth = $stroke_width$$, $g2d$$.strokeStyle = $highlight$$2_stroke$$, $g2d$$.strokeRect($geom$$1_shape$$11$$.x + $outline_width$$ + $stroke_width$$ / 2, $geom$$1_shape$$11$$.y + $outline_width$$ + $stroke_width$$ / 2, $geom$$1_shape$$11$$.width - 2 * $outline_width$$ - 
  $stroke_width$$, $geom$$1_shape$$11$$.height - 2 * $outline_width$$ - $stroke_width$$)), $fill$$ && ($g2d$$.lineJoin = "miter", $g2d$$.lineWidth = $stroke_width$$, $g2d$$.fillStyle = $fill$$, $g2d$$.fillRect($geom$$1_shape$$11$$.x + $outline_width$$ + $stroke_width$$ / 2, $geom$$1_shape$$11$$.y + $outline_width$$ + $stroke_width$$ / 2, $geom$$1_shape$$11$$.width - 2 * $outline_width$$ - $stroke_width$$, $geom$$1_shape$$11$$.height - 2 * $outline_width$$ - $stroke_width$$)))
};
function $annotorious$templates$image$canvas$$($opt_data$$5$$) {
  return'<canvas class="annotorious-item annotorious-opacity-fade" style="position:absolute; top:0px; left:0px; width:' + $soy$$0$0escapeHtml$$($opt_data$$5$$.width) + "px; height:" + $soy$$0$0escapeHtml$$($opt_data$$5$$.height) + 'px; z-index:0" width="' + $soy$$0$0escapeHtml$$($opt_data$$5$$.width) + '" height="' + $soy$$0$0escapeHtml$$($opt_data$$5$$.height) + '"></canvas>'
}
function $annotorious$templates$image$hint$$($opt_data$$6$$) {
  return'<div class="annotorious-hint" style="white-space:nowrap; position:absolute; top:0px; left:0px; pointer-events:none;"><div class="annotorious-hint-msg annotorious-opacity-fade">' + $soy$$0$0escapeHtml$$($opt_data$$6$$.$msg$) + '</div><div class="annotorious-hint-icon" style="pointer-events:auto"></div></div>'
}
;function $annotorious$okfn$ImagePlugin$$($image$$3$$, $okfnAnnotator$$) {
  function $isMouseEventInside$$($event$$28$$) {
    var $isMouseInside$$ = $JSCompiler_alias_FALSE$$, $relatedTarget$$3$$ = $event$$28$$.relatedTarget || $JSCompiler_alias_FALSE$$;
    if(!$relatedTarget$$3$$) {
      return $JSCompiler_alias_TRUE$$
    }
    $goog$dom$contains$$($annotationLayer$$1$$, $relatedTarget$$3$$) && ($isMouseInside$$ = $JSCompiler_alias_TRUE$$);
    var $JSCompiler_temp$$16_annotation$$inline_613$$;
    if($JSCompiler_temp$$16_annotation$$inline_613$$ = $goog$dom$contains$$($okfnAnnotator$$.editor.element[0], $relatedTarget$$3$$)) {
      $JSCompiler_temp$$16_annotation$$inline_613$$ = $okfnAnnotator$$.editor.annotation, $JSCompiler_temp$$16_annotation$$inline_613$$ = !$JSCompiler_temp$$16_annotation$$inline_613$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_temp$$16_annotation$$inline_613$$.src == $image$$3$$.src
    }
    $JSCompiler_temp$$16_annotation$$inline_613$$ && ($isMouseInside$$ = $JSCompiler_alias_TRUE$$);
    $goog$dom$contains$$($okfnAnnotator$$.viewer.element[0], $relatedTarget$$3$$) && $JSCompiler_StaticMethods_isViewerCurrentlyOwned$$($popup$$) && ($isMouseInside$$ = $JSCompiler_alias_TRUE$$);
    $event$$28$$.$event_$ && $event$$28$$.$event_$.touches && ($isMouseInside$$ = $JSCompiler_alias_FALSE$$);
    return $isMouseInside$$
  }
  var $baseOffset$$1$$ = $annotorious$dom$getOffset$$($okfnAnnotator$$.element[0].firstChild), $eventBroker$$ = new $annotorious$events$EventBroker$$, $annotationLayer$$1$$ = $goog$dom$createDom$$("div", "yuma-annotationlayer");
  $goog$style$setStyle$$($annotationLayer$$1$$, "position", "relative");
  var $parent$$inline_602_w$$inline_596$$ = $image$$3$$.width, $opt_h$$inline_597$$ = $image$$3$$.height;
  if($opt_h$$inline_597$$ == $JSCompiler_alias_VOID$$) {
    throw Error("missing height argument");
  }
  $annotationLayer$$1$$.style.width = $goog$style$getPixelStyleValue_$$($parent$$inline_602_w$$inline_596$$, $JSCompiler_alias_TRUE$$);
  $annotationLayer$$1$$.style.height = $goog$style$getPixelStyleValue_$$($opt_h$$inline_597$$, $JSCompiler_alias_TRUE$$);
  ($parent$$inline_602_w$$inline_596$$ = $image$$3$$.parentNode) && $parent$$inline_602_w$$inline_596$$.replaceChild($annotationLayer$$1$$, $image$$3$$);
  $annotationLayer$$1$$.appendChild($image$$3$$);
  var $viewCanvas$$ = $goog$soy$renderAsElement$$($annotorious$templates$image$canvas$$, {width:$image$$3$$.width, height:$image$$3$$.height});
  $annotationLayer$$1$$.appendChild($viewCanvas$$);
  var $popup$$ = new $annotorious$okfn$Popup$$($image$$3$$, $okfnAnnotator$$, $eventBroker$$, $baseOffset$$1$$), $editCanvas$$ = $goog$soy$renderAsElement$$($annotorious$templates$image$canvas$$, {width:$image$$3$$.width, height:$image$$3$$.height});
  $annotorious$events$ui$hasTouch$$ || $goog$style$showElement$$($editCanvas$$, $JSCompiler_alias_FALSE$$);
  $annotationLayer$$1$$.appendChild($editCanvas$$);
  var $viewer$$ = new $annotorious$mediatypes$image$Viewer$$($viewCanvas$$, $eventBroker$$), $selector$$9$$ = new $annotorious$plugins$selection$RectDragSelector$$;
  $selector$$9$$.init($eventBroker$$, $editCanvas$$);
  new $annotorious$Hint$$($eventBroker$$, $annotationLayer$$1$$);
  $eventBroker$$.$toItemCoordinates$ = function $$eventBroker$$$$toItemCoordinates$$($coords$$1$$) {
    return $coords$$1$$
  };
  $eventBroker$$.$fromItemCoordinates$ = function $$eventBroker$$$$fromItemCoordinates$$($coords$$2$$) {
    return $coords$$2$$
  };
  $eventBroker$$.$getAvailableSelectors$ = function $$eventBroker$$$$getAvailableSelectors$$() {
    return[$selector$$9$$]
  };
  $eventBroker$$.$highlightAnnotation$ = function $$eventBroker$$$$highlightAnnotation$$($annotation$$13$$) {
    $viewer$$.$highlightAnnotation$($annotation$$13$$)
  };
  $eventBroker$$.popup = $popup$$;
  $eventBroker$$.$getAnnotationsAt$ = function $$eventBroker$$$$getAnnotationsAt$$($x$$75$$, $y$$43$$) {
    return $viewer$$.$getAnnotationsAt$($x$$75$$, $y$$43$$)
  };
  $goog$events$listen$$($annotationLayer$$1$$, $annotorious$events$ui$EventType$$.$OVER$, function($event$$29$$) {
    $isMouseEventInside$$($event$$29$$) || $eventBroker$$.fireEvent($annotorious$events$EventType$MOUSE_OVER_ANNOTATABLE_ITEM$$)
  });
  $goog$events$listen$$($annotationLayer$$1$$, $annotorious$events$ui$EventType$$.$OUT$, function($event$$30$$) {
    $isMouseEventInside$$($event$$30$$) || $eventBroker$$.fireEvent($annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATABLE_ITEM$$)
  });
  $popup$$.$_mouseoverHandlers$.push(function($event$$31$$) {
    $isMouseEventInside$$($event$$31$$) || $eventBroker$$.fireEvent($annotorious$events$EventType$MOUSE_OVER_ANNOTATABLE_ITEM$$)
  });
  $popup$$.$_mouseoutHandlers$.push(function($event$$32$$) {
    $isMouseEventInside$$($event$$32$$) || $eventBroker$$.fireEvent($annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATABLE_ITEM$$)
  });
  $goog$events$listen$$($annotorious$events$ui$hasTouch$$ ? $editCanvas$$ : $viewCanvas$$, $annotorious$events$ui$EventType$$.$DOWN$, function($event$$33$$) {
    var $points$$11$$ = $annotorious$events$ui$sanitizeCoordinates$$($event$$33$$, $viewCanvas$$);
    $event$$33$$.preventDefault();
    $goog$style$showElement$$($editCanvas$$, $JSCompiler_alias_TRUE$$);
    $viewer$$.$highlightAnnotation$($JSCompiler_alias_VOID$$);
    $selector$$9$$.startSelection($points$$11$$.x, $points$$11$$.y)
  });
  $JSCompiler_StaticMethods_addHandler$$($eventBroker$$, $annotorious$events$EventType$MOUSE_OVER_ANNOTATABLE_ITEM$$, function() {
    $okfnAnnotator$$.clearViewerHideTimer();
    $goog$style$setOpacity$$($viewCanvas$$, 1)
  });
  $JSCompiler_StaticMethods_addHandler$$($eventBroker$$, $annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATABLE_ITEM$$, function() {
    $goog$style$setOpacity$$($viewCanvas$$, 0.4)
  });
  $JSCompiler_StaticMethods_addHandler$$($eventBroker$$, $annotorious$events$EventType$SELECTION_COMPLETED$$, function($event$$34_x$$76$$) {
    var $annotation$$15$$ = {src:$image$$3$$.src, shapes:[$event$$34_x$$76$$.shape]};
    $okfnAnnotator$$.publish("beforeAnnotationCreated", $annotation$$15$$);
    var $imgOffset_y$$44$$ = $annotorious$dom$getOffset$$($image$$3$$), $geometry$$1$$ = $event$$34_x$$76$$.shape.geometry, $event$$34_x$$76$$ = $geometry$$1$$.x + $imgOffset_y$$44$$.left - $baseOffset$$1$$.left + window.pageXOffset + 16, $imgOffset_y$$44$$ = $geometry$$1$$.y + $geometry$$1$$.height + $imgOffset_y$$44$$.top + window.pageYOffset - $baseOffset$$1$$.top + 5;
    $okfnAnnotator$$.showEditor($annotation$$15$$, {top:window.pageYOffset - $baseOffset$$1$$.top, left:0});
    $goog$style$setPosition$$($okfnAnnotator$$.editor.element[0], $event$$34_x$$76$$, $imgOffset_y$$44$$)
  });
  $JSCompiler_StaticMethods_addHandler$$($eventBroker$$, $annotorious$events$EventType$SELECTION_CANCELED$$, function() {
    $annotorious$events$ui$hasTouch$$ || $goog$style$showElement$$($editCanvas$$, $JSCompiler_alias_FALSE$$);
    $selector$$9$$.stopSelection()
  });
  $okfnAnnotator$$.viewer.on("edit", function($annotation$$16_x$$77$$) {
    if($annotation$$16_x$$77$$.url == $image$$3$$.src) {
      $goog$style$showElement$$($editCanvas$$, $JSCompiler_alias_TRUE$$);
      $viewer$$.$highlightAnnotation$($JSCompiler_alias_VOID$$);
      var $imgOffset$$1_y$$45$$ = $annotorious$dom$getOffset$$($image$$3$$), $geometry$$2$$ = $annotation$$16_x$$77$$.shapes[0].geometry, $annotation$$16_x$$77$$ = $geometry$$2$$.x + $imgOffset$$1_y$$45$$.left - $baseOffset$$1$$.left + 16, $imgOffset$$1_y$$45$$ = $geometry$$2$$.y + $geometry$$2$$.height + $imgOffset$$1_y$$45$$.top - $baseOffset$$1$$.top + window.pageYOffset + 5;
      $goog$style$setPosition$$($okfnAnnotator$$.editor.element[0], 0, window.pageYOffset - $baseOffset$$1$$.top);
      $okfnAnnotator$$.editor.show();
      $goog$style$setPosition$$($okfnAnnotator$$.editor.element[0], $annotation$$16_x$$77$$, $imgOffset$$1_y$$45$$)
    }
  });
  $okfnAnnotator$$.subscribe("annotationCreated", function($annotation$$17$$) {
    if($annotation$$17$$.src == $image$$3$$.src && ($selector$$9$$.stopSelection(), $annotation$$17$$.src == $image$$3$$.src)) {
      var $res$$inline_622$$ = {}, $key$$inline_623$$;
      for($key$$inline_623$$ in $annotation$$17$$) {
        $res$$inline_622$$[$key$$inline_623$$] = $annotation$$17$$[$key$$inline_623$$]
      }
      $JSCompiler_StaticMethods_addAnnotation$$($viewer$$, $res$$inline_622$$)
    }
  });
  $okfnAnnotator$$.subscribe("annotationsLoaded", function($annotations$$4$$) {
    $goog$array$forEach$$($annotations$$4$$, function($annotation$$18$$) {
      $annotation$$18$$.src == $image$$3$$.src && $JSCompiler_StaticMethods_addAnnotation$$($viewer$$, $annotation$$18$$)
    })
  });
  $okfnAnnotator$$.subscribe("annotationDeleted", function($annotation$$19$$) {
    $annotation$$19$$.src == $image$$3$$.src && ($annotation$$19$$ == $viewer$$.$_currentAnnotation$ && delete $viewer$$.$_currentAnnotation$, $goog$array$remove$$($viewer$$.$_annotations$, $annotation$$19$$), delete $viewer$$.$_shapes$[$annotorious$shape$hashCode$$($annotation$$19$$.shapes[0])], $JSCompiler_StaticMethods_redraw$$($viewer$$));
    $eventBroker$$.fireEvent($annotorious$events$EventType$BEFORE_POPUP_HIDE$$)
  });
  $okfnAnnotator$$.subscribe("annotationEditorHidden", function() {
    $annotorious$events$ui$hasTouch$$ || $goog$style$showElement$$($editCanvas$$, $JSCompiler_alias_FALSE$$);
    $selector$$9$$.stopSelection();
    $eventBroker$$.fireEvent($annotorious$events$EventType$BEFORE_POPUP_HIDE$$)
  })
}
var $JSCompiler_temp_const$$6$$ = window.Annotator.Plugin;
function $AnnotoriousImagePlugin$$inline_628$$($element$$inline_629$$) {
  this.$_el$ = $element$$inline_629$$
}
$AnnotoriousImagePlugin$$inline_628$$.prototype.pluginInit = function $$AnnotoriousImagePlugin$$inline_628$$$$pluginInit$() {
  var $self$$inline_630$$ = this;
  $goog$array$forEach$$(this.$_el$.getElementsByTagName("img"), function($img$$inline_631$$) {
    new $annotorious$okfn$ImagePlugin$$($img$$inline_631$$, $self$$inline_630$$.annotator)
  })
};
$JSCompiler_temp_const$$6$$.AnnotoriousImagePlugin = $AnnotoriousImagePlugin$$inline_628$$;
function $annotorious$okfn$Popup$$($image$$4$$, $okfnAnnotator$$1$$, $eventBroker$$1$$, $baseOffset$$2$$) {
  this.$_image$ = $image$$4$$;
  this.$_okfnAnnotator$ = $okfnAnnotator$$1$$;
  this.$_eventBroker$ = $eventBroker$$1$$;
  this.$_baseOffset$ = $baseOffset$$2$$;
  this.$_cancelHide$ = $JSCompiler_alias_FALSE$$;
  this.$_mouseoverHandlers$ = [];
  this.$_mouseoutHandlers$ = [];
  var $self$$19$$ = this;
  $goog$events$listen$$(this.$_okfnAnnotator$.viewer.element[0], $annotorious$events$ui$EventType$$.$OVER$, function($event$$35$$) {
    $JSCompiler_StaticMethods_isViewerCurrentlyOwned$$($self$$19$$) && ($self$$19$$.clearHideTimer(), $goog$array$forEach$$($self$$19$$.$_mouseoverHandlers$, function($handler$$11$$) {
      $handler$$11$$($event$$35$$)
    }))
  });
  $goog$events$listen$$(this.$_okfnAnnotator$.viewer.element[0], $annotorious$events$ui$EventType$$.$OUT$, function($event$$36$$) {
    $JSCompiler_StaticMethods_isViewerCurrentlyOwned$$($self$$19$$) && ($okfnAnnotator$$1$$.clearViewerHideTimer(), $self$$19$$.startHideTimer(), $goog$array$forEach$$($self$$19$$.$_mouseoutHandlers$, function($handler$$12$$) {
      $handler$$12$$($event$$36$$)
    }))
  })
}
function $JSCompiler_StaticMethods_isViewerCurrentlyOwned$$($JSCompiler_StaticMethods_isViewerCurrentlyOwned$self$$) {
  var $annotations$$5$$ = $JSCompiler_StaticMethods_isViewerCurrentlyOwned$self$$.$_okfnAnnotator$.viewer.annotations;
  return!$annotations$$5$$ || 1 > $annotations$$5$$.length ? $JSCompiler_alias_FALSE$$ : $annotations$$5$$[0].src == $JSCompiler_StaticMethods_isViewerCurrentlyOwned$self$$.$_image$.src
}
$annotorious$okfn$Popup$$.prototype.startHideTimer = function $$annotorious$okfn$Popup$$$$startHideTimer$() {
  var $arr$$inline_725$$ = $goog$dom$classes$get$$(this.$_okfnAnnotator$.viewer.element[0]);
  if(!(0 <= $goog$array$indexOf$$($arr$$inline_725$$, "annotator-hide")) && (this.$_cancelHide$ = $JSCompiler_alias_FALSE$$, !this.$_popupHideTimer$)) {
    var $self$$20$$ = this;
    this.$_popupHideTimer$ = window.setTimeout(function() {
      $self$$20$$.$_eventBroker$.fireEvent($annotorious$events$EventType$BEFORE_POPUP_HIDE$$);
      !$self$$20$$.$_cancelHide$ && $JSCompiler_StaticMethods_isViewerCurrentlyOwned$$($self$$20$$) && ($goog$dom$classes$add$$($self$$20$$.$_okfnAnnotator$.viewer.element[0], "annotator-hide"), $self$$20$$.$_okfnAnnotator$.viewer.annotations = [], delete $self$$20$$.$_popupHideTimer$)
    }, 300)
  }
};
$annotorious$okfn$Popup$$.prototype.clearHideTimer = function $$annotorious$okfn$Popup$$$$clearHideTimer$() {
  this.$_cancelHide$ = $JSCompiler_alias_TRUE$$;
  this.$_popupHideTimer$ && (window.clearTimeout(this.$_popupHideTimer$), delete this.$_popupHideTimer$)
};
$annotorious$okfn$Popup$$.prototype.show = function $$annotorious$okfn$Popup$$$$show$($annotation$$20$$, $xy$$5$$) {
  $goog$dom$classes$remove$$(this.$_okfnAnnotator$.viewer.element[0], "annotator-hide");
  var $imgOffset$$2$$ = $annotorious$dom$getOffset$$(this.$_image$);
  $goog$style$setPosition$$(this.$_okfnAnnotator$.viewer.element[0], 0, window.pageYOffset - this.$_baseOffset$.top);
  this.$_okfnAnnotator$.viewer.load([$annotation$$20$$]);
  $goog$style$setPosition$$(this.$_okfnAnnotator$.viewer.element[0], $imgOffset$$2$$.left - this.$_baseOffset$.left + $xy$$5$$.x + 16, $imgOffset$$2$$.top + window.pageYOffset - this.$_baseOffset$.top + $xy$$5$$.y);
  this.clearHideTimer()
};
$goog$userAgent$IE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.3");
function $annotorious$dom$getOffset$$($el$$29$$) {
  for(var $_x$$ = 0, $_y$$ = 0;$el$$29$$ && !isNaN($el$$29$$.offsetLeft) && !isNaN($el$$29$$.offsetTop);) {
    $_x$$ += $el$$29$$.offsetLeft - $el$$29$$.scrollLeft, $_y$$ += $el$$29$$.offsetTop - $el$$29$$.scrollTop, $el$$29$$ = $el$$29$$.offsetParent
  }
  return{top:$_y$$, left:$_x$$}
}
;function $annotorious$events$EventBroker$$() {
  this.$_handlers$ = []
}
function $JSCompiler_StaticMethods_addHandler$$($JSCompiler_StaticMethods_addHandler$self$$, $type$$85$$, $handler$$15$$) {
  $JSCompiler_StaticMethods_addHandler$self$$.$_handlers$[$type$$85$$] || ($JSCompiler_StaticMethods_addHandler$self$$.$_handlers$[$type$$85$$] = []);
  $JSCompiler_StaticMethods_addHandler$self$$.$_handlers$[$type$$85$$].push($handler$$15$$)
}
$annotorious$events$EventBroker$$.prototype.fireEvent = function $$annotorious$events$EventBroker$$$$fireEvent$($handlers$$1_type$$87$$, $opt_event$$1$$, $opt_extra$$1$$) {
  var $cancelEvent$$1$$ = $JSCompiler_alias_FALSE$$;
  ($handlers$$1_type$$87$$ = this.$_handlers$[$handlers$$1_type$$87$$]) && $goog$array$forEach$$($handlers$$1_type$$87$$, function($handler$$17_retVal$$1$$) {
    $handler$$17_retVal$$1$$ = $handler$$17_retVal$$1$$($opt_event$$1$$, $opt_extra$$1$$);
    $handler$$17_retVal$$1$$ !== $JSCompiler_alias_VOID$$ && !$handler$$17_retVal$$1$$ && ($cancelEvent$$1$$ = $JSCompiler_alias_TRUE$$)
  });
  return $cancelEvent$$1$$
};
var $annotorious$events$EventType$MOUSE_OVER_ANNOTATABLE_ITEM$$ = "onMouseOverItem", $annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATABLE_ITEM$$ = "onMouseOutOfItem", $annotorious$events$EventType$MOUSE_OVER_ANNOTATION$$ = "onMouseOverAnnotation", $annotorious$events$EventType$MOUSE_OUT_OF_ANNOTATION$$ = "onMouseOutOfAnnotation", $annotorious$events$EventType$SELECTION_STARTED$$ = "onSelectionStarted", $annotorious$events$EventType$SELECTION_CANCELED$$ = "onSelectionCanceled", $annotorious$events$EventType$SELECTION_COMPLETED$$ = 
"onSelectionCompleted", $annotorious$events$EventType$BEFORE_POPUP_HIDE$$ = "beforePopupHide", $annotorious$events$EventType$ANNOTATION_CLICKED$$ = "onAnnotationClicked";

