<?$filelist = glob("*.html");?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru"> 
<head>
  <title>Project pages</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <style type="text/css">
    body {
      margin:100px;
      font:normal 13px/20px Arial, Tahoma, Verdana, sans-serif;
      color:#999;
      text-align:left;
      background:#FFF;
    }
    a {
      color:#1a5385;
      text-decoration:underline;
      font-weight:bold;
    }
    a:hover {
      color:#2981cd;
    }
    h1 {
      font-size:18px;
      line-height:22px;
      font-weight:normal;
      margin:0;
      padding:0;
      color:#111;
    }
  </style>
</head> 
<body>
  <h1>Project pages</h1>
  <ol>
    <?foreach($filelist as $file):?>
    <li><a href="<?=$file?>"><?=$file?></a> &mdash; last update <?=date ("d.m.Y H:i:s", filemtime($file))?>.</li>
    <?endforeach;?>
  </ol>
</body>
</html>