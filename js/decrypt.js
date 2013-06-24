function decrypt(key,coded){ 
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
  return link;
}

function decryptURL(key,coded, altlinktext){ 
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
  if(altlinktext == 'mail')return '<a href="mailto:'+link+'">'+link+'</a>';
  if(altlinktext)return '<a href="'+link+'">'+altlinktext+'</a>';
  return '<a href="'+link+'">'+link+'</a>';
}

